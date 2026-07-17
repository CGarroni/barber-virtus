const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Profissionais",
    subtitle: "Especializados",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path
          d="M6 4h9a2 2 0 0 1 2 2v6H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4 12v6a2 2 0 0 0 2 2h1v2M17 12v8M17 12h3v3a2 2 0 0 1-2 2h-1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Ambiente",
    subtitle: "Premium",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 13h2v2H7zM11 13h2v2h-2zM15 13h2v2h-2zM7 17h2v2H7zM11 17h2v2h-2z" />
      </svg>
    ),
    title: "Agendamento",
    subtitle: "Fácil e Rápido",
  },
];

export default function Highlights() {
  return (
    <section className="bg-virtus-black border-y border-virtus-gold/20 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 sm:divide-x sm:divide-virtus-gold/20">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 px-6 first:pl-0 last:pr-0"
          >
            <span className="text-virtus-gold">{item.icon}</span>
            <div className="text-left">
              <p className="text-virtus-white font-sans-ui font-semibold text-sm leading-tight">
                {item.title}
              </p>
              <p className="text-virtus-gray-400 font-sans-ui text-sm leading-tight">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}