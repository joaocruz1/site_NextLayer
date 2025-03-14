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
import {
  Clock,
  Map,
  Truck,
  Users,
  BarChart,
  Bell,
  Bus,
  Car,
  UserCheck,
  Route,
  FileText,
  Shield,
  Smartphone,
} from "lucide-react"
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

const vehicleTypes = [
  {
    title: "Bus Fleet",
    description: "Manage large capacity buses for employee transportation with route optimization",
    icon: Bus,
  },
  {
    title: "Van Management",
    description: "Coordinate medium-sized vans for flexible group transportation needs",
    icon: Truck,
  },
  {
    title: "Car Service",
    description: "Schedule individual cars for executives and special transportation requirements",
    icon: Car,
  },
]

const features = [
  {
    title: "Employee Scheduling",
    description: "Assign employees to specific vehicles and routes based on their location and schedule",
    icon: UserCheck,
  },
  {
    title: "Route Planning",
    description: "Optimize routes to minimize travel time and maximize efficiency",
    icon: Route,
  },
  {
    title: "Attendance Tracking",
    description: "Monitor employee pickup and drop-off with digital check-in",
    icon: FileText,
  },
  {
    title: "Real-time Tracking",
    description: "Track all vehicles in real-time with GPS integration",
    icon: Map,
  },
  {
    title: "Driver Management",
    description: "Assign and monitor drivers with complete profile management",
    icon: Users,
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive reporting on utilization, costs, and efficiency",
    icon: BarChart,
  },
  {
    title: "Mobile App",
    description: "Employee mobile app for schedules, notifications, and check-ins",
    icon: Smartphone,
  },
  {
    title: "Security Features",
    description: "Ensure employee safety with verification and monitoring",
    icon: Shield,
  },
  {
    title: "Automated Notifications",
    description: "Send alerts for schedule changes, delays, or emergencies",
    icon: Bell,
  },
]

const stats = [
  {
    title: "Fuel Savings",
    value: "30%",
    icon: Truck,
  },
  {
    title: "Reduced Wait Time",
    value: "45%",
    icon: Clock,
  },
  {
    title: "Employee Satisfaction",
    value: "92%",
    icon: UserCheck,
  },
  {
    title: "Route Efficiency",
    value: "50%",
    icon: Route,
  },
]

const benefits = [
  {
    title: "Cost Reduction",
    description: "Reduce transportation costs through optimized routes and better vehicle utilization",
  },
  {
    title: "Improved Employee Satisfaction",
    description: "Reliable transportation with minimal waiting times improves employee morale",
  },
  {
    title: "Environmental Impact",
    description: "Reduce carbon footprint with optimized routes and reduced fuel consumption",
  },
  {
    title: "Enhanced Safety",
    description: "Improved monitoring and verification ensures employee safety during transit",
  },
  {
    title: "Time Savings",
    description: "Automated scheduling saves administrative time and reduces manual errors",
  },
  {
    title: "Scalability",
    description: "Easily scale your transportation system as your workforce grows",
  },
]

const testimonials = [
  {
    quote:
      "This system has transformed how we manage our employee transportation. We've reduced costs by 25% while improving employee satisfaction.",
    name: "Michael Rodriguez",
    role: "Transportation Manager, Global Tech Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The route optimization alone saved us thousands in fuel costs. The employee app makes communication seamless.",
    name: "Sarah Chen",
    role: "Operations Director, Manufacturing Co.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Managing our fleet of buses and vans was a logistical nightmare before implementing this system. Now it's all automated and efficient.",
    name: "James Wilson",
    role: "Fleet Manager, Enterprise Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

