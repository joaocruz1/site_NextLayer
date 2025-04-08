"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export function AboutSection() {
  const {t} = useLanguage()
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-purple-200/10 bg-purple-500/5 px-3 py-1 text-sm text-purple-200">
              {t.home.about.header}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">{t.home.about.title}</h2>
            <p className="text-zinc-400 md:text-lg">
              {t.home.about.description}
            </p>
            <ul className="grid gap-4">
              {t.home.about.items.map(
                (item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <svg
                      className=" h-5 w-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-zinc-300">{item}</span>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative h-full w-full rounded-3xl border border-purple-200/10 bg-purple-500/[0.02] overflow-hidden">
              <Image src="/about.png?height=600&width=600" alt="Team at work" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

