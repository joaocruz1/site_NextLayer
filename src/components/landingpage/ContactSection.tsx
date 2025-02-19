"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/context/LanguageContext"

export function ContactSection() {

  const { t } = useLanguage()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [feedback, setFeedback] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      })
      if (!res.ok) {
        throw new Error("Erro ao enviar e-mail")
      }
      setFeedback("Mensagem enviada. Retornaremos em breve.")
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error(error)
      setFeedback("Ocorreu um erro. Tente novamente.")
    }
    setLoading(false)
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-purple-200/10 bg-purple-500/5 px-3 py-1 text-sm text-purple-200">
              {t.landing.contact.header}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              {t.landing.contact.title}
            </h2>
            <p className="text-zinc-400 md:text-lg">
              {t.landing.contact.description}
            </p>

            <div className="grid gap-6">
              {t.landing.contact.items.map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-purple-200/10 bg-purple-500/[0.02] hover:bg-purple-500/[0.04] transition-colors"
                >
                  <item.icon className="h-6 w-6 text-purple-400" />
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-zinc-400">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative space-y-6 p-6 sm:p-8 rounded-3xl border border-purple-200/10 bg-purple-500/[0.02]">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  {t.landing.contact.send.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  {t.landing.contact.send.subtitle}
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-200">
                      {t.landing.contact.form.name}
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="bg-purple-500/[0.02] border-purple-200/10"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-200">
                     {t.landing.contact.form.email}
                    </label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      className="bg-purple-500/[0.02] border-purple-200/10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-200">
                    {t.landing.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px] bg-purple-500/[0.02] border-purple-200/10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button size="lg" type="submit" className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : t.landing.contact.form.submit}
                </Button>
              </form>
              {feedback && (
                <p className="mt-4 text-sm text-green-400">{feedback}</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
