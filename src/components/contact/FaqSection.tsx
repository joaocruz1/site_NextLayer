"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, and custom software solutions. Our team specializes in creating modern, scalable, and user-friendly digital experiences.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity and scope. A typical web project can take 6-12 weeks, while more complex applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our development process follows an agile methodology with regular client check-ins. We begin with discovery and planning, move through design and development phases, and finish with testing and deployment. You'll be involved every step of the way.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer various support and maintenance packages to ensure your project continues to run smoothly after launch. This includes regular updates, security patches, and technical support.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern technologies including React, Next.js, Node.js, and other cutting-edge tools. Our stack is chosen based on project requirements to ensure the best possible performance and scalability.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
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

