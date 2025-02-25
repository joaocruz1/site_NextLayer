"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { AlertCircle } from "lucide-react"

interface ProjectType {
  icon: LucideIcon
  title: string
  description: string
  examples: string[]
}

interface ProjectTypeSelectorProps {
  options: ProjectType[]
  selectedType: string
  onSelect: (type: string) => void
  error?: string
}

export function ProjectTypeSelector({ options, selectedType, onSelect, error }: ProjectTypeSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-6 sm:grid-cols-3">
        {options.map((option) => (
          <motion.button
            key={option.title}
            onClick={() => onSelect(option.title)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-6 rounded-xl border ${
              selectedType === option.title
                ? "border-purple-500 bg-purple-500/10"
                : "border-purple-200/10 bg-purple-500/[0.02]"
            } hover:border-purple-500/50 transition-colors text-left group`}
          >
            <option.icon className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
            <p className="text-sm text-zinc-400 mb-4">{option.description}</p>
            <div className="space-y-1">
              {option.examples.map((example, i) => (
                <div key={i} className="text-xs text-zinc-500">
                  • {example}
                </div>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
      {error && (
        <div className="text-red-500 text-sm flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}
    </div>
  )
}

