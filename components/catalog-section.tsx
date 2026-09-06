'use client'

import { Reveal } from '@/components/reveal'
import { TrackedWhatsappLink } from '@/components/tracked-whatsapp-link'
import { whatsappLinkWithMessage } from '@/lib/site-config'

const CATALOG_SERVICES = [
  {
    id: 'frotas',
    title: 'Plotagem de Frotas',
    description:
      'Plotagem de frotas da criação à execução, nossa plotagem transforma frotas em verdadeiros outdoors sobre rodas.',
    image: '/servicos/frotas.webp',
  },
  {
    id: 'adesivos',
    title: 'Adesivos',
    description:
      'Os adesivos em recorte são ideais para vitrines, veículos, paredes e superfícies lisas.',
    image: '/servicos/adesivos.webp',
  },
  {
    id: 'adesivos-motos',
    title: 'Adesivos Motos',
    description:
      'Os adesivos holográficos dão personalidade única à sua moto, refletindo diferentes cores conforme a luz.',
    image: '/servicos/adesivos_moto.webp',
  },
  {
    id: 'limpeza',
    title: 'Limpeza Detalhada',
    description:
      'Limpeza detalhada automotiva: cuidado máximo! Remove sujeiras difíceis, protege os acabamentos e deixa seu veículo com aparência de novo.',
    image: '/servicos/limpeza.webp',
  },
  {
    id: 'polimento',
    title: 'Polimento',
    description:
      'Polimento automotivo: brilho e renovação! Remove arranhões leves, elimina manchas e recupera o brilho original da pintura do seu carro.',
    image: '/servicos/polimento.webp',
  },
  {
    id: 'vitrificacao',
    title: 'Vitrificação',
    description:
      'Vitrificação automotiva: proteção e brilho duradouro! Cria uma camada resistente contra riscos, realça o brilho e facilita a limpeza do veículo.',
    image: '/servicos/vitrificacao.webp',
  },
  {
    id: 'insulfilm',
    title: 'Insulfilm',
    description:
      'Insulfilm automotivo: proteção, conforto e estilo! Reduz o calor, bloqueia raios UV, aumenta a privacidade e valoriza o seu carro.',
    image: '/servicos/insulfilm.webp',
  },
  {
    id: 'envelopamento',
    title: 'Envelopamento',
    description:
      'Envelopamento automotivo: proteção e personalização! Protege a pintura contra riscos, renova o visual do carro e permite personalização com estilo e praticidade.',
    image: '/servicos/envelopamento.webp',
  },
  {
    id: 'ppf',
    title: 'PPF',
    description:
      'PPF automotivo: proteção invisível! Preserva a pintura contra riscos, arranhões e sujeiras, mantendo o brilho original do veículo por mais tempo.',
    image: '/servicos/ppf_catalogo.webp',
  },
]

export function Catalog() {
  return (
    <section id="servicos" className="scroll-mt-20 border-t border-white/10 bg-[#0a0a0a] py-20 text-[#F8F9FA]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        
        {/* Cabeçalho */}
        <Reveal className="mb-16 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#85d63b]">
            Catálogo Oficial
          </span>
          <h2 className="mt-2 font-serif text-3xl font-black uppercase sm:text-5xl text-[#F8F9FA]">
            Nossos Serviços
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#85d63b]" />
        </Reveal>

        {/* Grid de Cards (3 colunas no desktop) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATALOG_SERVICES.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 40}>
              <div className="group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 text-center backdrop-blur-md transition-all duration-500 hover:border-[#85d63b]/50 hover:bg-white/[0.04] hover:shadow-[0_0_35px_rgba(133,214,59,0.12)]">
                
                <div className="flex flex-col items-center w-full">
                  {/* Moldura Circular com Brilho Néon */}
                  <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-[#85d63b] bg-black/60 p-1 shadow-[0_0_20px_rgba(133,214,59,0.2)] transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=400'
                      }}
                    />
                  </div>

                  {/* Título do Serviço */}
                  <h3 className="mb-3 font-serif text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#85d63b] transition-colors">
                    {item.title}
                  </h3>

                  {/* Descrição com Tipografia Suave */}
                  <p className="mb-6 text-xs font-light leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>

                {/* Botão de Ação Estilo Outline Néon */}
                <TrackedWhatsappLink
                  href={whatsappLinkWithMessage(
                    `Olá! Gostaria de um orçamento para o serviço de ${item.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  location="catalog"
                  product={item.id}
                  className="w-full rounded-lg border border-[#85d63b]/40 bg-[#85d63b]/10 py-3 px-4 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-[#85d63b] transition-all duration-300 hover:bg-[#85d63b] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(133,214,59,0.3)]"
                >
                  Orçar no WhatsApp
                </TrackedWhatsappLink>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}