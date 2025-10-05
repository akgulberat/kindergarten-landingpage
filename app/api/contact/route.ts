import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
    try {
        const { parentName, childName, email, phone, age, message } = await req.json()

        // Validation
        if (!parentName || !childName || !email || !phone || !age) {
            return NextResponse.json({ success: false, error: "Bitte füllen Sie alle Pflichtfelder aus." }, { status: 400 })
        }

        // ✉️ Nodemailer transporter (örnek Gmail)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER, // .env içine yaz
                pass: process.env.SMTP_PASS,
            },
        })

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: "kitawasserfee@gmail.com", // hedef e-posta
            subject: `Neue Kontaktanfrage von ${parentName}`,
            html: `
        <h3>Neue Nachricht von Kita Website</h3>
        <p><b>Elternname:</b> ${parentName}</p>
        <p><b>Kind:</b> ${childName}</p>
        <p><b>E-Mail:</b> ${email}</p>
        <p><b>Telefon:</b> ${phone}</p>
        <p><b>Alter:</b> ${age}</p>
        <p><b>Nachricht:</b> ${message || "(Keine Nachricht)"} </p>
      `,
        }

        await transporter.sendMail(mailOptions)
        return NextResponse.json({ success: true })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ success: false, error: "Fehler beim Senden der E-Mail." }, { status: 500 })
    }
}