import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Virtus Barbearia | Estilo, cuidado e presença em Novo Hamburgo",
  description:
    "Barbearia em Novo Hamburgo com atendimento premium, cortes modernos, barba e agendamento via WhatsApp.",
  keywords: [
    "barbearia em Novo Hamburgo",
    "barbearia premium",
    "corte masculino",
    "barba",
    "agendamento barbearia",
    "Virtus Barbearia",
  ],
  openGraph: {
    title: "Virtus Barbearia",
    description:
      "Estilo, cuidado e presença em Novo Hamburgo. Agende seu horário via WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-virtus-black text-virtus-white">
        {children}
      </body>
    </html>
  );
}