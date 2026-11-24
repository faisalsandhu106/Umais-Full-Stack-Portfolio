import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, Moon, Sun, X, ArrowUpRight } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
]
const sectionIds = links.map((item) => item[1])

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const reduceMotion = useReducedMotion()

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="nav-wrap">
      <nav className="navbar container" aria-label="Main navigation">
        <button className="brand" type="button" onClick={() => go('home')} aria-label="Go to homepage">
          <span className="brand-mark">u.</span>
          <span>umais<span className="brand-dot">.</span></span>
        </button>

        <div className="desktop-links">
          {links.map(([label, id]) => (
            <button
              key={id}
              type="button"
              className={`nav-link ${active === id ? 'active' : ''}`}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((current) => !current)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'close' : 'open'}
              initial={reduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: reduceMotion ? 0 : 0.16 }}
              aria-hidden="true"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
          >
            {links.map(([label, id], index) => (
              <motion.a
                key={id}
                href={`#${id}`}
                className={`mobile-nav-link ${active === id ? 'active' : ''}`}
                aria-current={active === id ? 'location' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  go(id)
                }}
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.18, delay: reduceMotion ? 0 : index * 0.025 }}
              >
                {label}<ArrowUpRight size={16} aria-hidden="true" />
              </motion.a>
            ))}
            <button className="mobile-theme-toggle" type="button" onClick={onToggleTheme}>
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
