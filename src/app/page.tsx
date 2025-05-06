import Hero from "../components/Hero";
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* Section Pourquoi consulter */}
      <section id="pourquoi-consulter" className="py-16 px-6 ">
      <h2 className="text-4xl font-bold mb-8 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>
            Pourquoi consulter <span className="underline">un psy</span> ?
          </h2>
        <div className="max-w-6xl mx-auto">
          <div className="relative flex flex-col md:flex-row items-center gap-12">
            {/* Image du cerveau */}
            <div className="md:w-1/2 order-2 md:order-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image 
                  src="/images/brain-emotions.png" 
                  alt="Représentation des émotions dans le cerveau" 
                  width={500} 
                  height={500} 
                  className="rounded-lg shadow-lg" 
                  priority 
                />
              </div>
            </div>
            
            {/* Encadré blanc superposé */}
            <div className="md:w-1/2 order-1 md:order-2 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 z-10 md:max-w-lg">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2E3A59]">Aller voir un psy ? Quand ? Pourquoi ?</h3>
                <p className="text-gray-700 mb-4">
                  Tout simplement quand on ne peut plus faire autrement car ce qui fait embarras devient difficilement supportable. Quand désirs et contraintes s&apos;affrontent, quand le même scénario déplaisant se répète, quand un sentiment d&apos;incompréhension et d&apos;embarras s&apos;installe devant le tour que prend sa propre vie ou devant un événement difficile à accepter; ou encore quand on souhaite parler de choses qu&apos;on porte en soi depuis trop longtemps comme un poids. Alors il apparaît, comme une évidence, qu&apos;aller voir un psy est une bonne idée.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link href="/accompagnement" className="bg-[#2E3A59] text-white px-5 py-3 rounded-lg font-semibold transition hover:bg-[#1d2536] text-center">
                    Accompagnement chez l&apos;adulte
                  </Link>
                  <Link href="/accompagnement" className="border-2 border-[#2E3A59] text-[#2E3A59] px-5 py-3 rounded-lg font-semibold transition hover:bg-[#e5eaf3] text-center">
                    Accompagnement chez l&apos;enfant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section En quoi consiste une psychothérapie ? */}
      <section id="psychotherapie" className="py-16 px-6 bg-[#FAFAF8]">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#2E3A59] text-center" style={{fontFamily:'var(--font-title)'}}>
          <span className="underline decoration-4 decoration-[#2E3A59] underline-offset-4">En quoi consiste une psychothérapie ?</span>
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Carte 1 */}
          <div className="flex-1 bg-[#F3ECE4] rounded-xl shadow p-8 flex flex-col items-center text-center min-w-[260px]">
            <div className="mb-4">
              {/* Icône SVG tête */}
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="28" fill="#E6ECF3"/><path d="M36 22c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 2.21 1.79 4 4 4h1v2h6v-2h1c2.21 0 4-1.79 4-4z" fill="#2E3A59"/><path d="M28 36c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4z" fill="#2E3A59"/></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#2E3A59]">Exprimer ce qui vous habite</h3>
            <p className="text-sm text-[#2E3A59] opacity-80">La psychothérapie offre un espace pour mettre des mots sur ce qui vous traverse. Elle permet d’éclairer les mécanismes inconscients responsables du mal-être et du symptôme.</p>
          </div>
          {/* Carte 2 */}
          <div className="flex-1 bg-[#F3ECE4] rounded-xl shadow p-8 flex flex-col items-center text-center min-w-[260px]">
            <div className="mb-4">
              {/* Icône SVG oreille */}
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="28" fill="#FFF7E0"/><path d="M28 16c-5.523 0-10 4.477-10 10 0 3.866 3.134 7 7 7h1v2h4v-2h1c3.866 0 7-3.134 7-7 0-5.523-4.477-10-10-10zm0 16c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4z" fill="#E2B13C"/></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#2E3A59]">Une écoute bienveillante</h3>
            <p className="text-sm text-[#2E3A59] opacity-80">Grâce à une écoute attentive et confidentielle, vous pouvez aborder ce qui est difficile. Le thérapeute vous aide à faire des liens et à mieux comprendre vos blocages.</p>
          </div>
          {/* Carte 3 */}
          <div className="flex-1 bg-[#F3ECE4] rounded-xl shadow p-8 flex flex-col items-center text-center min-w-[260px]">
            <div className="mb-4">
              {/* Icône SVG cycle */}
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="28" fill="#E6ECF3"/><path d="M36 28c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 2.21 1.79 4 4 4h1v2h6v-2h1c2.21 0 4-1.79 4-4z" fill="#A2B6C9"/><path d="M28 36c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4z" fill="#A2B6C9"/></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#2E3A59]">Avancer vers un mieux-être</h3>
            <p className="text-sm text-[#2E3A59] opacity-80">Au fil des séances, vous libérez vos forces intérieures. Les symptômes s’apaisent, la répétition cesse, et vous retrouvez une nouvelle capacité à inventer votre vie.</p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" target="_blank" rel="noopener noreferrer" className="bg-[#2E3A59] text-white text-xl font-bold px-10 py-4 rounded-lg shadow transition hover:bg-[#1d2536]" style={{fontFamily:'var(--font-title)'}}>Prendre rendez-vous</a>
        </div>
      </section>
    </main>
  );
}

