"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Step {
  id: string
  title: string
  icon: LucideIcon
}

interface ProgressBarProps {
  steps: Step[]
  currentStep: number
  progressPercentage: number
}

export function ProgressBar({ steps, currentStep, progressPercentage }: ProgressBarProps) {
  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-200 bg-purple-500/10">
              {steps[currentStep].title}
            </span>
          </div>
          <div className="text-right">
            {/* Arredondando a porcentagem */}
            <span className="text-xs font-semibold inline-block text-purple-200">
              {Math.round(progressPercentage)}%
            </span>
          </div>
        </div>
        <div className="flex h-2 mb-4 overflow-hidden rounded-full bg-purple-500/10">
          <motion.div
            className="bg-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      <div className="flex justify-between">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center">
            <motion.div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                i <= currentStep
                  ? "border-purple-500 bg-purple-500/20 text-purple-400"
                  : "border-zinc-700 text-zinc-600"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <step.icon className="w-5 h-5" />
            </motion.div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 w-24 mx-2 ${i < currentStep ? "bg-purple-500" : "bg-zinc-700"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}