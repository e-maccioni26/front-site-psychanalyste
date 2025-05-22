import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 bg-[#FAFAF8]">
        <div className='mb-14'>
            <h2 className="text-5xl font-bold mb-5 text-black" style={{fontFamily:'var(--font-title)'}}>
                Contact / Prendre <span className="underline">rendez-vous</span>
            </h2>
            <p className='font-bold mb-8'>Situé en plein coeur de Bordeaux !</p>
            <Link target='_blank' href={"https://www.doctolib.fr/psychotherapeute/bordeaux/herve-maccioni#location"}  className="bg-[#2E3A59] text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-[#334262] inline-flex items-center gap-2">
            <Image src="/images/icones/doctolib-logo.svg" alt="Doctolib" width={50} height={50} />
            Prendre rendez-vous</Link>
        </div>
      
      
      <div className="flex flex-col lg:flex-row gap-10 justify-between max-w-7xl mx-auto">
        {/* Informations de contact */}
        <div className="w-full lg:w-1/2 space-y-8">
          
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src="/images/icones/localisation.svg" alt="Adresse" width={32} height={32} />
              </div>
              <div>
                <p className="font-bold text-lg">29 Cours d&apos;Alsace-et-Lorraine, 33000 Bordeaux</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src="/images/icones/phone.svg" alt="Téléphone" width={32} height={32} />
              </div>
              <div>
                <p className="font-bold text-lg">06 34 36 32 34</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src="/images/icones/mail.svg" alt="Email" width={32} height={32} />
              </div>
              <div>
                <p className="font-bold text-lg">herve.maccioni@outlook.fr</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src="/images/icones/calendar.svg" alt="Horaires" width={32} height={32} />
              </div>
              <div className="space-y-1">
                <p className="font-bold">Lundi : 18h30 - 21h15</p>
                <p className="font-bold">Mercredi : 9h30 - 21h30</p>
                <p className="font-bold">Jeudi : 19h30 - 21h15</p>
                <p className="font-bold">Vendredi : 09h15 - 13h00, 14h00 - 21h30</p>
                <p className="font-bold">Samedi : 09h15 - 13h00, 14h00 - 21h30</p>
                <p className="font-bold">Dimanche : 10h00 - 14h00</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Maps */}
        <div className="w-full lg:w-1/2 h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.1940745406805!2d-0.5722752238109522!3d44.83798087500266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527ce5cdafcc1%3A0xdcdaa239d1300aa7!2s29%20Cr%20d&#39;Alsace-et-Lorraine%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1746653032780!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            title='Localisation cabinet psychotherapeute centre ville Bordeaux'
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;