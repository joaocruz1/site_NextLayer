"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Testimonials() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Clients Say</h2>
        <p className="text-purple-200/70 max-w-2xl mx-auto">Trusted by transportation managers worldwide</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            whileHover={{ y: -5 }}
            className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 border border-purple-500/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar || "/placeholder.svg?height=100&width=100"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-purple-200/70 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-purple-200/90">{testimonial.quote}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "This system has transformed how we manage our employee transportation. We've reduced costs by 25% while improving employee satisfaction.",
    name: "Michael Rodriguez",
    role: "Transportation Manager, Global Tech Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The route optimization alone saved us thousands in fuel costs. The employee app makes communication seamless.",
    name: "Sarah Chen",
    role: "Operations Director, Manufacturing Co.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Managing our fleet of buses and vans was a logistical nightmare before implementing this system. Now it's all automated and efficient.",
    name: "James Wilson",
    role: "Fleet Manager, Enterprise Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

