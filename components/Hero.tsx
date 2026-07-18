import Image from "next/image";

export default function Hero() {
	const whatsappNumber = "5551997924077";
	const message = encodeURIComponent(
		"Olá! Gostaria de agendar um horário na Virtus Barbearia 💈",
	);

	return (
		<section className="relative min-h-screen w-full pt-20 md:pt-24 pb-4 md:pb-6 px-4 md:px-6 flex items-center overflow-hidden bg-virtus-black">
			<div className="absolute inset-0">
				<Image
					src="/galeria/barber-banner.png"
					alt="Virtus Barbearia"
					fill
					priority
					className="object-cover object-center opacity-38 md:opacity-30"
          sizes="100vw"
				/>
			</div>

			<div className="absolute inset-0 bg-linear-to-br from-virtus-black via-virtus-black/85 to-virtus-black/40 md:from-virtus-black md:via-virtus-black/80 md:to-virtus-black/35" />

			<div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
				<div className="flex flex-col items-start text-left">
					<h1 className="font-serif text-5xl md:text-6xl tracking-wide text-virtus-gold">
						VIRTUS
					</h1>

					<p className="font-sans-ui text-sm md:text-base tracking-[0.4em] text-virtus-gold uppercase mt-1">
						Barbearia
					</p>

					<p className="mt-5 max-w-md text-virtus-gray-400 font-sans-ui text-sm md:text-base leading-relaxed">
						Cortes modernos, barba e atendimento premium em Novo Hamburgo.
					</p>

					<a
						href={`https://wa.me/${whatsappNumber}?text=${message}`}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-7 inline-flex items-center gap-2 bg-virtus-gold text-virtus-black font-sans-ui font-semibold px-8 py-3 rounded-md border border-virtus-gold hover:bg-virtus-black hover:text-virtus-gold transition-colors cursor-pointer"
					>
						Agendar no WhatsApp
					</a>
				</div>

				<div className="relative w-full">
					<div className="relative w-full max-w-85 mx-auto md:hidden aspect-10/19 rounded-2xl overflow-hidden border border-virtus-gold/30 shadow-2xl">
						<Image
							src="/galeria/barber-mockup-mobile.png"
							alt="Virtus Barbearia versão mobile"
							fill
							priority
							className="object-cover object-center"
						/>
					</div>

					<div className="hidden md:block relative w-full aspect-16/11 rounded-2xl overflow-hidden border border-virtus-gold/30 shadow-2xl">
						<Image
							src="/galeria/barber-mockup.png"
							alt="Virtus Barbearia versão desktop"
							fill
							priority
							className="object-cover object-center"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
