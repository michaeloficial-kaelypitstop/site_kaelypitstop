'use client'

import { MapPin, Phone, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { siteConfig, whatsappLinkWithMessage } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function ContactSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const checkStatus = () => {
      const now = new Date()
      const h = now.getHours()
      const m = now.getMinutes()
      const day = now.getDay() // 0=Domingo, 6=Sábado

      let open = false

      // Regra Comercial:
      // Seg a Sex: 09:00 às 17:00
      if (day >= 1 && day <= 5) {
        open = h >= 9 && h < 17
      }
      // Sábado: 09:00 às 12:30
      else if (day === 6) {
        open = (h >= 9 && h < 12) || (h === 12 && m <= 30)
      }
      // Domingo: Fechado
      else if (day === 0) {
        open = false
      }

      setIsOpen(open)
    }

    checkStatus()
    const interval = setInterval(checkStatus, 60000) // Atualiza a cada minuto
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="contato"
      className= "scroll-mt-20 sm:scroll-mt-25 mx-auto max-w-[1440px] border-t border-border px-5 py-24 md:px-20 md:py-32"
    >
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
        <Reveal className="flex flex-col justify-between">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Inicie a
              <br />
              Transformação
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-foreground/65">
              Agende sua sessão exclusiva para discutirmos as necessidades específicas do seu
              veículo. Nossa equipe está pronta para orientar a escolha perfeita.
            </p>

            {/* Status Dinâmico */}
            <div className="mt-8">
              {mounted ? (
                <div className="flex w-fit items-center gap-2 border border-border bg-card px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      isOpen
                        ? "animate-pulse bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                        : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                    )}
                  />
                  <span className={isOpen ? "text-emerald-500" : "text-red-500"}>
                    {isOpen ? "Aberto para Agendamentos" : "Fechado no momento"}
                  </span>
                </div>
              ) : (
                <div className="flex w-fit items-center gap-2 border border-border bg-card px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                  <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                  <span className="text-muted-foreground">Verificando...</span>
                </div>
              )}
            </div>

            <div className="mt-10 space-y-8">
              {/* Localização */}
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Localização
                  </p>
                  <p className="text-sm font-light text-foreground/85">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </p>
                </div>
              </div>

              {/* Contato Direto */}
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Contato Direto
                  </p>
                  <p className="text-sm font-light text-foreground/85">{siteConfig.phoneDisplay}</p>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                <div className="w-full max-w-xs">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    Horário de Funcionamento
                  </p>
                  <ul className="flex flex-col gap-1 text-sm font-light text-foreground/85">
                    <li className="flex justify-between">
                      <span>Segunda — Sexta</span>
                      <span className="font-medium text-foreground">09:00 — 17:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sábado</span>
                      <span className="font-medium text-foreground">09:00 — 12:30</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Domingo</span>
                      <span className="text-foreground/40">Fechado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100} className="flex flex-col gap-6">
          <div className="relative h-104 overflow-hidden border border-border p-1">
            <iframe
              title="Mapa da localização da Kaély"
              src={siteConfig.mapEmbedSrc}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
            />
          </div>
          <a
            href={whatsappLinkWithMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine flex h-16 w-full items-center justify-center gap-3 bg-primary text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground transition-transform duration-500 hover:scale-[1.02]"
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Solicitar via WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}