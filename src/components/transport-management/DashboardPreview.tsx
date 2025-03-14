"use client"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export function DashboardPreview() {
  const { t } = useLanguage()
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t.transport.dashboard.title}</h2>
        <p className="text-purple-200/70 max-w-2xl mx-auto">
          {t.transport.dashboard.subtitle}
        </p>
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent" />
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Transport Management Dashboard"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

