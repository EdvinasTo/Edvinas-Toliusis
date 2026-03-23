import { motion } from 'framer-motion'

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
		<>
			<motion.main></motion.main>
		</>
	)
}

export default App
