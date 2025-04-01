"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "@/context/LanguageContext"

export function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  const {t} = useLanguage()
  const CurrentIcon = t.websites.features.items[activeFeature].icon
  
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t.websites.features.title}</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto">
           {t.websites.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Left column - Feature list */}
          <div className="space-y-4">
            {t.websites.features.items.slice(0, 4).map((feature, index) => (
              <motion.div
                key={feature.title}
                whileHover={{ x: 5 }}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  activeFeature === index
                    ? "bg-purple-500/20 border border-purple-500/30"
                    : "bg-white/5 border border-transparent hover:border-purple-500/10"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${activeFeature === index ? "bg-purple-500/30" : "bg-purple-500/10"}`}
                  >
                    <feature.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle column - Feature visualization */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            <div className="w-1 bg-purple-500/30 absolute top-0 bottom-0"></div>
            <motion.div
              className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center z-10"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(139, 92, 246, 0.3)",
                  "0 0 0 10px rgba(139, 92, 246, 0)",
                  "0 0 0 0 rgba(139, 92, 246, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <CurrentIcon className="w-8 h-8 text-purple-400" />
            </motion.div>
          </div>

          {/* Right column - Feature description */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-white">{t.websites.features.items[activeFeature].title}</h3>
              <p className="text-purple-200/70">{t.websites.features.items[activeFeature].description}</p>
              <ul className="space-y-2">
                {t.websites.features.items[activeFeature].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="p-1 rounded-full bg-purple-500/20 mt-1">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                    </div>
                    <span className="text-purple-200/90 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Mobile feature selector */}
        <div className="lg:hidden mt-8 flex justify-center">
          <div className="flex space-x-2">
            {t.websites.features.items.slice(0, 4).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${activeFeature === index ? "bg-purple-500" : "bg-purple-500/30"}`}
                onClick={() => setActiveFeature(index)}
                aria-label={`Select feature ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

