import { LanguageProvider } from "@/context/LanguageContext"
import LanguageSelector from "@/components/LanguageSelector"
import { Inter } from "next/font/google"

import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <LanguageProvider>
          {children}
          <LanguageSelector />
        </LanguageProvider>
  )
}