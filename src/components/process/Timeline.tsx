"use client"

import { motion } from "framer-motion"

const timelineSteps = [
  {
    title: "Discovery & Planning",
    duration: "Week 1-2",
    description:
      "Initial consultation, requirement gathering, and project planning. We define goals, scope, and timeline.",
  },
  {
    title: "Design & Architecture",
    duration: "Week 3-4",
    description:
      "Creating wireframes, design mockups, and technical architecture. Establishing the foundation for development.",
  },
  {
    title: "Development Sprint 1",
    duration: "Week 5-8",
    description: "Core feature development begins. Regular updates and demos for feedback and iterations.",
  },
  {
    title: "Development Sprint 2",
    duration: "Week 9-12",
    description: "Advanced feature implementation and integration. Continuous testing and optimization.",
  },
  {
    title: "Testing & QA",
    duration: "Week 13-14",
    description:
      "Comprehensive testing, bug fixing, and performance optimization. Ensuring everything works as intended.",
  },
  {
    title: "Deployment & Launch",
    duration: "Week 15-16",
    description: "Final preparations, deployment to production, and launch support. Ready for the world.",
  },
]

const Timeline = () => {
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
            Project Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-[600px] mx-auto"
          >
            A typical project timeline from start to finish
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 h-full w-px bg-purple-500/10" />

          <div className="space-y-8">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 ${
                  i % 2 === 0 ? "sm:text-right" : ""
                }`}
              >
                <div className={`${i % 2 === 0 ? "sm:order-1" : ""}`}>
                  <div
                    className={`relative p-6 rounded-lg border border-purple-200/10 bg-purple-500/[0.02] ${
                      i % 2 === 0 ? "sm:ml-8" : "sm:mr-8"
                    }`}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400 border-4 border-[#0D0620] sm:left-0 left-4 transform -translate-x-1/2" />
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <div className="text-sm text-purple-400 mb-2">{step.duration}</div>
                    <p className="text-sm text-zinc-400">{step.description}</p>
                  </div>
                </div>
                <div className="hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

