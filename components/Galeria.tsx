import Image from "next/image";

const fotos = [
  { src: "/galeria/barber-interno.webp", alt: "Ambiente da Virtus Barbearia" },
  { src: "/galeria/barber-interno2.webp", alt: "Interior da Virtus Barbearia" },
  { src: "/galeria/barber-durante-corte.webp", alt: "Corte em andamento" },
  { src: "/galeria/barber-corte-finalizado.webp", alt: "Resultado do corte" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="bg-virtus-purple-900/20 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-virtus-white mb-12">
          Nossa <span className="text-virtus-gold">Galeria</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fotos.map((foto) => (
            <div
              key={foto.src}
              className="relative aspect-square rounded-xl overflow-hidden border border-virtus-gold/30 group cursor-pointer"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}