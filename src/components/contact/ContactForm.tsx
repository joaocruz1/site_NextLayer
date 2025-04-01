"use client"

import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Send} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/context/LanguageContext"

export function ContactForm() {
  const {t} = useLanguage()
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

      if (response.ok) {
        setSubmitMessage({
          type: "success",
          text: t.contact.contactform.message.sucess,
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
          text: t.contact.contactform.message.failed,
        })
      }
    } catch {
      setSubmitMessage({
        type: "error",
        text: t.contact.contactform.message.error,
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
          <h2 className="text-xl font-semibold text-white">{t.contact.contactform.title}</h2>
          <p className="text-sm text-zinc-400">{t.contact.contactform.subtitle}</p>
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
                {t.contact.contactform.name}
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
                {t.contact.contactform.email}
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
              {t.contact.contactform.messageplaceholder}
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
                    {t.contact.contactform.sending}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    {t.contact.contactform.buttonsend}
                </>
              )}
            </span>
          </Button>
        </form>
      </div>
    </motion.div>
  )
}