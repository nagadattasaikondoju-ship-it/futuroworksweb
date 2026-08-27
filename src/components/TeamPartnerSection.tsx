import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface TeamPartnerSectionProps {
  onOpenConnect: (tab?: 'whatsapp' | 'inquiry' | 'linktree') => void;
}

export const TeamPartnerSection: React.FC<TeamPartnerSectionProps> = ({ onOpenConnect }) => {
  const partners = [
    {
      name: "OneLoop",
      tagline: "Audit. Build. Market. Automate.",
      role: "Strategic Growth & Creative Partner",
      badge: "Portfolio Collaborator"
    },
    {
      name: "Hyderabad Data & AI Community",
      tagline: "India's Premier Tech & AI Network",
      role: "Innovation & Event Host",
      badge: "Ecosystem Partner"
    },
    {
      name: "Project Nonfiction",
      tagline: "High-Impact Cinematic Storytelling",
      role: "Media & Narrative Partner",
      badge: "Creative Alliance"
    },
    {
      name: "Microsoft Fabric Hackathon 2026",
      tagline: "Hyderabad Tech & Creators Summit",
      role: "Keynote & Showcase Session",
      badge: "Keynote Partner"
    }
  ];

  const team = [
    {
      name: "M. Sri Vatsha",
      role: "Founder & CEO",
      tagline: "The Man with a Vision",
      bio: "Pioneering the AVGCI Renaissance in India by building an integrated education and production engine for aspiring animators and filmmakers."
    },
    {
      name: "M. Sri Vardhan",
      role: "Manager",
      tagline: "Studio & Operations Lead",
      bio: "Overseeing studio productions, community growth, masterclass logistics, and student industry collaboration pipelines."
    }
  ];

  return (
    <section id="team" className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-neutral-900">
      
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section 1: Team & Leadership */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Users size={13} />
              LEADERSHIP & CREATIVE FORCE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Meet the <span className="text-[#FFFF00] font-serif italic font-normal">Visionaries</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-normal">
              Passionate directors, educators, and artists guiding the next wave of Indian visual storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-neutral-800 hover:border-[#FFFF00]/60 p-6 sm:p-8 rounded-3xl transition-all duration-300 group shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-extrabold text-[#FFFF00] bg-[#FFFF00]/10 px-3 py-1 rounded-full">
                    {member.role}
                  </span>
                  <span className="text-xs font-serif italic text-neutral-400">{member.tagline}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFFF00] transition-colors">
                  {member.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {member.bio}
                </p>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Futuro Works Executive</span>
                  <button
                    onClick={() => onOpenConnect('inquiry')}
                    className="text-xs font-bold text-[#FFFF00] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Connect</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Partner Ecosystem */}
        <div id="partners">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Sparkles size={13} />
              COLLABORATIVE NETWORK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Our <span className="text-[#FFFF00] font-serif italic font-normal">Partners & Ecosystem</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed font-normal">
              Collaborating with industry leaders, tech communities, and production houses to unlock real-world opportunities for our creators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0D0D0D] border border-neutral-800 hover:border-neutral-700 p-6 rounded-3xl flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <span className="inline-block text-[9px] uppercase tracking-widest font-extrabold text-[#FFFF00] bg-black border border-neutral-800 px-2 py-0.5 rounded-md mb-4">
                    {partner.badge}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#FFFF00] transition-colors mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-[#FFFF00]/80 font-medium mb-3">
                    {partner.tagline}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {partner.role}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-900 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Verified Alliance</span>
                  <ShieldCheck size={14} className="text-[#FFFF00]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials & Proof Banner */}
        <div className="bg-gradient-to-br from-[#0D0D0D] via-neutral-900 to-[#0D0D0D] border border-neutral-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFFF00]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#FFFF00]/10 border border-[#FFFF00]/40 text-[#FFFF00] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                <Award size={14} />
                CERTIFIED AVCGI MASTERY
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Learn from the Best. Compete with the World.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                Every graduate leaves with a studio-ready showreel, hands-on production credits, and recognized certification backing their creative capability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => onOpenConnect('whatsapp')}
                className="bg-[#FFFF00] hover:bg-[#D0D006] text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,0,0.3)]"
              >
                <span>Join Student Community</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => onOpenConnect('inquiry')}
                className="bg-black hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full border border-neutral-700 transition-colors"
              >
                Request Course Catalog
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
