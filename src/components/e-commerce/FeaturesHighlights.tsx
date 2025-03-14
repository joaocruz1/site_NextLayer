"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export function FeatureHighlights() {
  const { t } = useLanguage()
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t.ecommerce.features.title}</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-sm sm:text-base">
            {t.ecommerce.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.ecommerce.features.items.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/30 to-purple-700/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative h-full bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                <div className="p-3 rounded-lg bg-purple-500/10 w-fit group-hover:bg-purple-500/20 transition-colors mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-purple-200/70 mb-4">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}



