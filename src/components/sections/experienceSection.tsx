import ExperienceCard from '../experienceCard'
import Section from '../section'
import cognizantLogo from '../../assets/cognizant.svg'
import presentConnectionLogo from '../../assets/present-connection.png'

function ExperienceSection() {
	return (
		<Section
			id='experience'
			title='Experience'
			index='03'
		>
			<div className='space-y-6 lg:translate-x-20 xl:translate-x-40'>
				<ExperienceCard
					imageSrc={cognizantLogo}
					period='Mar 2025 - May 2025'
					role='Java Full-Stack Intern'
					company='Cognizant'
					description='During my internship at Cognizant, I gained valuable experience in Java development
           and full-stack web technologies. I had the opportunity to collaborate with a team of developers 
           to build an application. This experience allowed me to apply my programming skills in a professional
           setting, while also learning about software development best practices and industry standards.'
				/>
				<ExperienceCard
					imageSrc={presentConnectionLogo}
					period='Oct 2025 - Dec 2025'
					role='.NET Full-Stack Intern'
					company='Present Connection Lithuania'
					description='As a .NET Full-Stack Intern at Present Connection, I worked on developing and maintaining
           web applications using the .NET framework. I collaborated with a team of developers to implement new
           features, fix bugs, and optimize performance. This internship provided me with hands-on experience 
           in full-stack development, allowing me to enhance my skills in both frontend and backend technologies
           while contributing to real-world projects.'
				/>
			</div>
		</Section>
	)
}

export default ExperienceSection
