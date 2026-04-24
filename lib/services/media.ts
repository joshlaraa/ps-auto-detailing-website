/** Placeholder imagery for Services page sections while final photos are prepared. */
const createPlaceholder = (label: string, start: string, end: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 1400" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${start}" />
          <stop offset="100%" stop-color="${end}" />
        </linearGradient>
      </defs>
      <rect width="1400" height="1400" fill="url(#bg)" />
      <rect x="120" y="120" width="1160" height="1160" rx="24" fill="rgba(15,23,42,0.16)" stroke="rgba(255,255,255,0.32)" stroke-width="4" />
      <circle cx="700" cy="620" r="92" fill="rgba(255,255,255,0.2)" />
      <path d="M650 620h100M700 570v100" stroke="white" stroke-width="12" stroke-linecap="round" />
      <text x="700" y="940" fill="white" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="700">${label}</text>
      <text x="700" y="1015" fill="rgba(255,255,255,0.9)" text-anchor="middle" font-family="Arial, sans-serif" font-size="32">Placeholder image</text>
    </svg>`,
  )}`;

export const servicesPageMedia = {
  petHair: createPlaceholder("Pet Hair Removal", "#0f172a", "#1d4ed8"),
  paintCorrection: createPlaceholder("Paint Correction", "#1e293b", "#2563eb"),
  engineBay: createPlaceholder("Engine Bay Surgery", "#111827", "#1e40af"),
  headlight: createPlaceholder("Headlight Restoration", "#1f2937", "#0ea5e9"),
  ceramicCoating: createPlaceholder("Ceramic Coating", "#172554", "#0284c7"),
  ozoneTreatment: createPlaceholder("Ozone Treatment", "#0f172a", "#0369a1"),
  ctaCarSilhouette: createPlaceholder("Book Your Next Detail", "#1e3a8a", "#1d4ed8"),
} as const;
