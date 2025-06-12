// pages/api/customer/create.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';


// Importe aqui o seu cliente de banco de dados (ex: Prisma, Mongoose, etc.)
// import { db } from '../../../lib/db'; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 1. Garante que o método da requisição seja POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }


  const authHeader = req.headers.authorization;

  const expectedToken = `Bearer ${process.env.API_SECRET_TOKEN}`;

  if (!authHeader || authHeader !== expectedToken) {
    return res.status(401).json({ error: 'Acesso não autorizado.' });
  }
  
  // --- FIM DA VALIDAÇÃO ---

  try {
    const { password, email, cpf, name, ...customerData } = req.body;

    // 2. Validação básica dos dados recebidos
    if (!password || !email || !cpf || !name) {
      return res.status(400).json({ error: 'Campos obrigatórios (nome, cpf, email, password) não foram preenchidos.' });
    }

    const brazmovelApiUrl = `https://api.brazmovel.com.br/v1/customer`;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
  
  const newUserPayload = {
      email,
      cpf,
      name,
      password: passwordHash, // NUNCA salve a senha original
      ...customerData
    };



  const response = await fetch(brazmovelApiUrl, {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${process.env.TOKEN_BRAZ_MOVEL}}`,
        'Content-Type': 'application/json',
      },
      body: req.body
    });
  
    if (!response.ok) {
      console.log("Ocorreu um erro para comunicação com api BRAZMOVEL")
    }else{

    const newUserPayloadPrisma = {
      id :"1212233a068b589-4c93-40ef-b3d5-d0005c461465",
      email,
      cpf,
      name,
      password: passwordHash, // NUNCA salve a senha original
      status : "ACTIVE"
    };
    const novoUser = await prisma.users.create({
      data: newUserPayloadPrisma as any,
      });
      
      return res.status(201).json({ message: 'Usuário criado com sucesso!', novoUser});
    }

    console.log("Dados que seriam salvos no banco:", newUserPayload);

  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ error: 'Ocorreu um erro interno ao criar o usuário.' });
  }
}