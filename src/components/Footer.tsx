import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-black py-10 md:py-12 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Section principale du footer */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 mb-8 md:mb-10">
          {/* Logo et description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Link href={"/"}>
              <div className="mb-4">
                <span className="font-bold text-2xl text-black">Hervé </span>
                <span className="font-bold text-2xl text-[#A2B6C9]">Maccioni</span>
              </div>
            </Link>
            <p className="text-sm mb-4 text-black max-w-xs">
              La parole libère ce que le silence enferme, et ouvre la voie vers une transformation intérieure.
            </p>
          </div>

          {/* Navigation */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-3 md:mb-4 text-black">Navigation</h3>
            <ul className="space-y-2.5 md:space-y-3">
              <li><Link href={"/qui-suis-je"} className="hover:text-black transition">Qui-suis-je</Link></li>
              <li><Link href={"#pourquoi-consulter"} className="hover:text-black transition">Pourquoi Consulter</Link></li>
              <li><Link href={"/accompagnement"} className="hover:text-black transition">Psychothérapies</Link></li>
              <li><Link href="/blog" className="hover:text-black transition">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/3">
            <h3 className="font-bold text-lg mb-4 text-black">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Image src="/images/icones/localisation.svg" alt="Adresse" width={18} height={18} className="invert" />
                </div>
                <p className="text-sm text-black">29 Cours d&apos;Alsace-et-Lorraine, 33000 Bordeaux</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Image src="/images/icones/phone.svg" alt="Téléphone" width={18} height={18} className="invert" />
                </div>
                <p className="text-sm text-black">06 34 36 32 34</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center mt-1">
                  <Image src="/images/icones/mail.svg" alt="Email" width={18} height={18} className="invert" />
                </div>
                <p className="text-sm text-black">herve.maccioni@outlook.fr</p>
              </div>

              <div className="mt-5">
                <Link href="https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni" className="bg-white text-black px-5 py-2 rounded-lg font-semibold transition hover:bg-gray-100 inline-flex items-center gap-2 text-sm">
                  <Image src="/images/icones/doctolib-logo.svg" alt="Doctolib" width={20} height={20} />
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ligne de séparation */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-black text-center md:text-left">&copy; {new Date().getFullYear()} Hervé Maccioni. Tous droits réservés.</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left">
              <Link href="/mentions-legales" className="text-sm text-black hover:text-black transition">Mentions légales</Link>
              <Link href="/politique-de-confidentialite" className="text-sm text-black hover:text-black transition">Politique de confidentialité</Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-xs text-black">Site réalisé par <Link href="https://elonemaccioni.fr" target="_blank" rel="noopener" className="underline hover:text-[#A2B6C9]">Elone Maccioni</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;