import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Layout from '../components/layout'
import ProjectsPage from '../pages/projectsPage'
import NotFoundPage from '../pages/notFoundPage'

const routes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <App />
			},
			{
				path: 'projects',
				element: <ProjectsPage />
			}
		]
	},
	{
		path: '*',
		element: <NotFoundPage />
	}
]

export const router = createBrowserRouter(routes)
