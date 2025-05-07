"use client"

import React, { useState } from 'react';

type AccordionItemProps = {
  question: string;
  answer: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-5 rounded-sm mb-2 border border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold" style={{fontFamily:'var(--font-paragraph)'}}>
          {question}
        </h3>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 animate-fadeIn pt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

type AccordionProps = {
  items: AccordionItemProps[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Accordion;