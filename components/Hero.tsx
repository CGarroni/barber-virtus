import Image from "next/image";

export default function Hero() {
	const whatsappNumber = "5551997924077";
	const message = encodeURIComponent(
		"Olá! Gostaria de agendar um horário na Virtus Barbearia 💈",
	);

	return (
		<section className="relative min-h-screen w-full pt-24 pb-6 px-6 flex items-center bg-virtus-black overflow-hidden">
			<div className="absolute inset-0 opacity-20">
				<Image
					src="/galeria/barber-banner.png"
					alt="Virtus Barbearia"
					fill
					priority
					className="object-cover"
				/>
			</div>
			<div className="absolute inset-0 bg-linear-to-r from-virtus-black via-virtus-black/80 to-transparent" />

			<div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				<div className="flex flex-col items-start text-left">
					<h1 className="font-serif text-5xl md:text-6xl tracking-wide text-virtus-gold">
						VIRTUS
					</h1>
					<p className="font-sans-ui text-sm md:text-base tracking-[0.4em] text-virtus-gold uppercase mt-1">
						Barbearia
					</p>

					<p className="mt-6 max-w-md text-virtus-gray-400 font-sans-ui text-sm md:text-base">
						Mais que um corte, uma experiência pensada para elevar sua
						autoestima e seu estilo.
					</p>

					<a
						href={`https://wa.me/${whatsappNumber}?text=${message}`}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-8 inline-flex items-center gap-2 bg-virtus-gold text-virtus-black font-sans-ui font-semibold px-8 py-3 rounded-md border border-virtus-gold hover:bg-transparent hover:text-virtus-gold transition-colors cursor-pointer"
					>
						Agendar no WhatsApp
					</a>
				</div>

				<div className="relative w-full aspect-4/5 md:aspect-square rounded-2xl overflow-hidden border border-virtus-gold/30">
					<Image
						src="/galeria/barber-mockup.png"
						alt="Virtus Barbearia banner"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
