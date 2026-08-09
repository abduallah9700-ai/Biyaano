import { useEffect, useRef } from "react";
import { PROJECTS_360 } from "../data/portfolioData";
import { ExternalLink, Compass } from "lucide-react";

export default function VirtualTours360() {
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
      { threshold: 0.05 }
    );

    const children = sectionRef.current?.querySelectorAll(".fade-in-section");
    children?.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tours360"
      className="py-24 bg-[#030303] border-t border-[#C58E5C]/20 relative overflow-hidden text-white"
      ref={sectionRef}
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 draft-grid opacity-[0.08] pointer-events-none"></div>

      {/* Gold Ambient Glow Blur */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C58E5C]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="fade-in-section text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C58E5C]/10 border border-[#C58E5C]/30 text-[#C58E5C] text-[11px] font-sans tracking-[0.25em] uppercase font-semibold mb-4">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            Immersive Spatial Experiences
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white tracking-wide mb-4">
            360° Virtual Tours
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-sans leading-relaxed">
            Experience our architectural designs from every angle. Click any project to launch an interactive 360-degree panoramic virtual walkthrough.
          </p>
        </div>

        {/* 360° Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_360.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                if (project.externalLink) {
                  window.open(project.externalLink, "_blank", "noopener,noreferrer");
                }
              }}
              className="fade-in-section group cursor-pointer overflow-hidden bg-[#0A0A0A] border border-[#C58E5C]/20 rounded-2xl transition-all duration-500 hover:border-[#C58E5C]/60 hover:shadow-[0_10px_30px_rgba(197,142,92,0.15)] flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10] w-full rounded-t-2xl">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/30 to-transparent"></div>

                {/* 360° Floating Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-[#C58E5C] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-[#C58E5C]/40 flex items-center gap-1.5 shadow-lg">
                  <Compass className="w-3 h-3 text-[#C58E5C]" />
                  360° Tour
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-gray-400 font-sans tracking-wider">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] text-[#C58E5C] uppercase tracking-[0.25em] font-semibold block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-white group-hover:text-[#C58E5C] transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-6 font-sans">
                    {project.details}
                  </p>
                </div>

                {/* Interactive Action Link */}
                <div className="pt-4 border-t border-[#222] flex items-center justify-between group-hover:border-[#C58E5C]/30 transition-colors">
                  <span className="text-[11px] font-sans tracking-[0.2em] uppercase font-semibold text-gray-300 group-hover:text-[#C58E5C] transition-colors flex items-center gap-1.5">
                    Launch 360° Tour
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C58E5C] animate-pulse"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
