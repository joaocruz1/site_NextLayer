import type { NextApiRequest, NextApiResponse } from "next"

async function generateImageWithAI(prompt: string, message: string, name: string) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error("OpenAI API key not configured")
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

    const data = await response.json()
    
    if (!response.ok) {
      console.error("OpenAI API Error Details:", data)
      throw new Error(data.error?.message || "API request failed")
    }

    return data.data[0].url
  } catch (error) {
    console.error("OpenAI API Error:", error)
    throw error
  }
}

// api/generate-easter-card.ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Configuração de CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
      message: 'Only POST requests are accepted'
    })
  }

  try {
    const { prompt, message, theme } = req.body

    // Validação básica
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Invalid input',
        message: 'Prompt is required and must be a string'
      })
    }

    // Modo de desenvolvimento - retorna uma imagem placeholder
    if (process.env.NODE_ENV === 'development') {
      return res.status(200).json({
        success: true,
        imageUrl: `https://placehold.co/1024/purple/white?text=${encodeURIComponent(prompt)}&font=montserrat`
      })
    }

    // Chamada real para a API da OpenAI
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      throw new Error('OpenAI API key not configured')
    }

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: `Professional Easter card: ${prompt}. Message: "${message}". Theme: ${theme}.`,
        n: 1,
        size: '1024x1024',
        model: 'dall-e-3'
      })
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('OpenAI API Error:', data)
      throw new Error(data.error?.message || 'Failed to generate image')
    }

    if (!data.data?.[0]?.url) {
      throw new Error('No image URL in response')
    }

    return res.status(200).json({
      success: true,
      imageUrl: data.data[0].url
    })

  } catch (error) {
    console.error('API Error:', error)
    
    return res.status(500).json({
      success: false,
      error: 'Image generation failed',
      message: error instanceof Error ? error.message : 'Unknown error',
      fallbackUrl: 'https://placehold.co/1024/red/white?text=Error+Generating+Card&font=montserrat'
    })
  }
}