"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"


export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const {t} = useLanguage()
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {t.contact.faqsection.items.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-purple-200/10 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-purple-500/[0.04] transition-colors"
            >
              <span className="font-medium text-white">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-purple-400" />
              ) : (
                <Plus className="w-5 h-5 text-purple-400" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 text-zinc-400 text-sm border-t border-purple-200/10">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

