import { useEffect, useRef } from "react";
import { TEAM_MEMBERS } from "../data/portfolioData";

export default function TeamMembers() {
  const sectionRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll("#team .fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      className="py-28 bg-[#030303] border-t border-[#111]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="fade-in-section text-center mb-20">
          <span className="text-[11px] text-[#C58E5C] tracking-[0.4em] uppercase block mb-4">
            The People Behind the Vision
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-wide">
            Our Team
          </h2>
          <div className="mt-6 mx-auto w-12 h-px bg-[#C58E5C] opacity-60" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="fade-in-section group text-center"
            >
              {/* Photo frame */}
              <div
                className="relative overflow-hidden mb-6 mx-auto"
                style={{ width: "100%", maxWidth: "320px", aspectRatio: "3/4" }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 border border-[#2a2a2a] group-hover:border-[#C58E5C] transition-colors duration-700 z-10 pointer-events-none" />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#C58E5C] z-20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#C58E5C] z-20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#C58E5C] z-20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#C58E5C] z-20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Photo */}
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              </div>

              {/* Info */}
              <div className="mt-2">
                <div className="w-6 h-px bg-[#C58E5C] mx-auto mb-4 opacity-60" />
                <span className="text-[10px] text-[#C58E5C] uppercase tracking-[0.35em] block mb-2">
                  {member.title}
                </span>
                <h3 className="text-white font-serif font-light text-xl tracking-wide">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
