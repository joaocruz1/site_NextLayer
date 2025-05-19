"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Header } from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"
import { ValentineHero } from "@/components/valentine/ValentineHero"
import { ValentineCardGenerator } from "@/components/valentine/ValentineCardGenerator"
import { ValentineDecoration } from "@/components/valentine/ValentineDecoration"

export default function ValentineCardPage() {
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
        <title>NextLayer | AI Valentine's Day Card Generator</title>
      </Head>
      <div ref={containerRef} className="relative min-h-screen bg-[#0D0620]">
        {/* Enhanced animated background with valentine-themed effects */}
        <motion.div
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.05)_0%,transparent_70%)]" />

          {/* Floating orbs with valentine colors */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[800px] h-[800px] rounded-full blur-3xl"
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
                left: `${25 * i}%`,
                top: `${20 * i}%`,
                background:
                  i % 3 === 0
                    ? "radial-gradient(circle, rgba(244,114,182,0.15) 0%, rgba(255,228,230,0.05) 70%)"
                    : i % 3 === 1
                      ? "radial-gradient(circle, rgba(251,113,133,0.15) 0%, rgba(244,114,182,0.05) 70%)"
                      : "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(244,114,182,0.05) 70%)",
              }}
            />
          ))}

          {/* Valentine-themed floating elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`heart-${i}`}
              className="absolute w-4 h-4 opacity-20"
              animate={{
                y: [0, -1000],
                x: Math.sin(i) * 200,
                opacity: [0, 0.2, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.8,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: "100%",
                background: `radial-gradient(circle, rgba(${190 + Math.random() * 60}, ${50 + Math.random() * 50}, ${100 + Math.random() * 50}, 0.8), rgba(${190 + Math.random() * 60}, ${50 + Math.random() * 50}, ${100 + Math.random() * 50}, 0.3))`,
                clipPath:
                  "path('M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z')",
              }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main className="pt-20 pb-20">
            <ValentineDecoration />
            <div className="container mx-auto px-4 md:px-6">
              <ValentineHero />
              <ValentineCardGenerator />
            </div>
          </main>
          <Footer />
        </div>

        {/* Enhanced noise texture overlay with pink tint */}
        <div
          className="fixed inset-0 pointer-events-none opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)" opacity="0.4"/%3E%3C/svg%3E")',
            mask: "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)",
            backgroundColor: "rgba(244, 114, 182, 0.05)",
          }}
        />

        {/* Enhanced pink glow effects */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px]"
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
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[100px]"
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
