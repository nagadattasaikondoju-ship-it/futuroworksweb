import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Layers, Box, Gamepad2, Palette } from 'lucide-react';
import { WordsPullUpMultiStyle, TextSegment } from './WordsPullUpMultiStyle';

interface ProgramsSectionProps {
  onOpenConnect: (tab?: 'whatsapp' | 'inquiry' | 'linktree') => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenConnect }) => {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  const headerSegments: TextSegment[] = [
    { text: "Studio-Grade AVCGI Programs.", className: "text-white font-extrabold" },
    { text: "Built for pure vision. Powered by industry tools.", className: "text-neutral-400 font-medium block mt-1" }
  ];

  const programs = [
    {
      id: "animation",
      number: "01",
      title: "3D & 2D Animation",
      students: "150+ Students",
      tools: ["Autodesk Maya", "Blender 4.0", "Toon Boom Harmony"],
      icon: Box,
      description: "Master character rigging, cinematic keyframing, and classical 2D storytelling with professional production standards.",
      curriculum: [
        "3D Character Rigging & Weight Painting",
        "2D Classical Frame-by-Frame Motion",
        "Cinematic Lighting & PBR Texturing",
        "Production Storyboarding & Timing"
      ]
    },
    {
      id: "vfx",
      number: "02",
      title: "Visual Effects (VFX)",
      students: "300+ Students",
      tools: ["Foundry Nuke", "SideFX Houdini", "Unreal Engine 5", "After Effects"],
      icon: Layers,
      description: "From blockbusters to high-end commercials — learn nodal compositing, procedural simulation, and real-time virtual sets.",
      curriculum: [
        "Node-Based Deep Compositing in Nuke",
        "Pyro, Fluid & Destruction FX in Houdini",
        "Unreal Engine 5 Virtual Production",
        "3D Camera Tracking & Keying Pipelines"
      ]
    },
    {
      id: "gaming",
      number: "03",
      title: "Game Development",
      students: "480+ Students",
      tools: ["Unreal Engine 5", "Unity Engine", "C# / Blueprints"],
      icon: Gamepad2,
      description: "Build immersive 3D worlds, procedural gameplay systems, and high-performance interactive experiences.",
      curriculum: [
        "Unreal Blueprints & Gameplay Framework",
        "Lumen Lighting & Nanite Geometry",
        "Unity Cross-Platform Game Systems",
        "Enemy AI, Physics & Multiplayer Logic"
      ]
    },
    {
      id: "graphics",
      number: "04",
      title: "Graphics & Comics",
      students: "200+ Students",
      tools: ["Photoshop", "Illustrator", "Figma", "InDesign"],
      icon: Palette,
      description: "Craft original comic lore, character concept art, bold brand identities, and high-impact motion graphics.",
      curriculum: [
        "Digital Comic Book Layout & Lettering",
        "Character Concept Art & Matte Painting",
        "Vector Illustration & Brand Design",
        "Interactive Storytelling & Media UI"
      ]
    }
  ];

  return (
    <section id="programs" className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      {/* Subtle Noise Texture */}
      <div className="bg-noise absolute inset-0 opacity-10 pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-6xl mx-auto mb-14 md:mb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          <Sparkles size={13} />
          FOUR PILLARS OF TRAINING
        </div>
        
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">
          <WordsPullUpMultiStyle segments={headerSegments} />
        </div>
      </div>

      {/* Program Cards Grid (Prisma Style) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
        {programs.map((program, index) => {
          const IconComponent = program.icon;
          const isSelected = activeTrack === program.id;

          return (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              onMouseEnter={() => setActiveTrack(program.id)}
              onMouseLeave={() => setActiveTrack(null)}
              className={`relative bg-[#0D0D0D] border rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group ${
                isSelected
                  ? 'border-[#FFFF00] shadow-[0_0_30px_rgba(255,255,0,0.15)] bg-[#121212]'
                  : 'border-neutral-800/90 hover:border-neutral-700'
              }`}
            >
              {/* Top Bar: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFFF00] group-hover:bg-[#FFFF00] group-hover:text-black transition-colors duration-300 shadow-sm">
                    <IconComponent size={20} />
                  </div>
                  <span className="font-mono text-sm font-bold text-neutral-400 group-hover:text-[#FFFF00] transition-colors">
                    {program.number}
                  </span>
                </div>

                {/* Title & Students Tag */}
                <div className="mb-3">
                  <span className="inline-block text-[10px] uppercase font-extrabold tracking-wider text-[#FFFF00] bg-[#FFFF00]/10 px-2.5 py-0.5 rounded-full mb-2">
                    {program.students}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FFFF00] transition-colors">
                    {program.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                  {program.description}
                </p>

                {/* Tools Strip */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {program.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-semibold bg-neutral-900 border border-neutral-800 text-neutral-300 px-2.5 py-1 rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Curriculum Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-800/80 mb-6">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-400 block mb-1">
                    Key Modules:
                  </span>
                  {program.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check size={14} className="text-[#FFFF00] mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenConnect('inquiry')}
                  className="w-full group/btn inline-flex items-center justify-between bg-neutral-900 hover:bg-[#FFFF00] text-neutral-300 hover:text-black text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-xl border border-neutral-800 hover:border-[#FFFF00] transition-all duration-300"
                >
                  <span>Apply for {program.title}</span>
                  <div className="w-6 h-6 rounded-full bg-black/40 group-hover/btn:bg-black text-[#FFFF00] flex items-center justify-center transition-transform group-hover/btn:-rotate-45">
                    <ArrowRight size={12} />
                  </div>
                </button>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Cohort Announcement Banner */}
      <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-[#0D0D0D] via-neutral-900 to-[#0D0D0D] border border-neutral-800 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-[#FFFF00]/10 border border-[#FFFF00]/40 flex items-center justify-center text-[#FFFF00] flex-shrink-0">
            <Sparkles size={18} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Upcoming Masterclass & Cohort Registration</h4>
            <p className="text-xs text-neutral-400">Limited seats per batch to guarantee 1-on-1 studio mentorship.</p>
          </div>
        </div>
        <button
          onClick={() => onOpenConnect('whatsapp')}
          className="bg-[#FFFF00] hover:bg-[#D0D006] text-black font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex-shrink-0 transition-transform active:scale-95 shadow-[0_0_15px_rgba(255,255,0,0.3)]"
        >
          Inquire via WhatsApp
        </button>
      </div>

    </section>
  );
};
