import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle, TextSegment } from './WordsPullUpMultiStyle';

export const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const headerSegments: TextSegment[] = [
    {
      text: "Studio-grade workflows for visionary creators.",
      className: "text-[#E1E0CC] font-normal block",
    },
    {
      text: "Built for pure vision. Powered by art.",
      className: "text-gray-500 font-normal block mt-1",
    },
  ];

  const cards = [
    {
      type: 'video',
      videoUrl:
        'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
      bottomText: 'Your creative canvas.',
    },
    {
      type: 'content',
      number: '01',
      title: 'Project Storyboard.',
      icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
      items: [
        'Dynamic timeline planning',
        'Frame-accurate narrative mapping',
        'Collaborative shot lists',
        'Direct asset synchronization',
      ],
    },
    {
      type: 'content',
      number: '02',
      title: 'Smart Critiques.',
      icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
      items: [
        'Automated lighting & color analysis',
        'Contextual director creative notes',
        'Seamless NLE & 3D tool integration',
      ],
    },
    {
      type: 'content',
      number: '03',
      title: 'Immersion Capsule.',
      icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
      items: [
        'Zero-interruption focus mode',
        'Curated acoustic soundscapes',
        'Automated production sync',
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
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px] relative z-10"
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
            {card.type === 'video' ? (
              /* Card 1: Full Video Background */
              <div className="relative w-full h-full min-h-[380px] lg:min-h-full rounded-2xl md:rounded-3xl overflow-hidden bg-black flex flex-col justify-end p-6 md:p-8">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  src={card.videoUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span
                  style={{ color: '#E1E0CC' }}
                  className="relative z-10 text-sm sm:text-base font-normal"
                >
                  {card.bottomText}
                </span>
              </div>
            ) : (
              /* Cards 2, 3, 4: Content Cards */
              <div className="bg-[#212121] w-full h-full min-h-[380px] lg:min-h-full rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Top Icon */}
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover mb-6"
                    loading="lazy"
                  />

                  {/* Title with Number */}
                  <div className="mb-6">
                    <span className="text-gray-500 font-mono text-xs block mb-1">
                      {card.number}
                    </span>
                    <h3 className="text-white text-lg sm:text-xl font-normal tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Checklist items */}
                  <ul className="space-y-3">
                    {card.items?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 font-normal leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link with -45 deg rotated arrow */}
                <div className="pt-6 border-t border-neutral-800">
                  <a
                    href="#inquiries"
                    className="group inline-flex items-center gap-1.5 text-xs text-primary font-normal hover:text-white transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight
                      size={14}
                      className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
