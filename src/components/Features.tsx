import React from 'react';
import { BarChart3, ShoppingCart, Users, Clock, Shield, Smartphone } from 'lucide-react';

const features = [
  {
    name: 'Análisis Avanzado',
    description: 'Obtén información en tiempo real sobre el rendimiento de tu negocio con informes y análisis detallados.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Gestión de Inventario',
    description: 'Controla los niveles de stock en tiempo real y automatiza tu proceso de reabastecimiento.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Gestión de Clientes',
    description: 'Construye relaciones más sólidas con CRM integrado y programas de fidelización.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Soporte 24/7',
    description: 'Obtén ayuda cuando la necesites con nuestro equipo de soporte disponible las 24 horas.',
    icon: Clock,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Pagos Seguros',
    description: 'Procesa pagos de forma segura con encriptación de extremo a extremo y protección contra fraudes.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Acceso Móvil',
    description: 'Gestiona tu negocio desde cualquier lugar con nuestra aplicación móvil.',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Features() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Todo lo que necesitas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Características poderosas para negocios modernos
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="group relative perspective"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
              }}
            >
              <div 
                className="relative h-48 overflow-hidden rounded-lg bg-gray-100 transition-all duration-500 transform-gpu group-hover:scale-[1.02] group-hover:shadow-2xl will-change-transform"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div 
                  className="absolute inset-0 transition-transform duration-500 group-hover:[transform:rotateX(2deg)_rotateY(2deg)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-dark/0 transition-opacity duration-500 group-hover:opacity-70" />
                </div>
              </div>
              <div className="mt-6 transform-gpu transition-all duration-500 group-hover:translate-y-[-4px]">
                <div className="flex items-center gap-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
                    <feature.icon className="relative h-6 w-6 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]" />
                  </div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-dark group-hover:text-primary transition-colors duration-300">
                    {feature.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-7 text-secondary group-hover:text-dark/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#pricing"
            className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full text-white overflow-hidden transition-all duration-500 hover:scale-105 transform-gpu hover:[transform:translate3d(0,0,40px)] perspective"
            style={{
              background: 'linear-gradient(45deg, #0511F2, #04B2D9)',
              transformStyle: 'preserve-3d',
            }}
          >
            <span className="relative z-10 flex items-center">
              Comienza a usar todas estas características
              <span className="ml-2 transition-transform duration-500 group-hover:translate-x-1">→</span>
            </span>
            <div 
              className="absolute inset-0 transition-transform duration-500 hover:[transform:translate3d(4px,4px,0)] bg-gradient-to-r from-primary to-accent opacity-0 hover:opacity-100"
              style={{ transformStyle: 'preserve-3d' }}
            />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .perspective {
          perspective: 1000px;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}