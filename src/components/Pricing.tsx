import React from 'react';
import { Check, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Plan Inicial',
    price: 179,
    description: 'Ideal para negocios que están comenzando',
    features: [
      '1 Usuario',
      'Productos y Ventas ilimitados',
      '3 Facturas por Mes',
      'Gestión de Inventario',
      'Punto de Venta',
      'Clientes'
    ]
  },
  {
    name: 'Plan Esencial',
    price: 369,
    description: 'Para negocios en crecimiento',
    features: [
      '2 Usuarios',
      'Productos y Ventas ilimitados',
      '20 Facturas por Mes',
      'Catálogo en Línea',
      'Cortes de Caja',
      'Compras',
      'Facturas Globales',
      'Reportes de Compras, Ventas e Inventario'
    ]
  },
  {
    name: 'Plan Avanzado',
    price: 599,
    description: 'Para negocios establecidos',
    features: [
      '3 Usuarios',
      'Productos y Ventas ilimitados',
      'Facturas ilimitadas',
      'Multisucursal (incluye tu sucursal principal y compra hasta 2 más por $299 por mes cada una)',
      '1 Almacén',
      'Soporte Premium',
      'Permisos avanzados',
      'Gastos',
      'Cotizaciones',
      'Traspasos',
      'Importar Compras en XML'
    ],
    highlighted: true,
    tag: 'Más Popular'
  },
  {
    name: 'Plan Pro',
    price: 799,
    description: 'Solución completa para grandes negocios',
    features: [
      'Usuarios ilimitados',
      'Productos y Ventas ilimitados',
      'Facturas ilimitadas',
      'Multisucursal (incluye tu sucursal principal y compra ilimitadas por $399 por mes cada una)',
      'Almacenes ilimitados',
      'Ejecutivo de Cuentas',
      'Pagos a Proveedores',
      'Cuentas por Cobrar y por Pagar',
      'Reportes de Finanzas y Ganancias'
    ]
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  return (
    <div id="pricing" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Precios</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-dark sm:text-5xl">
            Un precio simple pensado para tus necesidades
          </p>
        </div>

        {/* Toggle Mensual/Anual */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => setIsAnnual(false)}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              !isAnnual ? 'bg-primary text-white shadow-lg' : 'text-gray-600 hover:text-primary'
            }`}
          >
            Pago Mensual
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`group relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              isAnnual ? 'bg-primary text-white shadow-lg' : 'text-gray-600 hover:text-primary'
            }`}
          >
            Pago Anual
            <span className="ml-2 inline-flex items-center rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-white group-hover:bg-accent/90">
              -35%
            </span>
          </button>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                tier.highlighted ? 'lg:z-10 ring-2 ring-primary before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-b before:from-primary/5 before:to-transparent' : ''
              }`}
            >
              <div className="mb-8">
                {tier.tag && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{tier.tag}</span>
                    </div>
                  </div>
                )}
                <h3 className="text-lg font-semibold leading-8 text-dark">{tier.name}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <div className="mt-6">
                  {isAnnual && (
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 line-through">
                        ${tier.price} MXN/mes
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-dark">
                      ${isAnnual ? Math.round(tier.price * 0.65) : tier.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">MXN/mes</span>
                  </div>
                  {isAnnual && (
                    <p className="mt-1 text-sm text-accent font-medium">
                      Pago único de ${Math.round(tier.price * 0.65 * 12)} MXN/año
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-2 flex flex-col gap-4">
                <a
                  href="#"
                  className={`inline-flex justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30'
                      : 'bg-primary/10 text-primary hover:bg-primary/20'
                  }`}
                >
                  Probar Gratis
                </a>
              </div>

              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-start">
                    <Check className={`h-6 w-5 flex-none ${tier.highlighted ? 'text-primary' : 'text-gray-400'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <span className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800">
            ¡Oferta limitada! Precio para nuevos usuarios de esta semana
          </span>
        </div>
      </div>
    </div>
  );
}