import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin as LinkedIn, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: LinkedIn }
];

const quickLinks = [
  { name: 'Características', href: '#caracteristicas' },
  { name: 'Precios', href: '#precios' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Blog', href: '/blog' },
  { name: 'Soporte', href: '/soporte' },
  { name: 'Política de Privacidad', href: '/privacidad' }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Logo and main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info Column */}
          <div className="space-y-8">
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="/src/logo-small.png"
                  alt="AplicaPOS"
                  className="h-12 w-auto"
                />
                <span className="text-2xl font-bold text-primary">APOS</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transformamos negocios con soluciones innovadoras de punto de venta. 
                Nuestra plataforma integrada ayuda a optimizar operaciones y 
                aumentar la rentabilidad de tu negocio.
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contacto@apos.mx"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors duration-300 text-sm group"
                >
                  <Mail className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  contacto@apos.mx
                </a>
              </li>
              <li className="space-y-2">
                <a
                  href="tel:+523957852011"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors duration-300 text-sm group"
                >
                  <Phone className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  (395) 785-2011
                </a>
                <a
                  href="tel:+523957852508"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors duration-300 text-sm group pl-7"
                >
                  (395) 785-2508
                </a>
              </li>
              <li className="flex items-start text-gray-600 text-sm group">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span>
                  Zaragoza 30<br />
                  San Juan de los Lagos<br />
                  Jalisco, México
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} APOS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}