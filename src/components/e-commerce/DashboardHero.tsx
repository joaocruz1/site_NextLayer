"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Users, ShoppingCart, Database, ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function DashboardHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const {t} = useLanguage()

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section ref={ref} className="min-h-[90vh] flex items-center justify-center relative py-25">
      {/* Hero Content */}
      <motion.div style={{ y, opacity, scale }} className="text-center space-y-16 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-16"
        >
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <motion.span
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5 }}
                className="px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm md:text-base backdrop-blur-sm"
              >
                {t.ecommerce.dashboardhero.hero}
              </motion.span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t.ecommerce.dashboardhero.title}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                {" "}
                System
              </span>
            </h1>
            <p className="text-purple-200/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {t.ecommerce.dashboardhero.description}
            </p>
          </div>

        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {t.ecommerce.dashboardhero.items.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/50 to-purple-700/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative h-full bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 md:p-8 border border-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-purple-200/70 text-sm md:text-base">{stat.title}</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-purple-500/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: stat.progress + "%" }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


