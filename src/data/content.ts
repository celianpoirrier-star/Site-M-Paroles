export type Species = 'chien' | 'chat' | 'cheval';

export interface Message {
  from: 'gardien' | 'animal';
  text: string;
}

export interface Conversation {
  animal: string;
  species: Species;
  messages: Message[];
}

export interface Prestation {
  id: string;
  title: string;
  price: number;
  description: string;
}

export const site = {
  name: "M'Paroles",
  tagline: 'Communication animale',
  slogan: 'Écouter autrement, comprendre autrement',
  owner: 'Manon Pailhas',
  phone: '06 14 16 51 34',
  phoneHref: 'tel:+33614165134',
  location: 'Aude, Occitanie',
  description:
    "Communication animale à distance avec Manon Pailhas, basée dans l'Aude. Des séances d'écoute bienveillantes pour mieux comprendre votre animal, partout en France et dans les pays francophones.",
};

export const nav = [
  { href: '#communication-animale', label: 'La communication animale' },
  { href: '#deroulement', label: 'Déroulement' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#qui-suis-je', label: 'Qui suis-je' },
];

export const hero = {
  title: 'Et si votre animal avait des choses à vous dire ?',
  text: "Des séances de communication animale à distance, dans l'écoute, la douceur et le respect de son rythme. Pour chiens, chats, chevaux et tous les compagnons qui partagent votre vie.",
  conversations: [
    {
      animal: 'Filou',
      species: 'chien',
      messages: [
        { from: 'gardien', text: "Depuis le déménagement, il ne quitte plus l'entrée." },
        { from: 'animal', text: "Ici, tout est nouveau. Je surveille la porte en attendant que ça redevienne chez nous." },
        { from: 'gardien', text: "Qu'est-ce qui t'aiderait ?" },
        { from: 'animal', text: 'Mon vieux coussin, près de toi. Et nos balades du matin, comme avant.' },
      ],
    },
    {
      animal: 'Praline',
      species: 'chat',
      messages: [
        { from: 'gardien', text: "Elle se cache depuis l'arrivée du bébé." },
        { from: 'animal', text: "La maison a changé de bruits. J'ai besoin d'un endroit en hauteur, rien qu'à moi." },
        { from: 'gardien', text: 'Tu nous en veux ?' },
        { from: 'animal', text: "Non. J'aimerais juste un moment avec toi, le soir, quand tout est calme." },
      ],
    },
    {
      animal: 'Azur',
      species: 'cheval',
      messages: [
        { from: 'gardien', text: 'Il refuse de monter dans le van.' },
        { from: 'animal', text: "La dernière fois, j'ai eu peur. Le sol bougeait et je me sentais seul." },
        { from: 'gardien', text: 'Comment te rassurer ?' },
        { from: 'animal', text: 'Prends ton temps. Laisse-moi regarder, sentir… et reste près de moi.' },
      ],
    },
  ] satisfies Conversation[],
};

export const communication = {
  eyebrow: "Qu'est-ce que la communication animale ?",
  title: 'Une autre façon de les écouter',
  paragraphs: [
    'Nos animaux communiquent chaque jour avec nous, à travers leurs comportements, leurs émotions, leur présence et leur sensibilité. Ils ont leur propre manière de nous transmettre ce qu’ils vivent et ce qu’ils ressentent.',
    'La Communication Animale est une approche intuitive qui consiste à se mettre à l’écoute de l’animal, à accueillir ce qu’il souhaite exprimer et à tenter de mieux comprendre son vécu, ses besoins et ses émotions.',
    'C’est un moment d’échange et d’écoute, qui peut permettre de porter un regard différent sur votre animal, de mieux comprendre certaines situations et de nourrir le lien qui vous unit.',
  ],
  highlight:
    'Un espace pour écouter autrement, comprendre davantage et laisser une place à la parole de l’animal.',
};

export const fonctionnement = {
  eyebrow: 'Comment cela fonctionne ?',
  title: 'Un lien direct, dans l’écoute et la transparence',
  intro: [
    'La communication animale se réalise à distance, dans un espace calme et propice à l’écoute. Cette distance permet de me centrer pleinement sur l’animal, sur ce qu’il exprime et sur les informations qui peuvent être reçues, sans les éventuelles interférences liées à une rencontre en présentiel.',
    'Dans cet espace d’écoute, je me place dans le « ici et maintenant », afin d’accueillir l’animal tel qu’il est, dans son vécu du moment. Il peut alors être question de différents aspects de son expérience :',
  ],
  aspects: [
    { title: 'Ses émotions et ses ressentis', text: 'Comment se sent-il ? Que traverse-t-il ?' },
    { title: 'Ses besoins et ses envies', text: 'De quoi a-t-il besoin ? Que souhaite-t-il exprimer ?' },
    { title: 'Son état énergétique', text: 'La manière dont il semble vivre son équilibre du moment.' },
    { title: 'Ses mémoires et son vécu', text: 'Qu’ils soient actuels ou plus anciens.' },
    { title: 'Ses messages', text: 'Ce qu’il souhaite transmettre à son gardien.' },
  ],
  outro: [
    'La communication permet également de transmettre à l’animal les questions, les interrogations ou les messages de son gardien, afin d’ouvrir un espace d’échange et de chercher ensemble une meilleure compréhension de ce que votre animal souhaite exprimer.',
    'L’intention est avant tout de laisser une place à la parole de l’animal, dans le respect de son rythme, de son individualité et du lien unique qui l’unit à son humain.',
    'Chaque communication est ainsi une rencontre particulière, accueillie avec écoute, bienveillance, respect et sans jugement.',
  ],
};

export const quandConsulter = {
  eyebrow: 'Quand faire appel à la communication animale ?',
  title: 'Une séance peut être proposée lorsque l’on s’interroge sur…',
  situations: [
    { title: 'Des changements de comportement', text: 'Peur, agressivité, mise en retrait, malpropreté…' },
    { title: 'Son adaptation à un changement', text: 'Déménagement, arrivée d’un bébé ou d’un autre animal, séparation…' },
    { title: 'Des difficultés relationnelles', text: 'L’impression que quelque chose a changé dans la relation gardien / animal.' },
    { title: 'Une période délicate', text: 'Maladie, vieillissement ou accompagnement en fin de vie : un échange lors d’une période difficile.' },
    { title: 'Des évènements particuliers', text: 'Transport, changement de famille, opération…' },
    { title: 'Ou simplement…', text: 'L’envie de mieux le comprendre et de renforcer votre lien.' },
  ],
  warning:
    'La communication animale, au sens de communication intuitive ou télépathique, ne doit pas remplacer un vétérinaire, un comportementaliste qualifié ou un éducateur lorsque l’animal présente un problème de santé ou de comportement.',
};

export const deroulement = {
  eyebrow: 'Déroulement d’une séance',
  title: 'Quatre temps, à votre rythme',
  steps: [
    {
      title: 'Premier contact',
      duration: null,
      paragraphs: [
        'À la suite de votre réservation, un formulaire vous est envoyé afin de recueillir les informations nécessaires concernant votre animal et votre demande.',
        'Si vous le souhaitez, un premier échange téléphonique peut également être proposé afin de répondre à vos questions, d’échanger autour de votre démarche et de préciser vos attentes.',
      ],
    },
    {
      title: 'La communication animale',
      duration: '1h30 à 2h environ',
      paragraphs: [
        'La communication se réalise dans un espace calme et méditatif, propice à l’écoute et à la réception des informations transmises par votre animal.',
        'Je me place dans une posture bienveillante et respectueuse sans chercher à interpréter ou à orienter les messages reçus. Ce temps permet d’accueillir ce que votre animal souhaite exprimer, selon le cadre de la séance et les intentions posées en amont.',
      ],
    },
    {
      title: 'Le compte rendu détaillé',
      duration: '1h environ',
      paragraphs: [
        'À la suite de la communication, je prends le temps de retranscrire et de mettre en forme l’ensemble des éléments recueillis.',
        'Ce compte rendu vous permet de conserver une trace de l’échange et de pouvoir le relire tranquillement, à votre rythme, afin de laisser les informations cheminer et prendre leur place.',
      ],
    },
    {
      title: 'Le second contact',
      duration: '30 à 45 min environ',
      paragraphs: [
        'Nous prenons un nouveau temps d’échange ensemble pour vous transmettre les informations reçues, répondre à vos questions, apporter les éclaircissements nécessaires et vous permettre d’exprimer vos ressentis.',
        'Nous pouvons également observer ce qui résonne pour vous, ce qui fait écho à votre vécu avec votre animal et, lorsque cela est pertinent, les pistes qui peuvent émerger. À la suite de cet échange, le compte rendu détaillé vous sera envoyé.',
      ],
    },
  ],
};

export const tarifs = {
  eyebrow: 'Tarifs et prestations',
  title: 'Trois façons de se rencontrer',
  payment:
    'Le règlement s’effectue par virement bancaire. Les coordonnées bancaires vous seront communiquées lors de la prise de rendez-vous.',
  closing:
    'Chaque communication est accueillie avec respect, douceur et bienveillance, dans le respect du lien unique qui vous unit à votre animal.',
  prestations: [
    {
      id: 'premiere',
      title: 'Première communication',
      price: 69,
      description:
        'Cette première rencontre avec votre animal ouvre un espace d’écoute et d’échange. Elle peut permettre d’apporter une réflexion sur certaines interrogations, de mieux comprendre une situation vécue par l’animal et, lorsque cela est pertinent, d’identifier des pistes pouvant contribuer à retrouver davantage d’harmonie et d’équilibre.',
    },
    {
      id: 'suivi',
      title: 'Communication de suivi',
      price: 59,
      description:
        'Cette communication s’inscrit dans la continuité d’un premier échange. Elle peut permettre d’approfondir certains éléments abordés précédemment, d’accompagner votre animal lors d’une période de changement ou de transition, ou encore de suivre son évolution au fil du temps.',
    },
    {
      id: 'defunt',
      title: 'Communication avec un animal défunt',
      price: 49,
      description:
        'Cette communication offre un espace dédié au lien qui demeure après le départ de votre compagnon. Elle peut accompagner un chemin de deuil, permettre d’accueillir les émotions présentes et recevoir les messages que vous souhaitez transmettre ou qui pourraient être perçus comme venant de lui.',
    },
  ] satisfies Prestation[],
};

export const quiSuisJe = {
  eyebrow: 'Qui suis-je ?',
  title: 'Je m’appelle Manon Pailhas',
  intro: [
    'Depuis mon enfance, j’ai grandi dans un environnement où la découverte de la nature et le respect du vivant occupaient une place importante. Très tôt, j’ai développé une profonde curiosité pour le monde qui m’entoure, et plus particulièrement pour les animaux.',
    'C’est donc naturellement que je me suis orientée vers un BTS Gestion et Protection de la Nature, puis vers le métier de soigneur animalier, que j’exerce depuis 2015.',
  ],
  rencontre: {
    eyebrow: 'Une rencontre décisive',
    text: 'Une rencontre toute particulière avec un majestueux éléphant mâle m’a amenée à me questionner davantage sur notre manière d’interagir avec les animaux :',
    questions: ['Comment mieux les comprendre ?', 'Comment être davantage à leur écoute ?'],
    conclusion: 'C’est ainsi que la Communication Animale s’est présentée à moi comme une évidence.',
  },
  parcours: [
    {
      title: 'Ma formation',
      text: 'À travers l’ECAMT, j’ai eu la possibilité de suivre un cursus complet en trois temps (350h) : la découverte de la pratique, l’approfondissement de l’écoute de mes ressentis, puis l’exploration du lien humain-animal dans son entièreté.',
    },
    {
      title: 'Aujourd’hui',
      text: 'Basée dans l’Aude, je propose des séances de communication animale à distance, partout en France et dans les pays francophones. Mon parcours de soigneur animalier, mon expérience auprès des animaux et mon cheminement personnel nourrissent ma façon d’aborder chaque séance, avec curiosité, humilité et respect.',
    },
  ],
  facts: [
    { value: '2015', label: 'Soigneur animalier depuis' },
    { value: '350h', label: 'De formation à l’ECAMT' },
    { value: 'À distance', label: 'France et pays francophones' },
  ],
};

export const engagement = {
  eyebrow: 'Mon engagement',
  title: 'Un savoir-faire, mais aussi un savoir-être',
  paragraphs: [
    'Se positionner en tant que thérapeute auprès des humains et des animaux représente pour moi un véritable savoir-faire, mais aussi un savoir-être. Je m’engage à faire vivre au quotidien des valeurs qui me sont essentielles.',
    'Chaque animal est unique, tout comme chaque relation qui nous unit à lui. Mon intention est donc d’accueillir chaque séance avec ouverture, sans jugement et dans le respect de ce qui est vécu.',
    'Mon objectif premier sera d’honorer ce que les animaux peuvent nous enseigner : apprendre à faire confiance à nos ressentis, à développer nos sens et à revenir pleinement à l’instant présent.',
  ],
  values: ['Respect', 'Bienveillance', 'Écoute', 'Authenticité', 'Partage', 'Entraide'],
  quote: 'Être ici. Être à l’écoute. Et laisser de la place au lien.',
};

export const reserver = {
  eyebrow: 'Réserver ou offrir',
  title: 'Prendre le temps de l’écouter',
  booking: {
    title: 'Réserver une séance',
    text: 'Vous souhaitez mieux comprendre votre animal, être davantage à son écoute ou simplement découvrir ce qu’il souhaite vous transmettre ? Je vous invite à réserver directement votre séance.',
    cta: 'Réserver une communication',
  },
  gift: {
    title: 'Offrir une communication animale',
    text: [
      'Et si vous offriez un moment d’écoute et de connexion avec un animal cher à quelqu’un qui vous est proche ?',
      'Une communication animale peut être une jolie façon d’offrir une expérience différente, pleine de sens et de douceur. Le bon cadeau peut être offert pour une occasion particulière… ou simplement pour faire plaisir.',
    ],
    cta: 'Offrir une communication',
  },
  form: {
    title: 'Votre demande',
    intro: 'Quelques mots suffisent : je reviens vers vous rapidement pour convenir ensemble de la suite.',
    success: 'Merci ! Votre message a bien été envoyé. Je vous réponds au plus vite.',
    error: 'Oups, l’envoi n’a pas fonctionné. Vous pouvez réessayer ou m’appeler directement.',
  },
};
