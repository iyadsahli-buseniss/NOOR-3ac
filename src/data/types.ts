export interface Formula {
  f: string;
  note?: string;
}

export interface Section {
  h: string;
  p: string[];
}

export interface Exercice {
  q: string;
  a?: string;
}

export interface Chapter {
  id: string;
  num: number;
  title: string;
  ar?: string;
  lang: "fr" | "ar";
  duration: number; // minutes
  difficulty: 1 | 2 | 3;
  resume: string;
  sections?: Section[];
  formules?: Formula[];
  points?: string[];
  exercices?: Exercice[];
}

export interface Semester {
  name: string;
  chapters: Chapter[];
}

export type SubjectIcon =
  | "calc"
  | "flask"
  | "leaf"
  | "quill"
  | "chat"
  | "scroll"
  | "globe"
  | "chip"
  | "crescent";

export interface Subject {
  id: string;
  name: string;
  ar: string;
  color: string;
  icon: SubjectIcon;
  description: string;
  semestres: Semester[];
}

export interface DocPage {
  heading: string;
  body: string[];
}

export interface PdfDoc {
  id: string;
  kind: "cours" | "examen" | "methode";
  title: string;
  subtitle: string;
  subjectId: string;
  pages: DocPage[];
}

export const allChapters = (s: Subject): Chapter[] =>
  s.semestres.flatMap((sem) => sem.chapters);

export const findSubject = (subjects: Subject[], id: string) =>
  subjects.find((s) => s.id === id);

export const findChapter = (s: Subject, chapterId: string) =>
  allChapters(s).find((c) => c.id === chapterId);
