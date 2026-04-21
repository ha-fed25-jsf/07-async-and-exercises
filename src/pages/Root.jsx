import { NavLink, Outlet } from 'react-router'
import './Root.css'

const Root = () => (
	<div className="app">
		<header>
			<nav>
				<NavLink to="/"> Start </NavLink>
				<NavLink to="/radio"> Radio </NavLink>
				<NavLink to="/radio-z"> RadioZ </NavLink>
				<NavLink to="/klocka"> Klocka </NavLink>
				<NavLink to="/sunset"> Soltid </NavLink>
				<NavLink to="/context"> Djurfakta </NavLink>
				<NavLink to="/petshop"> Hundaffär </NavLink>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
)

export default Root
