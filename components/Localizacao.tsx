export default function Localizacao() {
  const endereco = "R. Demétrio Ribeiro, 715 - Guarani, Novo Hamburgo - RS";
  const enderecoEncoded = encodeURIComponent(endereco);

  return (
    <section id="localizacao" className="bg-virtus-black py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-virtus-white mb-4">
          Onde <span className="text-virtus-gold">Estamos</span>
        </h2>
        <p className="text-virtus-gray-400 font-sans-ui mb-8">{endereco}</p>

        <a
          href={`https://www.google.com/maps?q=${enderecoEncoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl overflow-hidden border border-virtus-gold/30 mb-6 cursor-pointer hover:border-virtus-gold transition-colors"
        >
          <iframe
            title="Mapa da localização da Virtus Barbearia"
            src={`https://www.google.com/maps?q=${enderecoEncoded}&output=embed`}
            width="100%"
            height="280"
            style={{ border: 0, pointerEvents: "none" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://www.google.com/maps?q=${enderecoEncoded}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border bg-virtus-gold text-virtus-black font-sans-ui font-semibold px-6 py-3 rounded-md hover:bg-virtus-black hover:text-virtus-gold transition-colors cursor-pointer"
          >
            Abrir no Google Maps
          </a>
          <a
            href={`https://www.waze.com/ul?q=${enderecoEncoded}&navigate=yes`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-virtus-gold text-virtus-gold font-sans-ui font-semibold px-6 py-3 rounded-md hover:bg-virtus-gold hover:text-virtus-black transition-colors cursor-pointer"
          >
            Abrir no Waze
          </a>
        </div>
      </div>
    </section>
  );
}