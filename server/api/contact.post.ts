import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, message } = body

  const config = useRuntimeConfig()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Missing fields' }
  }

  // Config SMTP OVH
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: true,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'contact@dbouraoui.fr', // destination
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `<p>${message}</p><p>De : ${name} - ${email}</p>`,
    })

    await transporter.sendMail({
      from: `"Dylan Bouraoui" <${config.smtpUser}>`,
      to: email,
      subject: 'Confirmation : Nous avons bien reçu votre message',
      text: `Bonjour ${name},\n\nMerci pour votre message. Je l'ai bien reçu et je vous répondrai très prochainement.\n\nCordialement,\nDylan Bouraoui`,
      html: `<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <p>Bonjour ${name},</p>

    <p>Votre demande a bien été reçue et sera traitée dans les plus brefs délais. Vous recevrez une réponse personnalisée dès que possible.</p>

    <p>En attendant, vous pouvez visiter notre site web pour plus d’informations : <a href="https://dbouraoui.fr" target="_blank">dbouraoui.fr</a></p>

    <p>Cordialement,<br>
       <strong>Dylan Bouraoui</strong></p>

    <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;" />

    <p style="font-size: 0.9em; color: #666;">
      Ce message est généré automatiquement. Merci de ne pas y répondre directement.
    </p>
  </body>
</html>
`,
    })

    return { status: 'success' }
  } catch (err) {
    console.error(err)
    return { status: 'error', message: err.message }
  }
})
