import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { FuturoBadge } from './FuturoBadge';

interface NavbarProps {
  onOpenConnect: (tab?: 'whatsapp' | 'inquiry' | 'linktree') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Vision', href: '#about' },
    { name: '4 Pillars', href: '#pillars' },
    { name: 'Market', href: '#market' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 md:pt-5 pointer-events-none">
      {/* Centered Floating Pill Navigation Container */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-full border ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5 px-4 sm:px-6'
            : 'bg-black/60 backdrop-blur-lg border-neutral-800/80 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <FuturoBadge size={34} showText={true} />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-wider uppercase font-semibold text-neutral-400 hover:text-[#FFFF00] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFFF00] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenConnect('whatsapp')}
              className="group relative inline-flex items-center gap-2 bg-[#FFFF00] hover:bg-[#D0D006] text-black text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 active:scale-95 shadow-[0_0_15px_rgba(255,255,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,0,0.5)]"
            >
              <MessageCircle size={14} className="transition-transform group-hover:scale-110" />
              <span>Join Community</span>
              <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#FFFF00] transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={10} />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenConnect('whatsapp')}
              className="sm:hidden bg-[#FFFF00] text-black text-[10px] font-extrabold uppercase px-2.5 py-1.5 rounded-full flex items-center gap-1"
            >
              <MessageCircle size={12} />
              Join
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-4 h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[4px] bg-[#FFFF00]' : ''
                }`}
              />
              <span
                className={`w-4 h-[2px] bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[4px] bg-[#FFFF00]' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-t border-neutral-800/80 pt-4 pb-2"
            >
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-semibold text-neutral-300 hover:text-[#FFFF00] px-3 py-1.5 rounded-lg hover:bg-neutral-900 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={12} className="text-neutral-600" />
                  </a>
                ))}
                <div className="pt-3 border-t border-neutral-900 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenConnect('whatsapp');
                    }}
                    className="w-full bg-[#FFFF00] text-black font-bold text-xs uppercase py-2.5 rounded-xl flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={15} />
                    WhatsApp Community
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenConnect('inquiry');
                    }}
                    className="w-full bg-neutral-900 text-white font-medium text-xs py-2.5 rounded-xl border border-neutral-800 flex items-center justify-center gap-2"
                  >
                    <Sparkles size={15} className="text-[#FFFF00]" />
                    Studio / Course Application
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
