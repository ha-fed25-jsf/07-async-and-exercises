import { NavLink, Outlet } from 'react-router'
import './Root.css'

const Root = () => (
	<div className="app">
		<header>
			<nav>
				<NavLink to="/"> Start </NavLink>
				<NavLink to="/radio"> Radio </NavLink>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
)

export default Root
