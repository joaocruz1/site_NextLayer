"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Laptop, Smartphone, Tablet } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function DeviceShowcase() {


  const {t} = useLanguage()

  return (
    <div className="py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t.websites.device.title}</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-sm sm:text-base">
           {t.websites.device.subtitle}
          </p>
        </div>

        {/* Mobile view - stacked devices */}
        <div className="md:hidden space-y-12">
          {/* Laptop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gray-800 rounded-t-lg p-2 border-4 border-gray-700">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full" />
              <div className="aspect-[16/10] rounded overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=640"
                  alt="Website on laptop"
                  width={640}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="h-3 bg-gray-700 rounded-b-lg" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Laptop className="w-4 h-4 text-purple-400" />
              <span className="text-purple-200 text-sm">Desktop</span>
            </div>
          </motion.div>

          {/* Tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative max-w-[250px] mx-auto"
          >
            <div className="relative bg-gray-800 rounded-3xl p-2 border-4 border-gray-700">
              <div className="absolute top-1/2 left-1 transform -translate-y-1/2 w-1 h-8 bg-gray-600 rounded-full" />
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Website on tablet"
                  width={300}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Tablet className="w-4 h-4 text-purple-400" />
              <span className="text-purple-200 text-sm">Tablet</span>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-[150px] mx-auto"
          >
            <div className="relative bg-gray-800 rounded-3xl p-2 border-4 border-gray-700">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-full" />
              <div className="aspect-[9/19] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=380&width=180"
                  alt="Website on phone"
                  width={180}
                  height={380}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Smartphone className="w-4 h-4 text-purple-400" />
              <span className="text-purple-200 text-sm">Mobile</span>
            </div>
          </motion.div>
        </div>

        {/* Desktop view - positioned devices */}
        <div className="hidden md:block relative h-[500px]">
          {/* Laptop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-2xl"
          >
            <div className="relative bg-gray-800 rounded-t-lg p-2 border-4 border-gray-700">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full" />
              <div className="aspect-[16/10] rounded overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=640"
                  alt="Website on laptop"
                  width={640}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="h-3 bg-gray-700 rounded-b-lg" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Laptop className="w-4 h-4 text-purple-400" />
              <span className="text-purple-200 text-sm">Desktop</span>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute right-[5%] top-1/2 -translate-y-1/2 z-30 w-full max-w-[150px]"
          >
            <div className="relative bg-gray-800 rounded-3xl p-2 border-4 border-gray-700">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-600 rounded-full" />
              <div className="aspect-[9/19] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=380&width=180"
                  alt="Website on phone"
                  width={180}
                  height={380}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Smartphone className="w-4 h-4 text-purple-400" />
              <span className="text-purple-200 text-sm">Mobile</span>
            </div>
          </motion.div>

          {/* Tablet */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute left-[5%] top-1/2 -translate-y-1/2 z-30 w-full max-w-[250px]"
          >
            <div className="relative bg-gray-800 rounded-3xl p-2 border-4 border-gray-700">
              <div className="absolute top-1/2 left-1 transform -translate-y-1/2 w-1 h-8 bg-gray-600 rounded-full" />
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Website on tablet"
                  width={300}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Tablet className="w-4 h-4 text-purple-400" />
              <span className="text-purple-200 text-sm">Tablet</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}