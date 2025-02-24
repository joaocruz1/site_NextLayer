"use client"

import { motion } from "framer-motion"
import { Database, HardDrive, Server } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function DatabaseStats() {

  const {t} = useLanguage()

  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <Database className="w-6 h-6 text-purple-400" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">{t.ecommerce.databasestats.title}</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.ecommerce.databasestats.items.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <stat.icon className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">{stat.title}</h3>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.usage}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-purple-200/70">{stat.usage}% used</span>
                <span className="text-purple-200/70">{stat.total} total</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

