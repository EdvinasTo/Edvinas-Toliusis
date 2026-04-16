import { motion } from 'framer-motion'
import navItems from '../constants/navItems'
import socialLinks from '../constants/socialLinks'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
	const location = useLocation()

	return (
		<motion.aside
			className='fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between border-b border-white/10 bg-[#16171d] px-4 text-white sm:px-6 lg:h-screen lg:w-64 lg:flex-col lg:justify-between lg:border-b-0 lg:border-r lg:px-6 lg:py-8 lg:items-center'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
		>
			<div className='w-full lg:space-y-10'>
				<nav aria-label='Sidebar navigation'>
					<ul className='flex items-center gap-5 text-sm uppercase tracking-[0.2em] text-white/70 sm:gap-7 sm:text-base lg:flex-col lg:items-start lg:gap-4 lg:pt-30 lg:text-xl lg:tracking-[0.3em]'>
						{navItems.map((item) => (
							<motion.li
								key={item.label}
								whileHover='hover'
							>
								{(() => {
									const isActive = location.pathname === item.href

									return (
										<Link
											to={item.href}
											className='relative inline-block w-full transition-colors duration-300 hover:text-white'
										>
											{item.label}
											<motion.div
												className='absolute bottom-0 left-0 h-px w-full bg-white'
												initial={false}
												animate={{ scaleX: isActive ? 1 : 0 }}
												variants={{
													hover: { scaleX: 1 }
												}}
												transition={{ duration: 0.3 }}
												style={{ originX: 0 }}
											/>
										</Link>
									)
								})()}
							</motion.li>
						))}
					</ul>
				</nav>
			</div>

			<div className='flex items-center gap-4 text-white/60 lg:flex-col lg:items-center'>
				<div className='flex items-center gap-4'>
					{socialLinks.map((item) => {
						const Icon = item.icon

						return (
							<a
								key={item.label}
								href={item.href}
								target='_blank'
								rel='noreferrer'
								aria-label={item.label}
								className='text-2xl transition-colors duration-300 hover:text-white lg:text-4xl'
							>
								<Icon />
							</a>
						)
					})}
				</div>
				<div className='hidden text-base text-white/40 lg:block'>
					<p>© Edvinas Toliušis</p>
				</div>
			</div>
		</motion.aside>
	)
}

export default Sidebar
