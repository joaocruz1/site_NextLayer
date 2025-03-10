"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

const Timeline = () => {
  const { t } = useLanguage()
  return (
    <section className="py-20 md:py-28 w-full">
      <div className="mx-auto max-w-7xl px-4 md:px-6 w-full">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            {t.process.timeline.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-[600px] mx-auto"
          >
            {t.process.timeline.subtitle}
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-purple-500/10" />

          <div className="space-y-8">
            {t.process.timeline.items.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 ${
                  i % 2 === 0 ? "sm:text-right" : ""
                }`}
              >
                <div className={`${i % 2 === 0 ? "sm:order-1" : ""}`}>
                  <div
                    className={`relative p-6 rounded-lg border border-purple-200/10 bg-purple-500/[0.02] ${
                      i % 2 === 0 ? "sm:ml-8" : "sm:mr-8"
                    }`}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400 border-4 border-[#0D0620] sm:left-0 left-1/2 transform -translate-x-1/2" />
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <div className="text-sm text-purple-400 mb-2">{step.duration}</div>
                    <p className="text-sm text-zinc-400">{step.description}</p>
                  </div>
                </div>
                <div className="hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline