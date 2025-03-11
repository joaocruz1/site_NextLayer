"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Clock, BarChart, Award } from "lucide-react"

export function EmployeeManagement() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Gestão de Funcionários</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-sm sm:text-base">
            Gerencie as atividades da sua equipe e acompanhe o desempenho de cada colaborador
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Employee profile card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/10 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Perfil do funcionário"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Carlos Silva</h3>
                  <p className="text-purple-200/70 text-sm">Gerente de Vendas • ID: FUNC-2845</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200/70 text-sm">Experiência</span>
                  <span className="text-white font-medium">2 anos, 3 meses</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200/70 text-sm">Departamento</span>
                  <span className="text-white font-medium">Vendas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200/70 text-sm">Marketplaces</span>
                  <span className="text-white font-medium">Mercado Livre, Amazon</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200/70 text-sm">Status</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Online</span>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/10">
                <h4 className="text-white font-medium mb-3">Atividades Atuais</h4>
                <div className="bg-purple-500/10 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-200/90 text-sm">Processamento de Pedidos</span>
                    <span className="text-purple-200/90 text-sm">Hoje, 8:00 - 12:30</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-200/70">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>12 pedidos processados • 8 pendentes</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {employeeFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-purple-500/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <feature.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-purple-200/70 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="p-1 rounded-full bg-purple-500/20 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      </div>
                      <span className="text-purple-200/90 text-xs">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const employeeFeatures = [
  {
    title: "Atribuição de Tarefas",
    description: "Distribua atividades entre sua equipe e acompanhe o progresso em tempo real",
    icon: CheckCircle,
    points: [
      "Criação de tarefas com prazos e prioridades",
      "Atribuição automática baseada em carga de trabalho",
      "Notificações de novas tarefas e prazos",
      "Histórico completo de atividades realizadas",
    ],
  },
  {
    title: "Monitoramento de Tempo",
    description: "Acompanhe o tempo gasto em cada atividade para otimizar processos",
    icon: Clock,
    points: [
      "Registro automático de tempo por atividade",
      "Relatórios de produtividade por funcionário",
      "Identificação de gargalos operacionais",
      "Comparativo de eficiência entre equipes",
    ],
  },
  {
    title: "Análise de Desempenho",
    description: "Avalie o desempenho dos funcionários com métricas objetivas",
    icon: BarChart,
    points: [
      "Indicadores de performance personalizáveis",
      "Comparativo com metas estabelecidas",
      "Análise de tendências de desempenho",
      "Feedback automatizado baseado em resultados",
    ],
  },
  {
    title: "Sistema de Recompensas",
    description: "Motive sua equipe com reconhecimento e incentivos baseados em desempenho",
    icon: Award,
    points: [
      "Gamificação de atividades e metas",
      "Ranking de desempenho entre funcionários",
      "Programa de bonificação integrado",
      "Reconhecimento automático de conquistas",
    ],
  },
]

