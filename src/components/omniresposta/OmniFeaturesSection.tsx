"use client"

import { motion } from "framer-motion"
import { MessageSquare, ImageIcon, Mic, Link, Brain, BarChart3 } from "lucide-react"

export function OmniFeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "PLN Avançado",
      description:
        "Capacidade superior de compreender e interpretar texto e fala em diversos idiomas, tornando a comunicação natural e intuitiva.",
    },
    {
      icon: ImageIcon,
      title: "Análise de Imagens",
      description:
        "Habilidade exclusiva de analisar imagens enviadas pelos clientes e fornecer respostas ou ações baseadas nelas.",
    },
    {
      icon: Mic,
      title: "Síntese de Voz",
      description:
        "Interação por voz totalmente natural e fluida, permitindo comunicação como se fosse uma pessoa real.",
    },
    {
      icon: Link,
      title: "Integração Flexível",
      description:
        "Conectividade inteligente com seus sistemas internos (CRM, ERP, etc.), adaptando-se à sua infraestrutura.",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Nosso agente IA aprende e melhora continuamente com cada nova interação, evoluindo constantemente.",
    },
    {
      icon: BarChart3,
      title: "Dashboards Analytics",
      description:
        "Visibilidade completa com métricas sobre desempenho, satisfação do cliente e tendências estratégicas.",
    },
  ]

  return (
    <section id="funcionalidades" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            Recursos Inovadores para um{" "}
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              Atendimento Excepcional
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-[700px] mx-auto"
          >
            A OmniResposta oferece um conjunto robusto de funcionalidades para transformar a interação com seus
            clientes, otimizando cada ponto de contato.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10 p-6 rounded-xl border border-purple-200/10 bg-purple-500/[0.02] h-full flex flex-col">
                <div className="mb-4 p-3 rounded-lg bg-purple-500/10 w-fit">
                  <feature.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-zinc-400 text-sm flex-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
