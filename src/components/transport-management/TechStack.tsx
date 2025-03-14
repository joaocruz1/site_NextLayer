"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export function TechStack() {
  const { t } = useLanguage()
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t.transport.techstack.title}</h2>
        <p className="text-purple-200/70 max-w-2xl mx-auto">{t.transport.techstack.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 border border-purple-500/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Python"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold text-white">{t.transport.techstack.items.container1.title}</h3>
              <p className="text-purple-200/70">{t.transport.techstack.items.container1.subtitle}</p>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>{t.transport.techstack.items.container1.item1}</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>{t.transport.techstack.items.container1.item2}</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>{t.transport.techstack.items.container1.item3}</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>{t.transport.techstack.items.container1.item4}</span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 border border-purple-500/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="React"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold text-white">{t.transport.techstack.items.container2.title}</h3>
              <p className="text-purple-200/70">{t.transport.techstack.items.container2.subtitle}</p>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>{t.transport.techstack.items.container2.item1}</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>{t.transport.techstack.items.container2.item2}</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>{t.transport.techstack.items.container2.item3}</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>{t.transport.techstack.items.container2.item4}</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

