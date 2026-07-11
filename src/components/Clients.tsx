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
      id: "hayat",
      name: "Hayat Market",
      logo: (
        <div className="flex flex-col items-center justify-center text-center w-[90px] h-[90px] bg-[#D12B27] rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] border border-[#b21c19]">
          <div className="flex flex-col items-center justify-center -mt-1">
            <svg className="w-5 h-5 text-[#86C13B] mb-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C17 8 14 8 12 10C10 12 10 15 10 15C10 15 13 15 15 13C17 11 17 8 17 8Z"/>
            </svg>
            <span className="text-[20px] font-black tracking-tighter text-[#1C6835] leading-none font-sans transform scale-y-[1.3] drop-shadow-sm">HAYAT</span>
            <span className="text-[12px] text-white font-serif italic leading-none mt-1.5">market</span>
          </div>
        </div>
      ),
    },
    {
      id: "mhc",
      name: "Mogadishu Health Cluster",
      logo: (
        <div className="flex items-center justify-center w-[150px] h-[150px] bg-white rounded-full p-2 border-[1px] border-gray-100 shadow-sm scale-75">
          <div className="flex items-center gap-1.5">
            {/* Heart/Tooth Logo */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path d="M12 21.5C12 21.5 4 16 4 9.5C4 6.5 6.5 4 9.5 4C11.5 4 12 6 12 6C12 6 12.5 4 14.5 4C17.5 4 20 6.5 20 9.5C20 16 12 21.5 12 21.5Z" stroke="#3598D4" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M8 21 L10 16 M16 21 L14 16" stroke="#255A9C" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            {/* Text */}
            <div className="flex flex-col text-left border-l-[1.5px] border-[#2A8FCA]/30 pl-2">
              <span className="text-[#1F5796] font-bold text-[10px] leading-tight font-sans tracking-tight">Mogadishu</span>
              <span className="text-[#1F5796] font-bold text-[10px] leading-tight font-sans tracking-tight">Health Cluster</span>
              <span className="text-[#1F5796] font-medium text-[8px] leading-tight font-sans mt-0.5">تجمع مقديشو الصحي</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "dahabshiil",
      name: "Dahabshiil",
      logo: (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative pt-3">
             <svg viewBox="0 0 120 30" fill="none" className="w-24 h-6 absolute top-0 left-1">
                <path d="M 0 30 Q 60 -5 120 30" stroke="#3B9E35" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 5 30 Q 60 0 115 30" stroke="#3B9E35" strokeWidth="1.5" strokeLinecap="round" />
             </svg>
             <div className="flex items-center gap-0 relative z-10 pt-1">
               <div className="relative flex items-center">
                 {/* Custom D with checkmark */}
                 <svg viewBox="0 0 24 24" className="w-6 h-6">
                   <path d="M4 2 L12 2 C18 2 20 8 20 12 C20 16 18 22 12 22 L4 22 Z" fill="white"/>
                   <path d="M8 6 L12 6 C16 6 16 18 12 18 L8 18 Z" fill="#141414"/>
                   {/* Checkmark crossing D */}
                   <path d="M1 14 L7 20 L22 5 L18 3 L7 14 L4 11 Z" fill="#F0C808"/>
                 </svg>
                 <span className="text-xl font-bold text-white font-sans tracking-tight ml-[1px]">ahabshiil</span>
               </div>
             </div>
          </div>
          <span className="text-[7.5px] italic text-white font-medium mt-1 tracking-wider">your trusted financial partner</span>
        </div>
      ),
    },
    {
      id: "sombank",
      name: "SOM BANK",
      logo: (
        <div className="flex flex-col items-center justify-center bg-white rounded-full w-[100px] h-[100px] border-[4px] border-[#DE2027]">
          <div className="flex items-center -mt-1">
            <div className="bg-[#263784] px-1.5 py-0.5 relative">
              <div className="absolute top-[-5px] right-0 w-0 h-0 border-r-[8px] border-r-transparent border-b-[5px] border-b-[#E02127]"></div>
              <span className="text-[12px] font-bold text-white font-sans tracking-wide">SOM</span>
            </div>
            <div className="text-[#E02127] pl-1 font-bold text-[14px] tracking-wide font-sans">
              BANK
            </div>
          </div>
          <span className="text-[#263784] text-[8px] font-bold mt-1 tracking-wide">Bank for all</span>
        </div>
      ),
    },
    {
      id: "hormuud",
      name: "Hormuud",
      logo: (
        <div className="flex items-center justify-center">
          <img src="/hormuud-logo.jpg" alt="Hormuud Logo" className="h-[90px] w-auto object-contain rounded-lg shadow-sm" />
        </div>
      ),
    },
    {
      id: "diamond",
      name: "Diamond",
      logo: (
        <div className="flex items-center justify-center">
          <img src="/diamond-logo.png" alt="Diamond Logo" className="h-[90px] w-auto object-contain" />
        </div>
      ),
    }
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
    <section className="relative py-24 text-white overflow-hidden border-t border-[#151515] bg-transparent">
      {/* Organic Structural background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0d0906]/40 z-10"></div>
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
