import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'officialwhitebird — Useful systems, built with intent',
  description:
    'Automation, decision support, and AI orchestration projects built in Japan.',
  keywords: ['automation', 'AI', 'developer tools', 'open source'],
  authors: [{ name: 'officialwhitebird' }],
  openGraph: {
    title: 'officialwhitebird',
    description: 'Useful systems, built with intent.',
    type: 'website',
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
