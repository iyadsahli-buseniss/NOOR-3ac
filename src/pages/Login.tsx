import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { backend, type User } from "../lib/backend";
import { Icon, Logo, LogoMark, Spark, toast } from "../components/ui";

type Step = "identify" | "otp" | "success";

const RESEND_SECONDS = 30;

export default function Login({ onSuccess }: { onSuccess: (u: User) => void }) {
  const [step, setStep] = useState<Step>("identify");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // OTP state
  const [code, setCode] = useState("");
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [sms, setSms] = useState<{ code: string } | null>(null);
  const [shake, setShake] = useState(false);
  const [verdict, setVerdict] = useState<"idle" | "error" | "ok">("idle");
  const [resendIn, setResendIn] = useState(RESEND_SECONDS);
  const boxesRef = useRef<(HTMLInputElement | null)[]>([]);

  const cleanPhone = phone.replace(/\s/g, "");
  const phoneValid = /^0[5-7]\d{8}$/.test(cleanPhone);

  const requestCode = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await backend.requestCode(cleanPhone);
      setCode(res.code);
      setSms({ code: res.code });
      setStep("otp");
      setVerdict("idle");
      setDigits(["", "", "", ""]);
      setResendIn(RESEND_SECONDS);
      setTimeout(() => boxesRef.current[0]?.focus(), 350);
    } finally {
      setLoading(false);
    }
  }, [cleanPhone]);

  // resend countdown
  useEffect(() => {
    if (step !== "otp" || resendIn <= 0) return;
    const t = setInterval(() => setResendIn((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [step, resendIn]);

  const submitOtp = useCallback(
    async (value: string) => {
      if (value.length < 4 || loading) return;
      setLoading(true);
      const res = await backend.verifyCode(cleanPhone, value, name.trim());
      if (res.ok && res.user) {
        setVerdict("ok");
        const u = res.user;
        setTimeout(() => setStep("success"), 700);
        setTimeout(() => onSuccess(u), 2200);
      } else {
        setVerdict("error");
        setShake(true);
        setTimeout(() => {
          setShake(false);
          setDigits(["", "", "", ""]);
          setVerdict("idle");
          setLoading(false);
          setError("Code incorrect — vérifie la notification SMS.");
          boxesRef.current[0]?.focus();
        }, 550);
      }
    },
    [cleanPhone, loading, name, onSuccess]
  );

  const onDigit = (i: number, v: string) => {
    const d = v.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[i] = d;
    setDigits(next);
    setError("");
    if (d && i < 3) boxesRef.current[i + 1]?.focus();
    const joined = next.join("");
    if (joined.length === 4) submitOtp(joined);
  };

  const onKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) boxesRef.current[i - 1]?.focus();
  };

  const onPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    if (!pasted) return;
    const next = ["", "", "", ""].map((_, i) => pasted[i] ?? "");
    setDigits(next);
    boxesRef.current[Math.min(3, pasted.length - 1)]?.focus();
    if (pasted.length === 4) submitOtp(pasted);
  };

  const fillFromSms = () => {
    if (!sms) return;
    const next = sms.code.split("");
    setDigits(next);
    toast("Code rempli depuis la notification", "ok");
    submitOtp(sms.code);
  };

  return (
    <div className="bg-notebook relative min-h-screen overflow-hidden">
      <div className="bg-grid-faint pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid min-h-screen max-w-6xl lg:grid-cols-[1fr_1fr]">
        {/* ================= Brand panel ================= */}
        <div className="relative hidden flex-col justify-between border-r border-ink-700/50 p-12 lg:flex">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Logo size={46} />
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-10 w-fit"
            >
              <div className="animate-spin-slow absolute -inset-8 rounded-full border border-dashed border-gold-500/25" />
              <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                <LogoMark size={132} className="drop-shadow-2xl" />
              </motion.div>
              <Spark className="animate-twinkle absolute -right-6 -top-4 h-5 w-5" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
              className="font-display text-4xl font-extrabold leading-tight tracking-tight text-paper-50"
            >
              Une seule porte<br />vers le <span className="stroke-underline">régional.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400"
            >
              Connecte-toi, choisis ta matière et reprends exactement là où tu t'étais arrêté.
              Ta progression est sauvegardée sur cet appareil.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-8 space-y-3.5"
            >
              {[
                "9 matières du programme officiel 3AC",
                "Examens régionaux corrigés en PDF",
                "Suivi de progression chapitre par chapitre",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-semibold text-ink-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lagoon-500/15 text-lagoon-400">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </li>
              ))}
            </motion.ul>
          </div>

          <p className="text-xs text-ink-400">
            <span className="font-arabic text-sm text-gold-400">« اطلبوا العلم من المهد إلى اللحد »</span>
            <span className="ml-2">— Apprends, chaque jour.</span>
          </p>
        </div>

        {/* ================= Auth card ================= */}
        <div className="flex items-center justify-center px-5 py-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[440px]"
          >
            {/* glow frame */}
            <div className="absolute -inset-[1.5px] rounded-3xl bg-gradient-to-br from-gold-500/60 via-ink-600 to-lagoon-500/50 opacity-70" />
            <div className="relative rounded-3xl border border-ink-700 bg-ink-850/95 p-8 shadow-2xl shadow-black/40 backdrop-blur sm:p-10">
              <div className="mb-8 flex items-center justify-between lg:hidden">
                <Logo size={36} />
              </div>

              <AnimatePresence mode="wait">
                {/* ---------- STEP 1 : identité ---------- */}
                {step === "identify" && (
                  <motion.div
                    key="identify"
                    initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -26 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h2 className="font-display text-2xl font-extrabold text-paper-50">Connexion élève</h2>
                    <p className="mt-1.5 text-sm text-ink-400">
                      Entre ton nom et ton numéro : on t'envoie un code de vérification.
                    </p>

                    <form
                      className="mt-7 space-y-5"
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!name.trim()) { setError("Entre ton nom d'abord."); return; }
                        if (!phoneValid) { setError("Numéro marocain attendu : 06 12 34 56 78"); return; }
                        requestCode();
                      }}
                    >
                      <FloatingInput
                        label="Nom complet"
                        value={name}
                        onChange={(v) => { setName(v); setError(""); }}
                        icon="star"
                      />
                      <FloatingInput
                        label="Téléphone (06 XX XX XX XX)"
                        value={phone}
                        onChange={(v) => { setPhone(v.replace(/[^\d\s]/g, "")); setError(""); }}
                        icon="phone"
                        prefix="+212"
                        inputMode="tel"
                        hint={phoneValid ? "Numéro valide" : phone ? "Format : 06 12 34 56 78" : undefined}
                        hintOk={phoneValid}
                      />

                      {error && <p className="animate-pop text-xs font-bold text-coral-400">{error}</p>}

                      <button
                        type="submit"
                        disabled={loading || !name.trim() || !phoneValid}
                        className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gold-500 py-3.5 font-display text-[15px] font-bold text-ink-950 shadow-lg shadow-gold-500/20 transition enabled:hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {loading ? <Spinner /> : (
                          <>
                            Recevoir le code
                            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </form>

                    <p className="mt-6 flex items-center justify-center gap-2 text-center text-[11px] font-semibold text-ink-400">
                      <Icon name="lock" className="h-3.5 w-3.5" />
                      Démo : aucun vrai SMS n'est envoyé — le code s'affiche dans une notification simulée.
                    </p>
                  </motion.div>
                )}

                {/* ---------- STEP 2 : OTP ---------- */}
                {step === "otp" && (
                  <motion.div
                    key="otp"
                    initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -26 }}
                    transition={{ duration: 0.35 }}
                  >
                    <button
                      onClick={() => { setStep("identify"); setSms(null); }}
                      className="mb-5 flex items-center gap-1.5 text-xs font-bold text-ink-400 transition hover:text-gold-300"
                    >
                      <Icon name="arrow" className="h-3.5 w-3.5 rotate-180" /> Modifier le numéro
                    </button>

                    <h2 className="font-display text-2xl font-extrabold text-paper-50">Code de vérification</h2>
                    <p className="mt-1.5 text-sm text-ink-400">
                      Un code à 4 chiffres a été envoyé au{" "}
                      <span className="font-bold text-paper-50">+212 {cleanPhone}</span>
                    </p>

                    {/* boxes */}
                    <div
                      className={`${shake ? "animate-shake" : ""} mt-8 flex justify-between gap-3`}
                      onPaste={onPaste}
                    >
                      {digits.map((d, i) => (
                        <div key={i} className="relative flex-1">
                          <input
                            ref={(el) => { boxesRef.current[i] = el; }}
                            value={d}
                            onChange={(e) => onDigit(i, e.target.value)}
                            onKeyDown={(e) => onKey(i, e)}
                            onFocus={(e) => e.target.select()}
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength={1}
                            aria-label={`Chiffre ${i + 1}`}
                            className={`font-display peer h-16 w-full rounded-2xl border-2 bg-ink-900 text-center text-2xl font-extrabold text-paper-50 caret-transparent transition-all duration-200 focus:scale-[1.04] ${
                              verdict === "error"
                                ? "border-coral-500/70 text-coral-300"
                                : d && verdict === "ok"
                                ? "border-lagoon-500 text-lagoon-300"
                                : d
                                ? "border-gold-500/70"
                                : "border-ink-600 focus:border-gold-500"
                            }`}
                          />
                          {!d && verdict !== "ok" && document.activeElement === boxesRef.current[i] && (
                            <span className="otp-caret pointer-events-none absolute inset-0" />
                          )}
                          {verdict === "ok" && d && (
                            <motion.span
                              initial={{ scale: 0 }} animate={{ scale: 1 }}
                              transition={{ delay: i * 0.09, type: "spring", stiffness: 500, damping: 20 }}
                              className="pointer-events-none absolute -bottom-2 left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-lagoon-500 text-ink-950"
                            >
                              <Icon name="check" className="h-2.5 w-2.5" />
                            </motion.span>
                          )}
                        </div>
                      ))}
                    </div>

                    {error && <p className="animate-pop mt-4 text-center text-xs font-bold text-coral-400">{error}</p>}

                    {loading && (
                      <p className="mt-5 flex items-center justify-center gap-2 text-xs font-bold text-gold-300">
                        <Spinner small /> Vérification du code…
                      </p>
                    )}

                    {/* resend */}
                    <div className="mt-7 flex items-center justify-center gap-3 text-xs font-bold">
                      <span className="text-ink-400">Code non reçu ?</span>
                      {resendIn > 0 ? (
                        <span className="flex items-center gap-1.5 text-ink-200">
                          <span className="relative flex h-6 w-6 items-center justify-center">
                            <svg viewBox="0 0 24 24" className="absolute inset-0 -rotate-90">
                              <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(168,195,205,0.2)" strokeWidth="2.5" />
                              <circle
                                cx="12" cy="12" r="10" fill="none" stroke="#F5A524" strokeWidth="2.5" strokeLinecap="round"
                                strokeDasharray={62.8} strokeDashoffset={62.8 * (1 - resendIn / RESEND_SECONDS)}
                                style={{ transition: "stroke-dashoffset 1s linear" }}
                              />
                            </svg>
                            <span className="tabular-nums text-[10px] text-gold-300">{resendIn}</span>
                          </span>
                          Renvoyer dans {resendIn}s
                        </span>
                      ) : (
                        <button
                          onClick={requestCode}
                          className="flex items-center gap-1.5 rounded-lg border border-gold-500/40 bg-gold-500/10 px-3 py-1.5 text-gold-300 transition hover:bg-gold-500/20"
                        >
                          <Icon name="refresh" className="h-3.5 w-3.5" /> Renvoyer le code
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* ---------- STEP 3 : succès ---------- */}
                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <motion.svg
                      viewBox="0 0 96 96" className="h-28 w-28"
                      initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <motion.circle
                        cx="48" cy="48" r="42" fill="none" stroke="#16A9A0" strokeWidth="5" strokeLinecap="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                      <motion.path
                        d="M30 49 L43 62 L67 36" fill="none" stroke="#2FC9BC" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.55, duration: 0.45, ease: "easeOut" }}
                      />
                      {[0, 60, 120, 180, 240, 300].map((a, i) => (
                        <motion.circle
                          key={i} cx="48" cy="6" r="2.6" fill={i % 2 ? "#F5A524" : "#2FC9BC"}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: [0, 1, 0], scale: [0, 1.4, 0] }}
                          transition={{ delay: 0.7 + i * 0.05, duration: 0.7 }}
                          transform={`rotate(${a} 48 48)`}
                        />
                      ))}
                    </motion.svg>
                    <motion.h2
                      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                      className="font-display mt-6 text-2xl font-extrabold text-paper-50"
                    >
                      Bienvenue, {name.trim().split(" ")[0]} !
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                      className="mt-2 text-sm font-semibold text-ink-400"
                    >
                      Ouverture de ton espace de révision…
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= Simulated SMS notification ================= */}
      <AnimatePresence>
        {sms && step === "otp" && (
          <motion.button
            key="sms"
            onClick={fillFromSms}
            initial={{ y: -140, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -140, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 26, delay: 0.55 }}
            whileHover={{ scale: 1.02 }}
            className="fixed left-1/2 top-5 z-[80] w-[min(92vw,380px)] -translate-x-1/2 rounded-2xl border border-lagoon-500/40 bg-ink-800/98 p-4 text-left shadow-2xl shadow-black/50 backdrop-blur"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/15">
                <LogoMark size={30} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
                    Messages · maintenant
                  </p>
                  <Spark className="animate-twinkle h-3 w-3" color="#2FC9BC" />
                </div>
                <p className="mt-1 text-sm font-semibold text-ink-100">
                  NOOR 3AC : ton code de vérification est{" "}
                  <span className="font-display text-lg font-extrabold tracking-[0.2em] text-gold-300">
                    {sms.code}
                  </span>
                </p>
                <p className="mt-1 text-[11px] font-bold text-lagoon-400">
                  Touche pour remplir automatiquement →
                </p>
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- helpers ---------------- */
function FloatingInput({
  label, value, onChange, icon, prefix, inputMode = "text", hint, hintOk,
}: {
  label: string; value: string; onChange: (v: string) => void; icon: "star" | "phone" | "lock";
  prefix?: string; inputMode?: "text" | "tel"; hint?: string; hintOk?: boolean;
}) {
  const active = value.length > 0;
  return (
    <label className="block">
      <div className={`relative rounded-xl border-2 bg-ink-900 transition-colors focus-within:border-gold-500 ${
        active ? "border-ink-600" : "border-ink-600"
      }`}>
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400">
          <Icon name={icon} className="h-4.5 w-4.5" />
        </span>
        {prefix && (
          <span className="absolute left-10 top-1/2 -translate-y-1/2 border-r border-ink-600 pr-2.5 text-sm font-bold text-ink-200">
            {prefix}
          </span>
        )}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          inputMode={inputMode}
          placeholder={label}
          className={`w-full bg-transparent py-4 text-[15px] font-semibold text-paper-50 placeholder-ink-400 transition-all focus:placeholder-ink-200 ${prefix ? "pl-[5.4rem] pr-4" : "pl-11 pr-4"}`}
        />
        {hint && (
          <span className={`absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-bold ${hintOk ? "text-lagoon-400" : "text-ink-400"}`}>
            {hintOk ? "✓ " : ""}{hint}
          </span>
        )}
      </div>
    </label>
  );
}

function Spinner({ small = false }: { small?: boolean }) {
  return (
    <span className={`inline-block animate-spin rounded-full border-2 border-ink-950/30 border-t-ink-950 ${small ? "h-4 w-4" : "h-5 w-5"}`} />
  );
}
