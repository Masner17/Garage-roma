import servicesBackground from '../assets/backgroundServiceRank.png'

const services = [
  { icon: '🏍', title: 'Pista de motos Adventure y Enduro' },
  { icon: '⛺', title: 'Zona de cuatriciclos' },
  { icon: '▦', title: 'Circuito 4x4' },
  { icon: '♜', title: 'Clínicas de conducción y seguridad' },
  { icon: '△', title: 'Trekking y caminatas entre monte y cerros' },
  { icon: '⌂', title: 'Encuentros y campamentos' },
]

function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative isolate h-full overflow-hidden bg-[#0c171d] bg-cover bg-right py-10 text-[#eee5ce] sm:py-12"
      style={{ backgroundImage: `url(${servicesBackground})` }}
    >
      <div className="absolute inset-0 -z-10 bg-[#071117]/25" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[900px] px-6 sm:px-10 lg:ml-0 lg:pl-8 xl:pl-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c85b24]">Todo para tu aventura</p>
        <h2 className="mt-1 [font-family:'Roboto_Slab',serif] text-3xl font-black sm:text-4xl">Servicios</h2>
        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded border border-[#d8cfb7]/15 bg-[#d8cfb7]/20 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <article key={service.title} className="flex min-h-36 flex-col items-center justify-center bg-[#08131a]/90 p-4 text-center transition-colors hover:bg-[#15242a]">
              <span className="grid size-12 place-items-center rounded-full border border-[#c85b24]/60 text-2xl" aria-hidden="true">{service.icon}</span>
              <h3 className="mt-3 text-[11px] font-bold leading-snug sm:text-xs">{service.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
