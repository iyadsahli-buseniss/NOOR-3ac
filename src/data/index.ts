import type { Chapter, PdfDoc, Subject } from "./types";
import { maths, pc, svt } from "./sciences";
import { francais, english, arabe, histoire, info, islam } from "./humanities";
import { allChapters } from "./types";

export * from "./types";
export { allChapters };

export const SUBJECTS: Subject[] = [
  maths, pc, svt, francais, english, arabe, histoire, info, islam,
];

export const totalChapters = SUBJECTS.reduce(
  (n, s) => n + allChapters(s).length, 0
);

/* ---------- Build a PdfDoc out of a chapter ---------- */
export const chapterToDoc = (subject: Subject, ch: Chapter): PdfDoc => ({
  id: `doc-${ch.id}`,
  kind: "cours",
  title: ch.title,
  subtitle: `${subject.name} — ${ch.ar ?? ""} · Chapitre ${ch.num}`,
  subjectId: subject.id,
  pages: [
    {
      heading: "Présentation de la leçon",
      body: [ch.resume, ...(ch.ar ? [`\n${ch.ar}`] : [])],
    },
    ...(ch.sections ?? []).map((s) => ({ heading: s.h, body: s.p })),
    ...(ch.formules && ch.formules.length
      ? [{
          heading: "Formules à retenir",
          body: ch.formules.map((f) => (f.note ? `• ${f.f}   (${f.note})` : `• ${f.f}`)),
        }]
      : []),
    ...(ch.points && ch.points.length
      ? [{ heading: "Points clés", body: ch.points.map((p) => `• ${p}`) }]
      : []),
    ...(ch.exercices && ch.exercices.length
      ? [{
          heading: "Exercices et corrections",
          body: ch.exercices.flatMap((e, i) => [
            `Exercice ${i + 1} — ${e.q}`,
            ...(e.a ? [`Correction : ${e.a}`] : []),
          ]),
        }]
      : []),
  ],
});

/* ---------- Regional exam papers (sessions récentes) ---------- */
const examMath: PdfDoc = {
  id: "exam-math-2025",
  kind: "examen",
  title: "Examen régional 2025 — Mathématiques",
  subtitle: "Session Juin · Durée 2h · Coefficient 3",
  subjectId: "math",
  pages: [
    {
      heading: "Exercice 1 — Calculs numériques (5 pts)",
      body: [
        "1) Écris sous la forme a√b, avec a et b entiers : A = √80 − 3√20 + 2√45.",
        "2) Rationalise le dénominateur : B = 6 / (√3 − 1).",
        "3) Résous dans ℝ : x² = 45.",
        "Correction :",
        "1) A = 4√5 − 6√5 + 6√5 = 4√5.",
        "2) B = 6(√3 + 1) / [(√3 − 1)(√3 + 1)] = 6(√3 + 1)/2 = 3(√3 + 1) = 3√3 + 3.",
        "3) x = √45 = 3√5 ou x = −3√5.",
      ],
    },
    {
      heading: "Exercice 2 — Équations et systèmes (5 pts)",
      body: [
        "1) Résous : 3x − 7 = x + 9.",
        "2) Factorise puis résous : (2x − 5)² − (x + 1)² = 0.",
        "3) Résous le système : { 2x + y = 11 ; x − y = 1 }.",
        "Correction :",
        "1) 2x = 16 → x = 8.",
        "2) Identité a² − b² = (a − b)(a + b) : [(2x − 5) − (x + 1)][(2x − 5) + (x + 1)] = (x − 6)(3x − 4) = 0 → x = 6 ou x = 4/3.",
        "3) Addition membre à membre : 3x = 12 → x = 4 puis y = 3. S = (4 ; 3).",
      ],
    },
    {
      heading: "Exercice 3 — Géométrie (6 pts)",
      body: [
        "ABC est un triangle tel que AB = 6 cm, AC = 8 cm et BC = 10 cm.",
        "1) Montre que le triangle ABC est rectangle.",
        "2) M est un point de [AB] tel que AM = 2 cm. La parallèle à (BC) passant par M coupe [AC] en N. Calcule AN puis MN.",
        "Correction :",
        "1) BC² = 100 ; AB² + AC² = 36 + 64 = 100. D'après la réciproque de Pythagore, ABC est rectangle en A.",
        "2) D'après Thalès : AM/AB = AN/AC = MN/BC → 2/6 = AN/8 = MN/10. Donc AN = 8/3 cm ≈ 2,67 cm et MN = 10/3 cm ≈ 3,33 cm.",
      ],
    },
    {
      heading: "Exercice 4 — Fonctions et statistiques (4 pts)",
      body: [
        "1) f est la fonction affine telle que f(2) = 7 et f(0) = 3. Détermine f(x).",
        "2) Les notes d'un groupe : 8 ; 12 ; 12 ; 15 ; 18. Calcule la moyenne et la médiane.",
        "Correction :",
        "1) b = f(0) = 3 ; a = (7 − 3)/2 = 2. Donc f(x) = 2x + 3.",
        "2) Moyenne = 65/5 = 13. Série déjà ordonnée, médiane = 12.",
      ],
    },
  ],
};

const examPC: PdfDoc = {
  id: "exam-pc-2025",
  kind: "examen",
  title: "Examen régional 2025 — Physique-Chimie",
  subtitle: "Session Juin · Durée 1h30",
  subjectId: "pc",
  pages: [
    {
      heading: "Partie Chimie — L'atome et les ions",
      body: [
        "L'atome de potassium est noté ³⁹K avec Z = 19.",
        "1) Donne le nombre de protons, d'électrons et de neutrons.",
        "2) Écris sa structure électronique (couches K, L, M).",
        "3) Quel ion stable donne-t-il ? Justifie.",
        "Correction :",
        "1) 19 protons, 19 électrons, 39 − 19 = 20 neutrons.",
        "2) (K)²(L)⁸(M)⁸(N)¹.",
        "3) Il perd l'électron de la couche externe pour donner K⁺ : il retrouve la structure stable du gaz rare précédent.",
      ],
    },
    {
      heading: "Partie Chimie — Acides et bases",
      body: [
        "Une solution S a un pH = 3.",
        "1) La solution est-elle acide, neutre ou basique ?",
        "2) Quelle couleur prend le BBT dans cette solution ?",
        "3) On dilue S avec de l'eau pure. Que devient le pH ?",
        "Correction :",
        "1) Acide (pH < 7). 2) Jaune. 3) Le pH augmente et se rapproche de 7.",
      ],
    },
    {
      heading: "Partie Physique — Travail et puissance",
      body: [
        "Une grue soulève une charge de masse m = 500 kg à la hauteur h = 8 m en Δt = 20 s. On prend g = 10 N/kg.",
        "1) Calcule le poids P de la charge.",
        "2) Calcule le travail du poids pendant la montée.",
        "3) Déduis la puissance développée par la grue.",
        "Correction :",
        "1) P = m × g = 500 × 10 = 5000 N.",
        "2) W(P) = − m·g·h = − 5000 × 8 = −40 000 J (résistant : la grue fournit +40 000 J).",
        "3) P_grue = W/Δt = 40 000 / 20 = 2000 W = 2 kW.",
      ],
    },
  ],
};

const examSVT: PdfDoc = {
  id: "exam-svt-2025",
  kind: "examen",
  title: "Examen régional 2025 — SVT",
  subtitle: "Session Juin · Durée 1h",
  subjectId: "svt",
  pages: [
    {
      heading: "Restitution des connaissances (5 pts)",
      body: [
        "1) Définis : fermentation, chaîne alimentaire.",
        "2) Donne le bilan chimique de la respiration cellulaire.",
        "3) Cite deux mesures de protection de l'environnement.",
        "Correction :",
        "1) Fermentation : dégradation incomplète du glucose sans dioxygène, libérant de l'énergie. Chaîne alimentaire : suite d'êtres vivants où chacun est mangé par le suivant.",
        "2) Glucose + O₂ → CO₂ + H₂O + énergie.",
        "3) Reboisement, recyclage des déchets (ou création de parcs nationaux, lois anti-pollution…).",
      ],
    },
    {
      heading: "Génétique — Croisement chez le pois (5 pts)",
      body: [
        "On croise une lignée pure de pois à graines lisses avec une lignée pure de pois à graines ridées. Toute la F1 a des graines lisses.",
        "1) Quel caractère est dominant ? Justifie.",
        "2) Donne les génotypes des parents et de la F1 (allèles L et l).",
        "3) Croise deux individus de F1 et donne les proportions phénotypiques de la F2.",
        "Correction :",
        "1) Le lisse est dominant : d'après la première loi de Mendel, la F1 issue de deux lignées pures exprime le caractère dominant.",
        "2) Parents : LL × ll ; F1 : Ll (hétérozygote).",
        "3) Ll × Ll → 3/4 lisses (LL ou Ll) et 1/4 ridées (ll).",
      ],
    },
  ],
};

const examFr: PdfDoc = {
  id: "exam-fr-2025",
  kind: "examen",
  title: "Examen régional 2025 — Français",
  subtitle: "Session Juin · Durée 2h",
  subjectId: "fr",
  pages: [
    {
      heading: "Étude de texte — La Boîte à merveilles",
      body: [
        "« Cette nuit-là, je ne pus dormir. Ma boîte à merveilles ouverte devant moi, j'évoquais les objets un à un. Ils cessaient d'être inertes, ils parlaient… »",
        "1) Présente l'auteur et l'œuvre (titre, genre, date).",
        "2) Qui est « je » dans ce passage ?",
        "3) Quel rôle joue la boîte pour le narrateur ?",
        "Pistes de correction :",
        "1) Ahmed Sefrioui, La Boîte à merveilles, roman autobiographique marocain d'expression française publié en 1954.",
        "2) Sidi Mohammed, le narrateur-enfant, six ans, rêveur et solitaire.",
        "3) La boîte est un refuge imaginaire : les objets « parlent » et consolent l'enfant de sa solitude — c'est le merveilleux du quotidien.",
      ],
    },
    {
      heading: "Langue et production écrite",
      body: [
        "1) Identifie la nature de la subordonnée : « Le livre que tu m'as prêté est passionnant. »",
        "2) Mets au discours indirect : Il a dit : « Je reviendrai demain. »",
        "3) Sujet : « La lecture est la meilleure compagnie. Rédige un paragraphe argumentatif (10 lignes) pour défendre cette opinion. »",
        "Pistes de correction :",
        "1) Subordonnée relative (complète le nom « livre »).",
        "2) Il a dit qu'il reviendrait le lendemain.",
        "3) Thèse affirmée + deux arguments (culture, imagination) avec exemples et connecteurs (d'abord, ensuite, par exemple, donc).",
      ],
    },
  ],
};

const methode: PdfDoc = {
  id: "methode-revision",
  kind: "methode",
  title: "Méthode — Réviser la 3AC sans paniquer",
  subtitle: "Planning, rappel actif et gestion de l'examen régional",
  subjectId: "fr",
  pages: [
    {
      heading: "1. Un planning réaliste",
      body: [
        "• Répartis les 9 matières sur la semaine : 2 matières par soirée + 30 min de révision d'une matière ancienne.",
        "• Priorise les gros coefficients : Maths (3), Français (3), PC, SVT, puis les langues et l'informatique.",
        "• Une pause de 10 min toutes les 50 min. Le cerveau consolide pendant les pauses.",
      ],
    },
    {
      heading: "2. Le rappel actif (la méthode qui marche)",
      body: [
        "• Relire ne suffit pas : ferme le cahier et récite la leçon à voix haute, puis vérifie.",
        "• Refais les exercices SANS regarder la correction, puis compare.",
        "• Fais-toi des fiches de formules : une page par chapitre, à réciter chaque dimanche.",
      ],
    },
    {
      heading: "3. S'entraîner en conditions réelles",
      body: [
        "• Un examen régional blanc chaque quinzaine, chronométré, sans téléphone.",
        "• Commence par les exercices que tu sais faire : la confiance rapporte des points.",
        "• Soigne la rédaction : en maths, écris « D'après le théorème de… » ; en français, réponds par des phrases complètes.",
      ],
    },
    {
      heading: "4. La veille et le jour J",
      body: [
        "• La veille : relis seulement tes fiches, dors au moins 8 h.",
        "• Le jour J : arrive en avance, respire, lis tout le sujet avant de commencer et gère ton temps par exercice.",
        "• Et rappelle-toi : l'examen récompense la régularité, pas le miracle de la dernière nuit.",
      ],
    },
  ],
};

export const DOCUMENTS: PdfDoc[] = [
  methode,
  examMath, examPC, examSVT, examFr,
];

/* Course documents for every chapter with real content */
SUBJECTS.forEach((s) => {
  allChapters(s).forEach((ch) => {
    if (ch.lang === "fr" && (ch.sections || ch.formules)) {
      DOCUMENTS.push(chapterToDoc(s, ch));
    }
  });
});

export const stats = {
  subjects: SUBJECTS.length,
  chapters: totalChapters,
  lessons: SUBJECTS.reduce(
    (n, s) => n + allChapters(s).filter((c) => c.sections || c.formules).length, 0
  ),
  docs: DOCUMENTS.length,
  exercices: SUBJECTS.reduce(
    (n, s) => n + allChapters(s).reduce((m, c) => m + (c.exercices?.length ?? 0), 0), 0
  ),
};

export const subjectById = (id: string) => SUBJECTS.find((s) => s.id === id);
