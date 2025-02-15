import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "AplicaPOS ha transformado la manera en que manejamos nuestro negocio. El análisis predictivo nos ha ayudado a aumentar nuestros ingresos en un 30%.",
    author: "Sarah Johnson",
    role: "Propietaria",
    company: "The Coffee House",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    content: "El soporte al cliente es excepcional. Cualquier problema que hemos tenido se ha resuelto rápida y profesionalmente.",
    author: "Michael Chen",
    role: "Gerente de Operaciones",
    company: "Urban Retail",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    content: "Hemos probado otros sistemas POS, pero ninguno se compara con AplicaPOS. Es intuitivo, confiable y lleno de funciones útiles.",
    author: "Emily Rodriguez",
    role: "Directora",
    company: "Fresh Market",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    content: "La integración con nuestro inventario y el sistema de fidelización ha mejorado significativamente nuestra relación con los clientes.",
    author: "David Thompson",
    role: "Dueño",
    company: "Boutique Elegance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollToTestimonial = (index: number) => {
    if (containerRef.current) {
      const testimonialWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: testimonialWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    scrollToTestimonial(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToTestimonial(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="testimonials" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Lo que dicen nuestros clientes
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>

          {/* Testimonials Container */}
          <div
            ref={containerRef}
            className="relative flex snap-x snap-mandatory overflow-hidden"
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex w-full flex-none snap-center flex-col items-center px-4 transition-opacity duration-300"
                style={{
                  opacity: currentIndex === idx ? 1 : 0.5,
                  transform: `scale(${currentIndex === idx ? 1 : 0.9})`,
                  transition: 'all 0.5s ease-out',
                }}
              >
                <div className="relative mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100/5 transition-all duration-300 hover:shadow-xl">
                  <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/20" />
                  <blockquote className="text-lg font-medium text-gray-900 sm:text-xl">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} · {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToTestimonial(idx)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-6 bg-primary'
                    : 'bg-gray-300 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}