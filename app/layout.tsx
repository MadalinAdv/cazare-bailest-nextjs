"use client";
import Head from 'next/head';
import { Inter } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <Head>
        <title>Cazare Premium în Băilești - Camere Confortabile de la 199 RON</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Cazare confortabilă în Băilești. Camere spațioase cu paturi king size, acces gratuit la Wi-Fi și multe alte facilități. Rezervă acum la prețuri avantajoase!" />
        <meta name="keywords" content="cazare băilești, camere băilești, hotel băilești, pensiune băilești" />
        <meta name="author" content="Madalin" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Cazare Premium în Băilești - Camere Confortabile" />
        <meta property="og:description" content="Camere spațioase și curate, perfecte pentru un sejur relaxant în Băilești. Rezervă acum la prețuri începând de la 159 RON/noapte." />
        <meta property="og:url" content="https://cazarebailesti.ro" />
        <meta property="og:image" content="assets/images/deluxe1.jpg" />

        {/* Favicon */}
        <link rel="icon" type="image/webp" href="assets/images/favicon.webp" />


        {/* Custom CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <body className={inter.className}>
        <header>
          <a href="/" className="logo">CAZARE<span>Băilești</span></a>
          {/* Conținutul header-ului */}
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
