import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';

const getIcon = (iconName) => {
  switch (iconName) {
    case 'Sparkles':
      return (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case 'Heart':
      return (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case 'Grid':
      return (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      );
    case 'Gift':
      return (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 019.5 3h1.5m0 5H8a2 2 0 102 2H8m4-2H8m4 0h4m0 0a2 2 0 112 2h-2m2-2V5.5A2.5 2.5 0 0014.5 3H13" />
        </svg>
      );
    default:
      return null;
  }
};

export default function WhyUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="why-us" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-cocoa-900">
            Mengapa Memilih Brownies Kami?
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-cocoa-600 text-sm sm:text-base font-light">
            Setiap gigitan brownies Naliya Bites dipersiapkan dengan penuh dedikasi untuk menjamin kualitas rasa cokelat yang tiada tanding.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {CONFIG.benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(139, 69, 19, 0.15)" }}
              className="bg-white p-8 rounded-3xl border border-primary/5 shadow-premium transition-all duration-300 flex flex-col items-center text-center space-y-4"
            >
              <div className="bg-secondary p-4 rounded-2xl border border-primary/5 text-primary">
                {getIcon(benefit.icon)}
              </div>
              <h3 className="font-serif text-lg font-bold text-cocoa-900">
                {benefit.title}
              </h3>
              <p className="text-cocoa-600 text-xs sm:text-sm leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
