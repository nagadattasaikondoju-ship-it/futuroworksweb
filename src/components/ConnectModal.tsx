import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ExternalLink, Check, Copy, Sparkles, Send, QrCode } from 'lucide-react';
import { FuturoBadge } from './FuturoBadge';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'whatsapp' | 'inquiry' | 'linktree';
}

export const ConnectModal: React.FC<ConnectModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'whatsapp'
}) => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'inquiry' | 'linktree'>(defaultTab);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Animation',
    message: ''
  });

  const whatsappLink = "https://chat.whatsapp.com/futuroworks-community";
  const linktreeLink = "https://linktr.ee/futuroworks";

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-2xl bg-[#0D0D0D] border border-neutral-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden z-10"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient Yellow Glow */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FFFF00]/10 rounded-full blur-[90px] pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <FuturoBadge size={38} showText={true} />
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center gap-2 p-1 bg-black rounded-2xl border border-neutral-800/80 mb-6">
              <button
                onClick={() => setActiveTab('whatsapp')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'whatsapp'
                    ? 'bg-[#FFFF00] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <MessageCircle size={16} />
                WhatsApp Community
              </button>
              <button
                onClick={() => setActiveTab('inquiry')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'inquiry'
                    ? 'bg-[#FFFF00] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Sparkles size={16} />
                Student / Studio Inquiry
              </button>
              <button
                onClick={() => setActiveTab('linktree')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'linktree'
                    ? 'bg-[#FFFF00] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <QrCode size={16} />
                Linktree Hub
              </button>
            </div>

            {/* Tab 1: WhatsApp Community */}
            {activeTab === 'whatsapp' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                  {/* QR Code Placeholder Graphic */}
                  <div className="relative w-44 h-44 bg-white p-3 rounded-2xl flex flex-col items-center justify-center shadow-lg flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-black" fill="currentColor">
                      <path d="M10 10h30v30h-30zM15 15v20h20v-20zM60 10h30v30h-30zM65 15v20h20v-20zM10 60h30v30h-30zM15 65v20h20v-20zM22 22h6v6h-6zM72 22h6v6h-6zM22 72h6v6h-6zM50 15h5v20h-5zM50 45h15v5h-15zM75 50h15v10h-15zM50 65h10v25h-10zM65 75h25v15h-25zM65 60h10v10h-10z" />
                    </svg>
                    <span className="absolute bottom-1 bg-black text-[#FFFF00] text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Scan to Join
                    </span>
                  </div>

                  <div className="space-y-3 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] px-3 py-1 rounded-full text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#FFFF00] animate-ping" />
                      Active AVCGI Network
                    </div>
                    <h3 className="text-xl font-bold text-white">Join the Futuro Works Creators Community</h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      Connect with 1,130+ animators, VFX artists, and game designers. Receive live workshop invites, project critiques, and studio briefs.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#FFFF00] hover:bg-[#D0D006] text-black font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,0,0.25)] text-sm"
                  >
                    <MessageCircle size={18} />
                    Open WhatsApp Group Directly
                    <ExternalLink size={14} />
                  </a>
                  <button
                    onClick={() => handleCopyLink(whatsappLink)}
                    className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3.5 px-5 rounded-2xl border border-neutral-700 flex items-center justify-center gap-2 text-sm transition-colors"
                  >
                    {copied ? <Check size={16} className="text-[#FFFF00]" /> : <Copy size={16} />}
                    {copied ? 'Link Copied!' : 'Copy Invite'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Student / Studio Inquiry */}
            {activeTab === 'inquiry' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#FFFF00]/20 border border-[#FFFF00] text-[#FFFF00] flex items-center justify-center mx-auto">
                      <Check size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                    <p className="text-sm text-neutral-400 max-w-md mx-auto">
                      The Futuro Works team will review your application and reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wider">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Marcus Vatsha"
                          className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFFF00] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wider">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFFF00] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@domain.com"
                          className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFFF00] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wider">Primary Track</label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FFFF00] transition-colors"
                        >
                          <option value="Animation">3D & 2D Animation (Maya, Blender)</option>
                          <option value="VFX">VFX & Compositing (Nuke, Unreal, Houdini)</option>
                          <option value="Gaming">Game Development (Unreal 5, Unity)</option>
                          <option value="Graphics">Graphics & Motion Design (Figma, After Effects)</option>
                          <option value="StudioService">Studio Production / Client Brief</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wider">Your Goals / Project Brief</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your creative background, portfolio links, or studio collaboration..."
                        className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFFF00] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#FFFF00] hover:bg-[#D0D006] text-black font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,0,0.25)] text-sm"
                    >
                      <Send size={16} />
                      Submit Application to Futuro Works
                    </button>
                  </form>
                )}
              </motion.div>
            )}

            {/* Tab 3: Linktree */}
            {activeTab === 'linktree' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative w-44 h-44 bg-white p-3 rounded-2xl flex flex-col items-center justify-center shadow-lg flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-black" fill="currentColor">
                      <path d="M10 10h30v30h-30zM15 15v20h20v-20zM60 10h30v30h-30zM65 15v20h20v-20zM10 60h30v30h-30zM15 65v20h20v-20zM22 22h6v6h-6zM72 22h6v6h-6zM22 72h6v6h-6zM50 15h5v20h-5zM50 45h15v5h-15zM75 50h15v10h-15zM50 65h10v25h-10zM65 75h25v15h-25zM65 60h10v10h-10z" />
                    </svg>
                    <span className="absolute bottom-1 bg-black text-[#FFFF00] text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Linktree QR
                    </span>
                  </div>

                  <div className="space-y-3 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] px-3 py-1 rounded-full text-xs font-semibold">
                      <Sparkles size={14} />
                      Central Linktree Hub
                    </div>
                    <h3 className="text-xl font-bold text-white">All Futuro Works Resources in One Place</h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      Access official social channels, showreels, syllabus downloads, and event registrations for upcoming masterclasses.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={linktreeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#FFFF00] hover:bg-[#D0D006] text-black font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,0,0.25)] text-sm"
                  >
                    <ExternalLink size={18} />
                    Open Linktree (linktr.ee/futuroworks)
                  </a>
                  <button
                    onClick={() => handleCopyLink(linktreeLink)}
                    className="bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3.5 px-5 rounded-2xl border border-neutral-700 flex items-center justify-center gap-2 text-sm transition-colors"
                  >
                    {copied ? <Check size={16} className="text-[#FFFF00]" /> : <Copy size={16} />}
                    {copied ? 'Link Copied!' : 'Copy Link'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Footnote on Microsoft Fabric Hackathon Session */}
            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
              <span>Presented at Microsoft Fabric Hackathon 2026</span>
              <span className="text-[#FFFF00]">OneLoop Partner Studio</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
