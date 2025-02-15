import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navbar
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.testimonials': 'Testimonios',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.requestDemo': 'Solicitar Demo',

    // Hero
    'hero.newVersion': '¡Nuevo! Versión 2.0 disponible',
    'hero.title': 'Revoluciona',
    'hero.titleSuffix': 'con AplicaPOS',
    'hero.description': 'Sistema de punto de venta inteligente que optimiza tus operaciones, impulsa tus ventas y encanta a tus clientes.',
    'hero.startNow': 'Comienza ahora',
    'hero.watchDemo': 'Ver demostración',
    'hero.stats.clients': 'Clientes Activos',
    'hero.stats.transactions': 'Transacciones',
    'hero.stats.satisfaction': 'Satisfacción',
    'hero.businesses.store': 'tu Tienda',
    'hero.businesses.liquorStore': 'tu Licorería',
    'hero.businesses.hotel': 'tu Hotel',
    'hero.businesses.restaurant': 'tu Restaurante',
    'hero.businesses.pharmacy': 'tu Farmacia',
    'hero.businesses.boutique': 'tu Boutique',
    'hero.businesses.cafe': 'tu Cafetería',
    'hero.businesses.hardware': 'tu Ferretería',
    'hero.businesses.supermarket': 'tu Supermercado',
    'hero.businesses.stationery': 'tu Papelería',

    // Features
    'features.title': 'Todo lo que necesitas',
    'features.subtitle': 'Características poderosas para negocios modernos',
    'features.startUsing': 'Comienza a usar todas estas características',
    'features.analytics': 'Análisis Avanzado',
    'features.analyticsDesc': 'Obtén información en tiempo real sobre el rendimiento de tu negocio con informes y análisis detallados.',
    'features.inventory': 'Gestión de Inventario',
    'features.inventoryDesc': 'Controla los niveles de stock en tiempo real y automatiza tu proceso de reabastecimiento.',
    'features.customers': 'Gestión de Clientes',
    'features.customersDesc': 'Construye relaciones más sólidas con CRM integrado y programas de fidelización.',
    'features.support': 'Soporte 24/7',
    'features.supportDesc': 'Obtén ayuda cuando la necesites con nuestro equipo de soporte disponible las 24 horas.',
    'features.payments': 'Pagos Seguros',
    'features.paymentsDesc': 'Procesa pagos de forma segura con encriptación de extremo a extremo y protección contra fraudes.',
    'features.mobile': 'Acceso Móvil',
    'features.mobileDesc': 'Gestiona tu negocio desde cualquier lugar con nuestra aplicación móvil.',

    // MobileApp
    'mobile.title': 'Acceso Móvil',
    'mobile.subtitle': 'Lleva tu negocio a donde vayas',
    'mobile.description': 'Gestiona tu negocio desde cualquier lugar con nuestra potente aplicación móvil. Accede a datos en tiempo real, procesa transacciones y mantente conectado con tu equipo desde donde estés.',
    'mobile.appStore': 'App Store',
    'mobile.playStore': 'Play Store',
    'mobile.feature1.title': 'Sincronización en tiempo real.',
    'mobile.feature1.description': 'Mantente actualizado con sincronización instantánea en todos tus dispositivos.',
    'mobile.feature2.title': 'Modo sin conexión.',
    'mobile.feature2.description': 'Continúa operando incluso sin conexión a internet.',
    'mobile.feature3.title': 'Notificaciones push.',
    'mobile.feature3.description': 'Recibe alertas instantáneas de actualizaciones y transacciones importantes.',
  },
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.requestDemo': 'Request Demo',

    // Hero
    'hero.newVersion': 'New! Version 2.0 available',
    'hero.title': 'Revolutionize',
    'hero.titleSuffix': 'with AplicaPOS',
    'hero.description': 'Smart point of sale system that optimizes your operations, boosts your sales, and delights your customers.',
    'hero.startNow': 'Start Now',
    'hero.watchDemo': 'Watch Demo',
    'hero.stats.clients': 'Active Clients',
    'hero.stats.transactions': 'Transactions',
    'hero.stats.satisfaction': 'Satisfaction',
    'hero.businesses.store': 'your Store',
    'hero.businesses.liquorStore': 'your Liquor Store',
    'hero.businesses.hotel': 'your Hotel',
    'hero.businesses.restaurant': 'your Restaurant',
    'hero.businesses.pharmacy': 'your Pharmacy',
    'hero.businesses.boutique': 'your Boutique',
    'hero.businesses.cafe': 'your Cafe',
    'hero.businesses.hardware': 'your Hardware Store',
    'hero.businesses.supermarket': 'your Supermarket',
    'hero.businesses.stationery': 'your Stationery Store',

    // Features
    'features.title': 'Everything you need',
    'features.subtitle': 'Powerful features for modern businesses',
    'features.startUsing': 'Start using all these features',
    'features.analytics': 'Advanced Analytics',
    'features.analyticsDesc': 'Get real-time insights about your business performance with detailed reports and analytics.',
    'features.inventory': 'Inventory Management',
    'features.inventoryDesc': 'Control stock levels in real-time and automate your restocking process.',
    'features.customers': 'Customer Management',
    'features.customersDesc': 'Build stronger relationships with integrated CRM and loyalty programs.',
    'features.support': '24/7 Support',
    'features.supportDesc': 'Get help when you need it with our support team available 24 hours.',
    'features.payments': 'Secure Payments',
    'features.paymentsDesc': 'Process payments securely with end-to-end encryption and fraud protection.',
    'features.mobile': 'Mobile Access',
    'features.mobileDesc': 'Manage your business from anywhere with our mobile app.',

    // MobileApp
    'mobile.title': 'Mobile Access',
    'mobile.subtitle': 'Take your business anywhere',
    'mobile.description': 'Manage your business on the go with our powerful mobile app. Access real-time data, process transactions, and stay connected with your team from anywhere.',
    'mobile.appStore': 'App Store',
    'mobile.playStore': 'Play Store',
    'mobile.feature1.title': 'Real-time sync.',
    'mobile.feature1.description': 'Stay updated with instant synchronization across all your devices.',
    'mobile.feature2.title': 'Offline mode.',
    'mobile.feature2.description': 'Continue operations even without internet connection.',
    'mobile.feature3.title': 'Push notifications.',
    'mobile.feature3.description': 'Get instant alerts for important updates and transactions.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}