import { NavLink as BaseNavLink, type To } from 'react-router';
import type { ReactNode } from 'react';
import clsx from 'clsx';

export default function NavLink({
	to,
	children,
}: { to: To; children: ReactNode }) {
	const classes = ({ isActive }: { isActive: boolean }) =>
		clsx(
			'link text-sm',
			{
				'decoration-2 decoration-blue-600 hover:decoration-blue-500': isActive,
			},
		);

	return (
		<BaseNavLink to={to} className={classes}>
			{children}
		</BaseNavLink>
	);
}
