'use client'

import type React from 'react'
import { useState } from 'react'

import { Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		body: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
			if (response.ok) {
				alert('Message sent successfully!')
				setFormData({ name: '', email: '', subject: '', body: '' })
			} else {
				alert('Failed to send message. Please try again.')
			}
		} catch (error) {
			// @ts-expect-error The error type is unknown
			alert(`Failed to send message: ${error.message}`)
		}
		setIsSubmitting(false)
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<div className="w-full max-w-md">
			<div className="mb-6">
				<h4 className="text-primary-foreground mb-2 text-xl font-semibold">
					Get in Touch
				</h4>
				<p className="text-primary-foreground/60 text-sm">
					Let&apos;s discuss your next project
				</p>
			</div>
			<form onSubmit={handleSubmit} className="space-y-5">
				<div className="space-y-4">
					<Input
						type="text"
						name="name"
						placeholder="Your name"
						value={formData.name}
						onChange={handleChange}
						className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/30 h-12 transition-colors"
						required
					/>
					<Input
						type="email"
						name="email"
						placeholder="your.email@example.com"
						value={formData.email}
						onChange={handleChange}
						className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/30 h-12 transition-colors"
						required
					/>
					<Input
						type="text"
						name="subject"
						placeholder="Subject"
						value={formData.subject}
						onChange={handleChange}
						className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/30 h-12 transition-colors"
						required
					/>
					<Textarea
						name="body"
						placeholder="Tell me about your project..."
						value={formData.body}
						onChange={handleChange}
						className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/30 min-h-[120px] resize-none transition-colors"
						rows={4}
						required
					/>
				</div>
				<Button
					type="submit"
					variant="secondary"
					className="h-12 w-full font-medium transition-all duration-200 hover:scale-[1.02]"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						'Sending...'
					) : (
						<>
							<Send className="mr-2 h-4 w-4" />
							Send Message
						</>
					)}
				</Button>
			</form>
		</div>
	)
}
