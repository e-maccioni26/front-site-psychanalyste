"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const AnimationObserver = () => {
  const pathname = usePathname();
  
  useEffect(() => {

    if (pathname !== '/') {

      return;
    }

    const checkVisibility = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-slideUp, .reveal-slideRight, .reveal-slideLeft');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };

    const addAnimationClasses = () => {
      const mainTitles = document.querySelectorAll('h2');
      mainTitles.forEach((title, index) => {
        title.classList.add('reveal-slideUp');
        (title as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      });

      const cards = document.querySelectorAll('.background-card');
      cards.forEach((card, index) => {
        card.classList.add('reveal-slideUp', 'card-hover');
        (card as HTMLElement).style.transitionDelay = `${0.2 + index * 0.1}s`;
      });

      const images = document.querySelectorAll('section img');
      images.forEach(img => {
        img.classList.add('reveal');
      });

      const buttons = document.querySelectorAll('a[href]:not(nav a)');
      buttons.forEach(button => {
        if (button.classList.contains('bg-[#2E3A59]') || 
            button.classList.contains('border-[#2E3A59]')) {
          button.classList.add('hover-lift');
        }
      });

      const paragraphs = document.querySelectorAll('section p');
      paragraphs.forEach(p => {
        p.classList.add('reveal-slideRight');
      });

      const faqItems = document.querySelectorAll('#psychotherapie + section .background-card');
      faqItems.forEach((item, index) => {
        item.classList.add('reveal-slideLeft');
        (item as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      });
    };

    window.addEventListener('scroll', checkVisibility);
    
    const timeoutId = setTimeout(() => {
      addAnimationClasses();
      checkVisibility();
    }, 100);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      clearTimeout(timeoutId); 
    };
  }, [pathname]); 

  return null; 
};

export default AnimationObserver;