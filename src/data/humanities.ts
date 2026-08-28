import type { Subject } from "./types";

/* ============================================================
   FRANÇAIS — 3AC (œuvres du régional + outils de langue)
   ============================================================ */
export const francais: Subject = {
  id: "fr",
  name: "Français",
  ar: "الفرنسية",
  color: "#4E8EF7",
  icon: "quill",
  description: "Les trois œuvres intégrales du régional, le texte argumentatif et tous les outils de langue, avec méthodes de rédaction.",
  semestres: [
    {
      name: "Œuvres intégrales",
      chapters: [
        {
          id: "fr-1", num: 1, title: "La Boîte à merveilles — Ahmed Sefrioui", lang: "fr",
          duration: 70, difficulty: 2,
          resume: "Roman autobiographique (1954) : l'enfance de Sidi Mohammed à Fès, entre solitude, imaginaire et vie quotidienne traditionnelle.",
          sections: [
            { h: "Présentation de l'œuvre", p: [
              "Publié en 1954, La Boîte à merveilles est considéré comme le premier roman autobiographique marocain d'expression française. Le narrateur, Sidi Mohammed, un enfant de six ans, raconte une année de sa vie dans la médina de Fès, au sein de Dar Chouafa (la maison de la voyante).",
              "Genre : roman autobiographique. Registre : lyrisme et merveilleux. Le récit est à la première personne, mais écrit par un adulte qui se souvient.",
            ]},
            { h: "Les personnages clés", p: [
              "Sidi Mohammed : enfant rêveur, sensible, solitaire — il se réfugie dans sa boîte à merveilles (bouts de verre, clous, anneaux) qui transforme le réel en monde imaginaire.",
              "Lalla Zoubida : sa mère, fière, superstitieuse, grande raconteuse. Maalem Abdeslam : son père, tisserand calme et sage. Rahma et Driss El Aouad : les voisins ; Abdallah l'épicier ; le fqih du msid, sévère mais respecté ; Kenza la chouafa, la voyante du rez-de-chaussée.",
            ]},
            { h: "Thèmes et moments forts", p: [
              "La solitude de l'enfant différent ; la superstition (voyante, jnouns, amulettes) ; la vie traditionnelle à Fès (msid, bain maure, souk) ; la famille et la solidarité de voisinage.",
              "Moments marquants : la bagarre au msid et la fièvre de l'enfant ; l'achat des bracelets (ftouh) qui ruine la famille ; le départ du père travailler aux moissons ; la joie du retour ; les préparatifs d'Achoura.",
            ]},
          ],
          points: [
            "La boîte = symbole de l'imaginaire qui console de la solitude.",
            "Œuvre du patrimoine marocain : Fès, années 1920, vie traditionnelle.",
            "À l'examen : savoir situer un extrait (début, milieu, fin) et identifier le point de vue de l'enfant.",
          ],
          exercices: [
            { q: "Pourquoi Sidi Mohammed se réfugie-t-il dans sa boîte à merveilles ?", a: "Parce qu'il se sent seul et incompris des autres enfants : la boîte, remplie d'objets modestes, devient un monde imaginaire où il est roi et où les objets « parlent »." },
            { q: "Quel événement bouleverse la fin du récit ?", a: "La ruine de la famille après l'achat des bracelets, puis le départ du père pour les moissons ; le roman s'achève sur le retour du père et la fête d'Achoura, dans un mélange de joie et de nostalgie." },
          ],
        },
        {
          id: "fr-2", num: 2, title: "Antigone — Jean Anouilh", lang: "fr",
          duration: 70, difficulty: 3,
          resume: "Tragédie moderne (1944) : le conflit entre la loi morale d'Antigone et la loi de l'État de Créon.",
          sections: [
            { h: "Présentation de l'œuvre", p: [
              "Écrite en 1944, en pleine Occupation, la pièce de Jean Anouilh reprend le mythe grec : à Thèbes, après la mort des deux frères Étéocle et Polynice, le roi Créon interdit d'enterrer Polynice. Antigone brave l'interdit et enterre son frère : elle sera condamnée à mort.",
              "Genre : tragédie moderne en un acte. Le Prologue présente tous les personnages et annonce leur destin : le spectateur sait tout dès le départ — c'est le propre de la fatalité tragique.",
            ]},
            { h: "Les personnages", p: [
              "Antigone : l'idéaliste qui dit « non », refuse le compromis et préfère mourir plutôt que trahir son devoir. Créon : l'homme d'État pragmatique qui impose la loi pour maintenir l'ordre.",
              "Ismène : la sœur raisonnable qui a peur. Hémon : le fiancé d'Antigone, fils de Créon, qui se suicide. Eurydice : la reine, qui se tue en apprenant la mort de son fils. Le Chœur : commente l'action.",
            ]},
            { h: "Le conflit central", p: [
              "La pièce oppose deux conceptions : la loi du cœur et des dieux (Antigone) contre la loi de la cité (Créon). Le face-à-face de l'acte central est le sommet dramatique : Créon tente tout pour sauver Antigone, qui refuse tout « bonheur » au prix du renoncement.",
              "Anouilh fait d'Antigone la figure de la résistance intérieure, du refus pur — « Moi, je peux dire non à tout ce que je n'aime pas ».",
            ]},
          ],
          points: [
            "Le Prologue = personnage qui annonce le destin (théâtre dans le théâtre).",
            "La fatalité : tout est joué d'avance, les personnages « n'ont plus qu'à jouer leur rôle ».",
            "Le dénouement : Antigone, Hémon et Eurydice meurent — Créon reste seul avec son pouvoir.",
          ],
          exercices: [
            { q: "Pourquoi Antigone refuse-t-elle le bonheur proposé par Créon ?", a: "Parce que ce bonheur exigerait qu'elle renie son acte et oublie son frère : pour elle, un bonheur construit sur la compromission est une trahison. Elle veut « tout, tout de suite — ou refuser »." },
            { q: "Quel rôle joue le Prologue ?", a: "Il présente les personnages, expose la situation initiale et annonce le destin de chacun, créant la fatalité tragique : le suspense n'est pas dans l'issue mais dans la manière d'y arriver." },
          ],
        },
        {
          id: "fr-3", num: 3, title: "Le Dernier jour d'un condamné — Victor Hugo", lang: "fr",
          duration: 70, difficulty: 3,
          resume: "Roman à thèse (1829) : le monologue intérieur d'un condamné à mort, plaidoyer de Hugo contre la peine capitale.",
          sections: [
            { h: "Présentation de l'œuvre", p: [
              "Publié en 1829, le roman se présente comme le journal intime d'un condamné à mort qui écrit ses dernières heures, de Bicêtre à l'Hôtel de Ville, jusqu'à la Conciergerie. On ne connaît ni son nom, ni son crime : Hugo en fait l'homme universel, « tous les condamnés ».",
              "Genre : roman à thèse (plaidoyer contre la peine de mort). Registre : pathétique. Énonciation : journal intime à la première personne.",
            ]},
            { h: "Structure et lieux", p: [
              "Trois lieux, trois étapes : Bicêtre (le procès, le ferrage des forçats, le cachot), l'Hôtel de Ville (le transfert), la Conciergerie (les dernières heures, la rencontre avec la friauche, la toilette du condamné).",
              "Le récit suit la montée de l'angoisse : de « condamné à mort ! » (chapitre 1) jusqu'au couperet final — le roman s'arrête au moment de l'exécution.",
            ]},
            { h: "Les thèmes", p: [
              "L'angoisse de la mort ; la torture psychologique (la peine est pire que le châtiment) ; la fille du condamné, Marie, seul être qui pourrait le sauver par son amour ; la critique d'une justice mécanique et de la foule avide de spectacles macabres.",
              "Hugo dénonce : la peine de mort ne dissuade pas, elle avilit la société qui l'applique.",
            ]},
          ],
          points: [
            "Anonymat du condamné = portée universelle du plaidoyer.",
            "Roman à thèse : l'œuvre défend une idée (abolition de la peine de mort).",
            "La foule est présentée comme cruelle et spectatrice du malheur.",
          ],
          exercices: [
            { q: "Pourquoi Hugo ne donne-t-il ni nom ni crime à son condamné ?", a: "Pour que le lecteur ne juge pas un cas particulier mais s'identifie à tout condamné : le plaidoyer vise la peine de mort en général, pas une affaire précise." },
            { q: "Quel rôle joue la petite Marie dans le récit ?", a: "Elle incarne l'innocence et l'amour filial : sa visite montre que le condamné est un père, et que la guillotine frappe aussi les innocents. Elle accentue le pathétique." },
          ],
        },
      ],
    },
    {
      name: "Outils de langue et production écrite",
      chapters: [
        {
          id: "fr-4", num: 4, title: "Le texte argumentatif", lang: "fr",
          duration: 60, difficulty: 2,
          resume: "Thèse, arguments, exemples et connecteurs logiques : la structure pour convaincre.",
          sections: [
            { h: "La structure", p: [
              "Un texte argumentatif défend une thèse (une opinion) à l'aide d'arguments illustrés d'exemples, pour convaincre ou persuader le lecteur.",
              "Plan type : introduction (présentation du sujet + thèse), développement (2 à 3 paragraphes argumentatifs : argument + exemple + explication), conclusion (bilan + ouverture).",
            ]},
            { h: "Les connecteurs logiques", p: [
              "Pour organiser : d'abord, ensuite, enfin, en premier lieu, de plus.",
              "Pour justifier : car, parce que, en effet, grâce à. Pour illustrer : par exemple, ainsi, notamment. Pour conclure : donc, ainsi, en somme, par conséquent.",
            ]},
            { h: "Convaincre ou persuader ?", p: [
              "Convaincre = s'adresser à la raison (arguments logiques). Persuader = toucher les sentiments (registres pathétique, lyrique). Les grands plaidoyers font les deux.",
            ]},
          ],
          points: [
            "Une thèse doit être clairement énoncée dès l'introduction.",
            "Un paragraphe = un argument + un exemple développé.",
            "Relis en vérifiant chaque connecteur : c'est le squelette du texte.",
          ],
          exercices: [
            { q: "Rédige l'introduction d'un paragraphe sur : « Le sport est indispensable à la santé ».", a: "De nos jours, la sédentarité gagne du terrain, surtout chez les jeunes. Or, je suis convaincu que le sport est indispensable à la santé. En effet, d'abord, il renforce le cœur et les muscles…" },
          ],
        },
        {
          id: "fr-5", num: 5, title: "Les propositions subordonnées", lang: "fr",
          duration: 55, difficulty: 3,
          resume: "Relative, complétive, circonstancielle : reconnaître, analyser et employer les trois types de subordonnées.",
          sections: [
            { h: "La subordonnée relative", p: [
              "Introduite par un pronom relatif (qui, que, dont, où, lequel…), elle complète un NOM appelé antécédent. « Le livre QUE tu m'as prêté est passionnant » — « que » reprend « le livre ».",
              "Fonction : complément de l'antécédent.",
            ]},
            { h: "La subordonnée complétive", p: [
              "Introduite par la conjonction « que », elle complète un VERBE. « Je pense QU'il viendra » — la proposition complète « pense ».",
              "Fonction : COD du verbe. Après un verbe d'opinion, l'indicatif ; après « il faut que », le subjonctif.",
            ]},
            { h: "La subordonnée circonstancielle", p: [
              "Introduite par une conjonction de subordination (quand, parce que, bien que, si…), elle exprime le temps, la cause, le but, la condition ou la concession.",
              "« Bien qu'il pleuve, nous sortons » (concession + subjonctif) ; « Je resterai quand tu partiras » (temps).",
            ]},
          ],
          formules: [
            { f: "Relative = complète un NOM (pronom relatif)" },
            { f: "Complétive = complète un VERBE (que)" },
            { f: "Circonstancielle = temps, cause, but, condition…" },
          ],
          exercices: [
            { q: "Identifie la nature des subordonnées : 1) La ville où je suis né a changé. 2) Je crois que tu as raison. 3) Parce qu'il était tard, nous sommes partis.", a: "1) Relative (complète « la ville »). 2) Complétive (COD de « crois »). 3) Circonstancielle de cause." },
          ],
        },
        {
          id: "fr-6", num: 6, title: "Le discours direct et le discours indirect", lang: "fr",
          duration: 45, difficulty: 2,
          resume: "Passer d'un discours à l'autre : changements de ponctuation, de pronoms et de temps.",
          points: [
            "Discours direct : paroles rapportées telles quelles, avec guillemets et deux-points. « Je viendrai demain », dit-il.",
            "Discours indirect : les paroles sont intégrées à la phrase : Il dit qu'il viendra le lendemain.",
            "Concordance des temps si le verbe introducteur est au passé : présent → imparfait, futur → conditionnel présent, passé composé → plus-que-parfait.",
            "Repères de temps : demain → le lendemain, hier → la veille, ici → là-bas.",
          ],
          exercices: [
            { q: "Transposes au discours indirect : Il a déclaré : « Je partirai demain. »", a: "Il a déclaré qu'il partirait le lendemain. (futur → conditionnel présent)" },
          ],
        },
        {
          id: "fr-7", num: 7, title: "Comparaison et métaphore", lang: "fr",
          duration: 40, difficulty: 1,
          resume: "Les figures d'analogie pour enrichir la description et l'analyse littéraire.",
          points: [
            "Comparaison : rapprochement AVEC outil (comme, tel, pareil à, ainsi que). « La mer est un miroir brisé. » → avec « comme » : « La mer est comme un miroir brisé. »",
            "Métaphore : rapprochement SANS outil, plus frappante. « Cette faucille d'or dans le champ des étoiles » (Hugo, la lune).",
            "Personnification : attribuer des traits humains à une chose. Filet : métaphore étendue sur plusieurs phrases.",
            "Dans l'analyse d'extrait : identifier la figure + son effet (poétique, dramatique, pathétique…).",
          ],
          exercices: [
            { q: "Identifie la figure : « Les vagues se jettent contre la falaise comme des taureaux furieux. »", a: "Comparaison (outil « comme ») : effet de violence et de brutalité donné à la mer." },
          ],
        },
        {
          id: "fr-8", num: 8, title: "La production écrite : méthode du paragraphe argumenté", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "Construire un paragraphe complet et soigné pour l'épreuve de production écrite du régional.",
          points: [
            "Étape 1 : lire le sujet et repérer la consigne (thèse imposée ou choix de thèse).",
            "Étape 2 : brouillon — noter la thèse, 2 arguments, 2 exemples.",
            "Étape 3 : rédaction avec connecteurs ; une idée par phrase, des phrases courtes et correctes.",
            "Étape 4 : relecture — accords, ponctuation, majuscules, longueur (10 à 15 lignes).",
          ],
          exercices: [
            { q: "Sujet : « Certains pensent que la lecture est une perte de temps. Qu'en pensez-vous ? » — donne ta thèse et deux arguments.", a: "Thèse : la lecture est au contraire indispensable. Argument 1 : elle enrichit le vocabulaire et la culture (exemple : les romans du programme). Argument 2 : elle développe l'imagination et l'esprit critique (exemple : comprendre les infox)." },
          ],
        },
      ],
    },
  ],
};

/* ============================================================
   ANGLAIS — Gateway to English 3
   ============================================================ */
export const english: Subject = {
  id: "en",
  name: "Anglais",
  ar: "الإنجليزية",
  color: "#38BDF8",
  icon: "chat",
  description: "Les unités du manuel officiel avec le vocabulaire essentiel et la grammaire expliquée simplement, exercice par exercice.",
  semestres: [
    {
      name: "Fall semester",
      chapters: [
        {
          id: "en-1", num: 1, title: "Unit 1 — Celebrations and Festivals", lang: "fr",
          duration: 50, difficulty: 1,
          resume: "Parler des fêtes et traditions : vocabulaire des célébrations et revision du present simple.",
          sections: [
            { h: "Key vocabulary", p: [
              "celebrate (célébrer), festival, tradition, customs (coutumes), fireworks, parade, gather (se rassembler), religious / national holiday, Eid Al-Adha, Eid Al-Fitr, Independence Day, New Year's Eve.",
            ]},
            { h: "Grammar — Present simple & frequency adverbs", p: [
              "On utilise le present simple pour les habitudes : « Moroccans celebrate Eid twice a year. »",
              "Adverbes de fréquence : always, usually, often, sometimes, rarely, never — placés avant le verbe : « We usually wear traditional clothes. »",
            ]},
          ],
          exercices: [
            { q: "Complete: My family ___ (gather) every Friday. We ___ (not / work) on Sundays.", a: "gathers — don't work. (3e personne : -s au présent simple ; négation avec don't/doesn't)." },
          ],
        },
        {
          id: "en-2", num: 2, title: "Unit 2 — The Media", lang: "fr",
          duration: 50, difficulty: 2,
          resume: "Les médias et l'information : vocabulaire et present continuous pour décrire ce qui se passe maintenant.",
          points: [
            "Vocabulaire : newspaper, channel, broadcast, news, journalist, headline, social media, reliable (fiable), fake news.",
            "Present continuous : am/is/are + V-ing → « I am watching the news right now. »",
            "Comparatif des médias : more / less + adjectif : « TV is more visual than radio. »",
          ],
          exercices: [
            { q: "Put in the correct form: Look! The journalists ___ (film) a report.", a: "are filming — action en cours de déroulement → present continuous." },
          ],
        },
        {
          id: "en-3", num: 3, title: "Unit 3 — Brain Drain", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "L'émigration des diplômés : causes et conséquences, et l'expression de l'opinion.",
          points: [
            "Vocabulaire : brain drain, skilled workers, abroad, opportunity, salary, challenge, homeland, return, contribute.",
            "Opinion : In my opinion…, I believe that…, I agree / disagree because…, From my point of view…",
            "Connectors : however, on the one hand… on the other hand, as a result.",
          ],
          exercices: [
            { q: "Give one cause and one consequence of brain drain (in English).", a: "Cause : better salaries abroad. Consequence : the home country loses skilled doctors and engineers." },
          ],
        },
        {
          id: "en-4", num: 4, title: "Unit 4 — Health and Fitness", lang: "fr",
          duration: 50, difficulty: 1,
          resume: "La santé : donner des conseils avec should / shouldn't et le vocabulaire du corps et de la maladie.",
          sections: [
            { h: "Key vocabulary", p: [
              "headache, fever, cough, pain, medicine, appointment, healthy diet, exercise, lifestyle, symptom, cure, balanced meals.",
            ]},
            { h: "Grammar — should / shouldn't", p: [
              "Conseil : « You should drink more water. You shouldn't skip breakfast. » — should + base verbale, sans « to ».",
              "Obligation forte : must / have to : « You must see a doctor. »",
            ]},
          ],
          exercices: [
            { q: "Give two pieces of advice to a friend with a cold.", a: "You should rest and drink warm tea. You shouldn't go out in the cold. (should + base verbale)" },
          ],
        },
      ],
    },
    {
      name: "Spring semester",
      chapters: [
        {
          id: "en-5", num: 5, title: "Unit 5 — Technology in Our Life", lang: "fr",
          duration: 50, difficulty: 2,
          resume: "Les technologies : avantages et inconvénients, et le present perfect (have/has + participe passé).",
          points: [
            "Vocabulaire : device, smartphone, invention, useful, harmful, addicted, social network, communicate, invent, discover.",
            "Present perfect : have/has + V3 → « Scientists have invented amazing devices. » (bilan, lien avec le présent).",
            "For / against : thanks to…, because of…, on the contrary…",
          ],
          exercices: [
            { q: "Complete: My brother ___ (just / buy) a new phone.", a: "has just bought — present perfect avec « just » pour une action récente." },
          ],
        },
        {
          id: "en-6", num: 6, title: "Unit 6 — Go Green : The Environment", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "L'environnement : la voix passive pour décrire les problèmes et les solutions.",
          sections: [
            { h: "Key vocabulary", p: [
              "pollution, global warming, recycle, waste, protect, endangered species, renewable energy, plant trees, save water, plastic bags.",
            ]},
            { h: "Grammar — The passive voice", p: [
              "Formation : be + participe passé. Active : « People pollute the ocean. » → Passive : « The ocean is polluted (by people). »",
              "On l'utilise quand l'action compte plus que l'auteur : « Millions of trees are planted every year. »",
            ]},
          ],
          exercices: [
            { q: "Rewrite in the passive: « They recycle plastic bottles in this factory. »", a: "Plastic bottles are recycled in this factory." },
          ],
        },
        {
          id: "en-7", num: 7, title: "Unit 7 — Travel and Tourism", lang: "fr",
          duration: 50, difficulty: 2,
          resume: "Voyager : réserver, se déplacer, et le futur avec will / going to.",
          points: [
            "Vocabulaire : destination, trip, book a ticket, luggage, boarding pass, sightseeing, accommodation, tourist attraction, guide, currency.",
            "Futur : will (décision spontanée, prédiction) / going to (projet prévu). « I'm going to visit Chefchaouen this summer. »",
            "Demander son chemin : Excuse me, how can I get to…? Go straight, turn left at the corner.",
          ],
          exercices: [
            { q: "Which future? « Look at those clouds! It ___ (rain). »", a: "is going to rain — prédiction fondée sur un indice visible." },
          ],
        },
        {
          id: "en-8", num: 8, title: "Unit 8 — Good Citizenship", lang: "fr",
          duration: 45, difficulty: 1,
          resume: "La citoyenneté : droits et devoirs, et les modaux d'obligation must / have to / don't have to.",
          points: [
            "Vocabulaire : citizen, rights, duties, volunteer, respect the law, pay taxes, vote, community, solidarity, flag.",
            "must / have to = obligation ; don't have to = pas obligatoire ; mustn't = interdit.",
            "« Citizens must respect the law, but they don't have to be politicians. »",
          ],
          exercices: [
            { q: "Choose: You ___ (mustn't / don't have to) smoke in the hospital — it's forbidden.", a: "mustn't — interdiction. (don't have to = absence d'obligation)." },
          ],
        },
      ],
    },
  ],
};

/* ============================================================
   ARABE — اللغة العربية 3AC
   ============================================================ */
export const arabe: Subject = {
  id: "arab",
  name: "Langue Arabe",
  ar: "اللغة العربية",
  color: "#D6455D",
  icon: "scroll",
  description: "القراءة والتراكيب والصرف والتحويل والبلاغة والتعبير والإنشاء — دروس موجزة مع تمارين تطبيقية.",
  semestres: [
    {
      name: "الفصل الأول",
      chapters: [
        {
          id: "arab-1", num: 1, title: "القراءة: مهارات الفهم والتحليل", ar: "القراءة المنهجية", lang: "ar",
          duration: 50, difficulty: 2,
          resume: "مهارات قراءة النص القرائي: الفهم، التحليل، التركيب، ثم التقويم — مع منهجية التعامل مع أسئلة الامتحان الجهوي.",
          points: [
            "الفهم: استخراج الفكرة العامة والأفكار الجزئية وشرح المفردات في سياقها.",
            "التحليل: تحديد نوع النص (وصفي، حجاجي، سردي) وأسلوبه وصوره البيانية.",
            "التركيب: تلخيص النص وإعادة صياغة أفكاره بلغة المتعلم.",
            "التقويم: إبداء الرأي الشخصي مع التعليل انطلاقاً من معطيات النص.",
          ],
          exercices: [
            { q: "لخص فقرة من نص قرائي في جملتين مع الحفاظ على الفكرة الجوهرية.", a: "نحدد الفكرة المحورية ونحذف التفاصيل والأمثلة، ثم نصيغها بأسلوبنا مع احترام المعنى الأصلي." },
          ],
        },
        {
          id: "arab-2", num: 2, title: "التراكيب: الجملة المركبة والإسناد", ar: "التراكيب", lang: "ar",
          duration: 55, difficulty: 2,
          resume: "الجملة الاسمية والفعلية، أركانهما، وروابط الإسناد: المطابقة بين المبتدأ والخبر والفعل والفاعل.",
          points: [
            "الجملة الاسمية: مبتدأ وخبر، وكلاهما مرفوع: «العلمُ نورٌ».",
            "الجملة الفعلية: فعل وفاعل (ومفعول به إن كان الفعل متعدياً): «قرأ التلميذُ الدرسَ».",
            "الإسناد: نسبة الخبر إلى المبتدأ أو الحدث إلى الفاعل مع المطابقة في الإفراد والتثنية والجمع والتأنيث.",
          ],
          exercices: [
            { q: "أعرب: «يسعى المجتهدون إلى النجاح».", a: "يسعى: فعل مضارع مرفوع بالضمة المقدرة؛ المجتهدون: فاعل مرفوع بالواو لأنه جمع مذكر سالم؛ إلى النجاح: جار ومجرور." },
          ],
        },
        {
          id: "arab-3", num: 3, title: "الصرف والتحويل: الاشتقاق", ar: "الصرف والتحويل", lang: "ar",
          duration: 55, difficulty: 3,
          resume: "مشتقات الأسماء من الفعل: اسم الفاعل، اسم المفعول، صيغة المبالغة، اسم المكان والزمان والآلة.",
          points: [
            "اسم الفاعل من الثلاثي على وزن فاعِل: كتب ← كاتب؛ ومن غير الثلاثي نأتي بالمضارع ونقلب ياءه ميماً مضمومة مع كسر ما قبل الآخر: استقبل ← مُستقبِل.",
            "اسم المفعول من الثلاثي على وزن مَفعول: كُتِب ← مكتوب.",
            "صيغ المبالغة: فَعّال (علّام)، فَعول (شكور)، فَعيل (قدير)، مِفعال (مقدام).",
            "اسم الآلة من الفعل الثلاثي: مِفتاح، مِصباح، مِقصّ.",
          ],
          exercices: [
            { q: "استخرج اسم الفاعل واسم المفعول من الفعل «فهِم».", a: "اسم الفاعل: فاهِم؛ اسم المفعول: مفهوم." },
          ],
        },
        {
          id: "arab-4", num: 4, title: "البلاغة: التشبيه والاستعارة", ar: "البلاغة", lang: "ar",
          duration: 50, difficulty: 3,
          resume: "أركان التشبيه وأنواعه، ومفهوم الاستعارة بنوعيها التصريحية والمكنية مع أمثلة قرآنية وشعرية.",
          points: [
            "أركان التشبيه: المشبه، المشبه به، أداة التشبيه، وجه الشبه. «العلم كالنور يهدي صاحبه».",
            "التشبيه البليغ: حذف الأداة ووجه الشبه: «العلم نور».",
            "الاستعارة التصريحية: حذف المشبه والتصريح بالمشبه به: «رأيت أسداً يخطب» (رجل شجاع).",
            "الاستعارة المكنية: حذف المشبه به مع الإبقاء على صفة من صفاته: «حدثني التاريخ».",
          ],
          exercices: [
            { q: "حدد نوع الصورة البيانية: «الأم مدرسة إذا أعددتها أعددت شعباً طيب الأعراق».", a: "تشبيه بليغ: حذف الأداة ووجه الشبه؛ شبه الأم بالمدرسة في دور التربية والتكوين." },
          ],
        },
      ],
    },
    {
      name: "الفصل الثاني",
      chapters: [
        {
          id: "arab-5", num: 5, title: "التعبير والإنشاء: مهارة التلخيص", ar: "التعبير والإنشاء", lang: "ar",
          duration: 50, difficulty: 2,
          resume: "منهجية تلخيص النص: قراءة النص، تحديد الأفكار الأساسية، الحذف والتعميم، ثم الصياغة الجديدة.",
          points: [
            "أقرأ النص قراءة متأنية وأحدد فكرته العامة وأ أفكاره الأساسية.",
            "أحذف الأمثلة والتكرار والتفاصيل الثانوية وأعمّم الجزئيات.",
            "أعيد صياغة الأفكار بلغتي مع احترام حجم التلخيص المطلوب (عادة ثلث النص).",
            "أراجع الترابط اللغوي باستعمال أدوات الربط المناسبة.",
          ],
        },
        {
          id: "arab-6", num: 6, title: "التعبير والإنشاء: مهارة التوسيع", ar: "التعبير والإنشاء", lang: "ar",
          duration: 50, difficulty: 2,
          resume: "توسيع فكرة أو حكمة: شرح المعنى، التعليل، التمثيل، ثم الخاتمة برأي شخصي.",
          points: [
            "أشرح الفكرة أو الحكمة شرحاً لغوياً ومعنوياً.",
            "أعلل الحكم الوارد فيها وأدعمه بحجج منطقية.",
            "أمثل بأمثلة من الواقع أو التاريخ لتوضيح الفكرة.",
            "أختم برأيي الشخصي وأثر الفكرة في سلوكي.",
          ],
        },
        {
          id: "arab-7", num: 7, title: "التراكيب: الجملة الشرطية", ar: "التراكيب", lang: "ar",
          duration: 50, difficulty: 3,
          resume: "أدوات الشرط الجازمة وغير الجازمة، واقتران جواب الشرط بالفاء.",
          points: [
            "أدوات الشرط الجازمة تجزم فعلين: من، ما، مهما، متى، أين، إنْ: «من يزرعْ يحصدْ».",
            "أدوات غير جازمة: لو، لولا، إذا، كلما: «لو اجتهدتَ لنجحتَ».",
            "يقترن جواب الشرط بالفاء إذا كان جملة اسمية أو فعلاً جامداً أو مسبوقاً بقد أو ما النافية: «إن تدرسْ فلن تندمَ».",
          ],
          exercices: [
            { q: "أعرب فعل الشرط وجوابه: «من يتقنْ عملَه يحترمْه الناسُ».", a: "يتقنْ: فعل مضارع مجزوم بمن وعلامة جزمه السكون؛ يحترمْه: جواب الشرط مجزوم بالسكون، والهاء مفعول به، الناسُ: فاعل مرفوع." },
          ],
        },
        {
          id: "arab-8", num: 8, title: "الصرف: الإعلال", ar: "الصرف", lang: "ar",
          duration: 55, difficulty: 3,
          resume: "تغيير حروف العلة في الأفعال المعتلة: الحذف، القلب، التسكين.",
          points: [
            "الإعلال بالحذف: حذف حرف العلة للتخفيف: «لم يَدْعُ» (أصلها يدعُو).",
            "الإعلال بالقلب: قلب الواو أو الياء ألفاً: قال (أصلها قَوَلَ)، باع (بَيَعَ).",
            "الإعلال بالتسكين: نقل حركة حرف العلة إلى الساكن قبله: يَبيعُ ← يَبيعُ بسكون الياء في بعض الصيغ.",
            "الفعل المعتل: مثال (وعد)، أجوف (قال)، ناقص (رمى)، لفيف.",
          ],
        },
      ],
    },
  ],
};

/* ============================================================
   HISTOIRE-GÉOGRAPHIE — الاجتماعيات 3AC
   ============================================================ */
export const histoire: Subject = {
  id: "hist",
  name: "Histoire-Géographie",
  ar: "الاجتماعيات",
  color: "#C08552",
  icon: "globe",
  description: "الحرب العالمية الثانية، الحرب الباردة، الكفاح من أجل الاستقلال، وقضايا الجغرافيا الاقتصادية للمغرب.",
  semestres: [
    {
      name: "التاريخ",
      chapters: [
        {
          id: "hist-1", num: 1, title: "الحرب العالمية الثانية: الأسباب والنتائج", ar: "الحرب العالمية الثانية", lang: "ar",
          duration: 60, difficulty: 2,
          resume: "أسباب الحرب (1939-1945)، أطوارها الكبرى، ونتائجها البشرية والمادية والسياسية على العالم.",
          points: [
            "الأسباب: مخلفات معاهدة فرساي، الأزمة الاقتصادية لسنة 1929، صعود الأنظمة الديكتاتورية (النازية، الفاشية)، سياسة التوسع الألماني.",
            "الأطوار: انتصارات المحور (1939-1942)، ثم تحول الموازين بعد معركة العلمين وستالينغراد وإنزال النورماندي (1944)، فاستسلام ألمانيا ثم اليابان (1945).",
            "النتائج: حوالي 50 مليون قتيل، دمار اقتصادي هائل، إنشاء هيئة الأمم المتحدة، بداية الحرب الباردة بين المعسكرين.",
          ],
          exercices: [
            { q: "علل: تعتبر معركة ستالينغراد نقطة تحول في الحرب.", a: "لأنها أوقفت الزحف الألماني على الجبهة الشرقية (1943) وبدأ بعدها تراجع قوات المحور، فانتقل التفوق إلى الحلفاء." },
          ],
        },
        {
          id: "hist-2", num: 2, title: "الحرب الباردة ومظاهرها", ar: "الحرب الباردة", lang: "ar",
          duration: 55, difficulty: 2,
          resume: "الصراع الإيديولوجي بين المعسكرين الرأسمالي والاشتراكي (1947-1991) ومظاهره وأزماته الكبرى.",
          points: [
            "المفهوم: صراع إيديولوجي وسياسي دون مواجهة عسكرية مباشرة بين الولايات المتحدة والاتحاد السوفياتي.",
            "المظاهر: سباق التسلح، الأحلاف العسكرية (الناتو ووارسو)، حروب بالوكالة (كوريا، فيتنام)، غزو الفضاء، أزمات (كوبا 1962، جدار برلين 1961).",
            "النهاية: انهيار الاتحاد السوفياتي سنة 1991 وبداية نظام عالمي جديد.",
          ],
        },
        {
          id: "hist-3", num: 3, title: "المغرب: الكفاح من أجل الاستقلال", ar: "الكفاح من أجل الاستقلال", lang: "ar",
          duration: 60, difficulty: 2,
          resume: "مراحل الكفاح الوطني من ظهير 1930 إلى استقلال 1956: المقاومة المسلحة والعمل السياسي.",
          points: [
            "المقاومة المسلحة: محمد بن عبد الكريم الخطابي في الريف (معركة أنوال 1921)، وعسو أوبسلام في الأطلس.",
            "العمل السياسي: تقديم وثيقة المطالبة بالاستقلال في 11 يناير 1944، وثورة الملك والشعب بعد نفي محمد الخامس (20 غشت 1953).",
            "الاستقلال: عودة الملك من المنفى (نونبر 1955) وإعلان الاستقلال في 2 مارس 1956.",
          ],
          exercices: [
            { q: "لماذا يعتبر نفي محمد الخامس شرارة ثورة الملك والشعب؟", a: "لأنه وحد المغاربة حول ملكهم، فتحول النضال من مطالب إصلاحية إلى مطلب الاستقلال الكامل بالمقاومة المسلحة والإضرابات حتى العودة." },
          ],
        },
        {
          id: "hist-4", num: 4, title: "قضية الوحدة الترابية: الصحراء المغربية", ar: "الوحدة الترابية", lang: "ar",
          duration: 55, difficulty: 2,
          resume: "استرجاع الأقاليم الجنوبية: المسيرة الخضراء (1975) واتفاقية مدريد، ومقترح الحكم الذاتي.",
          points: [
            "المسيرة الخضراء: 6 نونبر 1975، 350 ألف متطوع نحو الصحراء بقيادة الحسن الثاني لاسترجاعها سلماً.",
            "اتفاقية مدريد (نونبر 1975) أنهت الوجود الإسباني؛ استكمال الوحدة باسترجاع وادي الذهب سنة 1979.",
            "مقترح الحكم الذاتي (2007): حل سياسي واقعي يحظى بدعم دولي متزايد.",
          ],
        },
      ],
    },
    {
      name: "الجغرافيا",
      chapters: [
        {
          id: "hist-5", num: 5, title: "ساكنة العالم: التوزيع والكثافة", ar: "سكان العالم", lang: "ar",
          duration: 50, difficulty: 2,
          resume: "التوزيع الجغرافي لسكان العالم، مفهوم الكثافة السكانية، والعوامل المتحكمة في التوزيع.",
          points: [
            "سكان العالم يتجاوزون 8 مليارات نسمة، موزعون بشكل غير متكافئ.",
            "الكثافة السكانية = عدد السكان / المساحة (نسمة/كلم²).",
            "عوامل التوزيع: طبيعية (المناخ، التضاريس، المياه) وبشرية واقتصادية (التاريخ، الأنشطة الاقتصادية، النقل).",
            "تتركز الساكنة في السهول والسواحل والأودية الكبرى (شرق آسيا، أوروبا الغربية، وادي النيل).",
          ],
          exercices: [
            { q: "احسب الكثافة السكانية للمغرب: 37 مليون نسمة و710.850 كلم².", a: "الكثافة = 37.000.000 ÷ 710.850 ≈ 52 نسمة/كلم²." },
          ],
        },
        {
          id: "hist-6", num: 6, title: "الفلاحة والصناعة بالمغرب", ar: "الأنشطة الاقتصادية", lang: "ar",
          duration: 55, difficulty: 2,
          resume: "خصائص الفلاحة المغربية (مخطط المغرب الأخضر) والصناعة: القطاعات، المشاكل، وآفاق التنمية.",
          points: [
            "الفلاحة: نشاط أساسي يشغل نسبة مهمة من الساكنة النشيطة؛ تعاني من تقلبات المناخ وضعف التحديث في بعض المناطق.",
            "مخطط المغرب الأخضر (2008) ثم «الجيل الأخضر 2020-2030»: تحديث الفلاحة ودعم الفلاح الصغير.",
            "الصناعة: الفوسفاط ومشتقاته، الصناعات الغذائية، النسيج، وصناعة السيارات والطائرات (طنجة، القنيطرة).",
            "الإكراهات: المنافسة الخارجية، الحاجة إلى التكوين والتكنولوجيا، الفوارق المجالية.",
          ],
        },
        {
          id: "hist-7", num: 7, title: "السياحة والنقل بالمغرب", ar: "السياحة والنقل", lang: "ar",
          duration: 45, difficulty: 1,
          resume: "مؤهلات المغرب السياحية وأنواعها، ودور النقل في التنمية الاقتصادية والمجالية.",
          points: [
            "أنواع السياحة: الثقافية (فاس، مراكش)، الساحلية، الجبلية، الصحراوية، والاستشفائية.",
            "المؤهلات: تنوع طبيعي، تراث حضاري غني، استقرار وأمن، قرب من أوروبا.",
            "النقل: شبكة طرقية متطورة، القطار فائق السرعة (البراق)، موانئ كبرى (طنجة المتوسط) ومطارات دولية.",
            "الدور الاقتصادي: تشغيل اليد العاملة، مداخيل العملة الصعبة، تنمية المناطق.",
          ],
        },
      ],
    },
  ],
};

/* ============================================================
   INFORMATIQUE — المعلوميات 3AC
   ============================================================ */
export const info: Subject = {
  id: "info",
  name: "Informatique",
  ar: "المعلوميات",
  color: "#22C3D6",
  icon: "chip",
  description: "Systèmes d'exploitation, tableur, algorithmique, Scratch et sécurité numérique — les compétences pratiques du programme.",
  semestres: [
    {
      name: "Semestre 1",
      chapters: [
        {
          id: "info-1", num: 1, title: "L'environnement informatique et le système d'exploitation", lang: "fr",
          duration: 45, difficulty: 1,
          resume: "Composants d'un ordinateur, unités de mesure et rôle du système d'exploitation.",
          points: [
            "Matériel : processeur (CPU), mémoire vive (RAM), disque dur, périphériques d'entrée/sortie.",
            "Unités : 1 octet = 8 bits ; 1 Ko = 1024 o ; 1 Mo = 1024 Ko ; 1 Go = 1024 Mo.",
            "Le système d'exploitation (Windows, Linux, Android) gère le matériel, les fichiers et les applications.",
            "Arborescence : organiser les fichiers en dossiers logiques (École → 3AC → Maths).",
          ],
          exercices: [
            { q: "Convertis 2 Mo en Ko puis en octets.", a: "2 Mo = 2 × 1024 = 2048 Ko = 2048 × 1024 = 2 097 152 octets." },
          ],
        },
        {
          id: "info-2", num: 2, title: "Le tableur : formules et fonctions", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "Construire une feuille de calcul, écrire des formules et utiliser les fonctions SOMME, MOYENNE, MAX et MIN.",
          sections: [
            { h: "La feuille de calcul", p: [
              "Une feuille est un tableau de cellules identifiées par lettre (colonne) et chiffre (ligne) : B3 est la cellule de la colonne B, ligne 3. Une plage se note A1:A5.",
              "Toute formule commence par le signe =. Exemple : =B2+C2 additionne deux cellules ; =B2*3 multiplie par 3.",
            ]},
            { h: "Les fonctions essentielles", p: [
              "=SOMME(A1:A5) additionne la plage. =MOYENNE(B2:B10) calcule la moyenne. =MAX(...) et =MIN(...) donnent les extrêmes.",
              "La recopie automatique (poignée de remplissage) adapte les références : copier =B2*2 de C2 vers C3 donne =B3*2.",
            ]},
          ],
          formules: [
            { f: "=SOMME(A1:A10)", note: "somme d'une plage" },
            { f: "=MOYENNE(B2:B6)", note: "moyenne" },
            { f: "=MAX(C1:C8) / =MIN(C1:C8)", note: "extrêmes" },
            { f: "=SI(B2>=10;\"Admis\";\"Ajourné\")", note: "fonction conditionnelle" },
          ],
          exercices: [
            { q: "Écris la formule qui calcule en D2 la moyenne de trois notes en B2, C2 et… non : calcule en D2 le produit de B2 par C2.", a: "=B2*C2 — et pour la moyenne : =MOYENNE(B2:D2)." },
          ],
        },
        {
          id: "info-3", num: 3, title: "Algorithmique et organigrammes", lang: "fr",
          duration: 60, difficulty: 3,
          resume: "Notion d'algorithme, instructions simples, structures conditionnelles et boucles, représentés en organigrammes.",
          sections: [
            { h: "Qu'est-ce qu'un algorithme ?", p: [
              "Un algorithme est une suite finie et ordonnée d'instructions permettant de résoudre un problème. Exemple quotidien : une recette de cuisine.",
              "Les instructions de base : lire une donnée, affecter une valeur (A ← 5), calculer, afficher un résultat.",
            ]},
            { h: "Structures de contrôle", p: [
              "La condition SI…ALORS…SINON exécute un bloc selon un test. Exemple : SI note ≥ 10 ALORS afficher « Admis » SINON afficher « Ajourné ».",
              "La boucle répète des instructions : TANT QUE (condition) FAIRE… ou POUR i de 1 à N FAIRE… — indispensable pour éviter la répétition.",
            ]},
            { h: "L'organigramme", p: [
              "Symboles : ovale = début/fin ; parallélogramme = lecture/affichage ; rectangle = traitement/calcul ; losange = test (oui/non).",
              "On trace le flux avec des flèches : début → traitement → test → sorties → fin.",
            ]},
          ],
          formules: [
            { f: "SI condition ALORS … SINON …", note: "structure conditionnelle" },
            { f: "POUR i ← 1 À N FAIRE …", note: "boucle bornée" },
          ],
          exercices: [
            { q: "Écris l'algorithme qui lit deux nombres et affiche le plus grand.", a: "Début ; Lire A ; Lire B ; SI A > B ALORS Afficher A SINON Afficher B ; Fin." },
          ],
        },
      ],
    },
    {
      name: "Semestre 2",
      chapters: [
        {
          id: "info-4", num: 4, title: "Programmation avec Scratch", lang: "fr",
          duration: 55, difficulty: 2,
          resume: "Créer des animations et petits jeux avec les blocs Scratch : événements, boucles, conditions et variables.",
          points: [
            "Les scripts démarrent avec l'événement « Quand drapeau vert est cliqué ».",
            "Mouvement : « Avancer de 10 pas », « S'orienter à 90° » ; Apparence : « Dire Bonjour », « Costume suivant ».",
            "Contrôle : « Répéter 10 fois », « Si…alors…sinon », « Attendre 1 seconde ».",
            "Variables : créer « score », « la mettre à 0 », « ajouter 1 » — base de tous les jeux.",
            "Capteurs : « Si touche espace pressée » permet d'interagir avec le clavier.",
          ],
          exercices: [
            { q: "Décris un script Scratch qui fait avancer le lutin de 100 pas puis lui fait dire « Bravo ! ».", a: "Événement drapeau vert → bloc « Avancer de 100 pas » → bloc « Dire Bravo ! pendant 2 secondes »." },
          ],
        },
        {
          id: "info-5", num: 5, title: "Internet, web et sécurité numérique", lang: "fr",
          duration: 45, difficulty: 1,
          resume: "Comprendre Internet et le web, naviguer efficacement et adopter les bons réflexes de sécurité.",
          points: [
            "Internet = réseau mondial d'ordinateurs ; le Web = service d'Internet (pages reliées par des liens hypertexte).",
            "Un moteur de recherche (Google) indexe le web ; une URL identifie une page : https://exemple.ma/page.",
            "Sécurité : mots de passe solides et uniques, ne jamais partager ses données personnelles, se méfier du phishing.",
            "Le https et le cadenas indiquent une connexion chiffrée.",
          ],
          exercices: [
            { q: "Cite trois réflexes pour protéger son compte.", a: "Mot de passe long et unique, double authentification, ne jamais cliquer sur un lien suspect dans un e-mail." },
          ],
        },
        {
          id: "info-6", num: 6, title: "Introduction au langage HTML", lang: "fr",
          duration: 50, difficulty: 2,
          resume: "Structurer une page web avec les balises HTML : titres, paragraphes, listes, images et liens.",
          points: [
            "HTML (HyperText Markup Language) structure le contenu : <h1> titre, <p> paragraphe, <ul>/<li> liste, <img src=\"...\"> image, <a href=\"...\"> lien.",
            "Structure de base : <!DOCTYPE html><html><head><title>…</title></head><body>…</body></html>.",
            "Les balises vont par paires ouvrante/fermante : <p>…</p>.",
            "Créer un fichier index.html et l'ouvrir dans le navigateur : c'est ta première page web !",
          ],
          formules: [
            { f: "<h1>Mon titre</h1>", note: "titre principal" },
            { f: "<a href=\"https://exemple.ma\">Lien</a>", note: "lien hypertexte" },
          ],
          exercices: [
            { q: "Écris le code HTML d'une page avec un titre « Ma classe » et une liste de 3 matières.", a: "<h1>Ma classe</h1><ul><li>Maths</li><li>SVT</li><li>Français</li></ul>" },
          ],
        },
      ],
    },
  ],
};

/* ============================================================
   ÉDUCATION ISLAMIQUE — التربية الإسلامية 3AC
   ============================================================ */
export const islam: Subject = {
  id: "islam",
  name: "Éducation Islamique",
  ar: "التربية الإسلامية",
  color: "#2F9E77",
  icon: "crescent",
  description: "دروس القيم والعقيدة والسيرة والفقه وفق المنهاج الرسمي، بأسلوب مبسط مع أنشطة تقويمية.",
  semestres: [
    {
      name: "المدخل الأول",
      chapters: [
        {
          id: "islam-1", num: 1, title: "القسط: مفهومه وأبعاده", ar: "القيم", lang: "ar",
          duration: 45, difficulty: 1,
          resume: "قيمة القسط (العدل) في الإسلام: تعريفها، مجالاتها، وأثرها في بناء المجتمع.",
          points: [
            "القسط هو العدل والإنصاف في القول والفعل والحكم.",
            "قال تعالى: «يا أيها الذين آمنوا كونوا قوامين لله شهداء بالقسط» (المائدة 8).",
            "مجالات القسط: مع النفس، مع الأسرة، مع المجتمع، ومع البيئة.",
            "من ثمراته: نشر الثقة، استقرار المجتمع، نيل رضا الله.",
          ],
          exercices: [
            { q: "أعط مثالاً على القسط في الحياة المدرسية.", a: "أن يقسم التلميذ وقته بين المواد بالعدل، وأن ينصف زملاءه في العمل الجماعي دون محاباة." },
          ],
        },
        {
          id: "islam-2", num: 2, title: "القرآن الكريم: سورة الإسراء (الآيات 23-39)", ar: "القرآن الكريم", lang: "ar",
          duration: 55, difficulty: 2,
          resume: "حفظ الآيات وفهم أحكامها: بر الوالدين، حق ذوي القربى، النهي عن الإسراف والفواحش.",
          points: [
            "الآيات ترسم منهجاً كاملاً للأخلاق: بر الوالدين بالقول الكريم وعدم قول «أف» لهما.",
            "الأمر بإيتاء ذي القربى والمسكين وابن السبيل، والنهي عن التبذير: «إن المبذرين كانوا إخوان الشياطين».",
            "النهي عن قتل النفس وأكل مال اليتيم، والأمر بالوفاء بالعهد والكيل بالقسطاس المستقيم.",
          ],
          exercices: [
            { q: "كيف يكون بر الوالدين في حياتك اليومية؟", a: "بخفض الصوت أمامهما، مساعدتهما في البيت، الدعاء لهما، وطاعتهما في المعروف." },
          ],
        },
        {
          id: "islam-3", num: 3, title: "السيرة النبوية: فتح مكة", ar: "السيرة", lang: "ar",
          duration: 50, difficulty: 2,
          resume: "أحداث فتح مكة (8 هـ): العفو العام، ودروس التسامح وحسن التدبير.",
          points: [
            "وقع الفتح سنة 8 هجرية بعد نقض قريش لصلح الحديبية.",
            "دخل النبي ﷺ مكة متواضعاً شاكراً، وأعلن العفو العام: «اذهبوا فأنتم الطلقاء».",
            "الدروس: التسامح عند القدرة، حقن الدماء، الوفاء بالعهود، حسن التخطيط.",
          ],
          exercices: [
            { q: "ما الدرس المستفاد من عفو النبي ﷺ عن أهل مكة؟", a: "أن العفو عند المقدرة من أعظم الأخلاق، وأنه يفتح القلوب أكثر من الانتقام، ويؤسس للاستقرار والمصالحة." },
          ],
        },
        {
          id: "islam-4", num: 4, title: "الفقه: الزكاة ومقاصدها", ar: "الفقه", lang: "ar",
          duration: 50, difficulty: 2,
          resume: "مفهوم الزكاة، شروط وجوبها، مصارفها الثمانية، ومقاصدها الاجتماعية.",
          points: [
            "الزكاة ركن من أركان الإسلام: حق مالي واجب في أموال محددة بلغت النصاب وحال عليها الحول.",
            "المصارف الثمانية في قوله تعالى: «إنما الصدقات للفقراء والمساكين والعاملين عليها…» (التوبة 60).",
            "مقاصدها: تطهير المال، سد حاجات الفقراء، تحقيق التكافل، محاربة الفوارق الفاحشة.",
          ],
          exercices: [
            { q: "احسب زكاة مبلغ 20.000 درهم بلغت النصاب وحال عليها الحول (النسبة 2,5%).", a: "الزكاة = 20.000 × 2,5 / 100 = 500 درهم." },
          ],
        },
      ],
    },
    {
      name: "المدخل الثاني",
      chapters: [
        {
          id: "islam-5", num: 5, title: "الحديث الشريف: «إنما بعثت لأتمم مكارم الأخلاق»", ar: "الحديث", lang: "ar",
          duration: 45, difficulty: 1,
          resume: "شرح الحديث وفهم مكانة الأخلاق في الرسالة الإسلامية.",
          points: [
            "الحديث يبين أن الغاية الكبرى من البعثة هي إتمام مكارم الأخلاق.",
            "الأخلاق ليست شيئاً ثانوياً بل هي جوهر الدين: «أكمل المؤمنين إيماناً أحسنهم خلقاً».",
            "من مكارم الأخلاق: الصدق، الأمانة، الوفاء، الرحمة، التواضع.",
          ],
        },
        {
          id: "islam-6", num: 6, title: "الإيمان باليوم الآخر وأثره في السلوك", ar: "العقيدة", lang: "ar",
          duration: 50, difficulty: 2,
          resume: "أركان الإيمان باليوم الآخر وأثرها في تقويم سلوك المؤمن.",
          points: [
            "الإيمان باليوم الآخر ركن من أركان الإيمان الستة.",
            "من مشاهد اليوم الآخر: البعث، الحشر، الحساب، الميزان، الصراط، الجنة والنار.",
            "أثره في السلوك: مراقبة الله، إتقان العمل، العدل مع الناس، الأمل والصبر.",
          ],
        },
      ],
    },
  ],
};
