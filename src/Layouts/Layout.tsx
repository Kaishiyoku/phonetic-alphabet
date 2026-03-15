import { Outlet } from 'react-router';
import NavLink from '../Components/NavLink.tsx';

export default function Layout() {
	return (
		<div className="max-w-2xl mx-auto">
			<header>
				<nav className="flex justify-between space-x-2 p-2">
					<div className="flex space-x-4 px-4 py-2">
						<NavLink to="/">Buchstabiertafel</NavLink>
						<NavLink to="/about">Über</NavLink>
					</div>

                    <div className="flex space-x-4 px-4 py-2">
					    <NavLink to="/imprint">Impressum</NavLink>
                    </div>
				</nav>
			</header>

			<main className="px-4 py-12">
				<Outlet />
			</main>
		</div>
	);
}
