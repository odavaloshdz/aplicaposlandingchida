import React from 'react';
import { Building2, Store, ShoppingBag, Building, Warehouse, Factory } from 'lucide-react';

const companies = [
  {
    name: 'MegaSuper',
    icon: Store,
    description: 'Cadena de Supermercados'
  },
  {
    name: 'TechnoMex',
    icon: Building2,
    description: 'Tecnología Industrial'
  },
  {
    name: 'ComercialPro',
    icon: ShoppingBag,
    description: 'Distribución Comercial'
  },
  {
    name: 'IndustriasFlex',
    icon: Factory,
    description: 'Manufactura Flexible'
  },
  {
    name: 'LogísticaExpress',
    icon: Warehouse,
    description: 'Servicios Logísticos'
  },
  {
    name: 'CorporativoGlobal',
    icon: Building,
    description: 'Servicios Empresariales'
  }
];

export default function LogoBanner() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Empresas innovadoras que confían en nosotros
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="group flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:scale-150" />
                <company.icon className="h-12 w-12 text-primary/80 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-900">{company.name}</div>
                <div className="text-xs text-gray-500">{company.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}