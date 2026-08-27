import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

interface HeroProps {
  onOpenInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  const navItems = [
    { name: 'Vision', href: '#about' },
    { name: 'Programs', href: '#features' },
    { name: '4 Pillars', href: '#features' },
    { name: 'Services', href: '#features' },
    { name: 'Inquiries', href: '#inquiries' },
  ];

  return (
    <section className="relative h-screen w-full p-3 sm:p-4 md:p-6 bg-black overflow-hidden select-none">
      {/* Inset Framed Container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black border border-neutral-800/80 shadow-2xl">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-65 scale-105"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise Overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/75 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFFF00]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Navbar: Hanging Pill at Top Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <nav className="bg-black/90 backdrop-blur-md rounded-b-2xl md:rounded-b-3xl px-4 py-2.5 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-12 shadow-2xl border-b border-x border-neutral-800">
            <a href="#" className="flex items-center gap-1.5 font-bold text-white tracking-tight text-xs sm:text-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFFF00]" />
              <span>FUTURO<span className="text-[#FFFF00]">WORKS</span></span>
            </a>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{
                  color: hoveredNav === index ? '#FFFF00' : 'rgba(255, 255, 255, 0.75)',
                }}
                className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Hero Content (Bottom-Aligned) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 z-10">
          
          {/* Top Pill Accent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="inline-flex items-center gap-1.5 bg-[#FFFF00]/15 border border-[#FFFF00]/40 text-[#FFFF00] text-[9px] sm:text-[11px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
              <Sparkles size={11} />
              THE AVCGI RENAISSANCE
            </span>
            <span className="text-xs sm:text-sm font-serif italic text-neutral-300">
              "We don't just tell stories. We build worlds."
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
            
            {/* Left 8 Columns: Giant Brand Heading "Futuro Works*" */}
            <div className="lg:col-span-8">
              <h1
                style={{ color: '#FFFFFF' }}
                className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[11vw] xl:text-[10vw] font-extrabold leading-[0.85] tracking-[-0.06em]"
              >
                <WordsPullUp text="Futuro Works" showAsterisk={true} />
              </h1>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#FFFF00] mt-2">
                Future Together · Animation · VFX · Gaming · Graphics
              </p>
            </div>

            {/* Right 4 Columns: Minimal High-Intent Description & CTA */}
            <div className="lg:col-span-4 flex flex-col justify-end space-y-4 pb-2 md:pb-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-neutral-300 text-xs sm:text-sm md:text-[15px] leading-[1.3] font-normal"
              >
                Hyderabad's premier AVCGI creative powerhouse founded by <strong className="text-white">M. Sri Vatsha</strong>. Powering brands, filmmakers, gamers, and worldbuilders with studio-standard mastery.
              </motion.p>

              {/* CTA Button: "Join the Lab" */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <button
                  onClick={onOpenInquiry}
                  className="group inline-flex items-center gap-2 hover:gap-3 bg-[#FFFF00] hover:bg-[#D0D006] text-black font-bold text-xs sm:text-sm uppercase tracking-wider pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,255,0,0.3)]"
                >
                  <span>Join the Lab</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black flex items-center justify-center text-[#FFFF00] group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={16} />
                  </div>
                </button>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
