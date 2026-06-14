import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CONFIG.testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CONFIG.testimonials.length) % CONFIG.testimonials.length);
  };

  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-accent/5 via-secondary to-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-cocoa-900">
            Kata Mereka yang Mencoba
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-cocoa-600 text-sm sm:text-base font-light">
            Cerita kepuasan pelanggan setia Naliya Bites yang telah membagikan kebahagiaan manis mereka.
          </p>
        </div>

        {/* Slider Box */}
        <div className="max-w-3xl mx-auto relative px-4">
          
          {/* Main Card Container with AnimatePresence */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-primary/5 shadow-premium overflow-hidden">
            
            {/* Quote Icon Backdrop */}
            <div className="absolute top-6 left-6 text-primary/10 select-none pointer-events-none">
              <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              
              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(CONFIG.testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-cocoa-700 text-sm sm:text-base md:text-lg italic font-light leading-relaxed max-w-xl">
                "{CONFIG.testimonials[currentIndex].comment}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3 pt-4">
                <img
                  src={CONFIG.testimonials[currentIndex].avatar}
                  alt={CONFIG.testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="text-left">
                  <h4 className="font-serif font-bold text-cocoa-900 text-sm sm:text-base">
                    {CONFIG.testimonials[currentIndex].name}
                  </h4>
                  <span className="text-[10px] sm:text-xs text-cocoa-500 font-light">
                    {CONFIG.testimonials[currentIndex].role}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-3 sm:-left-6 -translate-y-1/2 bg-white hover:bg-primary hover:text-secondary text-cocoa-800 p-2.5 sm:p-3 rounded-full border border-primary/5 shadow-md transition-all duration-300 z-20"
            aria-label="Previous testimonial"
            id="testimonial-prev"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 bg-white hover:bg-primary hover:text-secondary text-cocoa-800 p-2.5 sm:p-3 rounded-full border border-primary/5 shadow-md transition-all duration-300 z-20"
            aria-label="Next testimonial"
            id="testimonial-next"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Indicators (Dots) */}
          <div className="flex justify-center space-x-2.5 mt-8">
            {CONFIG.testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-primary' : 'w-2.5 bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                id={`testimonial-dot-${idx}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
