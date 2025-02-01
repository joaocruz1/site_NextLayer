"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Working with NextLayer was a game-changer for our business. Their expertise and dedication delivered exceptional results.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team's attention to detail and innovative solutions helped us achieve our digital transformation goals.",
    author: "Michael Chen",
    role: "CTO, InnovateCo",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Outstanding service and technical expertise. They truly understand modern business needs.",
    author: "Emma Williams",
    role: "Product Manager, StartupX",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const Testimonials = () => {
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
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-[600px] mx-auto"
          >
            What our clients say about working with us
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-lg border border-purple-200/10 bg-purple-500/[0.02]"
            >
              <div className="relative z-10">
                <div className="mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <blockquote className="text-lg text-purple-200/90 mb-4">{testimonial.quote}</blockquote>
                <div className="font-semibold text-purple-200">{testimonial.author}</div>
                <div className="text-sm text-zinc-400">{testimonial.role}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

