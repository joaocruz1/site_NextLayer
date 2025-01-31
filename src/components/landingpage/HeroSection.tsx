"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex items-center">
      <motion.div
        style={{ y, opacity }}
        className="relative container mx-auto px-4 sm:px-6 pt-20 sm:pt-32 pb-20 sm:pb-32"
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-white mb-2 sm:mb-4">We Build</span>
                <span className="block bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent pb-2 sm:pb-4">
                  Digital Excellence
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-purple-200/70 max-w-xl mx-auto px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Custom software solutions that transform businesses. From concept to deployment, we create exceptional
                digital experiences.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 sm:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/start-project"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto"
              >
                <motion.div
                  className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-purple-950/50 backdrop-blur-sm rounded-full shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                  <motion.span
                    className="absolute inset-x-0 -bottom-8 sm:-bottom-10 text-purple-300/70 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: -5 }}
                    whileHover={{ y: 0 }}
                  >
                    Free consultation
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-16 sm:pt-20 flex flex-wrap sm:flex-nowrap justify-center gap-8 sm:gap-16 px-4 sm:px-0"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center relative group w-full sm:w-auto"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="absolute -inset-4 rounded-lg bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="text-xs sm:text-sm text-purple-300/60 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced decorative elements with purple gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated gradient orbs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-b from-purple-500/[0.15] to-transparent rounded-full blur-3xl"
              animate={{
                y: [0, 50, 0],
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                delay: i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                left: `${25 + i * 25}%`,
                top: `${20 + i * 20}%`,
              }}
            />
          ))}

          {/* Purple sparkles - Reduced quantity for mobile */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-purple-400/60"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Glowing lines - Adjusted for mobile */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`glow-${i}`}
              className="absolute h-px w-[150px] sm:w-[300px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              animate={{
                x: ["-100%", "200%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 2,
                ease: "linear",
              }}
              style={{
                top: `${30 + i * 20}%`,
                transform: `rotate(${30 + i * 15}deg)`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

