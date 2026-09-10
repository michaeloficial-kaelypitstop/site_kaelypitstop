'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { whatsappLinkWithMessage } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#simulador', label: 'Simulador' },
  { href: '#technologies', label: 'Tecnologias' },
  /*{ href: '#portfolio', label: 'Portfólio' }, */
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500',
        menuOpen
          ? 'bg-background border-border'
          : scrolled
            ? 'bg-background/95 border-border backdrop-blur-xl shadow-md'
            : 'bg-transparent border-transparent'
      )}
    >
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-4 py-2 sm:px-8 lg:px-12 xl:px-20 lg:py-3.5">
        
        {/* Lado Esquerdo: Logo Ampliada no Mobile */}
        <a
          href="#herosection"
          className="relative z-50 flex flex-shrink-0 items-center transition-transform duration-300 hover:scale-105"
          onClick={(e) => {
            setMenuOpen(false)
            const el = document.getElementById('herosection')
            if (el) {
              e.preventDefault()
              el.scrollIntoView({ behavior: 'smooth' })
              window.history.pushState(null, '', '#herosection')
            }
          }}
        >
          <Image
            src="/kaeli_pitstoplogo_rbg.png"
            alt="Kaély Pitstop"
            width={320}
            height={100}
            className="h-28 w-auto object-contain sm:h-28 lg:h-36 xl:h-40"
            priority
          />
        </a>

        {/* Centro Desktop */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 xl:gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link-underline relative whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/90 transition-colors duration-500 hover:text-primary xl:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Lado Direito */}
        <div className="relative z-50 flex items-center justify-end">
          <a
            href="#technologies"
            className="btn-shine hidden h-10 items-center justify-center bg-primary px-5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-500 hover:scale-[1.02] lg:inline-flex xl:px-7 xl:text-xs"
          >
            Agendar Agora
          </a>

          {/* Botão Hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="group flex h-11 w-11 flex-col items-end justify-center gap-[6px] p-2 lg:hidden"
          >
            <span className={cn("h-[2px] bg-primary transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]", menuOpen ? "w-6 translate-y-[8px] rotate-45" : "w-6")} />
            <span className={cn("h-[2px] w-6 bg-primary transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]", menuOpen ? "translate-x-4 opacity-0" : "opacity-100")} />
            <span className={cn("h-[2px] bg-primary transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]", menuOpen ? "w-6 -translate-y-[8px] -rotate-45" : "w-6")} />
          </button>
        </div>
      </div>

      {/* ── Menu Drawer Mobile ── */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-40 flex h-[100dvh] w-full flex-col bg-background pt-[88px] sm:pt-[96px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0 delay-100',
        )}
      >
        <div className="flex flex-1 flex-col overflow-y-auto">
          <nav className="flex min-h-max flex-1 flex-col justify-center gap-6 px-8 py-10 sm:gap-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${(i + 1) * 70}ms` : '0ms' }}
                className={cn(
                  'group flex items-center font-serif text-3xl text-foreground transition-all duration-500 sm:text-4xl',
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0',
                )}
              >
                <span className="transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:text-primary group-active:translate-x-4 group-active:text-primary">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
          
          <div className={cn("mt-auto flex shrink-0 flex-col gap-6 border-t border-border p-8 pb-12 transition-all delay-300 duration-700 sm:pb-16", menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">Contato</p>
              <p className="text-sm font-light text-foreground">(41) 8526-3041</p>
            </div>
            <a
              href={whatsappLinkWithMessage()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-shine flex h-14 w-full items-center justify-center bg-primary text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            >
              Agendar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}