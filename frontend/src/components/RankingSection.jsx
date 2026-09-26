import rankingBackground from '../assets/backgroundServiceRank.png'

// En la integración, esta colección podrá venir del endpoint de récords.
const ranking = [
  { position: 1, rider: 'Martín Silva', bike: 'KTM EXC 300', time: '01:42.38' },
  { position: 2, rider: 'Nicolás Pereira', bike: 'Yamaha YZ', time: '01:44.12' },
  { position: 3, rider: 'Diego Rodríguez', bike: 'Honda CRF', time: '01:47.09' },
]

function RankingSection() {
  return (
    <section
      id="ranking"
      className="relative isolate h-full overflow-hidden bg-[#0c171d] bg-cover bg-left py-10 text-[#eee5ce] sm:py-12"
      style={{ backgroundImage: `url(${rankingBackground})` }}
    >
      <div className="absolute inset-0 -z-10 bg-[#071117]/25" aria-hidden="true" />
      <div className="mx-auto w-full max-w-[820px] px-6 sm:px-10 lg:ml-auto lg:pr-8 xl:pr-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c85b24]">Los más rápidos</p>
        <h2 className="mt-1 [font-family:'Roboto_Slab',serif] text-3xl font-black sm:text-4xl">Ranking de mejores tiempos</h2>
        <div className="mt-6 overflow-hidden rounded border border-[#d8cfb7]/20 bg-[#071117]/60 shadow-xl">
          <table className="w-full table-fixed text-left text-xs sm:text-sm">
            <thead className="bg-[#e8e0c9]/10 text-[#c9c0aa]">
              <tr><th className="w-12 px-3 py-3 text-center">#</th><th className="px-3 py-3">Piloto</th><th className="hidden px-3 py-3 sm:table-cell">Moto</th><th className="px-3 py-3 text-right">Tiempo</th></tr>
            </thead>
            <tbody>
              {ranking.map((record) => (
                <tr key={record.position} className="border-t border-white/10 first:border-0">
                  <td className={record.position === 1 ? 'bg-[#aa4221] px-3 py-3 text-center font-black text-white' : 'px-3 py-3 text-center font-bold'}>{record.position}</td>
                  <td className="truncate px-3 py-3 font-bold">{record.rider}</td>
                  <td className="hidden truncate px-3 py-3 text-[#c7bda5] sm:table-cell">{record.bike}</td>
                  <td className="px-3 py-3 text-right font-mono font-bold">{record.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <a href="#" className="mt-5 inline-flex rounded border border-[#c85b24] px-5 py-2.5 text-sm font-bold transition-colors hover:bg-[#c85b24] hover:text-white">Ver ranking completo <span className="ml-2" aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}

export default RankingSection
