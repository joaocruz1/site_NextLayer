"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <>
      <motion.div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />

        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
            <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
                width: `${400 + i * 100}px`,
                height: `${400 + i * 100}px`,
                background: `linear-gradient(to bottom right, ${
                i % 2 === 0 ? "rgba(139,92,246,0.05)" : "rgba(168,85,247,0.05)"
                }, transparent)`,
                left: `${20 * i}%`,
                top: `${15 * i}%`,
            }}
            animate={{
                x: ["0%", `${10 + i * 5}%`, "0%"],
                y: ["0%", `${10 + i * 5}%`, "0%"],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
                duration: 15 + i * 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
            }}
            />
        ))}

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-purple-400/30"
            animate={{
              y: [0, -1000],
              x: Math.sin(i) * 200,
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: "100%",
              filter: "blur(1px)",
            }}
          />
        ))}
      </motion.div>

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
          mask: "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)",
          backgroundColor: "rgba(139, 92, 246, 0.05)",
        }}
      />
    </>
  )
}

