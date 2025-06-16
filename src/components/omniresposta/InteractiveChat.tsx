"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, Mic, ImageIcon, FileText, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  type?: "text" | "audio" | "image"
}

// Mensagens de demonstração para antes do chat se tornar interativo
const demoMessages: Message[] = [
  {
    id: "1",
    text: "Olá! Gostaria de saber mais sobre o Omni Chat.",
    sender: "user",
    timestamp: new Date(),
  },
  {
    id: "2",
    text: "Olá! Eu sou o assistente virtual do Omni Chat, uma solução da Next Layer. O Omni Chat é uma solução completa para automatizar e aprimorar o atendimento ao cliente usando inteligência artificial de ponta. Como posso ajudar você a conhecer mais sobre nossa revolução do atendimento inteligente?",
    sender: "bot",
    timestamp: new Date(),
  },
  {
    id: "3",
    text: "Quais são os principais diferenciais?",
    sender: "user",
    timestamp: new Date(),
  },
  {
    id: "4",
    text: "Nossos principais diferenciais incluem: atendimento multicanal verdadeiro (texto, áudio e imagem), IA com banco de dados vetorial para precisão inigualável, automação inteligente e humanizada, e escalabilidade massiva. Gostaria de saber mais sobre algum desses pontos específicos?",
    sender: "bot",
    timestamp: new Date(),
  },
]

export function InteractiveChat() {
  const [messages, setMessages] = useState<Message[]>(demoMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessageToAPI = async (message: string): Promise<string> => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to get response")
      }

      const data = await response.json()
      return data.response
    } catch (error) {
      console.error("Error sending message:", error)
      return "Desculpe, estou com dificuldades técnicas no momento. O Omni Chat é uma solução de atendimento inteligente da Next Layer. Tente novamente em alguns instantes."
    }
  }

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const messageToSend = inputValue // A mensagem é o texto puro do input
    setInputValue("")
    setIsTyping(true)
    setIsLoading(true)

    try {
      // Enviar mensagem para a API
      const botResponseText = await sendMessageToAPI(messageToSend)

      // Simular um pequeno delay para parecer mais natural
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponseText,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
        setIsLoading(false)
      }, 1000) // Reduzi o delay para 1s para uma resposta mais rápida
    } catch (error) {
      setTimeout(() => {
        const errorResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "Desculpe, ocorreu um erro. O Omni Chat é nossa solução de IA para atendimento inteligente. Tente novamente ou solicite uma demonstração com nossos especialistas.",
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorResponse])
        setIsTyping(false)
        setIsLoading(false)
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const startInteractiveChat = () => {
    setIsInteractive(true)
    // Limpar mensagens demo e começar com saudação oficial
    setMessages([
      {
        id: "welcome",
        text: "Olá! Eu sou o assistente virtual do Omni Chat, uma solução da Next Layer. Como posso ajudar você a conhecer a revolução do atendimento inteligente hoje?",
        sender: "bot",
        timestamp: new Date(),
      },
    ])
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
            <h3 className="font-semibold">Assistente Omni Chat</h3>
            <p className="text-sm opacity-90">Next Layer • Online</p>
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
                  <p className="text-sm leading-relaxed">{message.text}</p>
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
            <Button onClick={startInteractiveChat} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              💬 Conversar com o Assistente Omni Chat
            </Button>
          ) : (
            <div className="space-y-3">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Pergunte sobre o Omni Chat..."
                  className="flex-1 bg-purple-950/50 border-purple-300/20 focus:border-purple-400/50 placeholder:text-zinc-500"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </form>

              {/* Media options */}
              <div className="flex justify-center space-x-4">
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-purple-300 text-xs">
                  <Mic className="w-3 h-3 mr-1" />
                  Áudio
                </Button>
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-purple-300 text-xs">
                  <ImageIcon className="w-3 h-3 mr-1" />
                  Imagem
                </Button>
                <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-purple-300 text-xs">
                  <FileText className="w-3 h-3 mr-1" />
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