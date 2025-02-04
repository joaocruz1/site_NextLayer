"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { Globe } from "lucide-react"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed bottom-8 right-8 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-200 hover:bg-purple-500/20 transition-colors"
        onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{language === "en" ? "PT" : "EN"}</span>
      </motion.button>
    </motion.div>
  )
}

