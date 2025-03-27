"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"


export function ContactInfo() {
  const {t} = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-8"
    >
      <div className="grid gap-6">
        {t.contact.contactinfoitems.map((item, i) => (
          <motion.a
            key={item.title}
            href={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-4 p-4 rounded-lg border border-purple-200/10 bg-purple-500/[0.02] hover:bg-purple-500/[0.04] transition-all"
          >
            <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} bg-opacity-10`}>
              <item.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-medium text-white group-hover:text-purple-400 transition-colors">{item.title}</div>
              <div className="text-sm text-zinc-400">{item.value}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

