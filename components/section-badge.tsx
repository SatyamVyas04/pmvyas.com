import type React from 'react'

import { cn } from '@/lib/utils'

interface SectionBadgeProps {
	icon?: React.ReactNode
	children: React.ReactNode
	className?: string
}

export function SectionBadge({ icon, children, className }: SectionBadgeProps) {
	return (
		<div
			className={cn(
				'inline-flex items-center gap-2 rounded-full px-4 py-2',
				'from-primary to-primary/80 bg-gradient-to-r',
				'text-primary-foreground text-sm font-medium',
				'shadow-primary/25 shadow-lg',
				'border-primary/20 border',
				'backdrop-blur-sm',
				className,
			)}
		>
			{icon && (
				<span className="flex h-4 w-4 items-center justify-center">{icon}</span>
			)}
			<span>{children}</span>
		</div>
	)
}
