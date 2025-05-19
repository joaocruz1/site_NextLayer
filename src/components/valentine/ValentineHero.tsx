"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"

export function ValentineHero() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-pink-500/10 bg-pink-500/5 px-3 py-1 text-xs sm:text-sm text-pink-200 backdrop-blur-sm"
        >
          <Heart className="h-4 w-4 mr-2" />
          <span>AI-Powered Valentine's Day Card Generator</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter"
        >
          <span className="block text-white mb-4">Transform Your</span>
          <span className="block bg-gradient-to-r from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent pb-4">
            Love Story into Art
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto"
        >
          Upload your favorite couple photo, add your names, and our AI will transform it into a beautiful Valentine's
          Day card in your chosen style. Perfect for sharing with your special someone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-sm text-pink-300"
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
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
