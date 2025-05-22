import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../../../components/Breadcrumb';

export default function AdultesCouplesPage() {
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
              Psychothérapie Adultes et Couples
            </h1>
          </div>
        </div>
      </div>

      <div className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-10">
        {/* Section Adultes */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image 
                src="/images/danseur-des-quaies-ado.jpg" 
                alt="Jeune adulte" 
                width={574} 
                height={383} 
                className="rounded-[25px] shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-[30px] font-bold text-[#2E3A59] mb-6" style={{fontFamily:'var(--font-title)'}}>
                ADULTES ET JEUNES ADULTES
              </h2>
              <p className="text-[16px] text-gray-700 mb-4" style={{fontFamily:'var(--font-paragraph)'}}>
                <span className='font-bold'>Les adultes</span> en venant consulter un psychothérapeute viennent déposer librement et en conscience ce qui fait embarras et symptômes. Les premiers entretiens sont déterminants car ils permettent de <span className='font-bold'>mettre en lumière</span> la demande et de définir une alliance thérapeutique pour amorcer un changement positif.
              </p>
              <p className="text-[16px] text-gray-700 mb-8" style={{fontFamily:'var(--font-paragraph)'}}>
                <span className='font-bold'>Les jeunes adultes</span> peuvent aussi avoir besoin d&quot;une véritable psychothérapie de soutien pour mener à bien des études, un projet, conforter leur choix en pleine conscience, régler leurs rapports familiaux, etc. Ils viennent aussi dans des périodes difficiles à traverser seuls <span className='font-bold'>(crises, deuils, traumas, etc.)</span> qu&quot;il est important de pouvoir élaborer dans un espace psychothérapeutique &quot;sécure&quot;.
              </p>
              <div className="mt-6">
                <Link href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" target="_blank" rel="noopener noreferrer" className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold text-center sm:text-base text-sm shadow-sm">
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section Couples - Pleine largeur */}
      <section className="mb-24 py-16 px-6 md:px-12 bg-[#F5EBDD]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-8">
            <div className="w-16 h-16 mb-4 bg-white rounded-full">
              <Image 
                src="/images/coeur-couple-icone.png" 
                alt="Icône couple" 
                width={65} 
                height={65} 
              />
            </div>
            <h2 className="text-[30px] font-bold text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>
              COUPLES
            </h2>
          </div>
          
          <p className="text-[16px] text-gray-700 mb-6 mx-auto" style={{fontFamily:'var(--font-paragraph)'}}>
            Quand une situation a posé problème, quand on arrive plus vraiment à se comprendre, quand les disputes sont fréquentes, quand on s&apos;est éloignés, ou encore quand le sens de la relation pose question, etc., il est judicieux et même courageux, de rencontrer un psychothérapeute de couple pour en parler et pour entamer une thérapie de couple pour avancer avec plus de conscience et de sens vers l&apos;avenir.
          </p>
          
          <p className="text-[16px] text-gray-700 mb-8 mx-auto" style={{fontFamily:'var(--font-paragraph)'}}>
            La thérapie de couple est ouverte à toutes les formes de couple et de parentalité (hétéro, homo, etc.) aucun modèle de couple ne prévaut sur les autres. De plus, l&apos;engagement dans la thérapie est un atout déterminant de la bonne conduite du travail d&apos;une thérapie de couple.
          </p>
          
          <div className="h-1 w-16 bg-black my-3 rounded-full mb-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex">
              <div className="bg-white rounded-[15px] shadow-md p-8 w-full max-w-[589px]">
                <Image 
                  src="/images/coeur-couple-therapeute.svg" 
                  alt="Thérapie de couple" 
                  width={522} 
                  height={168} 
                  className="w-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[30px] font-bold text-[#2E3A59] mb-3" style={{fontFamily:'var(--font-title)'}}>
                MA METHODE
              </h2>
              <p className="text-[16px] text-gray-700 mb-8" style={{fontFamily:'var(--font-paragraph)'}}>
                Ma méthode de thérapie de couple conjugue d&apos;une part la prise en compte de l&apos;histoire et de la situation consciente et inconsciente des membres du couple, à d&apos;autre part, une compréhension du couple comme un système unique et original.
              </p>
              <div className="mt-6">
                <Link href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" target="_blank" rel="noopener noreferrer" className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold text-center sm:text-base text-sm shadow-sm">
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}