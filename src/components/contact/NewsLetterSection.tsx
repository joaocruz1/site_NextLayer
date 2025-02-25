"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubscribed(true)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-12">
      <div className="relative overflow-hidden rounded-2xl border border-purple-200/10 bg-purple-500/[0.02]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent" />
        <div className="relative px-6 py-8 sm:px-12 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
            <p className="text-zinc-400 mb-6">
              Subscribe to our newsletter for the latest tech insights, project updates, and industry news.
            </p>
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 text-green-400"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Thank you for subscribing!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-purple-500/[0.02] border-purple-200/10"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="group">
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
        <Mail className="absolute right-8 bottom-8 w-24 h-24 text-purple-500/10" />
      </div>
    </motion.div>
  )
}

