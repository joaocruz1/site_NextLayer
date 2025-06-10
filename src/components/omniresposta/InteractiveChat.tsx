"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, Mic, ImageIcon, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  type?: "text" | "audio" | "image"
}

const predefinedResponses = [
  "Olá! Como posso ajudar você hoje?",
  "Entendi sua solicitação. Vou verificar isso para você.",
  "Baseado nas informações que tenho, posso te ajudar com isso.",
  "Perfeito! Encontrei a resposta para sua pergunta.",
  "Posso processar textos, áudios e imagens. Como prefere se comunicar?",
  "Sua solicitação foi processada com sucesso!",
]

const demoMessages: Message[] = [
  {
    id: "1",
    text: "Olá! Tenho uma dúvida sobre meu pedido.",
    sender: "user",
    timestamp: new Date(),
  },
  {
    id: "2",
    text: "Olá! Claro, posso ajudar. Qual o número do seu pedido?",
    sender: "bot",
    timestamp: new Date(),
  },
  {
    id: "3",
    text: "É 123456. Gostaria de saber o status.",
    sender: "user",
    timestamp: new Date(),
  },
  {
    id: "4",
    text: "Seu pedido está a caminho! A previsão de entrega é para amanhã às 14h.",
    sender: "bot",
    timestamp: new Date(),
  },
]

export function InteractiveChat() {
  const [messages, setMessages] = useState<Message[]>(demoMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Modifique a função scrollToBottom para limitar o scroll apenas ao container de mensagens
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Modifique o handleSendMessage para prevenir o comportamento padrão
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: predefinedResponses[Math.floor(Math.random() * predefinedResponses.length)],
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  // Modifique o handleKeyPress para usar a mesma função handleSendMessage
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="w-full max-w-md mx-auto h-full flex flex-col">
      <div className="bg-purple-950/30 rounded-2xl shadow-lg overflow-hidden border border-purple-200/10 flex flex-col h-[480px]">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold">Agente OmniResposta</h3>
            <p className="text-sm opacity-90">Online</p>
          </div>
          <div className="ml-auto">
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[280px] max-h-[280px]">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-purple-600 text-white rounded-br-sm"
                      : "bg-purple-950/50 text-white shadow-sm rounded-bl-sm border border-purple-200/10"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {isTyping && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
              <div className="bg-purple-950/50 text-white shadow-sm rounded-2xl rounded-bl-sm border border-purple-200/10 px-4 py-2">
                <div className="flex space-x-1">
                  <motion.div
                    className="w-2 h-2 bg-purple-300 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-purple-300 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-purple-300 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-purple-200/10 bg-purple-950/20">
          {!isInteractive ? (
            <Button
              onClick={() => setIsInteractive(true)}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Clique para testar o chat interativo
            </Button>
          ) : (
            <div className="space-y-3">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-purple-950/50 border-purple-300/20 focus:border-purple-400/50 placeholder:text-zinc-500"
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim()}
                  size="icon"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>

              {/* Media options */}
              <div className="flex justify-center space-x-4">
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-purple-300">
                  <Mic className="w-4 h-4 mr-1" />
                  Áudio
                </Button>
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-purple-300">
                  <ImageIcon className="w-4 h-4 mr-1" />
                  Imagem
                </Button>
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-purple-300">
                  <FileText className="w-4 h-4 mr-1" />
                  Texto
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
