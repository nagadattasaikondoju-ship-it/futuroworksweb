import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check } from 'lucide-react';

export function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsInquiryOpen(false);
      setEmail('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC] antialiased selection:bg-primary selection:text-black">
      {/* 3 Main Sections */}
      <main>
        <Hero onOpenInquiry={() => setIsInquiryOpen(true)} />
        <About />
        <Features />
      </main>

      {/* Clean Inquiries Modal */}
      <AnimatePresence>
        {isInquiryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInquiryOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#101010] border border-neutral-800 rounded-3xl p-8 z-10 text-center"
            >
              <button
                onClick={() => setIsInquiryOpen(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <span className="text-primary text-[10px] uppercase tracking-widest block mb-2">
                Inquiries
              </span>
              <h3 className="text-2xl font-normal text-[#E1E0CC] mb-2">Join Prisma Lab</h3>
              <p className="text-xs text-gray-400 mb-6">
                Receive access to collective masterclasses, director critiques, and upcoming workshops.
              </p>

              {submitted ? (
                <div className="py-6 flex flex-col items-center gap-2 text-primary">
                  <Check size={28} />
                  <span className="text-sm font-medium">Invitation sent.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-black border border-neutral-800 rounded-full px-5 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-[#D0D006] text-black font-medium text-sm py-3 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-98"
                  >
                    <Send size={15} />
                    <span>Request Access</span>
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
