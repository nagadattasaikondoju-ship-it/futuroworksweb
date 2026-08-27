import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check, MessageCircle, ExternalLink } from 'lucide-react';

export function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [track, setTrack] = useState('Animation');

  const whatsappLink = "https://chat.whatsapp.com/futuroworks-community";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsInquiryOpen(false);
      setName('');
      setEmail('');
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] antialiased selection:bg-[#FFFF00] selection:text-black">
      {/* 3 Main Sections */}
      <main>
        <Hero onOpenInquiry={() => setIsInquiryOpen(true)} />
        <About />
        <Features onOpenInquiry={() => setIsInquiryOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <footer className="bg-black border-t border-neutral-900 py-10 px-4 text-center text-xs text-neutral-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FFFF00]" />
            <span>FUTURO<span className="text-[#FFFF00]">WORKS</span></span>
            <span className="text-neutral-400 font-normal">· Future Together</span>
          </div>
          <div className="text-neutral-400">
            © {new Date().getFullYear()} Futuro Works Studio. Hyderabad, India.
          </div>
          <button
            onClick={() => setIsInquiryOpen(true)}
            className="text-[#FFFF00] hover:underline font-medium"
          >
            Join WhatsApp Community →
          </button>
        </div>
      </footer>

      {/* Clean Futuro Works Inquiries / Community Modal */}
      <AnimatePresence>
        {isInquiryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInquiryOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#101010] border border-neutral-800 rounded-3xl p-6 sm:p-8 z-10 text-center shadow-2xl"
            >
              <button
                onClick={() => setIsInquiryOpen(false)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <span className="text-[#FFFF00] text-[10px] uppercase font-bold tracking-widest block mb-2">
                AVCGI Lab & Community
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Join Futuro Works</h3>
              <p className="text-xs text-neutral-400 mb-6">
                Connect with 1,130+ creators, get project critiques, and enroll in upcoming masterclasses.
              </p>

              {/* Direct WhatsApp Community Button */}
              <div className="mb-6 p-4 rounded-2xl bg-black border border-neutral-800 flex flex-col gap-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <MessageCircle size={14} className="text-[#FFFF00]" />
                    WhatsApp Community
                  </span>
                  <span className="text-[10px] text-[#FFFF00] font-bold uppercase">Active</span>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#FFFF00] hover:bg-[#D0D006] text-black text-xs font-extrabold uppercase tracking-wider py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-transform active:scale-98 shadow-[0_0_15px_rgba(255,255,0,0.25)]"
                >
                  <span>Open WhatsApp Group</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="relative flex items-center justify-center my-4">
                <span className="bg-[#101010] px-3 text-[10px] uppercase tracking-wider text-neutral-400 relative z-10">or apply for cohort</span>
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-800" /></div>
              </div>

              {submitted ? (
                <div className="py-6 flex flex-col items-center gap-2 text-[#FFFF00]">
                  <Check size={28} />
                  <span className="text-sm font-bold text-white">Application Received!</span>
                  <span className="text-xs text-neutral-400">Our studio lead will contact you.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name..."
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFFF00] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email or Phone..."
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFFF00] transition-colors"
                  />
                  <select
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFFF00] transition-colors"
                  >
                    <option value="Animation">3D & 2D Animation (Maya, Blender)</option>
                    <option value="VFX">Visual Effects (Nuke, Houdini, Unreal 5)</option>
                    <option value="Gaming">Game Development (Unreal 5, Unity)</option>
                    <option value="Graphics">Graphics & Comics (Photoshop, Figma)</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl border border-neutral-700 flex items-center justify-center gap-2 transition-transform active:scale-98"
                  >
                    <Send size={13} className="text-[#FFFF00]" />
                    <span>Submit Application</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
