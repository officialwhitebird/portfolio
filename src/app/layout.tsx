import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://officialwhitebird.github.io/portfolio/'),
  title: 'officialwhitebird — Useful systems, built with intent',
  description:
    'Automation, decision support, and AI orchestration projects built in Japan.',
  keywords: ['automation', 'AI', 'developer tools', 'open source'],
  authors: [{ name: 'officialwhitebird' }],
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'officialwhitebird — Useful systems, built with intent',
    description:
      'Automation, decision support, and AI orchestration projects built in Japan.',
    type: 'website',
    url: './',
    siteName: 'officialwhitebird portfolio',
    locale: 'ja_JP',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'officialwhitebird — Useful systems, built with intent. Automation, decision support, and AI orchestration.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'officialwhitebird — Useful systems, built with intent',
    description:
      'Automation, decision support, and AI orchestration projects built in Japan.',
    images: ['./og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
