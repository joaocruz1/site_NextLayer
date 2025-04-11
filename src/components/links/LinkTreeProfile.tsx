"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { CheckCircle } from "lucide-react"

export function LinkTreeProfile() {
  const { t } = useLanguage()
  const profileContent = t.links.content

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center mb-8"
    >
      <div className="relative mb-6">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full opacity-70 blur-sm animate-pulse" />
        <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-white/10">
          <Image src="/nextneon.png?height=112&width=112" alt="Profile" fill className="object-cover" />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-2xl font-bold">{profileContent.name}</h1>
        {profileContent.verified && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
          >
            <CheckCircle className="h-5 w-5 text-purple-400" />
          </motion.div>
        )}
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-medium bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent mb-3"
      >
        {profileContent.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-zinc-400 text-sm max-w-md"
      >
        {profileContent.description}
      </motion.p>
    </motion.div>
  )
}
