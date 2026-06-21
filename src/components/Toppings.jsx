import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../config';

export default function Toppings() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="toppings" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-cocoa-900">
            Daftar Topping Favorit
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-cocoa-600 text-sm sm:text-base font-light">
            Ekspresikan selera Anda dengan aneka taburan lezat. Dari renyahnya almond hingga lumer dan manisnya biskuit Lotus Biscoff.
          </p>
        </div>

        {/* Toppings Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Card 1: Topping Basic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-primary/5 shadow-premium flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-3 pb-4 border-b border-primary/10">
              <div className="bg-secondary p-2.5 rounded-xl text-primary text-xl">
                🍫
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-cocoa-900">Topping Basic</h3>
                <p className="text-xs text-cocoa-500 font-light">Sudah termasuk dalam paket pembelian utama</p>
              </div>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {CONFIG.toppings.basic.map((topping, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B4513", color: "#FFF8F2" }}
                  className="bg-secondary text-cocoa-800 border border-primary/10 px-4 py-2.5 rounded-2xl text-sm font-semibold shadow-sm cursor-default transition-all duration-200"
                >
                  {topping}
                </motion.span>
              ))}
            </motion.div>
            
            <p className="text-xs text-cocoa-400 font-light italic mt-auto">
              * Bebas pilih kombinasi topping basic dan spesial sesuai batas maksimal masing-masing menu (maksimal 4 topping).
            </p>
          </motion.div>

          {/* Card 2: Add-On Topping Spesial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 sm:p-10 rounded-3xl border border-primary/5 shadow-premium flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-3 pb-4 border-b border-primary/10">
              <div className="bg-accent/20 p-2.5 rounded-xl text-accent-dark text-xl">
                ⭐
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-cocoa-900">Add-On Topping Spesial</h3>
                <p className="text-xs text-cocoa-500 font-light">Tambahan sensasi rasa premium berkelas</p>
              </div>
            </div>

            {/* List of Special Toppings */}
            <div className="grid grid-cols-3 gap-3">
              {CONFIG.toppings.special.map((topping, idx) => (
                <div key={idx} className="bg-secondary/60 border border-primary/5 p-4 rounded-2xl flex flex-col items-center justify-center text-center space-y-2">
                  <span className="text-2xl">
                    {topping.name === "Strawberry" ? "🍓" : topping.name.includes("Lotus") ? "🍪" : "🍫"}
                  </span>
                  <span className="font-semibold text-cocoa-800 text-xs sm:text-sm">{topping.name}</span>
                </div>
              ))}
            </div>

            {/* Pricing details table */}
            <div className="bg-secondary/80 p-5 rounded-2xl border border-primary/5 space-y-3">
              <h4 className="font-serif text-sm font-bold text-cocoa-900">Detail Biaya Tambahan (per topping):</h4>
              <div className="space-y-2 text-xs sm:text-sm text-cocoa-700">
                <div className="flex justify-between items-center py-1 border-b border-cocoa-100">
                  <span className="font-medium">Party Pack</span>
                  <span className="font-serif font-bold text-primary">+Rp7.000 / topping</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-cocoa-100">
                  <span className="font-medium">Classic Fudgy Brownie</span>
                  <span className="font-serif font-bold text-primary">+Rp4.000 / topping</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium">Petite Square</span>
                  <span className="font-serif font-bold text-primary">+Rp4.000 / topping</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
