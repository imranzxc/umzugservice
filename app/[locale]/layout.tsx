import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'AlpenMove - Professionelle Umzugsservices im Kanton Luzern',
    template: '%s | AlpenMove'
  },
  description: 'Stressfreie Umzüge mit AlpenMove - Ihr vertrauensvoller Partner für Privat- und Firmenumzüge im Kanton Luzern. Kostenlose Beratung und transparente Preise.',
  keywords: ['Umzug', 'Déménagement', 'Moving', 'Trasloco', 'Luzern', 'Lucerne', 'Schweiz', 'Switzerland'],
  authors: [{ name: 'AlpenMove' }],
  creator: 'AlpenMove',
  publisher: 'AlpenMove',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alpenmove.ch'),
  alternates: {
    canonical: '/',
    languages: {
      'de': '/de',
      'en': '/en',
      'fr': '/fr',
      'it': '/it',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://alpenmove.ch',
    title: 'AlpenMove - Professionelle Umzugsservices im Kanton Luzern',
    description: 'Stressfreie Umzüge mit AlpenMove - Ihr vertrauensvoller Partner für Privat- und Firmenumzüge im Kanton Luzern.',
    siteName: 'AlpenMove',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AlpenMove - Professionelle Umzugsservices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlpenMove - Professionelle Umzugsservices im Kanton Luzern',
    description: 'Stressfreie Umzüge mit AlpenMove - Ihr vertrauensvoller Partner für Privat- und Firmenumzüge im Kanton Luzern.',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 