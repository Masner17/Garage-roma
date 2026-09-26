import galleryBackground from '../assets/gallerySection.png'

const gallerySlots = [
  'Salida al atardecer',
  'Comunidad en ruta',
  'Paisajes del camino',
  'Parada de aventura',
  'Historias sobre ruedas',
  'Fogón y campamento',
]

function GallerySection() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-[#ded4bc] bg-cover bg-center py-10 text-[#171b1d] sm:py-12"
      style={{ backgroundImage: `url(${galleryBackground})` }}
    >
      <div className="mx-auto grid w-full max-w-[1720px] items-center gap-8 px-6 sm:px-10 lg:grid-cols-[300px_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a94222]">Nuestra historia</p>
          <h2 className="mt-1 [font-family:'Roboto_Slab',serif] text-4xl font-black sm:text-5xl">Galería</h2>
          <p className="mt-3 max-w-[280px] text-sm font-semibold leading-relaxed">Momentos que nos inspiran. Rutas, amigos, paisajes y la pasión de siempre.</p>
          <a href="#" className="mt-5 inline-flex rounded bg-[#aa4221] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c85b24]">Ver galería completa <span className="ml-2" aria-hidden="true">→</span></a>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6" aria-label="Espacios reservados para las fotos de la galería">
          {gallerySlots.map((slot, index) => (
            <div key={slot} className="group relative aspect-[4/3] overflow-hidden border-2 border-[#f0e8d5] bg-[#243137] shadow-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#405057,#152027_70%)] transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 grid place-items-center bg-black/15 p-3 text-center">
                <div>
                  <svg viewBox="0 0 24 24" className="mx-auto size-7 text-[#c8bea7]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="8.5" cy="10" r="1.5" />
                    <path d="m4 17 5-5 3.5 3 2.5-2 5 4" />
                  </svg>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-wide text-[#ddd4bf]">Foto {String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <span className="sr-only">{slot}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
