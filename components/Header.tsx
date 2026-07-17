"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
	{ label: "Sobre", href: "#sobre" },
	{ label: "Serviços", href: "#servicos" },
	{ label: "Galeria", href: "#galeria" },
	{ label: "Localização", href: "#localizacao" },
];

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const whatsappNumber = "5551997924077";
	const message = encodeURIComponent(
		"Olá! Gostaria de agendar um horário na Virtus Barbearia 💈",
	);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
				scrolled
					? "bg-virtus-black/95 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
				<a href="#" className="flex items-center gap-2 cursor-pointer">
					<Image
						src="/galeria/logo-navalha.png"
						alt="Logo Virtus Barbearia"
						width={40}
						height={40}
						className="object-contain"
					/>
					<span className="font-serif text-virtus-white text-lg tracking-wide hidden sm:block">
						VIRTUS
					</span>
				</a>

				<nav className="hidden md:flex items-center gap-8">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-virtus-white text-sm font-sans-ui tracking-wide hover:text-virtus-gold transition-colors cursor-pointer"
						>
							{link.label}
						</a>
					))}
				</nav>

				<a
					href={`https://wa.me/${whatsappNumber}?text=${message}`}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-virtus-gold text-virtus-black font-sans-ui font-semibold text-sm px-5 py-2.5 rounded-md border border-virtus-gold hover:bg-virtus-black hover:text-virtus-gold transition-colors cursor-pointer"
				>
					Agendar agora
				</a>
			</div>
		</header>
	);
}
