import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="flex items-center space-x-1 rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-white hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <Globe className="h-4 w-4" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
}