import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué hace único a AplicaPOS?',
    answer: 'AplicaPOS combina una interfaz intuitiva con análisis avanzado y gestión integral. Nuestra plataforma se adapta a diferentes tipos de negocios y ofrece características únicas como análisis predictivo y automatización inteligente.'
  },
  {
    question: '¿Cómo funciona el soporte técnico?',
    answer: 'Ofrecemos soporte técnico 24/7 a través de múltiples canales: chat en vivo, correo electrónico y teléfono. Nuestro equipo de expertos está siempre disponible para ayudarte con cualquier consulta o problema técnico.'
  },
  {
    question: '¿Puedo probar AplicaPOS antes de comprarlo?',
    answer: 'Sí, ofrecemos una prueba gratuita de 14 días con todas las características desbloqueadas. No se requiere tarjeta de crédito y puedes cancelar en cualquier momento.'
  },
  {
    question: '¿Qué tipo de negocios pueden usar AplicaPOS?',
    answer: 'AplicaPOS es versátil y se adapta a diversos tipos de negocios, incluyendo restaurantes, tiendas minoristas, cafeterías, boutiques, y más. Nuestras características personalizables permiten adaptar el sistema a tus necesidades específicas.'
  },
  {
    question: '¿Cómo se manejan las actualizaciones del sistema?',
    answer: 'Las actualizaciones son automáticas y gratuitas para todos nuestros clientes. Implementamos mejoras regularmente basadas en el feedback de usuarios y las últimas tendencias tecnológicas.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Preguntas Frecuentes</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Todo lo que necesitas saber
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group mb-4 overflow-hidden rounded-lg bg-white"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-all duration-300 hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-dark group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary transition-transform duration-300" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-primary transition-transform duration-300" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-4' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-secondary">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}