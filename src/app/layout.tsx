import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';

import { siteConfig } from '@/lib/config/site';

import './globals.css';

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-[var(--color-bg)] text-[var(--color-ink)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
