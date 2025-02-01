"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const caseStudies = [
  {
    title: "E-commerce Platform",
    description: "Built a scalable e-commerce solution handling millions of transactions",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application",
    category: "Mobile Development",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "AI-Powered Analytics",
    description: "Advanced analytics platform with machine learning capabilities",
    category: "AI & Analytics",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const CaseStudies = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-[600px] mx-auto"
          >
            Explore some of our successful project implementations
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <Link href="/portfolio" className="block">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                </div>
                <div className="relative mt-4 space-y-2">
                  <div className="text-sm text-purple-400">{study.category}</div>
                  <h3 className="text-xl font-semibold">{study.title}</h3>
                  <p className="text-sm text-zinc-400">{study.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-purple-200 rounded-full border border-purple-500/10 bg-purple-500/[0.02] hover:bg-purple-500/[0.04] transition-colors"
          >
            View All Case Studies
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies

