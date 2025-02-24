"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Users, BarChart3, Package, Truck, CreditCard, MessageSquare, Settings } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function SystemFeatures() {

  const {t} = useLanguage()

  return (
    <section className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{t.ecommerce.systemfeatures.title}</h2>
        <p className="text-purple-200/70 text-lg md:text-xl max-w-2xl mx-auto">
          {t.ecommerce.systemfeatures.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {t.ecommerce.systemfeatures.items.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
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
    </section>
  )
}



