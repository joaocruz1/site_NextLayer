import type { NextApiRequest, NextApiResponse } from "next"

// Configuração de timeout aumentada
export const config = {
  api: {
    responseLimit: "10mb",
    bodyParser: {
      sizeLimit: "10mb",
    },
    externalResolver: true,
  },
}

async function generateImageWithAI(imageData: string, prompt: string, name1: string, name2: string, message: string) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error("OpenAI API key not configured")
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 30000) // 30 segundos timeout

    // Create a safe prompt for the Valentine's Day card
    const safePrompt = `Transform this couple photo into a Valentine's Day card with ${prompt} style. ${
      name1 && name2 ? `Include the names "${name1}" and "${name2}" in an elegant way.` : ""
    }${message ? ` The card should include the message: "${message}"` : ""} Make it romantic and beautiful.`

    // For DALL-E 3, we would need to use the image editing or variation endpoint
    // Since DALL-E 3 doesn't directly support image-to-image transformation as described,
    // we'll simulate this by creating a new image based on the prompt

    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: safePrompt,
        n: 1,
        size: "1024x1024",
        response_format: "url",
        model: "dall-e-3",
      }),
      signal: controller.signal,
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
      revisedPrompt: data.data[0]?.revised_prompt || safePrompt,
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
      message: "Only POST requests are accepted",
    })
  }

  try {
    const { imageData, prompt, name1, name2, message, style, theme } = req.body

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({
        success: false,
        error: "Invalid input",
        message: "Prompt must be a non-empty string",
      })
    }

    if (!imageData) {
      return res.status(400).json({
        success: false,
        error: "Invalid input",
        message: "Image data is required",
      })
    }

    const { imageUrl, revisedPrompt } = await generateImageWithAI(
      imageData,
      prompt,
      name1 || "",
      name2 || "",
      message || "",
    )

    return res.status(200).json({
      success: true,
      data: {
        imageUrl,
        revisedPrompt,
        fallbackUrl: `https://placehold.co/1024/pink/white?text=Valentine+Card&font=montserrat`,
      },
    })
  } catch (error) {
    console.error("API Route Error:", error)

    // Garante que sempre retornamos JSON válido
    return res.status(500).json({
      success: false,
      error: "Failed to generate image",
      message: error instanceof Error ? error.message : "Unknown error",
      data: {
        fallbackUrl: `https://placehold.co/1024/pink/white?text=Valentine+Card&font=montserrat`,
      },
    })
  }
}
