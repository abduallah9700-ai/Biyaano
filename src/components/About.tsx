import { useEffect, useRef } from "react";

export default function About() {
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

    const child = sectionRef.current?.querySelector(".fade-in-section");
    if (child) observer.observe(child);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-28 bg-[#030303] border-t border-[#C58E5C]/15 relative overflow-hidden text-white"
      ref={sectionRef}
    >
      {/* Immersive Drafting Backdrop */}
      <div className="absolute inset-0 draft-grid opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="fade-in-section">
          <span className="text-[11px] text-gold tracking-[0.4em] uppercase block mb-4 font-semibold">
            The Studio Philosophy
          </span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-snug tracking-wide text-white mb-8">
            "Architecture is the composed play of structural volumes brought to life under light."
          </h2>

          <p className="text-sm sm:text-base text-gray-400 font-sans font-light tracking-wide leading-relaxed max-w-2xl mx-auto mb-10">
            Biyaano Architects operates as an avant-garde spatial laboratory.
            Working closely from our office in Taleex-KM4, Mogadishu, Somalia, we
            collaborate with private patrons, luxury hoteliers, and premium
            brands to craft buildings of structural and material dialogue.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#B8864E] group font-semibold border-b border-transparent hover:border-gold pb-1.5 transition-all duration-300"
          >
            Meet the Studio
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
