import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats, SUBJECTS } from "../data";
import { allChapters } from "../data/types";
import { Icon, Logo, LogoMark, Spark, SubjectGlyph } from "../components/ui";

function AnimatedNumber({ to }: { to: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1100);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{v}</>;
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.span ref={ref} className="tabular-nums">
      {inView ? <AnimatedNumber to={to} /> : 0}{suffix}
    </motion.span>
  );
}

const floaters = [
  { ch: "√", x: "6%", y: "18%", s: "text-3xl", c: "text-gold-400/40", d: "0s" },
  { ch: "π", x: "88%", y: "12%", s: "text-4xl", c: "text-lagoon-400/40", d: "1.2s" },
  { ch: "x²", x: "12%", y: "70%", s: "text-2xl", c: "text-lagoon-400/35", d: "0.6s" },
  { ch: "Δ", x: "80%", y: "64%", s: "text-3xl", c: "text-coral-400/35", d: "1.8s" },
  { ch: "∈", x: "46%", y: "8%", s: "text-2xl", c: "text-gold-400/30", d: "2.4s" },
  { ch: "∞", x: "94%", y: "84%", s: "text-3xl", c: "text-gold-400/30", d: "0.9s" },
  { ch: "H₂O", x: "3%", y: "44%", s: "text-xl", c: "text-coral-400/30", d: "1.5s" },
];

function ThalesDoodle() {
  return (
    <svg viewBox="0 0 260 200" className="w-full max-w-[330px]" fill="none" aria-hidden>
      <path className="draw-loop" style={{ ["--dash" as string]: 700, stroke: "#F5A524", strokeWidth: 2.5, strokeLinecap: "round" }}
        d="M30 180 L130 20 L230 180 Z" />
      <path className="draw-loop" style={{ ["--dash" as string]: 300, stroke: "#2FC9BC", strokeWidth: 2.2, strokeLinecap: "round", animationDelay: "0.6s" }}
        d="M80 100 L180 100" />
      <text x="14" y="194" fill="#5d8291" fontSize="13" fontFamily="Bricolage Grotesque">A</text>
      <text x="126" y="14" fill="#5d8291" fontSize="13" fontFamily="Bricolage Grotesque">B</text>
      <text x="236" y="194" fill="#5d8291" fontSize="13" fontFamily="Bricolage Grotesque">C</text>
      <text x="64" y="92" fill="#f5a524" fontSize="12" fontFamily="Bricolage Grotesque">M</text>
      <text x="188" y="92" fill="#2fc9bc" fontSize="12" fontFamily="Bricolage Grotesque">N</text>
      <text x="76" y="130" fill="#a8c3cd" fontSize="11" fontFamily="Instrument Sans">
        AM/AB = AN/AC = MN/BC
      </text>
    </svg>
  );
}

export default function Landing({ onLogin, onExplore }: { onLogin: () => void; onExplore: () => void }) {
  return (
    <div className="bg-notebook min-h-screen overflow-x-clip">
      {/* ---------- NAV ---------- */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-40 border-b border-ink-700/50 bg-ink-900/85 backdrop-blur-md"
      >
        <div className="mx-auto flex h-[74px] max-w-6xl items-center justify-between px-5">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-semibold text-ink-200 md:flex">
            <a href="#programme" className="transition hover:text-gold-300">Programme</a>
            <a href="#methode" className="transition hover:text-gold-300">Méthode</a>
            <a href="#biblio" className="transition hover:text-gold-300">Bibliothèque</a>
          </nav>
          <button
            onClick={onLogin}
            className="group inline-flex items-center gap-2 rounded-xl bg-gold-500 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-lg shadow-gold-500/20 transition hover:bg-gold-400 hover:shadow-gold-400/30"
          >
            Connexion
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </motion.header>

      {/* ---------- OUVERTURE ---------- */}
      <section className="relative">
        <div className="bg-grid-faint pointer-events-none absolute inset-0" />
        {floaters.map((f, i) => (
          <span key={i}
            className={`animate-float pointer-events-none absolute select-none font-display font-bold ${f.s} ${f.c}`}
            style={{ left: f.x, top: f.y, animationDelay: f.d }}>
            {f.ch}
          </span>
        ))}

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold-500/30 bg-ink-800/80 py-1.5 pl-2 pr-4 text-xs font-bold text-gold-300"
            >
              <span className="flex h-6 items-center rounded-full bg-gold-500/15 px-2 text-[10px] tracking-widest">MAROC</span>
              Programme officiel · 3ème année collège
            </motion.div>

            <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-paper-50 sm:text-6xl lg:text-[4.1rem]">
              <motion.span initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.65 }} className="block">
                Ta 3<sup className="text-gold-400">ème</sup> année,
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34, duration: 0.65 }} className="block">
                <span className="stroke-underline">maîtrisée</span> de A à Z.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48, duration: 0.6 }}
              className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-200"
            >
              <span className="font-arabic text-lg text-gold-300">نور</span> — la lumière sur ton chemin vers
              l'examen régional. Toutes les matières, toutes les leçons expliquées, des exercices corrigés
              et des PDF à emporter partout.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onLogin}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gold-500 px-7 py-3.5 font-display text-[15px] font-bold text-ink-950 shadow-xl shadow-gold-500/25 transition hover:-translate-y-0.5 hover:bg-gold-400"
              >
                Commencer gratuitement
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2.5 rounded-xl border border-ink-600 bg-ink-800/70 px-7 py-3.5 font-display text-[15px] font-bold text-ink-100 transition hover:-translate-y-0.5 hover:border-lagoon-500/50 hover:text-lagoon-300"
              >
                <Icon name="book" className="h-4 w-4" />
                Explorer le programme
              </button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-12 grid max-w-md grid-cols-3 gap-6"
            >
              {[
                { v: stats.subjects, s: "", l: "matières" },
                { v: stats.chapters, s: "+", l: "chapitres" },
                { v: stats.docs, s: "", l: "PDFs prêts" },
              ].map((x) => (
                <div key={x.l} className="border-l-2 border-gold-500/40 pl-3">
                  <dt className="font-display text-3xl font-extrabold text-paper-50">
                    <CountUp to={x.v} suffix={x.s} />
                  </dt>
                  <dd className="text-xs font-bold uppercase tracking-wider text-ink-400">{x.l}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <div className="relative">
              <div className="animate-spin-slow absolute -inset-10 rounded-full border border-dashed border-gold-500/20" />
              <div className="absolute -inset-24 rounded-full border border-ink-700/60" />
              <motion.div
                animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex h-52 w-52 items-center justify-center"
              >
                <LogoMark size={200} className="drop-shadow-2xl" />
                <span className="animate-pulse-ring absolute -right-2 -top-2 flex h-11 w-11 items-center justify-center rounded-full bg-lagoon-500 text-ink-950 shadow-lg">
                  <Spark className="h-5 w-5" color="#07161c" />
                </span>
              </motion.div>

              {[
                { s: SUBJECTS[0], r: "-rotate-6", pos: "-left-24 top-2", d: 0 },
                { s: SUBJECTS[1], r: "rotate-3", pos: "-right-24 top-24", d: 0.7 },
                { s: SUBJECTS[2], r: "-rotate-2", pos: "left-6 -bottom-16", d: 1.4 },
              ].map(({ s, r, pos, d }) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + d, duration: 0.6 }}
                  className={`absolute ${pos} ${r} z-20 flex items-center gap-2.5 rounded-xl border border-ink-700 bg-ink-800/95 px-3.5 py-2.5 shadow-xl shadow-black/30`}
                  style={{ ["--rot" as string]: "0deg" }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: `${s.color}22`, color: s.color }}>
                    <SubjectGlyph icon={s.icon} className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-xs font-bold text-ink-100">
                    {s.name.split(" ")[0]}
                    <span className="block text-[10px] font-semibold text-ink-400">{allChapters(s).length} chapitres</span>
                  </span>
                </motion.div>
              ))}

              <div className="absolute -bottom-32 right-0">
                <ThalesDoodle />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------- MARQUEE ---------- */}
        <div className="relative border-y border-ink-700/60 bg-ink-850/80 py-3.5">
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
              {[...SUBJECTS, ...SUBJECTS].map((s, i) => (
                <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                  <span className="font-display text-sm font-bold tracking-wide text-ink-200">
                    {s.name.toUpperCase()}
                  </span>
                  <span className="font-arabic text-sm text-ink-400">{s.ar}</span>
                  <Spark className="h-3 w-3" color="#F5A524" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PROGRAMME ---------- */}
      <section id="programme" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-lagoon-400">
              <Spark className="h-3.5 w-3.5" color="#2FC9BC" /> LE PROGRAMME COMPLET
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-4xl font-extrabold tracking-tight text-paper-50 sm:text-5xl">
              9 matières. Zéro impasse.
            </motion.h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-400">
            Conforme au programme officiel marocain de la 3ème année collège — semestre par semestre,
            chapitre par chapitre.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.map((s, i) => (
            <motion.button
              key={s.id}
              onClick={onLogin}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/70 p-6 text-left transition-colors hover:border-ink-600"
            >
              <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" style={{ background: s.color }} />
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border"
                  style={{ color: s.color, background: `${s.color}18`, borderColor: `${s.color}33` }}>
                  <SubjectGlyph icon={s.icon} className="h-6 w-6" />
                </span>
                <span className="font-arabic text-lg" style={{ color: s.color }}>{s.ar}</span>
              </div>
              <h3 className="font-display mt-5 text-lg font-bold text-paper-50">{s.name}</h3>
              <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink-400">{s.description}</p>
              <div className="mt-5 flex items-center justify-between text-xs font-bold">
                <span className="rounded-full bg-ink-700/70 px-2.5 py-1 text-ink-200">
                  {allChapters(s).length} chapitres
                </span>
                <span className="flex items-center gap-1.5 text-ink-200 transition-colors group-hover:text-gold-300">
                  Voir les cours <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ---------- MÉTHODE ---------- */}
      <section id="methode" className="border-y border-ink-700/50 bg-ink-850/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display max-w-lg text-4xl font-extrabold tracking-tight text-paper-50 sm:text-5xl">
            Apprendre, s'entraîner, <span className="text-gold-400">réussir.</span>
          </motion.h2>

          <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-ink-600 md:block" />
            {[
              { n: "01", t: "Cours expliqués", d: "Chaque chapitre est découpé en idées claires, avec les formules encadrées et les pièges signalés avant qu'ils ne te coûtent des points.", c: "#F5A524" },
              { n: "02", t: "Exercices corrigés", d: "Des exercices type examen régional avec leur correction détaillée — révèle la solution seulement après avoir cherché.", c: "#2FC9BC" },
              { n: "03", t: "PDFs à emporter", d: "Télécharge chaque leçon et les examens corrigés en PDF, lis-les dans l'app ou hors connexion, le soir avant l'épreuve.", c: "#FF6B5E" },
            ].map((st, i) => (
              <motion.div
                key={st.n}
                initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.14, duration: 0.55 }}
                className="relative"
              >
                <span className="font-display relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-2 bg-ink-900 text-lg font-extrabold"
                  style={{ color: st.c, borderColor: st.c }}>
                  {st.n}
                </span>
                <h3 className="font-display mt-5 text-xl font-bold text-paper-50">{st.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-400">{st.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BIBLIO TEASER ---------- */}
      <section id="biblio" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-coral-400">
              <Spark className="h-3.5 w-3.5" color="#FF6B5E" /> BIBLIOTHÈQUE PDF
            </p>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-paper-50 sm:text-5xl">
              Tes leçons, en vrais PDF.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-400">
              Chaque leçon et chaque examen régional corrigé se transforme en document PDF propre :
              consultable page par page dans l'application, téléchargeable sur ton téléphone.
            </p>
            <button onClick={onLogin}
              className="group mt-8 inline-flex items-center gap-2.5 rounded-xl border border-coral-500/40 bg-coral-500/10 px-6 py-3 font-display text-sm font-bold text-coral-300 transition hover:bg-coral-500/20">
              <Icon name="library" className="h-4 w-4" />
              Ouvrir la bibliothèque
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <div className="relative flex h-[340px] items-center justify-center">
            {[
              { t: "Examen régional 2025", s: "Mathématiques", c: "#F5A524", r: "-rotate-8", x: "-translate-x-40" },
              { t: "Théorème de Thalès", s: "Cours · 6 pages", c: "#FF6B5E", r: "rotate-0 z-10", x: "", main: true },
              { t: "Lois de Mendel", s: "SVT · Corrigé", c: "#2FBF71", r: "rotate-8", x: "translate-x-40" },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, rotate: 0, zIndex: 30 }}
                className={`paper-texture absolute ${d.r} ${d.x} w-44 rounded-lg p-4 shadow-2xl shadow-black/50 ${d.main ? "z-10" : ""}`}
              >
                <div className="h-2 w-10 rounded-full" style={{ background: d.c }} />
                <div className="font-display mt-3 text-[13px] font-extrabold leading-snug text-ink-900">{d.t}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink-600">{d.s}</div>
                <div className="mt-3 space-y-1.5">
                  <div className="h-1 w-full rounded bg-ink-900/10" />
                  <div className="h-1 w-4/5 rounded bg-ink-900/10" />
                  <div className="h-1 w-3/5 rounded bg-ink-900/10" />
                </div>
                <div className="mt-3 flex items-center gap-1 text-[9px] font-bold text-ink-600">
                  <LogoMark size={14} /> NOOR 3AC
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EXAMEN CTA ---------- */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-gradient-to-br from-ink-800 to-ink-850 p-10 sm:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-lagoon-500/10 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.25em] text-gold-400">OBJECTIF : EXAMEN RÉGIONAL</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold leading-tight text-paper-50 sm:text-4xl">
                Le jour J approche.<br />Sois prêt·e avant tout le monde.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-200">
                Examens régionaux corrigés, planning de révision et méthode de rappel actif — tout est déjà
                organisé pour toi dans NOOR.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <ExamCountdown />
              <button onClick={onLogin}
                className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3 font-display text-sm font-bold text-ink-950 transition hover:bg-gold-400">
                Je commence maintenant <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-ink-700/50 bg-ink-950/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-10">
          <div className="flex items-center gap-4">
            <LogoMark size={36} />
            <div>
              <p className="font-display text-sm font-extrabold text-paper-50">NOOR 3AC</p>
              <p className="font-arabic text-xs text-ink-400">نور — صُنعت لتلاميذ الثالثة إعدادي بالمغرب</p>
            </div>
          </div>
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} NOOR 3AC · Fait avec <Spark className="inline h-3 w-3 align-[-2px]" /> pour les élèves du Maroc
          </p>
        </div>
      </footer>
    </div>
  );
}

function ExamCountdown() {
  const target = new Date("2026-06-10T08:00:00");
  const now = new Date();
  const days = Math.max(0, Math.ceil((target.getTime() - now.getTime()) / 86400000));
  return (
    <div className="flex items-center gap-3">
      {[
        { v: String(days).padStart(2, "0"), l: "jours" },
        { v: "9", l: "matières" },
        { v: "1", l: "objectif" },
      ].map((x, i) => (
        <div key={i} className="rounded-2xl border border-ink-600 bg-ink-900/80 px-5 py-3 text-center">
          <div className="font-display text-3xl font-extrabold text-gold-400">{x.v}</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-ink-400">{x.l}</div>
        </div>
      ))}
    </div>
  );
}
