"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function BenefitsSection() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Our System</h2>
        <p className="text-purple-200/70 max-w-2xl mx-auto">Benefits that make our solution stand out</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div key={benefit.title} whileHover={{ x: 5 }} className="flex gap-4 items-start">
            <div className="p-2 rounded-lg bg-purple-500/10 mt-1">
              <CheckCircle className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-purple-200/70">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const benefits = [
  {
    title: "Cost Reduction",
    description: "Reduce transportation costs through optimized routes and better vehicle utilization",
  },
  {
    title: "Improved Employee Satisfaction",
    description: "Reliable transportation with minimal waiting times improves employee morale",
  },
  {
    title: "Environmental Impact",
    description: "Reduce carbon footprint with optimized routes and reduced fuel consumption",
  },
  {
    title: "Enhanced Safety",
    description: "Improved monitoring and verification ensures employee safety during transit",
  },
  {
    title: "Time Savings",
    description: "Automated scheduling saves administrative time and reduces manual errors",
  },
  {
    title: "Scalability",
    description: "Easily scale your transportation system as your workforce grows",
  },
]

