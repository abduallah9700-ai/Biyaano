import { useState } from "react";
import { X, Copy, Check, FileCode, Download, Eye } from "lucide-react";
import { STANDALONE_HTML } from "../data/standaloneHtml";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExportModal({ isOpen, onClose }: ExportModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(STANDALONE_HTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([STANDALONE_HTML], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "index.html";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 m-0 transition-opacity duration-300 backdrop-blur-sm">
      <div className="max-w-4xl w-full bg-[#111111] border border-[#1E1E1E] flex flex-col h-[85vh] shadow-[0_0_50px_rgba(184,134,78,0.15)] overflow-hidden rounded-xl">
        
        {/* Header toolbar */}
        <div className="p-6 border-b border-[#1E1E1E] flex items-center justify-between bg-[#141414]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold/10 text-gold border border-gold/20 rounded">
              <FileCode className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-lg font-serif text-white font-medium">
                Atelier Export Hub
              </h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">
                Self-contained single-file: index.html
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white border border-transparent hover:border-[#333] hover:bg-[#1E1E1E] p-1.5 rounded transition-all duration-300 focus:outline-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative strip */}
        <div className="bg-[#B8864E]/10 border-b border-[#B8864E]/20 px-6 py-3.5 flex items-center justify-between text-xs text-gold font-sans font-light">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 shrink-0" />
            <span>This contains the exact requested HTML, CSS, & Vanilla JS (no frameworks).</span>
          </div>
          <div className="hidden sm:flex gap-4">
            <span>• Fully Responsive</span>
            <span>• Smooth Scrolling</span>
            <span>• Intersection Observer</span>
          </div>
        </div>

        {/* Code Content display */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs text-gray-300 bg-black/45 leading-relaxed relative selection:bg-gold/30 selection:text-white">
          <pre className="whitespace-pre-wrap select-all font-mono">
            {STANDALONE_HTML}
          </pre>
        </div>

        {/* Bottom actions footer bar */}
        <div className="p-6 border-t border-[#1E1E1E] flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#141414]">
          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-sans font-light">
            File size: 21 KB • 100% Standalone
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Direct Copy button */}
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-none py-3.5 px-6 border border-gold uppercase text-[10px] font-sans tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300 font-bold focus:outline-none flex items-center justify-center gap-2 cursor-pointer rounded-lg"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[2]" />
                  Copied to Clipboard!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 stroke-[1.75]" />
                  Copy Code
                </>
              )}
            </button>

            {/* Direct HTML Download button */}
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none py-3.5 px-6 bg-gold text-black uppercase text-[10px] font-sans tracking-widest hover:bg-[#A3733F] transition-all duration-300 font-bold focus:outline-none flex items-center justify-center gap-2 cursor-pointer shadow-lg rounded-lg"
            >
              <Download className="w-3.5 h-3.5 stroke-[2]" />
              Download index.html
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
