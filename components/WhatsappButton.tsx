export default function WhatsappButton() {
  const whatsappNumber = "5551997924077";
  const message = encodeURIComponent(
    "Olá! Gostaria de agendar um horário na Virtus Barbearia 💈"
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-virtus-gold text-virtus-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Agendar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm0 18.06a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3.09.81.83-3.02-.19-.31a8.15 8.15 0 1 1 6.89 3.83z"/>
      </svg>
    </a>
  );
}