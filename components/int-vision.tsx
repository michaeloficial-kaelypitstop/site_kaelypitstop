'use client'

import { Reveal } from '@/components/reveal'

const COMPARISON = [
  {
    name: 'Profissional',
    badge: '⚠️ Visão Interna Comum',
    badgeColor: 'border-white/20 bg-white/5 text-white/70',
    image: '/int_vision/int_pro.jpeg',
    highlight: false,
  },
  {
    name: 'Nano Carbon',
    badge: ' Boa Visibilidade',
    badgeColor: 'border-white/20 bg-white/5 text-white/90',
    image: '/int_vision/int_carbon.jpeg',
    highlight: false,
  },
  {
    name: 'Nano Cerâmica',
    badge: ' 100% Cristalina à Noite',
    badgeColor: 'border-[#85d63b] bg-[#85d63b] text-[#0a0a0a] font-extrabold',
    image: '/int_vision/int_ceramic.jpeg',
    highlight: true,
  },
]

export function IntVision() {
  return (
    <section id="visibilidade" className="scroll-mt-20 border-t border-white/10 bg-[#0A0A0A] py-16 text-[#F8F9FA]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        
        {/* Título Curto e Direto */}
        <Reveal className="mb-10 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#85d63b]">
            Visão Noturna de Dentro para Fora
          </span>
          <h2 className="mt-1 font-serif text-2xl font-black uppercase sm:text-4xl">
            Escolha pela Visibilidade
          </h2>
        </Reveal>

        {/* 3 Cards com Foco 100% na Imagem e no Status */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {COMPARISON.map((item, index) => (
            <Reveal key={item.name} delayMs={index * 50}>
              <div
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 transition-all ${
                  item.highlight
                    ? 'border-[#85d63b] bg-[#85d63b]/10 shadow-[0_0_30px_rgba(133,214,59,0.15)] md:-translate-y-2'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <div>
                  {/* Foto da Visão Interna */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
                    <img
                      src={item.image}
                      alt={`Visibilidade da película ${item.name}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600'
                      }}
                    />
                  </div>

                  {/* Nome da Linha */}
                  <h3 className="mt-4 font-serif text-xl font-bold text-white text-center">
                    {item.name}
                  </h3>

                  {/* Tag de Status Visual (Sem texto explicativo) */}
                  <div className="mt-3 flex justify-center">
                    <span className={`inline-block rounded-full border px-3 py-1 text-[11px] uppercase tracking-wider ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Botão de Redirecionamento Interno para a Tabela de Preços */}
                <a
                href="#technologies"
                className={'mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#85d63b] text-[#0a0a0a] hover:bg-white shadow-lg py-3 text-center text-xs font-bold uppercase tracking-wider transition-all'}
                >
                  Quero {item.name}
                </a>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}