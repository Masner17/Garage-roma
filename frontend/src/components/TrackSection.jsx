import galleryBackground from '../assets/gallerySection.png'

function TrackSection({ tracks, activeTrackIndex, onSelectTrack }) {
  return (
    <section
      id="pista"
      className="overflow-hidden bg-[#e7dec6]"
    >
      <div className="grid lg:grid-cols-2">
        <div className="order-2 relative min-h-64 overflow-hidden sm:min-h-80 lg:min-h-[480px]">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`absolute inset-0 bg-cover transition-opacity duration-[2000ms] ease-in-out ${
                index === activeTrackIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${track.image})`,
                backgroundPosition: track.imagePosition,
              }}
              aria-hidden="true"
            />
          ))}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#071117]/45 to-transparent sm:w-28" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#071117]/35 to-transparent sm:h-20" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#071117]/45 to-transparent sm:h-24" aria-hidden="true" />
          <div
            className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full border border-white/20 bg-[#071117]/75 p-1.5 shadow-lg backdrop-blur-sm"
            aria-label="Seleccionar pista"
            role="group"
          >
            {tracks.map((track, index) => (
              <button
                key={track.id}
                type="button"
                onClick={() => onSelectTrack(index)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  index === activeTrackIndex
                    ? 'bg-[#c85b24] text-white'
                    : 'text-[#eee5ce] hover:bg-white/15'
                }`}
                aria-pressed={index === activeTrackIndex}
              >
                {track.name}
              </button>
            ))}
          </div>
        </div>

        <div
          className="order-1 flex items-center bg-[#ded4bc] bg-cover bg-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 xl:px-16"
          style={{ backgroundImage: `url(${galleryBackground})` }}
        >
          <div className="mx-auto w-full max-w-2xl text-[#161b1d]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a94222]">Entrená. Mejorá. Superate.</p>
            <h2 className="mt-2 [font-family:'Roboto_Slab',serif] text-4xl font-black sm:text-5xl">Nuestra pista</h2>
            <p className="mt-3 max-w-xl text-sm font-semibold leading-relaxed sm:text-base">
              Un espacio diseñado para vivir la aventura, mejorar tus habilidades y disfrutar al máximo. Tierra, desafíos y pura adrenalina.
            </p>

            <div className="mt-7 grid">
              {tracks.map((track, trackIndex) => (
                <div
                  key={track.id}
                  className={`col-start-1 row-start-1 grid gap-5 transition-opacity duration-[2000ms] ease-in-out sm:grid-cols-[1fr_1.2fr] ${
                    trackIndex === activeTrackIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                  aria-hidden={trackIndex !== activeTrackIndex}
                >
                  <ul className="rounded bg-[#0b1115] p-5 text-sm font-semibold text-[#e8e0c9] shadow-xl">
                    {track.features.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-center gap-3 border-b border-white/10 py-2 last:border-0">
                        <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#c85b24] text-xs text-[#df7b4b]" aria-hidden="true">{featureIndex + 1}</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="grid place-items-center rounded border border-[#c85b24]/40 bg-[#160f0c] p-5 text-center shadow-xl">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7bda5]">Récord actual · {track.name}</p>
                      <p className="mt-2 font-mono text-4xl font-black tracking-tight text-[#f1e5c9] sm:text-5xl">{track.record}</p>
                      <p className="mt-2 text-xs font-semibold text-[#c85b24]">{track.recordText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackSection
