/**
 * CostcoWatch SVG logo — implements all design improvements:
 * - Single clean ring (no double border)
 * - One emerald arrow, no gray minute hand
 * - Shopping cart properly sized at 12 o'clock
 * - No tagline — wordmark only
 * - Outfit font matches the UI typeface
 */
export function CostcoWatchLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CostcoWatch"
    >
      {/* ── Watch face ── */}
      {/* Single ring */}
      <circle cx="26" cy="26" r="22.5" stroke="white" strokeWidth="2" />

      {/* Hour tick marks (4 cardinal positions, excluding 12 o'clock where cart is) */}
      {/* 3 o'clock */}
      <line x1="46.5" y1="26" x2="44" y2="26" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      {/* 6 o'clock */}
      <line x1="26" y1="46.5" x2="26" y2="44" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      {/* 9 o'clock */}
      <line x1="5.5" y1="26" x2="8" y2="26" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* Shopping cart at 12 o'clock — deliberate and sized properly */}
      {/* Body */}
      <rect x="21.5" y="6.5" width="9" height="6" rx="1" stroke="white" strokeWidth="1.3" />
      {/* Handle */}
      <path d="M19.5 6.5 L21.5 6.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      {/* Wheels */}
      <circle cx="23" cy="14" r="1.1" fill="white" />
      <circle cx="29" cy="14" r="1.1" fill="white" />

      {/* Single emerald arrow — bold, no gray second hand */}
      {/* Tail (slight counter-balance behind pivot) */}
      <line
        x1="26" y1="26"
        x2="16" y2="16"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Main arrow shaft */}
      <line
        x1="26" y1="26"
        x2="38.5" y2="38.5"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M38.5 38.5 L33 38 L38 33 Z"
        fill="#10b981"
        stroke="#10b981"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      {/* Pivot jewel */}
      <circle cx="26" cy="26" r="3" fill="#10b981" />
      <circle cx="26" cy="26" r="1.5" fill="white" fillOpacity="0.4" />

      {/* ── Wordmark ── */}
      <text
        x="58"
        y="21"
        fontFamily="'Outfit', 'Inter', sans-serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="-0.3"
        fill="white"
      >
        Costco
      </text>
      <text
        x="58"
        y="40"
        fontFamily="'Outfit', 'Inter', sans-serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="-0.3"
        fill="#10b981"
      >
        Watch
      </text>
    </svg>
  )
}
