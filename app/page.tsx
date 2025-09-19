import { AnimatePresence } from 'motion/react'

import { AboutSection } from '@/components/about-section'
import { BookingSection } from '@/components/booking-section'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { TestimonialsSection } from '@/components/testimonials-section'

export default function Home() {
	return (
		<AnimatePresence>
			<main className="min-h-screen">
				<HeroSection />
				<AboutSection />
				<TestimonialsSection />
				<BookingSection />
				<Footer />
			</main>
		</AnimatePresence>
	)
}
