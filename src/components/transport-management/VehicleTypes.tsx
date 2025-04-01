"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

export function VehicleTypes() {
  const { t } = useLanguage()
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t.transport.vehicle.title}</h2>
        <p className="text-purple-200/70 max-w-2xl mx-auto">
         {t.transport.vehicle.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.transport.vehicle.items.map((vehicle, _index) => (
          <motion.div
            key={vehicle.title}
            whileHover={{ y: -5 }}
            className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-purple-500/10">
                <vehicle.icon className="w-12 h-12 text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{vehicle.title}</h3>
            <p className="text-purple-200/70">{vehicle.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}



