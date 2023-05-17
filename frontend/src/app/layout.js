import './globals.css'
import React from 'react'
import { Providers } from './provider'

export const metadata = {
  title: 'Lawatty',
  description: 'Helps you manage better your time',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}