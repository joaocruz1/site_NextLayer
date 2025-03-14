"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export function Testimonials() {
  const { t } = useLanguage()
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t.transport.testimonials.title}</h2>
        <p className="text-purple-200/70 max-w-2xl mx-auto">{t.transport.testimonials.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.transport.testimonials.items.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            whileHover={{ y: -5 }}
            className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 border border-purple-500/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar || "/placeholder.svg?height=100&width=100"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-purple-200/70 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-purple-200/90">{testimonial.quote}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


