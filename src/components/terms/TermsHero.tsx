"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { FileText, Scale } from "lucide-react"

export function TermsHero() {
  const { t } = useLanguage()

  const termsContent = t.terms.termshero

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-purple-500/10 bg-purple-500/5 px-3 py-1 text-xs sm:text-sm text-purple-200 backdrop-blur-sm"
          >
            <Scale className="h-4 w-4 mr-2" />
            {termsContent.subtitle}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter"
          >
            {termsContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            {termsContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-zinc-500"
          >
            <FileText className="h-4 w-4" />
            {termsContent.lastUpdated}
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
      </div>
    </section>
  )
}
