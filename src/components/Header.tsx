import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Expertises', href: '#expertise' },
  { label: 'Parcours', href: '#journey' },
  { label: 'Projets', href: '#projects' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#home"
        aria-label={profile.name + ', retour à l’accueil'}
        onClick={closeMenu}
      >
        <span className="wordmark__mark" aria-hidden="true">
          M<span>.</span>
        </span>
        <span className="wordmark__name">
          {profile.name.toUpperCase()}
          <small>DIGITAL JOURNEY</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-controls="main-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <nav
        className={isOpen ? 'main-nav is-open' : 'main-nav'}
        id="main-navigation"
        aria-label="Navigation principale"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Me contacter <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
