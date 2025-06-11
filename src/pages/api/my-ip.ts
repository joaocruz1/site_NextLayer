// pages/api/my-ip.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://api.ipify.org?format=json'); // Um serviço simples para obter o IP
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json({ ip: data.ip, message: 'Este é o IP de saída da sua Vercel Function.' });
  } catch (error) {
    console.error('Erro ao obter IP:', error);
    res.status(500).json({ error: 'Não foi possível obter o IP de saída.' });
  }
}