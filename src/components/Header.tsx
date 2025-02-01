"use client"

import type React from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.97])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 12])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: "Solutions", href: "solutions" },
    { name: "Process", href: "process" },
    { name: "Portfolio", href: "portfolio" },
  ]

  return (
    <motion.header
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#0D0620]/80 shadow-lg shadow-purple-900/20" : "bg-transparent"
      }`}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-50"
          >
            <Link
              href="/"
              className="group flex items-center gap-2 sm:gap-3"
              onMouseEnter={() => setIsHovered("logo")}
              onMouseLeave={() => setIsHovered(null)}
            >
              <motion.div
                className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-purple-600/5" />
                <div className="absolute inset-[2px] rounded-lg bg-[#0D0620]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-purple-400 font-bold">N</span>
                </div>
              </motion.div>
              <div className="relative">
                <motion.span
                  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  NextLayer
                </motion.span>
                <AnimatePresence>
                  {isHovered === "logo" && (
                    <motion.span
                      className="absolute -bottom-4 left-0 text-xs sm:text-sm text-purple-400/70"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Software Studio
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-12">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsHovered(item.name)}
                  onMouseLeave={() => setIsHovered(null)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="text-purple-200/70 hover:text-purple-300 transition-colors duration-300 py-2 block"
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-purple-400/60 to-purple-600/0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered === item.name ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/contact" className="relative inline-flex items-center justify-center">
              <motion.div
                className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-400/80 via-purple-500/50 to-purple-600/80 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-purple-200 rounded-full border border-purple-500/10 bg-purple-900/50 hover:bg-purple-800/50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.div>
            </Link>
            <Link href="/start-project" className="group relative inline-flex items-center justify-center">
              <motion.div
                className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-400/80 to-purple-600/70 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                whileHover={{ scale: 1.05 }}
              />
              <motion.div
                className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-[#0D0620] bg-purple-400 rounded-full shadow-2xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Project
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-50 p-2 text-purple-200 hover:text-purple-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 bg-[#0D0620]/95 backdrop-blur-lg md:hidden"
              >
                <motion.nav
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 20 }}
                  className="fixed inset-0 z-40"
                >
                  <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="text-2xl font-medium text-purple-200 hover:text-purple-300 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                      className="flex flex-col items-center gap-4 pt-8"
                    >
                      <Link
                        href="/contact"
                        className="w-full px-8 py-3 text-center text-lg font-medium text-purple-200 rounded-full border border-purple-500/10 bg-purple-900/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                      <Link
                        href="/start-project"
                        className="w-full px-8 py-3 text-center text-lg font-medium text-[#0D0620] bg-purple-400 rounded-full shadow-xl"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Start Project
                      </Link>
                    </motion.div>
                  </div>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}

