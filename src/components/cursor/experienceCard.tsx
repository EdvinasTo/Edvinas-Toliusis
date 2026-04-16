type ExperienceCardProps = {
	period: string
	role: string
	company: string
	description: string
}

function ExperienceCard({ period, company, role, description }: ExperienceCardProps) {
	return (
		<div className='flex gap-4'>
			<div className='h-14 w-14 rounded-lg border border-dashed border-white/20 bg-white/5' />
			<div className='border-l border-white/15 pl-4'>
				<p className='text-sm uppercase tracking-[0.2em] text-white/40'>{period}</p>
				<p className='mt-1 text-lg text-white/85'>{role}</p>
				<p className='text-sm text-white/45'>{company}</p>
				<p className='text-sm text-white/60'>{description}</p>
			</div>
		</div>
	)
}

export default ExperienceCard
