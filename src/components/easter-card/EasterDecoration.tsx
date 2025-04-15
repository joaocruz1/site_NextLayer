"use client"

import { motion } from "framer-motion"

export function EasterDecoration() {
  // Easter decoration elements
  const decorations = [
    { type: "bunny-ears", position: "top-0 left-10", delay: 0 },
    { type: "egg", position: "top-20 right-10", delay: 0.2 },
    { type: "flower", position: "bottom-20 left-20", delay: 0.4 },
    { type: "bunny", position: "bottom-10 right-20", delay: 0.6 },
    { type: "egg", position: "top-40 left-1/3", delay: 0.8 },
    { type: "flower", position: "top-60 right-1/4", delay: 1 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Easter bunny ears at the top left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-20 left-5 md:left-20"
      >
        <div className="relative w-16 h-32 md:w-24 md:h-48">
          <div className="absolute w-6 md:w-8 h-24 md:h-40 bg-pink-200 rounded-full left-0 transform -rotate-12">
            <div className="absolute inset-2 bg-pink-100 rounded-full"></div>
          </div>
          <div className="absolute w-6 md:w-8 h-24 md:h-40 bg-pink-200 rounded-full right-0 transform rotate-12">
            <div className="absolute inset-2 bg-pink-100 rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Easter eggs floating around */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`egg-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
          className="absolute"
          style={{
            top: `${20 + i * 15}%`,
            left: i % 2 === 0 ? `${80 + i * 3}%` : `${5 + i * 3}%`,
            width: `${20 + i * 5}px`,
            height: `${30 + i * 5}px`,
          }}
        >
          <div
            className="w-full h-full rounded-full bg-gradient-to-b"
            style={{
              background:
                i % 3 === 0
                  ? "linear-gradient(to bottom, #fecdd3, #d8b4fe)"
                  : i % 3 === 1
                    ? "linear-gradient(to bottom, #a7f3d0, #d8b4fe)"
                    : "linear-gradient(to bottom, #fde047, #d8b4fe)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              transform: `rotate(${i * 30}deg)`,
              opacity: 0.6,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/2 h-1/2 rounded-full border border-white/20"></div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Easter flowers */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`flower-${i}`}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 0.7, scale: 1, rotate: 360 }}
          transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
          className="absolute"
          style={{
            bottom: `${10 + i * 20}%`,
            right: i % 2 === 0 ? `${10 + i * 5}%` : `${70 + i * 5}%`,
          }}
        >
          <div className="relative w-12 h-12">
            {[...Array(5)].map((_, j) => (
              <div
                key={j}
                className="absolute w-4 h-8 rounded-full bg-pink-300/60"
                style={{
                  left: "50%",
                  top: "50%",
                  marginLeft: "-8px",
                  marginTop: "-16px",
                  transformOrigin: "center bottom",
                  transform: `rotate(${j * 72}deg)`,
                }}
              ></div>
            ))}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 -ml-2 -mt-2 rounded-full bg-yellow-300/80"></div>
          </div>
        </motion.div>
      ))}

      {/* Small bunny at the bottom */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 right-10 hidden md:block"
      >
        <div className="relative w-16 h-16">
          {/* Body */}
          <div className="absolute bottom-0 w-12 h-10 bg-gray-100/70 rounded-full"></div>
          {/* Head */}
          <div className="absolute bottom-6 left-1 w-10 h-8 bg-gray-100/70 rounded-full"></div>
          {/* Ears */}
          <div className="absolute bottom-10 left-2 w-2 h-8 bg-gray-100/70 rounded-full transform -rotate-12"></div>
          <div className="absolute bottom-10 left-6 w-2 h-8 bg-gray-100/70 rounded-full transform rotate-12"></div>
          {/* Tail */}
          <div className="absolute bottom-2 right-0 w-4 h-4 bg-gray-100/70 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  )
}
