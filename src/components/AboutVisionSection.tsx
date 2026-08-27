import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Video, CheckCircle, ArrowUpRight } from 'lucide-react';
import { WordsPullUpMultiStyle, TextSegment } from './WordsPullUpMultiStyle';
import { ScrollTextReveal } from './AnimatedLetter';

interface AboutVisionSectionProps {
  onOpenConnect: (tab?: 'whatsapp' | 'inquiry' | 'linktree') => void;
}

export const AboutVisionSection: React.FC<AboutVisionSectionProps> = ({ onOpenConnect }) => {
  const headingSegments: TextSegment[] = [
    { text: "We are Futuro Works,", className: "text-white font-extrabold" },
    { text: "driving the AVCGI renaissance.", className: "text-[#FFFF00] font-serif italic font-normal tracking-wide" },
    { text: "A creative engine powering the next era of storytellers.", className: "text-neutral-300 font-medium" }
  ];

  const visionParagraph = "Founded in Hyderabad by M. Sri Vatsha, Futuro Works is committed to transforming how creative talent is nurtured and deployed. We believe India's creative youth should not merely consume global cinema and gaming — we should build the worlds, author the characters, and craft the visual effects that captivate millions worldwide.";

  const stats = [
    { number: "150+", label: "Animators Trained", tools: "Maya, Blender, Toon Boom", tag: "3D & 2D" },
    { number: "300+", label: "VFX Artists", tools: "After Effects, Nuke, Houdini, Unreal", tag: "Visual FX" },
    { number: "480+", label: "Game Creators", tools: "Unity, Unreal Engine 5", tag: "Interactive" },
    { number: "200+", label: "Designers & Storytellers", tools: "Photoshop, Illustrator, Figma", tag: "Graphics" },
  ];

  return (
    <section id="about" className="relative bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFFF00]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Elevated Card Container */}
      <div className="relative max-w-6xl mx-auto bg-[#0D0D0D] border border-neutral-800 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl">
        
        {/* Subtle noise in card */}
        <div className="bg-noise absolute inset-0 opacity-15 pointer-events-none" />

        {/* Header Tag */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={13} />
            ABOUT FUTURO WORKS
          </div>

          {/* Multi-Style Animated Heading */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto leading-[1.15] text-center tracking-tight">
            <WordsPullUpMultiStyle segments={headingSegments} />
          </div>
        </div>

        {/* Scroll-Driven Character Reveal Text */}
        <div className="max-w-3xl mx-auto my-10 relative z-10 text-center">
          <div className="p-6 md:p-8 rounded-2xl bg-black/60 border border-neutral-800/80 backdrop-blur-sm">
            <ScrollTextReveal
              text={visionParagraph}
              className="text-sm sm:text-base md:text-lg leading-relaxed justify-center text-center font-normal"
            />
          </div>
        </div>

        {/* Team & Live Studio Production Photos */}
        <div className="relative z-10 mt-12 mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Video size={18} className="text-[#FFFF00]" />
                On-Set & Studio Operations
              </h3>
              <p className="text-xs text-neutral-400">Real production environments, cinematography sets, and collaborative workshops</p>
            </div>
            <button
              onClick={() => onOpenConnect('inquiry')}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#FFFF00] hover:text-white uppercase tracking-wider transition-colors"
            >
              <span>Join Studio Cohort</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Real Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Cinematographer on set */}
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-[4/3] sm:aspect-square flex items-end p-4">
              <img
                src="/assets/image10.jpeg"
                alt="Futuro Works Cinematographer on set"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#FFFF00] bg-black/80 px-2 py-0.5 rounded">Production</span>
                <p className="text-xs font-bold text-white mt-1">Cinematography & Field Shoots</p>
              </div>
            </div>

            {/* Card 2: Team Group in Black Polo Uniforms */}
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-[4/3] sm:aspect-square flex items-end p-4">
              <img
                src="/assets/image11.jpeg"
                alt="Futuro Works Team Members"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#FFFF00] bg-black/80 px-2 py-0.5 rounded">The Collective</span>
                <p className="text-xs font-bold text-white mt-1">Futuro Works Creative Crew</p>
              </div>
            </div>

            {/* Card 3: Founder M. Sri Vatsha with Crew */}
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-[4/3] sm:aspect-square flex items-end p-4">
              <img
                src="/assets/image12.jpeg"
                alt="M. Sri Vatsha Founder & CEO with Crew"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#FFFF00] bg-black/80 px-2 py-0.5 rounded">Leadership</span>
                <p className="text-xs font-bold text-white mt-1">M. Sri Vatsha (Founder & CEO)</p>
              </div>
            </div>

            {/* Card 4: Gimbal Videography */}
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-[4/3] sm:aspect-square flex items-end p-4">
              <img
                src="/assets/image13.jpeg"
                alt="Futuro Works Videographer with Gimbal"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#FFFF00] bg-black/80 px-2 py-0.5 rounded">Field Tools</span>
                <p className="text-xs font-bold text-white mt-1">Gimbal & Motion Tracking</p>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Program Stat Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-black/80 border border-neutral-800 hover:border-[#FFFF00]/60 p-5 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 group-hover:text-[#FFFF00] transition-colors">
                  {stat.tag}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FFFF00]" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FFFF00] mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-bold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 pt-2 border-t border-neutral-900">
                <CheckCircle size={12} className="text-[#FFFF00] flex-shrink-0" />
                <span className="truncate">{stat.tools}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
