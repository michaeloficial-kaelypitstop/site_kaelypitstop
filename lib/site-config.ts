export const siteConfig = {
  name: 'Kaely - Seu Pitstop',
  tagline: 'Precisão em privacidade automotiva.',
  phoneDisplay: '(41) 8526-3041',
  whatsappNumber: '554185263041',
  whatsappUrl: 'https://wa.me/554185263041',
  whatsappMessage: 'Olá! Vim pelo site e gostaria de agendar uma avaliação para meu veículo.',
  instagramUrl: 'https://www.instagram.com/kaely_seupitstop/',
  address: {
    line1: 'R. José Ferreira de Barros, 445 ',
    line2: 'Fanny, Curitiba - PR, 80030-280',
  },
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5519.053530264686!2d-49.2727118114267!3d-25.485709132574293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfd35bdd00aa3%3A0xa4a88fab0a479056!2sKa%C3%A9ly%20Seu%20Pit%20Stop!5e0!3m2!1spt-BR!2sbr!4v1787615648323!5m2!1spt-BR!2sbr',
} as const

export function whatsappLinkWithMessage(message: string = siteConfig.whatsappMessage) {
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`
}
