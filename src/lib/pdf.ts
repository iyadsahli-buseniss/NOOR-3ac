import { jsPDF } from "jspdf";
import type { PdfDoc } from "../data/types";
import { subjectById } from "../data";

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
};

/** Génère un vrai fichier PDF (A4) à partir d'un document NOOR. */
export function generatePdf(doc: PdfDoc) {
  const subject = subjectById(doc.subjectId);
  const color = subject ? hexToRgb(subject.color) : ([245, 165, 36] as [number, number, number]);
  const ink: [number, number, number] = [16, 34, 42];
  const muted: [number, number, number] = [93, 118, 130];

  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const W = 210;
  const H = 297;
  const M = 18;
  let y = 0;

  const kindLabel =
    doc.kind === "examen" ? "EXAMEN CORRIGÉ" : doc.kind === "methode" ? "MÉTHODE" : "COURS";

  const header = (first: boolean) => {
    pdf.setFillColor(...color);
    pdf.rect(0, 0, W, first ? 52 : 14, "F");
    pdf.setFillColor(...ink);
    pdf.rect(0, first ? 52 : 14, W, 1.4, "F");
    pdf.setTextColor(255, 255, 255);
    if (first) {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(21);
      pdf.text(pdf.splitTextToSize(doc.title, W - 2 * M), M, 24);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10.5);
      pdf.text(doc.subtitle, M, 38);
      pdf.setFontSize(9);
      pdf.text(`NOOR 3AC  ·  ${kindLabel}  ·  ${subject ? subject.name : ""}`, M, 46);
      y = 66;
    } else {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text(`NOOR 3AC — ${doc.title}`, M, 9.5);
      y = 24;
    }
  };

  const footer = () => {
    const page = pdf.getNumberOfPages();
    for (let i = 1; i <= page; i++) {
      pdf.setPage(i);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8.5);
      pdf.setTextColor(...muted);
      pdf.text("NOOR 3AC — Réussir la 3ème année collège", M, H - 10);
      pdf.text(`${i} / ${page}`, W - M, H - 10, { align: "right" });
      pdf.setFillColor(...color);
      pdf.rect(M, H - 14, 26, 0.8, "F");
    }
  };

  const ensure = (space: number) => {
    if (y + space > H - 22) {
      pdf.addPage();
      header(false);
    }
  };

  header(true);

  doc.pages.forEach((page, idx) => {
    ensure(20);
    if (idx > 0) y += 6;

    // Section heading
    pdf.setFillColor(...color);
    pdf.circle(M + 2.6, y - 1.4, 2.6, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
    pdf.text(String(idx + 1), M + 2.6, y - 0.3, { align: "center" });
    pdf.setTextColor(...ink);
    pdf.setFontSize(12.5);
    const head = pdf.splitTextToSize(page.heading, W - 2 * M - 12);
    pdf.text(head, M + 9, y);
    y += head.length * 5.4 + 3;

    // Body
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10.5);
    pdf.setTextColor(35, 52, 60);
    page.body.forEach((para) => {
      const lines = pdf.splitTextToSize(para, W - 2 * M - 4);
      ensure(lines.length * 4.9 + 3);
      pdf.text(lines, M + 2, y);
      y += lines.length * 4.9 + 2.4;
    });
  });

  footer();
  const safe = doc.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  pdf.save(`${safe}-noor3ac.pdf`);
}
