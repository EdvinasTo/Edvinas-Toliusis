import mapRoutingImage from '../assets/mapRouting.png'
import quizImage from '../assets/quiz.png'
import eCommerceImage from '../assets/e_commerce.png'
import typeRacerImage from '../assets/typeRacer.png'
import linkType from '../types/linkType'

type Project = {
	title: string
	role: string
	description: string
	tech: string[]
	links: {
		label: string
		href: string
		type: (typeof linkType)[keyof typeof linkType]
	}[]
	image: string
}

const projects: Project[] = [
	{
		title: 'E-commerce platform',
		role: 'Academic Project / Full Stack',
		description: `It's an E-commerce comparison app. Key features 
    include best deals, price comparison across shops, and a "Favorites" option.`,
		tech: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'CSS'],
		links: [
			{ label: 'Frontend', href: 'https://github.com/EdvinasTo/grandytojai_frontend', type: linkType.GITHUB },
			{ label: 'Backend', href: 'https://github.com/EdvinasTo/grandytojai_backend', type: linkType.GITHUB },
			{ label: 'Scraper', href: 'https://github.com/EdvinasTo/grandytojai_scrapers', type: linkType.GITHUB }
		],
		image: eCommerceImage
	},
	{
		title: 'Žalgiris trivia',
		role: 'Personal Project / Full Stack',
		description:
			'This web app has both backend and frontend, also it has 2 pages. In the main page there is a quiz and in the second there is a leaderboard of top 10 ranking players.',
		tech: ['React', 'JavaScript', 'C#', '.NET', 'CSS'],
		links: [{ label: 'GitHub Repo', href: 'https://github.com/EdvinasTo/ZalgirisTrivia', type: linkType.GITHUB }],
		image: quizImage
	},
	{
		title: 'Map Routing App',
		role: 'Academic Project / Full Stack',
		description: "It's a desktop app that finds the shortest route. It uses A* algorithm.",
		tech: ['JMH', 'Java', 'Maven', 'JavaFX'],
		links: [{ label: 'GitHub Repo', href: 'https://github.com/EdvinasTo/MapRouting', type: linkType.GITHUB }],
		image: mapRoutingImage
	},
	{
		title: 'Type racer',
		role: 'Personal Project / Front End',
		description: `It's a web app that checks how fast the user can type.`,
		tech: ['JavaScript', 'CSS', 'HTML'],
		links: [
			{ label: 'Live Site', href: 'https://edvinasto.github.io/TypeRacer/', type: linkType.SITE },
			{ label: 'GitHub Repo', href: 'https://github.com/EdvinasTo/TypeRacer', type: linkType.GITHUB }
		],
		image: typeRacerImage
	}
]

export default projects
