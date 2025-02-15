import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Cómo un ERP puede transformar tu negocio en 2024',
    excerpt: 'Descubre las ventajas competitivas que un sistema ERP moderno puede aportar a tu empresa y por qué es una inversión esencial para el crecimiento.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    date: '20 Mar 2024',
    readTime: '8 min',
    category: 'Tecnología',
    content: `
      Los sistemas ERP (Enterprise Resource Planning) se han convertido en el corazón digital de las empresas modernas. 
      En este artículo, exploraremos cómo la implementación de un ERP puede:

      • Optimizar tus procesos operativos
      • Mejorar la toma de decisiones con datos en tiempo real
      • Reducir costos operativos
      • Aumentar la productividad de tu equipo
      • Mejorar la satisfacción del cliente

      La transformación digital ya no es una opción, es una necesidad para mantenerse competitivo en el mercado actual.
    `
  },
  {
    id: 2,
    title: '5 Señales de que tu negocio necesita un sistema ERP',
    excerpt: '¿Estás perdiendo tiempo en procesos manuales? ¿Tienes problemas para acceder a información crucial? Estas son las señales que indican que necesitas un ERP.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    date: '18 Mar 2024',
    readTime: '6 min',
    category: 'Gestión',
    content: `
      Identificar el momento adecuado para implementar un ERP es crucial. Estas son las señales más comunes:

      1. Procesos manuales que consumen demasiado tiempo
      2. Dificultad para obtener reportes actualizados
      3. Problemas de comunicación entre departamentos
      4. Errores frecuentes en el inventario
      5. Crecimiento del negocio que supera la capacidad actual

      Si identificas dos o más de estas señales, es momento de considerar seriamente la implementación de un ERP.
    `
  },
  {
    id: 3,
    title: 'ERP en la Nube vs. ERP Local: ¿Cuál es mejor para tu empresa?',
    excerpt: 'Análisis detallado de las ventajas y desventajas de los sistemas ERP en la nube frente a las soluciones locales tradicionales.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    date: '15 Mar 2024',
    readTime: '10 min',
    category: 'Análisis',
    content: `
      La decisión entre un ERP en la nube y uno local puede definir el futuro de tu empresa. Comparemos:

      ERP en la Nube:
      ✓ Menor inversión inicial
      ✓ Actualizaciones automáticas
      ✓ Acceso desde cualquier lugar
      ✓ Escalabilidad flexible
      
      ERP Local:
      ✓ Mayor control sobre los datos
      ✓ Sin dependencia de internet
      ✓ Personalización completa
      ✓ Costos predecibles a largo plazo

      La elección dependerá de tus necesidades específicas, presupuesto y objetivos empresariales.
    `
  },
  {
    id: 4,
    title: 'Implementación exitosa de ERP: Guía paso a paso',
    excerpt: 'Aprende las mejores prácticas y evita los errores comunes en la implementación de un sistema ERP en tu empresa.',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=800',
    date: '12 Mar 2024',
    readTime: '12 min',
    category: 'Guía',
    content: `
      Una implementación exitosa de ERP requiere una planificación cuidadosa:

      1. Evaluación y Planificación
         • Análisis de necesidades
         • Definición de objetivos
         • Selección del sistema

      2. Preparación
         • Formación del equipo
         • Limpieza de datos
         • Establecimiento de KPIs

      3. Implementación
         • Migración de datos
         • Configuración del sistema
         • Pruebas

      4. Capacitación y Lanzamiento
         • Formación de usuarios
         • Pruebas piloto
         • Lanzamiento por fases

      5. Seguimiento y Optimización
         • Monitoreo de KPIs
         • Ajustes y mejoras
         • Soporte continuo
    `
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <div id="blog-section" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Blog</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Últimas novedades y consejos
          </p>
        </div>

        {selectedPost ? (
          <div className="mt-16 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 inline-flex items-center text-primary hover:text-accent transition-colors duration-300"
            >
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Volver al blog
            </button>
            
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-96">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <div className="flex items-center gap-x-4 text-sm text-white/80 mb-4">
                    <time dateTime={selectedPost.date} className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {selectedPost.date}
                    </time>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {selectedPost.readTime}
                    </div>
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-sm text-white">
                      {selectedPost.category}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold text-white">{selectedPost.title}</h1>
                </div>
              </div>
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  {selectedPost.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-600 whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer"
                onClick={() => setSelectedPost(post)}
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.date} className="flex items-center text-gray-500">
                        <Calendar className="mr-1 h-4 w-4" />
                        {post.date}
                      </time>
                      <div className="flex items-center text-gray-500">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime}
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        {post.category}
                      </span>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-dark group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm text-secondary line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div
                      className="flex items-center text-sm font-medium text-primary hover:text-accent transition-colors duration-300"
                    >
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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