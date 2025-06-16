"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { InteractiveChat } from "./InteractiveChat"
import { Bot, Sparkles } from "lucide-react"

export function OmniHeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 w-full">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight"
            >
              <span className="block text-white mb-2 sm:mb-4">Automatize e Eleve</span>
              <span className="block bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent pb-2 sm:pb-4">
                seu Atendimento
              </span>
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">com IA de Ponta</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-purple-200/70 leading-relaxed max-w-2xl"
            >
              Utilizando um sofisticado agente IA de banco de dados vetorial, a OmniResposta oferece suporte
              instantâneo, preciso e totalmente personalizado. Compreendemos e respondemos a consultas em áudio, imagens
              e texto, garantindo uma experiência fluida e eficiente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full"
            >
              <Link
                href="#funcionalidades"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto"
              >
                <motion.div
                  className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-purple-950/50 backdrop-blur-sm rounded-full shadow-2xl w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Descubra o Poder
                </motion.div>
              </Link>
              <Link href="#contato" className="group relative inline-flex items-center justify-center w-full sm:w-auto">
                <motion.div
                  className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-400/20 to-purple-600/20 opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-purple-200 border border-purple-500/10 rounded-full w-full sm:w-auto"
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
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 w-full"
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
                    className="absolute -inset-2 sm:-inset-4 rounded-lg bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent relative"
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
            className="relative w-full flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm lg:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl border border-purple-200/10 bg-purple-500/[0.02] overflow-hidden p-4 sm:p-6">
                <InteractiveChat />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
