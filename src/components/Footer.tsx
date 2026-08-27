import React from 'react';
import { FuturoBadge } from './FuturoBadge';
import { MessageCircle, ExternalLink, ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenConnect: (tab?: 'whatsapp' | 'inquiry' | 'linktree') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConnect }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-neutral-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#FFFF00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <FuturoBadge size={44} showText={true} />
            
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed font-normal">
              An AVCGI education & creative studio in Hyderabad. We don't just tell stories. We build worlds.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenConnect('whatsapp')}
                className="inline-flex items-center gap-2 bg-[#FFFF00] hover:bg-[#D0D006] text-black text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-transform active:scale-95 shadow-[0_0_15px_rgba(255,255,0,0.25)]"
              >
                <MessageCircle size={14} />
                WhatsApp Community
              </button>
              <button
                onClick={() => onOpenConnect('linktree')}
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium px-4 py-2 rounded-full border border-neutral-800 transition-colors"
              >
                <ExternalLink size={13} />
                Linktree
              </button>
            </div>
          </div>

          {/* Programs Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#programs" className="hover:text-[#FFFF00] transition-colors">3D & 2D Animation</a></li>
              <li><a href="#programs" className="hover:text-[#FFFF00] transition-colors">Visual Effects (VFX)</a></li>
              <li><a href="#programs" className="hover:text-[#FFFF00] transition-colors">Game Development</a></li>
              <li><a href="#programs" className="hover:text-[#FFFF00] transition-colors">Graphics & Comics</a></li>
              <li><a href="#programs" className="hover:text-[#FFFF00] transition-colors">Virtual Production</a></li>
            </ul>
          </div>

          {/* 4 Pillars Col */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Resource Pillars
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#pillars" className="hover:text-[#FFFF00] transition-colors">Education & Training</a></li>
              <li><a href="#pillars" className="hover:text-[#FFFF00] transition-colors">Mentorship Programs</a></li>
              <li><a href="#pillars" className="hover:text-[#FFFF00] transition-colors">Industry Collaborations</a></li>
              <li><a href="#pillars" className="hover:text-[#FFFF00] transition-colors">Global Exposure</a></li>
              <li><a href="#market" className="hover:text-[#FFFF00] transition-colors">Market Revolution</a></li>
            </ul>
          </div>

          {/* Connect & Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#partners" className="hover:text-[#FFFF00] transition-colors">Hyderabad Data & AI</a></li>
              <li><a href="#partners" className="hover:text-[#FFFF00] transition-colors">Project Nonfiction</a></li>
              <li><a href="#partners" className="hover:text-[#FFFF00] transition-colors">OneLoop Network</a></li>
              <li><span className="text-[#FFFF00] flex items-center gap-1"><Sparkles size={11} /> MS Fabric Hackathon '26</span></li>
              <li><button onClick={() => onOpenConnect('inquiry')} className="hover:text-[#FFFF00] transition-colors">Studio Inquiries</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Futuro Works. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#FFFF00]">"Future Together"</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">Hyderabad, Telangana, India</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-[#FFFF00] hover:text-black border border-neutral-800 flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
