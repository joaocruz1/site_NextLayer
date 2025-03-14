"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"


export function DashboardPreview() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  return (
    <div ref={containerRef} className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t.ecommerce.dashboard.title}</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-sm sm:text-base">
            {t.ecommerce.dashboard.subtitle}
          </p>
        </div>

        <motion.div style={{ opacity, y }} className="space-y-8">
          {/* Dashboard preview */}
          <div className="relative rounded-xl overflow-hidden border border-purple-500/20 bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent" />
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Dashboard de Controle de Marketplace"
              width={1200}
              height={600}
              className="w-full h-auto"
            />

            {/* Animated highlights */}
            <div className="absolute top-[15%] left-[20%] w-32 h-20 border-2 border-purple-500 rounded-lg animate-pulse opacity-70"></div>
            <div
              className="absolute top-[40%] right-[25%] w-40 h-24 border-2 border-purple-500 rounded-lg animate-pulse opacity-70"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Dashboard stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {t.ecommerce.dashboard.itemsstats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-purple-500/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <stat.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div
                    className={`flex items-center px-2 py-1 rounded-full text-xs ${
                      stat.trend > 0 ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {stat.trend > 0 ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {Math.abs(stat.trend)}%
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-purple-200/70 text-sm">{stat.title}</p>
                <div className="mt-3 flex items-center text-xs text-purple-200/50">
                  <span>vs. período anterior</span>
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dashboard features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.ecommerce.dashboard.itemsfeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-purple-500/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <feature.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-purple-200/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}


