"use client"

import { Clock, Users, CheckCircle } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Header } from "@/components/Header"
import { StatsGrid } from "@/components/ui/stats-grid"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"
import { InteractiveGlobe } from "@/components/contact/InteractiveGlobe"
import { FaqSection } from "@/components/contact/FaqSection"
import { NewsletterSection } from "@/components/contact/NewsLetterSection"
import { SocialLinks } from "@/components/contact/SocialLinks"
import { ChatPreview } from "@/components/contact/ChatPreview"

const stats = [
  { icon: Clock, value: "2h", label: "Average Response Time" },
  { icon: Users, value: "98%", label: "Customer Satisfaction" },
  { icon: CheckCircle, value: "24/7", label: "Support Available" },
]

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#0D0620]">
      <AnimatedBackground />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container px-4 md:px-6">
          <Header/>

          <StatsGrid stats={stats} />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
            <ContactForm />
            <ContactInfo />
          </div>

          <div className="mt-20">
            <InteractiveGlobe />
          </div>

          <div className="mt-20">
            <FaqSection />
          </div>

          <div className="mt-20">
            <SocialLinks />
          </div>

          <div className="mt-20">
            <NewsletterSection />
          </div>
        </div>
      </div>

      <ChatPreview />
    </div>
  )
}

