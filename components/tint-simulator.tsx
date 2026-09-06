'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { whatsappLinkWithMessage } from '@/lib/site-config'
import { TrackedWhatsappLink } from '@/components/tracked-whatsapp-link'
import { cn } from '@/lib/utils'

// Mapeamento das películas (Aparência externa por tom)
const TINT_LEVELS = [
  { 
    id: 'none', 
    label: 'Sem Película', 
    hint: 'Original', 
    externalImage: '/cardemostration/BMW_M4_nofilm.jpeg',
  },
  { 
    id: 'g50', 
    label: 'G50', 
    hint: 'Claro', 
    externalImage: '/cardemostration/BMW_M4_G50.jpeg',
  },
  { 
    id: 'g35', 
    label: 'G35', 
    hint: 'Médio', 
    externalImage: '/cardemostration/BMW_M4_G35.jpeg',
  },
  { 
    id: 'g20', 
    label: 'G20', 
    hint: 'Escuro', 
    externalImage: '/cardemostration/BMW_M4_G20.jpeg',
  },
  { 
    id: 'g5', 
    label: 'G5', 
    hint: 'Ultra Escuro', 
    externalImage: '/cardemostration/BMW_M4_G5.jpeg',
  },
] as const

export function TintSimulator() {
  const [selectedTint, setSelectedTint] = useState<(typeof TINT_LEVELS)[number]>(TINT_LEVELS[0])

  const getWhatsAppMessage = () => {
    if (selectedTint.id === 'none') {
      return 'Olá! Gostaria de um orçamento para aplicação de película no meu veículo.'
    }
    return `Olá! Testei o simulador no site e vi que a película ${selectedTint.label} (${selectedTint.hint}) é a ideal para mim. Gostaria de um orçamento!`
  }

  return (
    <section
      id="simulador"
      className="scroll-mt-20 sm:scroll-mt-25 border-t border-border bg-[#0a0a0a] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        <Reveal className="mb-16">
          <h2 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
            Conforto &amp; Privacidade
          </h2>
          <div className="mt-6 h-1 w-24 bg-primary" />
          <p className="mt-6 max-w-2xl leading-relaxed text-foreground/65">
            Selecione a intensidade desejada abaixo para conferir a estética e o nível de privacidade do veículo de fora para dentro.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">

          {/* Exibição da Imagem */}
          <Reveal className="lg:col-span-8" delayMs={80}>
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-border select-none shadow-[0_0_40px_rgba(212,175,55,0.05)]">
                <img
                  key={selectedTint.id}
                  src={selectedTint.externalImage}
                  alt={`Veículo com ${selectedTint.label}`}
                  className="h-full w-full object-cover transition-all duration-500 ease-in-out"
                  draggable={false}
                />

                {/* Badge indicadora de Tonalidade */}
                <div className="absolute left-4 top-4 border border-primary bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md shadow-sm">
                  {selectedTint.label} &middot; {selectedTint.hint}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Seleção de Tonalidades e Botão de Ação */}
          <Reveal className="flex flex-col gap-8 lg:col-span-4" delayMs={160}>
            <div className="flex flex-col gap-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                Tonalidade da Película
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3" role="radiogroup" aria-label="Intensidade da película">
                {TINT_LEVELS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={selectedTint.id === option.id}
                    onClick={() => setSelectedTint(option)}
                    className={cn(
                      'border p-4 text-center text-sm transition-all duration-300',
                      selectedTint.id === option.id
                        ? 'border-primary text-primary bg-primary/5 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        : 'border-border text-foreground/80 hover:border-primary/60 hover:text-primary',
                    )}
                  >
                    <span className="block font-semibold">{option.label}</span>
                    <span className="block text-xs text-foreground/50 mt-1">{option.hint}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-2 border-t border-border pt-6">
            <TrackedWhatsappLink
              href={whatsappLinkWithMessage(getWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              location="simulator"
              product={selectedTint.id}
              className="btn-shine flex h-14 w-full items-center justify-center bg-primary text-center text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground transition-transform duration-500 hover:scale-[1.02]"
            >
              Solicitar Orçamento
            </TrackedWhatsappLink>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}