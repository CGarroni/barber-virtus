const servicos = [
  { nome: "Corte" },
  { nome: "Barba" },
  { nome: "Combo Corte + Barba" },
  { nome: "Sobrancelha" },
  { nome: "Degradê" },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-virtus-purple-900/20 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-virtus-white mb-12">
          Nossos <span className="text-virtus-gold">Serviços</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicos.map((s) => (
            <div
              key={s.nome}
              className="border border-virtus-gold/30 rounded-xl py-8 px-4 hover:border-virtus-gold transition-colors"
            >
              <p className="font-serif text-lg text-virtus-white">{s.nome}</p>
              <p className="text-virtus-gray-400 text-sm mt-2 font-sans-ui">
                Consulte valores
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}