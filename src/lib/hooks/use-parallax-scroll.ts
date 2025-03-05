// src/lib/hooks/use-parallax-scroll.ts
"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function useParallaxScroll(options: {
  outputRange: [number, number]
  reverse?: boolean
}) {
  const elementRef = useRef<HTMLDivElement>(null)

  // Configura o scroll progress
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"], // Define quando a animação começa e termina
  })

  // Configura a transformação de posição (eixo Y)
  const y = useTransform(
    scrollYProgress,
    [0, 1], // Intervalo de progresso do scroll
    options.reverse ? options.outputRange.reverse() : options.outputRange // Define a direção da animação
  )

  // Configura a opacidade
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  // Configura a escala
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])

  return { elementRef, y, opacity, scale }
}