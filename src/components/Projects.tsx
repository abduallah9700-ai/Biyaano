import { PROJECTS } from "../data/portfolioData";
import { useState, useEffect, useRef } from "react";
import { ProjectItem } from "../types";

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<string>("all");
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
  }, [filter]); // re-run of observer is perfect when layouts shift!

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "all") return true;
    if (filter === "architectural") return proj.category === "Architectural Design" || proj.category === "3D Visualization";
    if (filter === "interior") return proj.category.includes("Interior");
    if (filter === "landscape") return proj.category.includes("Landscape");
    if (filter === "mep") return proj.category.includes("MEP");
    return true;
  });

  return (
    <section
      id="projects"
      className="py-24 bg-[#F5EDE0] border-t border-[#C58E5C]/15 relative overflow-hidden text-[#030303]"
      ref={sectionRef}
    >
      {/* Immersive Drafting Backdrop */}
      <div className="absolute inset-0 draft-grid opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header & Filters */}
        <div className="fade-in-section flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[11px] text-gold tracking-[0.3em] uppercase block mb-3 font-semibold">
              Portfolio Highlights
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#030303] tracking-wide">
              Timeless Spaces
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2 md:gap-3 pb-2">
            {[
              { label: "All", id: "all" },
              { label: "Architecture", id: "architectural" },
              { label: "Interior", id: "interior" },
              { label: "Landscape", id: "landscape" },
              { label: "MEP", id: "mep" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-[10px] md:text-xs font-sans tracking-widest uppercase py-2 px-4.5 focus:outline-none transition-all duration-300 border cursor-pointer rounded-full ${
                  filter === tab.id
                    ? "text-[#C58E5C] border-[#C58E5C]/45 bg-[#C58E5C]/10"
                    : "text-gray-600 border-[#C58E5C]/20 bg-transparent hover:text-[#030303] hover:border-[#C58E5C] hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Image Grid with custom aspect ratios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="fade-in-section group cursor-pointer overflow-hidden bg-white border border-[#C58E5C]/15 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden aspect-[4/3] w-full rounded-t-xl">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Dark overlay showing title in white and category in bronze on hover */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[10px] text-gold uppercase tracking-[0.25em] mb-2 font-medium">
                    {project.category}
                  </span>
                  <h4 className="text-white text-2xl font-display font-semibold tracking-wide mb-1 transition-transform duration-500 translate-y-3 group-hover:translate-y-0">
                    {project.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest font-sans">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
