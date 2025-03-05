"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Code, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"

export function HeroBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const {t} = useLanguage()

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  // Floating elements animation
  const floatingElements = [
    { icon: Code, delay: 0, x: -20, y: -15 },
    { icon: Layers, delay: 0.1, x: 20, y: 20 },
    { icon: Zap, delay: 0.2, x: -15, y: 25 },
  ]

  return (
    <div ref={ref} className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden px-4 md:px-0">
      {/* Animated code blocks in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <pre className="text-[8px] xs:text-xs sm:text-sm text-purple-300 whitespace-pre overflow-hidden">
          {`
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Interactive Websites</h1>
          <p>Creating engaging user experiences</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveComponent;
          `}
        </pre>
      </div>

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
            left: `${30 + index * 20}%`,
            top: `${20 + index * 15}%`,
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
              {t.websites.herobanner.hero}
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {t.websites.herobanner.title1}
            <span className="relative mx-2 md:mx-4 block sm:inline-block">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
               {t.websites.herobanner.title2}
              </span>
              <motion.span
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 bg-purple-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
              {t.websites.herobanner.title3}
          </h1>

          <p className="text-purple-200/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            {t.websites.herobanner.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600"
            >
                {t.websites.herobanner.buttons.start}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-purple-500/20 hover:border-purple-500/40 bg-purple-500/10 text-purple-100"
            >
               {t.websites.herobanner.buttons.contact}
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0620] to-transparent" />
    </div>
  )
}

