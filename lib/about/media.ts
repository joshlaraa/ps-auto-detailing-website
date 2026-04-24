/** Placeholder imagery for About page sections while final photos are prepared. */
const createPlaceholder = (label: string, start: string, end: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${start}" />
          <stop offset="100%" stop-color="${end}" />
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#bg)" />
      <rect x="140" y="140" width="1320" height="720" rx="26" fill="rgba(15,23,42,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="4" />
      <circle cx="800" cy="455" r="84" fill="rgba(255,255,255,0.2)" />
      <path d="M760 455h80M800 415v80" stroke="white" stroke-width="12" stroke-linecap="round" />
      <text x="800" y="680" fill="white" text-anchor="middle" font-family="Arial, sans-serif" font-size="56" font-weight="700">${label}</text>
      <text x="800" y="750" fill="rgba(255,255,255,0.9)" text-anchor="middle" font-family="Arial, sans-serif" font-size="28">Placeholder image</text>
    </svg>`,
  )}`;

export const aboutPageMedia = {
  clinicalReflection: createPlaceholder(
    "Mobile Wash Process",
    "#0f172a",
    "#1d4ed8",
  ),
  labInterior: createPlaceholder("Detail Setup Scene", "#1f2937", "#2563eb"),
  labBrushes: createPlaceholder("Tools And Products", "#334155", "#3b82f6"),
  teamLead: createPlaceholder("Team Member 1", "#1e293b", "#0ea5e9"),
  teamChemist: createPlaceholder("Team Member 2", "#1e293b", "#0284c7"),
  teamPolisher: createPlaceholder("Team Member 3", "#1e293b", "#0369a1"),
  teamQC: createPlaceholder("Team Member 4", "#1e293b", "#075985"),
  ctaHeadlight: createPlaceholder("Book Mobile Detail", "#0f172a", "#1d4ed8"),
} as const;
