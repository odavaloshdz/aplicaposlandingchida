import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import LogoBanner from './components/LogoBanner';
import MobileApp from './components/MobileApp';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import LiveChat from './components/LiveChat';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-white">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Blog />
        <LogoBanner />
        <MobileApp />
        <LiveChat />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;