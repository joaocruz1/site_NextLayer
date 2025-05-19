"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Loader2,
  Download,
  Share2,
  RefreshCw,
  Sparkles,
  ImageIcon,
  Heart,
  Palette,
  AlertCircle,
  Upload,
} from "lucide-react"
import Image from "next/image"

export function ValentineCardGenerator() {
  const [message, setMessage] = useState("")
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [style, setStyle] = useState("cartoon")
  const [theme, setTheme] = useState("romantic")
  const [includeHearts, setIncludeHearts] = useState(true)
  const [colorfulness, setColorfulness] = useState([70])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState("")
  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [activeTab, setActiveTab] = useState("customize")
  const [error, setError] = useState<string | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  // Load saved card from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem("valentineCardImage")
    const savedPrompt = localStorage.getItem("valentineCardPrompt")
    const savedUploadedImage = localStorage.getItem("valentineUploadedImage")

    if (savedImage) setGeneratedImage(savedImage)
    if (savedPrompt) setGeneratedPrompt(savedPrompt)
    if (savedUploadedImage) setUploadedImage(savedUploadedImage)
  }, [])

  const cardStyles = [
    { value: "cartoon", label: "Cartoon" },
    { value: "watercolor", label: "Aquarela" },
    { value: "digital-art", label: "Arte Digital" },
    { value: "oil-painting", label: "Pintura a Óleo" },
    { value: "pop-art", label: "Pop Art" },
    { value: "anime", label: "Anime" },
  ]

  const cardThemes = [
    { value: "romantic", label: "Romântico" },
    { value: "vintage", label: "Amor Vintage" },
    { value: "modern", label: "Moderno & Elegante" },
    { value: "fantasy", label: "Fantasia" },
    { value: "minimalist", label: "Minimalista" },
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setUploadedImage(result)
        localStorage.setItem("valentineUploadedImage", result)
      }
      reader.readAsDataURL(file)
    } else {
      setError("Por favor, envie um arquivo de imagem (JPEG, PNG, etc.)")
    }
  }

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFile(file)
    }
  }, [])

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  // Melhorar a função buildPrompt para criar prompts mais detalhados e eficazes
  const buildPrompt = () => {
    if (!uploadedImage) return ""

    let basePrompt = `Create a beautiful Valentine's Day card transformation of this couple photo. Use ${style} style`

    // Add theme with more detailed descriptions
    switch (theme) {
      case "romantic":
        basePrompt +=
          " with a warm, intimate romantic atmosphere. Add soft lighting, rose petals, and a dreamy background."
        break
      case "vintage":
        basePrompt +=
          " with a nostalgic vintage love letter aesthetic. Include aged paper texture, classic typography, and sepia tones."
        break
      case "modern":
        basePrompt +=
          " with a clean, contemporary design. Use bold typography, minimalist elements, and elegant composition."
        break
      case "fantasy":
        basePrompt +=
          " with a magical, enchanted atmosphere. Add fantasy elements like glowing particles, ethereal lighting, and dreamlike scenery."
        break
      case "minimalist":
        basePrompt +=
          " with a refined, elegant minimalist design. Focus on negative space, subtle colors, and essential elements only."
        break
    }

    // Add names with artistic direction
    if (name1 && name2) {
      basePrompt += `. Artistically incorporate the names "${name1}" and "${name2}" in an elegant, integrated way that complements the design.`
    }

    // Add message if provided
    if (message && message.trim()) {
      basePrompt += ` Include the message: "${message}" in a way that stands out yet harmonizes with the overall design.`
    }

    // Add hearts and Valentine's elements with more specificity
    if (includeHearts) {
      basePrompt +=
        " Incorporate romantic Valentine's Day symbols like hearts, cupid arrows, roses, or love birds in a tasteful, non-overwhelming way."
    }

    // Add colorfulness with more artistic direction
    if (colorfulness[0] > 80) {
      basePrompt +=
        " Use a vibrant, rich color palette with high saturation and contrast to create a visually striking card."
    } else if (colorfulness[0] > 50) {
      basePrompt +=
        " Use a balanced, moderately colorful palette that creates a harmonious, pleasant visual experience."
    } else {
      basePrompt +=
        " Use a subtle, muted color palette with soft tones and gentle contrasts for an understated, elegant look."
    }

    // Add composition guidance
    basePrompt +=
      " Ensure the couple remains the focal point of the composition. Create a balanced, professional design suitable for a high-quality Valentine's Day card."

    return basePrompt
  }

  // Melhorar a função downloadCard para garantir o download direto
  const downloadCard = async () => {
    if (!generatedImage) return

    try {
      // Criar um elemento temporário para o download
      const link = document.createElement("a")

      // Verificar se a URL é uma data URL ou uma URL remota
      if (generatedImage.startsWith("data:")) {
        // Se já for uma data URL, use-a diretamente
        link.href = generatedImage
      } else {
        // Se for uma URL remota, busque a imagem e converta para blob
        try {
          const response = await fetch(generatedImage)
          const blob = await response.blob()
          link.href = URL.createObjectURL(blob)
        } catch (error) {
          console.error("Erro ao buscar imagem remota:", error)
          // Fallback: usar a URL diretamente
          link.href = generatedImage
        }
      }

      // Configurar o nome do arquivo
      link.download = `valentine-card-${name1}-${name2}.png`

      // Adicionar à página, clicar e remover
      document.body.appendChild(link)
      link.click()

      // Pequeno atraso antes de remover o link e revogar o objeto URL
      setTimeout(() => {
        document.body.removeChild(link)
        if (!generatedImage.startsWith("data:")) {
          URL.revokeObjectURL(link.href)
        }
      }, 100)
    } catch (error) {
      console.error("Erro ao baixar o cartão:", error)
      alert("Ocorreu um erro ao baixar o cartão. Por favor, tente novamente.")
    }
  }

  // Melhorar o armazenamento em cache local
  const generateCard = async () => {
    if (!uploadedImage) {
      setError("Por favor, envie uma foto do casal primeiro")
      return
    }

    if (!name1 || !name2) {
      setError("Por favor, insira os nomes do casal")
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

      const response = await fetch("/api/generate-valentine-card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageData: uploadedImage,
          prompt,
          name1,
          name2,
          message,
          style,
          theme,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeout)

      // Verificação robusta do tipo de conteúdo
      const contentType = response.headers.get("content-type")
      if (!contentType?.includes("application/json")) {
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

      // Salvar no estado e no localStorage
      setGeneratedImage(imageUrl)
      setGeneratedPrompt(revisedPrompt)

      // Salvar dados completos no localStorage
      try {
        localStorage.setItem("valentineCardImage", imageUrl)
        localStorage.setItem("valentineCardPrompt", revisedPrompt)
        localStorage.setItem("valentineCardNames", JSON.stringify({ name1, name2 }))
        localStorage.setItem("valentineCardMessage", message || "")
        localStorage.setItem("valentineCardStyle", style)
        localStorage.setItem("valentineCardTheme", theme)
        localStorage.setItem("valentineCardDate", new Date().toISOString())
      } catch (storageError) {
        console.error("Erro ao salvar no localStorage:", storageError)
        // Continuar mesmo se o localStorage falhar
      }
    } catch (error) {
      console.error("Erro ao gerar cartão:", error)

      let errorMessage = "Ocorreu um erro ao gerar seu cartão. Por favor, tente novamente."

      if (error instanceof Error) {
        // Tratamento específico para timeout
        if (error.name === "AbortError") {
          errorMessage = "A geração demorou muito. Tente com um prompt mais simples."
        } else {
          errorMessage = error.message
        }
      }

      setError(errorMessage)
      // Usar a imagem original como fallback
      setGeneratedImage(uploadedImage)
    } finally {
      setIsGenerating(false)
    }
  }

  const shareCard = async () => {
    if (!generatedImage) return

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Meu Cartão de Dia dos Namorados",
          text: `Veja este cartão de Dia dos Namorados que criei para ${name1} & ${name2}`,
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
    localStorage.removeItem("valentineCardImage")
    localStorage.removeItem("valentineCardPrompt")
    localStorage.removeItem("valentineUploadedImage")
    setGeneratedImage("")
    setGeneratedPrompt("")
    setUploadedImage(null)
    setActiveTab("customize")
  }

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="customize" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="customize" className="data-[state=active]:bg-pink-600 text-black">
              <Palette className="h-4 w-4 mr-2" />
              Personalize seu cartão
            </TabsTrigger>
            <TabsTrigger value="result" className="data-[state=active]:bg-pink-600 text-black">
              <ImageIcon className="h-4 w-4 mr-2" />
              Seu cartão de Dia dos Namorados
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
                {/* Photo Upload */}
                <Card
                  className={`border-dashed border-2 ${
                    isDragging ? "border-pink-400 bg-pink-500/10" : "border-pink-300/20 bg-pink-950/30"
                  } hover:border-pink-400 transition-colors`}
                >
                  <CardContent className="p-6">
                    <div
                      className="flex flex-col items-center justify-center gap-4 cursor-pointer"
                      onClick={triggerFileInput}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                      />
                      {uploadedImage ? (
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                          <Image
                            src={uploadedImage || "/placeholder.svg"}
                            alt="Foto do casal"
                            fill
                            className="object-cover"
                            unoptimized={true}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4">
                            <p className="text-white text-sm">Clique ou arraste para trocar a foto</p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-12 w-12 text-pink-300" />
                          <div className="text-center">
                            <p className="text-pink-200 font-medium">Envie a foto do casal</p>
                            <p className="text-zinc-400 text-sm mt-1">Arraste e solte ou clique para procurar</p>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-pink-200">
                    Sua Mensagem de Amor (Opcional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Digite sua mensagem de amor aqui..."
                    className="min-h-[120px] bg-pink-950/30 border-pink-300/20 focus:border-pink-400/50 placeholder:text-zinc-500 text-pink-200"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name1" className="text-sm text-pink-200">
                      Primeiro Nome
                    </Label>
                    <Input
                      id="name1"
                      placeholder="Nome da primeira pessoa"
                      className="bg-pink-950/30 border-pink-300/20 focus:border-pink-400/50 placeholder:text-zinc-500 text-pink-200"
                      value={name1}
                      onChange={(e) => setName1(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name2" className="text-sm text-pink-200">
                      Segundo Nome
                    </Label>
                    <Input
                      id="name2"
                      placeholder="Nome da segunda pessoa"
                      className="bg-pink-950/30 border-pink-300/20 focus:border-pink-400/50 placeholder:text-zinc-500 text-pink-200"
                      value={name2}
                      onChange={(e) => setName2(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-pink-200">Estilo do Cartão</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger className="bg-pink-950/30 border-pink-300/20 text-pink-200">
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
                  <Label className="text-sm text-pink-200">Tema do Dia dos Namorados</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger className="bg-pink-950/20 border-pink-300/20 text-pink-200">
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
                    <Label htmlFor="colorfulness" className="text-sm text-pink-200">
                      Coloração do Cartão
                    </Label>
                    <span className="text-xs text-pink-300">{colorfulness[0]}%</span>
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
                  <Switch id="include-hearts" checked={includeHearts} onCheckedChange={setIncludeHearts} />
                  <Label htmlFor="include-hearts" className="text-sm text-pink-200">
                    Incluir corações e símbolos do Dia dos Namorados
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
                disabled={!uploadedImage || !name1 || !name2 || isGenerating}
                className="bg-gradient-to-r from-pink-500 to-rose-700 hover:from-pink-600 hover:to-rose-800 text-white px-8 py-6"
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
                    Gerar Cartão de Dia dos Namorados
                  </>
                )}
              </Button>
            </motion.div>
          </TabsContent>

          <TabsContent value="result" className="space-y-8">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="h-12 w-12 text-pink-400 animate-spin mb-4" />
                <p className="text-pink-200 text-lg">Criando seu cartão romântico de Dia dos Namorados...</p>
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
                  className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border-8 border-pink-300/20 shadow-2xl"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={generatedImage || "/placeholder.svg"}
                      alt="Generated Valentine's Card"
                      fill
                      className="object-cover"
                      unoptimized={true}
                      priority
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      {message && (
                        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl max-w-md text-center mb-4">
                          <p className="text-white text-xl md:text-2xl font-medium">{message}</p>
                        </div>
                      )}
                      {name1 && name2 && (
                        <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full">
                          <p className="text-white text-lg font-medium">
                            {name1} & {name2}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button onClick={downloadCard} className="bg-pink-600 hover:bg-pink-700 text-white" size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Baixar Cartão
                  </Button>

                  <Button
                    onClick={shareCard}
                    variant="outline"
                    className="border-pink-500/20 bg-pink-500/10 hover:bg-pink-500/20 text-pink-200"
                    size="lg"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Compartilhar
                  </Button>

                  <Button
                    onClick={clearCache}
                    variant="ghost"
                    className="text-pink-300 hover:text-pink-200 hover:bg-pink-500/10"
                    size="lg"
                  >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Criar Novo
                  </Button>
                </div>

                <div className="mt-8 p-4 rounded-lg bg-pink-950/30 border border-pink-300/10">
                  <p className="text-sm text-zinc-400 mb-2">Prompt utilizado:</p>
                  <p className="text-xs text-zinc-500 font-mono">{generatedPrompt}</p>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <Heart className="h-12 w-12 text-pink-400 mb-4" />
                <p className="text-pink-200 text-lg">Nenhum cartão gerado ainda</p>
                <p className="text-zinc-400 text-sm mt-2">Vá para a aba Personalizar para criar seu cartão</p>
                <Button
                  onClick={() => setActiveTab("customize")}
                  variant="link"
                  className="text-pink-400 hover:text-pink-300 mt-4"
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
