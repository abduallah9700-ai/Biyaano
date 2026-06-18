import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Compass } from "lucide-react";
import { ProjectItem } from "../types";

interface LightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ project, onClose, onPrev, onNext }: LightboxProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-12 transition-all duration-300">
      {/* Absolute Close Backdrop Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors duration-300 z-50 bg-[#161616]/40 p-2 border border-transparent hover:border-gold/30 rounded focus:outline-none cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Main Container */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row bg-[#111111] border border-[#1E1E1E] overflow-hidden rounded-xl items-stretch relative">
        
        {/* Navigation Buttons inside Container */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-gold text-white hover:text-black transition-all duration-300 z-10 border border-gold/10 hover:border-transparent rounded-full focus:outline-none cursor-pointer"
          title="Previous Project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/70 hover:bg-gold text-white hover:text-black transition-all duration-300 z-10 border border-gold/10 hover:border-transparent rounded-full focus:outline-none cursor-pointer"
          title="Next Project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* 1. Project Image Visual */}
        <div className="lg:w-3/5 aspect-video lg:aspect-auto relative bg-black flex items-center justify-center min-h-[250px] md:min-h-[400px]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* 2. Project Details Content */}
        <div className="lg:w-2/5 p-8 md:p-10 flex flex-col justify-between bg-[#141414] border-t lg:border-t-0 lg:border-l border-[#1E1E1E]">
          <div>
            <span className="text-[10px] text-gold uppercase tracking-[0.25em] block mb-3 font-semibold">
              {project.category}
            </span>
            <h3 className="text-3xl font-serif text-white font-light mb-1 leading-snug">
              {project.title}
            </h3>
            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-sans mb-6">
              {project.subtitle}
            </p>

            <div className="h-[1px] bg-gradient-to-r from-[#222] to-transparent mb-6"></div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
              <div className="flex items-center gap-2.5 text-gray-400">
                <MapPin className="w-4 h-4 text-gold shrink-0 stroke-[1.25]" />
                <div>
                  <span className="text-[9px] text-gray-500 block uppercase tracking-widest">Location</span>
                  <span className="text-white text-xs">{project.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-gray-400">
                <Calendar className="w-4 h-4 text-gold shrink-0 stroke-[1.25]" />
                <div>
                  <span className="text-[9px] text-gray-500 block uppercase tracking-widest">Year</span>
                  <span className="text-white text-xs">{project.year}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-sans font-light mb-6">
              {project.details}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-4 bg-[#1E1E1E] hover:bg-gold hover:text-black text-white font-sans text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 focus:outline-none cursor-pointer rounded-lg"
          >
            Return to Atelier
          </button>
        </div>

      </div>
    </div>
  );
}
