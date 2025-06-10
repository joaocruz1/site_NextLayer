"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { InteractiveChat } from "./InteractiveChat"
import { Bot, Sparkles } from "lucide-react"

export function OmniHeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-purple-500/10 bg-purple-500/5 px-3 py-1 text-xs sm:text-sm text-purple-200 backdrop-blur-sm"
            >
              <Bot className="h-4 w-4 mr-2" />
              Atendimento Inteligente com IA
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
            >
              <span className="block text-white mb-4">Automatize e Eleve</span>
              <span className="block bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent pb-4">
                seu Atendimento
              </span>
              <span className="block text-white text-3xl sm:text-4xl md:text-5xl">com IA de Ponta</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-purple-200/70"
            >
              Utilizando um sofisticado agente IA de banco de dados vetorial, a OmniResposta oferece suporte
              instantâneo, preciso e totalmente personalizado. Compreendemos e respondemos a consultas em áudio, imagens
              e texto, garantindo uma experiência fluida e eficiente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="#funcionalidades" className="group relative inline-flex items-center justify-center">
                <motion.div
                  className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-purple-950/50 backdrop-blur-sm rounded-full shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Descubra o Poder
                </motion.div>
              </Link>
              <Link href="#contato" className="group relative inline-flex items-center justify-center">
                <motion.div
                  className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-400/20 to-purple-600/20 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-purple-200 border border-purple-500/10 rounded-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Experimente Grátis
                </motion.div>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16"
            >
              {[
                { value: "99%", label: "Precisão IA" },
                { value: "24/7", label: "Disponibilidade" },
                { value: "3 Canais", label: "Áudio, Imagem, Texto" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="relative group"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="absolute -inset-4 rounded-lg bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    className="text-xs sm:text-sm text-purple-300/60 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Interactive Chat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-square lg:aspect-[4/3] xl:aspect-[3/2]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative h-full w-full rounded-3xl border border-purple-200/10 bg-purple-500/[0.02] overflow-hidden flex items-center justify-center p-6">
              <InteractiveChat />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
