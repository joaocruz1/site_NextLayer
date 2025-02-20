import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Método não permitido" });
    return;
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: "Campos ausentes" });
    return;
  }

  try {
    // Verifica se as variáveis de ambiente estão definidas
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_SECURE ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      throw new Error("Variáveis de ambiente incompletas.");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Apenas para testes locais (remova ou ajuste para produção)
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: email,
      to: "nextlayer99@gmail.com",
      subject: `Nova mensagem de ${name} via contato do Next Layer`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email enviado" });
  } catch (error: any) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ error: error.message || "Erro desconhecido ao enviar e-mail." });
  }
}