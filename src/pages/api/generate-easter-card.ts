import type { NextApiRequest, NextApiResponse } from "next"

async function generateImageWithAI(prompt: string) {
  try {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) throw new Error("API key not found")
    
    console.log("Payload:", JSON.stringify({
        prompt,
        n: 1,
        size: "1024x1024",
        
        }));

    const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            prompt: "a cute easter bunny with eggs in a sunny field",
            n: 1,
            size: "1024x1024",
        }),
        });
        

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error?.message || "Failed to generate image")
    }

    const data = await response.json()
    return data.data[0].url
  } catch (error) {
    console.error("Error generating image:", error)
    throw error
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { prompt } = req.body

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" })
    }

    const imageUrl = await generateImageWithAI(prompt)

    return res.status(200).json({ imageUrl, prompt })
  } catch (error: any) {
    console.error("Error in API route:", error)

    let errorMessage = "Failed to generate Easter card"
    if (error.message) errorMessage = error.message

    return res.status(500).json({
      error: errorMessage,
      details: error.toString(),
    })
  }
}
