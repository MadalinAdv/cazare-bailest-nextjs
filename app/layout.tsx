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
    <html lang="en">
      <Head>
        <title>Cazare Bailesti</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Cazare Bailesti" />
        <meta name="keywords" content="cazare bailesti, pensiune bailesti, hotel bailesti, bailesti, bailesti cazare, bailesti evenimente" />
        <meta name="author" content="Madalin" />

        {/* Custom CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Boxicons */}
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* LightGallery CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/css/lightgallery.min.css" />
      </Head>
      <body className={inter.className}>
        <header>
          <a href="/" className="logo">CAZARE<span>Bailesti</span></a>

          <ul className="navbar">
            {/* 
            <li><a href="#home"></a>Home</li>
            <li><a href="#room"></a>Rooms</li>
            <li><a href="#contact"></a>Contact</li> */}
          </ul>

          <div className="h-right">
            {/* <a href=""><i className="ri-instagram-fill"></i></a>
            <a href="" target="_blank"><i className="ri-facebook-fill"></i></a>
            <a href=""><i className="ri-bookmark-fill"></i></a> */}
          </div>
        </header>

        {children}

        <div className="wapp">
          <a aria-label="Chat on WhatsApp" href="https://wa.me/40722465185">
            <img alt="Chat on WhatsApp" src="/assets/images/wicon.png" />
          </a>
        </div>

        <div className="mail">
          <a href="mailto:office@cazarebailesti.ro">
            <img alt="Mail" src="/assets/images/mailu.png" />
          </a>
        </div>

        <footer>
          <div className="copyright">
            <p>
              copyright 2024 by <a href="https://madalindvp.ro/" target="_blank">madalin.dvp</a>
            </p>
          </div>
        </footer>

        {/* Custom JS and external scripts loaded asynchronously */}
        <Script src="https://third-party-script.js" strategy="lazyOnload" />
        <Script src="/assets/js/custom.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
