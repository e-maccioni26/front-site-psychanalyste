import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 bg-[#FAFAF8]">
      <div className="flex-shrink-0 flex items-center justify-center w-64 h-80 rounded-full bg-white shadow-lg overflow-hidden">
        <Image src="/images/hervé-maccioni-photo.png" alt="Hervé Maccioni" width={260} height={320} className="object-cover rounded-full" priority unoptimized />
      </div>
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>
          Hervé Maccioni<br/>Psychothérapeute<br/>Psychanalyste
        </h1>
        <p className="mb-6 text-lg text-[#2E3A59]" style={{fontFamily:'var(--font-paragraph)'}}>
          Mon écoute et ma pratique sont aussi façonnées par mon propre parcours psychanalytique approfondi et par mon travail permanent de formation continue (groupe de travail, présentation de malades à l'Hôpital, séminaires et colloques, etc.) et de supervision (en individuel et entre pairs).
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a href="#qui-suis-je" className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#1d2536]">Qui-suis-je ?</a>
          <a href="#contact" className="border-2 border-[#2E3A59] text-[#2E3A59] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#e5eaf3] bg-white">Prendre rendez-vous</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;