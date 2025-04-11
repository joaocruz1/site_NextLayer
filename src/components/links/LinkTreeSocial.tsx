"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube, Music, Briefcase } from "lucide-react"

export function LinkTreeSocial() {

  const socials = [
    {
      name: "Instagram",
      handle: "@nextlayer",
      icon: Instagram,
      url: "https://www.instagram.com/nextlayerdev_/",
      color: "from-pink-500 via-purple-500 to-orange-400",
    },
    {
      name: "Twitter",
      handle: "@nextlayer",
      icon: Twitter,
      url: "https://x.com/nextlayerdev",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "LinkedIn",
      handle: "NextLayer Studio",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/next-layer-b2237935b/",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "TikTok",
      handle: "@nextlayer",
      icon: Music,
      url: "https://www.tiktok.com/@nextlayerdev",
      color: "from-black via-gray-800 to-gray-900",
    },
    {
      name: "YouTube",
      handle: "NextLayer Studio",
      icon: Youtube,
      url: "https://www.youtube.com/@nextlayerdev",
      color: "from-red-500 to-red-700",
    },
    {
      name: "Portfolio",
      handle: "nextlayer.com/work",
      icon: Briefcase,
      url: "/portfolio",
      color: "from-purple-500 to-purple-700",
    },
    {
      name: "GitHub",
      handle: "nextlayer",
      icon: Github,
      url: "https://github.com/NextLayerDev",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Facebook",
      handle: "NextLayer Studio",
      icon: Facebook,
      url: "https://facebook.com",
      color: "from-blue-600 to-blue-800",
    },
  ]

  const socialsContent =  socials

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-lg font-medium mb-8"
      >
        <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
          Connect with us on social media
        </span>
      </motion.h3>

      {/* Decorative elements */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
        {socialsContent.map((social, i) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.6 + i * 0.1,
            }}
            className="relative"
          >
            <Link
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
              aria-label={social.name}
            >
              {/* Main icon with glow */}
              <div className="flex flex-col items-center">
                <div className="relative mb-3">
                  {/* Background glow effect */}
                  <div
                    className={`absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.3]`}
                    style={{
                      background: `linear-gradient(to bottom right, ${social.color})`,
                    }}
                  />

                  {/* Icon container */}
                  <motion.div
                    className={`relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br ${social.color} p-4 text-white shadow-lg`}
                    whileHover={{
                      scale: 1.15,
                      rotate: [-2, 2, -2, 0],
                      transition: {
                        scale: { type: "spring", stiffness: 400, damping: 10 },
                        rotate: { duration: 0.5, ease: "easeInOut" },
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-full w-full" />
                  </motion.div>
                </div>

                {/* Social name with hover effect */}
                <motion.span className="text-sm font-medium text-white" whileHover={{ scale: 1.05 }}>
                  {social.name}
                </motion.span>

                {/* Social handle */}
                <span className="text-xs text-zinc-400 group-hover:text-purple-300 transition-colors">
                  {social.handle}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </motion.div>
  )
}
