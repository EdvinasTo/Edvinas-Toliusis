type ExperienceCardProps = {
	imageSrc: string
	period: string
	role: string
	company: string
	description: string
}

function ExperienceCard({ imageSrc, period, role, company, description }: ExperienceCardProps) {
	return (
		<div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center'>
			<img
				src={imageSrc}
				alt={company}
				className='h-20 w-20 rounded-3xl bg-amber-50 sm:h-24 sm:w-24 lg:h-28 lg:w-28'
			/>
			<div className='border-l border-white/15 pl-4 sm:pl-4'>
				<p className='text-xs uppercase tracking-[0.15em] text-white/40 sm:text-sm sm:tracking-[0.2em]'>{period}</p>
				<p className='mt-1 text-base text-white/85 sm:text-lg'>{role}</p>
				<p className='text-sm text-white/45'>{company}</p>
				<p className='text-sm leading-relaxed text-white/60'>{description}</p>
			</div>
		</div>
	)
}

export default ExperienceCard
