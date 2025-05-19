import Breadcrumb from "../../components/Breadcrumb";

export default function PsychotherapiePage() {
  return (
    <main className="py-8 px-4 md:px-8 lg:px-16 animate-fadeIn">
      <Breadcrumb className="bg-white w-fit shadow-sm rounded-md mb-8" />
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2E3A59] mb-6 text-center" style={{fontFamily:'var(--font-title)'}}>
          Psychothérapie
        </h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#2E3A59] mb-6 text-center" style={{fontFamily:'var(--font-title)'}}>
            EN QUOI CONSISTE UNE PSYCHOTHÉRAPIE ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#2E3A59] mb-4" style={{fontFamily:'var(--font-title)'}}>
                EXPRIMER CE QUI VOUS HABITE
              </h3>
              <p className="text-gray-700" style={{fontFamily:'var(--font-paragraph)'}}>
                Une psychothérapie offre un espace sécurisé et bienveillant pour mettre des mots et des affects sur ce qui traverse. Elle permet d&lsquo;éclairer les mécanismes inconscients responsables du mal-être et du symptôme mais aussi d&lsquo;entamer un changement favorable.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#2E3A59] mb-4" style={{fontFamily:'var(--font-title)'}}>
                UNE ÉCOUTE PROFESSIONNELLE ET BIENVEILLANTE
              </h3>
              <p className="text-gray-700" style={{fontFamily:'var(--font-paragraph)'}}>
                Grâce à une écoute attentive, confidentielle et bienveillante, vous pouvez aborder ce qui est difficile et constitue vos embarras. Le thérapeute vous aide à faire des liens, à mieux comprendre les points de blocages et respecte le rythme de votre parole sans jamais juger.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#2E3A59] mb-4" style={{fontFamily:'var(--font-title)'}}>
                AVANCER VERS UN MIEUX-ÊTRE
              </h3>
              <p className="text-gray-700" style={{fontFamily:'var(--font-paragraph)'}}>
                Au fil des séances dont le rythme est déterminé d&lsquo;un commun accord avec le psy, vos forces intérieures peuvent se libérer pour avancer dans votre vie. Les symptômes s&lsquo;apaisent, les répétitions négatives cessent et vous retrouver une capacité nouvelle à inventer votre vie dans une liberté plus grande.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#2E3A59] mb-4" style={{fontFamily:'var(--font-title)'}}>
                UNE EXPÉRIENCE UNIQUE
              </h3>
              <p className="text-gray-700" style={{fontFamily:'var(--font-paragraph)'}}>
                Dans une société marquée par la recherche exclusive de la performance par l&lsquo;individualisme forcené, par l&lsquo;omniprésence des écrans et de la pensée binaire, l&lsquo;espace psychothérapeutique constitue un des rares espaces actuellement où vous pouvez vous permettre de parler et d&lsquo;être vous-même en laissant tomber tous les masques. Cette expérience est unique car elle marque l&lsquo;ouverture d&lsquo;une compréhension plus profonde du chemin le moins emprunté vers vous-même. « Être aligné » dans l&lsquo;ici et maintenant, devient une source de liberté et de mieux-être.
              </p>
            </div>
          </div>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Section Adultes et Enfants */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-lg hover:border-[#A2B6C9] transition-all duration-300 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#2E3A59] mb-4 text-center" style={{fontFamily:'var(--font-title)'}}>
              Adultes et Enfants
            </h2>
            <p className="text-gray-600 text-center mb-6" style={{fontFamily:'var(--font-paragraph)'}}>
              Un accompagnement personnalisé pour les adultes et les enfants, adapté à chaque âge et situation. Nous vous aidons à surmonter les défis de la vie quotidienne et à développer votre potentiel.
            </p>
            <a href="/psychotherapie/adultes-enfants" className="mt-auto bg-[#2E3A59] hover:bg-[#3d4e78] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
              En savoir plus
            </a>
          </div>

          {/* Section Couple */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-lg hover:border-[#A2B6C9] transition-all duration-300 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#2E3A59] mb-4 text-center" style={{fontFamily:'var(--font-title)'}}>
              Couple
            </h2>
            <p className="text-gray-600 text-center mb-6" style={{fontFamily:'var(--font-paragraph)'}}>
              Retrouvez l&lsquo;harmonie et la communication au sein de votre couple. Notre accompagnement vous aide à surmonter les difficultés et à renforcer votre relation.
            </p>
            <a href="/psychotherapie/couple" className="mt-auto bg-[#2E3A59] hover:bg-[#3d4e78] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
              En savoir plus
            </a>
          </div>
        </div>

        <div className="bg-[#f7fafd] border border-[#A2B6C9] rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-[#2E3A59] mb-4" style={{fontFamily:'var(--font-title)'}}>
            Notre approche
          </h3>
          <p className="text-gray-700 mb-4" style={{fontFamily:'var(--font-paragraph)'}}>
            Chaque accompagnement est unique et adapté à vos besoins spécifiques. Nous travaillons ensemble pour définir des objectifs clairs et mettre en place un plan d&lsquo;action personnalisé.
          </p>
          <p className="text-gray-700" style={{fontFamily:'var(--font-paragraph)'}}>
            Contactez-nous pour discuter de votre situation et découvrir comment nous pouvons vous accompagner dans votre parcours de développement personnel et relationnel.
          </p>
        </div>
      </div>
    </main>
  );
}