"use client"

import { motion } from "framer-motion"
import { Egg, Sparkles } from "lucide-react"

export function EasterHero() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-purple-500/10 bg-purple-500/5 px-3 py-1 text-xs sm:text-sm text-purple-200 backdrop-blur-sm"
        >
          <Egg className="h-4 w-4 mr-2" />
          <span>AI-Powered Easter Card Generator</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter"
        >
          <span className="block text-white mb-4">Create Magical</span>
          <span className="block bg-gradient-to-r from-pink-300 via-purple-400 to-yellow-300 bg-clip-text text-transparent pb-4">
            Easter Cards with AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto"
        >
          Enter your personalized Easter message and our AI will generate a beautiful, unique Easter card that you can
          download and share with your loved ones.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm text-purple-300"
        >
          <Sparkles className="h-4 w-4" />
          <span>Powered by advanced AI image generation</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 flex justify-center"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
