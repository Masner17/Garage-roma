import communityIcon from '../assets/comunidad.png'
import adventureIcon from '../assets/aventura.png'
import eventsIcon from '../assets/eventos.png'
import clubBackground from '../assets/backgroundClub.png'

function ClubSection() {
  return (
    <section
    
      id="club"
      className="relative z-20 -mt-1 w-full overflow-hidden border-t border-[rgba(216,207,183,0.35)] bg-[#D8CFB7] shadow-[0_-8px_20px_rgba(0,0,0,0.18)]"
    >
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-no-repeat opacity-65"
          style={{
            backgroundImage: `url(${clubBackground})`,
            backgroundSize: '130% auto',
            backgroundPosition: 'right center',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(232,224,201,0.96)_0%,rgba(232,224,201,0.82)_58%,rgba(232,224,201,0.18)_82%,transparent_100%)]"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-[#3A2E26]/50 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-[#0D151A]/45 to-transparent" />
        <div className="relative z-20 mx-auto grid w-full max-w-[1720px] grid-cols-1 items-center gap-6 px-6 py-6 sm:px-10 lg:grid-cols-[minmax(320px,1.2fr)_minmax(430px,2fr)_minmax(220px,260px)] lg:gap-8">
        <div>
          <h2 className="[font-family:'Roboto_Slab',serif] text-[38px] font-black leading-none text-[#171A1B] sm:text-[50px]">
            El Club
          </h2>

          <p className="mt-2 max-w-[470px] [font-family:Montserrat,sans-serif] text-[15px] leading-[1.5] text-[#303332] sm:text-base">
            El Garage Roma es una comunidad de apasionados por las motos, la
            aventura y la vida al aire libre. Compartimos rutas, experiencias y
            la misma filosofía: que la aventura siempre es mejor en buena
            compañía.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-5">
          <div className="flex flex-col items-center text-center">
            <img
              src={communityIcon}
              alt=""
              className="h-[80px] w-[80px] object-contain"
            />
            <h3 className="mt-2 [font-family:Montserrat,sans-serif] text-[17px] font-bold text-[#171A1B]">
              Comunidad
            </h3>
            <p className="mt-1 max-w-[180px] [font-family:Montserrat,sans-serif] text-sm font-medium leading-[1.4] text-[#303332]">
              Personas que comparten la misma pasión.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src={adventureIcon}
              alt=""
              className="h-[80px] w-[80px] object-contain"
            />
            <h3 className="mt-2 [font-family:Montserrat,sans-serif] text-[17px] font-bold text-[#171A1B]">
              Aventura
            </h3>
            <p className="mt-1 max-w-[180px] [font-family:Montserrat,sans-serif] text-sm font-medium leading-[1.4] text-[#303332]">
              Exploramos nuevas rutas y vivimos nuevas experiencias juntos.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src={eventsIcon}
              alt=""
              className="h-[80px] w-[80px] object-contain"
            />
            <h3 className="mt-2 [font-family:Montserrat,sans-serif] text-[17px] font-bold text-[#171A1B]">
              Eventos
            </h3>
            <p className="mt-1 max-w-[180px] [font-family:Montserrat,sans-serif] text-sm font-medium leading-[1.4] text-[#303332]">
              Encuentros, salidas y experiencias únicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClubSection
