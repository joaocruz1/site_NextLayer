"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Head from "next/head"
import { Header } from "@/components/Header"
import { ParallaxSection } from "@/components/shared/parallax-section"
import { HeroSection } from "@/components/transport-management/HeroSection"
import { VehicleTypes } from "@/components/transport-management/VehicleTypes"
import { DashboardPreview } from "@/components/transport-management/DashboardPreview"
import { FeaturesGrid } from "@/components/transport-management/FeaturesGrid"
import { StatsSection } from "@/components/transport-management/StatsSection"
import { BenefitsSection } from "@/components/transport-management/BenefitsSection"
import { TechStack } from "@/components/transport-management/TechStack"
import { Testimonials } from "@/components/transport-management/Testimonials"
import Footer from "@/components/Footer"

export default function TransportManagement() {
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
        <title>NextLayer | Employee Transport Management</title>
      </Head>
      <div ref={containerRef} className="relative min-h-screen bg-[#0D0620]">
        {/* Background Effects */}
        <motion.div
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />
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
                left: `${20 * i}%`,
                top: `${15 * i}%`,
              }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main className="pt-32 px-4 space-y-32 md:space-y-48 container mx-auto pb-32">
            <ParallaxSection>
              <HeroSection />
            </ParallaxSection>

            <ParallaxSection>
              <VehicleTypes />
            </ParallaxSection>

            <ParallaxSection>
              <DashboardPreview />
            </ParallaxSection>

            <ParallaxSection>
              <FeaturesGrid />
            </ParallaxSection>

            <ParallaxSection>
              <StatsSection />
            </ParallaxSection>

            <ParallaxSection>
              <BenefitsSection />
            </ParallaxSection>

            <ParallaxSection>
              <TechStack />
            </ParallaxSection>

            <ParallaxSection>
              <Testimonials />
            </ParallaxSection>
            
          </main>
          <Footer />
        </div>

        {/* Noise Overlay */}
        <div
          className="fixed inset-0 pointer-events-none opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
            mask: "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)",
            backgroundColor: "rgba(139, 92, 246, 0.05)",
          }}
        />
      </div>
    </>
  )
}



