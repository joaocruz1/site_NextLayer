"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/20 to-purple-700/20 border border-purple-500/10"
    >
      <div className="relative px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your E-Commerce Business?
          </h2>
          <p className="mt-4 text-lg text-purple-200/70">
            Start managing your online store more efficiently today. Try our system free for 14 days.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

