import { NavLink as BaseNavLink, type To } from 'react-router'
import type { ReactNode } from 'react'
import clsx from 'clsx'

export default function NavLink({
	to,
	children,
}: { to: To; children: ReactNode }) {
  const classes = ({isActive}: {isActive: boolean}) => clsx(
	'relative block px-3 py-2 text-base/6 sm:text-sm/5 font-medium rounded-md',
    {
      'text-white bg-indigo-500 hover:bg-indigo-600': isActive,
      'hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50': !isActive,
    }
  );

	return (
		<BaseNavLink
			to={to}
			className={classes}
		>
			{children}
		</BaseNavLink>
	);
}
