import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';

export default function HowToOrder() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="how-to-order" className="py-20 bg-gradient-to-br from-secondary via-secondary to-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-cocoa-900">
            Cara Pemesanan
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-cocoa-600 text-sm sm:text-base font-light">
            Langkah mudah untuk menikmati kelezatan premium brownies Naliya Bites di rumah Anda.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6"
        >
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary/10 via-accent/50 to-primary/10 -translate-y-12 -z-10"></div>

          {CONFIG.orderSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="bg-white rounded-3xl p-8 border border-primary/5 shadow-premium text-center relative flex flex-col items-center space-y-4 group hover:shadow-premium-hover transition-all duration-300"
            >
              {/* Step Number Circle */}
              <div className="w-16 h-16 rounded-full bg-primary hover:bg-primary-light text-secondary flex items-center justify-center text-xl font-serif font-black shadow-md border-4 border-secondary transition-all duration-300 transform group-hover:scale-110">
                {step.step}
              </div>

              {/* Arrow Connector (Mobile/Tablet Only, and not for last item) */}
              {index < 2 && (
                <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 z-20 bg-accent text-secondary p-1.5 rounded-full shadow-md">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}

              <h3 className="font-serif text-lg sm:text-xl font-extrabold text-cocoa-900 pt-2">
                {step.title}
              </h3>
              
              <p className="text-cocoa-600 text-xs sm:text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
