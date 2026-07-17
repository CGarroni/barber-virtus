export default function RazorLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 40 L38 14 C41 11 46 11 49 14 C52 17 52 22 49 25 L22 50 C18 54 12 54 9 50 C6 47 6 43 8 40 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line x1="12" y1="46" x2="44" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="12" cy="46" r="2.5" fill="currentColor" />
    </svg>
  );
}