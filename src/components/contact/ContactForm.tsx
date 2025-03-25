"use client"

import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const formRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: string; text: string } | null>(null)

  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "end start"],
  })

  const formOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])
  const formScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Status:', response.status) // ← Adicione isto
      const responseData = await response.json() // ← E isto
      console.log('Response:', responseData) // ← E isto

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: "Message sent successfully! I'll get back to you soon.",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitMessage({
          type: "error",
          text: "Failed to send message. Please try again later.",
        })
      }
    } catch {
      setSubmitMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitMessage(null)
      }, 5000)
    }
  }

  return (
    <motion.div ref={formRef} style={{ opacity: formOpacity, scale: formScale }} className="relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
      <div className="relative space-y-6 p-6 sm:p-8 rounded-3xl border border-purple-200/10 bg-purple-500/[0.02]">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Send us a Message</h2>
          <p className="text-sm text-zinc-400">Fill out the form below and we&apos;ll get back to you shortly.</p>
        </div>
        
        {submitMessage && (
          <div
            className={`p-4 rounded-lg ${
              submitMessage.type === "success"
                ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-200">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-purple-500/[0.02] border-purple-200/10 focus:border-purple-400/50 transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-200">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-purple-500/[0.02] border-purple-200/10 focus:border-purple-400/50 transition-colors"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-zinc-200">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="bg-purple-500/[0.02] border-purple-200/10 focus:border-purple-400/50 transition-colors"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-200">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="min-h-[150px] bg-purple-500/[0.02] border-purple-200/10 focus:border-purple-400/50 transition-colors"
              required
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full group relative overflow-hidden"
            disabled={isSubmitting}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600"
              initial={false}
              animate={{
                transform: isSubmitting ? "translateX(0%)" : "translateX(-100%)",
              }}
              transition={{ duration: 2 }}
            />
            <span className="relative flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <Send className="w-5 h-5 animate-pulse" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </span>
          </Button>
        </form>
      </div>
    </motion.div>
  )
}