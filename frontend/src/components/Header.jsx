import { useState } from 'react'
import logo from '../assets/iconoHeader.png'
import mountainIcon from '../assets/iconoHeader2.png'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Club', href: '#club' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Pistas', href: '#pista' },
  { label: 'Ranking', href: '#ranking' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ingresar', href: '#ingresar' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkClasses =
    'whitespace-nowrap text-sm font-semibold tracking-[0.04em] text-[#D6D1C4] transition-colors duration-200 hover:text-[#C85B24]'

  const communityMark = (
    <div className="flex shrink-0 items-center gap-3" aria-label="Más que motos, una comunidad">
      <img
        src={mountainIcon}
        alt=""
        className="h-14 w-auto shrink-0 object-contain"
        aria-hidden="true"
      />
      <span className="text-[13px] font-semibold leading-[1.25] tracking-[0.08em] text-[#D6D1C4]">
        MÁS QUE MOTOS
        <br />
        UNA COMUNIDAD
      </span>
    </div>
  )

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[72px] overflow-visible border-b border-[rgba(232,224,201,0.12)] bg-[#0D151A]/90">
      <div className="relative mx-auto grid h-[72px] w-full max-w-[1720px] grid-cols-[240px_1fr_240px] items-center overflow-visible px-6 sm:px-10">
        <a
          href="#inicio"
          className="flex h-[72px] shrink-0 items-center overflow-visible rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85B24]"
          aria-label="Ir al inicio de El Garage Roma"
        >
          <img
            src={logo}
            alt="El Garage Roma"
            className="h-auto w-[160px] max-w-none object-contain sm:w-[180px] lg:w-[210px] translate-y-3"
          />
        </a>

        <nav
          className="hidden items-center justify-center gap-10 xl:flex"
          aria-label="Navegación principal"
        >
          {navigation.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`${linkClasses} rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C85B24]`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden justify-self-end translate-x-10 xl:flex">
            {communityMark}
        </div>

        <button
          type="button"
          className="grid size-11 justify-self-end place-items-center rounded-md text-[#E8E0C9] transition-colors hover:bg-white/5 hover:text-[#C85B24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85B24] xl:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          )}
        </button>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            className="absolute left-6 right-6 top-full flex flex-col border border-t-0 border-[rgba(232,224,201,0.12)] bg-[#0D151A] px-6 py-5 shadow-2xl sm:left-10 sm:right-10 xl:hidden"
            aria-label="Navegación móvil"
          >
            {navigation.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`w-fit py-3 ${linkClasses} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85B24]`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="mt-3 border-t border-[rgba(232,224,201,0.12)] pt-5">
              {communityMark}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
