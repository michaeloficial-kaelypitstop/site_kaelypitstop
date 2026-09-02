import Image from 'next/image'
import { siteConfig, whatsappLinkWithMessage } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#080808]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 py-16 md:grid-cols-12 md:px-20 md:py-20">
        <div className="flex flex-col justify-between md:col-span-4">
          <Image
            src="/kaeli_pitstoplogo_rbg.png"
            alt="Logo da loja"
            width={144}
            height={144}
            className="h-20 w-auto object-contain md:h-26"
          />
          <p className="mt-10 text-sm text-foreground/50 md:mt-auto">
            &copy; {new Date().getFullYear()} KAÉLY. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:col-span-8 md:flex-row md:justify-end md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40">
              Redes Sociais
            </span>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase text-primary transition-colors duration-300 hover:text-foreground"
              >
              Instagram
            </a>
            <a
              href={whatsappLinkWithMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase text-primary transition-colors duration-300 hover:text-foreground"
            >
              WhatsApp
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40">
              Endereço
            </span>
            <p className="text-sm text-foreground/70">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
