import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-cocoa-900">
            Pertanyaan Umum (FAQ)
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-cocoa-600 text-sm sm:text-base font-light">
            Butuh info tambahan? Temukan jawaban untuk pertanyaan-pertanyaan yang sering diajukan di bawah ini.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {CONFIG.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-primary/5 shadow-premium overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-cocoa-900 pr-4">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 bg-secondary p-2 rounded-xl text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content Box */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 border-t border-primary/5' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="p-6 text-cocoa-600 text-sm leading-relaxed font-light bg-secondary/20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
