import trackBackground from '../assets/hero.png'

const trackFeatures = ['Enduro', 'Adventure', 'Cronometraje', 'Reglamento']

function TrackSection() {
  return (
    <section
      id="pista"
      className="relative isolate overflow-hidden bg-[#d8cfb7] bg-cover bg-center py-10 sm:py-12"
      style={{ backgroundImage: `url(${trackBackground})` }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#e7dec6] via-[#e7dec6]/95 to-[#0b1115]/20 lg:via-[#e7dec6]/60 lg:to-[#0b1115]/45" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-[1720px] items-center gap-8 px-6 sm:px-10 lg:grid-cols-[minmax(300px,1fr)_minmax(430px,1.3fr)_minmax(330px,.9fr)]">
        <div className="text-[#161b1d]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a94222]">Entrená. Mejorá. Superate.</p>
          <h2 className="mt-2 [font-family:'Roboto_Slab',serif] text-4xl font-black sm:text-5xl">Nuestra pista</h2>
          <p className="mt-3 max-w-md text-sm font-semibold leading-relaxed sm:text-base">
            Un espacio diseñado para vivir la aventura, mejorar tus habilidades y disfrutar al máximo. Tierra, desafíos y pura adrenalina.
          </p>
          <a href="#" className="mt-6 inline-flex rounded bg-[#aa4221] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c85b24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#161b1d]">
            Conocé la pista <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="hidden min-h-56 lg:block" aria-hidden="true" />

        <div className="grid gap-5 sm:grid-cols-[1fr_1.2fr] lg:grid-cols-1 xl:grid-cols-[.85fr_1.15fr]">
          <ul className="rounded bg-[#0b1115]/90 p-5 text-sm font-semibold text-[#e8e0c9] backdrop-blur-sm">
            {trackFeatures.map((feature, index) => (
              <li key={feature} className="flex items-center gap-3 border-b border-white/10 py-2 last:border-0">
                <span className="grid size-7 place-items-center rounded-full border border-[#c85b24] text-xs text-[#df7b4b]" aria-hidden="true">{index + 1}</span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="grid place-items-center rounded border border-[#c85b24]/40 bg-[#160f0c]/90 p-5 text-center shadow-xl">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7bda5]">Récord actual</p>
              <p className="mt-2 font-mono text-4xl font-black tracking-tight text-[#f1e5c9] sm:text-5xl">01:43.82</p>
              <p className="mt-2 text-xs font-semibold text-[#c85b24]">Esperando tu mejor vuelta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackSection
