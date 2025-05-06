"use client"

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-[#2E3A59]">Hervé</span>
          <span className="font-bold text-2xl text-[#A2B6C9]">Maccioni</span>
        </div>
        <ul className="hidden md:flex gap-8 text-[#2E3A59] font-semibold">
          <li><Link href={"/qui-suis-je"}>Qui-suis-je</Link></li>
          <li><Link href={"#pourquoi-consulter"}>Pourquoi Consulter</Link></li>
          <li><Link href={"/accompagnement"}>Psychothérapies</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
        <Link href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" className="hidden md:inline-block bg-[#2E3A59] text-white px-5 py-2 rounded-lg font-semibold transition hover:bg-[#1d2536]">Prendre rendez-vous</Link>
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
        <div className="md:hidden w-full mt-4 pb-2 animate-fadeIn">
          <ul className="flex flex-col gap-4 text-[#2E3A59] font-semibold">
            <li className="py-2 border-b border-gray-100"><Link href={"/qui-suis-je"} onClick={toggleMenu}>Qui-suis-je</Link></li>
            <li className="py-2 border-b border-gray-100"><Link href={"#pourquoi-consulter"} onClick={toggleMenu}>Pourquoi Consulter</Link></li>
            <li className="py-2 border-b border-gray-100"><Link href={"/accompagnement"} onClick={toggleMenu}>Psychothérapies</Link></li>
            <li className="py-2 border-b border-gray-100"><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li className="py-2">
              <Link href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" className="inline-block bg-[#2E3A59] text-white px-5 py-2 rounded-lg font-semibold transition hover:bg-[#1d2536] w-full text-center" onClick={toggleMenu}>Prendre rendez-vous</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;