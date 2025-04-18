import { NavLink as BaseNavLink, To } from 'react-router';
import { ReactNode } from 'react';

export default function NavLink({
	to,
	children,
}: { to: To; children: ReactNode }) {
	return (
		<BaseNavLink
			to={to}
			className="relative block px-3 py-2 text-base/6 sm:text-sm/5 font-medium hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded"
		>
			{({ isActive }) => (
				<>
					{children}

					{isActive && (
						<div className="absolute inset-x-2 -bottom-2 h-0.5 rounded-full bg-zinc-950 dark:bg-white" />
					)}
				</>
			)}
		</BaseNavLink>
	);
}
