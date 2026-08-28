import { motion } from "framer-motion";
import { useState } from "react";
import type { Subject } from "../data/types";
import { Bar, Difficulty, Icon, Spark, SubjectGlyph } from "../components/ui";

export default function SubjectPage({
  subject, progress, onBack, onChapter,
}: {
  subject: Subject;
  progress: Record<string, boolean>;
  onBack: () => void;
  onChapter: (id: string) => void;
}) {
  const [sem, setSem] = useState(0);
  const all = subject.semestres.flatMap((s) => s.chapters);
  const done = all.filter((c) => progress[c.id]).length;
  const pct = (done / all.length) * 100;
  const active = subject.semestres[sem];

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <button onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm font-bold text-ink-400 transition hover:text-gold-300">
        <Icon name="arrow" className="h-4 w-4 rotate-180" /> Tableau de bord
      </button>

      {/* header banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-800/70 p-8 sm:p-10"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${subject.color}22` }} />
        <div className="relative flex flex-wrap items-center gap-6">
          <motion.span
            initial={{ scale: 0.7, rotate: -8 }} animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
            className="flex h-20 w-20 items-center justify-center rounded-2xl border"
            style={{ background: `${subject.color}1a`, borderColor: `${subject.color}44`, color: subject.color }}
          >
            <SubjectGlyph icon={subject.icon} className="h-10 w-10" />
          </motion.span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-3">
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-paper-50 sm:text-4xl">
                {subject.name}
              </h1>
              <span className="font-arabic text-xl" style={{ color: subject.color }}>{subject.ar}</span>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-400">{subject.description}</p>
          </div>
          <div className="w-full sm:w-52">
            <div className="flex items-baseline justify-between text-xs font-bold">
              <span className="text-ink-400">{done}/{all.length} chapitres</span>
              <span style={{ color: subject.color }}>{Math.round(pct)}%</span>
            </div>
            <Bar value={pct} color={subject.color} className="mt-2 h-2" />
          </div>
        </div>
      </motion.div>

      {/* semester tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {subject.semestres.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setSem(i)}
            className={`relative rounded-xl px-5 py-2.5 font-display text-sm font-bold transition ${
              sem === i ? "text-ink-950" : "border border-ink-600 bg-ink-800/70 text-ink-200 hover:border-ink-400"
            }`}
          >
            {sem === i && (
              <motion.span layoutId={`sem-${subject.id}`} className="absolute inset-0 rounded-xl"
                style={{ background: subject.color }} transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className="relative">{s.name}</span>
          </button>
        ))}
      </div>

      {/* chapters */}
      <div className="mt-6 space-y-3">
        {active.chapters.map((ch, i) => {
          const isDone = !!progress[ch.id];
          const hasFull = !!(ch.sections || ch.formules);
          return (
            <motion.button
              key={ch.id}
              onClick={() => onChapter(ch.id)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              whileHover={{ x: 6 }}
              className={`group relative flex w-full items-center gap-5 overflow-hidden rounded-2xl border p-5 text-left transition-colors ${
                isDone ? "border-lagoon-500/30 bg-lagoon-500/[0.04]" : "border-ink-700 bg-ink-800/60 hover:border-ink-600"
              }`}
            >
              <span className="absolute inset-y-0 left-0 w-1 transition-all" style={{ background: isDone ? "#2FC9BC" : subject.color, opacity: isDone ? 0.9 : 0.5 }} />
              <span className={`font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold ${
                isDone ? "bg-lagoon-500/15 text-lagoon-300" : "bg-ink-700/70 text-ink-200"
              }`}>
                {isDone ? <Icon name="check" className="h-5 w-5" /> : String(ch.num).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className={`font-display text-[16px] font-bold ${isDone ? "text-ink-200 line-through decoration-lagoon-500/60" : "text-paper-50"}`}>
                    {ch.title}
                  </p>
                  {ch.ar && <span className="font-arabic text-sm text-ink-400">{ch.ar}</span>}
                  {hasFull ? (
                    <span className="rounded-full bg-gold-500/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-300">
                      Leçon complète
                    </span>
                  ) : (
                    <span className="rounded-full bg-ink-700/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-400">
                      Fiche de révision
                    </span>
                  )}
                </div>
                <p className="mt-1 line-clamp-1 text-[13px] text-ink-400">{ch.resume}</p>
                <div className="mt-2.5 flex items-center gap-4 text-[11px] font-bold text-ink-400">
                  <span className="flex items-center gap-1.5">
                    <Icon name="clock" className="h-3.5 w-3.5" /> {ch.duration} min
                  </span>
                  <Difficulty level={ch.difficulty} color={subject.color} />
                  <span className="flex items-center gap-1">
                    <Spark className="h-3 w-3" color={subject.color} />
                    {ch.exercices?.length ?? 0} exercice{(ch.exercices?.length ?? 0) > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
              <Icon name="chevron" className="h-5 w-5 shrink-0 text-ink-400 transition group-hover:translate-x-1 group-hover:text-gold-300" />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
