import { useState } from 'react'
import { Utensils, Phone, Menu as MenuIcon } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#reservation', label: 'Reservasi' },
    { href: '#contact', label: 'Kontak' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-800">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white shadow-sm">
              <Utensils size={18} />
            </span>
            <span className="text-lg tracking-tight">Rasa Nusantara</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-neutral-700 hover:text-red-700 transition-colors">
                {n.label}
              </a>
            ))}
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-700"
            >
              <Phone size={16} />
              Book Table
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-neutral-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            <MenuIcon />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-neutral-800 hover:bg-neutral-100"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 bg-red-600 text-white hover:bg-red-700"
            >
              Book Table
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
