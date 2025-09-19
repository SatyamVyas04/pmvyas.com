'use client'

import { ArrowDown, Zap } from 'lucide-react'
import { LazyMotion, domAnimation, motion } from 'motion/react'
import * as m from 'motion/react-m'
import Link from 'next/link'

import { SectionBadge } from '@/components/section-badge'
import { Button } from '@/components/ui/button'

export function HeroSection() {
	return (
		<section
			id="hero"
			className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white"
		>
			{/* Background Images */}
			<div className="absolute inset-0 opacity-80">
				<div className="grid h-full gap-1 lg:grid-cols-3">
					<LazyMotion features={domAnimation}>
						<m.div className="relative h-full w-full overflow-hidden">
							<m.img
								src="/hero/oil-rig.png"
								alt="Oil drilling rig on land"
								className="h-full w-full object-cover"
								initial={{ y: 100, opacity: 0, scale: 1.1 }}
								animate={{ y: 0, opacity: 1, scale: 1 }}
								transition={{
									duration: 0.3,
									type: 'spring',
									stiffness: 120,
									damping: 12,
								}}
							/>
						</m.div>

						<m.div className="relative hidden h-full w-full overflow-hidden lg:block">
							<m.img
								src="/hero/oil-rig-2.png"
								alt="Oil drilling rig in water"
								className="h-full w-full object-cover"
								initial={{ y: -100, opacity: 0, scale: 1.1 }}
								animate={{ y: 0, opacity: 1, scale: 1 }}
								transition={{
									duration: 0.3,
									type: 'spring',
									stiffness: 120,
									damping: 12,
									delay: 0.1,
								}}
							/>
						</m.div>

						<m.div className="relative hidden h-full w-full overflow-hidden lg:block">
							<m.img
								src="/hero/oil-rig-3.png"
								alt="Offshore platform"
								className="h-full w-full object-cover"
								initial={{ y: 100, opacity: 0, scale: 1.1 }}
								animate={{ y: 0, opacity: 1, scale: 1 }}
								transition={{
									duration: 0.3,
									type: 'spring',
									stiffness: 120,
									damping: 12,
									delay: 0.2,
								}}
							/>
						</m.div>
					</LazyMotion>
				</div>
			</div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-gray-900/70"></div>

			{/* Content */}
			<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
				<motion.div
					className="mb-6 flex justify-center"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.3, delay: 1.0 }}
				>
					<SectionBadge icon={<Zap className="h-4 w-4 fill-white" />}>
						Your Vision. Our Expertise.
					</SectionBadge>
				</motion.div>

				<motion.h1
					className="mb-6 text-5xl font-bold text-balance md:text-7xl"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.3, delay: 0.4 }}
				>
					<span className="text-white">Pankaj</span>{' '}
					<span className="text-primary">Vyas</span>
				</motion.h1>

				<motion.p
					className="z-10 mb-4 text-xl text-balance text-gray-200 md:text-2xl"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.3, delay: 0.5 }}
				>
					Strategic Business Development & Technical Sales Leader
				</motion.p>

				<motion.p
					className="mx-auto mb-8 max-w-2xl text-lg text-pretty text-gray-300"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.3, delay: 0.6 }}
				>
					28+ Years of Excellence in India&apos;s Oil & Gas Industry
				</motion.p>

				<motion.div
					className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.3, delay: 0.7 }}
				>
					<Link href="#booking">
						<Button size="lg" className="cursor-pointer px-8 py-3">
							Book Consultation
						</Button>
					</Link>
					<Link href="#contact">
						<Button
							variant="outline"
							size="lg"
							className="cursor-pointer bg-transparent px-8 py-3"
						>
							Get In Touch
						</Button>
					</Link>
				</motion.div>

				<motion.div
					className="animate-bounce"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.3, delay: 1.2 }}
				>
					<ArrowDown className="text-primary mx-auto h-8 w-8 translate-y-24" />
				</motion.div>
			</div>
		</section>
	)
}
