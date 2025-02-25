"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, MapPin } from "lucide-react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

interface Location {
  id: number
  city: string
  country: string
  coordinates: [number, number] // [latitude, longitude]
  timezone: string
  address: string
}

const locations: Location[] = [
  {
    id: 1,
    city: "New York",
    country: "USA",
    coordinates: [40.7128, -74.006],
    timezone: "America/New_York",
    address: "123 Broadway, New York, NY 10001",
  },
  {
    id: 2,
    city: "London",
    country: "UK",
    coordinates: [51.5074, -0.1278],
    timezone: "Europe/London",
    address: "456 Oxford Street, London W1C 1AP",
  },
  {
    id: 3,
    city: "Tokyo",
    country: "Japan",
    coordinates: [35.6762, 139.6503],
    timezone: "Asia/Tokyo",
    address: "789 Shibuya, Tokyo 150-0002",
  },
]

function Globe() {
  const earthRef = useRef<THREE.Mesh>(null)

  // Create a wireframe globe
  const globeGeometry = new THREE.SphereGeometry(2, 32, 32)
  const globeMaterial = new THREE.MeshPhongMaterial({
    color: "#1a1a1a",
    wireframe: true,
    transparent: true,
    opacity: 0.2,
  })

  // Create a solid globe with atmosphere effect
  const atmosphereGeometry = new THREE.SphereGeometry(2, 32, 32)
  const atmosphereMaterial = new THREE.MeshPhongMaterial({
    color: "#4c1d95",
    transparent: true,
    opacity: 0.1,
  })

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={earthRef}>
      <mesh geometry={atmosphereGeometry} material={atmosphereMaterial} />
      <mesh geometry={globeGeometry} material={globeMaterial} />

      {/* Add meridians and parallels */}
      {[...Array(8)].map((_, i) => {
        const rotation = (i / 8) * Math.PI
        return (
          <group key={i} rotation={[0, rotation, 0]}>
            <line>
              <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array(300), 3]}
                onUpdate={(self) => {
                  const positions = self.array as Float32Array
                  for (let i = 0; i < 100; i++) {
                    const t = (i / 100) * Math.PI * 2
                    positions[i * 3] = 2 * Math.cos(t)
                    positions[i * 3 + 1] = 2 * Math.sin(t)
                    positions[i * 3 + 2] = 0
                  }
                }}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#6b21a8" transparent opacity={0.2} />
            </line>
          </group>
        )
      })}
    </group>
  )
}

function LocationMarker({
  location,
  isHovered,
  onClick,
}: {
  location: Location
  isHovered: boolean
  onClick: () => void
}) {
  const [lat, lon] = location.coordinates
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  const radius = 2.1

  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const y = radius * Math.cos(phi)
  const z = radius * Math.sin(phi) * Math.sin(theta)

  return (
    <group position={[x, y, z]}>
      <mesh onClick={onClick}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={isHovered ? "#a855f7" : "#ffffff"} />
      </mesh>
      {isHovered && <pointLight color="#a855f7" intensity={2} distance={0.5} />}
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

export function InteractiveGlobe() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null)

  const getLocalTime = (timezone: string) => {
    try {
      return new Date().toLocaleTimeString("en-US", { timeZone: timezone })
    } catch (error) {
      return new Date().toLocaleTimeString("en-US")
    }
  }

  return (
    <div className="relative aspect-square w-full max-w-3xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
      <div className="relative h-full rounded-3xl border border-purple-200/10 bg-purple-500/[0.02] overflow-hidden">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Globe />
          {locations.map((location) => (
            <LocationMarker
              key={location.id}
              location={location}
              isHovered={hoveredLocation?.id === location.id}
              onClick={() => setSelectedLocation(location)}
            />
          ))}
          <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
        </Canvas>

        {/* Location List */}
        <div className="absolute left-4 bottom-4 space-y-2">
          {locations.map((location) => (
            <motion.button
              key={location.id}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                selectedLocation?.id === location.id
                  ? "bg-purple-500/20 text-white"
                  : "bg-purple-500/10 text-zinc-300 hover:bg-purple-500/15"
              }`}
              onHoverStart={() => setHoveredLocation(location)}
              onHoverEnd={() => setHoveredLocation(null)}
              onClick={() => setSelectedLocation(location)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-4 h-4" />
              <span>{location.city}</span>
            </motion.button>
          ))}
        </div>

        {/* Selected Location Info */}
        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute top-4 right-4 p-4 rounded-lg bg-purple-500/10 border border-purple-200/10 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {selectedLocation.city}, {selectedLocation.country}
              </h3>
              <div className="space-y-2 text-sm text-zinc-300">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {selectedLocation.address}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {getLocalTime(selectedLocation.timezone)}
                </p>
                <div className="flex items-center gap-2 text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available Now
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

