"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Globe,} from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function MarketplaceIntegrations() {
  const { t } = useLanguage()
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t.ecommerce.integrations.title}</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-sm sm:text-base">
            {t.ecommerce.integrations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Marketplace visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-purple-500/20 aspect-square bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent" />

              {/* Central platform */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 flex items-center justify-center z-20">
                <div className="text-center">
                  <Globe className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <h3 className="text-white font-semibold">Sua Empresa</h3>
                  <p className="text-purple-200/70 text-xs">Controle Central</p>
                </div>
              </div>

              {/* Marketplace connections */}
              {t.ecommerce.integrations.itemsmarketingplace.map((marketplace, index) => {
                const angle = index * (360 / t.ecommerce.integrations.itemsmarketingplace.length) * (Math.PI / 180)
                const x = Math.cos(angle) * 120 + 150
                const y = Math.sin(angle) * 120 + 150

                return (
                  <motion.div
                    key={marketplace.name}
                    className="absolute w-24 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-purple-500/20 flex flex-col items-center justify-center"
                    style={{ left: x - 12, top: y - 12 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-12 h-12 mb-2">
                      <Image
                        src={marketplace.logo || "/placeholder.svg?height=48&width=48"}
                        alt={marketplace.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-white text-xs font-medium">{marketplace.name}</span>

                    {/* Connection line */}
                    <svg
                      className="absolute top-1/2 left-1/2 -z-10"
                      width="150"
                      height="150"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI)}deg)`,
                      }}
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="120"
                        y2="0"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        strokeOpacity="0.5"
                      />

                      {/* Animated data flow */}
                      <motion.circle
                        cx="60"
                        cy="0"
                        r="3"
                        fill="#8b5cf6"
                        animate={{
                          cx: [0, 120, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          delay: index * 0.5,
                        }}
                      />
                    </svg>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Integration features */}
          <div className="space-y-6">
            {t.ecommerce.integrations.itemsfeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-purple-500/10"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <feature.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-purple-200/70 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="p-1 rounded-full bg-purple-500/20 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      </div>
                      <span className="text-purple-200/90 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


