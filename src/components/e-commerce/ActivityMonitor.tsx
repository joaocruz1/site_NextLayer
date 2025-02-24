"use client"

import { motion } from "framer-motion"
import { Activity, AlertCircle, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function ActivityMonitor() {

  const {t} = useLanguage()

  return (
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <Activity className="w-6 h-6 text-purple-400" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">{t.ecommerce.activitymonitor.title}</h2>
      </motion.div>

      <div className="space-y-4">
        {t.ecommerce.activitymonitor.items.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-500/10"
          >
            <div className="flex items-center gap-4">
              {activity.status === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              ) : (
                <AlertCircle className="w-5 h-5 text-yellow-400" />
              )}
              <div>
                <p className="text-white">{activity.message}</p>
                <p className="text-sm text-purple-200/50">{activity.timestamp}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


