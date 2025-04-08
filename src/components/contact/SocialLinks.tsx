"use client"

import { motion } from "framer-motion"
import { Twitter, GitlabIcon as GitHub, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/nextlayerdev",
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub",
    icon: GitHub,
    href: "https://github.com/joaocruz1",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    href: "https://linkedin.com/company/nextlayer",
    color: "hover:text-blue-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/nextlayerdev_/",
    color: "hover:text-pink-500",
  },
]

export function SocialLinks() {
  const {t} = useLanguage()
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-white mb-8">{t.contact.sociallinks.title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col items-center gap-4 p-6 rounded-lg border border-purple-200/10 bg-purple-500/[0.02] hover:bg-purple-500/[0.04] transition-colors ${social.color} group`}
          >
            <social.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
            <span className="text-sm text-zinc-400 group-hover:text-current">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

