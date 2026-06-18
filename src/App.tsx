import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Lightbox from "./components/Lightbox";
import About from "./components/About";
import Contact from "./components/Contact";
import ExportModal from "./components/ExportModal";
import { PROJECTS } from "./data/portfolioData";
import { ProjectItem } from "./types";
import { Instagram, Youtube } from "lucide-react";
import TiktokIcon from "./components/TiktokIcon";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Smooth scroll configuration
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }, []);

  // Handle Lightbox cycles
  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-gold selection:text-black antialiased relative overflow-x-hidden">
      {/* 1. Sticky Nav bar */}
      <Navbar onOpenExport={() => setIsExportOpen(true)} />

      {/* 2. Hero viewport */}
      <Hero />

      {/* 3. Services Column Grid */}
      <Services />

      {/* Featured Clients Carousel */}
      <Clients />

      {/* 4. Filterable Projects Gallery */}
      <Projects onSelectProject={(project) => setSelectedProject(project)} />

      {/* 5. About Strip */}
      <About />

      {/* 6. Clean Interactive Form Column */}
      <Contact />

      {/* Footer Branding line */}
      <footer className="bg-[#070707] py-8 border-t border-[#111] text-xs text-gray-600 uppercase tracking-widest">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span>© 2026 Biyaano Architects</span>
            <div className="flex gap-4 border-t sm:border-t-0 sm:border-l border-[#222] pt-4 sm:pt-0 sm:pl-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors duration-300"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors duration-300"
                title="TikTok"
              >
                <TiktokIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors duration-300"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-gold transition-colors duration-300">
              Home
            </a>
            <a href="#services" className="hover:text-gold transition-colors duration-300">
              Expertise
            </a>
            <a href="#projects" className="hover:text-gold transition-colors duration-300">
              Spaces
            </a>
            <a href="#contact" className="hover:text-gold transition-colors duration-300 font-semibold text-gold">
              Enquiries
            </a>
          </div>
        </div>
      </footer>

      {/* Luxurious Image Lightbox Frame */}
      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
      />

      {/* Floating Single-file Export ledger */}
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
    </div>
  );
}
