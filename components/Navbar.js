import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const { pathname } = useRouter()
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="site-nav" aria-label="Main navigation">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={pathname === item.path ? 'is-active' : ''}
          aria-current={pathname === item.path ? 'page' : undefined}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
