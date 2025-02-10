"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

const technologies = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "Vue", "Angular", "TypeScript"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Java", "Go", ".NET"],
  },
  {
    category: "Mobile",
    techs: ["React Native", "Flutter", "iOS", "Android", "Kotlin"],
  },
  {
    category: "Cloud",
    techs: ["AWS", "Azure", "GCP", "Vercel", "Docker"],
  },
]

const TechStack = () => {
  const {t} = useLanguage()
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            {t.solutions.techstack.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-[600px] mx-auto"
          >
            {t.solutions.techstack.subtitle}
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.solutions.techstack.items.map((tech, i) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-4 p-6 rounded-lg border border-purple-200/10 bg-purple-500/[0.02]">
                <h3 className="text-xl font-semibold text-purple-200">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.techs.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i * 5 + j) * 0.1 }}
                      className="flex items-center space-x-2 text-zinc-400"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

