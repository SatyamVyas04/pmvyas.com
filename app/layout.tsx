import type React from 'react'
import { Suspense } from 'react'

import { Analytics } from '@vercel/analytics/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
	title: 'Pankaj Vyas - Petrotech Consultation Expert',
	description:
		"Strategic Business Development & Technical Sales Leader with 28+ Years in India's Oil & Gas Industry",
	generator: 'v0.app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="overscroll-none">
			<body
				className={`font-sans ${GeistSans.variable} ${GeistMono.variable} w-screen overflow-x-hidden overscroll-none`}
			>
				<Suspense fallback={null}>{children}</Suspense>
				<Analytics />
			</body>
		</html>
	)
}
