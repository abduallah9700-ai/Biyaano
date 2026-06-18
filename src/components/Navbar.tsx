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
          ? "bg-black/95 py-3 border-[#1E1E1E]/50 shadow-xl"
          : "bg-[#0A0A0A] py-5 border-[#1A1A1A]"
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Wordmark Logo */}
        <a href="#hero" className="flex items-center gap-1 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340 140"
            className="w-[185px] h-auto"
            fill="none"
          >
            <defs>
              <linearGradient id="logoBronze" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8E673A" />
                <stop offset="40%" stopColor="#D1A764" />
                <stop offset="60%" stopColor="#F2D18F" />
                <stop offset="80%" stopColor="#C59C5E" />
                <stop offset="100%" stopColor="#734E24" />
              </linearGradient>
            </defs>
            <g fill="url(#logoBronze)" fillRule="evenodd">
              {/* b */}
              <path d="M 15 25 L 25 15 L 25 50 L 55 50 L 55 85 L 45 95 L 15 95 Z M 25 60 L 45 60 L 45 80 L 40 85 L 25 85 Z" />
              {/* i */}
              <path d="M 65 60 L 75 50 L 75 95 L 65 95 Z" />
              <path d="M 65 38 L 73 30 L 83 30 L 75 38 Z" />
              {/* y */}
              <path d="M 85 50 L 95 50 L 95 85 L 105 85 L 105 50 L 115 50 L 115 105 L 105 115 L 105 95 L 95 95 L 85 85 Z" />
              {/* a */}
              <path d="M 125 60 L 135 50 L 165 50 L 165 95 L 125 95 Z M 135 60 L 155 60 L 155 80 L 150 85 L 135 85 Z" />
              {/* a */}
              <path d="M 175 60 L 185 50 L 215 50 L 215 95 L 175 95 Z M 185 60 L 205 60 L 205 80 L 200 85 L 185 85 Z" />
              {/* n */}
              <path d="M 225 50 L 255 50 L 265 60 L 265 95 L 255 95 L 255 65 L 235 65 L 235 95 L 225 95 Z" />
              {/* o */}
              <path d="M 285 50 L 305 50 L 315 60 L 315 85 L 305 95 L 285 95 L 275 85 L 275 60 Z M 290 60 L 300 60 L 305 65 L 305 80 L 300 85 L 290 85 L 285 80 L 285 65 Z" />
            </g>
            <text
              x="122"
              y="122"
              fontFamily="'Inter', sans-serif"
              fontWeight="400"
              fontSize="20"
              letterSpacing="5.5"
              fill="url(#logoBronze)"
              className="uppercase"
            >
              architects
            </text>
          </svg>
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
            href="#about"
            className="text-[10px] font-sans tracking-[0.25em] font-medium text-white uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 transition-colors hover:text-gold"
          >
            Studio
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
          href="#about"
          onClick={() => setIsOpen(false)}
          className="text-xl font-sans tracking-[0.2em] text-white uppercase hover:text-gold transition-colors"
        >
          Studio
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
