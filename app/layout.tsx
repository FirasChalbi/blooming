import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'tailwindcss/tailwind.css'
import "../styles/global.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blooming Agri Africa",
  description: "Blooming Agri Africa est une entreprise opérant dans le secteur agricole, notamment dans des projets intégrés.",
  icons: {
    icon: '/icon.ico',
  },
  referrer: 'origin-when-cross-origin',
  keywords: ['matériels agricoles', 'matériel agricole', 'agri', 'africa', 'blooming', 'tn', 'tunisie', 'tunisia', 'credit agricole sud rhone alpes',
    'mon compte credit agricole','credit agricole nord de france','credit agricole finistere'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


