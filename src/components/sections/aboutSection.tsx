import Section from '../section'

function AboutSection() {
	return (
		<Section
			id='about'
			title='About'
			index='01'
		>
			<p className='max-w-3xl text-lg leading-8 text-white/75'>
				I am currently in my third year of a Bachelor's in Program Systems at Kaunas University of Technology. Through
				my studies, I have developed a strong foundation in both theoretical concepts and practical problem-solving.
				While I am still growing as a developer, I am continuously expanding my skills by building projects, learning
				new technologies, and improving how I design and develop efficient, user-focused solutions.
			</p>

			<div className='space-y-4 text-sm leading-7 text-white/55'>
				<p>
					I'm motivated by the process of learning and building. I like taking on new challenges, figuring things out,
					and gradually improving with every project I work on.
				</p>
				<p>
					Beyond just writing code, I try to think about the bigger picture. How things are used, how they feel, and how
					they can be made better over time.
				</p>
			</div>
		</Section>
	)
}

export default AboutSection
