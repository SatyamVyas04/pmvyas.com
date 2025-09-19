'use client'

import Link from 'next/link'

import { ContactForm } from '@/components/contact-form'
import { Button } from '@/components/ui/button'

export function Footer() {
	return (
		<footer id="contact" className="bg-primary text-primary-foreground py-20">
			<div className="container mx-auto px-6">
				<div className="grid items-start gap-4 md:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
					<div className="order-2 mx-auto max-w-md space-y-8 lg:order-1 lg:mx-0">
						<div className="mt-12 space-y-4 md:mt-0">
							<h3 className="text-2xl font-semibold tracking-tight">
								Pankaj Vyas
							</h3>
							<div className="space-y-1">
								<p className="text-primary-foreground/80 text-base">
									Strategic Business Development
								</p>
								<p className="text-primary-foreground/70 text-sm">
									28+ Years Oil & Gas Experience
								</p>
							</div>
						</div>

						<div className="space-y-3">
							<p className="text-primary-foreground/60 text-sm font-medium tracking-wider uppercase">
								Connect
							</p>
							<div className="flex flex-wrap gap-4">
								<Link href="https://twitter.com/pankajvyas" target="_blank">
									<Button
										variant="ghost"
										size="sm"
										className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 h-auto cursor-pointer p-1 transition-all duration-200"
									>
										<img
											src="/linkedin.svg"
											alt="Linkedin"
											className="h-7 w-7 rounded-sm bg-white p-0.5"
										/>
									</Button>
								</Link>
							</div>
						</div>
						<div className="border-primary-foreground/10 border-t pt-8">
							<p className="text-primary-foreground/40 text-xs tracking-wide">
								© 2025 Pankaj Vyas. All rights reserved.
							</p>
						</div>
						<div>
							<h1 className="text-primary-foreground/90 text-5xl leading-none font-bold tracking-tighter md:text-7xl lg:text-8xl xl:text-9xl">
								pmvyas.com
							</h1>
						</div>
					</div>

					<div className="order-1 flex justify-center lg:order-2 lg:justify-end">
						<ContactForm />
					</div>
				</div>
			</div>
		</footer>
	)
}
