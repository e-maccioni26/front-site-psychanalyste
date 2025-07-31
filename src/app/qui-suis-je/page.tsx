import { FaGraduationCap, FaBriefcase, FaUserMd, FaBook, FaUsers, FaUniversity } from 'react-icons/fa';
import Breadcrumb from "../../components/Breadcrumb";
import type { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Qui suis-je ? | Hervé Maccioni - Psychothérapeute & Psychanalyste à Bordeaux',
  description: "Découvrez le parcours professionnel et les expériences cliniques d'Hervé Maccioni, psychothérapeute et psychanalyste à Bordeaux. Anciennement avocat et enseignant-chercheur, diplômé de l'EPHEP et inscrit au RPPS.",
  keywords: ["Hervé Maccioni", "psychothérapeute bordeaux", "psychanalyste bordeaux", "parcours psychothérapeute", "expérience clinique psy", "formation psychanalyse", "RPPS psychothérapeute", "médiateur assermenté bordeaux"],
  alternates: {
    canonical: 'https://hervemaccioni.fr/qui-suis-je',
  },
  openGraph: {
    title: 'Qui suis-je ? | Hervé Maccioni - Psychothérapeute & Psychanalyste à Bordeaux',
    description: "Découvrez le parcours professionnel et les expériences cliniques d'Hervé Maccioni, psychothérapeute et psychanalyste à Bordeaux.",
    url: 'https://hervemaccioni.fr/qui-suis-je',
    siteName: 'Hervé Maccioni - Psychanalyste à Bordeaux',
    images: [
      {
        url: 'https://hervemaccioni.fr/images/open-graph-qui-suis-je.jpg', 
        width: 1200,
        height: 630,
        alt: 'Hervé Maccioni - Psychothérapeute et Psychanalyste à Bordeaux',
      },
    ],
    locale: 'fr_FR',
    type: 'profile', 
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qui suis-je ? | Hervé Maccioni - Psychothérapeute & Psychanalyste à Bordeaux',
    description: "Découvrez le parcours professionnel et les expériences cliniques d'Hervé Maccioni, psychothérapeute et psychanalyste à Bordeaux.",
    images: ['https://hervemaccioni.fr/images/twitter-image-qui-suis-je.jpg'], 
  },
};

export default function QuiSuisJePage() {
  return (
    <main className="py-8 px-4 md:px-8 lg:px-16 animate-fadeIn">
      <Breadcrumb className="bg-white w-fit shadow-sm rounded-md" />
      <div className="max-w-4xl mx-auto">
        <div className='flex justify-center'>
          <h1 className="bg-white shadow-lg p-5 rounded-md w-fit text-4xl md:text-5xl font-bold mb-20 mt-8 text-center text-[var(--primary)]">
            Qui <span className='underline'>suis-je</span>
          </h1>
        </div>
        
        <div className="relative mb-12">
          <div className="absolute left-0 top-0 w-1 h-full bg-[var(--primary)] rounded-full"></div>
          
          {/* Parcours professionnel */}
          <section className="mb-10 pl-8">
            <div className="flex items-center mb-4">
              <div className="bg-[var(--primary)] p-3 rounded-full mr-4 text-white">
                <FaBriefcase size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Parcours professionnel</h2>
            </div>
            <div className="background-card">
              <p className="mb-4 leading-relaxed">
              Ancien avocat au barreau de Paris et enseignant-chercheur à l’Université d’Amiens pendant plusieurs années, j’ai également exercé dans une première partie de ma vie professionnelle en tant qu’ingénieur-conseil en organisation (Cnam) auprès de différentes institutions. Puis, au gré d’une psychanalyse personnelle approfondie qui a changé ma vie, je me suis réorienté vers le domaine de la psychopathologie pour mieux comprendre le psychisme individuel mais aussi le fonctionnement psychique des groupes humains, et ce surtout, dans le but d’accompagner au mieux les adultes, les enfants et les adolescents en psychothérapie. <br /><br />Cela m’a amené à me former, en psychanalyse, en psychiatrie, à diverses techniques psychothérapeutiques (dont psychocorporelles), à l’anthropologie, à la psychologie et à la philosophie. 
              Par ailleurs, j’exerce aussi la fonction de médiateur assermenté auprès de plusieurs Cour d’appel afin d’accompagner la sortie et la résolution de conflits. 
              </p>
            </div>
          </section>
          
          {/* Diplômes et Titres */}
          <section className="mb-10 pl-8">
            <div className="flex items-center mb-4">
              <div className="bg-[var(--primary)] p-3 rounded-full mr-4 text-white">
                <FaGraduationCap size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Diplômes et Titres</h2>
            </div>
            <div className="background-card">
              <p className="leading-relaxed">
              Outre mes diplômes en droit et en lettres, je suis titulaire d&apos;un Master 2 en psychanalyse et psychothérapies (avec mention très bien) et aussi diplômé de l&apos;EPHEP (Ecole pratique des hautes études en psychopathologie, <a href="http://www.ephep.com" className="text-[var(--primary)] underline" target="_blank" rel="noopener noreferrer">www.ephep.com</a>);
              avec mention très bien et les félicitations du jury. <br /><br />Egalement titulaire d’un Master de philosophie (avec mention très bien) avec un mémoire en phénoménologie portant sur la psychothérapie axée sur « le sens de la vie » (logothérapie). Je suis aussi titulaire du Titre professionnel règlementé de Psychothérapeute, D.E., (Décret n° 2012-695 du 7 mai 2012 modifiant le décret n° 2010-534 du 20 mai 2010 relatif à l&apos;usage du titre de psychothérapeute.)
              </p>
            </div>
          </section>
          
          {/* Expériences cliniques */}
          <section className="mb-10 pl-8">
            <div className="flex items-center mb-4">
              <div className="bg-[var(--primary)] p-3 rounded-full mr-4 text-white">
                <FaUserMd size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Expériences cliniques</h2>
            </div>
            <div className="background-card">
              <p className="mb-4 leading-relaxed">
                Du point de vue de la pratique clinique, j’ai approfondi mes connaissances de terrain en psychopathologie et en psychothérapies grâce à de nombreux travaux et de stages en institutions, avec des adultes, des adolescents et des enfants. Ainsi, d’une part, j’ai eu la chance de travailler avec des patients adultes, sous la tutelle de grands professionnels (psychiatres et chefs de clinique, psychothérapeutes, psychologues notamment) à la Clinique de la Borde à Cour-Cheverny près de Blois (en psychothérapie institutionnelle) et aux Hôpitaux de St-Maurice en Val-de-Marne en psychiatrie adulte ; ainsi qu’en suivi psychothérapique au CMP du 11ème arr. de Paris et à Association de Santé Mentale (ASM13) à Paris 13ème. 
              </p>
              <p className="leading-relaxed">
                D’autre part, j’ai également accompagné des enfants et des adolescents, en difficultés psychiques, au CMPP de Juvisy-sur-Orge pendant 2 ans. Lors de cette formation clinique, j’ai également pratiqué le psychodrame (en individuel et en groupe) en tant que co-thérapeute psychodramatiste, ce qui m’a non seulement formé à cet outil remarquable mais également convaincu du grand intérêt thérapeutique de cette technique de soins.
              </p>
            </div>
          </section>
          
          {/* Orientation de psychothérapeute */}
          <section className="mb-10 pl-8">
            <div className="flex items-center mb-4">
              <div className="bg-[var(--primary)] p-3 rounded-full mr-4 text-white">
                <FaBook size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Orientation de psychothérapeute</h2>
            </div>
            <div className="background-card">
              <p className="leading-relaxed">
              Mon approche psychothérapeutique est orientée par la psychanalyse dans ses différents courants freudiens et post-freudiens (Klein, Winnicott, Lacan, Dolto, Green, Anzieu, Kaës, Racamier, etc.), par la théorie et la pratique systémique (Ecole de Palo Alto notamment), et par la psychodynamique avec une intégration des apports des neurosciences. C’est pourquoi toutes mes pratiques s’accompagnent d&apos;une dimension intégrative liée à la parole d’un sujet entendu dans sa singularité (Lacan) car fondamentalement chaque personne est unique. 
              </p>
            </div>
          </section>
          
          {/* Formation continue */}
          <section className="mb-10 pl-8">
            <div className="flex items-center mb-4">
              <div className="bg-[var(--primary)] p-3 rounded-full mr-4 text-white">
                <FaUniversity size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Formation continue</h2>
            </div>
            <div className="background-card">
              <p className="leading-relaxed">
              Mon écoute et ma pratique avec les adultes, les couples, les adolescents et les enfants, ont été façonnées par mon propre parcours psychanalytique approfondi et par mon travail permanent de formation continue (groupe de travail, présentation de malades à l&apos;Hôpital, séminaires et colloques, etc.). Toutes mes pratiques sont supervisées, régulièrement, par une supervision et un contrôle, en individuel et en groupes (entre pairs). 
              </p>
            </div>
          </section>
          
          {/* Numéro RPPS */}
          <section className="pl-8">
            <div className="flex items-center mb-4">
              <div className="bg-[var(--primary)] p-3 rounded-full mr-4 text-white">
                <FaUsers size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">Inscription professionnelle</h2>
            </div>
            <div className="background-card">
              <p className="leading-relaxed">
                Je suis inscrit au RPPS (Répertoire Partagé des Professionnels de Santé) avec le numéro 10110603304.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}