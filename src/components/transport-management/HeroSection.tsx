"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export function HeroSection() {
  const { t } = useLanguage()
   return (
    <div className="text-center space-y-8">
      <motion.span
        className="inline-block px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm md:text-base"
        whileHover={{ scale: 1.05 }}
      >
        {t.transport.herosection.hero}
      </motion.span>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
      {t.transport.herosection.title1}
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          {" "}
          {t.transport.herosection.title2}
        </span>
      </h1>
      <p className="text-purple-200/70 text-lg md:text-xl max-w-3xl mx-auto">
        {t.transport.herosection.subtitle}
      </p>
    </div>
  )
}

