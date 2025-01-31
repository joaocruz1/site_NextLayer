"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container px-4 sm:px-6 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-purple-500/10 bg-purple-500/5 px-3 py-1 text-xs sm:text-sm text-purple-200 backdrop-blur-sm"
            >
              Welcome to NextLayer Studio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
            >
              <span className="block text-white mb-4">Crafting Digital</span>
              <span className="block bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent pb-4">
                Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-purple-200/70"
            >
              We create exceptional software solutions that transform businesses. From concept to deployment, we bring
              your digital vision to life with cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/start-project" className="group relative inline-flex items-center justify-center">
                <motion.div
                  className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-purple-950/50 backdrop-blur-sm rounded-full shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                  <motion.span
                    className="absolute -bottom-8 sm:-bottom-10 text-purple-300/70 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: -5 }}
                    whileHover={{ y: 0 }}
                  >
                    Free consultation
                  </motion.span>
                </motion.div>
              </Link>
              <Link href="/portfolio" className="group relative inline-flex items-center justify-center">
                <motion.div
                  className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-400/20 to-purple-600/20 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-purple-200 border border-purple-500/10 rounded-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Work
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 sm:gap-8 pt-12 sm:pt-16"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "10+", label: "Team Members" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="relative group"
                  whileHover={{ y: -5 }}
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
                    transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="text-xs sm:text-sm text-purple-300/60 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-square lg:aspect-[4/3] xl:aspect-[3/2]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative h-full w-full rounded-3xl border border-purple-200/10 bg-purple-500/[0.02] overflow-hidden">
              {/* Abstract Geometric Pattern */}
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="relative aspect-square rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/20" />
                    <motion.div
                      className="absolute inset-0 bg-purple-500/10"
                      animate={{
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`float-${i}`}
                  className="absolute w-4 h-4 rounded-full bg-purple-400/30"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    y: [0, -100, 0],
                    x: Math.sin(i) * 30,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${20 + i * 10}%`,
                    bottom: "10%",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

