import type { Subject } from "./types";

/* ============================================================
   MATHÉMATIQUES — Programme officiel 3ème année collège (3AC)
   ============================================================ */
export const maths: Subject = {
  id: "math",
  name: "Mathématiques",
  ar: "الرياضيات",
  color: "#F5A524",
  icon: "calc",
  description: "Calculs numériques, calcul littéral, fonctions, statistiques et géométrie — tout le programme officiel avec exercices corrigés.",
  semestres: [
    {
      name: "Semestre 1",
      chapters: [
        {
          id: "math-1", num: 1, title: "Puissances d'un nombre rationnel", lang: "fr",
          duration: 50, difficulty: 1,
          resume: "Manipuler les puissances à exposant entier relatif, simplifier des expressions et écrire en notation scientifique.",
          sections: [
            { h: "Définition", p: [
              "Soit a un nombre rationnel non nul et n un entier positif. On pose aⁿ = a × a × … × a (n facteurs) et a⁻ⁿ = 1/aⁿ. Par convention, a⁰ = 1.",
              "Exemple : 2⁵ = 32 ; 5⁻² = 1/25 = 0,04 ; (−3)³ = −27 car l'exposant est impair.",
            ]},
            { h: "Règles de calcul", p: [
              "aⁿ × aᵐ = aⁿ⁺ᵐ — on additionne les exposants quand on multiplie deux puissances de même base.",
              "aⁿ / aᵐ = aⁿ⁻ᵐ — on soustrait les exposants quand on divise.",
              "(aⁿ)ᵐ = aⁿˣᵐ — on multiplie les exposants pour une puissance de puissance.",
              "(a × b)ⁿ = aⁿ × bⁿ et (a/b)ⁿ = aⁿ / bⁿ — l'exposant se distribue sur un produit ou un quotient.",
            ]},
            { h: "Notation scientifique", p: [
              "Tout nombre positif peut s'écrire a × 10ⁿ avec 1 ≤ a < 10. C'est indispensable pour comparer les très grands et très petits nombres.",
              "Exemple : 45 000 = 4,5 × 10⁴ et 0,00032 = 3,2 × 10⁻⁴.",
            ]},
          ],
          formules: [
            { f: "aⁿ × aᵐ = aⁿ⁺ᵐ" },
            { f: "aⁿ / aᵐ = aⁿ⁻ᵐ" },
            { f: "(aⁿ)ᵐ = aⁿˣᵐ" },
            { f: "a⁰ = 1  (a ≠ 0)", note: "convention fondamentale" },
            { f: "a⁻ⁿ = 1 / aⁿ" },
          ],
          points: [
            "Ne jamais additionner les bases : 2³ × 5³ ≠ 10⁶ est FAUX… en fait 2³×5³ = (2×5)³ = 10³ ✔ (distributivité sur le produit).",
            "Attention aux signes : (−2)⁴ = 16 mais −2⁴ = −16.",
            "Pour comparer, mettre tout sous la même base ou le même exposant.",
          ],
          exercices: [
            { q: "Simplifie : A = (2³ × 2⁵) / 2⁶", a: "A = 2³⁺⁵⁻⁶ = 2² = 4." },
            { q: "Écris en notation scientifique : 0,000 072 5", a: "0,000 072 5 = 7,25 × 10⁻⁵." },
            { q: "Calcule : B = (10³)² × 10⁻⁴ / 10⁻²", a: "B = 10⁶ × 10⁻⁴ × 10² = 10⁶⁻⁴⁺² = 10⁴ = 10 000." },
          ],
        },
        {
          id: "math-2", num: 2, title: "Racines carrées", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "Définir la racine carrée, simplifier √a, rationaliser un dénominateur et résoudre x² = a.",
          sections: [
            { h: "Définition et existence", p: [
              "Pour tout nombre positif a, il existe un unique nombre positif dont le carré vaut a : on le note √a. Ainsi (√a)² = a et √(a²) = a pour a ≥ 0.",
              "√9 = 3 car 3² = 9. Attention : √9 ≠ −3. La racine carrée d'un nombre négatif n'existe pas dans ℝ : √(−4) est impossible.",
            ]},
            { h: "Calculs avec les racines", p: [
              "√(a × b) = √a × √b — la racine se distribue sur un PRODUIT. Exemple : √50 = √(25×2) = 5√2.",
              "√(a/b) = √a / √b (b > 0). Exemple : √(49/4) = 7/2.",
              "PIÈGE CLASSIQUE : √(a + b) ≠ √a + √b. En effet √(9+16) = √25 = 5 alors que √9 + √16 = 3 + 4 = 7.",
            ]},
            { h: "Équation x² = a", p: [
              "Si a > 0, l'équation x² = a admet deux solutions : x = √a et x = −√a.",
              "Si a = 0, la seule solution est x = 0. Si a < 0, aucune solution.",
              "Exemple : x² = 7 donne x = √7 ou x = −√7.",
            ]},
          ],
          formules: [
            { f: "√(a × b) = √a × √b", note: "a ≥ 0, b ≥ 0" },
            { f: "√(a / b) = √a / √b", note: "a ≥ 0, b > 0" },
            { f: "(√a)² = a", note: "a ≥ 0" },
            { f: "x² = a ⇒ x = √a  ou  x = −√a", note: "a > 0" },
            { f: "1/√a = √a / a", note: "rationalisation du dénominateur" },
          ],
          points: [
            "Simplifier = extraire les carrés parfaits : √72 = √(36×2) = 6√2.",
            "Pour additionner : 3√2 + 5√2 = 8√2 mais on ne peut pas simplifier √2 + √3.",
            "Rationaliser : 3/(2√5) = 3√5/10.",
          ],
          exercices: [
            { q: "Écris sous la forme a√b : C = √72 + √50 − √98", a: "C = 6√2 + 5√2 − 7√2 = 4√2." },
            { q: "Rationalise : D = 6 / √3", a: "D = 6√3 / 3 = 2√3." },
            { q: "Résous : x² = 12", a: "x = √12 = 2√3 ou x = −2√3. Deux solutions : S = {−2√3 ; 2√3}." },
          ],
        },
        {
          id: "math-3", num: 3, title: "Développement et factorisation", lang: "fr",
          duration: 60, difficulty: 2,
          resume: "Développer un produit, factoriser une somme et maîtriser les trois identités remarquables.",
          sections: [
            { h: "Développer", p: [
              "Développer, c'est transformer un produit en somme grâce à la distributivité : k(a + b) = ka + kb et (a + b)(c + d) = ac + ad + bc + bd.",
              "Exemple : (x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15.",
            ]},
            { h: "Les identités remarquables", p: [
              "(a + b)² = a² + 2ab + b² — le double produit ne doit jamais être oublié.",
              "(a − b)² = a² − 2ab + b².",
              "(a + b)(a − b) = a² − b² — très utile pour calculer vite : 51 × 49 = (50+1)(50−1) = 2500 − 1 = 2499.",
            ]},
            { h: "Factoriser", p: [
              "Factoriser, c'est transformer une somme en produit. Deux techniques : le facteur commun et les identités remarquables à l'envers.",
              "Facteur commun : 5x + 15 = 5(x + 3) et (x+2)(x−1) + (x+2)(3x+4) = (x+2)[(x−1)+(3x+4)] = (x+2)(4x+3).",
              "Identité : x² − 49 = x² − 7² = (x + 7)(x − 7) et x² + 10x + 25 = (x + 5)².",
            ]},
          ],
          formules: [
            { f: "(a + b)² = a² + 2ab + b²" },
            { f: "(a − b)² = a² − 2ab + b²" },
            { f: "(a + b)(a − b) = a² − b²" },
            { f: "k(a + b) = ka + kb", note: "distributivité simple" },
          ],
          points: [
            "Ne jamais écrire (a + b)² = a² + b² — c'est l'erreur n°1 à l'examen régional.",
            "Pour factoriser, toujours chercher d'abord un facteur commun.",
            "x² − b² se factorise toujours ; x² + b² ne se factorise pas dans ℝ.",
          ],
          exercices: [
            { q: "Développe et réduis : E = (2x − 3)²", a: "E = 4x² − 12x + 9." },
            { q: "Factorise : F = 25x² − 16", a: "F = (5x)² − 4² = (5x − 4)(5x + 4)." },
            { q: "Factorise : G = (x − 3)(x + 1) − (x − 3)(2x − 5)", a: "G = (x − 3)[(x + 1) − (2x − 5)] = (x − 3)(−x + 6)." },
          ],
        },
        {
          id: "math-4", num: 4, title: "Les polynômes", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "Reconnaître un polynôme, déterminer son degré, le réduire et l'utiliser pour calculer des valeurs.",
          sections: [
            { h: "Vocabulaire", p: [
              "Un polynôme est une somme de monômes : P(x) = aₙxⁿ + … + a₁x + a₀. Le degré est la plus grande puissance de x présente.",
              "P(x) = 3x³ − 2x² + x − 7 est de degré 3. Le terme 3x³ est le terme dominant, −7 est le terme constant.",
            ]},
            { h: "Opérations", p: [
              "Addition : on regroupe les termes de même degré. (2x² + 3x − 1) + (x² − 5x + 4) = 3x² − 2x + 3.",
              "Multiplication : on distribue chaque terme. Le degré du produit est la somme des degrés.",
              "Pour calculer P(2), on remplace x par 2 : P(2) = 3(8) − 2(4) + 2 − 7 = 24 − 8 + 2 − 7 = 11.",
            ]},
            { h: "Racine d'un polynôme", p: [
              "Un nombre r est racine de P si P(r) = 0. Si P(a) = 0, alors (x − a) est un facteur de P(x).",
              "Exemple : P(x) = x² − 5x + 6. Comme P(2) = 0, on peut écrire P(x) = (x − 2)(x − 3). Les racines sont 2 et 3.",
            ]},
          ],
          formules: [
            { f: "P(a) = 0 ⇒ (x − a) divise P(x)", note: "théorème du facteur" },
            { f: "deg(P × Q) = deg(P) + deg(Q)" },
          ],
          points: [
            "Réduire = regrouper les termes de même degré avant tout calcul.",
            "Tester des valeurs simples (0, 1, −1) pour trouver une racine.",
            "Un polynôme de degré n a au plus n racines.",
          ],
          exercices: [
            { q: "Réduis : P(x) = 3x² + 5x − 2x² − x + 4", a: "P(x) = x² + 4x + 4 = (x + 2)²." },
            { q: "Montre que 1 est racine de Q(x) = x² − 3x + 2 puis factorise.", a: "Q(1) = 1 − 3 + 2 = 0 ✔. Q(x) = (x − 1)(x − 2)." },
          ],
        },
        {
          id: "math-5", num: 5, title: "Équations et inéquations à une inconnue", lang: "fr",
          duration: 65, difficulty: 2,
          resume: "Résoudre ax + b = 0, les équations-produit nul et les inéquations, puis représenter les solutions.",
          sections: [
            { h: "Équations du premier degré", p: [
              "Une équation ax + b = 0 (a ≠ 0) admet l'unique solution x = −b/a.",
              "On résout en isolant x : on peut ajouter ou retrancher le même nombre aux deux membres, multiplier ou diviser par un même nombre NON NUL.",
              "Exemple : 3x − 7 = 2x + 5 → 3x − 2x = 5 + 7 → x = 12.",
            ]},
            { h: "Équations-produit nul", p: [
              "Règle d'or : un produit est nul si et seulement si l'un de ses facteurs est nul.",
              "(2x − 1)(x + 3) = 0 donne 2x − 1 = 0 ou x + 3 = 0, soit x = 1/2 ou x = −3.",
              "Pense à factoriser d'abord : x² − 9 = 0 devient (x − 3)(x + 3) = 0 donc x = 3 ou x = −3.",
            ]},
            { h: "Inéquations", p: [
              "On résout comme une équation, MAIS en multipliant ou divisant par un nombre NÉGATIF, on change le sens de l'inégalité.",
              "Exemple : −2x < 6 donne x > −3 (on divise par −2, le sens s'inverse).",
              "La solution se représente sur une droite graduée : crochet ouvert vers la solution ou fermé selon ≤ et ≥.",
            ]},
          ],
          formules: [
            { f: "ax + b = 0 ⇒ x = −b/a", note: "a ≠ 0" },
            { f: "A × B = 0 ⇒ A = 0  ou  B = 0" },
            { f: "ax < b ⇒ x > b/a  si a < 0", note: "le sens s'inverse !" },
          ],
          points: [
            "Vérifie toujours ta solution en la remplaçant dans l'équation de départ.",
            "Le produit nul exige une factorisation préalable — jamais sur une somme.",
            "Sur la droite graduée, [ est fermé (≤), ] est ouvert (>)… attention au sens des crochets.",
          ],
          exercices: [
            { q: "Résous : 5(x − 2) = 3x + 4", a: "5x − 10 = 3x + 4 → 2x = 14 → x = 7." },
            { q: "Résous : (x − 4)(3x + 6) = 0", a: "x = 4 ou x = −2. S = {−2 ; 4}." },
            { q: "Résous et représente : 4x − 3 ≤ 2x + 7", a: "2x ≤ 10 → x ≤ 5. Sur la droite : crochet fermé en 5, orienté vers la gauche." },
          ],
        },
        {
          id: "math-6", num: 6, title: "Théorème de Thalès", lang: "fr",
          duration: 60, difficulty: 3,
          resume: "Calculer des longueurs grâce aux droites parallèles et utiliser la réciproque pour prouver le parallélisme.",
          sections: [
            { h: "Le théorème direct", p: [
              "Dans un triangle ABC, si M est sur [AB], N sur [AC] et (MN) parallèle à (BC), alors les rapports sont égaux : AM/AB = AN/AC = MN/BC.",
              "C'est l'outil idéal pour calculer une longueur inaccessible : il suffit de connaître 3 longueurs sur 4 dans un rapport.",
            ]},
            { h: "Exemple type examen", p: [
              "On donne AM = 4 cm, AB = 10 cm et BC = 15 cm avec (MN)//(BC). D'après Thalès : AM/AB = MN/BC donc 4/10 = MN/15.",
              "Par produit en croix : MN = 4 × 15 / 10 = 6 cm.",
            ]},
            { h: "La réciproque de Thalès", p: [
              "Si M ∈ [AB], N ∈ [AC] et AM/AB = AN/AC avec les points alignés dans le même ordre, alors (MN) est parallèle à (BC).",
              "Attention : si les rapports ne sont PAS égaux, les droites ne sont pas parallèles — c'est ainsi qu'on démontre un non-parallélisme.",
            ]},
          ],
          formules: [
            { f: "(MN) // (BC) ⇒ AM/AB = AN/AC = MN/BC", note: "configuration triangle" },
            { f: "AM/AB = AN/AC ⇒ (MN) // (BC)", note: "réciproque, même ordre des points" },
          ],
          points: [
            "Rédige toujours : « D'après le théorème de Thalès… » puis pose les rapports.",
            "Vérifie l'alignement dans le même ordre avant d'appliquer la réciproque.",
            "Thalès = parallèles ⇔ rapports égaux ; Pythagore = triangle rectangle.",
          ],
          exercices: [
            { q: "Avec (DE)//(BC), AD = 3, AB = 9, AE = 4. Calcule AC.", a: "AD/AB = AE/AC → 3/9 = 4/AC → AC = 12." },
            { q: "AB = 6, AM = 2, AC = 9, AN = 3. (MN) et (BC) sont-elles parallèles ?", a: "AM/AB = 2/6 = 1/3 et AN/AC = 3/9 = 1/3. Rapports égaux et même ordre : d'après la réciproque de Thalès, (MN)//(BC)." },
          ],
        },
        {
          id: "math-7", num: 7, title: "Théorème de Pythagore", lang: "fr",
          duration: 50, difficulty: 2,
          resume: "Calculer une longueur dans un triangle rectangle et démontrer qu'un triangle est (ou n'est pas) rectangle.",
          sections: [
            { h: "Le théorème", p: [
              "Si un triangle est rectangle, alors le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés : BC² = AB² + AC².",
              "L'hypoténuse est TOUJOURS le côté le plus long, opposé à l'angle droit.",
            ]},
            { h: "Calculer une longueur", p: [
              "Triangle ABC rectangle en A avec AB = 6 et AC = 8. BC² = 6² + 8² = 36 + 64 = 100 donc BC = √100 = 10.",
              "Pour un côté de l'angle droit : AB² = BC² − AC² (on soustrait au lieu d'ajouter).",
            ]},
            { h: "La réciproque", p: [
              "Si BC² = AB² + AC², alors le triangle est rectangle en A. On calcule séparément le carré du plus grand côté et la somme des deux autres.",
              "Exemple : 5² = 25 et 3² + 4² = 25. Égalité vérifiée : le triangle 3-4-5 est rectangle. C'est le célèbre triplet pythagoricien.",
            ]},
          ],
          formules: [
            { f: "Hypoténuse² = côté² + côté²", note: "triangle rectangle" },
            { f: "3² + 4² = 5²", note: "triplet classique à retenir" },
          ],
          points: [
            "Identifie d'abord l'angle droit : c'est lui qui désigne l'hypoténuse.",
            "La réciproque sert à PROUVER qu'un triangle est rectangle.",
            "Si l'égalité échoue, le triangle n'est pas rectangle (contraposée).",
          ],
          exercices: [
            { q: "Un rectangle a des côtés 5 cm et 12 cm. Calcule sa diagonale.", a: "d² = 5² + 12² = 25 + 144 = 169 donc d = 13 cm." },
            { q: "Triangle de côtés 7, 24, 25. Est-il rectangle ?", a: "25² = 625 et 7² + 24² = 49 + 576 = 625. Égalité : d'après la réciproque de Pythagore, il est rectangle." },
          ],
        },
        {
          id: "math-8", num: 8, title: "Trigonométrie dans le triangle rectangle", lang: "fr",
          duration: 55, difficulty: 3,
          resume: "Sinus, cosinus, tangente : les trois rapports pour calculer longueurs et angles.",
          sections: [
            { h: "Les trois rapports", p: [
              "Dans un triangle rectangle, pour un angle aigu α : sin α = côté opposé / hypoténuse ; cos α = côté adjacent / hypoténuse ; tan α = opposé / adjacent.",
              "Moyen mnémotechnique : SOH-CAH-TOA (Sin = Opposé/Hypoténuse, Cos = Adjacent/Hypoténuse, Tan = Opposé/Adjacent).",
            ]},
            { h: "Valeurs remarquables", p: [
              "À connaître par cœur : sin 30° = 1/2, cos 30° = √3/2, tan 30° = √3/3 ; sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1 ; sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.",
              "Relation fondamentale : cos²α + sin²α = 1 pour tout angle α.",
            ]},
            { h: "Utilisation", p: [
              "Pour calculer un côté : choisis le rapport qui fait intervenir le côté cherché et une donnée. Exemple : si on connaît l'hypoténuse et qu'on cherche l'opposé, on utilise sin.",
              "Pour calculer un angle : on utilise la touche « cos⁻¹ » ou « tan⁻¹ » de la calculatrice.",
            ]},
          ],
          formules: [
            { f: "sin α = opposé / hypoténuse" },
            { f: "cos α = adjacent / hypoténuse" },
            { f: "tan α = opposé / adjacent" },
            { f: "cos²α + sin²α = 1" },
          ],
          points: [
            "SOH-CAH-TOA évite 90 % des erreurs de choix de rapport.",
            "L'hypoténuse n'intervient jamais dans la tangente.",
            "sin et cos sont toujours compris entre 0 et 1 dans un triangle rectangle.",
          ],
          exercices: [
            { q: "Triangle rectangle, hypoténuse 10, angle 30°. Calcule le côté opposé.", a: "sin 30° = opposé/10 → opposé = 10 × 0,5 = 5." },
            { q: "Côtés opposé 3 et adjacent 4. Calcule l'angle α (arrondi au degré).", a: "tan α = 3/4 = 0,75 → α = tan⁻¹(0,75) ≈ 37°." },
          ],
        },
      ],
    },
    {
      name: "Semestre 2",
      chapters: [
        {
          id: "math-9", num: 9, title: "Systèmes de deux équations à deux inconnues", lang: "fr",
          duration: 65, difficulty: 3,
          resume: "Résoudre un système par substitution et par combinaison, puis résoudre des problèmes concrets.",
          sections: [
            { h: "Méthode par substitution", p: [
              "On exprime une inconnue en fonction de l'autre dans une équation, puis on remplace dans la seconde.",
              "Exemple : { x − y = 1 et 2x + 3y = 12. De la première : x = y + 1. On remplace : 2(y+1) + 3y = 12 → 5y = 10 → y = 2 puis x = 3.",
            ]},
            { h: "Méthode par combinaison", p: [
              "On multiplie les équations pour obtenir des coefficients opposés, puis on additionne pour éliminer une inconnue.",
              "Exemple : { 3x + 2y = 16 et x + 2y = 8. Soustraction membre à membre : 2x = 8 → x = 4 puis 4 + 2y = 8 → y = 2.",
            ]},
            { h: "Mise en équation d'un problème", p: [
              "Dans une ferme, il y a 20 têtes et 56 pattes (poules et lapins). Soit p les poules, l les lapins : p + l = 20 et 2p + 4l = 56.",
              "De la première : p = 20 − l. Donc 2(20 − l) + 4l = 56 → 2l = 16 → l = 8 lapins et p = 12 poules.",
            ]},
          ],
          formules: [
            { f: "{ ax + by = e ; cx + dy = f", note: "forme générale" },
          ],
          points: [
            "Substitution : idéal quand un coefficient vaut 1.",
            "Combinaison : idéal quand aucun coefficient ne vaut 1.",
            "Conclus toujours par le couple solution (x ; y) et vérifie-le dans les DEUX équations.",
          ],
          exercices: [
            { q: "Résous : { 2x + y = 7 ; x − y = 2", a: "Addition : 3x = 9 → x = 3 puis y = 1. S = (3 ; 1)." },
            { q: "Un stylo et un cahier coûtent 12 DH ; 3 stylos et 2 cahiers coûtent 26 DH. Prix de chaque article ?", a: "{ s + c = 12 ; 3s + 2c = 26 }. c = 12 − s → 3s + 24 − 2s = 26 → s = 2 DH, c = 10 DH." },
          ],
        },
        {
          id: "math-10", num: 10, title: "Fonctions numériques", lang: "fr",
          duration: 65, difficulty: 3,
          resume: "Fonctions linéaires et affines : tableau, représentation graphique, coefficient directeur et résolution de problèmes.",
          sections: [
            { h: "Fonction linéaire", p: [
              "Une fonction linéaire est de la forme f(x) = ax. Sa représentation graphique est une DROITE qui passe par l'origine O.",
              "Elle modélise la proportionnalité : si x double, f(x) double. Exemple : prix de x kg de pommes à 8 DH le kilo : f(x) = 8x.",
            ]},
            { h: "Fonction affine", p: [
              "Une fonction affine est de la forme f(x) = ax + b. Sa courbe est une droite qui coupe l'axe des ordonnées en (0 ; b).",
              "a est le coefficient directeur (la pente) : quand x augmente de 1, f(x) augmente de a. b est l'ordonnée à l'origine.",
            ]},
            { h: "Déterminer une fonction affine", p: [
              "Connaissant deux points, on calcule a = (f(x₂) − f(x₁)) / (x₂ − x₁) puis b = f(x₁) − a·x₁.",
              "Exemple : f(1) = 3 et f(−1) = −1. a = (3 − (−1))/(1 − (−1)) = 4/2 = 2. Puis b = 3 − 2×1 = 1. Donc f(x) = 2x + 1.",
            ]},
          ],
          formules: [
            { f: "f(x) = ax", note: "linéaire : droite passant par O" },
            { f: "f(x) = ax + b", note: "affine" },
            { f: "a = (y₂ − y₁) / (x₂ − x₁)", note: "coefficient directeur" },
          ],
          points: [
            "Toute fonction linéaire est affine (avec b = 0), l'inverse est faux.",
            "Pour lire graphiquement : ordonnée à l'origine = intersection avec l'axe vertical.",
            "Deux droites parallèles ont le même coefficient directeur.",
          ],
          exercices: [
            { q: "Trace le tableau de f(x) = −2x + 4 pour x = 0, 1, 2.", a: "f(0) = 4, f(1) = 2, f(2) = 0. La droite descend (a négatif)." },
            { q: "Détermine la fonction affine telle que f(2) = 5 et f(0) = 1.", a: "a = (5 − 1)/(2 − 0) = 2 ; b = f(0) = 1. f(x) = 2x + 1." },
          ],
        },
        {
          id: "math-11", num: 11, title: "Statistiques", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "Effectifs, fréquences, moyenne, médiane et représentations graphiques d'une série statistique.",
          sections: [
            { h: "Vocabulaire", p: [
              "L'effectif d'une valeur est le nombre de fois où elle apparaît. L'effectif total est la somme de tous les effectifs.",
              "La fréquence = effectif / effectif total. Exprimée en pourcentage, la somme des fréquences vaut 100 %.",
            ]},
            { h: "Moyenne et moyenne pondérée", p: [
              "Moyenne = somme des valeurs / effectif total. Avec des effectifs : m = (n₁x₁ + n₂x₂ + …) / (n₁ + n₂ + …).",
              "Exemple : notes 12 (coef 2), 15 (coef 1), 9 (coef 3) : m = (24 + 15 + 27)/6 = 66/6 = 11.",
            ]},
            { h: "Médiane et étendue", p: [
              "La médiane partage la série ORDONNÉE en deux moitiés égales : 50 % des valeurs sont en dessous, 50 % au-dessus.",
              "Série 3 ; 5 ; 7 ; 8 ; 12 : la médiane est 7. L'étendue = plus grande valeur − plus petite valeur = 12 − 3 = 9.",
            ]},
          ],
          formules: [
            { f: "m = Σ(nᵢ × xᵢ) / Σnᵢ", note: "moyenne pondérée" },
            { f: "fréquence = effectif / effectif total" },
            { f: "étendue = max − min" },
          ],
          points: [
            "Ordonne toujours la série avant de chercher la médiane.",
            "Effectif impair : médiane = valeur centrale ; pair : moyenne des deux valeurs centrales.",
            "Diagramme en bâtons, circulaire ou histogramme : choisis selon la nature des données.",
          ],
          exercices: [
            { q: "Série : 4 ; 9 ; 2 ; 9 ; 6. Calcule moyenne, médiane et étendue.", a: "m = 30/5 = 6. Série ordonnée 2;4;6;9;9 → médiane 6. Étendue = 9 − 2 = 7." },
            { q: "Dans une classe, 12 élèves ont 10, 8 ont 14. Moyenne ?", a: "m = (120 + 112)/20 = 232/20 = 11,6." },
          ],
        },
        {
          id: "math-12", num: 12, title: "Vecteurs de l'espace", lang: "fr",
          duration: 50, difficulty: 3,
          resume: "Découvrir les vecteurs dans l'espace : égalité, somme (relation de Chasles) et représentation dans un parallélépipède.",
          points: [
            "Un vecteur de l'espace est défini par une direction, un sens et une longueur, comme dans le plan.",
            "Deux vecteurs sont égaux s'ils ont même direction, même sens et même norme.",
            "Relation de Chasles : AB⃗ + BC⃗ = AC⃗, valable aussi dans l'espace.",
            "Dans un parallélépipède rectangle ABCDEFGH : AB⃗ = DC⃗ = EF⃗ = HG⃗.",
          ],
          formules: [
            { f: "AB⃗ + BC⃗ = AC⃗", note: "relation de Chasles" },
          ],
          exercices: [
            { q: "Dans le parallélépipède ABCDEFGH, complète : AE⃗ + EF⃗ = ?", a: "AE⃗ + EF⃗ = AF⃗ (Chasles)." },
          ],
        },
        {
          id: "math-13", num: 13, title: "La sphère et les sections planes", lang: "fr",
          duration: 50, difficulty: 3,
          resume: "Vocabulaire de la sphère, aire et volume, et nature des sections d'un solide par un plan.",
          points: [
            "La sphère de centre O et de rayon R est l'ensemble des points M tels que OM = R.",
            "La section d'une sphère par un plan est un CERCLE ; si le plan passe par le centre, c'est un grand cercle.",
            "Section d'un cône par un plan parallèle à la base : un cercle (réduction). Section d'un cylindre parallèlement à la base : un disque.",
            "La section d'un cube par un plan parallèle à une face est un carré.",
          ],
          formules: [
            { f: "V = (4/3) × π × R³", note: "volume de la sphère" },
            { f: "A = 4 × π × R²", note: "aire de la sphère" },
          ],
          exercices: [
            { q: "Calcule le volume d'une sphère de rayon 3 cm (laisse π).", a: "V = (4/3)π × 27 = 36π cm³ ≈ 113 cm³." },
          ],
        },
      ],
    },
  ],
};

/* ============================================================
   PHYSIQUE-CHIMIE — 3AC
   ============================================================ */
export const pc: Subject = {
  id: "pc",
  name: "Physique-Chimie",
  ar: "الفيزياء والكيمياء",
  color: "#FF6B5E",
  icon: "flask",
  description: "Chimie (composés, classification, métaux, pH) et physique (travail, énergie, électricité, lentilles) avec schémas et calculs corrigés.",
  semestres: [
    {
      name: "Chimie",
      chapters: [
        {
          id: "pc-1", num: 1, title: "Les composés chimiques et leurs formules", lang: "fr",
          duration: 50, difficulty: 2,
          resume: "Lire et écrire les formules chimiques, utiliser la valence et comprendre la règle de l'octet.",
          sections: [
            { h: "Corps simples et corps composés", p: [
              "Un corps simple est formé d'un seul type d'atomes : O₂, Fe, Cu. Un corps composé réunit plusieurs types d'atomes : H₂O, CO₂, NaCl.",
              "Une formule chimique indique la nature des atomes (symboles) et leur nombre (indices) : H₂O = 2 atomes d'hydrogène + 1 atome d'oxygène.",
            ]},
            { h: "La valence", p: [
              "La valence est le nombre de liaisons qu'un atome peut former : H est monovalent (1), O divalent (2), N trivalent (3), C tétravalent (4).",
              "Pour écrire la formule d'un composé binaire AxBy, on croise les valences : Al³⁺ et O²⁻ donnent Al₂O₃.",
            ]},
            { h: "Les ions", p: [
              "Un cation est un atome qui a PERDU des électrons (charge +) : Na⁺, Ca²⁺, Fe³⁺. Un anion a GAGNÉ des électrons (charge −) : Cl⁻, O²⁻.",
              "Un composé ionique est électriquement neutre : dans NaCl, la charge + de Na⁺ compense la charge − de Cl⁻.",
            ]},
          ],
          formules: [
            { f: "Corps composé = plusieurs types d'atomes" },
            { f: "Formule : indices = nombre d'atomes" },
            { f: "Charge totale = 0 (composé neutre)" },
          ],
          points: [
            "Les indices se placent en bas à droite du symbole.",
            "Le coefficient devant la formule multiplie TOUTE la molécule : 3H₂O = 6 H et 3 O.",
            "Croiser les valences permet de retrouver les formules classiques (H₂O, CO₂, Al₂O₃).",
          ],
          exercices: [
            { q: "Que représente la formule 2CO₂ ?", a: "2 molécules de dioxyde de carbone, soit 2 atomes de carbone et 4 atomes d'oxygène." },
            { q: "Écris la formule du composé formé par Mg²⁺ et Cl⁻.", a: "MgCl₂ : il faut deux ions Cl⁻ pour compenser Mg²⁺." },
          ],
        },
        {
          id: "pc-2", num: 2, title: "La classification périodique des éléments", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "Structure de l'atome, numéro atomique, couches électroniques et organisation du tableau périodique.",
          sections: [
            { h: "Structure de l'atome", p: [
              "L'atome est formé d'un noyau (protons + neutrons) autour duquel gravitent des électrons. Le numéro atomique Z = nombre de protons = nombre d'électrons (atome neutre).",
              "Le nombre de masse A = Z + N (protons + neutrons). Deux isotopes ont le même Z mais des A différents (¹²C et ¹⁴C).",
            ]},
            { h: "Répartition des électrons", p: [
              "Les électrons se répartissent sur des couches K, L, M pouvant contenir au maximum 2, 8 puis 18 électrons.",
              "Exemple : le sodium ²³Na (Z = 11) : (K)²(L)⁸(M)¹ — 11 électrons répartis.",
            ]},
            { h: "Le tableau de Mendeleïev", p: [
              "Les éléments sont classés par Z croissant. Une LIGNE = période (même nombre de couches), une COLONNE = famille (même nombre d'électrons sur la couche externe).",
              "La dernière colonne regroupe les gaz nobles (couche externe saturée) : He, Ne, Ar — très stables, ils ne réagissent presque pas.",
            ]},
          ],
          formules: [
            { f: "A = Z + N", note: "nombre de masse" },
            { f: "Couches K, L, M : max 2, 8, 18 e⁻" },
            { f: "Même colonne ⇒ mêmes propriétés chimiques" },
          ],
          points: [
            "Z caractérise l'élément : changer Z change l'élément.",
            "Les atomes d'une même famille ont le même nombre d'électrons externes → même comportement.",
            "Un ion se forme par perte ou gain d'électrons de la couche externe, jamais du noyau.",
          ],
          exercices: [
            { q: "Pour l'atome ²⁷Al (Z = 13) : nombre de protons, neutrons, électrons et structure électronique ?", a: "13 protons, 14 neutrons (27 − 13), 13 électrons : (K)²(L)⁸(M)³. Il perd 3 e⁻ pour donner Al³⁺." },
            { q: "Le chlore a Z = 17. Sa structure électronique et son ion le plus probable ?", a: "(K)²(L)⁸(M)⁷. Il gagne 1 électron pour saturer la couche M : ion Cl⁻." },
          ],
        },
        {
          id: "pc-3", num: 3, title: "Les métaux usuels", lang: "fr",
          duration: 50, difficulty: 2,
          resume: "Propriétés du fer, de l'aluminium, du cuivre et du zinc : identification, oxydation et utilisations.",
          sections: [
            { h: "Identifier les métaux", p: [
              "Tous les métaux conduisent le courant électrique et la chaleur, sont malléables et brillants. On les distingue par densité, couleur et tests chimiques.",
              "Le fer est attiré par un aimant. Le cuivre est rouge-orangé. L'aluminium est léger (densité 2,7). Le zinc est gris bleuâtre.",
            ]},
            { h: "Oxydation et corrosion", p: [
              "À l'air humide, le fer s'oxyde : c'est la rouille (Fe₂O₃), poreuse, qui ne protège pas le métal.",
              "L'aluminium s'oxyde aussi mais l'alumine Al₂O₃ forme une couche fine et protectrice qui stoppe la corrosion. C'est pourquoi l'aluminium dure longtemps.",
            ]},
            { h: "Réactions avec les acides", p: [
              "Fer, zinc et aluminium réagissent avec l'acide chlorhydrique en dégageant du dihydrogène : Zn + 2HCl → ZnCl₂ + H₂.",
              "Le cuivre ne réagit PAS avec l'acide chlorhydrique : il est moins réactif. Test du dihydrogène : légère détonation à l'approche d'une flamme.",
            ]},
          ],
          formules: [
            { f: "Zn + 2HCl → ZnCl₂ + H₂", note: "dégagement de dihydrogène" },
            { f: "4Fe + 3O₂ → 2Fe₂O₃", note: "rouille" },
          ],
          points: [
            "Classement de réactivité : Zn > Fe > (H) > Cu.",
            "La rouille est poreuse, l'alumine est protectrice — différence décisive.",
            "Le dégagement de H₂ se teste avec une allumette : « pop » caractéristique.",
          ],
          exercices: [
            { q: "Comment distinguer rapidement un fil de fer d'un fil d'aluminium ?", a: "Avec un aimant : le fer est attiré, l'aluminium non. L'aluminium est aussi nettement plus léger." },
          ],
        },
        {
          id: "pc-4", num: 4, title: "Acides, bases et notion de pH", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "Mesurer le pH, classer les solutions et comprendre l'effet de la dilution.",
          sections: [
            { h: "L'échelle de pH", p: [
              "Le pH varie de 0 à 14. pH < 7 : solution acide ; pH = 7 : neutre ; pH > 7 : basique.",
              "Exemples : jus de citron ≈ 2,5 ; eau pure = 7 ; eau savonneuse ≈ 10 ; soude ≈ 13.",
            ]},
            { h: "Mesurer le pH", p: [
              "On utilise un indicateur coloré (BBT : jaune en acide, vert en neutre, bleu en base), du papier pH ou un pH-mètre pour une mesure précise.",
              "Le BBT (bleu de bromothymol) est l'indicateur de référence au collège.",
            ]},
            { h: "La dilution", p: [
              "Diluer un acide avec de l'eau pure rapproche son pH de 7 (il augmente). Diluer une base rapproche aussi son pH de 7 (il diminue).",
              "On ne verse JAMAIS l'eau dans l'acide concentré : on verse l'acide dans l'eau, lentement.",
            ]},
          ],
          formules: [
            { f: "pH < 7 acide — pH = 7 neutre — pH > 7 basique" },
            { f: "Dilution ⇒ pH → 7" },
          ],
          points: [
            "Le pH mesure le caractère acide ou basique, pas la dangerosité seule.",
            "BBT : jaune = acide, vert = neutre, bleu = basique.",
            "La solution de chlorure de sodium (eau salée) est neutre : pH = 7.",
          ],
          exercices: [
            { q: "Une solution donne une couleur jaune avec le BBT et un pH de 3. Que se passe-t-il si on la dilue 10 fois ?", a: "Le pH augmente et se rapproche de 7 (par exemple vers 4), la solution reste acide mais moins." },
          ],
        },
        {
          id: "pc-5", num: 5, title: "Les hydrocarbures et les combustions", lang: "fr",
          duration: 50, difficulty: 3,
          resume: "Hydrocarbures, distillation du pétrole et équations de combustion complète et incomplète.",
          sections: [
            { h: "Les hydrocarbures", p: [
              "Un hydrocarbure est un composé formé uniquement de carbone et d'hydrogène : méthane CH₄, butane C₄H₁₀, octane C₈H₁₈.",
              "Le pétrole est un mélange d'hydrocarbures séparés par distillation fractionnée : gaz, essence, kérosène, gazole, bitume.",
            ]},
            { h: "La combustion", p: [
              "Combustion complète (assez de dioxygène) : CH₄ + 2O₂ → CO₂ + 2H₂O. Produits : dioxyde de carbone et eau, flamme bleue.",
              "Combustion incomplète (manque d'O₂) : il se forme du monoxyde de carbone CO, toxique et mortel, ou du carbone (suie), flamme jaune.",
            ]},
          ],
          formules: [
            { f: "CH₄ + 2O₂ → CO₂ + 2H₂O", note: "combustion complète du méthane" },
          ],
          points: [
            "Le CO est inodore et invisible — d'où le danger des chauffages mal ventilés.",
            "Test de l'eau : sulfate de cuivre anhydre qui bleuit. Test du CO₂ : eau de chaux qui se trouble.",
            "Distillation = séparation selon les températures d'ébullition.",
          ],
          exercices: [
            { q: "Écris l'équation de la combustion complète du propane C₃H₈.", a: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O." },
          ],
        },
      ],
    },
    {
      name: "Physique",
      chapters: [
        {
          id: "pc-6", num: 6, title: "Travail d'une force", lang: "fr",
          duration: 55, difficulty: 3,
          resume: "Définir le travail mécanique, le calculer et distinguer travail moteur, résistant et nul.",
          sections: [
            { h: "Définition", p: [
              "Une force travaille lorsque son point d'application se déplace. Le travail de F constante sur un déplacement d se note W(F) = F × d × cos α, où α est l'angle entre la force et le déplacement.",
              "Unité : le joule (J), avec F en newtons (N) et d en mètres (m).",
            ]},
            { h: "Trois types de travail", p: [
              "Moteur (0 ≤ α < 90°) : la force favorise le mouvement, W > 0. Résistant (90° < α ≤ 180°) : elle s'oppose au mouvement, W < 0 (frottements).",
              "Nul si α = 90° : une force perpendiculaire au déplacement ne travaille pas — comme le poids d'une valise portée horizontalement.",
            ]},
            { h: "Travail du poids", p: [
              "W(P) = ± m × g × h selon le sens : moteur en descente, résistant en montée.",
              "Exemple : élever une charge de 20 kg de 3 m : W = 20 × 10 × 3 = 600 J (résistant pour celui qui soulève).",
            ]},
          ],
          formules: [
            { f: "W(F) = F × d × cos α", note: "en joules" },
            { f: "W(P) = ± m·g·h", note: "travail du poids" },
          ],
          points: [
            "Sans déplacement, pas de travail — même si on force !",
            "Les frottements donnent toujours un travail résistant.",
            "g ≈ 10 N/kg (9,81 en valeur précise).",
          ],
          exercices: [
            { q: "Une force de 50 N tire une caisse sur 4 m dans sa direction. Travail ?", a: "W = 50 × 4 × cos 0° = 200 J (moteur)." },
          ],
        },
        {
          id: "pc-7", num: 7, title: "Puissance d'une force", lang: "fr",
          duration: 45, difficulty: 2,
          resume: "Relier travail, temps et puissance ; comprendre le watt et le kilowattheure.",
          points: [
            "La puissance mesure la rapidité d'un transfert d'énergie : P = W / Δt, en watts (W).",
            "1 ch (cheval-vapeur) ≈ 736 W. Un appareil puissant fournit le même travail en moins de temps.",
            "Formule pratique en translation : P = F × v (force × vitesse).",
            "Énergie consommée : E = P × Δt. Le kWh = énergie d'un appareil de 1 kW fonctionnant 1 h.",
          ],
          formules: [
            { f: "P = W / Δt", note: "en watts" },
            { f: "E = P × Δt", note: "1 kWh = 3,6 × 10⁶ J" },
          ],
          exercices: [
            { q: "Un moteur fournit 1200 J en 4 s. Sa puissance ?", a: "P = 1200/4 = 300 W." },
          ],
        },
        {
          id: "pc-8", num: 8, title: "L'énergie mécanique", lang: "fr",
          duration: 55, difficulty: 3,
          resume: "Énergie de position, énergie cinétique et conservation de l'énergie mécanique.",
          sections: [
            { h: "Deux formes d'énergie", p: [
              "L'énergie de position (potentielle) : Ep = m × g × h. Plus un objet est haut, plus il a d'énergie de position.",
              "L'énergie cinétique : Ec = ½ × m × v². Elle dépend du carré de la vitesse : à vitesse doublée, Ec quadruple.",
            ]},
            { h: "Conservation", p: [
              "L'énergie mécanique Em = Ep + Ec. Sans frottements, Em se conserve : en chute libre, Ep se transforme en Ec.",
              "Une bille lâchée de 5 m arrive au sol avec Ec = m·g·h ; on peut en déduire v = √(2gh) ≈ 10 m/s.",
            ]},
          ],
          formules: [
            { f: "Ep = m × g × h", note: "en joules" },
            { f: "Ec = ½ × m × v²", note: "v en m/s" },
            { f: "Em = Ep + Ec = constante", note: "sans frottements" },
          ],
          points: [
            "m en kg, h en m, v en m/s → énergie en joules.",
            "Les frottements transforment une partie de Em en chaleur.",
            "La conversion Ep → Ec explique la vitesse en bas d'une pente.",
          ],
          exercices: [
            { q: "Une voiture de 1000 kg roule à 20 m/s. Son énergie cinétique ?", a: "Ec = ½ × 1000 × 400 = 200 000 J = 200 kJ." },
          ],
        },
        {
          id: "pc-9", num: 9, title: "L'énergie électrique", lang: "fr",
          duration: 50, difficulty: 2,
          resume: "Puissance électrique, énergie consommée et lecture d'un compteur électrique.",
          points: [
            "Puissance électrique : P = U × I (en watts), U en volts, I en ampères.",
            "Énergie : E = P × Δt = U × I × Δt, en joules ou en kWh.",
            "Le compteur électrique mesure l'énergie consommée en kWh : E(kWh) = P(kW) × Δt(h).",
            "Pour réduire la facture : diminuer la puissance des appareils ou leur durée de fonctionnement.",
          ],
          formules: [
            { f: "P = U × I" },
            { f: "E = P × Δt" },
          ],
          exercices: [
            { q: "Un radiateur 220 V est traversé par 5 A. Puissance et énergie pour 3 h ?", a: "P = 220 × 5 = 1100 W. E = 1,1 kW × 3 h = 3,3 kWh." },
          ],
        },
        {
          id: "pc-10", num: 10, title: "Les lentilles minces et la vision", lang: "fr",
          duration: 50, difficulty: 3,
          resume: "Lentilles convergentes et divergentes, foyer, image réelle et correction des défauts de l'œil.",
          points: [
            "Une lentille convergente est plus épaisse au centre : elle concentre les rayons au foyer F. Une divergente est plus mince au centre.",
            "La distance focale f se mesure en mètres ; la vergence C = 1/f s'exprime en dioptries (δ).",
            "Image d'un objet par lentille convergente : réelle et renversée si l'objet est au-delà de F ; agrandie et virtuelle (loupe) s'il est entre O et F.",
            "Myopie : œil trop convergent, corrigée par une lentille DIVERGENTE. Hypermétropie : corrigée par une lentille CONVERGENTE.",
          ],
          formules: [
            { f: "C = 1 / f", note: "vergence en dioptries, f en m" },
          ],
          exercices: [
            { q: "Une lentille a une distance focale de 0,5 m. Vergence ? Type d'image pour un objet à 2 m ?", a: "C = 1/0,5 = 2 δ. L'objet est au-delà de F : image réelle et renversée." },
          ],
        },
      ],
    },
  ],
};

/* ============================================================
   SCIENCES DE LA VIE ET DE LA TERRE — 3AC
   ============================================================ */
export const svt: Subject = {
  id: "svt",
  name: "Sciences de la Vie et de la Terre",
  ar: "علوم الحياة والأرض",
  color: "#2FBF71",
  icon: "leaf",
  description: "Nutrition et énergie, équilibres naturels, transmission de la vie et de l'hérédité, phénomènes géologiques — avec schémas clés.",
  semestres: [
    {
      name: "Unité 1 — Nutrition et énergie",
      chapters: [
        {
          id: "svt-1", num: 1, title: "Utilisation de la matière organique : respiration et fermentation", lang: "fr",
          duration: 60, difficulty: 2,
          resume: "Comment les cellules libèrent l'énergie contenue dans la matière organique, avec ou sans dioxygène.",
          sections: [
            { h: "La respiration cellulaire", p: [
              "En présence de dioxygène, les cellules dégradent le glucose pour libérer de l'énergie utilisable : c'est la respiration.",
              "Bilan : glucose + O₂ → CO₂ + H₂O + énergie. Les échanges gazeux (absorption d'O₂, rejet de CO₂) sont mis en évidence par l'eau de chaux qui se trouble.",
            ]},
            { h: "La fermentation", p: [
              "En ABSENCE de dioxygène, certaines cellules dégradent incomplètement le glucose : c'est la fermentation.",
              "Fermentation alcoolique (levures) : glucose → éthanol + CO₂ + énergie. Fermentation lactique (muscles, bactéries) : glucose → acide lactique + énergie.",
              "La fermentation libère MOINS d'énergie que la respiration : c'est une voie de secours.",
            ]},
            { h: "Applications", p: [
              "Pain et pâtisserie : le CO₂ de la levure fait lever la pâte. Fromage et yaourt : fermentation lactique. Crampes musculaires : accumulation d'acide lactique après un effort intense.",
            ]},
          ],
          formules: [
            { f: "Glucose + O₂ → CO₂ + H₂O + énergie", note: "respiration" },
            { f: "Glucose → éthanol + CO₂ + énergie", note: "fermentation alcoolique" },
            { f: "Glucose → acide lactique + énergie", note: "fermentation lactique" },
          ],
          points: [
            "Respiration = avec O₂, énergie maximale. Fermentation = sans O₂, énergie réduite.",
            "Les deux processus ont lieu dans les cellules, pas seulement dans les organes.",
            "L'eau de chaux trouble = présence de CO₂.",
          ],
          exercices: [
            { q: "Pourquoi la pâte à pain gonfle-t-elle ?", a: "Les levures réalisent une fermentation alcoolique : le CO₂ dégagé forme des bulles qui font gonfler la pâte." },
            { q: "Quelle différence énergétique entre respiration et fermentation ?", a: "La respiration libère beaucoup plus d'énergie car la dégradation du glucose est complète (jusqu'à CO₂ + H₂O), alors que la fermentation laisse des produits encore riches en énergie (éthanol, acide lactique)." },
          ],
        },
        {
          id: "svt-2", num: 2, title: "Rôle de la matière minérale chez les végétaux", lang: "fr",
          duration: 50, difficulty: 2,
          resume: "Absorption d'eau et de sels minéraux, photosynthèse et production de matière organique par la plante verte.",
          sections: [
            { h: "La nutrition minérale", p: [
              "La plante verte absorbe l'eau et les sels minéraux du sol par les poils absorbants des racines : c'est la solution du sol.",
              "Ces matières minérales circulent dans la sève brute (vaisseaux du xylème) vers les feuilles.",
            ]},
            { h: "La photosynthèse", p: [
              "À la lumière, dans les chloroplastes, la plante synthétise de la matière organique : CO₂ + H₂O + lumière → glucose + O₂.",
              "La sève élaborée (phloème) distribue le glucose à toute la plante. L'amidon, forme de stockage, est mis en évidence à l'eau iodée (coloration bleu-violacé).",
            ]},
          ],
          formules: [
            { f: "CO₂ + H₂O —lumière→ glucose + O₂", note: "photosynthèse" },
          ],
          points: [
            "Eau iodée → bleu-violacé = présence d'amidon.",
            "Sans lumière, pas de photosynthèse : la plante jaunit et s'épuise.",
            "Les engrais apportent les sels minéraux manquants (N, P, K).",
          ],
          exercices: [
            { q: "Une feuille éclairée puis décolorée donne une coloration bleu-violacé à l'eau iodée. Conclusion ?", a: "La feuille contient de l'amidon : elle a réalisé la photosynthèse et stocké le glucose produit." },
          ],
        },
      ],
    },
    {
      name: "Unité 2 — Équilibres naturels",
      chapters: [
        {
          id: "svt-3", num: 3, title: "Les relations alimentaires dans le milieu naturel", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "Chaînes et réseaux alimentaires, pyramides écologiques et flux d'énergie dans les écosystèmes.",
          sections: [
            { h: "Les maillons d'une chaîne", p: [
              "Producteurs (végétaux chlorophylliens) → consommateurs de 1er ordre (herbivores) → consommateurs de 2e et 3e ordres (carnivores) → décomposeurs (bactéries, champignons).",
              "Exemple : luzerne → criquet → grenouille → couleuvre → aigle. La flèche va de la proie vers le prédateur : « est mangé par ».",
            ]},
            { h: "Réseaux et pyramides", p: [
              "Plusieurs chaînes interconnectées forment un réseau alimentaire, plus réaliste et plus stable.",
              "La pyramide écologique montre que la biomasse et l'énergie diminuent à chaque niveau : environ 10 % de l'énergie passe au niveau suivant.",
            ]},
          ],
          formules: [
            { f: "Flèche : proie → prédateur", note: "sens du transfert d'énergie" },
            { f: "≈ 10 % de l'énergie transmise d'un niveau à l'autre" },
          ],
          points: [
            "Toute chaîne commence par un producteur.",
            "La disparition d'une espèce perturbe tout le réseau (pullulation ou famine).",
            "Les décomposeurs recyclent la matière minérale vers le sol.",
          ],
          exercices: [
            { q: "Construis une chaîne alimentaire de 4 maillons dans un champ marocain.", a: "Blé → souris → renard → aigle royal (ou blé → criquet → lézard → faucon)." },
          ],
        },
        {
          id: "svt-4", num: 4, title: "L'équilibre naturel et la protection de l'environnement", lang: "fr",
          duration: 45, difficulty: 1,
          resume: "Facteurs de rupture des équilibres (feux, pollution, surpêche) et mesures de protection.",
          points: [
            "Un écosystème est en équilibre quand les populations se régulent entre elles et avec le milieu.",
            "Ruptures : incendies, déforestation, pollution, pesticides, surexploitation, espèces invasives.",
            "Conséquences : appauvrissement de la biodiversité, désertification, réchauffement climatique.",
            "Protection : parcs nationaux, reboisement, recyclage, lois environnementales, éducation.",
          ],
          exercices: [
            { q: "Cite deux conséquences d'un incendie de forêt sur l'équilibre naturel.", a: "Destruction des habitats (perte de biodiversité) et érosion des sols privés de couvert végétal ; rupture des chaînes alimentaires." },
          ],
        },
      ],
    },
    {
      name: "Unité 3 — Transmission de la vie et hérédité",
      chapters: [
        {
          id: "svt-5", num: 5, title: "La transmission de la vie", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "Appareils reproducteurs, fécondation, grossesse et contraception chez l'Homme.",
          points: [
            "L'appareil reproducteur masculin produit des spermatozoïdes (testicules) ; le féminin produit des ovules (ovaires).",
            "La fécondation a lieu dans la trompe de Fallope : spermatozoïde + ovule → cellule-œuf (zygote).",
            "Le développement embryonnaire se fait dans l'utérus ; les échanges passent par le placenta et le cordon ombilical.",
            "La contraception empêche la fécondation ou la nidation (préservatif, pilule, stérilet).",
          ],
          formules: [
            { f: "Spermatozoïde + ovule → zygote", note: "fécondation" },
          ],
          exercices: [
            { q: "Où a lieu la fécondation chez la femme ?", a: "Dans la trompe de Fallope ; le zygote migre ensuite vers l'utérus pour la nidation." },
          ],
        },
        {
          id: "svt-6", num: 6, title: "La transmission des caractères héréditaires — lois de Mendel", lang: "fr",
          duration: 65, difficulty: 3,
          resume: "Caractères dominants et récessifs, génotype et phénotype, échiquier de croisement et lois de Mendel.",
          sections: [
            { h: "Gènes, allèles, phénotype", p: [
              "Chaque caractère héréditaire est contrôlé par un gène existant en versions appelées allèles. Le phénotype est le caractère observé ; le génotype est l'ensemble des allèles portés.",
              "Un individu possède deux allèles par gène (un d'origine paternelle, un maternelle). L'allèle dominant s'écrit en majuscule (A), le récessif en minuscule (a).",
            ]},
            { h: "Première loi de Mendel (F1)", p: [
              "Croisement de deux lignées pures différant par un caractère : toute la F1 est UNIFORME et exprime le caractère dominant.",
              "Exemple : pois à fleurs violettes (AA) × pois à fleurs blanches (aa) → F1 100 % violette (Aa) : le violet est dominant.",
            ]},
            { h: "Deuxième loi de Mendel (F2)", p: [
              "Le croisement des individus de F1 (Aa × Aa) donne en F2 : 3/4 de phénotype dominant et 1/4 de phénotype récessif.",
              "Échiquier de Punnett : gamètes A et a de chaque parent → AA, Aa, Aa, aa. Génotypes : 1/4 AA, 1/2 Aa, 1/4 aa.",
            ]},
          ],
          formules: [
            { f: "AA × aa → F1 : 100 % Aa", note: "uniformité" },
            { f: "Aa × Aa → 3/4 [A] + 1/4 [a]", note: "ségrégation F2" },
            { f: "Génotypes F2 : 1/4 AA — 1/2 Aa — 1/4 aa" },
          ],
          points: [
            "Dominant ≠ fréquent : un caractère rare peut être dominant.",
            "Un individu [a] récessif a TOUJOURS le génotype aa.",
            "Les gamètes ne portent qu'UN seul allèle de chaque paire.",
          ],
          exercices: [
            { q: "Deux plantes violettes hétérozygotes (Aa) sont croisées. Proportions attendues en F2 ?", a: "3/4 violettes (1/4 AA + 1/2 Aa) et 1/4 blanches (aa)." },
            { q: "Une plante violette de génotype inconnu croisée avec une blanche donne 100 % de violettes. Son génotype ?", a: "AA : si elle était Aa, on obtiendrait la moitié de blanches (test-cross)." },
          ],
        },
        {
          id: "svt-7", num: 7, title: "Les groupes sanguins", lang: "fr",
          duration: 45, difficulty: 2,
          resume: "Système ABO, compatibilités pour la transfusion et hérédité des groupes sanguins.",
          points: [
            "4 groupes : A, B, AB et O, déterminés par les antigènes présents sur les globules rouges.",
            "Transfusion : O est donneur universel, AB receveur universel. Toujours respecter les compatibilités ABO.",
            "Les groupes A et B sont codominants, O est récessif : génotypes possibles AA/AO, BB/BO, AB, OO.",
            "Deux parents O ne peuvent avoir qu'un enfant O.",
          ],
          exercices: [
            { q: "Un père de groupe AB et une mère de groupe O : groupes possibles des enfants ?", a: "A (AO) ou B (BO) uniquement — jamais AB ni O." },
          ],
        },
      ],
    },
    {
      name: "Unité 4 — Phénomènes géologiques externes",
      chapters: [
        {
          id: "svt-8", num: 8, title: "La tectonique des plaques", lang: "fr",
          duration: 55, difficulty: 3,
          resume: "Plaques lithosphériques, dorsales, fosses, subduction et conséquences : séismes et volcans.",
          points: [
            "La lithosphère est découpée en plaques rigides qui se déplacent de quelques cm par an sur l'asthénosphère.",
            "Divergence aux dorsales océaniques (création de croûte) ; convergence aux zones de subduction et de collision (destruction de croûte, montagnes).",
            "Séismes et volcans se concentrent aux frontières de plaques — la « ceinture de feu » du Pacifique.",
            "Au Maroc, la convergence Afrique–Eurasie explique le séisme d'Agadir (1960) et celui d'Al Haouz (2023).",
          ],
          formules: [
            { f: "Divergence = dorsales — Convergence = subduction / collision" },
          ],
          exercices: [
            { q: "Pourquoi l'Himalaya s'élève-t-il encore aujourd'hui ?", a: "Par la collision continue de la plaque indienne avec la plaque eurasienne : le raccourcissement de la croûte soulève la chaîne." },
          ],
        },
      ],
    },
  ],
};
