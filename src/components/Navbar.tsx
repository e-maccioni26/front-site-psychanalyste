"use client"

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <span className="font-bold text-2xl text-[#2E3A59]">Hervé </span>
            <span className="font-bold text-2xl text-[#A2B6C9]">Maccioni</span>
          </Link>
        </div>
        <ul className="hidden md:flex gap-8 text-[#2E3A59] font-semibold">
          <li><Link href={"/qui-suis-je"} className="transition-all duration-300 hover:text-[#A2B6C9] hover-lift">Qui-suis-je</Link></li>
          <li><Link href={"#pourquoi-consulter"} className="transition-all duration-300 hover:text-[#A2B6C9] hover-lift">Pourquoi Consulter</Link></li>
          <li><Link href={"/accompagnement"} className="transition-all duration-300 hover:text-[#A2B6C9] hover-lift">Psychothérapies</Link></li>
          <li><Link href="/blog" className="transition-all duration-300 hover:text-[#A2B6C9] hover-lift">Blog</Link></li>
        </ul>
        <div className="hidden md:block">
          <Link target='_blank' href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni"     className="border-2 border-[#2E3A59] text-[#2E3A59] px-6 py-3 rounded-lg font-semibold transition hover:bg-[#e5eaf3] bg-white inline-flex items-center gap-2 text-sm text-center hover-lift card-hover">
            <Image src="/images/icones/doctolib-logo.svg" alt="Doctolib" width={50} height={50} />
                  Prendre rendez-vous
          </Link>
        </div>
        <button 
          className="md:hidden p-2" 
          aria-label="Ouvrir le menu"
          onClick={toggleMenu}
        >
          <svg width="28" height="28" fill="#2E3A59" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="#2E3A59" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden w-full mt-4 pb-2">
          <ul className="flex flex-col gap-4 text-[#2E3A59] font-semibold">
            <li className="py-2 border-b border-gray-100">
              <Link href={"/qui-suis-je"} onClick={toggleMenu} className="transition-all duration-300 hover:text-[#A2B6C9]">Qui-suis-je</Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link href={"#pourquoi-consulter"} onClick={toggleMenu} className="transition-all duration-300 hover:text-[#A2B6C9]">Pourquoi Consulter</Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link href={"/accompagnement"} onClick={toggleMenu} className="transition-all duration-300 hover:text-[#A2B6C9]">Psychothérapies</Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link href="/blog" onClick={toggleMenu} className="transition-all duration-300 hover:text-[#A2B6C9]">Blog</Link>
            </li>
            <li className="py-2">
              <Link href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" className="inline-flex items-center justify-center gap-2 bg-[#2E3A59] text-white px-5 py-2 rounded-lg font-semibold transition hover:bg-[#1d2536] w-full text-center hover-lift" onClick={toggleMenu}>
                <Image src="/images/icones/doctolib-logo.svg" alt="Doctolib" width={40} height={40} />
                Prendre rendez-vous
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;