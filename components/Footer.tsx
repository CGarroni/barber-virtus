export default function Footer() {
  const whatsappNumber = "5551997924077";

  return (
    <footer className="bg-virtus-black border-t border-virtus-gold/20 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <h3 className="font-serif text-2xl text-virtus-white">
          VIRTUS <span className="text-virtus-gold">BARBEARIA</span>
        </h3>

        <div className="font-sans-ui text-virtus-gray-400 text-sm space-y-1">
          <p>Terça a sexta: 09:00 - 19:30</p>
          <p>Sábado: 09:00 - 17:00</p>
          <p>Domingo e segunda: fechado</p>
        </div>

        <div className="flex gap-4">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-virtus-gold hover:text-virtus-white transition-colors font-sans-ui text-sm"
          >
            WhatsApp
          </a>
          <span className="text-virtus-gray-400">•</span>
          <a
            href="#"
            className="text-virtus-gray-400 font-sans-ui text-sm cursor-not-allowed"
            title="Em breve"
          >
            Instagram (em breve)
          </a>
        </div>

        <p className="text-virtus-gray-400 text-xs font-sans-ui mt-4">
          © 2026 Virtus Barbearia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}