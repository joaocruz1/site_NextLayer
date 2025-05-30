"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Head from "next/head"
import { Header } from "@/components/Header"
import { ParallaxSection } from "@/components/shared/parallax-section"
import { HeroBanner } from "@/components/e-commerce/HeroBanner"
import { MarketplaceIntegrations } from "@/components/e-commerce/MarketingplaceIntegrations"
import { DashboardPreview } from "@/components/e-commerce/DashboardPreview"
import { FeatureHighlights } from "@/components/e-commerce/FeaturesHighlights"
import { AnalyticsSection } from "@/components/e-commerce/AnalyticsSection"
import { EmployeeManagement } from "@/components/e-commerce/Employee-Management"
import { TestimonialsCarousel } from "@/components/e-commerce/TestimonialsSection"
import Footer from "@/components/Footer"

export default function ECommercePage() {
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
        <title>NextLayer | Ecommerce System</title>
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
          <main className="pt-16 md:pt-24 space-y-16 md:space-y-32">
            <HeroBanner />

            <ParallaxSection>
              <MarketplaceIntegrations />
            </ParallaxSection>

            <ParallaxSection>
              <DashboardPreview />
            </ParallaxSection>

            <ParallaxSection>
              <FeatureHighlights />
            </ParallaxSection>

            <ParallaxSection>
              <AnalyticsSection />
            </ParallaxSection>

            <ParallaxSection>
              <EmployeeManagement />
            </ParallaxSection>

            <ParallaxSection>
              <TestimonialsCarousel />
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

