'use client';

import { RecoilRoot } from 'recoil'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body>{children}</body>
      </RecoilRoot>
    </html>
  )
}
