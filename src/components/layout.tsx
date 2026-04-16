import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'

function Layout() {
	return (
		<>
			<Sidebar />
			<div className='pt-20 lg:pt-0'>
				<Outlet />
			</div>
		</>
	)
}

export default Layout
