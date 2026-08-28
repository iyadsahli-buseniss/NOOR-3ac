import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Chapter, Subject } from "../data/types";
import { chapterToDoc } from "../data";
import { generatePdf } from "../lib/pdf";
import { Difficulty, Icon, SubjectGlyph, toast } from "../components/ui";

export default function LessonPage({
  subject, chapter, allChaptersOfSubject, progress, onBack, onNavigate, onToggleDone,
}: {
  subject: Subject;
  chapter: Chapter;
  allChaptersOfSubject: Chapter[];
  progress: Record<string, boolean>;
  onBack: () => void;
  onNavigate: (id: string) => void;
  onToggleDone: (id: string, done: boolean) => void;
}) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [toggling, setToggling] = useState(false);
  const isDone = !!progress[chapter.id];
  const isAr = chapter.lang === "ar";
  const idx = allChaptersOfSubject.findIndex((c) => c.id === chapter.id);
  const prev = allChaptersOfSubject[idx - 1];
  const next = allChaptersOfSubject[idx + 1];

  const download = () => {
    if (isAr) {
      toast("Les leçons en arabe sont consultables dans l'application", "info");
      return;
    }
    generatePdf(chapterToDoc(subject, chapter));
    toast("PDF téléchargé — bonne révision !", "ok");
  };

  const toggle = async () => {
    setToggling(true);
    await onToggleDone(chapter.id, !isDone);
    setToggling(false);
    toast(isDone ? "Chapitre remis « à faire »" : "Chapitre validé !", isDone ? "info" : "ok");
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-8">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* ---------- side nav ---------- */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <button onClick={onBack}
              className="mb-4 flex items-center gap-2 text-sm font-bold text-ink-400 transition hover:text-gold-300">
              <Icon name="arrow" className="h-4 w-4 rotate-180" /> {subject.name}
            </button>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-ink-400">Chapitres</p>
            <div className="max-h-[62vh] space-y-1 overflow-y-auto pr-2">
              {allChaptersOfSubject.map((c) => {
                const active = c.id === chapter.id;
                const d = !!progress[c.id];
                return (
                  <button
                    key={c.id}
                    onClick={() => onNavigate(c.id)}
                    className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold transition ${
                      active ? "bg-ink-700/70 text-paper-50" : "text-ink-400 hover:bg-ink-800 hover:text-ink-100"
                    }`}
                  >
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${
                      d ? "bg-lagoon-500/15 text-lagoon-300" : active ? "text-ink-950" : "bg-ink-700/70 text-ink-400"
                    }`} style={active && !d ? { background: subject.color } : undefined}>
                      {d ? <Icon name="check" className="h-3 w-3" /> : c.num}
                    </span>
                    <span className="line-clamp-1">{c.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ---------- reader ---------- */}
        <motion.article
          key={chapter.id}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* header */}
          <button onClick={onBack} className="mb-4 flex items-center gap-2 text-sm font-bold text-ink-400 transition hover:text-gold-300 lg:hidden">
            <Icon name="arrow" className="h-4 w-4 rotate-180" /> {subject.name}
          </button>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: subject.color }}>
                <SubjectGlyph icon={subject.icon} className="h-4 w-4" />
                {subject.name} · Chapitre {chapter.num}
              </p>
              <h1 className={`font-display mt-2 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-paper-50 sm:text-4xl ${isAr ? "font-arabic" : ""}`}
                dir={isAr ? "rtl" : "ltr"}>
                {chapter.title}
              </h1>
              {chapter.ar && !isAr && <p className="font-arabic mt-1.5 text-lg text-ink-400">{chapter.ar}</p>}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold text-ink-400">
                <span className="flex items-center gap-1.5 rounded-full border border-ink-600 bg-ink-800 px-3 py-1.5">
                  <Icon name="clock" className="h-3.5 w-3.5" /> {chapter.duration} min
                </span>
                <span className="flex items-center gap-2 rounded-full border border-ink-600 bg-ink-800 px-3 py-1.5">
                  <Difficulty level={chapter.difficulty} color={subject.color} />
                  {["Facile", "Moyen", "Difficile"][chapter.difficulty - 1]}
                </span>
                {chapter.exercices && (
                  <span className="flex items-center gap-1.5 rounded-full border border-ink-600 bg-ink-800 px-3 py-1.5">
                    <Icon name="doc" className="h-3.5 w-3.5" /> {chapter.exercices.length} exercices corrigés
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2.5">
              <button onClick={download}
                className="flex items-center gap-2 rounded-xl border border-ink-600 bg-ink-800 px-4 py-2.5 text-sm font-bold text-ink-100 transition hover:-translate-y-0.5 hover:border-gold-500/50 hover:text-gold-300">
                <Icon name="download" className="h-4 w-4" /> PDF
              </button>
              <motion.button
                onClick={toggle}
                disabled={toggling}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition disabled:opacity-60 ${
                  isDone
                    ? "border border-lagoon-500/40 bg-lagoon-500/12 text-lagoon-300"
                    : "bg-gold-500 text-ink-950 shadow-lg shadow-gold-500/20 hover:bg-gold-400"
                }`}
              >
                <Icon name="check" className="h-4 w-4" />
                {isDone ? "Validé ✓" : "Marquer lu"}
              </motion.button>
            </div>
          </div>

          {/* paper document */}
          <div className={`paper-texture mt-8 rounded-2xl p-6 text-ink-900 shadow-2xl shadow-black/40 sm:p-10 ${isAr ? "font-arabic" : ""}`} dir={isAr ? "rtl" : "ltr"}>
            <div className={`mb-8 border-b-2 border-ink-900/10 pb-6 ${isAr ? "text-right" : ""}`}>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink-600">
                NOOR 3AC — Résumé de cours
              </p>
              <p className={`mt-3 text-[15px] font-semibold leading-relaxed text-ink-800 ${isAr ? "text-lg" : ""}`}>
                {chapter.resume}
              </p>
            </div>

            {chapter.sections?.map((sec, i) => (
              <section key={i} className="mb-9">
                <h2 className={`mb-4 flex items-center gap-3 font-display text-xl font-extrabold text-ink-900 ${isAr ? "font-arabic text-2xl" : ""}`}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-white" style={{ background: subject.color }}>
                    {i + 1}
                  </span>
                  {sec.h}
                </h2>
                {sec.p.map((para, j) => (
                  <p key={j} className={`mb-3 leading-[1.8] text-ink-800 ${isAr ? "text-[17px]" : "text-[15px]"}`}>
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {chapter.formules && chapter.formules.length > 0 && (
              <section className="mb-9">
                <h2 className={`mb-4 font-display text-xl font-extrabold text-ink-900 ${isAr ? "font-arabic text-2xl" : ""}`}>
                  {isAr ? "القواعد الأساسية" : "Formules à retenir"}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {chapter.formules.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="rounded-xl border-2 border-dashed bg-white/60 p-4"
                      style={{ borderColor: `${subject.color}66` }}
                    >
                      <p className="font-display text-[15px] font-bold text-ink-900">{f.f}</p>
                      {f.note && <p className="mt-1 text-xs font-semibold text-ink-600">{f.note}</p>}
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {chapter.points && chapter.points.length > 0 && (
              <section className="mb-9">
                <h2 className={`mb-4 font-display text-xl font-extrabold text-ink-900 ${isAr ? "font-arabic text-2xl" : ""}`}>
                  {isAr ? "نقاط أساسية" : "Points clés"}
                </h2>
                <ul className="space-y-2.5">
                  {chapter.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: `${subject.color}22`, color: subject.color }}>
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      <span className={`leading-relaxed text-ink-800 ${isAr ? "text-[17px]" : "text-[15px]"}`}>{p}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {chapter.exercices && chapter.exercices.length > 0 && (
              <section>
                <h2 className={`mb-4 font-display text-xl font-extrabold text-ink-900 ${isAr ? "font-arabic text-2xl" : ""}`}>
                  {isAr ? "تمارين تطبيقية" : "Exercices d'application"}
                </h2>
                <div className="space-y-4">
                  {chapter.exercices.map((ex, i) => (
                    <div key={i} className="overflow-hidden rounded-xl border border-ink-900/10 bg-white/70">
                      <div className="p-5">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-ink-600">Exercice {i + 1}</p>
                        <p className={`mt-2 font-semibold leading-relaxed text-ink-900 ${isAr ? "text-[17px]" : "text-[15px]"}`}>{ex.q}</p>
                        {ex.a && (
                          <>
                            <AnimatePresence>
                              {revealed[i] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-4 rounded-xl p-4" style={{ background: `${subject.color}14`, borderRight: isAr ? undefined : `3px solid ${subject.color}`, borderLeft: isAr ? `3px solid ${subject.color}` : undefined }}>
                                    <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: subject.color }}>
                                      {isAr ? "التصحيح" : "Correction"}
                                    </p>
                                    <p className={`mt-1.5 font-semibold leading-relaxed text-ink-900 ${isAr ? "text-[16px]" : "text-sm"}`}>{ex.a}</p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            <button
                              onClick={() => setRevealed((r) => ({ ...r, [i]: !r[i] }))}
                              className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold transition hover:opacity-80"
                              style={{ color: subject.color }}
                            >
                              <Icon name={revealed[i] ? "x" : "play"} className="h-3.5 w-3.5" />
                              {revealed[i] ? "Masquer la correction" : "Voir la correction"}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {!chapter.sections && !chapter.points && (
              <p className="text-center text-sm font-semibold text-ink-600">
                Contenu en préparation — reviens bientôt !
              </p>
            )}
          </div>

          {/* prev / next */}
          <div className="mt-8 flex items-center justify-between gap-4">
            {prev ? (
              <button onClick={() => onNavigate(prev.id)}
                className="group flex min-w-0 items-center gap-3 rounded-xl border border-ink-700 bg-ink-800/70 px-4 py-3 text-left transition hover:border-ink-600">
                <Icon name="arrow" className="h-4 w-4 shrink-0 rotate-180 text-ink-400 transition group-hover:-translate-x-0.5 group-hover:text-gold-300" />
                <span className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-ink-400">Précédent</span>
                  <span className="block truncate text-sm font-bold text-ink-100">{prev.title}</span>
                </span>
              </button>
            ) : <span />}
            {next ? (
              <button onClick={() => onNavigate(next.id)}
                className="group flex min-w-0 items-center gap-3 rounded-xl border border-ink-700 bg-ink-800/70 px-4 py-3 text-right transition hover:border-ink-600">
                <span className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-ink-400">Suivant</span>
                  <span className="block truncate text-sm font-bold text-ink-100">{next.title}</span>
                </span>
                <Icon name="arrow" className="h-4 w-4 shrink-0 text-ink-400 transition group-hover:translate-x-0.5 group-hover:text-gold-300" />
              </button>
            ) : (
              <button onClick={onBack}
                className="group flex items-center gap-3 rounded-xl border border-lagoon-500/40 bg-lagoon-500/10 px-4 py-3 text-sm font-bold text-lagoon-300 transition hover:bg-lagoon-500/20">
                Matière terminée ! <Icon name="check" className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.article>
      </div>
    </div>
  );
}
