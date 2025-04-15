"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  const [name, setName] = useState("")
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

  const cardStyles = [
    { value: "watercolor", label: "Watercolor" },
    { value: "digital-art", label: "Digital Art" },
    { value: "cartoon", label: "Cartoon" },
    { value: "realistic", label: "Realistic" },
    { value: "minimalist", label: "Minimalist" },
  ]

  const cardThemes = [
    { value: "traditional", label: "Traditional Easter" },
    { value: "spring", label: "Spring Flowers" },
    { value: "cute-animals", label: "Cute Animals" },
    { value: "religious", label: "Religious" },
    { value: "modern", label: "Modern & Abstract" },
  ]

  const buildPrompt = () => {
    const easterPrompts = {
      traditional: "A beautiful traditional Easter card with decorated eggs, spring flowers, and a pastel color palette.",
      spring: "A vibrant spring-themed Easter card with blooming flowers, butterflies, and fresh green foliage.",
      "cute-animals": "An adorable Easter card featuring cute bunnies, chicks, and lambs in a playful spring setting.",
      religious: "A meaningful Easter card with symbolic elements of resurrection, cross, and divine light.",
      modern: "A contemporary Easter card with abstract shapes, modern typography, and a minimalist design approach.",
    }

    const styleDescriptions = {
      watercolor: "painted in a soft watercolor style with gentle brush strokes and flowing colors",
      "digital-art": "created with vibrant digital art techniques featuring bold colors and clean lines",
      cartoon: "illustrated in a cheerful cartoon style with cute characters and playful elements",
      realistic: "rendered in a realistic style with detailed textures and natural lighting",
      minimalist: "designed with a minimalist approach using simple shapes and limited color palette",
    }

    const basePrompt = easterPrompts[theme as keyof typeof easterPrompts] || easterPrompts.traditional
    const stylePrompt = styleDescriptions[style as keyof typeof styleDescriptions] || styleDescriptions.watercolor

    const elementsPrompt = includeElements
      ? "The design includes traditional Easter elements like decorated eggs, rabbits, and spring flowers."
      : "The design focuses on a clean, elegant look without traditional Easter symbols."

    const colorPrompt =
      colorfulness[0] > 70
        ? "The color palette is vibrant and cheerful with bright spring colors."
        : colorfulness[0] > 30
          ? "The color palette is balanced with medium-toned spring colors."
          : "The color palette is subtle and muted with soft pastel tones."

    const messagePrompt = `The card prominently displays the message: "${message}"${name ? ` and is signed from: ${name}` : ""}.`

    return `${basePrompt} The artwork is ${stylePrompt}. ${elementsPrompt} ${colorPrompt} ${messagePrompt} The overall composition creates a warm, festive Easter atmosphere that conveys joy and celebration. Make this a high-quality, professional greeting card design.`
  }

  const generateCard = async () => {
    if (!message) return

    try {
      setIsGenerating(true)
      setActiveTab("result")
      setError(null)

      const prompt = buildPrompt()
      setGeneratedPrompt(prompt)

      const response = await fetch("/api/generate-easter-card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to generate Easter card")
      }

      const data = await response.json()
      setGeneratedImage(data.imageUrl)
    } catch (error: any) {
      console.error("Error generating card:", error)
      setError(error.message || "Failed to generate Easter card. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadCard = () => {
    if (!generatedImage) return;
  
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    canvas.width = 1024;
    canvas.height = 1024;
  
    const img = new (window as any).Image() as HTMLImageElement;
    img.crossOrigin = "anonymous";
    img.src = generatedImage;
  
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = "white";
      ctx.font = "bold 48px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
  
      const maxWidth = canvas.width * 0.8;
      const words = message.split(" ");
      const lines = [];
      let currentLine = words[0];
  
      for (let i = 1; i < words.length; i++) {
        const testLine = currentLine + " " + words[i];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth) {
          lines.push(currentLine);
          currentLine = words[i];
        } else {
          currentLine = testLine;
        }
      }
      lines.push(currentLine);
  
      const lineHeight = 60;
      const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;
      lines.forEach((line, i) => {
        ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
      });
  
      if (name) {
        ctx.font = "italic 36px Arial";
        ctx.fillText(`From: ${name}`, canvas.width / 2, startY + lines.length * lineHeight + 60);
      }
  
      try {
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "easter-card.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.error("Error creating downloadable image:", e);
        const link = document.createElement("a");
        link.href = generatedImage;
        link.download = "easter-card.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };
  
    img.onerror = () => {
      console.error("Error loading image for download");
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "easter-card.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  };

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
      alert("Sharing is not supported in your browser. You can copy the URL manually.")
    }
  }

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="customize" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="customize" className="data-[state=active]:bg-purple-600  text-black">
              <Palette className="h-4 w-4 mr-2" />
              Customize Your Card
            </TabsTrigger>
            <TabsTrigger value="result" className="data-[state=active]:bg-purple-600 text-black">
              <ImageIcon className="h-4 w-4 mr-2" />
              Your Easter Card
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
                    Your Easter Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your Easter wishes here..."
                    className="min-h-[120px] bg-purple-950/30 border-purple-300/20 focus:border-purple-400/50 placeholder:text-zinc-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-purple-200">
                    From (Optional)
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-purple-950/30 border-purple-300/20 focus:border-purple-400/50 placeholder:text-zinc-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm text-purple-200">Card Style</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger className="bg-purple-950/30 border-purple-300/20 text-purple-200">
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
                  <Label className="text-sm text-purple-200">Easter Theme</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger className="bg-purple-950/20 border-purple-300/20 text-purple-200">
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
                    <Label htmlFor="colorfulness" className="text-sm text-purple-200">
                      Colorfulness
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
                  <Switch id="include-elements" checked={includeElements} onCheckedChange={setIncludeElements} />
                  <Label htmlFor="include-elements" className="text-sm text-purple-200">
                    Include Easter elements (eggs, bunnies, flowers)
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
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Easter Card
                  </>
                )}
              </Button>
            </motion.div>
          </TabsContent>

          <TabsContent value="result" className="space-y-8">
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="h-12 w-12 text-purple-400 animate-spin mb-4" />
                <p className="text-purple-200 text-lg">Creating your magical Easter card...</p>
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
                  className="relative mx-auto max-w-2xl overflow-hidden rounded-xl border-8 border-purple-300/20 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-pink-500/10 to-yellow-500/20 mix-blend-overlay" />

                  <div className="relative aspect-[4/3] bg-gradient-to-b from-purple-900/50 to-purple-950/50">
                    <Image
                      src={generatedImage || "/placeholder.svg"}
                      alt="Generated Easter Card"
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl max-w-md text-center">
                        <p className="text-white text-xl md:text-2xl font-medium mb-4">{message}</p>
                        {name && <p className="text-white text-lg">From: {name}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button onClick={downloadCard} className="bg-purple-600 hover:bg-purple-700 text-white" size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download Card
                  </Button>

                  <Button
                    onClick={shareCard}
                    variant="outline"
                    className="border-purple-500/20 bg-purple-500/10 hover:bg-purple-500/20 text-purple-200"
                    size="lg"
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Share Card
                  </Button>

                  <Button
                    onClick={() => setActiveTab("customize")}
                    variant="ghost"
                    className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/10"
                    size="lg"
                  >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Create Another
                  </Button>
                </div>

                <div className="mt-8 p-4 rounded-lg bg-purple-950/30 border border-purple-300/10">
                  <p className="text-sm text-zinc-400 mb-2">Generated prompt:</p>
                  <p className="text-xs text-zinc-500">{generatedPrompt}</p>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <Egg className="h-12 w-12 text-purple-400 mb-4" />
                <p className="text-purple-200 text-lg">No card generated yet</p>
                <p className="text-zinc-400 text-sm mt-2">Go to the Customize tab to create your Easter card</p>
                <Button
                  onClick={() => setActiveTab("customize")}
                  variant="link"
                  className="text-purple-400 hover:text-purple-300 mt-4"
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