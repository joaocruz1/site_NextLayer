import type { NextApiRequest, NextApiResponse } from 'next';

// O handler da API é exportado como a função default
export default function handler(
  req: NextApiRequest, // Usa o tipo NextApiRequest
  res: NextApiResponse  // Usa o tipo NextApiResponse
) {
  // Verifica o método da requisição dentro da função
  if (req.method === 'GET') {
    console.log("Requisição GET recebida em /api/user/register");
    
    // Usa res.status().json() para enviar a resposta
    res.status(200).json({ message: "Acesso permitido!" });
  } else {
    // Se não for GET, informa que o método não é permitido
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}