export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center bg-[#030303] overflow-hidden pt-28 pb-10"
    >
      {/* Huge background image container with slow motion pan & design background lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/30 via-[#030303]/55 to-[#030303]/90 z-10"></div>
        <div className="absolute inset-0 draft-grid opacity-[0.25] z-10 pointer-events-none"></div>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Biyaano Landmark Waterfront Residence"
          className="w-full h-full object-cover scale-[1.03] transform transition-all duration-[20s] brightness-[0.65] contrast-[1.05]"
          style={{
            animation: "slowPan 30s infinite alternate ease-in-out",
          }}
          referrerPolicy="no-referrer"
        />
        <style>{`
          @keyframes slowPan {
            0% { transform: scale(1.02) translate(0px, 0px); }
            100% { transform: scale(1.08) translate(-15px, -10px); }
          }
        `}</style>
      </div>

      {/* Spacer top for flex vertical alignment */}
      <div className="h-4 w-full"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center my-auto py-6">
        {/* Minimalist Tagline */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-[1px] w-6 bg-gold/30"></span>
          <p className="text-[10px] sm:text-[11px] text-gold uppercase tracking-[0.45em] font-medium">
            Show your dream through us
          </p>
          <span className="h-[1px] w-6 bg-gold/30"></span>
        </div>

        {/* Majestic Heading */}
        <div className="relative inline-block mb-10 w-full max-w-[280px] sm:max-w-[420px] md:max-w-[500px] mx-auto">
          <img
            src="/logo.png"
            alt="Biyaano Architects"
            className="w-full h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-gray-400 font-sans font-light tracking-[0.05em] max-w-2xl mx-auto mb-12 leading-relaxed text-center">
          At Biyaano Architecture, we turn ideas into inspiring spaces. We blend innovation with practicality to create timeless architectural solutions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-[#C58E5C] text-[#030303] uppercase text-[11px] font-sans tracking-[0.25em] font-semibold hover:bg-[#8B5E30] hover:text-white transition-colors duration-500 rounded-lg"
          >
            Explore Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-4 uppercase text-[11px] font-sans tracking-[0.25em] text-[#C58E5C] hover:text-[#030303] hover:bg-[#C58E5C] transition-colors duration-300 border border-[#C58E5C] rounded-lg"
          >
            Enquire Space
          </a>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className="relative z-20 flex flex-col items-center gap-2 text-gray-500 mt-auto pb-4">
        <span className="text-[9px] uppercase tracking-[0.3em]">scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  );
}
