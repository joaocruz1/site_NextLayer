"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const processes = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business needs and objectives.",
    details: ["Requirements Analysis", "Market Research", "Technical Planning"],
  },
  {
    step: "02",
    title: "Design",
    description: "Creating intuitive interfaces and robust architecture.",
    details: ["UI/UX Design", "System Architecture", "Prototype Development"],
  },
  {
    step: "03",
    title: "Development",
    description: "Building your solution with clean, efficient code.",
    details: ["Agile Development", "Code Reviews", "Quality Assurance"],
  },
  {
    step: "04",
    title: "Deployment",
    description: "Launching your project with comprehensive testing.",
    details: ["Testing & QA", "Performance Optimization", "Continuous Support"],
  },
]

const ProcessCard = ({ process, index }: { process: (typeof processes)[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="relative">
      <div className="relative group">
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />

        <div className="relative p-4 sm:p-6 rounded-xl bg-zinc-900/90 border border-zinc-800 transition-colors duration-300 group-hover:border-zinc-700">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-start">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-lg sm:text-xl font-bold text-white">{process.step}</span>
              </motion.div>
              <motion.div
                className="hidden sm:block w-px h-16 sm:h-24 bg-gradient-to-b from-white/20 to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: 64 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{process.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300">{process.description}</p>
            </div>

            <ul className="space-y-2">
              {process.details.map((detail, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white/70 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {detail}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const ProcessSection = () => {
  return (
    <section className="relative py-12 sm:py-24 lg:py-32 overflow-hidden" id="process">
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
              How We Work
            </motion.div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">Our Development Process</h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto px-4 sm:px-0">
              A streamlined approach to turning your ideas into reality.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {processes.map((process, index) => (
            <ProcessCard key={process.step} process={process} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>
    </section>
  )
}

