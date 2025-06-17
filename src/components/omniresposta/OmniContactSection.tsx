"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react"

export function OmniContactSection() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    empresa: "",
    interesses: "",
    mensagem: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tighter text-white"
          >
            Solicite agora o seu{" "}
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
              OmniResposta
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 max-w-[700px] mx-auto"
          >
            Transforme seu atendimento hoje mesmo. Preencha o formulário e nossa equipe entrará em contato.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
              <p className="text-zinc-300 mb-8">
                Nossa equipe está pronta para ajudar você a implementar a solução de atendimento mais avançada do
                mercado.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-zinc-400">contato@omniresposta.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Telefone</h4>
                  <p className="text-zinc-400">+55 (11) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Localização</h4>
                  <p className="text-zinc-400">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-purple-400/10 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative p-8 md:p-12 rounded-3xl border border-purple-200/10 bg-purple-500/[0.02]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
                  <p className="text-zinc-400">Nossa equipe entrará em contato em breve.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nomeCompleto" className="text-purple-200 font-medium">
                        Nome Completo *
                      </Label>
                      <Input
                        id="nomeCompleto"
                        type="text"
                        value={formData.nomeCompleto}
                        onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                        className="mt-2 bg-purple-950/30 border-purple-300/20 focus:border-purple-400/50 placeholder:text-zinc-500 text-white"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-purple-200 font-medium">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 bg-purple-950/30 border-purple-300/20 focus:border-purple-400/50 placeholder:text-zinc-500 text-white"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="telefone" className="text-purple-200 font-medium">
                        Telefone
                      </Label>
                      <Input
                        id="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange("telefone", e.target.value)}
                        className="mt-2 bg-purple-950/30 border-purple-300/20 focus:border-purple-400/50 placeholder:text-zinc-500 text-white"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <Label htmlFor="empresa" className="text-purple-200 font-medium">
                        Empresa
                      </Label>
                      <Input
                        id="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => handleInputChange("empresa", e.target.value)}
                        className="mt-2 bg-purple-950/30 border-purple-300/20 focus:border-purple-400/50 placeholder:text-zinc-500 text-white"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-purple-200 font-medium">Área de Interesse</Label>
                    <Select
                      value={formData.interesses}
                      onValueChange={(value) => handleInputChange("interesses", value)}
                    >
                      <SelectTrigger className="mt-2 bg-purple-950/30 border-purple-300/20 text-white">
                        <SelectValue placeholder="Selecione uma opção..." />
                      </SelectTrigger>
                      <SelectContent className="bg-purple-950 border-purple-300/20">
                        <SelectItem value="ia_vetorial" className="text-white hover:bg-purple-800">
                          IA Vetorial
                        </SelectItem>
                        <SelectItem value="atendimento_multicanal" className="text-white hover:bg-purple-800">
                          Atendimento Multicanal
                        </SelectItem>
                        <SelectItem value="automacao_humanizada" className="text-white hover:bg-purple-800">
                          Automação Humanizada
                        </SelectItem>
                        <SelectItem value="integracao_sistemas" className="text-white hover:bg-purple-800">
                          Integração com Sistemas
                        </SelectItem>
                        <SelectItem value="analytics" className="text-white hover:bg-purple-800">
                          Analytics e Relatórios
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mensagem" className="text-purple-200 font-medium">
                      Mensagem
                    </Label>
                    <Textarea
                      id="mensagem"
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange("mensagem", e.target.value)}
                      className="mt-2 bg-purple-950/30 border-purple-300/20 focus:border-purple-400/50 placeholder:text-zinc-500 text-white min-h-[120px]"
                      placeholder="Conte-nos mais sobre suas necessidades de atendimento..."
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Solicitação
                    </Button>
                  </motion.div>

                  <p className="text-xs text-zinc-500 text-center">
                    * Campos obrigatórios. Seus dados estão protegidos pela nossa política de privacidade.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
