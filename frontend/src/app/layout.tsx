import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/Navbar';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'LinkedIn Mini - Connect & Share',
    template: '%s | LinkedIn Mini'
  },
  description: 'A professional networking platform where you can connect, share, and grow your professional network.',
  keywords: ['linkedin', 'professional', 'networking', 'social', 'career', 'business'],
  authors: [{ name: 'Shrestha Pandit' }],
  creator: 'Shrestha Pandit',
  publisher: 'LinkedIn Mini',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://linkedinmini.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://linkedinmini-787ml7f56-shresthapandits-projects.vercel.app',
    title: 'LinkedIn Mini - Connect & Share',
    description: 'A professional networking platform where you can connect, share, and grow your professional network.',
    siteName: 'LinkedIn Mini',
  },
  twitter: {
    card: 'summary',
    title: 'LinkedIn Mini - Connect & Share',
    description: 'A professional networking platform where you can connect, share, and grow your professional network.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0077b5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}