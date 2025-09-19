'use client'

import { MessageSquare, Quote } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

import { SectionBadge } from '@/components/section-badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Marquee } from '@/components/ui/marquee'

import { cn } from '@/lib/utils'

interface Testimonial {
	image?: string
	name: string
	designation: string
	relation: string
	text: string
	linkedinUrl: string
}

export function TestimonialsSection() {
	const testimonials: Testimonial[] = [
		{
			image: '/testimonials/rajeev-goyal.jpeg',
			name: 'Dr. Rajeev Goyal',
			designation: 'Consultant & Mentor',
			relation: 'Senior colleague, worked with Pankaj',
			text: 'Pankaj stayed focused on adding value, eager to learn, and always an excellent team player.',
			linkedinUrl: 'https://www.linkedin.com/in/dr-rajeev-goyal-667a462',
		},
		{
			image: '/testimonials/jp-amlin.jpeg',
			name: 'JP Amlin',
			designation: 'Author, Sales Trainer and Coach',
			relation: 'Trainer and mentor during B2B sales programs',
			text: 'Pankaj excelled in B2B sales training, demonstrating customer focus, relationship management, and complex sales strategies.',
			linkedinUrl: 'https://www.linkedin.com/in/jp-amlin',
		},
		{
			image: '/testimonials/ashabikash-roy-chowdhury.jpeg',
			name: 'Ashabikash Roy Chowdhury',
			designation: 'Principal Consultant, Upstream Technical Training',
			relation: 'Worked in the same team as Pankaj',
			text: 'Pankaj was a go-getter, self-motivated, and consistently achieved objectives with focus and determination.',
			linkedinUrl:
				'https://www.linkedin.com/in/ashabikash-roy-chowdhury-23046312',
		},
		{
			image: '/testimonials/mattmeinerspe.jpeg',
			name: 'Matt Meiners, P.E.',
			designation: 'Director of Engineering and Product Development',
			relation: 'Managed Pankaj directly',
			text: 'Pankaj grew market share, exceeded financial goals, and earned respect from colleagues, customers, and leadership alike.',
			linkedinUrl: 'https://www.linkedin.com/in/mattmeinerspe',
		},
		{
			image: '/testimonials/sushil-keshkar.jpeg',
			name: 'Sushil Keshkar',
			designation: 'Completion & Wellbore Intervention Instructor',
			relation: 'Senior colleague at Baker Hughes',
			text: 'Pankaj connected well with people, handled accounts effectively, and consistently pursued goals with sincerity and persistence.',
			linkedinUrl: 'https://www.linkedin.com/in/sushil-keshkar-b206a234',
		},
		{
			image: '/testimonials/cornelius-sumartono.jpeg',
			name: 'Cornelius Sumartono',
			designation: 'Sales & Operations Leader, Asia Pacific',
			relation: 'Senior colleague in drill bit business',
			text: 'Pankaj significantly contributed to business growth in India with attention to detail and strong account management strategies.',
			linkedinUrl: 'https://www.linkedin.com/in/cornelius-sumartono-6086656',
		},
		{
			image: '/testimonials/daryl-chadwick.jpeg',
			name: 'Daryl Chadwick',
			designation: 'Supply Chain Manager',
			relation: 'Direct manager of Pankaj',
			text: 'Pankaj combined business acumen with a positive attitude, making him a valuable contributor to smooth operations.',
			linkedinUrl: 'https://www.linkedin.com/in/daryl-chadwick-796b3839',
		},
	]

	const TestimonialCard = ({
		testimonial,
	}: {
		testimonial: Testimonial
		index: number
	}) => (
		<Card
			className={cn(
				'mx-4 flex w-80 flex-col justify-between md:w-96',
				'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
			)}
		>
			<CardHeader className="pb-3">
				<Quote className="text-primary/60 fill-primary/20 h-8 w-8" />
			</CardHeader>

			<CardContent className="flex-1 pb-4">
				<blockquote className="text-muted-foreground mb-4 text-sm leading-relaxed md:text-base">
					&quot;{testimonial.text}&quot;
				</blockquote>

				<div className="mt-auto">
					<Badge
						variant="outline"
						className="text-primary/80 border-primary/50 text-xs font-medium"
					>
						{testimonial.relation}
					</Badge>
				</div>
			</CardContent>

			<CardFooter className="border-border/40 flex items-center justify-between border-t pt-4">
				<div className="flex items-center space-x-3">
					<div className="relative">
						<Avatar className="h-11 w-11">
							<AvatarImage src={testimonial.image} alt={testimonial.name} />
							<AvatarFallback className="text-xs font-medium">
								{testimonial.name
									.split(' ')
									.map((n) => n[0])
									.join('')
									.toUpperCase()}
							</AvatarFallback>
						</Avatar>
						<div className="border-background absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 bg-green-500" />
					</div>

					<div className="space-y-0.5">
						<h4 className="text-sm leading-tight font-semibold">
							{testimonial.name}
						</h4>
						<p className="text-muted-foreground text-xs leading-tight">
							{testimonial.designation}
						</p>
					</div>
				</div>

				<Button
					variant="ghost"
					size="icon"
					className="hover:bg-primary/10 h-9 w-9 shrink-0"
					asChild
				>
					<Link
						href={testimonial.linkedinUrl}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Connect with ${testimonial.name} on LinkedIn`}
					>
						<img src="/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
					</Link>
				</Button>
			</CardFooter>
		</Card>
	)

	return (
		<section id="testimonials" className="bg-background py-20">
			<div className="container mx-auto px-6">
				<div className="mb-16 space-y-6 text-center">
					<motion.div
						className="flex justify-center"
						initial={{ y: 20, opacity: 0 }}
						transition={{ duration: 0.3, delay: 0.1 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true, margin: '-150px' }}
					>
						<SectionBadge icon={<MessageSquare className="h-4 w-4" />}>
							Trusted by Industry Leaders
						</SectionBadge>
					</motion.div>

					<div className="space-y-4">
						<h2 className="text-4xl font-bold tracking-tight md:text-5xl">
							Hear from <span className="text-primary">the Best</span>
						</h2>
						<p className="text-muted-foreground mx-auto max-w-2xl text-xl">
							Testimonials and recommendations from industry leaders and
							colleagues
						</p>
					</div>
				</div>
			</div>

			<div className="relative overflow-hidden">
				<div
					className="pointer-events-none absolute inset-0 z-10"
					style={{
						backgroundImage:
							'linear-gradient(to right, var(--color-background), rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 80%, var(--color-background))',
					}}
				></div>
				<Marquee pauseOnHover className="py-4 [--duration:30s]">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={`${testimonial.name}-${index}`}
							testimonial={testimonial}
							index={index}
						/>
					))}
				</Marquee>
			</div>
		</section>
	)
}
