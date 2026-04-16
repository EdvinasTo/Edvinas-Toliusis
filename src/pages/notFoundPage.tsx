import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function NotFoundPage() {
	return (
		<motion.main
			className='flex min-h-screen items-center justify-center bg-[#0f1116] px-6 text-white'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
		>
			<div className='w-full max-w-2xl border border-white/10 bg-white/3 p-8 text-center sm:p-12'>
				<p className='text-xs uppercase tracking-[0.4em] text-white/50'>Error</p>
				<h1 className='mt-4 text-6xl font-thin tracking-[0.2em] sm:text-7xl'>404</h1>
				<p className='mt-4 text-xl text-white/85 sm:text-2xl'>Page not found</p>
				<p className='mt-5 text-sm leading-relaxed text-white/60 sm:text-base'>
					The page you are looking for does not exist or has been moved.
				</p>

				<div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
					<Link
						to='/'
						className='rounded-xs border border-white/25 bg-white/8 px-5 py-2 text-sm text-white/90 transition-colors duration-200 hover:bg-white hover:text-black'
					>
						Go Home
					</Link>
					<Link
						to='/projects'
						className='rounded-xs border border-white/25 bg-transparent px-5 py-2 text-sm text-white/90 transition-colors duration-200 hover:border-white/45 hover:bg-white/8'
					>
						View Projects
					</Link>
				</div>
			</div>
		</motion.main>
	)
}

export default NotFoundPage
