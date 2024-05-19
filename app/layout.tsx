import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import "./globals.css";
import 'tailwindcss/tailwind.css';
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blooming Agri Africa",
  description: "Blooming Agri Africa est une entreprise opérant dans le secteur agricole, notamment dans des projets intégrés.",
  icons: {
    icon: '/icon.ico',
  },
  referrer: 'origin-when-cross-origin',
  keywords: [
    'matériels agricoles', 'matériel agricole', 'agri', 'africa', 'blooming', 'tn', 'tunisie', 'tunisia', 
    'credit agricole sud rhone alpes', 'mon compte credit agricole', 'credit agricole nord de france', 
    'credit agricole finistere', 'agriculture', 'innovation agricole', 'projets agricoles', 
    'technologies agricoles', 'équipement agricole', 'développement rural', 'soutien agricole', 'agrobusiness'
  ],
  openGraph: {
    title: "Blooming Agri Africa",
    description: "Blooming Agri Africa est une entreprise opérant dans le secteur agricole, notamment dans des projets intégrés.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.bloomingagriafrica.tn',
    siteName: 'Blooming Agri Africa',
    images: {
      url: 'https://bloomingagriafrica.tn/_next/image?url=%2Fimages%2Flogob.png&w=96&q=75',
      width: 1200,
      height: 630,
      alt: 'Blooming Agri Africa'
    },
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="hMJ3jQBkhXTDoKPzIDDdcvB1m8eyWR_CzQXngeuXkwY" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NLRZMS9Z');
          `
        }} />
        {/* End Google Tag Manager */}

        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RC93E8QS53"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RC93E8QS53');
          `
        }} />
        {/* End Google Tag (gtag.js) */}
      </Head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NLRZMS9Z"
            height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}