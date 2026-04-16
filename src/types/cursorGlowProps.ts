import { type MotionValue } from 'framer-motion'

type CursorGlowProps = {
	x: MotionValue<number>
	y: MotionValue<number>
	isHidden: boolean
	isInteractive: boolean
}

export type { CursorGlowProps }
