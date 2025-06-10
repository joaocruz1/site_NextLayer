import type { NextApiRequest, NextApiResponse } from 'next';
import { transporter } from '../../../../lib/nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // --- INÍCIO DA VALIDAÇÃO DO TOKEN ---

    // 1. Pega o header 'Authorization' da requisição
    const authHeader = req.headers.authorization;

    // 2. Pega o seu token secreto das variáveis de ambiente
    const expectedToken = `Bearer ${process.env.API_SECRET_TOKEN}`;

    // 3. Verifica se o header existe e se é igual ao esperado
    if (!authHeader || authHeader !== expectedToken) {
      // Se o token for inválido ou não existir, retorna um erro 401 (Não Autorizado)
      return res.status(401).json({ error: 'Acesso não autorizado.' });
    }

    // --- FIM DA VALIDAÇÃO DO TOKEN ---

    // Se o token for válido, o código continua executando normalmente.
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'O e-mail é obrigatório.' });
    }

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
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
                  <p style="font-size: 12px; color: #888;">Se você não solicitou este código, por favor, ignore este e-mail.</p>
                </div>`,
      };

      await transporter.sendMail(mailOptions);
      
      console.log(`Código de verificação enviado para: ${email}`);
      
      return res.status(200).json({ message: 'Código de verificação enviado com sucesso!' });

    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      return res.status(500).json({ error: 'Ocorreu um erro ao enviar o e-mail.' });
    }

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}