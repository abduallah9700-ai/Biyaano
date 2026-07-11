import { SERVICES_FULL } from "../data/portfolioData";
import { useState, useEffect, useRef } from "react";

export default function Services() {
  const [activeDetails, setActiveDetails] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = sectionRef.current?.querySelectorAll(".fade-in-section");
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  // Custom inline SVGs matching our architectural aesthetics
  const getIcon = (id: string) => {
    switch (id) {
      case "architectural":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 stroke-[1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="12 8 8 12 12 16 16 12" />
          </svg>
        );
      case "interior":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 stroke-[1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
            <line x1="15" y1="3" x2="15" y2="21" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="3" y1="15" x2="21" y2="15" />
          </svg>
        );
      case "mep":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 stroke-[1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M 4,4 L 10,4 L 10,20 L 4,20 Z" />
            <path d="M 14,4 L 20,4 L 20,20 L 14,20 Z" />
            <line x1="10" y1="12" x2="14" y2="12" />
          </svg>
        );
      case "visualization":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 stroke-[1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <path d="M7 2v20M17 2v20M2 7h20M2 17h20" />
          </svg>
        );
      case "landscape":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 stroke-[1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 22h20L12 2z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 stroke-[1]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
    }
  };

  const getSubLabel = (id: string) => {
    switch (id) {
      case "architectural":
        return "Core Discipline";
      case "interior":
        return "Form & Texture";
      case "heritage-renovation":
        return "Heritage Curation";
      case "mep":
        return "Systems Engineering";
      case "visualization":
        return "Cinematic Light Paths";
      case "landscape":
        return "Biophilic Harmony";
      default:
        return "Aesthetic Layouts";
    }
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#F5EDE0] border-t border-[#C58E5C]/15 relative overflow-hidden text-[#030303]"
      ref={sectionRef}
    >
      {/* Immersive Drafting Backdrop */}
      <div className="absolute inset-0 draft-grid opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="fade-in-section flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-[11px] text-gold tracking-[0.3em] uppercase block mb-3 font-semibold">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#030303] tracking-wide">
              Composing Elements
            </h2>
          </div>
          <p className="text-sm text-gray-700 max-w-md font-sans font-light leading-relaxed">
            Through deliberate planning, interior architecture, and facade engineering, we establish exceptional structures tailored to premium requirements.
          </p>
        </div>

        {/* 3-Column 2-Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_FULL.map((service) => (
            <div
              key={service.id}
              className="fade-in-section service-card bg-white p-8 md:p-10 flex flex-col justify-between h-[360px] border border-[#C58E5C]/15 relative overflow-hidden rounded-xl group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              onClick={() =>
                setActiveDetails(activeDetails === service.id ? null : service.id)
              }
            >
              <div className="relative z-10">
                <div className="text-[#C58E5C] mb-6 transition-colors duration-300 group-hover:text-[#030303]">
                  {getIcon(service.id)}
                </div>
                <h3 className="text-xl font-display text-[#030303] font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans font-light">
                  {service.description}
                </p>

                {/* Expanding sub-details list on click */}
                <div
                  className={`mt-4 space-y-1.5 transition-all duration-500 overflow-hidden ${
                    activeDetails === service.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-2 border-t border-gray-200 mt-2">
                    {service.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="text-[11px] text-gray-600 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-[#C58E5C] rounded-full shrink-0"></span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-[#C58E5C] uppercase tracking-[0.15em] font-medium flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <span>{getSubLabel(service.id)}</span>
                  <span className="w-6 h-[1px] bg-[#C58E5C]/50"></span>
                </div>
                <span className="text-[10px] font-mono text-gray-500 group-hover:text-[#C58E5C] transition-colors">
                  {activeDetails === service.id ? "[Collapse]" : "[Enquire Details]"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
