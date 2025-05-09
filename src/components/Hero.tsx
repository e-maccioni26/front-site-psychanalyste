import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="mb-32 flex flex-col md:flex-row items-center justify-center gap-16 px-6 py-16">
      <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-lg overflow-hidden">
        <Image src="/images/herve-maccioni-photo.png" alt="Hervé Maccioni" width={350} height={350} className="object-cover rounded-full" priority unoptimized />
      </div>
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-[#2E3A59]" style={{fontFamily:'var(--font-title)'}}>
          Hervé Maccioni<br/><span className='underline'>Psychothérapeute</span><br/><span className='underline'>Psychanalyste</span>
        </h1>
        <p className="mb-6 text-lg text-[#2E3A59]" style={{fontFamily:'var(--font-paragraph)'}}>
          Mon écoute et ma pratique sont aussi façonnées par mon propre parcours psychanalytique approfondi et par mon travail permanent de formation continue (groupe de travail, présentation de malades à l&apos;Hôpital, séminaires et colloques, etc.) et de supervision (en individuel et entre pairs).
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link href={"/qui-suis-je"} className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#1d2536]">Qui-suis-je ?</Link>
          <Link target='_blank' href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" className="border-2 border-[#2E3A59] text-[#2E3A59] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#e5eaf3] bg-white inline-flex items-center gap-2">
          <Image src="/images/icones/doctolib-logo.svg" alt="Doctolib" width={50} height={50} />
          Prendre rendez-vous</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;