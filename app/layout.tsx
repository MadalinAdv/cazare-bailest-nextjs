
import Head from 'next/head';
import { Inter } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Cazare Premium în Băilești - Camere Confortabile de la 199 RON',
  description: 'Cazare confortabilă în Băilești. Camere spațioase cu paturi king size, acces gratuit la Wi-Fi și multe alte facilități. Rezervă acum la prețuri avantajoase!',
  keywords: [
    'cazare băilești',
    'camere băilești',
    'hotel băilești',
    'pensiune băilești',
    'cazare confortabilă',
    'băilești hotel'
  ],
  authors: [{ name: 'Mădălin D.', url: 'https://madalindvp.ro' }],
  openGraph: {
    description: 'Camere spațioase și curate, perfecte pentru un sejur relaxant în Băilești. Rezervă acum la prețuri începând de la 159 RON/noapte.',
    url: 'https://cazarebailesti.ro',
    siteName: 'Cazare Băilești',
    images: [
      {
        url: '/assets/images/deluxe1.jpg',
        width: 1200,
        height: 630,
        alt: 'Cazare Premium Băilești - Vedere din cameră',
      },
    ],
    locale: 'ro_RO',
  },
  icons: {
    icon: '/assets/images/favicon.png',
    shortcut: '/assets/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <Head>
        <title>{metadata.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="author" content={metadata.authors[0].name} />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.openGraph.siteName} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Favicon */}
        <link rel="icon" type="image/png" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />

        {/* Custom CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <body className={inter.className}>
        <header>
          <a href="/" className="logo">CAZARE<span>Băilești</span></a>
        </header>

        {children}

        <footer>
          <div className="copyright">
            <p>
              Copyright 2024 by <a href="https://madalindvp.ro/" target="_blank">madalin.dvp</a>
            </p>
          </div>
        </footer>

        {/* Scripturi externe */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
