import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Catalog from './components/Catalog';
import Toppings from './components/Toppings';
import HowToOrder from './components/HowToOrder';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Kenapa Memilih Kami Section */}
        <WhyUs />

        {/* Katalog Produk Section */}
        <Catalog />

        {/* Daftar Topping Section */}
        <Toppings />

        {/* Cara Pemesanan Section */}
        <HowToOrder />

        {/* Testimoni Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer & CTA Penutup Section */}
      <Footer />
    </div>
  );
}

export default App;
