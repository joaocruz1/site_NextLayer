"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Globe, Shield, Zap, Users, Cloud, Brain } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"


const SolutionsGrid = () => {
  const {t} = useLanguage()
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            {t.solutions.solutions_grid.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-[600px] mx-auto"
          >
              {t.solutions.solutions_grid.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.solutions.solutions_grid.items.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-purple-200/10 bg-purple-500/[0.02] p-6 hover:bg-purple-500/[0.04] transition-colors"
            >
              <div className="relative z-10">
                <solution.icon className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-sm text-zinc-400">{solution.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsGrid

