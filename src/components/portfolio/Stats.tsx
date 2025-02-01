"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Projects Completed", value: "100+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Team Members", value: "25+" },
  { label: "Years Experience", value: "10+" },
]

const Stats = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

