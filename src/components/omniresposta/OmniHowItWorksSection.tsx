"use client"

import { motion } from "framer-motion"
import { Database, Cpu, Zap } from "lucide-react"

export function OmniHowItWorksSection() {
  const steps = [
    {
      icon: Database,
      title: "Banco Vetorial",
      description: "Armazenamento inteligente de conhecimento",
    },
    {
      icon: Cpu,
      title: "Processamento IA",
      description: "Análise semântica avançada",
    },
    {
      icon: Zap,
      title: "Resposta Instantânea",
      description: "Entrega precisa e contextual",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            Tecnologia de Ponta{" "}
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              Simplificada
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-[700px] mx-auto"
          >
            Entenda como nosso sofisticado agente IA de banco de dados vetorial opera para fornecer um atendimento
            revolucionário.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10 p-6 rounded-xl border border-purple-200/10 bg-purple-500/[0.02] h-full">
                <div className="mb-6 p-4 rounded-xl bg-purple-500/10 w-fit mx-auto">
                  <step.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-purple-500/20 z-0" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
          <div className="relative p-8 md:p-12 rounded-3xl border border-purple-200/10 bg-purple-500/[0.02] text-center">
            <h3 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
                Agente IA com Banco de Dados Vetorial
              </span>
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              A OmniResposta utiliza um avançado agente IA fundamentado em banco de dados vetorial. Isso permite que a
              IA não apenas compare palavras-chave, mas compreenda o significado semântico e o contexto das consultas
              dos usuários. As informações são convertidas em vetores numéricos, e a IA busca as respostas mais
              relevantes nesse espaço vetorial, garantindo uma compreensão profunda e respostas altamente precisas e
              personalizadas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
