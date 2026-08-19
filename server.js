import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import 'dotenv/config'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app  = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Serve static build
app.use(express.static(join(__dirname, 'dist')))

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, whatsapp, company, service, message } = req.body

  if (!name || !email || !whatsapp || !service || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando.' })
  }

  try {
    await transporter.sendMail({
      from:    `"Site Spooker" <${process.env.SMTP_USER}>`,
      to:      process.env.MAIL_TO || 'comercial@spooker.com.br',
      subject: `[Site] Nova solicitação de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#7c3aed">Nova solicitação via site</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;width:140px">Nome</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">E-mail</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">WhatsApp</td><td style="padding:8px;border-bottom:1px solid #eee">${whatsapp}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Empresa</td><td style="padding:8px;border-bottom:1px solid #eee">${company || '—'}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Serviço</td><td style="padding:8px;border-bottom:1px solid #eee">${service}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Mensagem</td><td style="padding:8px;white-space:pre-line">${message}</td></tr>
          </table>
        </div>
      `,
    })
    res.json({ ok: true })
  } catch (err) {
    console.error('Erro ao enviar email:', err)
    res.status(500).json({ error: 'Falha ao enviar. Tente pelo WhatsApp.' })
  }
})

// SPA fallback
app.get('*', (_, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Spooker rodando na porta ${PORT}`)
})
