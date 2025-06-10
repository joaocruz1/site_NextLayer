import type { NextApiRequest, NextApiResponse } from 'next';
import { transporter } from '../../../../lib/nodemailer'; // Importe o transporter

// O handler da API é exportado como a função default
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verifica se o método da requisição é POST
  if (req.method === 'POST') {
    const { email } = req.body; // Pega o email do corpo da requisição

    // Verifica se o email foi fornecido
    if (!email) {
      return res.status(400).json({ error: 'O e-mail é obrigatório.' });
    }

    // Gera um código de verificação aleatório de 6 dígitos
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      // Configurações do e-mail a ser enviado
      const mailOptions = {
        from: process.env.EMAIL_FROM, // Remetente
        to: email,                     // Destinatário
        subject: 'Seu código de verificação',
        html: `<div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
                <h2 style="color: #0056b3;">Seu Código de Verificação</h2>
                <p>Olá,</p>
                <p>Obrigado por se registrar. Use o código abaixo para confirmar seu endereço de e-mail:</p>
                <p style="font-size: 24px; font-weight: bold; letter-spacing: 4px; color: #0056b3; margin: 20px 0;">
                  ${verificationCode}
                </p>
                <p>Este código expira em 10 minutos.</p>
                <hr style="border: 0; border-top: 1px solid #eee;" />
                <p style="font-size: 12px; color: #888;">Se você не solicitou este código, por favor, ignore este e-mail.</p>
              </div>`,
      };

      // Envia o e-mail
      await transporter.sendMail(mailOptions);
      
      console.log(`Código de verificação enviado para: ${email}`);
      
      // Retorna uma resposta de sucesso
      // Em uma aplicação real, você salvaria o código e o email em um banco de dados
      return res.status(200).json({ message: 'Código de verificação enviado com sucesso!' });

    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      return res.status(500).json({ error: 'Ocorreu um erro ao enviar o e-mail.' });
    }

  } else {
    // Se não for POST, informa que o método não é permitido
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}