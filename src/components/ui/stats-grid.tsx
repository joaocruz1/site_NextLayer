"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Stat {
  icon: LucideIcon
  value: string
  label: string
}

interface StatsGridProps {
  stats: Stat[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-xl group-hover:opacity-75 transition-opacity" />
          <div className="relative p-4 rounded-lg border border-purple-200/10 bg-purple-500/[0.02]">
            <stat.icon className="h-8 w-8 text-purple-400 mb-2" />
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-zinc-400">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

