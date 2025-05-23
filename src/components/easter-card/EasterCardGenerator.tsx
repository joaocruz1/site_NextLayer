// components/EasterCardGenerator.tsx
"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Download, Share2, RefreshCw, Sparkles, ImageIcon, Egg, Palette, AlertCircle } from "lucide-react"
import Image from "next/image"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function EasterCardGenerator() {
  const [message, setMessage] = useState("")
  const [style, setStyle] = useState("watercolor")
  const [theme, setTheme] = useState("traditional")
  const [includeElements, setIncludeElements] = useState(true)
  const [colorfulness, setColorfulness] = useState([70])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState("")
  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [activeTab, setActiveTab] = useState("customize")
  const [error, setError] = useState<string | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedImage = localStorage.getItem('easterCardImage')
    const savedPrompt = localStorage.getItem('easterCardPrompt')
    if (savedImage) setGeneratedImage(savedImage)
    if (savedPrompt) setGeneratedPrompt(savedPrompt)
  }, [])

  const cardStyles = [
    { value: "watercolor", label: "Aquarela" },
    { value: "digital-art", label: "Arte Digital" },
    { value: "cartoon", label: "Cartoon" },
    { value: "realistic", label: "Realista" },
    { value: "minimalist", label: "Minimalista" },
  ]

  const cardThemes = [
    { value: "traditional", label: "Páscoa tradicional" },
    { value: "spring", label: "Flores da Primavera" },
    { value: "cute-animals", label: "Animais Fofos" },
    { value: "religious", label: "Religioso" },
    { value: "modern", label: "Moderno & Abstrato" },
  ]

  const buildPrompt = () => {
    let basePrompt = ""

    switch (theme) {
      case "traditional":
        basePrompt = "traditional Easter eggs and flowers"
        break
      case "spring":
        basePrompt = "spring flowers and butterflies"
        break
      case "cute-animals":
        basePrompt = "cute Easter bunnies and chicks"
        break
      case "religious":
        basePrompt = "Easter cross and divine light"
        break
      case "modern":
        basePrompt = "modern abstract Easter design"
        break
      default:
        basePrompt = "Easter eggs and flowers"
    }

    if (style !== "watercolor") {
      basePrompt += ` in ${style} style`
    }

    if (includeElements) {
      basePrompt += ", with Easter elements like eggs, bunnies and flowers"
    }

    basePrompt += `. Colorfulness level: ${colorfulness[0]}%`

    return basePrompt
  }

  const generateCard = async () => {
    if (!message.trim()) {
      setError("Por favor, insira uma mensagem para o cartão")
      return
    }
  
    setIsGenerating(true)
    setError(null)
    setActiveTab("result")
  
    try {
      const prompt = buildPrompt()
      setGeneratedPrompt(prompt)
  
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 30000) // 30 segundos timeout

      const response = await fetch("/api/generate-easter-card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          message,
          theme
        }),
        signal: controller.signal
      })

      clearTimeout(timeout)

      // Verificação robusta do tipo de conteúdo
      const contentType = response.headers.get('content-type')
      if (!contentType?.includes('application/json')) {
        const text = await response.text()
        throw new Error(`Resposta inválida: ${text.slice(0, 100)}...`)
      }

      const result = await response.json()
  
      if (!response.ok || !result.success) {
        throw new Error(result.message || result.error || "Falha ao gerar o cartão")
      }
  
      // Verificação mais segura dos dados
      const imageUrl = result.data?.imageUrl || result.data?.fallbackUrl
      const revisedPrompt = result.data?.revisedPrompt || prompt
      
      if (!imageUrl) {
        throw new Error("Nenhuma URL de imagem válida foi retornada")
      }
  
      setGeneratedImage(imageUrl)
      setGeneratedPrompt(revisedPrompt)
      localStorage.setItem('easterCardImage', imageUrl)
      localStorage.setItem('easterCardPrompt', revisedPrompt)
  
    } catch (error) {
      console.error("Erro ao gerar cartão:", error)
      
      let errorMessage = "Ocorreu um erro ao gerar seu cartão. Por favor, tente novamente."
      
      if (error instanceof Error) {
        // Tratamento específico para timeout
        if (error.name === 'AbortError') {
          errorMessage = "A geração demorou muito. Tente com um prompt mais simples."
        } else {
          errorMessage = error.message
        }
      }
  
      setError(errorMessage)
      setGeneratedImage("https://placehold.co/1024/red/white?text=Erro+ao+Gerar+Cartão&font=montserrat")
      
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadCard = async () => {
    if (!generatedImage) return

    try {
      const response = await fetch(generatedImage)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = url
      link.download = 'easter-card.png'
      document.body.appendChild(link)
      link.click()
      
      setTimeout(() => {
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      }, 100)
    } catch (error) {
      console.error('Error downloading image:', error)
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = 'easter-card.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const shareCard = async () => {
    if (!generatedImage) return

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Easter Card",
          text: `Check out this Easter card I created with the message: "${message}"`,
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      // Fallback para navegadores sem suporte à API de compartilhamento
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert("Link copiado para a área de transferência!")
      } catch (error) {
        alert("Compartilhe manualmente copiando o URL da página.")
        console.error(error)
      }
    }
  }

  const clearCache = () => {
    localStorage.removeItem('easterCardImage')
    localStorage.removeItem('easterCardPrompt')
    setGeneratedImage("")
    setGeneratedPrompt("")
    setActiveTab("customize")
  }

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="customize" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="customize" className="data-[state=active]:bg-purple-600 text-black">
              <Palette className="h-4 w-4 mr-2" />
              Personalize seu cartão
            </TabsTrigger>
            <TabsTrigger value="result" className="data-[state=active]:bg-purple-600 text-black">
              <ImageIcon className="h-4 w-4 mr-2" />
              Seu cartão de Páscoa
            </TabsTrigger>
          </TabsList>

          <TabsContent value="customize" className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-purple-200">
                    Sua Mensagem do Cartão Páscoa
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Digite seus votos de Páscoa aqui..."
                    className="min-h-[120px] bg-purple-950/30 text-purple-200 border-purple-300/20 focus:border-purple-400/50 placeholder:text-zinc-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm text-purple-200">Estilo do Cartão</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger className="bg-purple-950/30 border-purple-300/20 text-purple-200">
                      <SelectValue placeholder="Selecione o estilo" />
                    </SelectTrigger>
                    <SelectContent>
                      {cardStyles.map((cardStyle) => (
                        <SelectItem key={cardStyle.value} value={cardStyle.value}>
                          {cardStyle.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-purple-200">Tema de Páscoa</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger className="bg-purple-950/20 border-purple-300/20 text-purple-200">
                      <SelectValue placeholder="Selecione o tema" />
                    </SelectTrigger>
                    <SelectContent>
                      {cardThemes.map((cardTheme) => (
                        <SelectItem key={cardTheme.value} value={cardTheme.value}>
                          {cardTheme.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="colorfulness" className="text-sm text-purple-200">
                      Coloração do Cartão
                    </Label>
                    <span className="text-xs text-purple-300">{colorfulness[0]}%</span>
                  </div>
                  <Slider
                    id="colorfulness"
                    min={0}
                    max={100}
                    step={1}
                    value={colorfulness}
                    onValueChange={setColorfulness}
                    className="py-2"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch 
                    id="include-elements" 
                    checked={includeElements} 
                    onCheckedChange={setIncludeElements} 
                  />
                  <Label htmlFor="include-elements" className="text-sm text-purple-200">
                    Incluir elementos de Páscoa (ovos, coelhos, flores)
                  </Label>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center pt-6"
            >
              <Button
                onClick={generateCard}
                disabled={!message || isGenerating}
                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-8 py-6"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Gerando...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Gerar Cartão de Páscoa
                  </>
                )}
              </Button>
            </motion.div>
          </TabsContent>

          <TabsContent value="result" className="space-y-8">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="h-12 w-12 text-purple-400 animate-spin mb-4" />
                <p className="text-purple-200 text-lg">Criando seu cartão de Páscoa mágico...</p>
                <p className="text-zinc-400 text-sm mt-2">Isso pode levar alguns momentos</p>
              </div>
            ) : error ? (
              <Alert variant="destructive" className="bg-red-900/20 border-red-500/30">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erro</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
                <Button
                  onClick={() => setActiveTab("customize")}
                  variant="link"
                  className="text-red-300 hover:text-red-200 mt-2 p-0"
                >
                  Voltar e tentar novamente
                </Button>
              </Alert>
            ) : generatedImage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div
                  ref={cardRef}
                  className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border-8 border-purple-300/20 shadow-2xl"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={generatedImage}
                      alt="Generated Easter Card"
                      fill
                      className="object-cover"
                      unoptimized={true}
                      priority
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    onClick={downloadCard} 
                    className="bg-purple-600 hover:bg-purple-700 text-white" 
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Baixar Cartão
                  </Button>

                  <Button
                    onClick={shareCard}
                    variant="outline"
                    className="border-purple-500/20 bg-purple-500/10 hover:bg-purple-500/20 text-purple-200"
                    size="lg"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Compartilhar
                  </Button>

                  <Button
                    onClick={clearCache}
                    variant="ghost"
                    className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/10"
                    size="lg"
                  >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Criar Novo
                  </Button>
                </div>

                <div className="mt-8 p-4 rounded-lg bg-purple-950/30 border border-purple-300/10">
                  <p className="text-sm text-zinc-400 mb-2">Prompt utilizado:</p>
                  <p className="text-xs text-zinc-500 font-mono">{generatedPrompt}</p>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <Egg className="h-12 w-12 text-purple-400 mb-4" />
                <p className="text-purple-200 text-lg">Nenhum cartão gerado ainda</p>
                <p className="text-zinc-400 text-sm mt-2">Vá para a aba Personalizar para criar seu cartão</p>
                <Button
                  onClick={() => setActiveTab("customize")}
                  variant="link"
                  className="text-purple-400 hover:text-purple-300 mt-4"
                >
                  Criar um Cartão
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}