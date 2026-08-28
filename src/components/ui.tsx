import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SubjectIcon } from "../data/types";

/* ================= Logo ================= */
export function LogoMark({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden>
      <rect width="64" height="64" rx="15" fill="#0E2530" />
      <rect width="64" height="64" rx="15" fill="none" stroke="rgba(245,165,36,0.25)" />
      {/* open book */}
      <path d="M12 47c7-4.5 13-4.5 20 0 7-4.5 13-4.5 20 0" fill="none" stroke="#16A9A0" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M32 47V38" stroke="#16A9A0" strokeWidth="3" strokeLinecap="round" />
      {/* the "3" */}
      <path
        d="M24 14c11-6 24 0 24 10 0 5.5-4.5 8.5-11 9.4 6.5.9 11 4 11 9.4 0 10-13 16-24 10"
        fill="none" stroke="#F5A524" strokeWidth="5" strokeLinecap="round"
      />
      {/* spark */}
      <path d="M52 8l1.7 3.8L58 13.5l-4.3 1.7L52 19l-1.7-3.8L46 13.5l4.3-1.7z" fill="#2FC9BC" />
    </svg>
  );
}

export function Logo({ size = 40, wordmark = true }: { size?: number; wordmark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark size={size} />
      {wordmark && (
        <span className="leading-none">
          <span className="font-display block text-[1.35rem] font-extrabold tracking-tight text-paper-50">
            NOOR
          </span>
          <span className="mt-1 block text-[0.62rem] font-bold tracking-[0.28em] text-gold-400">
            3AC · <span className="font-arabic text-[0.78rem] tracking-normal">نور</span>
          </span>
        </span>
      )}
    </span>
  );
}

/* ================= Spark divider ================= */
export function Spark({ className = "", color = "#F5A524" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden>
      <path d="M12 2l2.1 7.9L22 12l-7.9 2.1L12 22l-2.1-7.9L2 12l7.9-2.1z" />
    </svg>
  );
}

/* ================= Subject icons ================= */
const iconPaths: Record<SubjectIcon, React.ReactNode> = {
  calc: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2.5" />
      <path d="M8 7.5h8" />
      <path d="M8.2 12h.01M12 12h.01M15.8 12h.01M8.2 16h.01M12 16h.01M15.8 16h.01" strokeWidth="2.4" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3h5" />
      <path d="M10.5 3v5.2L5.6 17.5A2.4 2.4 0 0 0 7.8 21h8.4a2.4 2.4 0 0 0 2.2-3.5L13.5 8.2V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 9 12 4 20 4c0 8-5 15-15 15z" />
      <path d="M5 19c3-5 6-8 10-10" />
    </>
  ),
  quill: (
    <>
      <path d="M20 4c-6 0-12 4-14 12l-2 4 4-2c8-2 12-8 12-14z" />
      <path d="M4 20c4-6 8-10 12-12" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a7.5 7.5 0 0 1-7.5 7.5c-1.2 0-2.4-.3-3.4-.8L4 20l1.8-5.4A7.5 7.5 0 1 1 21 11.5z" />
      <path d="M9 10.5h6M9 13.5h3.5" />
    </>
  ),
  scroll: (
    <>
      <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 0 2 2H8a2 2 0 0 1-2-2z" />
      <path d="M6 4a2 2 0 0 0-2 2v2h4" />
      <path d="M9.5 9.5h6M9.5 13h6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.8 2.6 4 5.8 4 9s-1.2 6.4-4 9c-2.8-2.6-4-5.8-4-9s1.2-6.4 4-9z" />
    </>
  ),
  chip: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 3v3.5M15 3v3.5M9 17.5V21M15 17.5V21M3 9h3.5M3 15h3.5M17.5 9H21M17.5 15H21" />
    </>
  ),
  crescent: (
    <>
      <path d="M19 14.5A8 8 0 0 1 9.5 5a8 8 0 1 0 9.5 9.5z" />
      <path d="M17 4.5l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z" strokeWidth="1.4" />
    </>
  ),
};

export function SubjectGlyph({ icon, className = "" }: { icon: SubjectIcon; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {iconPaths[icon]}
    </svg>
  );
}

/* ================= UI icons ================= */
type IconName = "arrow" | "check" | "download" | "book" | "library" | "logout" | "home" |
  "chevron" | "play" | "phone" | "lock" | "x" | "menu" | "doc" | "star" | "clock" | "refresh" | "grid";

const uiPaths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M4 12h15m-6-7 7 7-7 7" />,
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  download: <path d="M12 3v11m0 0 4.5-4.5M12 14 7.5 9.5M4 20h16" />,
  book: <path d="M4 5a2 2 0 0 1 2-2h5v16H6a2 2 0 0 0-2 2zm16 0a2 2 0 0 0-2-2h-5v16h5a2 2 0 0 1 2 2z" />,
  library: <path d="M4 4h4v16H4zM10 4h4v16h-4zM16.5 4.8l3.9.9-3.5 15.5-3.9-.9z" />,
  logout: <path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3m5-4 5-5-5-5m5 5H10" />,
  home: <path d="M3 11 12 3l9 8m-16 0v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  play: <path d="M7 4.5v15l12-7.5z" />,
  phone: <path d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 15h6" />,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  doc: <path d="M6 2.5h8L19 8v13a.9.9 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1zm7 0V8h5M9 13h6M9 17h6" />,
  star: <path d="M12 2.5l2.6 6.2 6.6.5-5 4.3 1.5 6.5L12 16.5l-5.7 3.5 1.5-6.5-5-4.3 6.6-.5z" />,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5.5l3.5 2" /></>,
  refresh: <path d="M20 12a8 8 0 1 1-2.3-5.6M20 3v5h-5" />,
  grid: <path d="M4 4h6.5v6.5H4zM13.5 4H20v6.5h-6.5zM4 13.5h6.5V20H4zM13.5 13.5H20V20h-6.5z" />,
};

export function Icon({ name, className = "w-4 h-4" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {uiPaths[name]}
    </svg>
  );
}

/* ================= Toasts ================= */
export type Toast = { id: number; msg: string; kind: "ok" | "err" | "info" };
let toastId = 0;
export function toast(msg: string, kind: Toast["kind"] = "info") {
  window.dispatchEvent(new CustomEvent("noor-toast", { detail: { id: ++toastId, msg, kind } }));
}

export function Toaster() {
  const [items, setItems] = useState<Toast[]>([]);
  useEffect(() => {
    const onToast = (e: Event) => {
      const t = (e as CustomEvent<Toast>).detail;
      setItems((xs) => [...xs.slice(-2), t]);
      setTimeout(() => setItems((xs) => xs.filter((x) => x.id !== t.id)), 3400);
    };
    window.addEventListener("noor-toast", onToast);
    return () => window.removeEventListener("noor-toast", onToast);
  }, []);
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[90] flex flex-col gap-2">
      <AnimatePresence>
        {items.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className={`pointer-events-auto flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-semibold shadow-xl shadow-black/30 ${
              t.kind === "ok" ? "border-lagoon-500/40 bg-ink-800 text-lagoon-300"
              : t.kind === "err" ? "border-coral-500/40 bg-ink-800 text-coral-300"
              : "border-gold-500/30 bg-ink-800 text-gold-300"
            }`}
          >
            <Icon name={t.kind === "ok" ? "check" : t.kind === "err" ? "x" : "star"} className="h-4 w-4 shrink-0" />
            {t.msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ================= Progress ring ================= */
export function ProgressRing({
  value, size = 88, stroke = 8, color = "#F5A524", label,
}: { value: number; size?: number; stroke?: number; color?: string; label?: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(168,195,205,0.15)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round" strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - (c * Math.min(100, Math.max(0, value))) / 100 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="font-display text-lg font-extrabold text-paper-50">{Math.round(value)}%</div>
        {label && <div className="text-[0.6rem] font-bold uppercase tracking-wider text-ink-400">{label}</div>}
      </div>
    </div>
  );
}

/* ================= Difficulty dots ================= */
export function Difficulty({ level, color }: { level: 1 | 2 | 3; color: string }) {
  return (
    <span className="inline-flex items-center gap-1" title={`Difficulté ${level}/3`}>
      {[1, 2, 3].map((i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full"
          style={{ background: i <= level ? color : "rgba(168,195,205,0.25)" }} />
      ))}
    </span>
  );
}

/* ================= Progress bar ================= */
export function Bar({ value, color, className = "h-1.5" }: { value: number; color: string; className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-full bg-ink-700/70 ${className}`}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
