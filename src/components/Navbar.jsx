import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Keunggulan', href: '#why-us' },
    { label: 'Menu', href: '#menu' },
    { label: 'Topping', href: '#toppings' },
    { label: 'Cara Pesan', href: '#how-to-order' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-secondary/90 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-extrabold text-primary tracking-wide">
              {CONFIG.shopName}
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-cocoa-700 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Media Link / CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`https://instagram.com/${CONFIG.instagramUser}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cocoa-700 hover:text-accent-dark transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href={`https://wa.me/${CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-secondary px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cocoa-800 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? (
                <svg className="h-6 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary-dark border-t border-primary/10">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-cocoa-700 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 pb-2 border-t border-primary/10 px-3 flex flex-col space-y-3">
            <a 
              href={`https://instagram.com/${CONFIG.instagramUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-cocoa-700 hover:text-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href={`https://wa.me/${CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-secondary text-center px-4 py-2.5 rounded-full font-semibold shadow-md block"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
