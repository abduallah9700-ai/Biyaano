import { ServiceItem, ProjectItem, TeamMember } from "../types";

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

export const PROJECTS_360: ProjectItem[] = [
  {
    id: "mu-cluster",
    title: "MU Health Cluster",
    subtitle: "360° Virtual Tour — Healthcare & University Complex",
    category: "Architectural Design",
    imageUrl: "/projects/mu-cluster/mu-1.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Comprehensive 360° virtual walkthrough of MU Health Cluster. Features ground floor reception, administrative areas, medical spaces, and exterior architectural design.",
    images: ["/projects/mu-cluster/mu-1.jpg"],
    externalLink: "https://arch-hussein.github.io/MU-CLUSTER/"
  },
  {
    id: "sombank-360",
    title: "SomBank Headquarters",
    subtitle: "360° Virtual Tour — Modern Financial Facility",
    category: "Interior Design",
    imageUrl: "/projects/sombank-360/sombank-1.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Immersive 360° virtual experience of SomBank Headquarters. Explore the banking halls, customer reception zones, executive suites, and corporate interior architecture.",
    images: ["/projects/sombank-360/sombank-1.jpg"],
    externalLink: "https://arch-hussein.github.io/sombank111/"
  },
  {
    id: "biyano-office-360",
    title: "Biyaano Studio Office",
    subtitle: "360° Virtual Tour — Architectural Studio & HQ",
    category: "Interior Design",
    imageUrl: "/projects/biyano-office-360/biyano-1.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Official 360° virtual tour of Biyaano Architects design studio and headquarters. Step inside our creative environment, meeting rooms, and spatial planning workshop.",
    images: ["/projects/biyano-office-360/biyano-1.jpg"],
    externalLink: "https://huseynmohameda.github.io/biyano-office/"
  },
  {
    id: "nasiye-studio",
    title: "Nasiye Studio",
    subtitle: "360° Virtual Tour — Media & Creative Studio",
    category: "Interior Design",
    imageUrl: "/projects/nasiye-studio/nasiye-1.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Interactive 360° tour of Nasiye Studio workspace. Features creative media production setups, modern interior lighting, acoustic paneling, and lounge layout.",
    images: ["/projects/nasiye-studio/nasiye-1.jpg"],
    externalLink: "https://huseynmohameda.github.io/Nasiye-Studio/"
  },
  {
    id: "masrax-ceo-office-wcs",
    title: "MASRAX Executive Suite WCS",
    subtitle: "360° Virtual Tour — Executive Suite & Lounge",
    category: "Interior Design",
    imageUrl: "/projects/masrax-ceo-office-wcs/masrax-wcs-1.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Full 360° virtual walkthrough of the MASRAX CEO Executive Suite WCS edition. Designed with luxury modern executive furnishings, private lounge, and ambient acoustic interior.",
    images: ["/projects/masrax-ceo-office-wcs/masrax-wcs-1.jpg"],
    externalLink: "https://huseynmohameda.github.io/MASRAX-CEO-OFFICE-Wcs"
  },
  {
    id: "dbi-project",
    title: "DBI Project",
    subtitle: "360° Virtual Tour — Commercial & Institute Facility",
    category: "Interior Design",
    imageUrl: "/projects/dbi-project/dbi-1.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Interactive 360° virtual tour of the DBI Project facility. Experience the reception, recovery areas, and administrative zones through immersive panoramic views.",
    images: ["/projects/dbi-project/dbi-1.jpg"],
    externalLink: "https://arch-hussein.github.io/DBI/"
  },
  {
    id: "alamtara-360",
    title: "Alamtara 360",
    subtitle: "360° Panoramic Virtual Tour — Commercial Complex",
    category: "Architectural Design",
    imageUrl: "/projects/alamtara-360/alamtara-1.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Comprehensive 360° virtual walkthrough of Alamtara Complex. Explore external street views, reception halls, corridors, and exterior architectural features.",
    images: ["/projects/alamtara-360/alamtara-1.jpg"],
    externalLink: "https://arch-hussein.github.io/ALAMATRA360/"
  },
  {
    id: "dhusamareb-landscape",
    title: "Dhusamareb Landscape",
    subtitle: "360° Virtual Tour — Landscape & Park Design",
    category: "Landscape Design",
    imageUrl: "/projects/dhusamareb-landscape/dhusamareb-1.jpg",
    year: "2025",
    location: "Dhusamareb, SO",
    details: "Immersive 360° landscape design tour in Dhusamareb. Features traditional dining huts, garden pathways, park entrances, and outdoor recreational spatial planning.",
    images: ["/projects/dhusamareb-landscape/dhusamareb-1.jpg"],
    externalLink: "https://xamar728-max.github.io/dhusmareb-landescape/"
  },
  {
    id: "masrax-ceo-office",
    title: "MASRAX CEO Office",
    subtitle: "360° Virtual Tour — Executive Office Design",
    category: "Interior Design",
    imageUrl: "/projects/masrax-ceo-office/masrax-1.jpg",
    year: "2024",
    location: "Mogadishu, SO",
    details: "A luxury executive office designed for MASRAX, featuring a full 360° panoramic virtual tour. The space blends modern corporate aesthetics with refined Somali design sensibilities — premium materials, ambient lighting, and a spatial flow crafted to convey authority, focus, and sophistication. Explore every corner of this immersive interior through the interactive 360° tour.",
    images: ["/projects/masrax-ceo-office/masrax-1.jpg"],
    externalLink: "https://huseynmohameda.github.io/MASRAX-CEO-OFFICE-/"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "marina-villa-project",
    title: "Marina Villa Project",
    subtitle: "A Heritage-Modern Fusion Residence",
    category: "Architectural Design",
    imageUrl: "/projects/marina-villa/marina-3.jpg",
    year: "2026",
    location: "Abdiaziz District, SO",
    details: "Marina Villa Project is a masterpiece residential project located in the Abdiaziz District of Mogadishu, designed by Biyaano Architects. The villa presents a sophisticated blend of contemporary design features and the timeless, traditional Somali architectural styles that have historically defined the region's buildings. The layout incorporates elegant white arched openings, natural stone panels, custom metal entry gates, and brown bands that emphasize the building's geometric volumes while maintaining a high standard of modern spatial planning and structural luxury.",
    images: [
      "/projects/marina-villa/marina-3.jpg",
      "/projects/marina-villa/marina-4.jpg",
      "/projects/marina-villa/marina-1.png",
      "/projects/marina-villa/marina-2.png",
      "/projects/marina-villa/marina-5.jpg"
    ]
  },
  {
    id: "mogadishu-heights-tower",
    title: "Mogadishu Heights Tower",
    subtitle: "High-Rise Modern Living",
    category: "Architectural Design",
    imageUrl: "/projects/residential-tower/tower-1.jpg",
    year: "2026",
    location: "Mogadishu, SO",
    details: "Mogadishu Heights Tower is a premium multi-storey residential building designed by Biyaano Architects to define the modern skyline of Mogadishu, Somalia. Featuring stacked balconies, clean horizontal facades, custom bronze accents, and large glass windows, the design optimizes natural lighting and ventilation for urban living. The ground floor houses boutique commercial shops, while the upper floors offer high-end apartments with panoramic views of the city.",
    images: [
      "/projects/residential-tower/tower-1.jpg",
      "/projects/residential-tower/tower-2.jpg",
      "/projects/residential-tower/tower-3.jpg",
      "/projects/residential-tower/tower-4.jpg"
    ]
  },
  {
    id: "daru-salaam-villa",
    title: "Daru Salaam Villa",
    subtitle: "Modern Somali Cultural Residence",
    category: "Architectural Design",
    imageUrl: "/projects/daru-salaam-villa/villa-3.jpg",
    year: "2026",
    location: "Mogadishu, SO",
    details: "Located in Daru Salaam, Mogadishu, this modern villa is designed by Biyaano Architects to seamlessly blend rich Somali cultural heritage with contemporary architectural forms. The design integrates traditional decorative screens and brick-pattern lattice shading with clean geometric volumes, natural stone walls, and manicured tropical landscaping. Featuring private courtyards, a sunken seating patio, illuminated concrete staircases, and seamless indoor-outdoor connections, the villa offers a peaceful and luxurious living environment that honors local identity.",
    images: [
      "/projects/daru-salaam-villa/villa-3.jpg",
      "/projects/daru-salaam-villa/villa-1.jpg",
      "/projects/daru-salaam-villa/villa-2.jpg",
      "/projects/daru-salaam-villa/villa-4.jpg",
      "/projects/daru-salaam-villa/villa-5.jpg"
    ]
  },
  {
    id: "anaam-digital-printing",
    title: "Anaam Digital Printing Company",
    subtitle: "Modern Corporate Office & Branding Hub",
    category: "Interior & Exterior Design",
    imageUrl: "/projects/anaam-digital-printing/anaam-2.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Anaam Digital Printing Company is a modern office and production space designed by Biyaano Architects, focusing on creating a clean, futuristic, and highly functional workspace. The interior features a striking visual identity centered around bold teal architectural lines, custom directional arrows representing progress and speed, and a sleek marble reception desk. Strategically integrated lighting and modern wood floors create an inviting waiting area, while integrated displays and clear branding convey a highly professional corporate image.",
    images: [
      "/projects/anaam-digital-printing/anaam-2.jpg",
      "/projects/anaam-digital-printing/anaam-1.jpg",
      "/projects/anaam-digital-printing/anaam-3.jpg",
      "/projects/anaam-digital-printing/anaam-4.jpg",
    ]
  },
  {
    id: "afrik-coffee-shop",
    title: "Afrik Coffee Shop",
    subtitle: "African-Inspired Dining & Café Experience",
    category: "Interior & Exterior Design",
    imageUrl: "/projects/afrik-coffee-shop/afrik-4.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Afrik Coffee Shop is a vibrant café and dining space designed by Biyaano Architects, blending African cultural identity with contemporary interior design. The project celebrates traditional African patterns and motifs through custom wall panels, arched openings, and warm terracotta tones — creating an immersive and welcoming atmosphere. The exterior features a clean two-storey façade with arched entrances, a rooftop pergola, and natural landscaping, while the interior is crafted with rattan furniture, marble-top tables, decorative room dividers, and soft ambient lighting to deliver a premium yet culturally rich dining experience.",
    images: [
      "/projects/afrik-coffee-shop/afrik-4.jpg",
      "/projects/afrik-coffee-shop/afrik-1.jpg",
      "/projects/afrik-coffee-shop/afrik-2.jpg",
      "/projects/afrik-coffee-shop/afrik-3.jpg",
      "/projects/afrik-coffee-shop/afrik-5.jpg",
    ]
  },
  {
    id: "daaci-show-studio",
    title: "Daaci Show Studio",
    subtitle: "Islamic Competition Broadcast Stage",
    category: "Interior & Exterior Design",
    imageUrl: "/projects/daaci-show-studio/daaci-3.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Daaci Show Studio is a specialized television broadcast environment designed by Biyaano Architects for an Islamic competition program led by Nasiye TV during the holy month of Ramadan. The design focuses on merging iconic Islamic architectural features — such as geometric wall panels and arched screens — with the technical and practical requirements of a live broadcasting studio.",
    images: [
      "/projects/daaci-show-studio/daaci-3.jpg",
      "/projects/daaci-show-studio/daaci-1.jpg",
      "/projects/daaci-show-studio/daaci-2.jpg",
      "/projects/daaci-show-studio/daaci-4.jpg",
      "/projects/daaci-show-studio/daaci-5.jpg"
    ]
  },
  {
    id: "alamtara",
    title: "Alamtara School",
    subtitle: "Modern Institutional Education",
    category: "Architectural Design",
    imageUrl: "/projects/alamtara/alamtara-1.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Alamtara is a modern school building designed by Biyaano Architects, focusing on both the interior and the exterior of the building. The architectural design integrates safety and shading screens with open learning environments, creating a functional, secure, and encouraging atmosphere for students and educators.",
    images: [
      "/projects/alamtara/alamtara-1.jpg",
      "/projects/alamtara/alamtara-2.jpg",
      "/projects/alamtara/alamtara-3.jpg",
      "/projects/alamtara/alamtara-4.jpg"
    ]
  },
  {
    id: "mogadishu-health-cluster",
    title: "Mogadishu Health Cluster",
    subtitle: "Institutional Health Hub",
    category: "Interior & Exterior Design",
    imageUrl: "/projects/mogadishu-health-cluster/health-5.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Mogadishu Health Cluster is one of Biyaano Architects’ distinguished institutional projects, designed to support healthcare coordination and public service efficiency in Somalia. Our vision was to create a functional, professional, and collaborative space that enhances the working environment for health organizations and stakeholders. The architectural design focuses on openness, accessibility, and practicality, ensuring that offices, meeting areas, and common spaces promote communication and productivity. Natural lighting, sustainable materials, and a clean modern aesthetic define the project’s visual identity, aligning with the values of care and community service.",
    images: [
      "/projects/mogadishu-health-cluster/health-5.jpg",
      "/projects/mogadishu-health-cluster/health-2.jpg",
      "/projects/mogadishu-health-cluster/health-1.jpg",
      "/projects/mogadishu-health-cluster/health-3.jpg",
      "/projects/mogadishu-health-cluster/health-4.jpg"
    ]
  },
  {
    id: "hodan-hospital",
    title: "Hodan Hospital",
    subtitle: "Human-Centred Healthcare Design",
    category: "Architectural Design",
    imageUrl: "/projects/hodan-hospital/hodan-2.jpg",
    year: "2025",
    location: "Mogadishu, SO",
    details: "Hodan Hospital is one of our remarkable healthcare design projects that reflects Biyaano Architects' commitment to functionality, innovation, and human-centered design. Our goal was to create a hospital environment that promotes healing, efficiency, and comfort — both for patients and medical staff. The design features open spaces, natural lighting, and a smooth flow between departments to ensure accessibility and ease of movement.",
    images: [
      "/projects/hodan-hospital/hodan-2.jpg",
      "/projects/hodan-hospital/hodan-1.jpg"
    ]
  },
  {
    id: "magool-restaurant",
    title: "Magool Restaurant",
    subtitle: "Modern Gastronomy & Cultural Space",
    category: "Interior & Exterior Design",
    imageUrl: "/projects/magool-restaurant/magool-4.jpg",
    year: "2024",
    location: "Mogadishu, SO",
    details: "Magool Restaurant is one of Biyaano Architects’ standout interior and architectural design projects — a creative blend of modern aesthetics and cultural warmth. Our vision was to design a space that invites people to connect, relax, and enjoy a unique dining experience in a beautifully designed environment. The restaurant’s design combines contemporary style with local artistic elements, using warm tones, natural materials, and strategic lighting to create a cozy and welcoming atmosphere.",
    images: [
      "/projects/magool-restaurant/magool-4.jpg",
      "/projects/magool-restaurant/magool-2.jpg",
      "/projects/magool-restaurant/magool-1.jpg",
      "/projects/magool-restaurant/magool-3.jpg",
      "/projects/magool-restaurant/magool-5.jpg"
    ]
  },
  {
    id: "palm-resort",
    title: "Palm Resort",
    subtitle: "Bespoke Hospitality Haven",
    category: "Architectural Design",
    imageUrl: "/projects/palm-resort/palm-resort-2.jpg",
    year: "2026",
    location: "Mogadishu, SO",
    details: "Palm Resort is one of Biyaano Architects’ signature hospitality projects — a perfect blend of modern luxury and natural beauty. Our team designed the resort to provide guests with an unforgettable experience that balances comfort, relaxation, and architectural elegance. Every structure, from the villas to the leisure areas, was thoughtfully designed to capture natural light, panoramic ocean views, and the coastal biome. The concept emphasizes open spaces, tropical landscaping, and seamless indoor-outdoor connections to enhance the resort’s coastal atmosphere.",
    images: [
      "/projects/palm-resort/palm-resort-2.jpg",
      "/projects/palm-resort/palm-resort-1.jpg",
      "/projects/palm-resort/palm-resort-3.jpg",
      "/projects/palm-resort/palm-resort-4.jpg",
      "/projects/palm-resort/palm-resort-5.jpg"
    ]
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "abdiwahab-ibrahim-ahmed",
    name: "Abdiwahab Ibrahim Ahmed",
    title: "Architect",
    imageUrl: "/team/abdiwahab.jpg",
  },
  {
    id: "abdikani-hussein-omar",
    name: "Abdikani Hussein Omar",
    title: "Architect",
    imageUrl: "/team/abdikani.jpg",
  },
  {
    id: "hussein-mohamed-abdi",
    name: "Hussein Mohamed Abdi",
    title: "Architect",
    imageUrl: "/team/hussein.jpg",
  },
];
