import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const { name, email, subject, body } = await request.json()

		// TODO: Replace with your hosted mailer service
		// Example: Send email using your preferred service (SendGrid, Nodemailer, etc.)

		// For now, just log the data (replace with actual email sending logic)
		console.log('Contact form submission:', { name, email, subject, body })

		// Simulate email sending
		// const emailResponse = await fetch('YOUR_MAILER_ENDPOINT', {
		//   method: 'POST',
		//   headers: {
		//     'Content-Type': 'application/json',
		//     'Authorization': 'Bearer YOUR_API_KEY'
		//   },
		//   body: JSON.stringify({
		//     to: 'pmvyas@gmail.com',
		//     from: email,
		//     subject: `Portfolio Contact: ${subject}`,
		//     text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${body}`
		//   })
		// })

		return NextResponse.json({
			success: true,
			message: 'Message sent successfully',
		})
	} catch (error) {
		console.error('Contact form error:', error)
		return NextResponse.json(
			{ success: false, message: 'Failed to send message' },
			{ status: 500 },
		)
	}
}
