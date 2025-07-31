import type { Metadata } from 'next';
import Hero from "../components/Hero";
import Image from 'next/image';
import Link from 'next/link';
import Accordion from "../components/Accordion";
import Contact from "../components/Contact";
import TypeAnimationComponent from "../components/TypeAnimationComponent";

export const metadata: Metadata = {
  title: "Accueil | Hervé Maccioni - Psychanalyste & Psychothérapeute", 
  description: "Hervé Maccioni, psychanalyste et psychothérapeute à Bordeaux, vous accompagne en psychothérapie individuelle, de couple et familiale. Retrouvez un équilibre et un bien-être durables.", 
  keywords: ["psychanalyste bordeaux", "psychothérapeute bordeaux", "thérapie individuelle", "thérapie de couple", "thérapie familiale", "psychothérapie bordeaux", "cabinet psy bordeaux"],
  alternates: {
    canonical: 'https://hervemaccioni.fr', 
  },
  openGraph: {
    title: "Accueil | Hervé Maccioni - Psychanalyste & Psychothérapeute à Bordeaux",
    description: "Hervé Maccioni, psychanalyste et psychothérapeute à Bordeaux, vous accompagne en psychothérapie individuelle, de couple et familiale. Retrouvez un équilibre et un bien-être durables.",
    url: 'https://hervemaccioni.fr',
    siteName: "Hervé Maccioni - Psychanalyste",
    images: [
      {
        url: "/images/og-image-accueil.jpg", 
        width: 1200,
        height: 630,
        alt: "Hervé Maccioni - Psychanalyste et psychothérapeute à Bordeaux",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accueil | Hervé Maccioni - Psychanalyste & Psychothérapeute à Bordeaux",
    description: "Hervé Maccioni, psychanalyste et psychothérapeute à Bordeaux, vous accompagne en psychothérapie individuelle, de couple et familiale. Retrouvez un équilibre et un bien-être durables.",
    images: ["/images/twitter-image-accueil.jpg"], 
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TypeAnimationComponent />
      {/* Section Pourquoi consulter */}

        <section id="pourquoi-consulter" className="section-pourquoi-consulter">
          <div className="grid">
            <div>
              {/* Conteneur vide pour maintenir la structure de la grille */}
            </div>
            <div className="flex justify-center">
              <Image src="/images/brain-emotions.png" alt="Image Emotion Humain Psy" width={700} height={700} className="rounded-xl" priority unoptimized />
            </div>
            <div className="background-color-text p-10">
              <h3 className="text-2xl font-bold mb-3">Aller voir un psy? Quand ? Pourquoi?</h3>
              <p className="mb-7">Tout simplement quand on ne peut plus faire autrement car ce qui fait embarras devient difficilement supportable. Quand désirs et contraintes s&apos;affrontent, quand le même scénario déplaisant se répète, quand un sentiment d&apos;incompréhension et d&apos;embarras s&apos;installe devant le tour que prend sa propre vie ou devant un événement difficile à accepter; ou encore quand on souhaite parler de choses qu&apos;on porte en soi depuis trop longtemps comme un poids. Alors il apparaît, comme une évidence, qu&apos;aller voir un psy est une bonne idée.</p>
              <div className="mt-3 flex flex-col sm:flex-row gap-4">
                <Link href={"/psychotherapie/adultes-couples"}  className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#1d2536] text-center sm:text-base text-sm hover-lift card-hover">Psychothérapie Adultes et Couple</Link>
                <Link href={"/psychotherapie/adultes-couples"}  className="border-2 border-[#2E3A59] text-[#2E3A59] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#e5eaf3] bg-white text-center sm:text-base text-sm hover-lift card-hover">Psychothérapie Enfants et Adolescents</Link>
              </div>
            </div>
          </div>
        </section>
     
      {/* Section En quoi consiste une psychothérapie ? */}
      <section id="psychotherapie" className="mb-12 py-16 px-6 md:px-12 bg-[#FAFAF8]">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-black text-center md:text-start" style={{fontFamily:'var(--font-title)'}}>
          <span className="underline decoration-4 decoration-[#2E3A59] underline-offset-4">En quoi consiste une psychothérapie ?</span>
        </h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
            <div className="background-card w-full md:w-auto">
              <div>
                <span className="text-6xl">🗣️</span>
                <h3 style={{fontFamily:'var(--font-paragraph)'}} className="mt-4 font-bold">Exprimer ce qui vous embarrasse</h3>
                <div className="h-1 w-16 bg-black my-3 rounded-full"></div>
                <p className="w-full md:w-90">La psychothérapie offre un espace pour mettre des mots sur ce qui vous traverse. Elle permet d&lsquo;éclairer les mécanismes inconscients responsables du mal-être et du symptôme.</p>
              </div>
            </div>
            <div className="background-card w-full md:w-auto">
              <div>
                <span className="text-6xl">👂</span>
                <h3 style={{fontFamily:'var(--font-paragraph)'}} className="mt-4 font-bold">Une écoute bienveillante</h3>
                <div className="h-1 w-20 bg-black my-3 rounded-full"></div>
                <p className="w-full md:w-90">Grâce à une écoute attentive et confidentielle, vous pouvez aborder ce qui est difficile. Le thérapeute vous aide à faire des liens et à mieux comprendre vos blocages.</p>
              </div>
            </div>
            <div className="background-card w-full md:w-auto">
              <div>
                <span className="text-6xl">🔄</span>
                <h3 style={{fontFamily:'var(--font-paragraph)'}} className="mt-4 font-bold">Avancer vers un mieux-être</h3>
                <div className="h-1 w-16 bg-black my-3 rounded-full"></div>
                <p className="w-full md:w-90">Au fil des séances, vous libérez vos forces intérieures. Les symptômes s&lsquo;apaisent, la répétition cesse, et vous retrouvez une nouvelle capacité à inventer votre vie.</p>
              </div>
            </div>
          </div>
        <div className="flex justify-center mt-12">
          <Link href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" target="_blank" rel="noopener noreferrer" className="bg-[#2E3A59] text-white text-xl font-bold px-8 md:px-10 py-3 md:py-4 rounded-lg shadow transition hover:bg-[#334161] inline-flex items-center gap-2 hover-lift card-hover animate-pulse" style={{fontFamily:'var(--font-paragraph)'}}>
          <Image src="/images/icones/doctolib-logo.svg" alt="Doctolib" width={50} height={50} />
          Prendre rendez-vous</Link>
        </div>
      </section>

      <section className="mb-12 py-16 px-6 md:px-12">
          <h2 className="text-5xl font-bold mb-10 text-center text-black" style={{fontFamily:'var(--font-title)'}}>
            <span className="underline">FAQ (Questions / Réponses)</span>
          </h2>
          
          <Accordion items={[
            {
              question: "Combien de temps dure une psychothérapie ?",
              answer: "La durée d'une psychothérapie varie selon chaque personne, sa demande et son rythme. Il n'y a pas de durée prédéfinie. Certaines personnes ressentent un apaisement après quelques mois, d'autres choisissent un travail plus approfondi qui s'inscrit dans la durée. C'est un chemin personnel, évolutif, qui se construit séance après séance."
            },
            {
              question: "À quelle fréquence se déroulent les séances ?",
              answer: "La plupart du temps une psychothérapie se déroule sur un rythme d'une séance par semaine. Une séance tous les 15 jours peut être envisagée dans certains cas. Concernant la psychanalyse, une à deux séances par semaine constitue le rythme de base du travail analytique, idéalement trois séances sur le divan."
            },
            {
              question: "Quels sont les effets d’une psychothérapie ?",
              answer: "Certaines personnes ressentent un apaisement après quelques mois voire parfois quelques semaines de psychothérapie. Au-delà de ce bénéfice et du mieux-être, beaucoup de personnes choisissent de poursuivre le travail entâmé car il a ouvert pour eux des nouveaux sentiers fort intéressants."
            },
            {
              question: "Quelles est la différence entre faire une psychothérapie et faire une psychanalyse ?",
              answer: "Tout travail thérapeutique commence en face à face et peut se maintenir jusqu’à la fin en face à face. L’entrée en psychothérapie se fait le plus souvent autour de la formulation d’une demande précise et de l’évocation de symptômes gênants qui, d’ailleurs, cèdent ou se transforment au bout de quelques mois sans qu’on puisse trop généraliser ce point à tous les cas.L’entrée dans un travail de psychanalyse peut être proposé, sur le divan, quand une personne manifeste un désir d’approfondissement de la connaissance de son propre fonctionnement psychique ou que sa situation le requiert. Le passage sur le divan peut témoigner de la véritable entrée en analyse et c'est l'analyste qui en prend la décision."
            },
            {
              question: "Combien coûte et dure une séance ?",
              answer: "Le prix d’une séance de psychothérapie est fixé à 60 euros TTC et elle dure entre 30 à 45 minutes. Le prix d’une séance de psychanalyse est de 60 euros en général. Ce prix peut toutefois être revu à la baisse dans certaines situations (étudiants notamment) ou, à la hause, en rapport avec la situation de la personne qui consulte. Une séance de psychanalyse dure en général 30 minutes. La séance de thérapie de couple coûte 120 euros et dure une heure."
            },
            {
              question: "Le Psy participe-t-il au dispositif mon parcours Psy ?",
              answer: "Non, mon travail de psychothérapeute ne s’inscrit pas dans ce dispositif de prise en charge."
            },
            {
              question: "Quelle est la différence entre un psychothérapeute, un psychiatre, un psychologue et un psychanalyste ?",
              answer: "Le psychothérapeute (D.E., diplômé d’Etat) est un professionnel du soin psychique reconnu comme tel par un Titre professionnel réglementé et protégé par l’Etat (Décret n° 2012-695 du 7 mai 2012 modifiant le décret n° 2010-534 du 20 mai 2010 relatif à l'usage du titre de psychothérapeute.) Pour être titulaire de ce titre, il faut disposer cumulativement, d’une part, d’un des diplômes suivants : Doctorat de médecine ou Master 2 de psychologie ou Master 2 de psychanalyse et, d’autre part, avoir suivi un enseignement théorique et clinique plus des stages d’un minimum de 400 heures en institutions. En ce qui me concerne ma formation clinique a comporté, à dessein, plus de 2400 heures de stages cliniques. Le psychiatre est docteur en médecine et spécialiste des pathologies mentales. Il est le seul à pouvoir prescrire, avec le médecin généraliste, des médicaments psychotropes. De droit, un psychiatre peut user du Titre de psychothérapeute, diplômé d’Etat. Toutefois, un certain nombre de psychiatres ne pratiquent pas, à proprement parler, la psychothérapie mais des séances de consultations psychiatriques. Il n’est d’ailleurs fréquent qu’ils adressent eux-mêmes certains de leurs patients à un psychothérapeute pour faire un travail psychique axé, notamment, sur la parole. Le psychologue a suivi un cursus universitaire et est titulaire d’un Master de psychologie. Il peut avoir une orientation clinique ou de recherches selon son orientation personnelle. Pour être reconnu comme psychothérapeute, un(e) psychologue doit, soit être titulaire d’un Master 2 de psychologie clinique, soit compléter sa formation pour l’obtention d’un Certificat d’aptitude au Titre de psychothérapeute (en 1 an ou 2 an après le Master au regard de ses études antérieures au sein d’une école agrée par l’Etat). Le psychanalyste est un professionnel de la santé mentale qui utilise les principes et les techniques de la psychanalyse pour aider les personnes à comprendre et à résoudre les embarras et les symptômes (somato-psychiques) qu’ils rencontrent par l’écoute de la parole d’une personne dans son unicité même. Conduire des psychanalyses exige impérativement du psychanalyste qu’il réunisse plusieurs conditions : 1° Il doit avoir lui-même suivi une psychanalyse approfondie et poursuivie aussi loin que possible sa propre cure psychanalytique pour poser « un acte analytique » à son tour (Lacan, Séminaire 15). Ce dernier point le distingue des autres professionnels du soin psychique qui n’ont pas l’obligation d’avoir été analysant eux-mêmes ; 2° qu’il ait une formation et une connaissance solide de la nosologie/sémiologie psychiatrique et de la psychopathologie ; cette connaissance devant être assortie d’une très vaste culture générale étendue aux humanités ; 3° sa pratique doit être supervisée régulièrement par un professionnel disposant d’une solide expérience clinique ; 4° un psychanalyste doit poursuivre sa formation en continue, en parallèle de sa pratique clinique, en participant activement avec ses pairs au sein d’une ou de plusieurs Associations Psychanalytiques lors de séminaires et de groupes de travail ; 5° un psychanalyste se réfère et applique lui-même une éthique exigeante qui mêle respect bienveillant de la personne, secret professionnel absolu, écoute inconditionnelle et prise en compte de la situation sociale et personnelle de l’analysant pour déterminer le prix de la séance. Enfin, un psychanalyste n’est inféodé, par essence, à aucun pouvoir idéologique et c’est en cela que l’éthique psychanalytique s’est toujours tenue à bonne distance critique de tous pouvoirs constitués (cf. la question de l’analyse profane chez Freud.)"
            },
            {
              question: "Pourquoi allez-voir un psy peut me faire peur ?",
              answer: "La démarche de prendre un rendez-vous pour aller rencontrer un psy peut parfois impressionner car elle peut parfois convoquer des clichés ou des représentations fausses sur « la maladie mentale ». Or, prendre un rendez-vous avec un psy est une démarche particulièrement saine quand on souffre ou que l’on souhaite parler de choses qu’on ne peut plus garder pour soi."
            },
          ]} />
      </section>

      {/* Section Contact */}
      <Contact />
    </main>
  );
}