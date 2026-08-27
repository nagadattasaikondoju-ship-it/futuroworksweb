import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Users, Globe, Film } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

interface HeroSectionProps {
  onOpenConnect: (tab?: 'whatsapp' | 'inquiry' | 'linktree') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConnect }) => {
  const categories = [
    "Animation",
    "VFX (Visual Effects)",
    "Gaming & Unreal Engine",
    "Graphics & Motion",
    "Comics & Storytelling",
    "Cinematography",
    "Photography",
    "Virtual Production"
  ];

  return (
    <section className="relative h-screen min-h-[700px] w-full p-2.5 sm:p-4 md:p-6 flex flex-col justify-between overflow-hidden">
      {/* Outer Inset Framed Container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-neutral-800/80 bg-black flex flex-col justify-between shadow-2xl">
        
        {/* Background Video / Media */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 opacity-60"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          />
          {/* Noise overlay */}
          <div className="noise-overlay absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none" />
          
          {/* Cinematic lighting gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFFF00]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Top Spacer for floating Navbar */}
        <div className="h-20 md:h-24 z-10" />

        {/* Category Marquee Strip */}
        <div className="relative z-10 w-full overflow-hidden border-y border-neutral-800/60 bg-black/40 backdrop-blur-md py-2.5">
          <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
            {[...categories, ...categories, ...categories].map((category, index) => (
              <div key={index} className="inline-flex items-center gap-3 text-xs tracking-wider uppercase font-semibold text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFFF00]" />
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Bottom-Aligned Content Grid */}
        <div className="relative z-10 px-5 sm:px-8 md:px-12 pb-6 md:pb-10 pt-4 flex flex-col justify-end">
          
          {/* Positioning statement in editorial serif italic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="inline-flex items-center gap-1.5 bg-[#FFFF00]/15 border border-[#FFFF00]/40 text-[#FFFF00] text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              <Sparkles size={12} />
              THE AVCGI RENAISSANCE
            </span>
            <span className="text-xs sm:text-sm font-serif italic text-neutral-300">
              "We don't just tell stories. We build worlds."
            </span>
          </motion.div>

          {/* Main 12-Column Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            
            {/* Left 8 Cols: Giant Brand Heading */}
            <div className="lg:col-span-8">
              <h1 className="text-[17vw] sm:text-[15vw] md:text-[13vw] lg:text-[10.5vw] font-extrabold tracking-[-0.05em] leading-[0.85] text-[#F5F5F5] select-none">
                <WordsPullUp 
                  text="FUTURO WORKS"
                  showAsterisk={true}
                  className="font-sans"
                  wordClassName="text-[#F5F5F5] hover:text-[#FFFF00] transition-colors duration-300"
                />
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-[#FFFF00] mt-1"
              >
                Future Together · Animation · VFX · Gaming · Graphics
              </motion.p>
            </div>

            {/* Right 4 Cols: Description & CTA Pill Buttons */}
            <div className="lg:col-span-4 flex flex-col justify-end space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-neutral-300 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal"
              >
                Hyderabad-based AVCGI education & creative studio founded by <strong className="text-white">M. Sri Vatsha</strong>. Powering brands, filmmakers, gamers, and dreamers with world-class toolsets.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-3 pt-1"
              >
                <button
                  onClick={() => onOpenConnect('whatsapp')}
                  className="group relative inline-flex items-center gap-3 bg-[#FFFF00] hover:bg-[#D0D006] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider pl-5 pr-2 py-2 rounded-full transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,255,0,0.35)]"
                >
                  <span>Join Community</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#FFFF00] transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5">
                    <ArrowRight size={14} />
                  </div>
                </button>

                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-full border border-neutral-700/80 hover:border-[#FFFF00]/50 transition-all duration-300"
                >
                  <span>Explore Programs</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Bottom Fast Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-6 pt-4 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFFF00] flex-shrink-0">
                <Users size={16} />
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-white">1,130+</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400">Creators Trained</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFFF00] flex-shrink-0">
                <Globe size={16} />
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-[#FFFF00]">$400B+</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400">Global Industry</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFFF00] flex-shrink-0">
                <Film size={16} />
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-white">4 Pillars</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400">Training Ecosystem</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFFF00] flex-shrink-0">
                <Award size={16} />
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-white">Studio Grade</div>
                <div className="text-[10px] uppercase tracking-wider text-neutral-400">Industry Pipeline</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
