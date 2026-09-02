import { ContactSection } from '@/components/contact-section'
import { TechnologiesSection } from '@/components/technologies-section'
{/*import { GallerySection } from '@/components/gallery-section' */}
import { HeroSection } from '@/components/hero-section' 
import { IntVision } from '@/components/int-vision'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TintSimulator } from '@/components/tint-simulator'
import { WhatsappFloatButton } from '@/components/whatsapp-float-button'
import { TechSection } from '@/components/tech-section'
import { Catalog } from '@/components/catalog-section'

export default function Page() {
  return (
    <main className="overflow-x-hidden bg-background">
      <SiteHeader/>
      <HeroSection/>
      <Catalog/>
      <TintSimulator/>
      <IntVision/> 
      <TechSection/>
      <TechnologiesSection/>
     {/* <GallerySection /> */} 
      <ContactSection/>
      <SiteFooter/>
      <WhatsappFloatButton />
    </main>
  )
}
