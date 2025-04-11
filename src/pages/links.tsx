"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"
import { LinkTreeProfile } from "@/components/links/LinkTreeProfile"
import { LinkTreeLinks } from "@/components/links/LinkTreeLinks"
import { LinkTreeSocial } from "@/components/links/LinkTreeSocial"
import { useLanguage } from "@/context/LanguageContext"

export default function LinkTreePage() {
  const {t} = useLanguage()  
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <>
      <Head>
        <title>{t.links.title}</title>
      </Head>
      <div ref={containerRef} className="relative min-h-screen bg-[#0D0620]">
        <motion.div
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />

          {/* Floating orbs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-b from-purple-500/[0.05] to-transparent blur-3xl"
              animate={{
                x: ["0%", "100%", "0%"],
                y: ["0%", "100%", "0%"],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: `${15 * i}%`,
                top: `${15 * i}%`,
              }}
            />
          ))}

          {/* Enhanced purple particle effects */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-purple-400/30"
              animate={{
                y: [0, -1000],
                x: Math.sin(i) * 200,
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: "100%",
                filter: "blur(1px)",
              }}
            />
          ))}

          {/* Glowing lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px w-[300px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              animate={{
                x: ["-100%", "200%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 2,
                ease: "linear",
              }}
              style={{
                top: `${20 + i * 15}%`,
                left: "0%",
                transform: `rotate(${30 + i * 15}deg)`,
              }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main className="pt-20 pb-20">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
              <LinkTreeProfile />
              <LinkTreeSocial />
              <div className="mt-16">
                <LinkTreeLinks />
              </div>
            </div>
          </main>
          <Footer />
        </div>

        {/* Enhanced noise texture overlay with purple tint */}
        <div
          className="fixed inset-0 pointer-events-none opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")',
            mask: "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)",
            backgroundColor: "rgba(139, 92, 246, 0.05)",
          }}
        />

        {/* Enhanced purple glow effects */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </>
  )
}
