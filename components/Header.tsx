"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const links = [
	{ label: "Sobre", href: "#sobre" },
	{ label: "Serviços", href: "#servicos" },
	{ label: "Galeria", href: "#galeria" },
	{ label: "Localização", href: "#localizacao" },
];

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement | null>(null);
	const panelRef = useRef<HTMLDivElement | null>(null);

	const whatsappNumber = "5551997924077";
	const message = encodeURIComponent(
		"Olá! Gostaria de agendar um horário na Virtus Barbearia 💈",
	);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setMenuOpen(false);
		};

		if (menuOpen) {
			document.addEventListener("keydown", onKeyDown);
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	useEffect(() => {
		if (!menuOpen) menuButtonRef.current?.focus();
	}, [menuOpen]);

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-virtus-black/90 backdrop-blur-md border-b border-virtus-gold/10 shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
				<a
					href="#"
					className="flex items-center gap-3 cursor-pointer group"
					aria-label="Ir para o topo"
				>
					<div className="relative w-8 h-8 md:w-10 md:h-10">
						<Image
							src="/galeria/logo-navalha.png"
							alt="Logo Virtus Barbearia"
							fill
							className="object-contain"
							priority
						/>
					</div>

					<div className="hidden sm:flex flex-col leading-none">
						<span className="font-serif text-virtus-white text-lg tracking-[0.12em] group-hover:text-virtus-gold transition-colors">
							VIRTUS
						</span>
						<span className="font-sans-ui text-[10px] tracking-[0.35em] uppercase text-virtus-gold/80">
							Barbearia
						</span>
					</div>
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

				<div className="hidden md:block">
					<a
						href={`https://wa.me/${whatsappNumber}?text=${message}`}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center bg-virtus-gold text-virtus-black font-sans-ui font-semibold text-sm px-5 py-2.5 rounded-md border border-virtus-gold hover:bg-virtus-black hover:text-virtus-gold transition-colors cursor-pointer shadow-md"
					>
						Agendar agora
					</a>
				</div>

				<button
					ref={menuButtonRef}
					type="button"
					className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-virtus-gold/30 text-virtus-white hover:text-virtus-gold hover:border-virtus-gold transition-colors"
					aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
					aria-expanded={menuOpen}
					aria-controls="mobile-menu"
					aria-haspopup="true"
					onClick={() => setMenuOpen((v) => !v)}
				>
					{menuOpen ? (
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							className="w-6 h-6"
						>
							<path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
						</svg>
					) : (
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							className="w-6 h-6"
						>
							<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
						</svg>
					)}
				</button>
			</div>

			<div
				className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
					menuOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
				aria-hidden={!menuOpen}
			>
				<button
					type="button"
					aria-label="Fechar menu"
					className="absolute inset-0 bg-black/70"
					onClick={() => setMenuOpen(false)}
				/>

				<div
					id="mobile-menu"
					ref={panelRef}
					className={`absolute right-0 top-0 h-full w-[82vw] max-w-sm bg-virtus-black border-l border-virtus-gold/15 shadow-2xl transition-transform duration-300 ${
						menuOpen ? "translate-x-0" : "translate-x-full"
					}`}
					role="dialog"
					aria-modal="true"
					aria-label="Menu de navegação"
				>
					<div className="flex items-center justify-between px-5 py-5 border-b border-virtus-gold/10">
						<span className="font-serif text-virtus-white text-lg tracking-[0.12em]">
							VIRTUS
						</span>
						<button
							type="button"
							className="inline-flex items-center justify-center w-10 h-10 rounded-md text-virtus-white hover:text-virtus-gold transition-colors"
							aria-label="Fechar menu"
							onClick={() => setMenuOpen(false)}
						>
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="w-6 h-6"
							>
								<path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
							</svg>
						</button>
					</div>

					<div className="px-5 py-6 flex flex-col gap-4">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMenuOpen(false)}
								className="text-virtus-white text-base font-sans-ui font-medium px-3 py-3 rounded-md hover:text-virtus-gold hover:bg-virtus-gold/5 transition-colors"
							>
								{link.label}
							</a>
						))}

						<a
							href={`https://wa.me/${whatsappNumber}?text=${message}`}
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setMenuOpen(false)}
							className="mt-4 inline-flex items-center justify-center bg-virtus-gold text-virtus-black font-sans-ui font-semibold text-sm px-5 py-3 rounded-md border border-virtus-gold hover:bg-virtus-black hover:text-virtus-gold transition-colors cursor-pointer"
						>
							Agendar agora
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
