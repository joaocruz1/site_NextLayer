"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"


const Collaboration = () => {
  const {t} = useLanguage()
  return (
    <section className="py-12 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">{t.process.collaboration.title}</h2>
            <p className="text-zinc-400">
              {t.process.collaboration.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {t.process.collaboration.items.map((tool, i) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative p-6 rounded-lg border border-purple-200/10 bg-purple-500/[0.02]"
                >
                  <tool.icon className="h-8 w-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                  <p className="text-sm text-zinc-400">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square sm:aspect-[4/3] mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative h-full w-full rounded-3xl border border-purple-200/10 bg-purple-500/[0.02] overflow-hidden">
              <Image
                src="/team-collaboration.png?height=600&width=800"
                alt="Team Collaboration"
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0620] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Collaboration

