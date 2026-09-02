'use client'

import { ShieldCheck, Award, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section 
      id="herosection"
      className="relative flex min-h-[90vh] md:min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] pt-28 sm:pt-36 lg:pt-40 pb-20"
    >
      {/* Imagem de Fundo & Gradiante de Leitura */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-1000 ease-out scale-105"
          style={{ backgroundImage: "url('/bmw_hero_kaely.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_100%)] z-10 opacity-90" />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col items-start gap-6 sm:gap-8 max-w-4xl">
          
          {/* Tagline / Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#85d63b] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F8F9FA]">
              ESTÉTICA &amp; PROTEÇÃO AUTOMOTIVA
            </span>
          </div>

      {/* Título Harmonioso */}
<h1 className="flex flex-col gap-1.5 sm:gap-3 uppercase font-serif tracking-tight">
  {/* Destaque Principal - DESDE 1997 */}
  <span className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none text-[#F8F9FA]">
    DESDE 1997
  </span>
  
  {/* Slogan Proporcional */}
  <span className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#F8F9FA]/90">
    28 Anos Garantindo <br className="hidden sm:inline" />
    <span className="text-[#85d63b]">Conforto &amp; Qualidade</span>
  </span>
</h1>

          {/* Subtítulo */}
          <p className="max-w-2xl text-pretty text-base sm:text-lg font-light leading-relaxed text-[#F8F9FA]/80">
            Desde 1997 sendo referência em películas de alta performance e estética automotiva. Proporcionamos bloqueio térmico extremo, proteção UV e acabamento de precisão com corte computadorizado.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto">
            <a
              href="#technologies"
              className="group relative inline-flex h-14 items-center justify-center bg-[#85d63b] text-[#0A0A0A] px-8 sm:px-10 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#F8F9FA] shadow-lg shadow-[#85d63b]/15 hover:shadow-[#85d63b]/25"
            >
              Agendar Aplicação
              <svg 
                className="w-4 h-4 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a 
              href="#simulador"
              className="inline-flex h-14 items-center justify-center bg-transparent border border-white/20 text-[#F8F9FA] px-8 sm:px-10 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:border-[#85d63b] hover:text-[#85d63b] hover:bg-white/5"
            >
              Simulador de Películas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}