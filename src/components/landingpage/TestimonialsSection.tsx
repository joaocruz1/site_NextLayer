"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"


type Testimonial = ReturnType<typeof useLanguage>['t']['landing']['testimonials']['items'][0];

const TestimonialCard  = ({ testimonial, _index }: { testimonial: Testimonial ; _index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="relative">
      <motion.div
        className="relative p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800 transition-colors duration-300 hover:border-zinc-700"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="space-y-4 sm:space-y-6">
          <div className="relative">
            <svg
              className="absolute -top-4 -left-4 h-6 sm:h-8 w-6 sm:w-8 text-zinc-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <blockquote className="text-base sm:text-lg text-zinc-300 italic pl-2">{testimonial.quote}</blockquote>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-white text-sm sm:text-base">{testimonial.author}</div>
              <div className="text-xs sm:text-sm text-zinc-400">
                {testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export const TestimonialsSection = () => {
  
  const {t} = useLanguage()

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 sm:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div className="space-y-4">
            <motion.div
              className="inline-flex items-center justify-center px-4 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {t.landing.testimonials.header}
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white px-4 sm:px-0">
              {t.landing.testimonials.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto px-4 sm:px-0">
              {t.landing.testimonials.subtitle}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {t.landing.testimonials.items.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} _index={index} />
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>
    </section>
  )
}

