import type { NextApiRequest, NextApiResponse } from "next"

async function generateImageWithAI(prompt: string, message: string, name: string) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.error("OpenAI API key not configured")
    throw new Error("Service configuration error")
  }

  try {
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
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("OpenAI API Error Details:", errorData)
      throw new Error(errorData.error?.message || "API request failed")
    }

    const data = await response.json()
    return data.data[0].url

  } catch (error) {
    console.error("OpenAI API Error:", error)
    throw error
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.setHeader("Allow", ["POST"]).status(405).json({
      error: "Method not allowed",
      details: "Only POST requests are accepted"
    })
  }

  try {
    const { prompt, message, name } = req.body

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({
        error: "Invalid input",
        details: "Prompt must be a non-empty string"
      })
    }

    const imageUrl = await generateImageWithAI(prompt, message, name)
    return res.status(200).json({ imageUrl })

  } catch (error) {
    console.error("API Route Error:", error)
    
    const fallbackUrl = `https://placehold.co/1024/purple/white?text=Easter+Card&font=montserrat`
    
    return res.status(200).json({
      imageUrl: fallbackUrl,
      prompt: req.body.prompt,
      note: "Used fallback image",
      warning: error instanceof Error ? error.message : "Image generation failed"
    })
  }
}