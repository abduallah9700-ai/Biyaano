import WhatsappIcon from "./WhatsappIcon";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
}

export default function FloatingWhatsApp({ phoneNumber = "252612536518" }: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Biyaano%20Architects%2C%20I%20would%20like%20to%20inquire%20about%20your%20architectural%20services.`;

  return (
    <aside aria-label="Customer support" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 mr-3 px-3.5 py-1.5 rounded-full bg-[#0a0a0a]/90 backdrop-blur-md border border-[#C58E5C]/30 text-white text-[11px] font-sans tracking-wide shadow-xl">
        Chat with us on <span className="text-[#25D366] font-semibold">WhatsApp</span>
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20"
      >
        {/* Subtle breathing glow ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <WhatsappIcon className="w-6 h-6 relative z-10" />
      </a>
    </aside>
  );
}
