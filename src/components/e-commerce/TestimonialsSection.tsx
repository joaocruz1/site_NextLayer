"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">O Que Nossos Clientes Dizem</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-sm sm:text-base">
            Empresas que transformaram sua gestão de marketplaces com nosso sistema
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel container */}
          <div className="overflow-hidden relative">
            <motion.div
              className="flex transition-all duration-500"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="min-w-full">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-purple-500/10 mx-4">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0 mx-auto md:mx-0">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-purple-500/30">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg?height=100&width=100"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <Quote className="w-8 h-8 md:w-10 md:h-10 text-purple-500/40 mb-3 mx-auto md:mx-0" />
                        <p className="text-purple-200/90 text-sm md:text-lg italic mb-4 md:mb-6">{testimonial.quote}</p>
                        <div>
                          <h4 className="text-white font-semibold">{testimonial.name}</h4>
                          <p className="text-purple-200/70 text-sm">{testimonial.role}</p>
                          <div className="flex items-center mt-2 justify-center md:justify-start">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? "text-purple-400" : "text-purple-900"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8 2.034a1 1 0 01-.364-1.118l1.07-3.292c.3-.921-.755-1.688-1.54-1.118l-2.8 2.034a1 1 0 01-.95-.69L6.98 7.412a1 1 0 00-.95-.69H2.568c-.969 0-1.371-1.24-.588-1.81l2.8-2.034a1 1 0 00.364-1.118l-1.07-3.292c-.3-.921.755-1.688 1.54-1.118l2.8 2.034a1 1 0 00.95.69h3.462z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Side navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeIndex === index ? "bg-purple-500" : "bg-purple-500/30"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "Este sistema transformou completamente a forma como gerenciamos nossas vendas em marketplaces. Conseguimos aumentar nossa eficiência em 40% e reduzir erros de processamento em 85%.",
    name: "Ana Oliveira",
    role: "Diretora de E-commerce, Loja Virtual Brasil",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    quote:
      "A gestão de funcionários e o controle de atividades nos permitiu identificar gargalos e otimizar nossos processos. Nosso tempo de processamento de pedidos caiu pela metade.",
    name: "Ricardo Santos",
    role: "Gerente de Operações, Mega Distribuidora",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    quote:
      "A integração com múltiplos marketplaces e a sincronização automática de estoque eliminaram os problemas de vendas de produtos indisponíveis. Recomendo fortemente.",
    name: "Carla Mendes",
    role: "Proprietária, CM Eletrônicos",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
]

