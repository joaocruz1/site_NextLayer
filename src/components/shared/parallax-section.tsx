"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useParallaxScroll } from "@/lib/hooks/use-parallax-scroll"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  delay?: number
}

export function ParallaxSection({ children, className = "", reverse = false, delay = 0 }: ParallaxSectionProps) {
  const { elementRef, y, opacity, scale } = useParallaxScroll({
    outputRange: [-30, 30], // Reduced parallax effect for mobile
    reverse,
  })

  return (
    <motion.div
      ref={elementRef}
      style={{ y, opacity, scale }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

