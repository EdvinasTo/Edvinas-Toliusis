import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CustomCursor } from './components/cursor/customCursor.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes.tsx'
import logo from './assets/logo.png'

const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null

if (favicon) {
	favicon.type = 'image/png'
	favicon.href = logo
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CustomCursor />
		<RouterProvider router={router} />
	</StrictMode>
)
