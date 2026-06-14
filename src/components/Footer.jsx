import React from 'react';
import { CONFIG } from '../config';

export default function Footer() {
  const year = new Date().getFullYear();
  const mainWaUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=Halo%20Naliya%20Bites,%20saya%20siap%20memesan%20brownies%20favorit%20saya!`;

  return (
    <footer className="relative bg-cocoa-900 text-secondary">
      
      {/* 8. CTA Penutup Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-center px-4 overflow-hidden border-b border-white/5">
        {/* Soft decorative background circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl -translate-y-12 -translate-x-12"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-16 translate-x-16"></div>

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Sudah siap menikmati brownies favoritmu?
          </h2>
          <p className="text-secondary/80 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
            Pesan sekarang dan rasakan kelembutan fudgy brownies premium kami yang dipanggang segar khusus untuk Anda.
          </p>
          <div className="pt-4">
            <a
              href={mainWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white hover:bg-secondary text-primary-dark px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-base sm:text-lg"
              id="cta-whatsapp-btn"
            >
              <span>Pesan Sekarang via WhatsApp</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.635-1.022-5.11-2.884-6.974C16.588 1.884 14.116.859 11.987.859c-5.442 0-9.866 4.421-9.87 9.86-.002 1.802.483 3.51 1.405 5.021L2.553 21.84l6.094-1.686zM16.224 13.62c-.24-.12-1.417-.698-1.637-.778-.22-.08-.38-.12-.54.12-.16.24-.62.778-.76.938-.14.16-.28.18-.52.06-.24-.12-1.01-.372-1.923-1.187-.71-.634-1.19-1.418-1.33-1.658-.14-.24-.015-.37.106-.49.11-.107.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.47-.393-.406-.54-.414-.14-.007-.3-.008-.46-.008-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.002 0 1.182.86 2.324.98 2.484.12.16 1.69 2.581 4.096 3.618.572.247 1.018.394 1.366.505.575.183 1.098.157 1.512.095.46-.069 1.417-.579 1.617-1.139.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Logo and Tagline */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-extrabold tracking-wide text-white">
              {CONFIG.shopName}
            </h3>
            <p className="text-secondary/60 text-xs sm:text-sm font-light">
              Homemade Brownies Premium dengan berbagai pilihan topping favorit. Fresh every day.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-accent">Ikuti Kami</h4>
            <div className="flex space-x-6">
              {/* Instagram */}
              <a
                href={`https://instagram.com/${CONFIG.instagramUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-accent hover:text-cocoa-900 text-secondary p-3 rounded-full transition-all duration-300"
                aria-label="Instagram Link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-accent hover:text-cocoa-900 text-secondary p-3 rounded-full transition-all duration-300"
                aria-label="WhatsApp Link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.635-1.022-5.11-2.884-6.974C16.588 1.884 14.116.859 11.987.859c-5.442 0-9.866 4.421-9.87 9.86-.002 1.802.483 3.51 1.405 5.021L2.553 21.84l6.094-1.686zM16.224 13.62c-.24-.12-1.417-.698-1.637-.778-.22-.08-.38-.12-.54.12-.16.24-.62.778-.76.938-.14.16-.28.18-.52.06-.24-.12-1.01-.372-1.923-1.187-.71-.634-1.19-1.418-1.33-1.658-.14-.24-.015-.37.106-.49.11-.107.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.47-.393-.406-.54-.414-.14-.007-.3-.008-.46-.008-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.002 0 1.182.86 2.324.98 2.484.12.16 1.69 2.581 4.096 3.618.572.247 1.018.394 1.366.505.575.183 1.098.157 1.512.095.46-.069 1.417-.579 1.617-1.139.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links / contact info */}
          <div className="space-y-3 md:text-right text-xs sm:text-sm text-secondary/60">
            <h4 className="font-serif text-sm font-bold tracking-wider uppercase text-accent">Kontak Admin</h4>
            <p className="font-light">Senin - Minggu: 08:00 - 20:00 WIB</p>
            <p className="font-light">Sistem pemesanan Pre-Order H-1</p>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 mt-12 pt-6 text-center text-xs text-secondary/40 font-light">
          &copy; {year} {CONFIG.shopName}. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
}
