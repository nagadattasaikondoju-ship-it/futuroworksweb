import React from 'react';
import { WordsPullUpMultiStyle, TextSegment } from './WordsPullUpMultiStyle';
import { ScrollCharReveal } from './AnimatedLetter';

export const About: React.FC = () => {
  const headingSegments: TextSegment[] = [
    { text: "Founded by M. Sri Vatsha,", className: "font-normal text-white" },
    { text: "we don't just tell stories — we build worlds.", className: "font-serif italic text-[#FFFF00]" },
    { text: "Driving India's creative renaissance across animation, VFX, and interactive media.", className: "font-normal text-neutral-300" },
  ];

  const bodyParagraph =
    "Operating from Hyderabad, Futuro Works unites directors, animators, and digital artists. Over the last years, we have trained 1,130+ creators across four core disciplines and partnered with industry leaders like OneLoop and the Microsoft Fabric Hackathon to bring Indian talent to global screens.";

  const stats = [
    { count: "150+", label: "3D & 2D Animators", tools: "Maya, Blender" },
    { count: "300+", label: "VFX Artists", tools: "Nuke, Houdini" },
    { count: "480+", label: "Game Devs", tools: "Unreal 5, Unity" },
    { count: "200+", label: "Designers", tools: "Photoshop, Figma" },
  ];

  return (
    <section id="about" className="bg-black py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-3xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center flex flex-col items-center justify-center border border-neutral-900 shadow-2xl">
        
        {/* Top Label */}
        <span className="text-[#FFFF00] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-6 sm:mb-8 block">
          AVCGI Studio & Academy
        </span>

        {/* Main Multi-Style Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.98] sm:leading-[0.92] tracking-tight">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </div>

        {/* Scroll-Linked Character Opacity Reveal Body */}
        <div className="max-w-3xl mx-auto mt-8 sm:mt-12">
          <ScrollCharReveal
            text={bodyParagraph}
            className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal"
          />
        </div>

        {/* Minimal 4-Pillar Stat Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-10 border-t border-neutral-900 w-full max-w-4xl">
          {stats.map((item) => (
            <div key={item.label} className="text-center p-3 rounded-2xl bg-black/40 border border-neutral-800/80">
              <div className="text-2xl sm:text-3xl font-bold text-[#FFFF00] mb-0.5">{item.count}</div>
              <div className="text-xs font-medium text-white">{item.label}</div>
              <div className="text-[10px] text-neutral-400 font-mono mt-1">{item.tools}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
