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
	metadataBase: new URL("https://barber-virtus.vercel.app/"),
	title: "Virtus Barbearia | Estilo, cuidado e presença em Novo Hamburgo",
	description:
		"Na Virtus Barbearia você encontra cortes modernos, degradê, barba e atendimento de qualidade em um ambiente confortável e estiloso. Mais que um corte, uma experiência pensada para elevar sua autoestima e seu estilo.",
	keywords: [
		"Virtus Barbearia",
		"barbearia em Novo Hamburgo",
		"barbearia Novo Hamburgo RS",
		"cortes modernos Novo Hamburgo",
		"degradê Novo Hamburgo",
		"barba Novo Hamburgo",
		"barbearia premium",
		"agendamento barbearia WhatsApp",
	],
	openGraph: {
		title: "Virtus Barbearia | Estilo, cuidado e presença em Novo Hamburgo",
		description:
			"Cortes modernos, degradê, barba e atendimento de qualidade em Novo Hamburgo - RS.",
		url: "https://barber-virtus.vercel.app/",
		siteName: "Virtus Barbearia",
		locale: "pt_BR",
		type: "website",
		images: [
			{
				url: "/galeria/barber-mockup-desktop.png",
				width: 1200,
				height: 630,
				alt: "Virtus Barbearia em Novo Hamburgo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Virtus Barbearia | Estilo, cuidado e presença em Novo Hamburgo",
		description:
			"Cortes modernos, degradê, barba e atendimento de qualidade em Novo Hamburgo - RS.",
		images: ["/galeria/barber-mockup-desktop.png"],
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
