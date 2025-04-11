"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import {ArrowRight, Sparkles } from "lucide-react"

export function LinkTreeLinks() {
  const { t } = useLanguage()
  const linksContent = t.links.links

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="space-y-4"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="text-center text-lg font-medium mb-8"
      >
        <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
          {t.links.explore}
        </span>
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {linksContent.map((link, i) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.3 + i * 0.1 }}
          >
            <Link href={link.url} className="block group">
              <div className="relative overflow-hidden rounded-xl">
                {/* Gradient border */}
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl p-[1px]"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${link.color.replace("from-", "").replace("to-", "")})`,
                  }}
                />

                {/* Main content */}
                <div className="relative p-4 bg-purple-950/30 backdrop-blur-sm border border-purple-300/10 rounded-xl group-hover:bg-purple-900/40 transition-all duration-300">
                  <div className="flex items-center">
                    <div
                      className="mr-4 p-2 rounded-lg bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{
                        backgroundImage: `linear-gradient(to bottom right, ${link.color.replace("from-", "").replace("to-", "")})`,
                      }}
                    >
                      <link.icon className="h-5 w-5 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium text-white group-hover:text-purple-200 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        {link.description}
                      </p>
                    </div>

                    <div className="ml-2">
                      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <ArrowRight className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="absolute top-1/2 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      rotate: [0, 20, 0, -20, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="h-4 w-4 text-purple-300/50" />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
