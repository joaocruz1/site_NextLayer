"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Globe, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@nextlayer.dev",
    href: "mailto:hello@nextlayer.dev",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "123 Innovation Street, Tech City, TC 12345",
    href: "https://maps.google.com",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Global Support",
    value: "24/7 Available Worldwide",
    href: "#support",
    color: "from-orange-500 to-yellow-500",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-8"
    >
      <div className="grid gap-6">
        {contactInfo.map((item, i) => (
          <motion.a
            key={item.title}
            href={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-4 p-4 rounded-lg border border-purple-200/10 bg-purple-500/[0.02] hover:bg-purple-500/[0.04] transition-all"
          >
            <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} bg-opacity-10`}>
              <item.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-medium text-white group-hover:text-purple-400 transition-colors">{item.title}</div>
              <div className="text-sm text-zinc-400">{item.value}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

