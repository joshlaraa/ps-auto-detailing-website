/** Placeholder imagery used for landing page service tiles. */
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
      <circle cx="700" cy="700" r="92" fill="rgba(255,255,255,0.2)" />
      <path d="M650 700h100M700 650v100" stroke="white" stroke-width="12" stroke-linecap="round" />
    </svg>`,
  )}`;

export const landingMedia = {
  heroCar: "/jp_auto_detail_hero.png",
  heroCarMobile: "/jp_auto_detail_hero_mobile.png",
  sectionWheels: "/jp_auto_detail_section_wheels.png",
  sectionClaybar: "/jp_auto_detail_section_claybar.png",
  sectionClaybarMobile: "/jp_auto_detail_section_claybar_mobile.png",
  processWater:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBNONwLwQi-um5oMQITC9cIA1WcAIvJsKZVHq5XLQGehgGQEhXdiw8dIyo-ZyvQKuin0OyFJsFtqLgRa7_X7vLTHe5vml1G37xAfyVYvmsPyAt45nvcVt81knS0st90i5-1GYslgmrS3fhFHAELppa4u2UqZUGChyxzJklDCKAapv5dkpiXwVmeiH3NMwQhLYOBYXeNSgpAIefOmGFXPj9JOAlP0cOFdW5I4nBEVcT8rfsfx861VjyryZWCx3VglKrEN7LBH9tjMBc",
  anatomySdCounty: "/jp_auto_detail_section_sd.png",
  anatomySdCountyMobile: "/jp_auto_detail_section_sd_mobile.png",
  anatomyCoastal: "/jp_auto_detail_section_coastal.png",
  anatomyCoastalMobile: "/jp_auto_detail_section_coastal_mobile.png",
  anatomyInland: "/jp_auto_detail_section_inland.png",
  anatomyInlandMobile: "/jp_auto_detail_section_inland_mobile.png",
  anatomyOutskirts: "/jp_auto_detail_section_outskirts.png",
  anatomyOutskirtsMobile: "/jp_auto_detail_section_outskirts_mobile.png",
  bookingHeadlights:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDbZ9uDabygtlVX7aCMJhetqO_xLw0fal5uhmZkfx5xJT7G9ltAp3udiVvAYOez4kLpjO2kuy2Z8CZbinlQVsLcpgi3q7ggDqbx9qsSyFcMdMBL52WdVWI5EM7KgsOoLH5l7pR79pcUpEcsY4lIMxzWPgSdyFs2mDaY7QwCW0ctqsiTDDTGaj4QFtlTfBjk7oD2xokPaeS1CRsAiY6NuDVs0vk7L0FqoTB86G7Lk4PIFaDryD8CZtvgE8ZXI8e-b7SEBIgiLnT0SaU",
  galleryBefore:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ-AY7k77ilos2NT5Qs2li5CP_Dj7UQs4svMKjnHUGibxeZl6BfmS_tnoXQrRL2wmEuNBgHM_tv4ceS2xqWSxnFjWnXX_pP8TlPElxpuv76b3BYJddrno-10ZTZnxrTiQKpiXrOX_PFFegtbPt197BXtgQasCS_aUPIYJ4ri4CF60_S2_fWyAHUjlO2MCSWXQjXuZYkLGk0MsL-xYL9cuXrZC9tVbicSQ8c6rKKr2m5F8a6rI0tNHqxPJCKllGPA6Sn8gdj32GBEk",
  galleryAfter:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5V-SbgDErK-PgW7I38jOkkLuHxEwtKunELu0xHCpFROPY8o9RJEn2wnuNj89hS9eVz21F1gb-EgcFtSrO9B6SBZwtO1vR07XtmaW-hv2-Pbzhak29lSbMtt6SHUqA4oM-_Jyws4jhAZG-wMIMY0gNxonUsFr42axLFJGiqP2CpEjjJcucUnwvyMg5jIV1GJuvbrdgagV05pHRBvJm-s4WhChGrr_upnjFTSoyC8P7DKXfYs48nEeW4ORiiBkzrxn3qNXOORCHsMw",
  /** Home page services grid tiles */
  homeServiceCeramic: createPlaceholder("Ceramic Coating", "#172554", "#2563eb"),
  homeServicePaint: createPlaceholder("Paint Correction", "#1f2937", "#1d4ed8"),
  homeServiceInterior: createPlaceholder("Interior Detailing", "#0f172a", "#0369a1"),
  homeServiceExterior: createPlaceholder("Exterior Detailing", "#1e293b", "#3b82f6"),
  homeServiceMaintenance: createPlaceholder(
    "Maintenance Detail",
    "#0f172a",
    "#1e40af",
  ),
  homeServiceBook:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCpGQASNBL7rrElp6-TKQ7deghKCxfmX70Cicf9XbmL1eSwGUOMj7IzqNslhIabhkN9NP-eBqOBmbJ-Flx4BIm7L958nL5a4NBH0Fjcm__3j3Sb2uPiASFTJ8cMS4-pfu7YLFoahYz7w3q5eQYzxyDEF46-n_79vOxrP61u__TaiBW-mKEwH2dABVu1HGLqfxm-Uc_2FFWfILF4cve97J4tRSQaWgswSfLftBVpG1MQM_8F1Ug3mkfFTGlx4Zvfk1IZtWRQvL48QPY",
} as const;
