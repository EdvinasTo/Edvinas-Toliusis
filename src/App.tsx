import { motion } from 'framer-motion'
import AboutSection from './components/sections/aboutSection'
import SkillSection from './components/sections/skillSection'
import ExperienceSection from './components/sections/experienceSection'

const item = {
	initial: { y: '2rem', opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			ease: [0.2, 1, 0.4, 1] as const
		}
	}
}

function App() {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: 'easeOut' }}
		>
			<motion.section className='flex flex-col items-start justify-center px-4 pt-16 sm:px-8 sm:pt-20 lg:pt-40 lg:pl-72'>
				<motion.h1
					className='text-5xl leading-none sm:text-7xl md:text-8xl lg:text-9xl'
					initial='initial'
					whileInView='animate'
					viewport={{ once: true }}
					transition={{ delayChildren: 0.7, staggerChildren: 0.1 }}
				>
					<motion.span variants={item}>E</motion.span>
					<motion.span variants={item}>D</motion.span>
					<motion.span variants={item}>V</motion.span>
					<motion.span variants={item}>I</motion.span>
					<motion.span variants={item}>N</motion.span>
					<motion.span variants={item}>A</motion.span>
					<motion.span variants={item}>S</motion.span>
					<div className='mt-1 sm:mt-2 sm:ml-auto sm:pl-16 lg:pl-35'>
						<motion.span variants={item}>T</motion.span>
						<motion.span variants={item}>O</motion.span>
						<motion.span variants={item}>L</motion.span>
						<motion.span variants={item}>I</motion.span>
						<motion.span variants={item}>U</motion.span>
						<motion.span variants={item}>Š</motion.span>
						<motion.span variants={item}>I</motion.span>
						<motion.span variants={item}>S</motion.span>
					</div>
				</motion.h1>
				<p className='mt-4 text-base text-white/80 sm:text-xl lg:pl-24 lg:text-2xl'>Student / Web Developer</p>
			</motion.section>

			<AboutSection />
			<SkillSection />
			<ExperienceSection />
		</motion.main>
	)
}

export default App
