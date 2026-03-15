'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, User, Wrench, Linkedin, Github, ExternalLink } from 'lucide-react'
import Logo from './Logo'

const NAV_ITEMS = [
  { href: '/',         label: 'Home',     Icon: Home },
  { href: '/blog',     label: 'Blog',     Icon: BookOpen },
  { href: '/projects', label: 'Projects', Icon: Wrench },
  { href: '/about',    label: 'About',    Icon: User },
]

const SOCIAL_LINKS = [
  { href: 'https://linkedin.com/in/vadiraj-kulkarni', label: 'LinkedIn',  Icon: Linkedin },
  { href: 'https://github.com/vadirajkulkarni',       label: 'GitHub',    Icon: Github },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[220px] bg-white border-r border-gray-100 flex-col p-4 z-20">
        {/* Profile */}
        <div className="flex items-center gap-3 px-2 py-3 mb-4">
          <Logo size={36} />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Vadiraj</p>
            <p className="text-xs text-gray-400 truncate">Platform Engineer</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-0.5">
          {NAV_ITEMS.map(({ href, label, Icon }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon size={15} strokeWidth={isActive ? 2.5 : 2} />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Connect */}
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 px-3">
            Connect
          </p>
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 group"
            >
              <span className="flex items-center gap-3">
                <Icon size={15} strokeWidth={2} />
                {label}
              </span>
              <ExternalLink size={12} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
            </a>
          ))}
        </div>
      </aside>

      {/* ── Mobile top bar ── */}
      <header className="lg:hidden sticky top-0 z-20 bg-white border-b border-gray-100 px-4 h-12 flex items-center justify-between">
        <Logo size={28} />
        <nav className="flex items-center gap-4">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  )
}
