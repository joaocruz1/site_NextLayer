"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

const HeroSection = () => {
  const {t} = useLanguage()
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-purple-500/10 bg-purple-500/5 px-3 py-1 text-xs sm:text-sm text-purple-200 backdrop-blur-sm"
            >
              {t.solutions.hero.header}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
            >
              <span className="block text-white mb-4">{t.solutions.hero.title}</span>
              <span className="block bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent pb-4">
                {t.solutions.hero.title2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-purple-200/70 max-w-xl"
            >
              {t.solutions.hero.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-square lg:aspect-[4/3]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative h-full w-full rounded-3xl border border-purple-200/10 bg-purple-500/[0.02] overflow-hidden p-8">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                {t.solutions.hero.items.map((title, i) => (
                  <motion.div
                    key={title}
                    className="relative rounded-2xl overflow-hidden bg-purple-500/[0.02] border border-purple-200/10 p-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                    />
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold text-purple-200 mb-2">{title}</h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

