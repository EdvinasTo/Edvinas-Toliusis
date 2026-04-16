import { motion, type MotionValue } from 'framer-motion'

type CursorGlowProps = {
	x: MotionValue<number>
	y: MotionValue<number>
	isHidden: boolean
	isInteractive: boolean
}

export function CursorGlow({ x, y, isHidden, isInteractive }: CursorGlowProps) {
	return (
		<motion.div
			className='pointer-events-none fixed left-0 top-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 blur-2xl mix-blend-difference'
			style={{ x, y, zIndex: 9997 }}
			animate={{
				opacity: isHidden ? 0 : 1,
				scale: isInteractive ? 1.25 : 1
			}}
			transition={{ duration: 0.25 }}
		/>
	)
}
