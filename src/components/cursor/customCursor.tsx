import { useEffect, useState } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import { Cursor } from './cursor'
import { CursorGlow } from './cursorGlow'

export function CustomCursor() {
	const [isInteractive, setIsInteractive] = useState(false)
	const [isHidden, setIsHidden] = useState(true)
	const isEnabled =
		typeof window !== 'undefined' &&
		!window.matchMedia('(pointer: coarse)').matches &&
		!window.matchMedia('(prefers-reduced-motion: reduce)').matches

	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const smoothX = useSpring(mouseX, { stiffness: 500, damping: 35, mass: 0.3 })
	const smoothY = useSpring(mouseY, { stiffness: 500, damping: 35, mass: 0.3 })

	useEffect(() => {
		if (!isEnabled) return

		document.documentElement.classList.add('custom-cursor-enabled')
		document.body.classList.add('custom-cursor-enabled')

		const onMove = (e: MouseEvent) => {
			mouseX.set(e.clientX)
			mouseY.set(e.clientY)
			setIsHidden((prev) => (prev ? false : prev))

			const target = e.target as Element | null
			const interactive = target?.closest('a, button, input, textarea, select, [role="button"], [data-cursor="hover"]')

			setIsInteractive((prev) => {
				const next = Boolean(interactive)
				return prev !== next ? next : prev
			})
		}

		const onLeave = () => setIsHidden((prev) => (prev ? prev : true))
		const onEnter = () => setIsHidden((prev) => (prev ? false : prev))

		window.addEventListener('mousemove', onMove)
		window.addEventListener('mouseleave', onLeave)
		window.addEventListener('mouseenter', onEnter)

		return () => {
			document.documentElement.classList.remove('custom-cursor-enabled')
			document.body.classList.remove('custom-cursor-enabled')
			window.removeEventListener('mousemove', onMove)
			window.removeEventListener('mouseleave', onLeave)
			window.removeEventListener('mouseenter', onEnter)
		}
	}, [isEnabled, mouseX, mouseY])

	if (!isEnabled) return null

	return (
		<>
			<Cursor
				x={smoothX}
				y={smoothY}
				isHidden={isHidden}
				isInteractive={isInteractive}
			/>
			<CursorGlow
				x={smoothX}
				y={smoothY}
				isHidden={isHidden}
				isInteractive={isInteractive}
			/>
		</>
	)
}
