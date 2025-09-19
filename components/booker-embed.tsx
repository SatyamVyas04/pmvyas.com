import { useEffect } from 'react'

import { getCalApi } from '@calcom/embed-react'

import { Button } from './ui/button'

export default function MyApp() {
	useEffect(() => {
		;(async function () {
			const cal = await getCalApi({ namespace: '30min' })
			cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
		})()
	}, [])
	return (
		<Button
			data-cal-namespace="30min"
			data-cal-link="pmvyas/30min"
			data-cal-config='{"layout":"month_view"}'
			className="cursor-pointer"
		>
			Open Calendar
		</Button>
	)
}
