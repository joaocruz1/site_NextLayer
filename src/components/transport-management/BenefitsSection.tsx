"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { CheckCircle } from "lucide-react"

export function BenefitsSection() {
  const { t } = useLanguage()
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t.transport.benefits.title}</h2>
        <p className="text-purple-200/70 max-w-2xl mx-auto">{t.transport.benefits.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.transport.benefits.items.map((benefit) => (
          <motion.div key={benefit.title} whileHover={{ x: 5 }} className="flex gap-4 items-start">
            <div className="p-2 rounded-lg bg-purple-500/10 mt-1">
              <CheckCircle className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-purple-200/70">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}



