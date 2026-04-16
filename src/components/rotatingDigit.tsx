import { motion } from 'framer-motion'

function RotatingDigit({ digit, previousDigit }: { digit: string; previousDigit?: string }) {
	const shouldRotate = Boolean(previousDigit && previousDigit !== digit)
	const baseFaceClassName =
		'absolute inset-0 flex items-center justify-center rounded-xs border border-white/30 bg-[#1a1d24] text-3xl text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] sm:text-4xl'

	return (
		<span
			className='relative inline-flex h-14 w-10 sm:h-16 sm:w-11'
			style={{ perspective: 900 }}
		>
			<span
				className={baseFaceClassName}
				style={{ transform: 'translateZ(14px)' }}
			>
				{digit}
			</span>

			{shouldRotate ? (
				<motion.span
					key={`${previousDigit}-${digit}`}
					className='absolute inset-0 pointer-events-none transform-3d'
					initial={{ rotateX: 0 }}
					animate={{ rotateX: -90 }}
					transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
					style={{ transformOrigin: '50% 50%' }}
				>
					<span
						className={baseFaceClassName}
						style={{ transform: 'translateZ(14px)' }}
					>
						{previousDigit}
					</span>
					<span
						className={baseFaceClassName}
						style={{ transform: 'rotateX(90deg) translateZ(14px)' }}
					>
						{digit}
					</span>
				</motion.span>
			) : null}
		</span>
	)
}

export default RotatingDigit
