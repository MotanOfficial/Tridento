import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/tridento/Header';
import Footer from '@/components/tridento/Footer';
import BackToTop from '@/components/tridento/BackToTop';

// Fonturi elegante pentru restaurant
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tridentosrl.com'),
  title: {
    default: 'Tridento | Restaurant Premium în Mangalia',
    template: '%s | Tridento',
  },
  description: 'Restaurantul Tridento vă oferă o experiență culinară de excepție în inima Mangaliei. Specialități marine, bucătărie românească și internațională într-un cadru elegant la malul mării.',
  keywords: ['restaurant', 'Mangalia', 'mare', 'fructe de mare', 'pește', 'bucătărie românească', 'restaurant litoral', 'mancare buna'],
  authors: [{ name: 'Tridento SRL' }],
  creator: 'Tridento SRL',
  publisher: 'Tridento SRL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://www.tridentosrl.com',
    siteName: 'Tridento Restaurant',
    title: 'Tridento | Restaurant Premium în Mangalia',
    description: 'Experiență culinară de excepție în inima Mangaliei. Specialități marine și bucătărie românească într-un cadru elegant.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Restaurant Tridento Mangalia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tridento | Restaurant Premium în Mangalia',
    description: 'Experiență culinară de excepție în inima Mangaliei.',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-navy-950 text-white antialiased`}>
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
