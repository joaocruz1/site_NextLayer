"use client"

import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import Image from "next/image"

export function TechStackShowcase() {

  const {t} = useLanguage()

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t.websites.tech.title}</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-sm sm:text-base">
            {t.websites.tech.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {t.websites.tech.items.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-purple-500/10 text-center"
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  <Image
                    src={tech.logo || "/placeholder.svg?height=64&width=64"}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{tech.name}</h3>
              <p className="text-purple-200/70 text-xs md:text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


