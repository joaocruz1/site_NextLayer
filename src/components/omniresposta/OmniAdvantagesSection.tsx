"use client"

import { motion } from "framer-motion"
import { CheckCircle, Target, Handshake, Rocket, Lightbulb } from "lucide-react"

export function OmniAdvantagesSection() {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Atendimento Multicanal Verdadeiro",
      description:
        "Não nos limitamos ao texto. Processamos e respondemos a consultas por áudio e imagens, oferecendo uma experiência unificada e acessível.",
    },
    {
      icon: Target,
      title: "Precisão Inigualável com IA Vetorial",
      description:
        "Compreendemos o contexto e a intenção das perguntas com profundidade, resultando em respostas mais precisas, relevantes e personalizadas.",
    },
    {
      icon: Handshake,
      title: "Automação Inteligente e Humanizada",
      description:
        "Nossa IA entende e interage simulando uma conversa natural e empática, otimizando recursos e aumentando a satisfação do cliente.",
    },
    {
      icon: Rocket,
      title: "Escalabilidade Massiva",
      description:
        "Atenda um volume ilimitado de clientes simultaneamente. A OmniResposta garante que sua empresa possa crescer exponencialmente.",
    },
    {
      icon: Lightbulb,
      title: "Inteligência de Negócios Acionável",
      description:
        "Transforme cada interação em uma fonte rica de insights para identificar tendências, prever necessidades e personalizar ofertas.",
    },
  ]

  return (
    <section id="vantagens" className="py-20 md:py-28 bg-purple-900/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            Por que a OmniResposta é a{" "}
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              Escolha Inteligente?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-[700px] mx-auto"
          >
            Descubra as vantagens competitivas que nos destacam e como podemos impulsionar os resultados da sua empresa
            de forma significativa.
          </motion.p>
        </div>

        <div className="space-y-8">
          {advantages.map((advantage, i) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent rounded-xl blur-xl" />
              <div className="relative p-6 rounded-xl border border-purple-200/10 bg-purple-500/[0.02] h-full">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <advantage.icon className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">{advantage.title}</h3>
                    <p className="text-zinc-400">{advantage.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
