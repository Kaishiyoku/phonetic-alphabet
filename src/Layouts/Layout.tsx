import { Outlet } from 'react-router'
import NavLink from '../Components/NavLink.tsx'

export default function Layout() {
  return (
    <div>
      <header>
        <nav className="flex justify-between space-x-2 p-2 bg-zinc-100">
          <div className="flex space-x-2">
            <NavLink to="/">Startseite</NavLink>
            <NavLink to="/about">Über</NavLink>
          </div>

          <NavLink to="/imprint">Impressum</NavLink>
        </nav>
      </header>

      <main className="p-4 border-t border-zinc-300">
        <Outlet />
      </main>
    </div>
  )
}
