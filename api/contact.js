import nodemailer from 'nodemailer'

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method Not Allowed' })
	}

	const { first_name, last_name, email, message } = req.body

	// Validate input
	if (!first_name || !last_name || !email || !message) {
		return res
			.status(400)
			.json({ success: false, error: "Barcha maydonlar to'liq bo'lishi kerak" })
	}

	// Professional SMTP transporter sozlamasi
	const transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST, // smtp.gmail.com
		port: parseInt(process.env.MAIL_PORT), // 587
		secure: false, // 587 port uchun false (TLS), 465 uchun true (SSL)
		auth: {
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
		},
	})

	try {
		await transporter.sendMail({
			from: `"${first_name} ${last_name}" <${process.env.MAIL_FROM_ADDRESS}>`,
			to: 'custode@info.com', // Xabar borishi kerak bo'lgan asosiy pochta
			replyTo: email, // Siz javob bersangiz, mijozning o'ziga boradi
			subject: `Custode Contact: ${first_name} ${last_name}`,
			html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #333;">Yangi xabar keldi</h2>
          <p><b>Ism:</b> ${first_name} ${last_name}</p>
          <p><b>Mijoz emaili:</b> ${email}</p>
          <hr />
          <p><b>Xabar:</b></p>
          <p>${message}</p>
        </div>
      `,
		})

		return res.status(200).json({ success: true })
	} catch (error) {
		console.error('SMTP Error:', error)
		return res.status(500).json({ success: false, error: error.message })
	}
}
