import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sofreu um golpe e perdeu mais de R$4.000,00?",
  description: "Golpe do PIX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
