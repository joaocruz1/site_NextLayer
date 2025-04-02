"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export function StatsSection() {
  const { t } = useLanguage()
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t.transport.stats.title}</h2>
        <p className="text-purple-200/70 max-w-2xl mx-auto">
          {t.transport.stats.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.transport.stats.items.map((stat) => (
          <motion.div
            key={stat.title}
            whileHover={{ scale: 1.05 }}
            className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
            <p className="text-purple-200/70">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}



