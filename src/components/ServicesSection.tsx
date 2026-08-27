import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Film, Wand2, BookOpen, Gamepad, PenTool, Camera, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConnect: (tab?: 'whatsapp' | 'inquiry' | 'linktree') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConnect }) => {
  const services = [
    {
      title: "3D & 2D Animation",
      icon: Film,
      description: "Character animation, cinematic storytelling, and commercial shorts created with high-end keyframing and layout execution.",
      deliverables: ["Feature Film Shots", "Commercial 3D Adverts", "2D Series & Animatics"]
    },
    {
      title: "Visual Effects (VFX)",
      icon: Wand2,
      description: "Production VFX for cinema, broadcast TV, and premium digital ads — from invisible compositing to photoreal CGI integration.",
      deliverables: ["Nuke Compositing", "Houdini Destruction FX", "Clean Plate & Matchmove"]
    },
    {
      title: "Comic Book & Lore Creation",
      icon: BookOpen,
      description: "Original graphic novel development, digital comic publishing, sequential visual art, and transmedia franchise lore building.",
      deliverables: ["Original IP Lore", "Panel Layout & Inking", "Digital Color Grading"]
    },
    {
      title: "Game Prototyping & Dev",
      icon: Gamepad,
      description: "Unreal Engine 5 and Unity game design, level environment building, interactive simulations, and real-time visualization.",
      deliverables: ["Playable Prototypes", "Virtual Worlds & Lighting", "Interactive Systems"]
    },
    {
      title: "Graphic Design & Motion",
      icon: PenTool,
      description: "High-octane title sequences, kinetic typography, promotional broadcast packages, and futuristic brand identities.",
      deliverables: ["Motion Graphics for Ads", "Brand Identity Systems", "Digital Campaign Graphics"]
    },
    {
      title: "Cinematography & Field Shoots",
      icon: Camera,
      description: "Professional camera operation, lighting direction, gimbal tracking, and field production for commercials, events, and indie features.",
      deliverables: ["4K RAW Field Shoots", "Lighting & Rigging", "Post-Production Supervision"]
    }
  ];

  return (
    <section id="services" className="relative bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={13} />
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Full-Spectrum <span className="text-[#FFFF00] font-serif italic font-normal">Creative Studio</span> Services
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-normal">
            Whether powering client commercial campaigns or nurturing the next cohort of creators, Futuro Works delivers world-class execution across every AVCGI medium.
          </p>
        </div>

        {/* 6-Grid Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#0D0D0D] border border-neutral-800 hover:border-[#FFFF00]/70 p-6 sm:p-8 rounded-3xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#FFFF00] group-hover:bg-[#FFFF00] group-hover:text-black transition-colors duration-300 mb-5">
                    <IconComponent size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFFF00] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 space-y-2">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-neutral-400">
                    Key Deliverables:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((item) => (
                      <span key={item} className="text-[10px] bg-black border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => onOpenConnect('inquiry')}
                      className="text-xs font-bold text-neutral-400 group-hover:text-[#FFFF00] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire for Project</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
