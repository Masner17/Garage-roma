import heroBackground from '../assets/hero.png'
import loginMark from '../assets/iconoHeader2.png'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate h-[680px] w-full overflow-hidden bg-cover bg-center sm:h-[630px]"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true" />

      <div className="relative mx-auto h-full w-full max-w-[1720px] px-6 pt-[80px] sm:px-10">
        <div className="flex h-full w-full max-w-[500px] flex-col items-center justify-center pb-24 text-center sm:pb-20">
          <h1 className="w-full uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">
            <span className="block [font-family:'Roboto_Slab',serif] text-[58px] font-black leading-[0.95] text-[#CFC5AA] sm:text-[76px]">
              El Garage
            </span>
            <span className="mt-1 block [font-family:'Roboto_Slab',serif] text-[78px] font-black leading-[0.9] text-[#A94F2D] sm:text-[102px]">
              Roma
            </span>
          </h1>

          <p className="mt-9 w-full [font-family:Kalam,cursive] text-2xl font-bold leading-[1.1] text-[#CFC5AA] sm:text-3xl">
            Pasión, aventura y comunidad
            <br />
            sobre dos ruedas.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-[14px] sm:w-auto sm:flex-row">
            <a
              href="#club"
              className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center whitespace-nowrap rounded-[6px] border-2 border-[#E06A2D] bg-[#C85B24] px-6 [font-family:Montserrat,sans-serif] text-base font-bold text-[#FFF4DF] transition-colors hover:bg-[#D66529] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9DFC5] sm:w-auto sm:max-w-none sm:px-8"
            >
              Conocer el club <span aria-hidden="true">→</span>
            </a>
            <a
              href="#ingresar"
              className="inline-flex h-[52px] w-full max-w-[260px] items-center justify-center whitespace-nowrap rounded-[6px] border-2 border-[#D8CDAF] bg-[rgba(13,21,26,0.78)] px-6 [font-family:Montserrat,sans-serif] text-base font-bold text-[#E9DFC5] transition-colors hover:border-[#C85B24] hover:bg-[rgba(255,243,236,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E9DFC5] sm:w-auto sm:max-w-none sm:px-8"
            >
              Hacete miembro
            </a>
          </div>
        </div>

        <div id="ingresar" className="absolute top-[calc(50%+35px)] right-[50px] z-10 hidden min-h-[430px] w-[360px] -translate-y-1/2 scroll-mt-24 rounded-[6px] border border-[rgba(207,197,170,0.20)] bg-[#0D151A]/95 px-[30px] pt-[30px] pb-[26px] shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur-[2px] lg:block">
          <h2 className="[font-family:Montserrat,sans-serif] text-[27px] font-bold leading-none text-[#CFC5AA]">
            Bienvenido
          </h2>
          <p className="mt-1 [font-family:Montserrat,sans-serif] text-sm font-normal text-[rgba(207,197,170,0.70)]">
            Ingresá a tu cuenta
          </p>

          <form className="mt-6">
            <div className="flex flex-col gap-4">
              <label className="relative block">
                <span className="sr-only">Email</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="pointer-events-none absolute top-1/2 left-[14px] h-[18px] w-[18px] -translate-y-1/2 text-[#AFA58E]"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                <input
                  type="email"
                  placeholder="Email"
                  className="h-12 w-full rounded-[5px] border border-[rgba(207,197,170,0.32)] bg-[rgba(5,7,7,0.55)] pr-[14px] pl-11 [font-family:Montserrat,sans-serif] text-sm text-[#E5DCC4] outline-none placeholder:text-[rgba(207,197,170,0.55)] focus:border-[#9E5838] focus:ring-1 focus:ring-[rgba(158,88,56,0.25)]"
                />
              </label>

              <label className="relative block">
                <span className="sr-only">Contraseña</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="pointer-events-none absolute top-1/2 left-[14px] h-[18px] w-[18px] -translate-y-1/2 text-[#AFA58E]"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="h-12 w-full rounded-[5px] border border-[rgba(207,197,170,0.32)] bg-[rgba(5,7,7,0.55)] pr-11 pl-11 [font-family:Montserrat,sans-serif] text-sm text-[#E5DCC4] outline-none placeholder:text-[rgba(207,197,170,0.55)] focus:border-[#9E5838] focus:ring-1 focus:ring-[rgba(158,88,56,0.25)]"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="pointer-events-none absolute top-1/2 right-[14px] h-[18px] w-[18px] -translate-y-1/2 text-[#AFA58E]"
                >
                  <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </label>
            </div>

            <button
              type="button"
              className="mt-5 h-12 w-full rounded-[6px] border-2 border-[#E06A2D] bg-[#C85B24] [font-family:Montserrat,sans-serif] text-sm font-bold text-[#FFF4DF] transition-colors hover:bg-[#D66529] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CFC5AA]"
            >
              Ingresar
            </button>
          </form>

          <p className="mt-[14px] text-center [font-family:Montserrat,sans-serif] text-[13px] text-[#9F9785]">
            ¿No tenés cuenta?{' '}
            <a href="#" className="font-bold text-[#A85A3A]">
              Registrate
            </a>
          </p>

          <div className="mt-[22px] flex flex-col items-center justify-center gap-2 border-t border-[rgba(207,197,170,0.12)] pt-[18px]">
            <img
              src={loginMark}
              alt=""
              className="h-auto w-[100px] scale-y-125 object-contain opacity-85"
            />
            <p className="w-full text-center [font-family:Montserrat,sans-serif] text-[10px] font-semibold leading-[1.4] tracking-[0.12em] text-[#BFB59C] uppercase">
              Naturaleza · Libertad
              <br />
              Adrenalina · Comunidad
            </p>
          </div>
        </div>

        {/*<img
          src={heroSign}
          alt="Buenas rutas, mejores historias"
          className="absolute right-6 bottom-3 w-[170px]  object-contain opacity-75 drop-shadow-[0_8px_12px_rgba(0,0,0,0.55)] sm:right-10 sm:bottom-4 sm:w-[220px]"
          style={{
            transform: 'perspective(600px) rotateY(-12deg)',
            transformOrigin: 'right center',
        }} 
        /> */}
      </div>
    </section>
  )
}

export default Hero
