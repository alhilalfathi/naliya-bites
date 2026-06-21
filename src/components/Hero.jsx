import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-accent/10">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-soft-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-6"
          >
            <span className="inline-block bg-accent/20 text-primary-dark text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              ✨ Premium Homemade Bakery
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cocoa-900 leading-tight">
              Homemade Brownies Premium dengan Berbagai Pilihan Topping Favorit
            </h1>

            <p className="text-base sm:text-lg text-cocoa-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Dibuat dari bahan berkualitas, fresh setiap hari, cocok untuk hadiah, acara keluarga, maupun camilan spesial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#menu"
                className="bg-primary hover:bg-primary-light text-secondary px-8 py-3.5 rounded-full font-bold shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 transition-all duration-300 text-center text-base"
              >
                Lihat Menu
              </a>
              {/* <a
                href={`https://wa.me/${CONFIG.whatsappNumber}?text=Halo%20Naliya%20Bites,%20saya%20tertarik%20untuk%20memesan%20brownies%20premium.`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-secondary px-8 py-3 rounded-full font-bold transition-all duration-300 text-center text-base"
              >

              </a> */}
            </div>
          </motion.div>

          {/* Product Image Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Backdrop Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            {/* The Image Container */}
            <div className="relative bg-secondary-dark p-3 rounded-3xl shadow-premium overflow-hidden border border-primary/10 max-w-md sm:max-w-lg">
              <img
                src={CONFIG.images.hero}
                alt="Premium Brownies Naliya Bites"
                className="rounded-2xl w-full h-[300px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute top-8 right-8 bg-secondary/95 backdrop-blur-sm border border-primary/10 p-3 rounded-2xl shadow-lg flex items-center space-x-2">
                <div className="bg-primary text-secondary p-1.5 rounded-lg">
                  🍰
                </div>
                <div>
                  <div className="text-[10px] text-cocoa-500 font-bold uppercase tracking-wider">Terlaris</div>
                  <div className="text-xs font-bold text-cocoa-900 font-serif">Party Pack Spesial</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
