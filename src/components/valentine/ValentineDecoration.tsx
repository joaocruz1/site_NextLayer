"use client"

import { motion } from "framer-motion"

export function ValentineDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating hearts */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
          className="absolute"
          style={{
            top: `${20 + i * 15}%`,
            left: i % 2 === 0 ? `${80 + i * 3}%` : `${5 + i * 3}%`,
          }}
        >
          <div
            className="w-8 h-8 opacity-60"
            style={{
              background:
                i % 3 === 0
                  ? "linear-gradient(to bottom, #fbcfe8, #f9a8d4)"
                  : i % 3 === 1
                    ? "linear-gradient(to bottom, #f9a8d4, #ec4899)"
                    : "linear-gradient(to bottom, #f43f5e, #e11d48)",
              clipPath:
                "path('M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z')",
              transform: `rotate(${i * 30}deg)`,
            }}
          />
        </motion.div>
      ))}

      {/* Rose petals */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 360 }}
          transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
          className="absolute"
          style={{
            bottom: `${10 + i * 10}%`,
            right: i % 2 === 0 ? `${10 + i * 5}%` : `${70 + i * 5}%`,
          }}
        >
          <div
            className="w-6 h-3 rounded-full"
            style={{
              background: `rgba(${220 + Math.random() * 35}, ${20 + Math.random() * 40}, ${60 + Math.random() * 40}, 0.4)`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        </motion.div>
      ))}

      {/* Decorative ribbon */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.6, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"
      />

      {/* Large heart decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-20 right-20 w-40 h-40 hidden lg:block"
        style={{
          background: "radial-gradient(circle, rgba(244,114,182,0.3) 0%, rgba(244,114,182,0) 70%)",
          clipPath:
            "path('M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z')",
        }}
      />

      {/* Cupid's arrow */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-40 left-10 hidden lg:block"
      >
        <div className="relative h-1 w-40 bg-pink-300/30 rounded-full">
          <div className="absolute right-0 w-4 h-4 bg-pink-300/30 rotate-45 transform -translate-y-1/2" />
          <div
            className="absolute left-0 w-6 h-6"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              background: "rgba(244,114,182,0.3)",
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
