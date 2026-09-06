'use client'

import { Check, Gift, ShieldCheck, AlertCircle, PhoneCallIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappLinkWithMessage } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { TrackedWhatsappLink } from '@/components/tracked-whatsapp-link'

const TECHNOLOGIES = [

  {
    id: 'nano-ceramica',
    name: 'Linha Nano Cerâmica',
    warranty: 'Vitalícia',
    durability: 'Alta Performance',
    irRejection: '85%',
    tserRejection: '79%',
    uvProtection: '100%',
    priceWithoutWindshield: { original: '1.590,00', promo: '880,00' },
    priceWithWindshield: { original: '1.790,00', promo: '985,00' },
    description: 'Composição com 2 camadas de cerâmica pura. Bloqueia o calor extremo sem escurecer a visão de dentro para fora.',
    features: [
      'Garantia Vitalícia',
      '2 Camadas de Cerâmica na composição',
      'Rejeição Infravermelho (IR) de 85%',
      'Proteção UVA e UVB total (100%)',
      'Visibilidade cristalina noturna',
      'Corte 100% computadorizado',
    ],
    highlight: true,
    bonus: 'GANHE Cristalização de Para-brisa',
  },
  {
    id: 'nano-carbon',
    name: 'Linha Nano Carbon',
    warranty: '7 Anos',
    durability: '15 Anos',
    irRejection: '78%',
    tserRejection: '73%',
    uvProtection: '99%',
    priceWithoutWindshield: { original: '990,00', promo: '610,00' },
    priceWithWindshield: { original: '1.100,00', promo: '725,00' },
    description: 'Pigmentação com Nano Carbono que não desbota e não fica roxa. Alta rejeição de calor mantendo nitidez perfeita.',
    features: [
      'Garantia de 7 anos (15 anos durabilidade)',
      'Rejeição Infravermelho (IR) de 78%',
      'Energia Solar Rejeitada (TSER) de 73%',
      'Não desbota nem altera a cor',
      'Corte 100% computadorizado',
    ],
    highlight: false,
    bonus: null,
  },
  {
    id: 'profissional',
    name: 'Linha Profissional',
    warranty: '3 Anos',
    durability: '5 Anos',
    irRejection: '13%',
    tserRejection: '34%',
    uvProtection: '99%',
    priceWithoutWindshield: { original: '410,00', promo: '305,00' },
    priceWithWindshield: { original: '520,00', promo: '360,00' },
    description: 'Excelente opção para quem busca controle de claridade, privacidade interna e proteção UV com excelente custo-benefício.',
    features: [
      'Garantia oficial de 3 anos',
      'Proteção contra raios UV (99%)',
      'Redução de ofuscamento solar',
      'Corte 100% computadorizado',
    ],
    highlight: false,
    bonus: null,
  }, 
]

export function TechnologiesSection() {
  return (
    <section 
      id="technologies" 
      className="scroll-mt-24 sm:scroll-mt-28 border-t border-white/10 bg-[#0A0A0A] py-24 text-[#F8F9FA]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Cabeçalho */}
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#85d63b]">
              Tecnologias de Película
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Tabela de Películas &amp; Valores
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-[#F8F9FA]/70">
              Escolha a tecnologia ideal para o seu veículo. Todos os nossos modelos acompanham corte computadorizado sob medida.
            </p>
          </div>
        </Reveal>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TECHNOLOGIES.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 100} className="h-full">
              <div
                className={cn(
                  'relative flex h-full flex-col justify-between border p-6 sm:p-8 transition-all duration-300 hover:translate-y-[-2px]',
                  item.highlight
                    ? 'border-[#85d63b] bg-white/[0.06] shadow-[0_0_35px_rgba(133,214,59,0.12)]'
                    : 'border-white/10 bg-white/5 hover:border-white/30'
                )}
              >
                {/* Badge Superior para Card Recomendado */}
                {item.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#85d63b] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] shadow-lg shadow-[#85d63b]/20">
                    Mais Vendida
                  </div>
                )}

                <div>
                  {/* Cabeçalho do Card */}
                  <div className="border-b border-white/10 pb-5 mb-5">
                    <h3 className="text-lg lg:text-xl font-black uppercase tracking-wider text-[#F8F9FA] whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.name}
                    </h3>
                    
                    {/* Badge de Garantia */}
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1.5 rounded border border-[#85d63b]/30 bg-[#85d63b]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#85d63b]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Garantia {item.warranty}
                      </span>
                    </div>

                    {/* Brinde com Ícone de Presente */}
                    {item.bonus && (
                      <div className="mt-4 flex items-center gap-2.5 rounded border border-[#85d63b]/40 bg-[#85d63b]/15 p-2.5 text-xs font-bold uppercase text-[#85d63b]">
                        <Gift className="h-4 w-4 shrink-0 text-[#85d63b]" />
                        <span>{item.bonus}</span>
                      </div>
                    )}
                  </div>

                  {/* Bloco de Preço Formatado */}
                  <div className="mb-6 flex flex-col gap-2 rounded bg-black/60 p-4 border border-white/5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#F8F9FA]/70 font-medium">Sem Para-brisa:</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[11px] line-through text-[#F8F9FA]/40">R$ {item.priceWithoutWindshield.original}</span>
                        <span className="text-lg font-black text-[#85d63b]">
                          R$ {item.priceWithoutWindshield.promo} <span className="text-[9px] font-normal text-[#F8F9FA]/50">PIX</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs border-t border-white/10 pt-2.5 mt-0.5">
                      <span className="text-[#F8F9FA]/70 font-medium">Com Para-brisa:</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[11px] line-through text-[#F8F9FA]/40">R$ {item.priceWithWindshield.original}</span>
                        <span className="text-lg font-black text-[#85d63b]">
                          R$ {item.priceWithWindshield.promo} <span className="text-[9px] font-normal text-[#F8F9FA]/50">PIX</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Ficha Técnica Rápida */}
                  <div className="grid grid-cols-3 gap-2 text-center mb-6 rounded bg-white/5 p-3 border border-white/5">
                    <div>
                      <span className="block text-[9px] font-bold uppercase text-[#F8F9FA]/50">Rejeição IR</span>
                      <span className="text-xs font-black text-[#85d63b]">{item.irRejection}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase text-[#F8F9FA]/50">Total Solar</span>
                      <span className="text-xs font-black text-[#F8F9FA]">{item.tserRejection}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold uppercase text-[#F8F9FA]/50">Proteção UV</span>
                      <span className="text-xs font-black text-[#F8F9FA]">{item.uvProtection}</span>
                    </div>
                  </div>

                  {/* Lista de Benefícios */}
                  <ul className="space-y-2.5 mb-8">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-xs text-[#F8F9FA]/80">
                        <Check className="w-4 h-4 text-[#85d63b] mr-2.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botão de Solicitação via WhatsApp */}
                <TrackedWhatsappLink
                  href={whatsappLinkWithMessage(
                    `Olá! Gostaria de agendar a aplicação da película ${item.name} (Garantia ${item.warranty}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  location="technology"
                  product={item.id}
                  className={cn(
                    'mt-auto flex h-12 w-full items-center justify-center text-center text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300',
                    item.highlight
                      ? 'bg-[#85d63b] text-[#0A0A0A] hover:bg-[#F8F9FA]'
                      : 'border border-white/20 text-[#F8F9FA] hover:border-[#85d63b] hover:text-[#85d63b] hover:bg-white/5'
                  )}
                    >
                  Agendar Aplicação
                </TrackedWhatsappLink>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Rodapé Informativo */}
        <Reveal delayMs={300}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded border border-white/10 bg-white/5 p-4 text-xs text-[#F8F9FA]/70">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="h-4 w-4 text-[#85d63b] shrink-0" />
              <span><strong>Remoção de Insulfilm antigo:</strong> Acréscimo de R$ 60,00 em qualquer modelo escolhido.</span>
            </div>
            <div className="flex items-center gap-2.5">
              <PhoneCallIcon className="h-4 w-4 text-[#85d63b] shrink-0" />
              <span><strong>Carros Grandes / SUVs:</strong> Valores sob consulta via WhatsApp.</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}