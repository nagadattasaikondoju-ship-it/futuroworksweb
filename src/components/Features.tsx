import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle, TextSegment } from './WordsPullUpMultiStyle';
import { AnimatedCounter } from './AnimatedCounter';

interface FeaturesProps {
  onOpenInquiry?: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenInquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const headerSegments: TextSegment[] = [
    {
      text: "Studio-grade pipelines for visionary worldbuilders.",
      className: "text-white font-normal block",
    },
    {
      text: "Built for pure vision. Powered by industry tools.",
      className: "text-gray-500 font-normal block mt-1",
    },
  ];

  const cards = [
    {
      type: 'image',
      imageUrl: '/assets/image12.jpeg',
      trainedTarget: 1130,
    },
    {
      type: 'content',
      number: '01',
      title: '3D & 2D Animation.',
      tools: 'Maya · Blender · Toon Boom',
      studentsCount: 150,
      icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
      items: [
        'Character rigging & keyframe motion',
        '2D classical layout & animatics',
        'Cinematic lighting & PBR texturing',
        'Production pipeline timing',
      ],
    },
    {
      type: 'content',
      number: '02',
      title: 'Visual Effects (VFX).',
      tools: 'Nuke · Houdini · Unreal 5',
      studentsCount: 300,
      icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
      items: [
        'Node-based deep compositing in Nuke',
        'Pyro, fluid & destruction in Houdini',
        'Unreal Engine 5 virtual production sets',
      ],
    },
    {
      type: 'content',
      number: '03',
      title: 'Game Dev & Worlds.',
      tools: 'Unreal Engine 5 · Unity',
      studentsCount: 480,
      icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
      items: [
        'Real-time Lumen & Nanite worldbuilding',
        'Blueprints & gameplay mechanics',
        'Cross-platform PC & mobile systems',
      ],
    },
  ];

  return (
    <section id="features" className="relative min-h-screen bg-black py-20 md:py-32 px-4 sm:px-6">
      {/* Noise Texture */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 relative z-10">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed">
          <WordsPullUpMultiStyle segments={headerSegments} />
        </div>
      </div>

      {/* 4-Column Card Grid */}
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[490px] relative z-10"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.65,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full rounded-2xl md:rounded-3xl overflow-hidden relative"
          >
            {card.type === 'image' ? (
              /* Card 1: Authentic Futuro Works Crew Photo */
              <div className="relative w-full h-full min-h-[380px] lg:min-h-full rounded-2xl md:rounded-3xl overflow-hidden bg-black flex flex-col justify-end p-6 md:p-8 border border-neutral-800 group">
                <img
                  src={card.imageUrl}
                  alt="Futuro Works Founder & Crew"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />
                <span className="relative z-10 text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFFF00] shadow-[0_0_8px_#FFFF00]" />
                  <span>
                    Your creative canvas.{' '}
                    <span className="text-[#FFFF00] font-mono">
                      <AnimatedCounter to={card.trainedTarget || 1130} suffix="+ trained." duration={1.8} />
                    </span>
                  </span>
                </span>
              </div>
            ) : (
              /* Cards 2, 3, 4: Content Cards */
              <div className="bg-[#181818] border border-neutral-800/80 hover:border-[#FFFF00]/50 w-full h-full min-h-[380px] lg:min-h-full rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-colors duration-300">
                <div>
                  {/* Top Bar: Icon & Students Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover"
                      loading="lazy"
                    />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFFF00] bg-[#FFFF00]/10 px-2 py-0.5 rounded-full font-mono">
                      <AnimatedCounter to={card.studentsCount || 100} suffix="+ Students" duration={1.5} />
                    </span>
                  </div>

                  {/* Title with Number */}
                  <div className="mb-4">
                    <span className="text-gray-500 font-mono text-xs block mb-1">
                      {card.number}
                    </span>
                    <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
                      {card.title}
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-400 block mt-0.5">
                      {card.tools}
                    </span>
                  </div>

                  {/* Checklist items */}
                  <ul className="space-y-2.5 mt-4 pt-3 border-t border-neutral-800/80">
                    {card.items?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <Check size={14} className="text-[#FFFF00] mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-300 font-normal leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link with -45 deg rotated arrow */}
                <div className="pt-5 border-t border-neutral-800">
                  <button
                    onClick={onOpenInquiry}
                    className="group inline-flex items-center gap-1.5 text-xs text-[#FFFF00] font-bold uppercase tracking-wider hover:text-white transition-colors"
                  >
                    <span>Explore Syllabus</span>
                    <ArrowRight
                      size={14}
                      className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
