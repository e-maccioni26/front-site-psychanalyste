import Breadcrumb from "../../components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'; // Importez Metadata

export const metadata: Metadata = {
  title: 'La Psychothérapie | Définition & Bénéfices | Hervé Maccioni - Psychanalyste Bordeaux',
  description: "Découvrez en quoi consiste la psychothérapie avec Hervé Maccioni, psychanalyste à Bordeaux. Un espace d'écoute bienveillante pour exprimer votre mal-être et avancer vers un mieux-être.",
  keywords: ["psychothérapie bordeaux", "définition psychothérapie", "bénéfices psychothérapie", "espace thérapeutique bordeaux", "mieux-être psychanalyse", "thérapie individuelle", "thérapie de couple", "thérapie enfant adolescent", "psychothérapeute bordeaux"],
  alternates: {
    canonical: 'https://hervemaccioni.fr/psychotherapie',
  },
  openGraph: {
    title: 'La Psychothérapie | Définition & Bénéfices | Hervé Maccioni - Psychanalyste Bordeaux',
    description: "Découvrez en quoi consiste la psychothérapie avec Hervé Maccioni. Un espace d'écoute bienveillante pour exprimer votre mal-être et avancer vers un mieux-être.",
    url: 'https://hervemaccioni.fr/psychotherapie',
    siteName: 'Hervé Maccioni - Psychanalyste à Bordeaux',
    images: [
      {
        url: 'https://hervemaccioni.fr/images/open-graph-psychotherapie-generale.jpg', // Vous devrez créer cette image
        width: 1200,
        height: 630,
        alt: 'La Psychothérapie : Définition et Bénéfices',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Psychothérapie | Définition & Bénéfices | Hervé Maccioni - Psychanalyste Bordeaux',
    description: "Découvrez en quoi consiste la psychothérapie avec Hervé Maccioni. Un espace d'écoute bienveillante pour exprimer votre mal-être et avancer vers un mieux-être.",
    images: ['https://hervemaccioni.fr/images/twitter-image-psychotherapie-generale.jpg'], 
  },
};

export default function PsychotherapiePage() {
  return (
    <main className="animate-fadeIn">
      {/* Hero section avec image de fond */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image 
          src="/images/bordeaux.jpg" 
          alt="Bordeaux" 
          fill 
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute top-4 left-4 z-10">
          <Breadcrumb className="bg-white/80 backdrop-blur-sm w-fit shadow-sm rounded-md" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-lg shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2E3A59] text-center" style={{fontFamily:'var(--font-title)'}}>
              En quoi consiste une psychothérapie
            </h1>
          </div>
        </div>
      </div>

      <div className="py-8 px-4 md:px-8 lg:px-16 max-w-full mx-auto">
        
        {/* Section "Exprimer ce qui vous habite" */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E3A59] mb-6 uppercase" style={{fontFamily:'var(--font-title)'}}>
                Exprimer ce qui vous habite
              </h2>
              <p className="text-gray-700 mb-6" style={{fontFamily:'var(--font-paragraph)'}}>
                Une psychothérapie offre un espace sécurisé et bienveillant pour mettre des mots et des affects sur ce qui traverse. Elle permet d&lsquo;éclairer les mécanismes inconscients responsables du mal-être et du symptôme mais aussi d&lsquo;entamer un changement favorable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/psychotherapie/adultes-couples" className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#1d2536] text-center sm:text-base text-sm hover-lift card-hover">
                  Psychothérapie Adultes et Couples
                </Link>
                <Link href="/psychotherapie/enfants-adolescents" className="border-2 border-[#2E3A59] text-[#2E3A59] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#e5eaf3] bg-white text-center sm:text-base text-sm hover-lift card-hover">
                  Psychothérapie Enfants et Ados
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/images/psychoterapie-principes-clefs.png" 
                alt="Principes clés de la psychothérapie" 
                width={400} 
                height={400} 
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        {/* Section "Une écoute professionnelle et bienveillante" */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Image 
                src="/images/ecoute-active.png" 
                alt="Écoute professionnelle" 
                width={500} 
                height={500} 
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E3A59] mb-6 uppercase" style={{fontFamily:'var(--font-title)'}}>
                Une écoute professionnelle et bienveillante
              </h2>
              <p className="text-gray-700 mb-6" style={{fontFamily:'var(--font-paragraph)'}}>
                Grâce à une écoute attentive, confidentielle et bienveillante, vous pouvez aborder ce qui est difficile et constitue vos embarras. Le thérapeute vous aide à faire des liens, à mieux comprendre les points de blocages et respecte le rythme de votre parole sans jamais juger.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/psychotherapie/adultes-couples" className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#1d2536] text-center sm:text-base text-sm hover-lift card-hover">
                  Psychothérapie Adultes et Couples
                </Link>
                <Link href="/psychotherapie/enfants-adolescents" className="border-2 border-[#2E3A59] text-[#2E3A59] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#e5eaf3] bg-white text-center sm:text-base text-sm hover-lift card-hover">
                  Psychothérapie Enfants et Ados
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section "Avancer vers un mieux-être" */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E3A59] mb-6 uppercase" style={{fontFamily:'var(--font-title)'}}>
                Avancer vers un mieux-être
              </h2>
              <p className="text-gray-700 mb-6" style={{fontFamily:'var(--font-paragraph)'}}>
                Au fil des séances dont le rythme est déterminé d&lsquo;un commun accord avec le psy, vos forces intérieures peuvent se libérer pour avancer dans votre vie. Les symptômes s&lsquo;apaisent, les répétitions négatives cessent et vous retrouver une capacité nouvelle à inventer votre vie dans une liberté plus grande.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/psychotherapie/adultes-couples" className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#1d2536] text-center sm:text-base text-sm hover-lift card-hover">
                  Psychothérapie Adultes et Couples
                </Link>
                <Link href="/psychotherapie/enfants-adolescents" className="border-2 border-[#2E3A59] text-[#2E3A59] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#e5eaf3] bg-white text-center sm:text-base text-sm hover-lift card-hover">
                  Psychothérapie Enfants et Ados
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/images/santé-mental.png" 
                alt="Santé mentale" 
                width={500} 
                height={500} 
              />
            </div>
          </div>
        </section>

        {/* Section "Une expérience unique" */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <Image 
                src="/images/avancer-vers-un-mieux-être.png" 
                alt="Expérience unique" 
                width={500} 
                height={500} 
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2E3A59] mb-6 uppercase" style={{fontFamily:'var(--font-title)'}}>
                Une expérience unique
              </h2>
              <p className="text-gray-700 mb-6" style={{fontFamily:'var(--font-paragraph)'}}>
                Dans une société marquée par la recherche exclusive de la performance par l&lsquo;individualisme forcené, par l&lsquo;omniprésence des écrans et de la pensée binaire, l&lsquo;espace psychothérapeutique constitue un des rares espaces actuellement où vous pouvez vous permettre de parler et d&lsquo;être vous-même en laissant tomber tous les masques. Cette expérience est unique car elle marque l&lsquo;ouverture d&lsquo;une compréhension plus profonde du chemin le moins emprunté vers vous-même. « Être aligné » dans l&lsquo;ici et maintenant, devient une source de liberté et de mieux-être.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/psychotherapie/adultes-couples" className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#1d2536] text-center sm:text-base text-sm hover-lift card-hover">
                  Psychothérapie Adultes et Couples
                </Link>
                <Link href="/psychotherapie/enfants-adolescents" className="border-2 border-[#2E3A59] text-[#2E3A59] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#e5eaf3] bg-white text-center sm:text-base text-sm hover-lift card-hover">
                  Psychothérapie Enfants et Ados
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}