// pages/api/generate-easter-card.ts
import type { NextApiRequest, NextApiResponse } from "next"

// Configuração de timeout aumentada
export const config = {
  api: {
    responseLimit: '10mb',
    bodyParser: {
      sizeLimit: '10mb',
    },
    externalResolver: true,
  },
}

async function generateImageWithAI(prompt: string, message: string, name: string) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error("OpenAI API key not configured")
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 30000) // 30 segundos timeout

    const safePrompt = `Professional Easter greeting card design featuring ${prompt}. The card should include the message: "${message}"${
      name ? ` and be from: ${name}` : ''
    }. Use beautiful colors and elegant design.`
    
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: safePrompt,
        n: 1,
        size: "1024x1024",
        response_format: "url",
        model: "dall-e-3",
      }),
      signal: controller.signal
    })

    clearTimeout(timeout)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("OpenAI API Error Details:", errorData)
      throw new Error(errorData.error?.message || "API request failed")
    }

    const data = await response.json()
    
    return {
      imageUrl: data.data[0]?.url,
      revisedPrompt: data.data[0]?.revised_prompt || safePrompt
    }
  } catch (error) {
    console.error("OpenAI API Error:", error)
    throw error instanceof Error ? error : new Error("Failed to generate image")
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"])
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
      message: "Only POST requests are accepted"
    })
  }

  try {
    const { prompt, message, name } = req.body

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({
        success: false,
        error: "Invalid input",
        message: "Prompt must be a non-empty string"
      })
    }

    const { imageUrl, revisedPrompt } = await generateImageWithAI(prompt, message, name || "")
    
    return res.status(200).json({ 
      success: true,
      data: {
        imageUrl,
        revisedPrompt,
        fallbackUrl: `https://placehold.co/1024/purple/white?text=Easter+Card&font=montserrat`
      }
    })

  } catch (error) {
    console.error("API Route Error:", error)
    
    // Garante que sempre retornamos JSON válido
    return res.status(500).json({
      success: false,
      error: "Failed to generate image",
      message: error instanceof Error ? error.message : "Unknown error",
      data: {
        fallbackUrl: `https://placehold.co/1024/purple/white?text=Easter+Card&font=montserrat`
      }
    })
  }
}