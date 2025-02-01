"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const categories = ["All", "Web", "Mobile", "E-commerce", "Enterprise"]

const projects = [
  {
    title: "E-commerce Platform",
    category: "E-commerce",
    description: "A modern e-commerce platform with advanced features",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/e-commerce-platform",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile",
    description: "Secure and user-friendly mobile banking solution",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/mobile-banking",
  },
  {
    title: "Enterprise Dashboard",
    category: "Enterprise",
    description: "Comprehensive analytics and management dashboard",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/enterprise-dashboard",
  },
  {
    title: "Social Platform",
    category: "Web",
    description: "Community-driven social networking platform",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/social-platform",
  },
  {
    title: "Retail Mobile App",
    category: "Mobile",
    description: "Feature-rich retail management application",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/retail-app",
  },
  {
    title: "B2B Platform",
    category: "Enterprise",
    description: "Business-to-business trading platform",
    image: "/placeholder.svg?height=400&width=600",
    link: "/portfolio/b2b-platform",
  },
]

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-purple-500 text-white"
                  : "text-purple-200/70 hover:text-purple-200 border border-purple-500/10 bg-purple-500/[0.02] hover:bg-purple-500/[0.05]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={project.link} className="group block">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
                  <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-400 mb-2">{project.description}</p>
                <div className="text-sm text-purple-400">{project.category}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectGrid

