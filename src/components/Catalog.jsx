import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';

export default function Catalog() {
  const [activeModalProductId, setActiveModalProductId] = useState(null);
  const [selectedBasicToppings, setSelectedBasicToppings] = useState([]);
  const [selectedSpecialToppings, setSelectedSpecialToppings] = useState([]);

  const formatPrice = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Get the max number of basic toppings allowed for the active product
  const getMaxBasicToppings = (product) => {
    if (!product) return 1;
    const match = product.toppingsBasicLimit.match(/(\d+)(?:–(\d+))?/);
    if (match && match[2]) return parseInt(match[2]);
    if (match && match[1]) return parseInt(match[1]);
    return 1;
  };

  const activeProduct = CONFIG.products.find(p => p.id === activeModalProductId);
  const maxToppingsLimit = activeProduct ? getMaxBasicToppings(activeProduct) : 0;
  const totalSelectedCount = selectedBasicToppings.length + selectedSpecialToppings.length;
  const isLimitReached = totalSelectedCount >= maxToppingsLimit;

  // Build dynamic WhatsApp message including chosen toppings (Safe Unicode Version)
  const buildWaMessage = (product, basicToppings, specialToppings) => {
    // \u{1F370} = 🍰, \u{1F36B} = 🍫, \u{1F353} = 🍓, \u{1F4B0} = 💰, \u{1F64F} = 🙏
    let msg = `Halo Naliya Bites! 🩵\nSaya ingin memesan *${product.name}*.\n`;

    if (basicToppings.length > 0) {
      msg += '\n' + '\u{1F370}' + '*Topping Basic:*\n';
      basicToppings.forEach((t, i) => {
        msg += `${i + 1}. ${t}\n`;
      });
    } else {
      msg += '\n' + '\u{1F36B}' + ' *Topping Basic:* Belum dipilih (mohon diskusikan)\n';
    }

    if (specialToppings.length > 0) {
      msg += `\n\u{1F36B}\u{1F353} *Add-On Topping Spesial:*\n`;
      specialToppings.forEach((t, i) => {
        msg += `${i + 1}. ${t} (+${formatPrice(product.addOnPrice)})\n`;
      });
    }

    const addOnTotal = specialToppings.length * product.addOnPrice;
    const total = product.price + addOnTotal;

    msg += `\n\u{1F4B0} *Estimasi Harga:*\n`;
    msg += `• Harga dasar ${product.name}: ${formatPrice(product.price)}\n`;
    if (specialToppings.length > 0) {
      msg += `• Add-on Topping Spesial (${specialToppings.length}×${formatPrice(product.addOnPrice)}): +${formatPrice(addOnTotal)}\n`;
    }
    msg += `• *Total Estimasi: ${formatPrice(total)}*\n`;
    msg += `_(Belum termasuk ongkos kirim)_\n`;
    msg += `\nMohon konfirmasi ketersediaan dan waktu pengiriman ya. Terima kasih! \u{1F64F}`;

    return msg;
  };

  // Toggle basic topping selection (respects combined max limit)
  const toggleBasicTopping = (topping) => {
    const max = getMaxBasicToppings(activeProduct);
    setSelectedBasicToppings(prev => {
      if (prev.includes(topping)) {
        return prev.filter(t => t !== topping);
      }
      const totalSelected = prev.length + selectedSpecialToppings.length;
      if (totalSelected >= max) {
        return prev;
      }
      return [...prev, topping];
    });
  };

  // Toggle special topping selection (respects combined max limit)
  const toggleSpecialTopping = (topping) => {
    const max = getMaxBasicToppings(activeProduct);
    setSelectedSpecialToppings(prev => {
      if (prev.includes(topping)) {
        return prev.filter(t => t !== topping);
      }
      const totalSelected = selectedBasicToppings.length + prev.length;
      if (totalSelected >= max) {
        return prev;
      }
      return [...prev, topping];
    });
  };

  // Reset topping selections when modal changes
  const openModal = (productId) => {
    setSelectedBasicToppings([]);
    setSelectedSpecialToppings([]);
    setActiveModalProductId(productId);
  };

  const closeModal = () => setActiveModalProductId(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeModalProductId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalProductId]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const modalOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    }
  };

  const variantItemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: (customIndex) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, delay: customIndex * 0.08, ease: "easeOut" }
    })
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-accent/5 via-secondary to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-cocoa-900">
            Katalog Produk Kami
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-cocoa-600 text-sm sm:text-base font-light">
            Klik pada salah satu produk untuk melihat varian topping dan langsung pilih topping favoritmu!
          </p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CONFIG.products.map((product) => {
            const imageUrl = CONFIG.images[product.imageKey] || CONFIG.images.hero;

            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                onClick={() => openModal(product.id)}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(139, 69, 19, 0.15)" }}
                className="bg-white rounded-3xl overflow-hidden border border-primary/10 cursor-pointer shadow-premium hover:border-primary/30 transition-all duration-300 flex flex-col h-full group relative"
              >
                {/* Product Image Section */}
                <div className="relative overflow-hidden aspect-[4/3] bg-cocoa-100">
                  <img
                    src={imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Hover Overlay indicator */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-secondary/95 text-primary-dark font-bold text-xs px-4 py-2.5 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center space-x-1.5">
                      <span>🍫</span>
                      <span>Pilih Topping & Pesan</span>
                    </span>
                  </div>

                  {/* Floating Content Badge */}
                  <div className="absolute top-4 left-4 bg-secondary/95 backdrop-blur-sm border border-primary/10 px-3.5 py-1 rounded-full text-xs font-semibold text-primary-dark shadow-sm z-10">
                    📦 {product.contents}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-cocoa-900 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-cocoa-600 text-sm font-light leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  <div className="border-t border-b border-primary/10 py-3 my-2 space-y-2 text-xs text-cocoa-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Topping Basic:</span>
                      <span className="text-primary-dark font-semibold bg-primary-soft/30 px-2 py-0.5 rounded-md">{product.toppingsBasicLimit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Add-on Topping Spesial:</span>
                      <span className="text-accent-dark font-semibold">{product.addOnNote}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <div className="text-[10px] text-cocoa-500 font-bold uppercase tracking-wider">Harga Mulai</div>
                      <div className="text-2xl font-serif font-black text-primary">
                        {formatPrice(product.price)}
                      </div>
                    </div>

                    <button
                      onClick={(e) => { e.stopPropagation(); openModal(product.id); }}
                      className="bg-primary hover:bg-primary-light text-secondary px-5 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 text-sm flex items-center space-x-2 z-10 cursor-pointer"
                    >
                      <span>Pesan</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Modal Pop-up Section */}
        <AnimatePresence>
          {activeModalProductId && activeProduct && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalOverlayVariants}
              onClick={closeModal}
              className="fixed inset-0 z-50 bg-cocoa-900/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            >
              {/* Modal Container */}
              <motion.div
                variants={modalContentVariants}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-[2.5rem] border border-primary/10 shadow-premium w-full max-w-5xl overflow-hidden relative p-6 sm:p-10 flex flex-col max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-secondary border border-primary/5 hover:bg-primary/10 text-cocoa-700 hover:text-primary transition-all duration-200 cursor-pointer shadow-sm focus:outline-none"
                  aria-label="Tutup"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Header Info */}
                <div className="mb-6 pb-4 border-b border-primary/10 pr-8">
                  <span className="text-[10px] sm:text-xs font-bold text-accent-dark uppercase tracking-wider bg-accent-light/20 px-3 py-1 rounded-full inline-block mb-2">
                    Pilih Topping & Pesan
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-cocoa-900">
                    {activeProduct.name}
                  </h3>
                  <p className="text-cocoa-500 font-light text-xs sm:text-sm mt-1">
                    Isi kemasan: <span className="font-medium text-cocoa-800">{activeProduct.contents}</span> &nbsp;|&nbsp; Harga mulai: <span className="font-serif font-bold text-primary">{formatPrice(activeProduct.price)}</span>
                  </p>
                </div>

                {/* Variants Gallery */}
                <div className="mb-8">
                  <h4 className="font-serif text-sm font-bold text-cocoa-700 mb-3 uppercase tracking-wider">
                    🔍 Galeri Varian Terpopuler
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                    {activeProduct.variants && activeProduct.variants.map((variant, idx) => (
                      <motion.div
                        key={idx}
                        custom={idx}
                        variants={variantItemVariants}
                        whileHover={{ y: -5 }}
                        className="group/variant bg-secondary/35 rounded-2xl p-3 border border-primary/5 hover:border-primary/25 transition-all duration-300 flex flex-col h-full"
                      >
                        <div className="relative aspect-square overflow-hidden rounded-xl bg-cocoa-100 shadow-inner mb-3">
                          <img
                            src={variant.image}
                            alt={variant.name}
                            className="w-full h-full object-cover group-hover/variant:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2 bg-primary/95 text-secondary text-[9px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                            Slot {idx + 1}
                          </div>
                        </div>
                        <h4 className="font-serif text-xs sm:text-sm font-extrabold text-cocoa-900 leading-tight">
                          {variant.name}
                        </h4>
                        <p className="text-cocoa-500 font-light text-[10px] sm:text-xs mt-1 leading-snug line-clamp-3 flex-grow">
                          {variant.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ── TOPPING SELECTION SECTION ── */}
                <div className="bg-secondary/40 rounded-2xl p-5 sm:p-6 border border-primary/10 space-y-6 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-primary/10 pb-3">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-cocoa-900 flex items-center gap-2">
                      🍫 Pilih Topping Untuk Pesananmu
                    </h4>
                    <span className="text-xs text-primary font-bold bg-primary/10 px-3 py-1.5 rounded-full self-start sm:self-auto">
                      Total Topping: {totalSelectedCount} / {maxToppingsLimit} dipilih
                    </span>
                  </div>

                  {/* Basic Toppings */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold text-cocoa-800">
                        Topping Basic <span className="text-cocoa-500 font-normal">({activeProduct.toppingsBasicLimit})</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {CONFIG.toppings.basic.map((topping, idx) => {
                        const isSelected = selectedBasicToppings.includes(topping);
                        const isDisabled = !isSelected && isLimitReached;
                        return (
                          <button
                            key={idx}
                            onClick={() => !isDisabled && toggleBasicTopping(topping)}
                            disabled={isDisabled}
                            className={`px-4 py-2 rounded-2xl text-sm font-semibold border transition-all duration-200 cursor-pointer ${isSelected
                              ? 'bg-primary text-secondary border-primary shadow-md scale-105'
                              : isDisabled
                                ? 'bg-cocoa-100 text-cocoa-500 border-cocoa-100 opacity-50 cursor-not-allowed'
                                : 'bg-white text-cocoa-800 border-primary/20 hover:border-primary/50 hover:bg-primary/5'
                              }`}
                          >
                            {isSelected && <span className="mr-1">✓</span>}
                            {topping}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Special Toppings (Add-On) */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold text-cocoa-800">
                        Add-On Topping Spesial <span className="text-accent-dark font-normal text-xs">({activeProduct.addOnNote})</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {CONFIG.toppings.special.map((topping, idx) => {
                        const isSelected = selectedSpecialToppings.includes(topping.name);
                        const isDisabled = !isSelected && isLimitReached;
                        return (
                          <button
                            key={idx}
                            onClick={() => !isDisabled && toggleSpecialTopping(topping.name)}
                            disabled={isDisabled}
                            className={`px-4 py-2 rounded-2xl text-sm font-semibold border transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${isSelected
                              ? 'bg-accent text-white border-accent shadow-md scale-105'
                              : isDisabled
                                ? 'bg-cocoa-100 text-cocoa-500 border-cocoa-100 opacity-50 cursor-not-allowed'
                                : 'bg-white text-cocoa-800 border-accent/30 hover:border-accent/60 hover:bg-accent/5'
                              }`}
                          >
                            {isSelected && <span>✓</span>}
                            <span>⭐ {topping.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Live preview + price breakdown */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl border border-primary/15 overflow-hidden"
                  >
                    {/* Summary header */}
                    <div className="px-4 py-3 bg-primary/5 border-b border-primary/10">
                      <p className="font-bold text-cocoa-900 text-sm">📋 Ringkasan & Estimasi Harga</p>
                    </div>

                    <div className="p-4 space-y-2 text-xs text-cocoa-700">
                      {/* Menu */}
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-cocoa-800">
                          {activeProduct.name} <span className="font-normal text-cocoa-500">({activeProduct.contents})</span>
                        </span>
                        <span className="font-serif font-bold text-cocoa-900 ml-4 whitespace-nowrap">
                          {formatPrice(activeProduct.price)}
                        </span>
                      </div>

                      {/* Basic Toppings row */}
                      {selectedBasicToppings.length > 0 && (
                        <div className="flex justify-between items-start text-cocoa-600">
                          <span>🍫 Topping Basic: <span className="text-cocoa-800 font-medium">{selectedBasicToppings.join(', ')}</span></span>
                          <span className="ml-4 whitespace-nowrap font-semibold text-green-600">Gratis</span>
                        </div>
                      )}

                      {/* Special Toppings rows */}
                      {selectedSpecialToppings.length > 0 && (
                        <>
                          {selectedSpecialToppings.map((name, i) => (
                            <div key={i} className="flex justify-between items-center text-cocoa-600">
                              <span>⭐ {name}</span>
                              <span className="ml-4 whitespace-nowrap font-semibold text-accent-dark">
                                +{formatPrice(activeProduct.addOnPrice)}
                              </span>
                            </div>
                          ))}
                          <div className="flex justify-between items-center text-cocoa-500 text-[11px]">
                            <span>{selectedSpecialToppings.length} topping spesial × {formatPrice(activeProduct.addOnPrice)}</span>
                            <span className="font-semibold text-accent-dark">
                              +{formatPrice(selectedSpecialToppings.length * activeProduct.addOnPrice)}
                            </span>
                          </div>
                        </>
                      )}

                      {/* Divider */}
                      <div className="border-t border-primary/10 pt-2 mt-1 flex justify-between items-center">
                        <span className="text-[11px] text-cocoa-400 italic">* Estimasi harga (belum termasuk ongkos kirim)</span>
                        <div className="text-right">
                          <div className="text-[10px] text-cocoa-500 uppercase tracking-wider font-bold">Total Estimasi</div>
                          <div className="font-serif font-black text-lg text-primary">
                            {formatPrice(activeProduct.price + (selectedSpecialToppings.length * activeProduct.addOnPrice))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-5 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <p className="text-cocoa-500 text-[11px] sm:text-xs font-light text-center sm:text-left max-w-md">
                    * Klik <strong>Pesan Sekarang</strong> untuk mengirim pesanan beserta topping pilihanmu langsung ke WhatsApp kami.
                  </p>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={closeModal}
                      className="flex-1 sm:flex-none border border-primary/20 hover:bg-secondary text-cocoa-800 px-6 py-3 rounded-full font-bold transition-all duration-200 text-sm cursor-pointer"
                    >
                      Tutup
                    </button>
                    <a
                      href={`https://api.whatsapp.com/send?phone=${CONFIG.whatsappNumber}&text=${encodeURIComponent(
                        buildWaMessage(activeProduct, selectedBasicToppings, selectedSpecialToppings)
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none bg-primary hover:bg-primary-light text-secondary px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 text-sm flex items-center justify-center gap-2"
                    >
                      <span>Pesan Sekarang</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}