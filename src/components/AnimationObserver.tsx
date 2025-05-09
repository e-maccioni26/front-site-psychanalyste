"use client";

import { useEffect } from 'react';

const AnimationObserver = () => {
  useEffect(() => {
    // Fonction pour vérifier si un élément est visible dans la fenêtre
    const checkVisibility = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-slideUp, .reveal-slideRight, .reveal-slideLeft');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150; // Distance à partir de laquelle l'élément devient visible
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };

    // Ajouter des classes d'animation aux éléments de la page d'accueil
    const addAnimationClasses = () => {
      // Titre principal
      const mainTitles = document.querySelectorAll('h2');
      mainTitles.forEach((title, index) => {
        title.classList.add('reveal-slideUp');
        // Délai progressif pour les titres
        title.style.transitionDelay = `${index * 0.1}s`;
      });

      // Cartes et sections
      const cards = document.querySelectorAll('.background-card');
      cards.forEach((card, index) => {
        card.classList.add('reveal-slideUp', 'card-hover');
        card.style.transitionDelay = `${0.2 + index * 0.1}s`;
      });

      // Images
      const images = document.querySelectorAll('section img');
      images.forEach(img => {
        img.classList.add('reveal');
      });

      // Boutons
      const buttons = document.querySelectorAll('a[href]:not(nav a)');
      buttons.forEach(button => {
        if (button.classList.contains('bg-[#2E3A59]') || 
            button.classList.contains('border-[#2E3A59]')) {
          button.classList.add('hover-lift');
        }
      });

      // Paragraphes
      const paragraphs = document.querySelectorAll('section p');
      paragraphs.forEach(p => {
        p.classList.add('reveal-slideRight');
      });

      // FAQ items
      const faqItems = document.querySelectorAll('#psychotherapie + section .background-card');
      faqItems.forEach((item, index) => {
        item.classList.add('reveal-slideLeft');
        item.style.transitionDelay = `${index * 0.1}s`;
      });
    };

    window.addEventListener('scroll', checkVisibility);
    
    
    setTimeout(() => {
      addAnimationClasses();
      checkVisibility();
    }, 100);

   
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return null; 
};

export default AnimationObserver;