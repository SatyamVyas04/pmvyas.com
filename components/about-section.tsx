'use client'

import {
	Award,
	Briefcase,
	Building2,
	Handshake,
	TrendingUp,
	User,
	Users,
} from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'

import { SectionBadge } from '@/components/section-badge'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export function AboutSection() {
	const companies = [
		'/companies/baker-hughes.png',
		'/companies/seros.png',
		'/companies/nov.png',
		'/companies/expro.png',
		'/companies/superior.svg',
	]

	const companyLinks = [
		'https://www.bakerhughes.com/',
		'https://www.seros.in/',
		'https://www.nov.com/',
		'https://www.exprogroup.com/',
		'https://superiorenergy.com/',
	]

	const companyTooltips = [
		'Baker Hughes',
		'SEROS',
		'National Oilwell Varco (NOV)',
		'Expro',
		'Superior Energy Services',
	]

	const clients = [
		'/clients/ongc.png',
		'/clients/indian-oil.png',
		'/clients/reliance.png',
		'/clients/oil-india.svg',
		'/clients/adani.png',
		'/clients/sun.png',
		'/clients/dgh.png',
		'/clients/hoec.png',
	]

	const clientLinks = [
		'https://www.ongcindia.com/',
		'https://www.iocl.com/',
		'https://www.ril.com/',
		'https://www.oil-india.com/',
		'https://www.adanienterprises.com/',
		'https://www.sunpetro.com/',
		'https://dghindia.gov.in/',
		'https://hoec.com/',
	]

	const clientTooltips = [
		'ONGC',
		'Indian Oil Corporation',
		'Reliance Industries Limited',
		'Oil India Limited',
		'Adani Group',
		'Sun Petrochemicals',
		'Directorate General of Hydrocarbons (DGH)',
		'Hindustan Oil Exploration Company (HOEC)',
	]

	const achievements = [
		{
			icon: <Award className="text-primary h-8 w-8" />,
			title: '28+ Years Experience',
			description: "Extensive expertise in India's upstream oil & gas sector",
		},
		{
			icon: <Building2 className="text-primary h-8 w-8" />,
			title: 'MNC Leadership',
			description: 'Strategic roles at Baker Hughes, NOV, Expro, and SEROS',
		},
		{
			icon: <Users className="text-primary h-8 w-8" />,
			title: 'Account Management',
			description:
				'Strong relationships with ONGC, Oil India, and major E&P clients',
		},
		{
			icon: <TrendingUp className="text-primary h-8 w-8" />,
			title: 'Proven Results',
			description: 'Consistent double-digit growth and strategic wins',
		},
	]

	return (
		<section className="bg-background py-20">
			<div className="container mx-auto px-6">
				<div className="mb-16 text-center">
					<motion.div
						className="mb-6 flex justify-center"
						initial={{ y: 20, opacity: 0 }}
						transition={{ duration: 0.3, delay: 0.1 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true, margin: '-150px' }}
					>
						<SectionBadge icon={<User className="h-4 w-4" />}>
							28+ Years. Proven Results.
						</SectionBadge>
					</motion.div>

					<h2 className="mb-6 text-4xl font-bold text-balance md:text-5xl">
						About <span className="text-primary">Pankaj Vyas</span>
					</h2>
					<p className="text-muted-foreground mx-auto max-w-3xl text-xl text-pretty">
						A seasoned professional with unparalleled expertise in strategic
						business development, technical sales, and collaborative P&L
						planning across India&apos;s oil & gas industry.
					</p>
				</div>

				<div className="mb-16 grid items-start gap-12 md:grid-cols-2">
					<div className="space-y-3">
						<img
							src="/pankaj-vyas.png"
							alt="Pankaj Vyas"
							className="aspect-square w-full rounded-lg object-cover shadow-2xl"
						/>
						<h3 className="text-lg font-semibold">Professional Summary</h3>
						<p className="text-muted-foreground text-justify">
							Experienced professional contributing to strategic business
							development, technical sales, and collaborative P&L planning.
							Played a key role in supporting growth initiatives across drill
							bits, downhole tools, surface well testing, slickline, and well
							intervention services.
						</p>
					</div>

					<div className="space-y-6">
						<div className="space-y-6">
							<h4 className="text-lg font-semibold">Core Competencies</h4>
							<div className="flex flex-wrap gap-3">
								{[
									'Business Development',
									'Sales Strategy',
									'Key Account Management',
									'Tendering & Proposals',
									'CRM Management',
									'Contract Negotiation',
									'Market Intelligence',
									'P&L Modeling',
									'Stakeholder Collaboration',
								].map((skill) => (
									<Badge key={skill} variant="default" className="text-sm">
										{skill}
									</Badge>
								))}
							</div>
						</div>

						{/* Companies Section - Card Style */}
						<div className="space-y-6">
							<div className="flex items-center gap-2">
								<Briefcase className="text-primary h-5 w-5" />
								<h4 className="text-lg font-semibold">Companies Worked With</h4>
							</div>
							<div className="flex flex-wrap gap-6">
								{companies.map((company, index) => (
									<motion.div
										key={company}
										initial={{ opacity: 0, x: -20 }}
										transition={{ delay: index * 0.15 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{
											once: true,
											margin: '-50px',
										}}
									>
										<Tooltip>
											<TooltipTrigger asChild>
												<Link
													href={companyLinks[index]}
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src={company}
														alt={companyTooltips[index]}
														className="h-8 sm:h-10"
													/>
												</Link>
											</TooltipTrigger>
											<TooltipContent>{companyTooltips[index]}</TooltipContent>
										</Tooltip>
									</motion.div>
								))}
							</div>
						</div>

						{/* Clients Section - Grid Style with Different Layout */}
						<div className="space-y-6">
							<div className="flex items-center gap-2">
								<Handshake className="text-primary h-5 w-5" />
								<h4 className="text-lg font-semibold">Key Clients Served</h4>
							</div>
							<div className="grid grid-cols-4 gap-4">
								{clients.map((client, index) => (
									<motion.div
										key={client}
										initial={{ opacity: 0, scale: 0.8 }}
										transition={{ delay: index * 0.1 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{
											once: true,
											margin: '-50px',
										}}
										className="border-muted hover:border-primary/50 flex aspect-square items-center justify-center rounded-lg border-2 border-dashed bg-white p-3 transition-colors"
									>
										<Tooltip>
											<TooltipTrigger asChild>
												<Link
													href={clientLinks[index]}
													target="_blank"
													rel="noopener noreferrer"
													className="flex h-full w-full items-center justify-center"
												>
													<img
														src={client}
														alt={clientTooltips[index]}
														className="max-h-full max-w-full object-contain"
													/>
												</Link>
											</TooltipTrigger>
											<TooltipContent>{clientTooltips[index]}</TooltipContent>
										</Tooltip>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{achievements.map((achievement, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							transition={{ delay: index * 0.15 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: '-100px' }}
						>
							<Card
								key={index}
								className="h-full p-6 text-center transition-shadow hover:shadow-lg"
							>
								<CardContent className="space-y-4">
									<div className="text-primary flex justify-center">
										{achievement.icon}
									</div>
									<h3 className="text-lg font-semibold">{achievement.title}</h3>
									<p className="text-muted-foreground text-sm text-pretty">
										{achievement.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
