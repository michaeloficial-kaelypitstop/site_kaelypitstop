'use client'

import { track } from '@vercel/analytics'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type TrackedWhatsappLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string
  product?: string
  children: ReactNode
}

export function TrackedWhatsappLink({
  location,
  product,
  onClick,
  children,
  ...props
}: TrackedWhatsappLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        track('whatsapp_click', {
          location,
          ...(product ? { product } : {}),
        })

        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}