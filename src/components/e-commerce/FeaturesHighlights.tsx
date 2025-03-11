"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Users, BarChart3, Package, Truck, RefreshCw, MessageSquare, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeatureHighlights() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Funcionalidades do Sistema</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-sm sm:text-base">
            Nosso sistema de controle de marketplace oferece ferramentas completas para gerenciar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/30 to-purple-700/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative h-full bg-white/[0.03] backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                <div className="p-3 rounded-lg bg-purple-500/10 w-fit group-hover:bg-purple-500/20 transition-colors mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-purple-200/70 mb-4">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Gestão de Produtos",
    description: "Cadastre e gerencie produtos em múltiplos marketplaces com sincronização automática",
    icon: Package,
  },
  {
    title: "Controle de Pedidos",
    description: "Acompanhe pedidos desde a confirmação até a entrega com atualizações em tempo real",
    icon: ShoppingBag,
  },
  {
    title: "Gestão de Funcionários",
    description: "Atribua tarefas, monitore atividades e avalie o desempenho da sua equipe",
    icon: Users,
  },
  {
    title: "Análise de Vendas",
    description: "Visualize relatórios detalhados de desempenho por marketplace, produto e vendedor",
    icon: BarChart3,
  },
  {
    title: "Gestão de Devoluções",
    description: "Processe devoluções e trocas de forma eficiente com fluxos automatizados",
    icon: RefreshCw,
  },
  {
    title: "Logística Integrada",
    description: "Integração com transportadoras e controle de envios em uma única plataforma",
    icon: Truck,
  },
  {
    title: "Atendimento ao Cliente",
    description: "Centralize as comunicações com clientes de todos os marketplaces",
    icon: MessageSquare,
  },
  {
    title: "Configurações Avançadas",
    description: "Personalize o sistema de acordo com as necessidades específicas do seu negócio",
    icon: Settings,
  },
]

