import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Strona główna' },
  { to: '/ciesielstwo', label: 'Ciesielstwo' },
  { to: '/dekarstwo', label: 'Dekarstwo' },
  { to: '/realizacje', label: 'Realizacje' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-gabbud-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">GABBUD</span>
            <span className="hidden sm:inline text-xs text-gabbud-light uppercase tracking-widest">| ciesielstwo &ndash; dekarstwo</span>
          </Link>

          <button
            className="sm:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-white text-gabbud-black'
                    : 'text-gabbud-light hover:text-white hover:bg-gabbud-gray/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <nav className="sm:hidden pb-4 border-t border-gabbud-gray/30 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-white text-gabbud-black'
                    : 'text-gabbud-light hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
