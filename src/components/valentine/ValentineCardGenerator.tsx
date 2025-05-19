"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
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

  const cardStyles = [
    { value: "cartoon", label: "Cartoon" },
    { value: "watercolor", label: "Watercolor" },
    { value: "digital-art", label: "Digital Art" },
    { value: "oil-painting", label: "Oil Painting" },
    { value: "pop-art", label: "Pop Art" },
    { value: "anime", label: "Anime" },
  ]

  const cardThemes = [
    { value: "romantic", label: "Romantic" },
    { value: "vintage", label: "Vintage Love" },
    { value: "modern", label: "Modern & Sleek" },
    { value: "fantasy", label: "Fantasy" },
    { value: "minimalist", label: "Minimalist" },
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
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setError("Please upload an image file (JPEG, PNG, etc.)")
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

  const buildPrompt = () => {
    if (!uploadedImage) return ""

    let basePrompt = `Transform this couple photo into a ${style} style Valentine's Day card`

    // Add theme
    switch (theme) {
      case "romantic":
        basePrompt += " with a romantic atmosphere"
        break
      case "vintage":
        basePrompt += " with a vintage love letter aesthetic"
        break
      case "modern":
        basePrompt += " with a modern, sleek design"
        break
      case "fantasy":
        basePrompt += " with a fantasy, magical atmosphere"
        break
      case "minimalist":
        basePrompt += " with a clean, minimalist design"
        break
    }

    // Add names if provided
    if (name1 && name2) {
      basePrompt += ` featuring the names ${name1} and ${name2}`
    }

    // Add hearts if selected
    if (includeHearts) {
      basePrompt += ", include hearts and Valentine's Day symbols"
    }

    // Add colorfulness
    if (colorfulness[0] > 80) {
      basePrompt += ", very colorful and vibrant"
    } else if (colorfulness[0] < 30) {
      basePrompt += ", subtle and muted colors"
    }

    return basePrompt
  }

  const generateCard = async () => {
    if (!uploadedImage) {
      setError("Please upload a couple photo first")
      return
    }

    try {
      setIsGenerating(true)
      setActiveTab("result")
      setError(null)

      const prompt = buildPrompt()
      setGeneratedPrompt(prompt)

      // In a real implementation, you would send the image and prompt to your API
      // For this demo, we'll simulate the API call and use the uploaded image as the result

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // In a real implementation, this would be the response from your API
      // For now, we'll just use the uploaded image as a placeholder
      setGeneratedImage(uploadedImage)
    } catch (error: any) {
      console.error("Error generating card:", error)
      setError(error.message || "Failed to generate Valentine's card. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadCard = () => {
    if (!generatedImage) return

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 1024
    canvas.height = 1024

    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.src = generatedImage

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "white"
      ctx.font = "bold 48px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Draw message
      if (message) {
        const maxWidth = canvas.width * 0.8
        const words = message.split(" ")
        const lines = []
        let currentLine = words[0]

        for (let i = 1; i < words.length; i++) {
          const testLine = currentLine + " " + words[i]
          const metrics = ctx.measureText(testLine)
          if (metrics.width > maxWidth) {
            lines.push(currentLine)
            currentLine = words[i]
          } else {
            currentLine = testLine
          }
        }
        lines.push(currentLine)

        const lineHeight = 60
        const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2
        lines.forEach((line, i) => {
          ctx.fillText(line, canvas.width / 2, startY + i * lineHeight)
        })
      }

      // Draw names
      if (name1 && name2) {
        ctx.font = "italic 36px Arial"
        ctx.fillText(`${name1} & ${name2}`, canvas.width / 2, canvas.height - 100)
      }

      try {
        const dataUrl = canvas.toDataURL("image/png")
        const link = document.createElement("a")
        link.href = dataUrl
        link.download = "valentine-card.png"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (e) {
        console.error("Error creating downloadable image:", e)
        const link = document.createElement("a")
        link.href = generatedImage
        link.download = "valentine-card.png"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }

    img.onerror = () => {
      console.error("Error loading image for download")
      const link = document.createElement("a")
      link.href = generatedImage
      link.download = "valentine-card.png"
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
          title: "My Valentine's Day Card",
          text: `Check out this Valentine's card I created for ${name1} & ${name2}`,
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      alert("Sharing is not supported in your browser. You can copy the URL manually.")
    }
  }

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="customize" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="customize" className="data-[state=active]:bg-pink-600 text-black">
              <Palette className="h-4 w-4 mr-2" />
              Customize Your Card
            </TabsTrigger>
            <TabsTrigger value="result" className="data-[state=active]:bg-pink-600 text-black">
              <ImageIcon className="h-4 w-4 mr-2" />
              Your Valentine's Card
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
                            alt="Uploaded couple"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4">
                            <p className="text-white text-sm">Click or drag to change photo</p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-12 w-12 text-pink-300" />
                          <div className="text-center">
                            <p className="text-pink-200 font-medium">Upload your couple photo</p>
                            <p className="text-zinc-400 text-sm mt-1">Drag & drop or click to browse</p>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-pink-200">
                    Your Valentine's Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your Valentine's wishes here..."
                    className="min-h-[120px] bg-pink-950/30 border-pink-300/20 focus:border-pink-400/50 placeholder:text-zinc-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name1" className="text-sm text-pink-200">
                      First Name
                    </Label>
                    <Input
                      id="name1"
                      placeholder="First person's name"
                      className="bg-pink-950/30 border-pink-300/20 focus:border-pink-400/50 placeholder:text-zinc-500"
                      value={name1}
                      onChange={(e) => setName1(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name2" className="text-sm text-pink-200">
                      Second Name
                    </Label>
                    <Input
                      id="name2"
                      placeholder="Second person's name"
                      className="bg-pink-950/30 border-pink-300/20 focus:border-pink-400/50 placeholder:text-zinc-500"
                      value={name2}
                      onChange={(e) => setName2(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-pink-200">Card Style</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger className="bg-pink-950/30 border-pink-300/20 text-pink-200">
                      <SelectValue placeholder="Select style" />
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
                  <Label className="text-sm text-pink-200">Valentine's Theme</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger className="bg-pink-950/20 border-pink-300/20 text-pink-200">
                      <SelectValue placeholder="Select theme" />
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
                      Colorfulness
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
                    Include hearts and Valentine's symbols
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
                disabled={!uploadedImage || isGenerating}
                className="bg-gradient-to-r from-pink-500 to-rose-700 hover:from-pink-600 hover:to-rose-800 text-white px-8 py-6"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Valentine's Card
                  </>
                )}
              </Button>
            </motion.div>
          </TabsContent>

          <TabsContent value="result" className="space-y-8">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="h-12 w-12 text-pink-400 animate-spin mb-4" />
                <p className="text-pink-200 text-lg">Creating your romantic Valentine's card...</p>
                <p className="text-zinc-400 text-sm mt-2">This may take a few moments</p>
              </div>
            ) : error ? (
              <Alert variant="destructive" className="bg-red-900/20 border-red-500/30">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
                <Button
                  onClick={() => setActiveTab("customize")}
                  variant="link"
                  className="text-red-300 hover:text-red-200 mt-2 p-0"
                >
                  Go back and try again
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-rose-500/10 to-pink-500/20 mix-blend-overlay" />

                  <div className="relative aspect-[4/3] bg-gradient-to-b from-pink-900/50 to-pink-950/50">
                    <Image
                      src={generatedImage || "/placeholder.svg"}
                      alt="Generated Valentine's Card"
                      fill
                      className="object-cover"
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
                    Download Card
                  </Button>

                  <Button
                    onClick={shareCard}
                    variant="outline"
                    className="border-pink-500/20 bg-pink-500/10 hover:bg-pink-500/20 text-pink-200"
                    size="lg"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Share Card
                  </Button>

                  <Button
                    onClick={() => setActiveTab("customize")}
                    variant="ghost"
                    className="text-pink-300 hover:text-pink-200 hover:bg-pink-500/10"
                    size="lg"
                  >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Create Another
                  </Button>
                </div>

                <div className="mt-8 p-4 rounded-lg bg-pink-950/30 border border-pink-300/10">
                  <p className="text-sm text-zinc-400 mb-2">Generated prompt:</p>
                  <p className="text-xs text-zinc-500">{generatedPrompt}</p>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <Heart className="h-12 w-12 text-pink-400 mb-4" />
                <p className="text-pink-200 text-lg">No card generated yet</p>
                <p className="text-zinc-400 text-sm mt-2">Go to the Customize tab to create your Valentine's card</p>
                <Button
                  onClick={() => setActiveTab("customize")}
                  variant="link"
                  className="text-pink-400 hover:text-pink-300 mt-4"
                >
                  Create a card
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
