'use client'

import { ShieldCheck, Zap, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const DIFFERENTIALS = [
  {
    icon: Target,
    title: 'Alta Precisão',
    description: 'Moldes digitais desenhados exatamente para as especificações do seu veículo.',
  },
  {
    icon: Zap,
    title: 'Mais Rapidez',
    description: 'Processo otimizado e ágil, reduzindo o tempo de espera na aplicação.',
  },
  {
    icon: ShieldCheck,
    title: 'Perfeito Ajuste',
    description: 'Zero risco de arranhões no vidro ou borrachas. O corte é feito 100% antes da aplicação.',
  },
]

export function TechSection() {
  return (
    <section id="compcut" className="border-t border-white/10 bg-[#0A0A0A] py-20 text-[#F8F9FA]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#85d63b]">
              Tecnologia Exclusiva
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-black uppercase tracking-tight">
              O Corte é <span className="text-[#85d63b]">Computadorizado</span>
            </h2>
            <p className="mt-4 text-base text-[#F8F9FA]/70">
              Precisão milimétrica e encaixe perfeito. Garantimos a máxima proteção estética sem o uso de estiletes sobre o vidro do seu carro.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {DIFFERENTIALS.map((item, index) => {
    const Icon = item.icon
    return (
      <Reveal key={item.title} delayMs={index * 100} className="h-full">
        <div className="flex h-full flex-col items-start border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#85d63b]/50">
          <div className="flex h-12 w-12 items-center justify-center bg-[#85d63b]/10 text-[#85d63b] mb-6 shrink-0">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold uppercase tracking-wider text-[#F8F9FA] mb-2">
            {item.title}
          </h3>
          <p className="text-sm font-light leading-relaxed text-[#F8F9FA]/70">
            {item.description}
          </p>
        </div>
      </Reveal>
    )
  })}
</div>
      </div>
    </section>
  )
}