import React from 'react';
import { WordsPullUpMultiStyle, TextSegment } from './WordsPullUpMultiStyle';
import { ScrollCharReveal } from './AnimatedLetter';

export const About: React.FC = () => {
  const headingSegments: TextSegment[] = [
    { text: "I am Marcus Chen,", className: "font-normal text-[#E1E0CC]" },
    { text: "a self-taught director.", className: "font-serif italic text-primary" },
    { text: "I have skills in color grading, visual effects, and narrative design.", className: "font-normal text-[#E1E0CC]" },
  ];

  const bodyParagraph =
    "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";

  return (
    <section id="about" className="bg-black py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-3xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center flex flex-col items-center justify-center border border-neutral-900 shadow-2xl">
        
        {/* Top Label */}
        <span className="text-primary text-[10px] sm:text-xs font-normal tracking-widest uppercase mb-6 sm:mb-8 block">
          Visual arts
        </span>

        {/* Main Multi-Style Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] tracking-tight">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </div>

        {/* Scroll-Linked Character Opacity Reveal Body */}
        <div className="max-w-2xl mx-auto mt-8 sm:mt-12">
          <ScrollCharReveal
            text={bodyParagraph}
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed font-normal"
          />
        </div>

      </div>
    </section>
  );
};
