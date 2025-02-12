"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

const HeroSection = () => {
  const {t} = useLanguage()
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container px-4 sm:px-6 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-purple-500/10 bg-purple-500/5 px-3 py-1 text-xs sm:text-sm text-purple-200 backdrop-blur-sm"
          >
            {t.portfolio.hero.header}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
          >
            <span className="block text-white mb-4">{t.portfolio.hero.title}</span>
            <span className="block bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent pb-4">
              {t.portfolio.hero.title2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-purple-200/70 max-w-2xl mx-auto"
          >
            {t.portfolio.hero.description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

