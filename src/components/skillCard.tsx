type SkillCardProps = {
	name: string
}

function SkillCard({ name }: SkillCardProps) {
	return (
		<div className='rounded-none border border-white/20 bg-white/3 px-4 py-3 text-sm uppercase tracking-[0.12em] text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/8'>
			{name}
		</div>
	)
}

export default SkillCard
