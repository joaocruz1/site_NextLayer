"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"


export default function Footer() {
  const {t} = useLanguage()
  return (
    <footer className="relative mt-32 border-t border-zinc-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container px-4 mx-auto py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="relative w-8 h-8 rounded-lg overflow-hidden"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5" />
                <div className="absolute inset-[2px] rounded-lg bg-zinc-950" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
              </motion.div>
              <span className="text-xl font-bold text-white">NextLayer</span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-xs">
              {t.footer.title}
            </p>
            <div className="flex space-x-6">
              {t.footer.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-zinc-400 hover:text-zinc-300 transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {t.footer.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {t.footer.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {t.footer.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <p className="text-sm text-zinc-400 xl:text-center">
            &copy; {new Date().getFullYear()} NextLayer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

