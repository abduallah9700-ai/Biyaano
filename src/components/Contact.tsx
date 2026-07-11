import React, { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";
import TiktokIcon from "./TiktokIcon";

export default function Contact() {
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

  return (
    <section
      id="contact"
      className="py-28 bg-[#F5EDE0] border-t border-[#C58E5C]/15 relative overflow-hidden text-[#030303]"
      ref={sectionRef}
    >
      {/* Immersive Drafting Backdrop */}
      <div className="absolute inset-0 draft-grid opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="fade-in-section text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] text-gold tracking-[0.3em] uppercase block mb-3 font-semibold">
            Inquiries
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-[#030303] tracking-wide mb-6">
            Conceive & Collaborate
          </h2>
          <p className="text-gray-700 text-sm font-sans font-light leading-relaxed max-w-lg mx-auto">
            Let's begin a conversation on luxury residential development, spatial composition, or bespoke interiors. Reach out to our primary ateliers or connect with us digitally.
          </p>
        </div>

        {/* 3-Column Luxury Coordinate Grid */}
        <div className="fade-in-section grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address */}
          <div className="flex flex-col items-center text-center p-8 border border-[#C58E5C]/15 bg-white hover:border-[#C58E5C]/40 transition-all duration-500 group rounded-xl shadow-sm hover:shadow-md">
            <span className="text-[#C58E5C] mb-5 p-3 rounded-full border border-[#C58E5C]/15 bg-[#C58E5C]/5 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 stroke-[1.25]" />
            </span>
            <h4 className="text-xs uppercase text-[#C58E5C] tracking-widest mb-3 font-semibold">
              Mogadishu Atelier
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed max-w-[220px]">
              Taleex-KM4, Mogadishu, Somalia
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center p-8 border border-[#C58E5C]/15 bg-white hover:border-[#C58E5C]/40 transition-all duration-500 group rounded-xl shadow-sm hover:shadow-md">
            <span className="text-[#C58E5C] mb-5 p-3 rounded-full border border-[#C58E5C]/15 bg-[#C58E5C]/5 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 stroke-[1.25]" />
            </span>
            <h4 className="text-xs uppercase text-[#C58E5C] tracking-widest mb-3 font-semibold">
              Email Coordinates
            </h4>
            <p className="text-xs text-gray-600 hover:text-[#030303] transition-colors duration-300">
              <a href="mailto:atelier@biyaano.com" className="hover:underline">atelier@biyaano.com</a>
            </p>
          </div>

          {/* Telephone */}
          <div className="flex flex-col items-center text-center p-8 border border-[#C58E5C]/15 bg-white hover:border-[#C58E5C]/40 transition-all duration-500 group rounded-xl shadow-sm hover:shadow-md">
            <span className="text-[#C58E5C] mb-5 p-3 rounded-full border border-[#C58E5C]/15 bg-[#C58E5C]/5 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 stroke-[1.25]" />
            </span>
            <h4 className="text-xs uppercase text-[#C58E5C] tracking-widest mb-3 font-semibold">
              Telephone Atelier
            </h4>
            <p className="text-xs text-gray-600 hover:text-[#030303] transition-colors duration-300">
              <a href="tel:+252612536518" className="hover:underline">+252-612536518</a>
            </p>
          </div>
        </div>

        {/* Digital Ateliers (Social Links) */}
        <div className="fade-in-section flex flex-col items-center border-t border-[#C58E5C]/15 pt-10">
          <h4 className="text-[10px] uppercase text-[#C58E5C] tracking-[0.25em] font-semibold mb-6">
            Digital Ateliers
          </h4>
          <div className="flex gap-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#C58E5C] hover:border-[#C58E5C] transition-all duration-300 w-11 h-11 border border-gray-300 flex items-center justify-center bg-white rounded-xl shadow-sm"
              title="Instagram"
            >
              <Instagram className="w-4 h-4 stroke-[1.5]" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#C58E5C] hover:border-[#C58E5C] transition-all duration-300 w-11 h-11 border border-gray-300 flex items-center justify-center bg-white rounded-xl shadow-sm"
              title="TikTok"
            >
              <TiktokIcon className="w-4 h-4 stroke-[1.5]" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#C58E5C] hover:border-[#C58E5C] transition-all duration-300 w-11 h-11 border border-gray-300 flex items-center justify-center bg-white rounded-xl shadow-sm"
              title="YouTube"
            >
              <Youtube className="w-4 h-4 stroke-[1.5]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
