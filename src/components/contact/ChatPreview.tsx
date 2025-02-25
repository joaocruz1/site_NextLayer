"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ChatPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-full right-0 mb-4 w-80 rounded-lg border border-purple-200/10 bg-[#0D0620] shadow-xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-purple-200/10">
              <h3 className="font-medium text-white">Chat with us</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="hover:text-purple-400">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4 h-80 overflow-y-auto space-y-4">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                </div>
                <div className="flex-1 bg-purple-500/[0.02] rounded-lg p-3 text-sm text-zinc-300">
                  Hello! How can we help you today?
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-purple-200/10">
              <form className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  className="flex-1 bg-purple-500/[0.02] border-purple-200/10"
                />
                <Button size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button size="lg" onClick={() => setIsOpen(!isOpen)} className="rounded-full shadow-lg group">
        <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
        Let's Chat
      </Button>
    </div>
  )
}

