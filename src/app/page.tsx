import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>
            Services proposés
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-[#2E3A59]">Psychothérapie</h3>
              <p className="text-gray-700">Une approche thérapeutique personnalisée pour vous accompagner dans votre cheminement personnel.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-[#2E3A59]">Psychanalyse</h3>
              <p className="text-gray-700">Un travail d'exploration de l'inconscient pour comprendre les mécanismes profonds qui influencent votre vie.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

