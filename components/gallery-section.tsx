import { Reveal } from '@/components/reveal'

const GALLERY = [
  {
    label: 'Sedã Executivo',
    span: 'md:col-span-2 md:row-span-2',
    img: '/placeholder.svg?height=900&width=900',
  },
  {
    label: 'SUV Premium',
    span: 'md:col-span-1 md:row-span-1',
    img: '/placeholder.svg?height=600&width=600',
  },
  {
    label: 'Performance Coupé',
    span: 'md:col-span-1 md:row-span-1',
    img: '/placeholder.svg?height=600&width=600',
  },
  {
    label: 'Utilitário Off-road',
    span: 'md:col-span-2 md:row-span-1',
    img: '/placeholder.svg?height=600&width=1200',
  },
]

export function GallerySection() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-20 sm:scroll-mt-25 border-t border-border bg-[#0c0c0c] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        <Reveal className="mb-16">
          <h2 className="font-serif text-4xl font-semibold text-foreground md:text-5xl">
            Portfólio de Excelência
          </h2>
          <div className="mt-6 h-1 w-24 bg-primary" />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 md:h-[760px]">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.label}
              delayMs={i * 100}
              className={`relative aspect-[4/3] overflow-hidden border border-border md:aspect-auto ${item.span}`}
            >
              <div className="group relative h-full w-full">
                <img
                  src={item.img || '/placeholder.svg'}
                  alt={`${item.label} com película aplicada`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute bottom-4 left-4 translate-y-2 border border-foreground/40 bg-background/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground opacity-80 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:border-primary group-hover:text-primary group-hover:opacity-100">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
