import { LanguageProvider } from "@/context/LanguageContext"
import LanguageSelector from "@/components/LanguageSelector"


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