import Section from '../section'
import SkillCard from '../skillCard'
import { backendSkills, frontendSkills, toolsSkills } from '../../constants/skills'

function skillSection() {
	return (
		<Section
			id='skills'
			title='Skills'
			index='02'
		>
			<div className='space-y-8'>
				<div>
					<p className='mb-3 text-xs uppercase tracking-[0.2em] text-white/45'>Frontend</p>
					<div className='flex flex-wrap gap-3 text-sm text-white/80'>
						{frontendSkills.map((skill) => (
							<SkillCard
								key={skill}
								name={skill}
							/>
						))}
					</div>
				</div>

				<div>
					<p className='mb-3 text-xs uppercase tracking-[0.2em] text-white/45'>Backend</p>
					<div className='flex flex-wrap gap-3 text-sm text-white/80'>
						{backendSkills.map((skill) => (
							<SkillCard
								key={skill}
								name={skill}
							/>
						))}
					</div>
				</div>

				<div>
					<p className='mb-3 text-xs uppercase tracking-[0.2em] text-white/45'>Tools</p>
					<div className='flex flex-wrap gap-3 text-sm text-white/80'>
						{toolsSkills.map((skill) => (
							<SkillCard
								key={skill}
								name={skill}
							/>
						))}
					</div>
				</div>
			</div>

			<div className='space-y-4 text-sm leading-7 text-white/55'>
				<p>Strong foundation across frontend, backend, and essential development tools.</p>
				<p>Comfortable applying these skills to build reliable and efficient applications.</p>
			</div>
		</Section>
	)
}

export default skillSection
