"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"
import { ShoppingCart, BarChart, Users, Package, ArrowRight } from "lucide-react"

export function HeroBanner() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  // Floating elements animation
  const floatingElements = [
    { icon: ShoppingCart, delay: 0, x: -20, y: -15 },
    { icon: BarChart, delay: 0.1, x: 20, y: 20 },
    { icon: Users, delay: 0.2, x: -15, y: 25 },
    { icon: Package, delay: 0.3, x: 25, y: -10 },
  ]

  return (
    <div ref={ref} className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden px-4 md:px-0">
      {/* Animated code blocks in background */}

      {/* Floating elements */}
      {floatingElements.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            x: [item.x, item.x + 10, item.x],
            y: [item.y, item.y - 10, item.y],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            left: `${30 + index * 15}%`,
            top: `${20 + index * 12}%`,
          }}
        >
          <div className="p-4 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-500/30">
            <item.icon className="w-8 h-8 text-purple-400" />
          </div>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div style={{ y }} className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <span className="px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs md:text-sm lg:text-base">
              {t.ecommerce.herobanner.hero}
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {t.ecommerce.herobanner.title1}
            <span className="relative mx-2 md:mx-4 block sm:inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                Controle
              </span>
              <motion.span
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 bg-purple-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
            {t.ecommerce.herobanner.title2}
          </h1>

          <p className="text-purple-200/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            {t.ecommerce.herobanner.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600"
              onClick={() => {
                window.location.href = "/start-project"
              }}
            >
              Começar Agora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.ecommerce.herobanner.items.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/50 to-purple-700/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative h-full bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-purple-200/70 text-sm">{stat.title}</p>
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

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0620] to-transparent" />
    </div>
  )
}


