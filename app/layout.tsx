import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import Head from "next/head";
import "./globals.css";
import 'tailwindcss/tailwind.css';
import "../styles/global.css";
import { ReactNode } from "react";
import ClientLayout from "./client-layout"; // Import the client layout

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blooming Agri Africa",
  description: "Blooming Agri Africa est une entreprise opérant dans le secteur agricole, notamment dans des projets intégrés.",
  icons: {
    icon: '/icon.ico',
  },
  referrer: 'origin-when-cross-origin',
  keywords: [
    // French Keywords
    'matériels agricoles', 'matériel agricole', 'agri', 'afrique', 'blooming', 'tn', 'tunisie', 'tunisia',
    'crédit agricole sud rhône alpes', 'mon compte crédit agricole', 'crédit agricole nord de france',
    'crédit agricole finistère', 'agriculture', 'innovation agricole', 'projets agricoles',
    'technologies agricoles', 'équipement agricole', 'développement rural', 'soutien agricole', 'agrobusiness',
    'agriculture durable', 'agriculture biologique', 'technologie agricole', 'ferme intelligente',
    'gestion des cultures', 'santé des sols', 'agriculture tunisienne', 'Blooming Agri', 'Blooming Africa',

    // English Keywords
    'agricultural materials', 'agricultural equipment', 'agriculture', 'africa', 'blooming', 'tn', 'tunisia',
    'credit agricole south rhone alps', 'my credit agricole account', 'credit agricole north of france',
    'credit agricole finistere', 'agriculture', 'agricultural innovation', 'agricultural projects',
    'agricultural technologies', 'agricultural equipment', 'rural development', 'agricultural support', 'agrobusiness',
    'sustainable farming', 'organic farming', 'agricultural technology', 'smart farming',
    'crop management', 'soil health', 'Tunisian farming',

    // Arabic Keywords
    'معدات زراعية', 'معدات الفلاحة', 'الزراعة', 'افريقيا', 'ازدهار', 'تونس', 'البنك الزراعي', 'حسابي في البنك الزراعي',
    'الزراعة المستدامة', 'الزراعة العضوية', 'تكنولوجيا الزراعة', 'الزراعة الذكية', 'إدارة المحاصيل', 'صحة التربة',
    'مشاريع زراعية', 'تطوير ريفي', 'دعم زراعي', 'الأعمال الزراعية', 'التنمية الزراعية', 'حلول زراعية مبتكرة',
    'مشاريع زراعية في أفريقيا', 'الفلاحة التونسية', 'التقنيات الزراعية', 'البحث الزراعي', 'الشركات الزراعية الناشئة',
  ],
  openGraph: {
    title: "Blooming Agri Africa",
    description: "Blooming Agri Africa est une entreprise opérant dans le secteur agricole, notamment dans des projets intégrés.",
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.bloomingagriafrica.tn',
    siteName: 'Blooming Agri Africa',
    images: [
      {
        url: 'https://bloomingagriafrica.tn/_next/image?url=%2Fimages%2Flogob.png&w=96&q=75',
        width: 1200,
        height: 630,
        alt: 'Blooming Agri Africa',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="hMJ3jQBkhXTDoKPzIDDdcvB1m8eyWR_CzQXngeuXkwY" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Blooming Agri Africa",
          "url": "https://www.bloomingagriafrica.tn",
          "logo": "https://bloomingagriafrica.tn/_next/image?url=%2Fimages%2Flogob.png&w=96&q=75",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61557158474316",
          ],
          "description": "Blooming Agri Africa is a leading company in the agricultural sector, known for its integrated projects and innovative solutions."
        })}} />
      </Head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NLRZMS9Z" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <ClientLayout>{children}</ClientLayout>

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NLRZMS9Z');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </body>
    </html>
  );
}
