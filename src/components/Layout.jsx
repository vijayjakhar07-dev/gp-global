import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { COMPANY, NAV } from '../data/content'

function Header() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`sticky top-0 z-40 border-b transition-[background,padding] duration-300 ${compact ? 'border-[#d4cdc0] bg-[#f3efe6]/95 py-2 backdrop-blur-md' : 'border-transparent bg-[#f3efe6]/90 py-4 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/" className="min-w-0">
          <span className="block font-serif text-[1.35rem] font-semibold leading-none tracking-tight text-[#12151a]">GP Global</span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5f5a53]">Petro Energy</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `nav-link text-[13px] font-medium uppercase tracking-[0.14em] ${isActive ? 'text-[#12151a]' : 'text-[#3e3a35]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden border border-[#12151a] bg-[#12151a] px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#f3efe6] transition hover:bg-[#b45309] hover:border-[#b45309] sm:inline-flex"
          >
            Discuss a Project
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-[#d4cdc0] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-px w-5 bg-[#12151a] transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 h-px w-5 bg-[#12151a] transition ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-px w-5 bg-[#12151a] transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-[#d4cdc0] bg-[#f3efe6] px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className="text-base font-medium text-[#12151a]"
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="mt-2 inline-flex w-fit border border-[#12151a] bg-[#12151a] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#f3efe6]">
              Discuss a Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#d4cdc0] bg-[#12151a] text-[#e7e0d4]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-2xl">GP Global Petro Energy</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#b7b1a6]">
            Industrial bitumen supply and infrastructure support for road, highway and civil construction programmes.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#8c867c]">GSTIN {COMPANY.gstin}</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8c867c]">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8c867c]">Contact</p>
          <address className="mt-4 not-italic text-sm leading-7">
            <p>{COMPANY.address}</p>
            <p>
              <a className="hover:text-white" href={`tel:${COMPANY.phoneTel}`}>{COMPANY.phoneDisplay}</a>
            </p>
            <p>
              <a className="hover:text-white" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1280px] px-5 py-5 text-xs text-[#8c867c] md:px-8">
          © {new Date().getFullYear()} GP Global Petro Energy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GP Global Petro Energy',
  email: 'vijay.kumar.jakhar.dev@gmail.com',
  telephone: '+91-9828102506',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rajendra Park',
    addressRegion: 'Haryana',
    postalCode: '122001',
    addressCountry: 'IN',
  },
  vatID: '06EVZPS4105J2ZR',
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="page-wrap min-h-screen bg-[#f3efe6] text-[#16181c]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
