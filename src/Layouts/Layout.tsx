import { Outlet } from 'react-router';
import NavLink from '../Components/NavLink.tsx';

export default function Layout() {
	return (
		<div>
			<header>
				<nav className="flex justify-between space-x-2 p-2">
					<div className="flex space-x-2">
						<NavLink to="/">Buchstabiertafel</NavLink>
						<NavLink to="/about">Über</NavLink>
					</div>

					<NavLink to="/imprint">Impressum</NavLink>
				</nav>
			</header>

			<main className="px-4 py-12">
				<Outlet />
			</main>
		</div>
	);
}
