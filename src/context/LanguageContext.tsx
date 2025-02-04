"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { translations, type Language, type TranslationKeys } from "@/lib/i18n/translation"

type LanguageContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: TranslationKeys
  }
  
  const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
  
  export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en")
  
    const value: LanguageContextType = {
      language,
      setLanguage,
      t: translations[language],
    }
  
    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  }
  
  export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
      throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
  }
  
