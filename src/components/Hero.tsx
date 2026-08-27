import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

interface HeroProps {
  onOpenInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  const navItems = [
    { name: 'Our story', href: '#about' },
    { name: 'Collective', href: '#features' },
    { name: 'Workshops', href: '#features' },
    { name: 'Programs', href: '#features' },
    { name: 'Inquiries', href: '#inquiries' },
  ];

  return (
    <section className="relative h-screen w-full p-4 md:p-6 bg-black overflow-hidden select-none">
      {/* Inset Framed Container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise Overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar: Hanging Pill at Top Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-lg border-b border-x border-neutral-900">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
                style={{
                  color: hoveredNav === index ? '#E1E0CC' : 'rgba(225, 224, 204, 0.8)',
                }}
                className="text-[10px] sm:text-xs md:text-sm font-normal tracking-wide transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Hero Content (Bottom-Aligned) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
            
            {/* Left 8 Columns: Giant Heading "Prisma*" */}
            <div className="lg:col-span-8">
              <h1
                style={{ color: '#E1E0CC' }}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
              >
                <WordsPullUp text="Prisma" showAsterisk={true} />
              </h1>
            </div>

            {/* Right 4 Columns: Description Paragraph & CTA Button */}
            <div className="lg:col-span-4 flex flex-col justify-end space-y-4 pb-2 md:pb-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] font-normal"
              >
                Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
              </motion.p>

              {/* CTA Button: "Join the lab" */}
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
                  className="group inline-flex items-center gap-2 hover:gap-3 bg-primary text-black font-medium text-sm sm:text-base pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full transition-all duration-300 active:scale-95 shadow-md"
                >
                  <span>Join the lab</span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={18} />
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
