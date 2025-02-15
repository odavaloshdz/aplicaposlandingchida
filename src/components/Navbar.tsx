import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'blog') {
      const blogSection = document.getElementById('blog-section');
      if (blogSection) {
        const offset = 80;
        const elementPosition = blogSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-4 my-4">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg">
            <div className="flex h-20 items-center justify-between px-6">
              <div className="flex items-center">
                <a href="/" className="flex-shrink-0">
                  <img src="/src/logo-small.png" alt="AplicaPOS" className="h-12 w-auto" />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <a 
                    href="#features" 
                    onClick={(e) => handleClick(e, 'features')} 
                    className="text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    {t('nav.features')}
                  </a>
                  <a 
                    href="#pricing" 
                    onClick={(e) => handleClick(e, 'pricing')} 
                    className="text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    {t('nav.pricing')}
                  </a>
                  <a 
                    href="#testimonials" 
                    onClick={(e) => handleClick(e, 'testimonials')} 
                    className="text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    {t('nav.testimonials')}
                  </a>
                  <a 
                    href="#blog" 
                    onClick={(e) => handleClick(e, 'blog')} 
                    className="text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    {t('nav.blog')}
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleClick(e, 'contact')} 
                    className="text-secondary hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    {t('nav.contact')}
                  </a>
                  <LanguageToggle />
                  <a 
                    href="#demo" 
                    onClick={(e) => handleClick(e, 'demo')} 
                    className="bg-highlight text-white hover:bg-highlight/90 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {t('nav.requestDemo')}
                  </a>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary focus:outline-none transition-colors duration-300"
                  aria-expanded={isOpen}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {isOpen && (
              <div className="md:hidden border-t border-gray-200/20">
                <div className="space-y-1 px-4 pb-3 pt-2">
                  <a 
                    href="#features" 
                    onClick={(e) => handleClick(e, 'features')} 
                    className="block text-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
                  >
                    {t('nav.features')}
                  </a>
                  <a 
                    href="#pricing" 
                    onClick={(e) => handleClick(e, 'pricing')} 
                    className="block text-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
                  >
                    {t('nav.pricing')}
                  </a>
                  <a 
                    href="#testimonials" 
                    onClick={(e) => handleClick(e, 'testimonials')} 
                    className="block text-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
                  >
                    {t('nav.testimonials')}
                  </a>
                  <a 
                    href="#blog" 
                    onClick={(e) => handleClick(e, 'blog')} 
                    className="block text-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
                  >
                    {t('nav.blog')}
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleClick(e, 'contact')} 
                    className="block text-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105"
                  >
                    {t('nav.contact')}
                  </a>
                  <div className="px-3 py-2">
                    <LanguageToggle />
                  </div>
                  <a 
                    href="#demo" 
                    onClick={(e) => handleClick(e, 'demo')} 
                    className="block bg-highlight text-white hover:bg-highlight/90 px-4 py-2 rounded-full text-base font-medium text-center mt-4 mb-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {t('nav.requestDemo')}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}