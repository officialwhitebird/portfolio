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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'officialwhitebird — Useful systems, built with intent',
    description:
      'Automation, decision support, and AI orchestration projects built in Japan.',
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
