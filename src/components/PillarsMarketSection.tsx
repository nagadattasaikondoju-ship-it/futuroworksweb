import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, Compass, Award, Briefcase, Globe2 } from 'lucide-react';

interface PillarsMarketSectionProps {
  onOpenConnect: (tab?: 'whatsapp' | 'inquiry' | 'linktree') => void;
}

export const PillarsMarketSection: React.FC<PillarsMarketSectionProps> = ({ onOpenConnect }) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const pillars = [
    {
      id: "education",
      number: "01",
      tag: "Pillar One",
      title: "Education & Training",
      subtitle: "Hands-on Mastery of Studio Workflows",
      icon: Compass,
      description: "Intensive masterclasses and hands-on laboratory training covering state-of-the-art AVGCI pipelines. We replace abstract textbook theory with real project-based execution.",
      points: [
        "Daily hands-on lab sessions on high-end production rigs",
        "Curriculum updated in real-time with Hollywood & AAA studio tools",
        "Asset creation, lighting, nodal compositing & real-time rendering"
      ]
    },
    {
      id: "mentorship",
      number: "02",
      tag: "Pillar Two",
      title: "Mentorship Programs",
      subtitle: "Direct Access to Industry Supervisors",
      icon: Award,
      description: "Pairs aspiring creative talent directly with established art directors, lead animators, and VFX supervisors who provide granular feedback on shot execution.",
      points: [
        "1-on-1 portfolio and showreel critique sessions",
        "Individualized career roadmaps for studio placement",
        "Insider guidance on studio hiring tests and art direction"
      ]
    },
    {
      id: "collaborations",
      number: "03",
      tag: "Pillar Three",
      title: "Industry Collaborations",
      subtitle: "Live Commercial Briefs & Studio Credits",
      icon: Briefcase,
      description: "Collaborations with studio partners and the OneLoop ecosystem. Students earn real-world production credits working on client commercial campaigns and indie game prototypes.",
      points: [
        "Live brief participation with actual brand deliverables",
        "Credit on commercial releases, teasers, and film VFX shots",
        "Experience in studio production hierarchy and deadline management"
      ]
    },
    {
      id: "exposure",
      number: "04",
      tag: "Pillar Four",
      title: "Global Exposure",
      subtitle: "Festival Showcases & International Exchange",
      icon: Globe2,
      description: "We take Indian creative talent to the global stage through international festival submissions, student game showcases, and hackathon keynote platforms.",
      points: [
        "Showcase at Microsoft Fabric Hackathon 2026 Hyderabad",
        "Submissions to international animation & short film festivals",
        "Global community networking across AVCGI creative hubs"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.2) {
            setActivePillarIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPillar = (index: number) => {
    const target = cardRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="pillars" className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#FFFF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: Sticky Left Column + Scrolling Right Column (Drift Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Market Stats & Pillar Nav */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                <TrendingUp size={14} />
                THE MARKET REVOLUTION
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                AVCGI is not just a career — <span className="text-[#FFFF00] font-serif italic font-normal">it's a revolution.</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed font-normal">
                Every blockbuster film demands visual effects. Every next-gen game needs worldbuilders. Every modern brand battles on high-end visual storytelling.
              </p>
            </div>

            {/* Market High-Impact Callout Box */}
            <div className="bg-[#0D0D0D] border border-neutral-800 rounded-3xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs uppercase font-bold text-neutral-400">Industry Expansion</span>
                <span className="text-xs font-mono text-[#FFFF00] font-bold">2026-2030</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#FFFF00]">$400 Billion+</div>
                  <p className="text-xs text-neutral-300 mt-0.5">Projected global Animation, VFX & Interactive Media market</p>
                </div>
                <div className="pt-2 border-t border-neutral-900">
                  <div className="text-lg font-bold text-white">Gaming &gt; Movies + Music</div>
                  <p className="text-xs text-neutral-400 mt-0.5">Interactive entertainment revenue now exceeds films and music combined worldwide.</p>
                </div>
              </div>
            </div>

            {/* Interactive Pillar Quick-Jump Buttons (Desktop) */}
            <div className="hidden lg:flex flex-col gap-2 pt-2">
              <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider mb-1">
                Explore the 4 Resource Pillars:
              </span>
              {pillars.map((pillar, index) => {
                const isActive = activePillarIndex === index;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => scrollToPillar(index)}
                    className={`text-left text-xs font-bold px-4 py-3 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                      isActive
                        ? 'bg-[#FFFF00] text-black border-[#FFFF00] shadow-[0_0_20px_rgba(255,255,0,0.25)] translate-x-2'
                        : 'bg-[#0D0D0D] text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] opacity-70">{pillar.number}</span>
                      <span>{pillar.title}</span>
                    </span>
                    <ArrowRight size={13} className={isActive ? 'text-black' : 'text-neutral-600'} />
                  </button>
                );
              })}
            </div>

            {/* Sticky Bottom CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenConnect('inquiry')}
                className="w-full bg-neutral-900 hover:bg-[#FFFF00] text-white hover:text-black font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-2xl border border-neutral-800 hover:border-[#FFFF00] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles size={15} />
                Apply for Studio Training
              </button>
            </div>

          </div>

          {/* Right Column: 4 Scrolling Pillar Cards */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              const isActive = activePillarIndex === index;

              return (
                <div
                  key={pillar.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`bg-[#0D0D0D] border rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 relative overflow-hidden ${
                    isActive
                      ? 'border-[#FFFF00]/80 shadow-[0_0_35px_rgba(255,255,0,0.15)] bg-[#111111]'
                      : 'border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {/* Glowing Corner Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFFF00]">
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#FFFF00] block">
                          {pillar.tag}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-xl font-extrabold text-neutral-400">
                      {pillar.number}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-[#FFFF00] mb-3">
                    {pillar.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-5 border-t border-neutral-800">
                    {pillar.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <CheckCircle2 size={16} className="text-[#FFFF00] mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-8 pt-4 border-t border-neutral-900 flex items-center justify-between">
                    <button
                      onClick={() => onOpenConnect('whatsapp')}
                      className="text-xs font-bold text-[#FFFF00] hover:text-white inline-flex items-center gap-1.5 uppercase tracking-wider transition-colors"
                    >
                      <span>Inquire About {pillar.title}</span>
                      <ArrowRight size={13} />
                    </button>
                    <span className="text-[11px] text-neutral-400">Futuro Works Standard</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
