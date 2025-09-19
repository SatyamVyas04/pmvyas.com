import type React from 'react'
import { Suspense } from 'react'

import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
	title: 'Pankaj Vyas - Oil and Gas Consultation',
	description:
		"Strategic Business Development & Technical Sales Leader with 28+ Years in India's Oil & Gas Industry",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="overscroll-none">
			<body className="font-sans w-screen overflow-x-hidden overscroll-none">
				<Suspense fallback={null}>{children}</Suspense>
				<Analytics />
			</body>
		</html>
	)
}
