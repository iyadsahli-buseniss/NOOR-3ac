import { motion } from "framer-motion";
import { stats as STATS, SUBJECTS } from "../data";
import { allChapters, type Chapter, type Subject } from "../data/types";
import type { User } from "../lib/backend";
import { Bar, Icon, ProgressRing, Spark, SubjectGlyph } from "../components/ui";

export default function Dashboard({
  user, progress, onSubject, onLibrary, onLogout,
}: {
  user: User;
  progress: Record<string, boolean>;
  onSubject: (id: string) => void;
  onLibrary: () => void;
  onLogout: () => void;
}) {
  const done = (s: Subject) => allChapters(s).filter((c) => progress[c.id]).length;
  const total = SUBJECTS.reduce((n, s) => n + allChapters(s).length, 0);
  const totalDone = SUBJECTS.reduce((n, s) => n + done(s), 0);
  const pct = (totalDone / total) * 100;

  const resume = SUBJECTS.map((s) => {
    const next = allChapters(s).find((c) => !progress[c.id]);
    return next ? { subject: s, chapter: next } : null;
  }).filter((x): x is { subject: Subject; chapter: Chapter } => x !== null).slice(0, 3);

  const firstName = user.name.trim().split(" ")[0] || "Élève";

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      {/* ---------- greeting ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
        className="flex flex-wrap items-end justify-between gap-6"
      >
        <div>
          <p className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-lagoon-400">
            <Spark className="h-3.5 w-3.5" color="#2FC9BC" /> ESPACE ÉLÈVE
          </p>
          <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-paper-50 sm:text-[2.7rem]">
            Salam, {firstName} <Spark className="ml-1 inline h-5 w-5 align-[-3px]" />
          </h1>
          <p className="mt-2 text-sm font-semibold text-ink-400">
            {totalDone === 0
              ? "Ton aventure commence ici — choisis une matière ou reprends une leçon ci-dessous."
              : `Encore ${total - totalDone} chapitres pour compléter le programme. On y va ?`}
          </p>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 rounded-xl border border-ink-600 bg-ink-800 px-4 py-2.5 text-sm font-bold text-ink-200 transition hover:border-coral-500/50 hover:text-coral-300"
        >
          <Icon name="logout" className="h-4 w-4" /> Déconnexion
        </button>
      </motion.div>

      {/* ---------- overview ---------- */}
      <div className="mt-10 grid gap-5 lg:grid-cols-[340px_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.55 }}
          className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/70 p-7"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold-500/10 blur-2xl" />
          <div className="flex items-center gap-6">
            <ProgressRing value={pct} size={104} color="#F5A524" label="programme" />
            <div>
              <p className="font-display text-lg font-bold text-paper-50">Progression globale</p>
              <p className="mt-1 text-sm font-semibold text-ink-400">
                {totalDone} / {total} chapitres
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-lagoon-500/12 px-3 py-1 text-xs font-bold text-lagoon-300">
                <Icon name="star" className="h-3.5 w-3.5" />
                {pct >= 50 ? "Excellent rythme !" : pct > 0 ? "Bon début, continue !" : "Objectif : 100 %"}
              </p>
            </div>
          </div>

          <div className="mt-7 border-t border-ink-700 pt-5">
            <p className="text-[11px] font-bold uppercase tracking-widest text-ink-400">Stats rapides</p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              {[
                { v: STATS.lessons, l: "leçons" },
                { v: STATS.exercices, l: "exercices" },
                { v: STATS.docs, l: "PDFs" },
              ].map((x) => (
                <div key={x.l} className="rounded-xl bg-ink-900/70 py-3">
                  <div className="font-display text-xl font-extrabold text-gold-400">{x.v}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-ink-400">{x.l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* resume cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {resume.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="col-span-full flex items-center justify-center rounded-2xl border border-dashed border-ink-600 bg-ink-800/50 p-10 text-center"
            >
              <div>
                <Spark className="mx-auto h-8 w-8" />
                <p className="font-display mt-3 text-xl font-bold text-paper-50">Programme terminé ?!</p>
                <p className="mt-1 text-sm text-ink-400">File réviser les examens régionaux dans la bibliothèque.</p>
              </div>
            </motion.div>
          )}
          {resume.map(({ subject, chapter }, i) => (
            <motion.button
              key={subject.id}
              onClick={() => onSubject(subject.id)}
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/70 p-5 text-left"
            >
              <span className="absolute inset-x-0 top-0 h-1" style={{ background: subject.color }} />
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${subject.color}1a`, color: subject.color }}>
                  <SubjectGlyph icon={subject.icon} className="h-5 w-5" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-ink-400">
                  Chapitre {chapter.num}
                </span>
              </div>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-wider" style={{ color: subject.color }}>
                Reprendre — {subject.name.split(" ")[0]}
              </p>
              <p className="font-display mt-1.5 text-[15px] font-bold leading-snug text-paper-50">
                {chapter.title}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-ink-400">
                <Icon name="play" className="h-3.5 w-3.5" />
                {chapter.duration} min de cours
                <Icon name="arrow" className="ml-auto h-4 w-4 text-ink-200 transition-transform group-hover:translate-x-1 group-hover:text-gold-300" />
              </div>
            </motion.button>
          ))}

          {/* exam card */}
          <motion.button
            onClick={onLibrary}
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-2xl border border-coral-500/30 bg-gradient-to-br from-coral-500/12 to-ink-800/60 p-5 text-left"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral-500/15 text-coral-300">
                <Icon name="doc" className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-coral-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-coral-300">
                Examens
              </span>
            </div>
            <p className="font-display mt-4 text-[15px] font-bold leading-snug text-paper-50">
              Régionaux corrigés + tous les PDFs
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-ink-400">
              <Icon name="library" className="h-3.5 w-3.5" />
              Bibliothèque
              <Icon name="arrow" className="ml-auto h-4 w-4 text-ink-200 transition-transform group-hover:translate-x-1 group-hover:text-coral-300" />
            </div>
          </motion.button>
        </div>
      </div>

      {/* ---------- subjects ---------- */}
      <div className="mt-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-extrabold text-paper-50">Tes matières</h2>
          <span className="text-xs font-bold text-ink-400">{SUBJECTS.length} matières · programme officiel</span>
        </div>
        <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/60">
          {SUBJECTS.map((s, i) => {
            const d = done(s);
            const all = allChapters(s).length;
            const p = (d / all) * 100;
            return (
              <motion.button
                key={s.id}
                onClick={() => onSubject(s.id)}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.45 }}
                className="group flex w-full items-center gap-4 border-b border-ink-700/70 px-5 py-4 text-left transition-colors last:border-0 hover:bg-ink-700/30"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: `${s.color}1a`, color: s.color }}>
                  <SubjectGlyph icon={s.icon} className="h-5.5 w-5.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2.5">
                    <p className="font-display truncate text-[15px] font-bold text-paper-50">{s.name}</p>
                    <p className="font-arabic hidden text-xs text-ink-400 sm:block">{s.ar}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <Bar value={p} color={s.color} className="h-1.5 max-w-[260px]" />
                    <span className="shrink-0 text-[11px] font-bold tabular-nums text-ink-400">
                      {d}/{all}
                    </span>
                  </div>
                </div>
                <span className={`hidden shrink-0 rounded-full px-3 py-1 text-[11px] font-bold sm:block ${
                  p === 100 ? "bg-lagoon-500/15 text-lagoon-300" : p > 0 ? "bg-gold-500/12 text-gold-300" : "bg-ink-700/70 text-ink-400"
                }`}>
                  {p === 100 ? "Terminé ✓" : p > 0 ? "En cours" : "À commencer"}
                </span>
                <Icon name="chevron" className="h-4 w-4 shrink-0 text-ink-400 transition group-hover:translate-x-0.5 group-hover:text-gold-300" />
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
