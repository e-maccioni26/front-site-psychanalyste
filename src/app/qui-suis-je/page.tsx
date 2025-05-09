import { FaGraduationCap, FaBriefcase, FaUserMd, FaBook, FaUsers, FaUniversity } from 'react-icons/fa';

export default function QuiSuisJePage() {
  return (
    <main className="py-8 px-4 md:px-8 lg:px-16 animate-fadeIn">
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
                Ancien avocat au barreau et d&apos;enseignant-chercheur à l&apos;Université d&apos;Amiens dans une première partie de ma vie professionnelle, 
                je me suis réorienté vers le domaine de la psychopathologie (psychiatrie, psychologie et psychothérapies) pour mieux comprendre 
                le psychisme humain et le fonctionnement des groupes humains et accompagner les personnes en thérapie.
              </p>
              <p className="leading-relaxed">
                J&apos;exerce également en tant que médiateur assermenté auprès de plusieurs Cour d&apos;appel afin d&apos;accompagner la résolution de conflits.
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
                Titulaire d&apos;un Master 2 en psychanalyse et psychothérapies, je suis diplômé de l&apos;EPHEP 
                (Ecole pratique des hautes études en psychopathologie, <a href="http://www.ephep.com" className="text-[var(--primary)] underline" target="_blank" rel="noopener noreferrer">www.ephep.com</a>);
                d&apos;un Master de philosophie avec un mémoire en phénoménologie de la psychothérapie axé sur le sens de la vie;
                je suis aussi titulaire du Titre professionnel règlementé de Psychothérapeute.
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
                Du point de vue pratique, j&apos;ai approfondi mes connaissances cliniques en psychopathologie et en psychothérapies 
                grâce à de nombreux travaux et stages avec des adultes, des adolescents, des enfants et des couples. Ainsi, j&apos;ai eu la chance 
                de travailler avec des adultes à la Clinique de la Borde à Cour-Cheverny (psychothérapie institutionnelle) et aux Hôpitaux 
                de St-Maurice en Val-de-Marne en psychiatrie adulte; ainsi qu&apos;en suivi psychothérapique au CMP du 11ème arr. de Paris et 
                à Association de Santé Mentale (ASM13) à Paris 13ème.
              </p>
              <p className="leading-relaxed">
                J&apos;ai également accompagné des adolescents et des enfants, en grandes difficultés psychiques, au CMPP de Juvisy-sur-Orge 
                pendant 2 ans où j&apos;ai également été cothérapeute en thérapie par le psychodrame.
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
                Mon approche psychothérapeutique est orientée par la psychanalyse dans ses différents courants freudiens et post-freudiens 
                (Klein, Winnicott, Lacan, Dolto, Anzieu, Kaës, Racamier, etc.), par la théorie et la pratique systémique (Ecole de Palo Alto) 
                et par la psychodynamique avec une intégration des apports des neurosciences. C&apos;est pourquoi toutes mes pratiques s&apos;accompagnées 
                d&apos;une dimension intégrative car fondamentalement chaque personne est unique.
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
                Mon écoute et ma pratique avec les adultes, les couples, les adolescents et les enfants ont été façonnées par mon propre 
                parcours psychanalytique approfondi et par mon travail permanent de formation continue (groupe de travail, présentation de 
                malades à l&apos;Hôpital, séminaires et colloques, etc.). Toutes mes pratiques sont supervisées par une supervision et un contrôle 
                en individuel et en groupes (entre pairs).
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
                Je suis inscrit au RPPS (Répertoire Partagé des Professionnels intervenant dans le système de santé) avec le numéro 10110603304.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}