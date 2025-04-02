"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import type React from "react" // Import React
import { useLanguage } from "@/context/LanguageContext"


const ParallaxCard = ({ children }: { children: React.ReactNode; _index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className="will-change-transform">
      {children}
    </motion.div>
  )
}

export const FeaturesSection = () => {
  const {t} = useLanguage()

  return (
    <section className="relative py-12 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 sm:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl mx-auto text-center mb-8 sm:mb-16"
        >
          <motion.div className="space-y-3 sm:space-y-4">
            <motion.div
              className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs sm:text-sm text-zinc-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {t.landing.features.header}
            </motion.div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">{t.landing.features.title}</h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto px-4 sm:px-0">
              {t.landing.features.subtitle}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {t.landing.features.items.map((feature, index) => (
            <ParallaxCard key={feature.title} _index={index}>
              <div className="group relative h-full">
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-b ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                />

                <div className="relative p-4 sm:p-6 rounded-xl bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 h-full transition-colors duration-300 group-hover:border-zinc-700">
                  <div className="space-y-3 sm:space-y-4">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-white/20 to-white/10 rounded-lg" />
                    </motion.div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-white/90">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300">
                        {feature.description}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {feature.metrics.map((metric, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white/70 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {metric}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <Link
                        href={`/services#${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-xs sm:text-sm text-white/70 hover:text-white transition-colors duration-200"
                      >
                        {t.landing.features.button}
                        <svg
                          viewBox="0 0 24 24"
                          className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  )
}

