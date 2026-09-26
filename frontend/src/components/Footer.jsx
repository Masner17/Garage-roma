import footerBackground from '../assets/footer.png'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6a8.5 8.5 0 1 1 16.3-3.9Z" /><path d="M8.2 8.1c.4 2.8 2.2 4.7 5.2 5.8l1.4-1.5 2.1 1c-.4 1.8-1.5 2.6-3.2 2.5-3.5-.4-6.8-3.5-7.4-6.8-.1-1.5.7-2.5 2.2-2.8l1 2-1.3 1.3" />
    </svg>
  )
}

function Footer() {
  return (
    <footer
      className="relative isolate min-h-[270px] overflow-hidden bg-[#08131a] bg-cover bg-center py-10 text-[#e9dfc6] sm:min-h-[320px]"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="absolute inset-0 -z-10 bg-black/10" aria-hidden="true" />
      <div className="mx-auto flex min-h-[210px] w-full max-w-[1720px] items-end justify-end px-6 sm:px-10">
        <div className="w-full rounded border border-white/10 bg-[#071117]/85 p-5 shadow-xl backdrop-blur-sm sm:w-auto sm:min-w-[380px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c85b24]">Seguinos y escribinos</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a href="https://www.instagram.com/garageroma.775?stkn=OWEwY3E1MWM1eGpv" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded border border-white/15 px-4 py-3 transition-colors hover:border-[#c85b24] hover:text-[#e27a47]" aria-label="Instagram de El Garage Roma">
              <InstagramIcon /><span><strong className="block text-xs uppercase tracking-wider">Instagram</strong><small className="text-[#beb59f]">@garageroma.775</small></span>
            </a>
            <a href="https://wa.me/59897094999" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded border border-white/15 px-4 py-3 transition-colors hover:border-[#c85b24] hover:text-[#e27a47]" aria-label="WhatsApp de El Garage Roma">
              <WhatsappIcon /><span><strong className="block text-xs uppercase tracking-wider">WhatsApp</strong><small className="text-[#beb59f]">+598 97 094 999</small></span>
            </a>
          </div>
          <p className="mt-4 text-[10px] text-[#9f9786]">© {new Date().getFullYear()} El Garage Roma. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
