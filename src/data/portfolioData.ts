import { ServiceItem, ProjectItem } from "../types";

export const SERVICES: ServiceItem[] = [
  {
    id: "architectural",
    title: "Architectural Design",
    description: "Bespoke spatial design. Conceptualizing visionary structures that synthesize form, material, and context into ultimate architectural mastery.",
    details: [
      "Custom High-End Residential Blueprints",
      "Commercial & Boutique Hospitality Design",
      "Conceptual & Spatial Feasibility Analysis",
      "Urban Masterplanning & Structural Forms"
    ]
  },
  {
    id: "interior",
    title: "Interior & Exterior Design",
    description: "Bespoke interior and exterior styling. Curating hand-picked stones, rich wood panelling, lighting configurations, and metal highlights.",
    details: [
      "Luxury Finishes & Travertine/Wood Panels",
      "Kinetic Facades & Glass Envelope Systems",
      "Custom Interior Millwork & Custom Metal Details",
      "Lighting Schemes & Lux-Calculated Ambiance"
    ]
  },
  {
    id: "mep",
    title: "MEP Design",
    description: "Immersive building services. Advanced thermodynamic engineering, silent ducted systems, smart building systems, and luxury lighting grids.",
    details: [
      "High-Performance Geo-thermal & HVAC Systems",
      "Smart-Home Home Automation Protocols",
      "Luxury Architectural Illumination Routing",
      "Advanced Plumbing, Rainwater Harvesting & Filtration"
    ]
  },
  {
    id: "visualization",
    title: "3D Visualization",
    description: "High-resolution virtual model rendering. Capturing optical-accuracy reflections, spatial-volume simulations, and cinematic light path studies.",
    details: [
      "8K Static Multi-angle Cinematic Renders",
      "Virtual Reality Spatial Environments",
      "Cinematic Lighting Path & Reflection Studies",
      "3D Architectural Animation & Architectural Walkthroughs"
    ]
  },
  {
    id: "landscape",
    title: "Landscape Design",
    description: "Minimalist natural curation. Integrating sculpture gardens, silent water walls, low-profile infinity pools, and native biome landscape paths.",
    details: [
      "Minimalist Infinity Pools & Silent Canals",
      "Curated Botanical Sculptural Gardens",
      "Patios, Zen Stone Courtyards & Fire Features",
      "Subtle Twilight Landscape Illumination Layouts"
    ]
  }
];

// Note: To fill the requested 3-column / 6-card services structure, we also add:
export const SERVICES_FULL: ServiceItem[] = [
  ...SERVICES,
  {
    id: "heritage-renovation",
    title: "Facade & Historic Curation",
    description: "Restoring historic envelopes with modern glass, steel, and luxury bronze structural extensions while maintaining heritage roots.",
    details: [
      "Historic Envelope Preservation & Steel Reinforcement",
      "Custom Bronze Cladding & Framing Profiles",
      "Energy Efficiency Modernization & Insulation",
      "Patina Match Engineering & Stone Conservation"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "obsidian-pavilion",
    title: "The Obsidian Pavilion",
    subtitle: "Lake Zurich, Switzerland",
    category: "Architectural Design",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    year: "2025",
    location: "Zurich, CH",
    details: "A striking brutalist residential villa framing perfect panoramic lake views. The structure utilizes black-dyed concrete, custom carbon-steel columns, and oversized glass panels. Bronze highlights are integrated around framing edges and internal pivot-doors."
  },
  {
    id: "aura-lounge",
    title: "Aura Living Lounge",
    subtitle: "Mayfair Penthouse",
    category: "Interior & Exterior Design",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    year: "2024",
    location: "London, UK",
    details: "An immersive penthouse space celebrating bronze and natural stone. Raw, hand-selected travertine covers the focal fireplace, contrasted with dark bronze metal framing and custom wood panelling that rises to a hidden gold-recessed ceiling."
  },
  {
    id: "bronze-horizon",
    title: "The Bronze Horizon",
    subtitle: "Clifftop Estate",
    category: "Landscape Design",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    year: "2025",
    location: "Costa Brava, ES",
    details: "A dramatic clifftop home where geometric concrete planes project out towards the sea. Custom landscaped stone walls connect the building to the jagged surrounding cliffs, featuring a silent, gold-flecked black tile pool."
  },
  {
    id: "luminary-grid",
    title: "Luminary Power Spa",
    subtitle: "Geothermal Retreat",
    category: "MEP Design",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    year: "2025",
    location: "Aspen, CO",
    details: "Engineering meets ultimate luxury. A silent geothermal system heats the villa through stone-embedded hydronic tubes. High-end automated HVAC and architectural lighting grids are routed seamlessly behind custom wood paneling."
  },
  {
    id: "aetheria-concept",
    title: "Aetheria Mountain Pavilion",
    subtitle: "Cinematic Rendering",
    category: "3D Visualization",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    year: "2026",
    location: "Kyoto, JP",
    details: "An architectural render focusing on shadows, atmospheric mist, and raw concrete. Designed to simulate the interactions between a foggy natural mountain forest and an unyielding, geometric luxury concrete layout."
  },
  {
    id: "zen-sanctum",
    title: "Zen Sanctum Gardens",
    subtitle: "Modernist Courtyard",
    category: "Landscape Design",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    year: "2025",
    location: "Sonoma, CA",
    details: "A minimalist natural sanctuary structured around lines of flowing stone and water. Features a single focal Japanese Maple, bespoke linear bronze water channels, and custom indirect uplighting designed to cast deep shadows."
  }
];
