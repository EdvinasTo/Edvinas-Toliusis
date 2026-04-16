import { motion } from 'framer-motion'
import { type SectionProps } from '../types/sectionProps'

function Section({ id, title, index, children, className = '' }: SectionProps) {
	return (
		<motion.section
			id={id}
			initial={{ opacity: 0, y: 36 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.9, ease: 'easeOut' }}
			className='mt-20 flex flex-col gap-8 px-4 pb-16 pt-10 sm:mt-24 sm:px-8 sm:pb-20 sm:pt-12 lg:mt-28 lg:pb-24 lg:pt-15 lg:pl-72'
		>
			<div className='flex items-end justify-between border-b border-white/10 pb-4'>
				<h2 className='text-2xl font-thin uppercase tracking-[0.2em] text-white sm:text-3xl sm:tracking-[0.3em]'>
					{title}
				</h2>
				<span className='text-xs uppercase tracking-[0.2em] text-white/40 sm:text-sm sm:tracking-[0.35em]'>
					{index}
				</span>
			</div>

			<div className={`grid gap-10 lg:grid-cols-[1.2fr_0.8fr] ${className}`}>{children}</div>
		</motion.section>
	)
}

export default Section
