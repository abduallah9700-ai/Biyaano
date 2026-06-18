import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Client {
  id: string;
  name: string;
  logo: ReactNode;
}

export default function Clients() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const clients: Client[] = [
    {
      id: "dsoa",
      name: "Dubai Silicon Oasis Authority",
      logo: (
        <div className="flex flex-col items-center justify-center text-center">
          <svg className="w-12 h-6 text-gold/80 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 12">
            <circle cx="4" cy="6" r="1.5" className="fill-gold/40" />
            <circle cx="12" cy="3" r="1.5" className="fill-gold/40" />
            <circle cx="12" cy="9" r="1.5" className="fill-gold/40" />
            <circle cx="20" cy="6" r="1.5" className="fill-gold/40" />
            <line x1="4" y1="6" x2="12" y2="3" strokeWidth="1" />
            <line x1="4" y1="6" x2="12" y2="9" strokeWidth="1" />
            <line x1="12" y1="3" x2="20" y2="6" strokeWidth="1" />
            <line x1="12" y1="9" x2="20" y2="6" strokeWidth="1" />
            <line x1="12" y1="3" x2="12" y2="9" strokeWidth="1" />
          </svg>
          <span className="text-[7px] text-white/80 font-semibold leading-tight font-sans">سلطة واحة دبي للسيليكون</span>
          <span className="text-[5px] text-white/40 uppercase tracking-[0.1em]">Dubai Silicon Oasis Authority</span>
        </div>
      ),
    },
    {
      id: "dubai",
      name: "Dubai",
      logo: (
        <div className="flex items-center justify-center">
          <span className="text-xl font-black tracking-tighter text-gold font-mono select-none">DU</span>
          <span className="text-xl font-black tracking-tighter text-white/90 font-mono select-none">B</span>
          <span className="text-xl font-black tracking-tighter text-gold font-mono select-none">A</span>
          <span className="text-xl font-black tracking-tighter text-white/90 font-mono select-none">I</span>
        </div>
      ),
    },
    {
      id: "dpg",
      name: "Dubai Properties Group",
      logo: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="grid grid-cols-2 gap-1 w-6 h-6 rotate-45 mb-1.5 mx-auto">
            <div className="w-2.5 h-2.5 bg-gold"></div>
            <div className="w-2.5 h-2.5 bg-gold/70"></div>
            <div className="w-2.5 h-2.5 bg-gold/45"></div>
            <div className="w-2.5 h-2.5 bg-gold/[0.15]"></div>
          </div>
          <span className="text-[7px] text-white/80 font-bold leading-none uppercase tracking-[0.05em]">Dubai Properties</span>
          <span className="text-[5px] text-white/40 uppercase tracking-widest leading-none mt-0.5">Group</span>
        </div>
      ),
    },
    {
      id: "kaec",
      name: "King Abdullah Economic City",
      logo: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-end gap-0.5 mb-1 justify-center">
            <div className="w-1.5 h-4 bg-gold"></div>
            <div className="w-2.5 h-5 bg-gold/80 rounded-t-sm"></div>
            <div className="w-1.5 h-3 bg-white/60"></div>
            <div className="w-3 h-4 bg-white/30"></div>
          </div>
          <span className="text-[6px] text-white/90 font-extrabold leading-none">مدينة الملك عبدالله</span>
          <span className="text-[5px] text-gold uppercase tracking-[0.05em] leading-none mt-0.5">Economic City</span>
        </div>
      ),
    },
    {
      id: "meraas",
      name: "Meraas",
      logo: (
        <div className="flex flex-col items-center justify-center text-center">
          <svg className="w-10 h-7 text-gold mb-1" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 16">
            <path d="M4 14V2l8 8 8-8v12" />
            <line x1="12" y1="10" x2="12" y2="15" />
          </svg>
          <span className="text-[8px] text-white/80 uppercase tracking-[0.3em] font-sans font-bold">Meraas</span>
        </div>
      ),
    },
    {
      id: "moh",
      name: "Ministry of Housing",
      logo: (
        <div className="flex flex-col items-center justify-center text-center">
          <svg className="w-8 h-8 text-gold mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
            <path d="M12 22V12" />
            <path d="M12 12l8-5M12 12L4 7" />
            <circle cx="12" cy="12" r="3" className="fill-gold/10 text-gold" />
          </svg>
          <span className="text-[7px] text-white/95 font-extrabold leading-none">وزارة الإسكان</span>
          <span className="text-[5px] text-white/40 uppercase tracking-wider mt-0.5">Ministry of Housing</span>
        </div>
      ),
    },
    {
      id: "omniyat",
      name: "Omniyat",
      logo: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative font-sans text-xs font-black tracking-[0.18em] text-white">
            OMNIYAT
            <span className="absolute right-[1px] top-0 text-[5px] text-gold font-bold">•</span>
          </div>
          <span className="text-[4px] text-white/40 uppercase tracking-[0.4em] mt-0.5">The Art of Elevation</span>
        </div>
      ),
    },
    {
      id: "rafal",
      name: "Rafal",
      logo: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center leading-none mb-1">
            <div className="w-4 h-0.5 bg-[#B88E52] mb-0.5 opacity-40"></div>
            <div className="w-5 h-0.5 bg-[#B88E52] mb-0.5 opacity-60"></div>
            <div className="w-6 h-0.5 bg-[#B88E52] mb-0.5 opacity-80"></div>
            <div className="w-7 h-0.5 bg-[#B88E52]"></div>
          </div>
          <span className="text-[7px] text-[#B88E52] font-semibold tracking-widest leading-none">رافال</span>
          <span className="text-[6px] text-white uppercase tracking-[0.2em] font-extrabold mt-0.5">Rafal</span>
        </div>
      ),
    },
    {
      id: "wasl",
      name: "Wasl",
      logo: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-1">
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
              <path d="M12 12m-6 0a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
            </svg>
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-[8px] text-gold font-bold leading-none">وصل</span>
              <span className="text-[8px] text-white font-extrabold tracking-tight leading-none mt-0.5">wasl</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "emaar",
      name: "Emaar",
      logo: (
        <div className="flex flex-col items-center justify-center text-center">
          <svg className="w-8 h-8 text-gold mb-1" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 24 24">
            <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
            <circle cx="12" cy="12" r="3" className="fill-gold/10 text-gold" />
            <polygon points="12,2 14,8 18,12 14,16 12,22 10,16 6,12 10,8" className="fill-gold text-transparent" />
          </svg>
          <span className="text-[8px] text-white uppercase tracking-[0.25em] font-black font-sans leading-none">Emaar</span>
        </div>
      ),
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const updateArrows = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("scroll", updateArrows);
      // Run once on load
      updateArrows();
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", updateArrows);
      }
    };
  }, []);

  return (
    <section className="relative py-24 text-white overflow-hidden border-t border-[#151515] bg-[#0A0A0A]">
      {/* Organic Structural background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80"
          alt="Parametric Architecture Backing"
          className="w-full h-full object-cover opacity-[0.25] blur-[1px]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-[11px] uppercase tracking-[0.3em] font-semibold mb-3 block">
            Esteemed Collaborators
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white tracking-wide">
            Featured Clients
          </h2>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6"></div>
        </div>

        {/* Carousel Frame Wrapper */}
        <div className="relative group">
          {/* Right/Left Arrows */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/85 hover:bg-gold text-[#888] hover:text-black transition-all duration-300 rounded-full border border-gold/15 hover:border-transparent opacity-100 focus:outline-none cursor-pointer shadow-lg"
            title="Previous Clients"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/85 hover:bg-gold text-[#888] hover:text-black transition-all duration-300 rounded-full border border-gold/15 hover:border-transparent opacity-100 focus:outline-none cursor-pointer shadow-lg"
            title="Next Clients"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Scrolling client list */}
          <div
            ref={containerRef}
            className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-4 px-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-shrink-0 w-[200px] md:w-[220px] aspect-[16/10] bg-card-bg/60 backdrop-blur-md rounded-xl flex items-center justify-center p-6 border border-white/5 hover:border-gold/30 hover:shadow-[0_8px_25px_rgba(184,134,78,0.06)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-full h-full flex items-center justify-center select-none">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
