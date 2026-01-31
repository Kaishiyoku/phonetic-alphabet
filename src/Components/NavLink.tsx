import { NavLink as BaseNavLink, type To } from 'react-router';
import type { ReactNode } from 'react';
import clsx from 'clsx';

export default function NavLink({
	to,
	children,
}: { to: To; children: ReactNode }) {
	const classes = ({ isActive }: { isActive: boolean }) =>
		clsx(
			'relative block text-base/6 sm:text-sm/5 font-medium rounded-md',
			{
				'text-white underline decoration-2 underline-offset-2 decoration-indigo-500': isActive,
				'hover:underline hover:decoration-2 hover:underline-offset-2 hover:decoration-zinc-500': !isActive,
			},
		);

	return (
		<BaseNavLink to={to} className={classes}>
			{children}
		</BaseNavLink>
	);
}
