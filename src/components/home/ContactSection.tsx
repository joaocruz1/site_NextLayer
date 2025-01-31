"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone } from "lucide-react"

export function ContactSection() {
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
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Let's Build Something Amazing Together</h2>
            <p className="text-zinc-400 md:text-lg">
              Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon as
              possible.
            </p>

            <div className="grid gap-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+1 (234) 567-8901",
                  href: "tel:+12345678901",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "hello@nextlayer.com",
                  href: "mailto:hello@nextlayer.com",
                },
                {
                  icon: MessageSquare,
                  title: "Live Chat",
                  value: "Available 24/7",
                  href: "#",
                },
              ].map((item, i) => (
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
                <h3 className="text-xl font-semibold">Send us a message</h3>
                <p className="text-sm text-zinc-400">Fill out the form below and we'll get back to you shortly.</p>
              </div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-200">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="bg-purple-500/[0.02] border-purple-200/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-200">
                      Email
                    </label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      className="bg-purple-500/[0.02] border-purple-200/10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-200">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[150px] bg-purple-500/[0.02] border-purple-200/10"
                  />
                </div>
                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

