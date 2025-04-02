"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

const ProjectCard = ({project}: {
  project: Project
  _index: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div ref={ref} style={{ y, scale }} className="relative">
      <Link href={project.link} className="block group">
        <motion.div
          className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-colors duration-300 group-hover:border-zinc-700"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
          </div>

          <div className="relative p-3 sm:p-4 space-y-2 sm:space-y-3">
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-white/90">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-white/70 group-hover:text-white transition-colors duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              View Project
              <svg
                viewBox="0 0 24 24"
                className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export const PortfolioSection = () => {
  const { t } = useLanguage()

  return (
    <section
      className="relative py-12 sm:py-24 lg:py-32 overflow-hidden"
      id="portfolio"
    >
      <div className="container px-4 sm:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl mx-auto text-center mb-8 sm:mb-16"
        >
          <motion.div className="space-y-3 sm:space-y-4">
            <motion.div
              className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs sm:text-sm text-zinc-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {t.landing.portfolio.header}
            </motion.div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
              {t.landing.portfolio.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto px-4 sm:px-0">
              {t.landing.portfolio.subtitle}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {t.landing.portfolio.items.map((project: Project, index: number) => (
            <ProjectCard key={project.title} project={project} _index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl mx-auto text-center mt-8 sm:mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-zinc-800 text-sm text-white hover:bg-zinc-800 transition-colors duration-200"
          >
            {t.landing.portfolio.view}
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>
    </section>
  )
}
