import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenExport?: () => void;
}

export default function Navbar({ onOpenExport }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-[#030303]/95 py-3 border-[#1E1E1E]/50 shadow-xl"
          : "bg-[#030303] py-5 border-[#1A1A1A]"
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Wordmark Logo */}
        <a href="#hero" className="flex items-center gap-1 group">
          <img
            src="/logo.png"
            alt="Biyaano Architects"
            className="w-[185px] h-auto drop-shadow-sm"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <a
            href="#hero"
            className="text-[10px] font-sans tracking-[0.25em] font-medium text-white uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 transition-colors hover:text-gold"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-[10px] font-sans tracking-[0.25em] font-medium text-white uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 transition-colors hover:text-gold"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-[10px] font-sans tracking-[0.25em] font-medium text-white uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 transition-colors hover:text-gold"
          >
            Projects
          </a>
          <a
            href="#tours360"
            className="text-[10px] font-sans tracking-[0.25em] font-medium text-[#C58E5C] uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 transition-colors hover:text-white"
          >
            360° Tours
          </a>
          <a
            href="#about"
            className="text-[10px] font-sans tracking-[0.25em] font-medium text-white uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 transition-colors hover:text-gold"
          >
            Studio
          </a>
          <a
            href="#team"
            className="text-[10px] font-sans tracking-[0.25em] font-medium text-white uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 transition-colors hover:text-gold"
          >
            Team
          </a>
          <a
            href="#contact"
            className="text-[10px] font-sans tracking-[0.25em] font-medium text-white uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 transition-colors hover:text-gold"
          >
            Contact
          </a>

        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gold focus:outline-none transition-colors z-50 p-1"
            id="mobile-drawer-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full xs:w-80 bg-[#0E0E0E] border-l border-[#1E1E1E] z-40 transform transition-all duration-500 ease-out flex flex-col justify-center px-12 gap-8 shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="#hero"
          onClick={() => setIsOpen(false)}
          className="text-xl font-sans tracking-[0.2em] text-white uppercase hover:text-gold transition-colors"
        >
          Home
        </a>
        <a
          href="#services"
          onClick={() => setIsOpen(false)}
          className="text-xl font-sans tracking-[0.2em] text-white uppercase hover:text-gold transition-colors"
        >
          Services
        </a>
        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="text-xl font-sans tracking-[0.2em] text-white uppercase hover:text-gold transition-colors"
        >
          Projects
        </a>
        <a
          href="#tours360"
          onClick={() => setIsOpen(false)}
          className="text-xl font-sans tracking-[0.2em] text-[#C58E5C] uppercase hover:text-white transition-colors"
        >
          360° Tours
        </a>
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="text-xl font-sans tracking-[0.2em] text-white uppercase hover:text-gold transition-colors"
        >
          Studio
        </a>
        <a
          href="#team"
          onClick={() => setIsOpen(false)}
          className="text-xl font-sans tracking-[0.2em] text-white uppercase hover:text-gold transition-colors"
        >
          Team
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="text-xl font-sans tracking-[0.2em] text-white uppercase hover:text-gold transition-colors"
        >
          Contact
        </a>

        <div className="mt-2 text-[11px] text-gray-500 uppercase tracking-widest flex flex-col gap-2">
          <span>© 2026 Biyaano Architects</span>
          <span>Mogadishu • Taleex-KM4</span>
        </div>
      </div>
    </nav>
  );
}
