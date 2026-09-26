import eventBackground from '../assets/EventSection.png'

// Este objeto podrá reemplazarse por la respuesta del endpoint de eventos.
const nextEvent = {
  title: 'Terapia sobre Ruedas',
  subtitle: 'Tacuarembó',
  date: '08 de junio de 2025',
  location: 'Tacuarembó, Uruguay',
  description:
    'Nuestra chacra, nuestras pistas, nuestra pasión. Una jornada de ruta, amistad y naturaleza.',
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4M17 3v4M3 10h18" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function EventSection() {
  return (
    <section
      id="eventos"
      className="relative isolate min-h-[390px] overflow-hidden border-y border-[#d8cfb7]/25 bg-[#11191d] bg-cover bg-center py-10 text-[#ede4cc] sm:py-12 lg:min-h-[420px]"
      style={{ backgroundImage: `url(${eventBackground})` }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1115]/35 via-[#0b1115]/25 to-black/5" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-[1720px] items-center gap-8 px-6 sm:px-10 lg:grid-cols-[280px_390px_1fr] xl:grid-cols-[340px_430px_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c85b24]">Próxima salida</p>
          <h2 className="mt-1 [font-family:'Roboto_Slab',serif] text-4xl font-black leading-none sm:text-5xl">Próximo evento</h2>
          <div className="mt-6 grid size-52 place-items-center rounded-full border-[7px] border-[#e8e0c9] bg-[#c85b24] text-center shadow-[0_0_0_3px_#172127,0_12px_25px_rgba(0,0,0,.4)]">
            <div className="grid size-[176px] place-items-center rounded-full border-2 border-[#172127] px-4">
              <div>
                <span className="text-4xl" aria-hidden="true">🏍</span>
                <p className="mt-1 [font-family:'Roboto_Slab',serif] text-xl font-black leading-tight text-[#11191d]">TERAPIA SOBRE RUEDAS</p>
                <p className="mt-2 text-xs font-black uppercase tracking-widest text-[#fff1d2]">{nextEvent.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        <article className="max-w-[430px] rounded-sm bg-[#0b1115]/78 p-6 backdrop-blur-[2px] lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <h3 className="[font-family:'Roboto_Slab',serif] text-3xl font-extrabold leading-tight">{nextEvent.title}</h3>
          <p className="mt-1 text-xl font-bold text-[#d47a4e]">— {nextEvent.subtitle}</p>
          <dl className="mt-5 space-y-3 text-sm font-semibold">
            <div className="flex items-center gap-3"><dt className="text-[#d56a35]"><CalendarIcon /></dt><dd>{nextEvent.date}</dd></div>
            <div className="flex items-center gap-3"><dt className="text-[#d56a35]"><PinIcon /></dt><dd>{nextEvent.location}</dd></div>
          </dl>
          <p className="mt-5 max-w-[390px] text-sm leading-relaxed text-[#d6cfbd]">{nextEvent.description}</p>
          <a href="#" className="mt-6 inline-flex items-center rounded bg-[#aa4221] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c85b24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8e0c9]">
            Ver más detalles <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </article>
      </div>
    </section>
  )
}

export default EventSection
