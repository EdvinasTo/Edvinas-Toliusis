import { type MotionValue } from 'framer-motion'

type CursorProps = {
	x: MotionValue<number>
	y: MotionValue<number>
	isHidden: boolean
	isInteractive: boolean
}

export type { CursorProps }
