export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center bg-[#0A0A0A] overflow-hidden pt-28 pb-10"
    >
      {/* Huge background image container with slow motion pan & design background lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/55 to-[#0A0A0A]/90 z-10"></div>
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
            Visionary Spatial Artistry
          </p>
          <span className="h-[1px] w-6 bg-gold/30"></span>
        </div>

        {/* Majestic Heading */}
        <div className="relative inline-block mb-10 w-full max-w-[280px] sm:max-w-[420px] md:max-w-[500px] mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340 140"
            className="w-full h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            fill="none"
          >
            <defs>
              <linearGradient id="heroLogoBronze" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8E673A" />
                <stop offset="40%" stopColor="#D1A764" />
                <stop offset="60%" stopColor="#F2D18F" />
                <stop offset="80%" stopColor="#C59C5E" />
                <stop offset="100%" stopColor="#734E24" />
              </linearGradient>
            </defs>
            <g fill="url(#heroLogoBronze)" fillRule="evenodd">
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
              fill="url(#heroLogoBronze)"
              className="uppercase"
            >
              architects
            </text>
          </svg>
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-gray-400 font-sans font-light tracking-[0.05em] max-w-2xl mx-auto mb-12 leading-relaxed text-center">
          At Biyaano Architecture, we turn ideas into inspiring spaces. We blend innovation with practicality to create timeless architectural solutions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="group relative px-8 py-4 border border-gold uppercase text-[11px] font-sans tracking-[0.25em] text-white hover:text-black font-semibold transition-colors duration-500 overflow-hidden rounded-lg"
          >
            <span className="absolute inset-y-0 left-0 w-0 bg-gold transition-all duration-500 group-hover:w-full z-[-1] rounded-lg"></span>
            Explore Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-4 uppercase text-[11px] font-sans tracking-[0.25em] text-gray-400 hover:text-white transition-colors duration-300 border border-transparent hover:border-gray-800 rounded-lg"
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
