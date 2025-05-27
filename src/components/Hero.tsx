"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import React from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Activer les animations après le chargement de la page
    setIsLoaded(true);
  }, []);

  return (
    <section className="mb-20 flex flex-col md:flex-row items-center justify-center gap-16 px-6 py-16">
      <div className={`flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-lg overflow-hidden ${isLoaded ? 'animate-zoomIn' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
        <Image src="/images/herve-maccioni-photo.png" alt="Hervé Maccioni" width={350} height={350} className="object-cover rounded-full" priority unoptimized />
      </div>
      <div className="max-w-xl text-center md:text-left">
        <h1 className={`text-4xl md:text-5xl font-bold mb-5 text-[#2E3A59] ${isLoaded ? 'animate-slideRight' : 'opacity-0'}`} style={{fontFamily:'var(--font-title)', transitionDelay: '0.4s'}}>
          Hervé Maccioni<br/><span className='underline text-4xl'>Psychothérapeute</span><br/><span className='underline text-4xl'>Psychanalyste</span><br/><span className='underline text-4xl'>Thérapeute de Couple</span>
        </h1>
        <p className={`mb-6 italic text-[17px] text-[#2E3A59] ${isLoaded ? 'animate-slideRight' : 'opacity-0'}`} style={{fontFamily:'var(--font-paragraph)', transitionDelay: '0.6s'}}>
        &#34; Mon écoute et ma pratique sont façonnées par les riches enseignements théorico- cliniques que j&apos;ai reçus ainsi que par mon propre parcours psychanalytique approfondi assorti d&apos;une formation continue (groupe de travail, présentation de malades à l&apos;Hôpital, séminaires et colloques, etc.) et de supervision (en individuel et entre pairs). &#34;
        </p>
        <div className={`flex flex-col items-center md:flex-row gap-4 justify-center md:justify-start ${isLoaded ? 'animate-slideRight' : 'opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
          <Link href={"/qui-suis-je"} className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#1d2536] hover-lift">
            Qui-suis-je ?
          </Link>
          <Link target='_blank' href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" className="border-2 border-[#2E3A59] text-[#2E3A59] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#e5eaf3] bg-white inline-flex items-center gap-2 hover-lift">
            <Image src="/images/icones/doctolib-logo.svg" alt="Doctolib" width={50} height={50} />
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
};


export default Hero;