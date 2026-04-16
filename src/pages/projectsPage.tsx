import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineGlobeAlt } from 'react-icons/hi2'
import RotatingDigit from '../components/rotatingDigit'
import SkillCard from '../components/skillCard'
import projects from '../constants/projects'
import linkType from '../types/linkType'

function ProjectsPage() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [previousActiveIndex, setPreviousActiveIndex] = useState(0)
	const listRef = useRef<HTMLUListElement | null>(null)
	const projectRefs = useRef<Array<HTMLLIElement | null>>([])

	useEffect(() => {
		if (!listRef.current) {
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const activeEntry = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

				if (!activeEntry) {
					return
				}

				const nextIndex = Number((activeEntry.target as HTMLElement).dataset.index)

				if (!Number.isNaN(nextIndex)) {
					setActiveIndex((currentIndex) => {
						if (currentIndex !== nextIndex) {
							setPreviousActiveIndex(currentIndex)
						}

						return nextIndex
					})
				}
			},
			{
				root: listRef.current,
				threshold: [0.2, 0.4, 0.6, 0.8],
				rootMargin: '-35% 0px -35% 0px'
			}
		)

		projectRefs.current.forEach((projectRef) => {
			if (projectRef) {
				observer.observe(projectRef)
			}
		})

		return () => {
			observer.disconnect()
		}
	}, [])

	const activeProject = projects[activeIndex]
	const activeDisplay = String(activeIndex + 1).padStart(2, '0')
	const previousActiveDisplay = String(previousActiveIndex + 1).padStart(2, '0')
	const totalDisplay = String(projects.length).padStart(2, '0')

	return (
		<main className='min-h-screen bg-[#0f1116] text-white lg:h-screen lg:overflow-hidden lg:pl-64'>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5, ease: 'easeOut' }}
				className='mx-auto grid h-full max-w-475 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]'
			>
				<ul
					ref={listRef}
					className='overflow-visible px-4 py-8 sm:px-6 lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-auto lg:overscroll-y-contain lg:px-14 lg:py-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
				>
					{projects.map((project, index) => (
						<li
							key={project.title}
							data-index={index}
							ref={(element) => {
								projectRefs.current[index] = element
							}}
							className='mb-10 flex h-auto items-start last:mb-0 lg:mb-0 lg:h-screen lg:snap-center lg:snap-always lg:items-center'
						>
							<div className='relative w-full overflow-hidden  p-4 sm:p-6 lg:p-10'>
								<div className='absolute inset-0' />
								<img
									src={project.image}
									alt={project.title}
									className='relative z-10 h-56 w-full object-cover sm:h-72 lg:h-110'
								/>

								<div className='relative z-10 mt-6 flex flex-wrap gap-3'>
									{project.links.map((projectLink) => {
										const Icon = projectLink.type === linkType.GITHUB ? FaGithub : HiOutlineGlobeAlt

										return (
											<a
												key={`${project.title}-${projectLink.label}`}
												href={projectLink.href}
												target='_blank'
												rel='noreferrer'
												data-cursor='hover'
												className='group inline-flex items-center gap-2 rounded-xs border border-white/25 bg-white/8 px-4 py-2 text-sm transition-colors duration-200 hover:bg-white'
											>
												<Icon className='text-base text-white/90 transition-colors duration-200 group-hover:text-black' />
												<span className='text-white/90 [-webkit-text-fill-color:rgba(255,255,255,0.9)] transition-colors duration-200 group-hover:text-black group-hover:[-webkit-text-fill-color:#000]'>
													{projectLink.label}
												</span>
											</a>
										)
									})}
								</div>

								<div className='relative z-10 mt-5 lg:hidden'>
									<h3 className='text-2xl font-light leading-tight'>{project.title}</h3>
									<p className='mt-2 text-base text-white/80'>{project.role}</p>
									<p className='mt-4 text-base leading-relaxed text-white/80'>{project.description}</p>

									<div className='mt-5'>
										<p className='mb-3 text-xs uppercase tracking-[0.24em] text-white/50'>Tech</p>
										<ul className='flex flex-wrap gap-2'>
											{project.tech.map((techItem) => (
												<li key={`mobile-${project.title}-${techItem}`}>
													<SkillCard name={techItem} />
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>

				<div className='hidden border-t border-white/10 px-6 pb-12 pt-10 sm:px-10 lg:block lg:h-screen lg:border-t-0 lg:border-l lg:border-white/10 lg:px-14 lg:py-20'>
					<div className='flex h-full flex-col'>
						<header>
							<div className='flex items-end justify-between border-b border-white/20 pb-3'>
								<h2 className='text-3xl font-light tracking-wide'>PROJECTS</h2>
							</div>
						</header>

						<div className='my-10 flex flex-1 flex-col lg:my-0'>
							<div className='lg:pt-[15vh]'>
								<div className='mb-8 flex items-center gap-3 text-white/85'>
									<div className='flex items-center gap-2'>
										{activeDisplay.split('').map((digit, index) => (
											<RotatingDigit
												key={`active-${index}`}
												digit={digit}
												previousDigit={previousActiveDisplay[index]}
											/>
										))}
									</div>
									<span className='text-4xl text-white/60'>/</span>
									<div className='flex items-center gap-2'>
										{totalDisplay.split('').map((digit, index) => (
											<RotatingDigit
												key={`total-${index}`}
												digit={digit}
												previousDigit={digit}
											/>
										))}
									</div>
								</div>

								<AnimatePresence mode='wait'>
									<motion.div
										key={activeProject.title}
										initial={{ opacity: 0, y: 14 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -14 }}
										transition={{ duration: 0.25, ease: 'easeOut' }}
									>
										<h3 className='text-4xl font-light leading-tight sm:text-5xl'>{activeProject.title}</h3>
										<p className='mt-4 text-2xl text-white/80'>{activeProject.role}</p>

										<p className='mt-10 max-w-[38ch] text-xl leading-relaxed text-white/80'>
											{activeProject.description}
										</p>

										<div className='mt-8'>
											<p className='mb-4 text-sm uppercase tracking-[0.24em] text-white/50'>Tech</p>
											<ul className='flex max-w-[44ch] flex-wrap gap-2'>
												{activeProject.tech.map((techItem) => (
													<li key={`${activeProject.title}-${techItem}`}>
														<SkillCard name={techItem} />
													</li>
												))}
											</ul>
										</div>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</div>
				</div>
			</motion.section>
		</main>
	)
}

export default ProjectsPage
