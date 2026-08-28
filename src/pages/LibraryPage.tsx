import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { DOCUMENTS, subjectById } from "../data";
import type { PdfDoc } from "../data/types";
import { generatePdf } from "../lib/pdf";
import { Icon, LogoMark, Spark, toast } from "../components/ui";

type Filter = "all" | "cours" | "examen" | "methode";

const KIND_META: Record<PdfDoc["kind"], { label: string; color: string }> = {
  cours: { label: "Cours", color: "#F5A524" },
  examen: { label: "Examen corrigé", color: "#FF6B5E" },
  methode: { label: "Méthode", color: "#2FC9BC" },
};

export default function LibraryPage({ onBack }: { onBack: () => void }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<PdfDoc | null>(null);

  const docs = useMemo(
    () => (filter === "all" ? DOCUMENTS : DOCUMENTS.filter((d) => d.kind === filter)),
    [filter]
  );

  const counts: Record<Filter, number> = {
    all: DOCUMENTS.length,
    cours: DOCUMENTS.filter((d) => d.kind === "cours").length,
    examen: DOCUMENTS.filter((d) => d.kind === "examen").length,
    methode: DOCUMENTS.filter((d) => d.kind === "methode").length,
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <button onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm font-bold text-ink-400 transition hover:text-gold-300">
        <Icon name="arrow" className="h-4 w-4 rotate-180" /> Tableau de bord
      </button>

      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-coral-400">
            <Spark className="h-3.5 w-3.5" color="#FF6B5E" /> BIBLIOTHÈQUE NOOR
          </p>
          <h1 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-paper-50">
            Lis, feuillette, télécharge.
          </h1>
          <p className="mt-2 max-w-xl text-sm text-ink-400">
            {DOCUMENTS.length} documents prêts : cours complets, examens régionaux corrigés et méthodes de révision.
          </p>
        </div>
      </div>

      {/* filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {([
          ["all", "Tous"],
          ["cours", "Cours"],
          ["examen", "Examens régionaux"],
          ["methode", "Méthodes"],
        ] as [Filter, string][]).map(([k, label]) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            className={`relative rounded-xl px-4 py-2.5 font-display text-sm font-bold transition ${
              filter === k ? "text-ink-950" : "border border-ink-600 bg-ink-800/70 text-ink-200 hover:border-ink-400"
            }`}
          >
            {filter === k && (
              <motion.span layoutId="lib-filter" className="absolute inset-0 rounded-xl bg-gold-500"
                transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className="relative flex items-center gap-2">
              {label}
              <span className={`rounded-full px-1.5 text-[10px] tabular-nums ${filter === k ? "bg-ink-950/15" : "bg-ink-700"}`}>
                {counts[k]}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* grid */}
      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {docs.map((doc, i) => {
            const s = subjectById(doc.subjectId);
            const color = s?.color ?? "#F5A524";
            const kind = KIND_META[doc.kind];
            return (
              <motion.div
                key={doc.id}
                layout
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.45 }}
                whileHover={{ y: -7 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/70"
              >
                {/* cover */}
                <button onClick={() => setOpen(doc)} className="paper-texture relative block p-5 text-left" style={{ borderTop: `5px solid ${color}` }}>
                  <div className="flex items-start justify-between">
                    <span className="rounded-md px-2 py-1 text-[9px] font-extrabold uppercase tracking-widest text-white" style={{ background: kind.color }}>
                      {kind.label}
                    </span>
                    <LogoMark size={22} className="opacity-80" />
                  </div>
                  <p className={`font-display mt-4 text-[15px] font-extrabold leading-snug text-ink-900 ${doc.kind === "cours" ? "" : ""}`}>
                    {doc.title}
                  </p>
                  <p className="mt-1.5 text-[11px] font-bold text-ink-600">{doc.subtitle}</p>
                  <div className="mt-4 space-y-1.5">
                    <div className="h-1 w-full rounded bg-ink-900/10" />
                    <div className="h-1 w-4/5 rounded bg-ink-900/10" />
                    <div className="h-1 w-2/3 rounded bg-ink-900/10" />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-ink-600">
                    <span>{s?.name}</span>
                    <span>{doc.pages.length} pages</span>
                  </div>
                </button>

                {/* actions */}
                <div className="mt-auto flex border-t border-ink-700">
                  <button
                    onClick={() => setOpen(doc)}
                    className="flex flex-1 items-center justify-center gap-2 py-3 text-xs font-bold text-ink-200 transition hover:bg-ink-700/50 hover:text-gold-300"
                  >
                    <Icon name="book" className="h-4 w-4" /> Lire
                  </button>
                  <span className="w-px bg-ink-700" />
                  <button
                    onClick={() => { generatePdf(doc); toast("PDF téléchargé !", "ok"); }}
                    className="flex flex-1 items-center justify-center gap-2 py-3 text-xs font-bold text-ink-200 transition hover:bg-ink-700/50 hover:text-lagoon-300"
                  >
                    <Icon name="download" className="h-4 w-4" /> PDF
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>{open && <DocViewer doc={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </div>
  );
}

/* ================= Document viewer ================= */
function DocViewer({ doc, onClose }: { doc: PdfDoc; onClose: () => void }) {
  const [page, setPage] = useState(0);
  const s = subjectById(doc.subjectId);
  const color = s?.color ?? "#F5A524";
  const p = doc.pages[page];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="flex h-[min(88vh,720px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-ink-700 shadow-2xl shadow-black/60"
      >
        {/* toolbar */}
        <div className="flex items-center justify-between gap-3 border-b border-ink-700 bg-ink-850 px-5 py-3.5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: color }} />
            <p className="truncate text-sm font-bold text-paper-50">{doc.title}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => { generatePdf(doc); toast("PDF téléchargé !", "ok"); }}
              className="hidden items-center gap-1.5 rounded-lg border border-ink-600 px-3 py-1.5 text-xs font-bold text-ink-200 transition hover:border-gold-500/50 hover:text-gold-300 sm:flex"
            >
              <Icon name="download" className="h-3.5 w-3.5" /> Télécharger
            </button>
            <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-600 text-ink-200 transition hover:border-coral-500/50 hover:text-coral-300">
              <Icon name="x" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* page */}
        <div className="paper-texture flex-1 overflow-y-auto">
          <div className="mx-auto max-w-[620px] px-6 py-8 sm:px-10">
            <div className="mb-6 flex items-center justify-between border-b-2 border-ink-900/10 pb-4">
              <div className="flex items-center gap-2">
                <LogoMark size={26} />
                <span className="font-display text-xs font-extrabold tracking-wider text-ink-600">NOOR 3AC</span>
              </div>
              <span className="rounded px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white" style={{ background: color }}>
                {KIND_META[doc.kind].label}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -26 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <h2 className="font-display flex items-start gap-3 text-2xl font-extrabold leading-tight text-ink-900">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm text-white" style={{ background: color }}>
                    {page + 1}
                  </span>
                  {p.heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {p.body.map((para, i) => (
                    <p key={i} className="text-[15px] leading-[1.85] text-ink-800">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* pagination */}
        <div className="flex items-center justify-between border-t border-ink-700 bg-ink-850 px-5 py-3.5">
          <button
            onClick={() => setPage((x) => Math.max(0, x - 1))}
            disabled={page === 0}
            className="flex items-center gap-2 rounded-lg border border-ink-600 px-3.5 py-2 text-xs font-bold text-ink-200 transition enabled:hover:border-gold-500/50 enabled:hover:text-gold-300 disabled:opacity-35"
          >
            <Icon name="arrow" className="h-3.5 w-3.5 rotate-180" /> Précédent
          </button>
          <div className="flex items-center gap-1.5">
            {doc.pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="relative h-2 w-2 rounded-full transition"
                style={{ background: i === page ? color : "rgba(168,195,205,0.25)" }}
                aria-label={`Page ${i + 1}`}
              >
                {i === page && (
                  <motion.span layoutId="page-dot" className="absolute -inset-1 rounded-full border" style={{ borderColor: color }} />
                )}
              </button>
            ))}
            <span className="ml-3 text-xs font-bold tabular-nums text-ink-400">
              {page + 1} / {doc.pages.length}
            </span>
          </div>
          <button
            onClick={() => setPage((x) => Math.min(doc.pages.length - 1, x + 1))}
            disabled={page === doc.pages.length - 1}
            className="flex items-center gap-2 rounded-lg border border-ink-600 px-3.5 py-2 text-xs font-bold text-ink-200 transition enabled:hover:border-gold-500/50 enabled:hover:text-gold-300 disabled:opacity-35"
          >
            Suivant <Icon name="arrow" className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
