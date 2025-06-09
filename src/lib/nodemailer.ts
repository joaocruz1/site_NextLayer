import nodemailer from 'nodemailer';

const user = process.env.EMAIL_SERVER_USER;
const pass = process.env.EMAIL_SERVER_PASSWORD;
const host = process.env.EMAIL_SERVER_HOST;
const port = process.env.EMAIL_SERVER_PORT;

export const transporter = nodemailer.createTransport({
  host: host,
  port: Number(port),
  secure: false, // true para porta 465, false para outras portas
  auth: {
    user: user,
    pass: pass,
  },
});