"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function TechStack() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Built With Modern Technology</h2>
        <p className="text-purple-200/70 max-w-2xl mx-auto">Powered by Python backend and React/Next.js frontend</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 border border-purple-500/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Python"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold text-white">Python Backend</h3>
              <p className="text-purple-200/70">Robust and scalable server architecture</p>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>Fast data processing</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>Advanced scheduling algorithms</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>Secure authentication</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>RESTful API architecture</span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/[0.03] backdrop-blur-sm rounded-xl p-8 border border-purple-500/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="React"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold text-white">React/Next.js Frontend</h3>
              <p className="text-purple-200/70">Modern and responsive user interface</p>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>Responsive design for all devices</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>Interactive dashboards</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>Real-time updates</span>
            </li>
            <li className="flex items-center gap-2 text-purple-200/70">
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span>Intuitive user experience</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

