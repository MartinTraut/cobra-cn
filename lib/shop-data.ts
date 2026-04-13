const B = "https://www.cobra-cn.de/wp-content/uploads"

export type ShopCategory =
  | "alle"
  | "corvette-c8"
  | "corvette-z06"
  | "camaro-gen5"
  | "camaro-gen6"
  | "cobra"
  | "motorenteile"

export interface Product {
  id: string
  name: string
  slug: string
  category: ShopCategory
  categoryLabel: string
  subcategory: string
  price: number
  priceMax?: number
  originalPrice?: number
  image: string
  images?: string[]
  description: string
  details: string[]
  inStock: boolean
  badge?: string
}

export const categoryLabels: Record<ShopCategory, string> = {
  alle: "Alle Produkte",
  "corvette-c8": "Corvette C8",
  "corvette-z06": "Corvette C8 Z06",
  "camaro-gen5": "Camaro Gen. 5",
  "camaro-gen6": "Camaro Gen. 6",
  cobra: "Cobra",
  motorenteile: "Motorenteile",
}

export const products: Product[] = [
  // ── CORVETTE C8 ────────────────────────────────────────────────────────
  {
    id: "kw-v3-c8",
    name: "KW Gewindefahrwerk V3 inox",
    slug: "kw-gewindefahrwerk-v3-inox",
    category: "corvette-c8",
    categoryLabel: "Corvette C8",
    subcategory: "Fahrwerk & Felgen",
    price: 3515,
    priceMax: 3918,
    image: `${B}/2026/03/250_001-200x200.jpg`,
    description:
      "Das KW Variante 3 inox Gewindefahrwerk bietet maximale Performance und Komfort für Ihre Corvette C8. Stufenlose Zug- und Druckstufendämpfung, Edelstahl-Technologie für höchste Korrosionsbeständigkeit.",
    details: [
      "Stufenlose Zug- und Druckstufendämpfung",
      "Edelstahl-Technologie (inox)",
      "Höhenverstellbar",
      "TÜV-Teilegutachten",
      "Made in Germany",
      "Passend für C8 Stingray & Z06",
    ],
    inStock: true,
  },
  {
    id: "titan-abgas-c8",
    name: "Titan Abgasanlage inkl. OPF Ersatzrohre",
    slug: "titan-abgasanlage-opf",
    category: "corvette-c8",
    categoryLabel: "Corvette C8",
    subcategory: "Abgasanlage",
    price: 5618,
    priceMax: 6596,
    image: `${B}/2026/02/IMG_0807-200x200.jpg`,
    description:
      "Hochleistungs-Titanabgasanlage für die Corvette C8 mit OPF-Ersatzrohren. Gewichtsersparnis von über 15 kg gegenüber Serie, aggressiver Sound und spürbare Leistungssteigerung.",
    details: [
      "Vollständig aus Titan gefertigt",
      "Über 15 kg Gewichtsersparnis",
      "Inkl. OPF Ersatzrohre",
      "Sportlicher Klang",
      "Leistungssteigerung +15 PS",
      "200-Zellen Sportkatalysatoren optional",
    ],
    inStock: true,
  },
  {
    id: "sichtfenster-c8",
    name: "Motor-Sichtfenster Heckabdeckung",
    slug: "motor-sichtfenster-heckabdeckung",
    category: "corvette-c8",
    categoryLabel: "Corvette C8",
    subcategory: "Exterieur",
    price: 799,
    priceMax: 1349,
    image: `${B}/2026/02/IMG_01891-200x200.jpg`,
    description:
      "Transparente Heckabdeckung für die Corvette C8 Convertible. Gibt den Blick auf den LT2-V8-Motor frei – ein absoluter Hingucker auf jedem Treffen.",
    details: [
      "Für Corvette C8 Convertible",
      "Polycarbonat in optischer Qualität",
      "UV-beständig und kratzfest",
      "Einfache Montage ohne Bohren",
      "Verschiedene Tönungen verfügbar",
    ],
    inStock: true,
  },
  {
    id: "c8-spoiler",
    name: "Carbon Heckspoiler High Wing",
    slug: "carbon-heckspoiler-high-wing",
    category: "corvette-c8",
    categoryLabel: "Corvette C8",
    subcategory: "Exterieur",
    price: 1890,
    image: `${B}/2021/12/endrohr6-300x225.jpg`,
    description:
      "Sichtcarbon-Heckspoiler im High-Wing-Design für die Corvette C8. Verbessert den Abtrieb an der Hinterachse und verleiht dem Fahrzeug eine aggressive Rennoptik.",
    details: [
      "Echtes Sichtcarbon (2x2 Twill)",
      "Erhöhter Abtrieb an der Hinterachse",
      "Klarlack UV-beschichtet",
      "Plug & Play Montage",
      "Gewicht: nur 2,8 kg",
    ],
    inStock: true,
  },
  {
    id: "c8-bremse",
    name: "Bremsscheiben-Set geschlitzt",
    slug: "bremsscheiben-set-geschlitzt",
    category: "corvette-c8",
    categoryLabel: "Corvette C8",
    subcategory: "Fahrwerk & Bremsen",
    price: 1290,
    image: `${B}/2021/12/endrohr5-300x225.jpg`,
    description:
      "Hochleistungs-Bremsscheiben-Set geschlitzt für die Corvette C8. Verbesserte Wärmeableitung und konstantere Bremsleistung unter extremer Belastung.",
    details: [
      "Geschlitzt für optimale Gasableitung",
      "Innenbelüftet",
      "Vorder- und Hinterachse im Set",
      "Für Track und Straße",
      "Kompatibel mit OEM-Bremsbelägen",
    ],
    inStock: true,
  },

  // ── CORVETTE C8 Z06 ───────────────────────────────────────────────────
  {
    id: "zr1-fronthaube",
    name: "Sichtcarbon ZR1 Fronthaube",
    slug: "sichtcarbon-zr1-fronthaube",
    category: "corvette-z06",
    categoryLabel: "Corvette C8 Z06",
    subcategory: "Exterieur",
    price: 2290,
    originalPrice: 2790,
    image: `${B}/2026/02/IMG_0599-200x200.jpg`,
    badge: "SALE",
    description:
      "Sichtcarbon-Fronthaube im ZR1-Design für die Corvette C8 Stingray und Z06. Extreme Gewichtsersparnis und unverwechselbare Optik in Premium-Sichtcarbon.",
    details: [
      "Echtes Sichtcarbon (2x2 Twill)",
      "ZR1-Design mit Lufteinlass",
      "Über 8 kg leichter als Original",
      "Passgenau wie OEM",
      "Klarlack UV-beschichtet",
      "Für Stingray und Z06",
    ],
    inStock: true,
  },
  {
    id: "carbon-schaltwippen",
    name: "Carbon Schaltwippen magnetisch",
    slug: "carbon-schaltwippen-magnetisch",
    category: "corvette-z06",
    categoryLabel: "Corvette C8 Z06",
    subcategory: "Interieur",
    price: 199,
    image: `${B}/2026/02/shift1-200x200.jpg`,
    description:
      "Magnetische Carbon-Schaltwippen (Paddle Shifter) für die Corvette C8. Verlängerte Schaltwippen für bessere Erreichbarkeit und sportliche Carbon-Optik.",
    details: [
      "Echtes Carbon",
      "Magnetische Befestigung",
      "Verlängert um 4 cm",
      "Einfache Montage ohne Werkzeug",
      "Für C8 Stingray, Z06, E-Ray",
    ],
    inStock: true,
  },
  {
    id: "z06-diffusor",
    name: "Carbon Heckdiffusor Z06-Style",
    slug: "carbon-heckdiffusor-z06",
    category: "corvette-z06",
    categoryLabel: "Corvette C8 Z06",
    subcategory: "Exterieur",
    price: 2490,
    image: `${B}/2022/12/2-2-300x225.jpg`,
    description:
      "Aggressiver Carbon-Heckdiffusor im Z06-Design. Verbessert die Aerodynamik und gibt der Corvette C8 einen unverwechselbaren Auftritt.",
    details: [
      "Sichtcarbon 2x2 Twill",
      "Z06-Originaldaten-Geometrie",
      "Verbesserte Aerodynamik",
      "Gewicht: 3,2 kg",
      "Klarlack UV-beschichtet",
    ],
    inStock: true,
  },

  // ── CAMARO GEN 5 ──────────────────────────────────────────────────────
  {
    id: "cam5-fahrwerk",
    name: "KW Gewindefahrwerk V2 Camaro",
    slug: "kw-gewindefahrwerk-v2-camaro-gen5",
    category: "camaro-gen5",
    categoryLabel: "Camaro Gen. 5",
    subcategory: "Fahrwerk",
    price: 2190,
    image: `${B}/2017/01/18-1024x768.jpg`,
    description:
      "KW Variante 2 Gewindefahrwerk für den Chevrolet Camaro Gen. 5. Stufenlose Dämpfereinstellung für Sport und Alltag.",
    details: [
      "Stufenlose Druckstufendämpfung",
      "Höhenverstellbar",
      "Edelstahl-Technologie",
      "TÜV-Gutachten",
      "Für Camaro 2010–2015",
    ],
    inStock: true,
  },
  {
    id: "cam5-nockenwelle",
    name: "Performance Nockenwelle Stage 2",
    slug: "performance-nockenwelle-stage2-gen5",
    category: "camaro-gen5",
    categoryLabel: "Camaro Gen. 5",
    subcategory: "Motortuning",
    price: 1490,
    image: `${B}/2017/01/11-1024x768.jpg`,
    description:
      "CN Racing Performance-Nockenwelle Stage 2 für den Camaro Gen. 5 LS3/L99-Motor. Spürbarer Leistungszuwachs im mittleren und oberen Drehzahlbereich.",
    details: [
      "Für LS3/L99 Motoren",
      "Leistungszuwachs ca. +40 PS",
      "+60 Nm Drehmoment",
      "Optimiert für 3.500–7.000 U/min",
      "Inkl. Ventilfedern",
    ],
    inStock: true,
  },
  {
    id: "cam5-headers",
    name: "Langkrümmer Edelstahl 1 7/8\"",
    slug: "langkruemmer-edelstahl-gen5",
    category: "camaro-gen5",
    categoryLabel: "Camaro Gen. 5",
    subcategory: "Abgasanlage",
    price: 1890,
    image: `${B}/2016/02/IMG_2152-1024x683.jpg`,
    description:
      "Hochleistungs-Langkrümmer aus Edelstahl für den Camaro Gen. 5. 1 7/8 Zoll Rohrquerschnitt für maximalen Durchfluss und Leistungszuwachs.",
    details: [
      "Edelstahl 304",
      '1 7/8" Primärrohr',
      '3" Kollektor',
      "Inkl. Dichtungen & Schrauben",
      "Leistung: +25 PS",
    ],
    inStock: true,
  },

  // ── CAMARO GEN 6 ──────────────────────────────────────────────────────
  {
    id: "cam6-kompressor",
    name: "Kompressor-Kit LT1 Stage 1",
    slug: "kompressor-kit-lt1-stage1",
    category: "camaro-gen6",
    categoryLabel: "Camaro Gen. 6",
    subcategory: "Motortuning",
    price: 7990,
    image: `${B}/2016/12/IMG_0015.jpg`,
    description:
      "Komplettes Kompressor-Kit für den Camaro Gen. 6 LT1-Motor. Steigert die Leistung auf über 650 PS bei voller Alltagstauglichkeit.",
    details: [
      "2,65L Roots-Kompressor",
      "Leistung: 650+ PS",
      "Inkl. Ladeluftkühler",
      "Inkl. Abstimmung auf CN Racing Prüfstand",
      "Für Camaro SS 2016+",
      "Straßenzulassung möglich",
    ],
    inStock: true,
  },
  {
    id: "cam6-clubsport",
    name: "Clubsport-Paket Camaro Gen. 6",
    slug: "clubsport-paket-camaro-gen6",
    category: "camaro-gen6",
    categoryLabel: "Camaro Gen. 6",
    subcategory: "Komplettumbau",
    price: 4990,
    image: `${B}/2017/01/9-1024x768.jpg`,
    description:
      "Komplettes Clubsport-Paket für den Camaro Gen. 6. Fahrwerk, Bremsen, Auspuff und Gewichtsoptimierung für maximale Track-Performance.",
    details: [
      "KW Clubsport Fahrwerk",
      "Bremsbeläge Track-optimiert",
      "Klappenauspuff-Steuerung",
      "Gewichtsoptimierung",
      "Chassis-Versteifung",
    ],
    inStock: true,
  },
  {
    id: "cam6-abgas",
    name: "Klappen-Abgasanlage Camaro SS",
    slug: "klappen-abgasanlage-camaro-ss",
    category: "camaro-gen6",
    categoryLabel: "Camaro Gen. 6",
    subcategory: "Abgasanlage",
    price: 2890,
    image: `${B}/2017/01/23-1024x768.jpg`,
    description:
      "Edelstahl-Klappen-Abgasanlage für den Camaro Gen. 6 SS. Variabel zwischen Komfort und Race-Sound – per Fernbedienung steuerbar.",
    details: [
      "Edelstahl 304 komplett",
      "Elektronische Klappensteuerung",
      "Fernbedienung inklusive",
      "4-Rohr Endrohrblende Carbon",
      "TÜV-Eintragung möglich",
    ],
    inStock: true,
  },

  // ── COBRA ──────────────────────────────────────────────────────────────
  {
    id: "cobra-oelkuehler",
    name: "Aluminium-Ölkühler Set CN-Cobra",
    slug: "aluminium-oelkuehler-cn-cobra",
    category: "cobra",
    categoryLabel: "Cobra",
    subcategory: "Kühlung",
    price: 890,
    image: `${B}/2016/02/WOI_9945.jpg`,
    description:
      "Hochleistungs-Aluminium-Ölkühler-Set für die CN-Cobra. Optimale Schmiertemperatur auch bei intensiver Belastung auf der Rennstrecke.",
    details: [
      "Vollaluminium-Konstruktion",
      "25 Reihen Kühlleistung",
      "Inkl. Thermostat 80°C",
      "Stahlflexleitungen inklusive",
      "Für alle CN-Cobra Modelle",
    ],
    inStock: true,
  },
  {
    id: "cobra-felgen",
    name: "BBS RS Felgensatz 3-teilig 18\"",
    slug: "bbs-rs-felgensatz-18",
    category: "cobra",
    categoryLabel: "Cobra",
    subcategory: "Felgen & Reifen",
    price: 4990,
    image: `${B}/2016/02/IMG_0583.jpg`,
    description:
      "Original BBS RS Rennsport-Felgensatz 3-teilig für die CN-Cobra. 9×18 vorne, 11,5×18 hinten – poliert und dreiteilig verschraubt.",
    details: [
      "BBS RS 3-teilig poliert",
      'VA: 9×18"',
      'HA: 11,5×18"',
      "Inkl. Michelin Pilot Sport 4S",
      "VA: 245/40 ZR18",
      "HA: 315/30 ZR18",
    ],
    inStock: true,
  },
  {
    id: "cobra-brembo",
    name: "Brembo Bremsanlage 6-Kolben Upgrade",
    slug: "brembo-bremsanlage-6kolben",
    category: "cobra",
    categoryLabel: "Cobra",
    subcategory: "Bremsen",
    price: 3490,
    image: `${B}/2016/07/1.jpg`,
    description:
      "Brembo 6-Kolben Festsattel-Upgrade für die CN-Cobra. 355mm geschlitzte und innenbelüftete Scheiben für kompromisslose Verzögerung.",
    details: [
      "Brembo 6-Kolben Festsattel VA",
      "355mm geschlitzt & innenbelüftet",
      "Stahlflexleitungen inklusive",
      "Racing-Bremsbeläge",
      "Rot oder schwarz eloxiert",
    ],
    inStock: true,
  },

  // ── MOTORENTEILE ───────────────────────────────────────────────────────
  {
    id: "ls3-komplett",
    name: "GM LS3 Komplettmotor 430 PS",
    slug: "gm-ls3-komplettmotor",
    category: "motorenteile",
    categoryLabel: "Motorenteile",
    subcategory: "Komplettmotoren",
    price: 12900,
    image: `${B}/2016/02/ELF_9925.jpg`,
    description:
      "Komplett aufgebauter GM LS3 V8-Motor mit 430 PS. Einbaufertig mit allen Anbauteilen, geprüft auf dem CN Racing Leistungsprüfstand.",
    details: [
      "6,2L V8 LS3",
      "430 PS / 575 Nm",
      "Komplett mit Anbauteilen",
      "Auf Prüfstand getestet",
      "12 Monate Garantie",
    ],
    inStock: true,
  },
  {
    id: "tremec-t56",
    name: "Tremec T-56 Magnum 6-Gang",
    slug: "tremec-t56-magnum",
    category: "motorenteile",
    categoryLabel: "Motorenteile",
    subcategory: "Getriebe",
    price: 4490,
    image: `${B}/2016/07/2.jpg`,
    description:
      "Tremec T-56 Magnum 6-Gang Schaltgetriebe. Verstärkte Ausführung für Motoren bis 900 Nm, ideal für Cobra- und Camaro-Umbauten.",
    details: [
      "6-Gang Schaltgetriebe",
      "Bis 900 Nm belastbar",
      "Verstärkte Synchronringe",
      "Inkl. Schaltgestänge",
      "Für GM LS/LT Motoren",
    ],
    inStock: true,
  },
  {
    id: "ls-nockenwelle-race",
    name: "Race Nockenwelle LS7-Spec",
    slug: "race-nockenwelle-ls7-spec",
    category: "motorenteile",
    categoryLabel: "Motorenteile",
    subcategory: "Motorkomponenten",
    price: 690,
    image: `${B}/2015/10/DSC_2567_2-e1444902295564.jpg`,
    description:
      "Rennsport-Nockenwelle nach LS7-Spezifikation. Aggressives Profil für maximale Leistung im oberen Drehzahlbereich.",
    details: [
      "LS7-Spezifikation",
      "Für LS1/LS2/LS3/LS6 Motoren",
      "Leistungszuwachs +50 PS",
      "Optimiert für 4.000–7.500 U/min",
      "Inkl. Ventilfedern-Kit empfohlen",
    ],
    inStock: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: ShopCategory): Product[] {
  if (category === "alle") return products
  return products.filter((p) => p.category === category)
}
