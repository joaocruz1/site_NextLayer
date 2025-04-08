"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"


export function TermsContent() {
  const { t } = useLanguage()

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {t.terms.termscontent.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <section.icon className="h-5 w-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
              </div>

              <div className="space-y-6 text-zinc-300">
                {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                    {'subtitle' in item && <h3 className="text-lg font-semibold text-white">{item.subtitle}</h3>}
                    <p className="text-zinc-400 leading-relaxed">{item.text}</p>
                    </div>
                ))}
              </div>

              {sectionIndex < t.terms.termscontent.length - 1 && <div className="mt-10 pt-4 border-b border-purple-500/10" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
