import { motion } from 'framer-motion'
import { type CursorProps } from '../../types/cursorProps'

export function Cursor({ x, y, isHidden, isInteractive }: CursorProps) {
	return (
		<>
			<motion.div
				className='pointer-events-none fixed left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference'
				style={{ x, y, zIndex: 9999 }}
				animate={{
					opacity: isHidden ? 0 : 1,
					scale: isInteractive ? 0.6 : 1
				}}
				transition={{ duration: 0.15 }}
			/>

			<motion.div
				className='pointer-events-none fixed left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 mix-blend-difference'
				style={{ x, y, zIndex: 9998 }}
				animate={{
					opacity: isHidden ? 0 : 1,
					scale: isInteractive ? 1.6 : 1
				}}
				transition={{ duration: 0.2 }}
			/>
		</>
	)
}
