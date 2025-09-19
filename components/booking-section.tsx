'use client'

import {
	BookMarked,
	Calendar,
	CalendarDays,
	Clock,
	Users,
	Video,
} from 'lucide-react'
import { motion } from 'motion/react'

import { SectionBadge } from '@/components/section-badge'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import BookerEmbed from './booker-embed'

export function BookingSection() {
	return (
		<section id="booking" className="bg-background py-20">
			<div className="container mx-auto px-6">
				<div className="mb-16 text-center">
					<motion.div
						className="mb-6 flex justify-center"
						initial={{ y: 20, opacity: 0 }}
						transition={{ duration: 0.3, delay: 0.1 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true, margin: '-150px' }}
					>
						<SectionBadge icon={<CalendarDays className="h-4 w-4" />}>
							Let&apos;s Build Success Together.
						</SectionBadge>
					</motion.div>

					<h2 className="mb-6 text-4xl font-bold text-balance md:text-5xl">
						Book an <span className="text-primary">Appointment</span>
					</h2>
					<p className="text-muted-foreground mx-auto max-w-2xl text-xl text-pretty">
						Schedule a consultation to discuss your business development and
						technical sales needs
					</p>
				</div>

				<div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
					<div className="space-y-8">
						<div className="space-y-6">
							<h3 className="text-2xl font-bold">Consultation Services</h3>
							<div className="space-y-4">
								{[
									{
										icon: <Calendar className="text-primary h-6 w-6" />,
										title: 'Strategic Planning',
										description:
											'Business development strategy and market entry planning for Indian petroleum markets',
									},
									{
										icon: <Clock className="text-primary h-6 w-6" />,
										title: 'Technical Sales',
										description:
											'Sales strategy optimization and proposal development for refinery and petrochemical solutions',
									},
									{
										icon: <Video className="text-primary h-6 w-6" />,
										title: 'Market Intelligence',
										description:
											'Industry insights and competitive positioning within the evolving Indian energy landscape',
									},
									{
										icon: <Users className="text-primary h-6 w-6" />,
										title: 'Account Management',
										description:
											'Key account strategy and relationship building with PSUs and private petroleum corporations',
									},
									{
										icon: <BookMarked className="text-primary h-6 w-6" />,
										title: 'Regulatory Navigation',
										description:
											'Guidance on complex Indian petroleum sector regulations, compliance requirements, and policy frameworks',
									},
								].map((service, index) => (
									<motion.div
										key={index}
										className="flex items-start space-x-4"
										initial={{ x: -20, opacity: 0 }}
										transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
										whileInView={{ x: 0, opacity: 1 }}
										viewport={{ once: true, margin: '-150px' }}
									>
										<div className="mt-1 flex-shrink-0">{service.icon}</div>
										<div>
											<h4 className="font-semibold">{service.title}</h4>
											<p className="text-muted-foreground text-sm text-pretty">
												{service.description}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>

					<Card className="h-full shadow-xl">
						<CardHeader className="text-center">
							<CardTitle className="text-2xl">
								Schedule Your Consultation
							</CardTitle>
							<CardDescription className="text-muted-foreground">
								Choose your preferred meeting format and time
							</CardDescription>
						</CardHeader>
						<CardContent className="flex h-full flex-col items-center justify-center space-y-6">
							<div className="text-center">
								<Calendar className="text-primary mx-auto mb-4 h-16 w-16" />
								<h4 className="mb-2 text-lg font-semibold">
									Book a Call with Us
								</h4>
								<p className="text-muted-foreground mb-4 text-sm">
									Click the button below to find a time that works for you.
								</p>
							</div>
						</CardContent>
						<CardFooter className="flex justify-center">
							<CardAction>
								<BookerEmbed />
							</CardAction>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	)
}
