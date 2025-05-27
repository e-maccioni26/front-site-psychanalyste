import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';
import type { Metadata } from 'next'; 


export const metadata: Metadata = {
  title: 'Psychothérapie Enfants & Adolescents | Hervé Maccioni - Psychanalyste Bordeaux',
  description: "Hervé Maccioni propose une psychothérapie adaptée aux enfants et adolescents à Bordeaux. Aide pour les difficultés scolaires, comportementales, anxiété, et problèmes liés à l'adolescence. Consultation le samedi ou le mercredi pour les enfants.",
  keywords: ["psychothérapie enfants bordeaux", "thérapie adolescents bordeaux", "psy enfant bordeaux", "psy adolescent bordeaux", "psychanalyste enfant bordeaux", "gestion émotions enfant", "difficultés scolaires", "anxiété adolescent"],
  alternates: {
    canonical: 'https://hervemaccioni.fr/psychotherapie/enfants-adolescents',
  },
  openGraph: {
    title: 'Psychothérapie Enfants & Adolescents | Hervé Maccioni - Psychanalyste Bordeaux',
    description: "Hervé Maccioni propose une psychothérapie adaptée aux enfants et adolescents à Bordeaux. Aide pour les difficultés scolaires, comportementales, anxiété, et problèmes liés à l'adolescence.",
    url: 'https://hervemaccioni.fr/psychotherapie/enfants-adolescents',
    siteName: 'Hervé Maccioni - Psychanalyste à Bordeaux',
    images: [
      {
        url: 'https://hervemaccioni.fr/images/open-graph-enfants-adolescents.jpg', 
        width: 1200,
        height: 630,
        alt: 'Psychothérapie Enfants et Adolescents à Bordeaux',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psychothérapie Enfants & Adolescents | Hervé Maccioni - Psychanalyste Bordeaux',
    description: "Hervé Maccioni propose une psychothérapie adaptée aux enfants et adolescents à Bordeaux. Aide pour les difficultés scolaires, comportementales, anxiété, et problèmes liés à l'adolescence.",
    images: ['https://hervemaccioni.fr/images/twitter-image-enfants-adolescents.jpg'], 
  },
};




export default function EnfantAdopPage() {
    return (
      <main>
           {/* Hero section avec image de fond */}
          <div className="mb-10 relative w-full h-[300px] md:h-[400px] overflow-hidden">
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
                  Psychothérapie Enfants et Adolescents
                </h1>
              </div>
            </div>
          </div>

          <div className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-10">
            {/* Section Adultes */}
            <section className="mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-[30px] font-bold text-[#2E3A59] mb-6" style={{fontFamily:'var(--font-title)'}}>
                    ADOLESCENTS
                  </h2>
                  <p className="text-[16px] text-gray-700 mb-4" style={{fontFamily:'var(--font-paragraph)'}}>
                  Les adolescents viennent consulter, en première intention, souvent à la demande de leurs parents ou de leur entourage. Rappelons que l&apos;adolescence est un période particulièrement délicate de l’existence où l’on quitte l’enfance pour entrer, par étapes successives, dans le monde des adultes, et où il faut pouvoir trouver , justement, sa place d&apos;adulte : ce qui n&apos;est guère évident. <br /><br />Dans ce contexte, c’est toujours, en finalité, à sa demande et avec son plein accord qu’un(e) adolescente entame une psychothérapie. Ce qui lui permet alors de prendre du recul sur ce qui est vécu difficilement pour être vraiment entendu, pour pouvoir déposer ce qui pèse et mieux se comprendre. Et aussi pour mettre au travail ce qui fait embarras pour s&apos;alléger. L&apos;adolescent(e) y gagne alors en maturité.
                  </p>
                  <div className="mt-6">
                  <Link target='_blank' href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" className="border-2 border-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#334262] bg-[#2E3A59] inline-flex   items-center gap-2 hover-lift">
                    <Image src="/images/icones/doctolib-logo.svg" alt="Doctolib" width={50} height={50} />
                    Prendre rendez-vous
                  </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image 
                    src="/images/besoins-adolescents.png" 
                    alt="Jeune adulte" 
                    width={500} 
                    height={500} 
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-10">
            {/* Section Adultes */}
            <section className="mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <Image 
                    src="/images/enfants-psychanalyste.jpg" 
                    alt="Jeune adulte" 
                    width={500} 
                    height={500} 
                    className="rounded-[25px] shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-[30px] font-bold text-[#2E3A59] mb-6" style={{fontFamily:'var(--font-title)'}}>
                    ENFANTS <br /><span className='underline text-2xl'>(Consultation exclusivement le samedi ou le mercredi)</span>
                  </h2>
                 
                  <p className="text-[16px] text-gray-700 mb-4" style={{fontFamily:'var(--font-paragraph)'}}>
                  Les enfants arrivent en thérapie avec une demande formulée par leurs parents autour de symptômes plus ou moins gênants. L’espace thérapeutique est alors pour l’enfant un lieu où, par le jeu et par la parole, il peut exprimer ce qui lui pose souci et qu’il a fait savoir à sa manière à son entourage. Il s’agit là d’entendre l’enfant comme une personne en construction qui est unique et qui a la capacité de trouver de bonnes solutions pour sortir de ses difficultés.
                  </p>
                  <div className="mt-6">
                  <Link target='_blank' href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" className="border-2 border-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#334262] bg-[#2E3A59] inline-flex   items-center gap-2 hover-lift">
                    <Image src="/images/icones/doctolib-logo.svg" alt="Doctolib" width={50} height={50} />
                    Prendre rendez-vous
                  </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </main>
    );
  }