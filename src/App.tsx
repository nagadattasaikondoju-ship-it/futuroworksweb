import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutVisionSection } from './components/AboutVisionSection';
import { ProgramsSection } from './components/ProgramsSection';
import { PillarsMarketSection } from './components/PillarsMarketSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamPartnerSection } from './components/TeamPartnerSection';
import { Footer } from './components/Footer';
import { ConnectModal } from './components/ConnectModal';

export function App() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [connectTab, setConnectTab] = useState<'whatsapp' | 'inquiry' | 'linktree'>('whatsapp');

  const handleOpenConnect = (tab: 'whatsapp' | 'inquiry' | 'linktree' = 'whatsapp') => {
    setConnectTab(tab);
    setIsConnectOpen(true);
  };

  const handleCloseConnect = () => {
    setIsConnectOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] font-sans selection:bg-[#FFFF00] selection:text-black">
      {/* Floating Navigation Pill */}
      <Navbar onOpenConnect={handleOpenConnect} />

      {/* Main Landing Sections */}
      <main className="relative">
        <HeroSection onOpenConnect={handleOpenConnect} />
        <AboutVisionSection onOpenConnect={handleOpenConnect} />
        <ProgramsSection onOpenConnect={handleOpenConnect} />
        <PillarsMarketSection onOpenConnect={handleOpenConnect} />
        <ServicesSection onOpenConnect={handleOpenConnect} />
        <TeamPartnerSection onOpenConnect={handleOpenConnect} />
      </main>

      {/* Studio Footer */}
      <Footer onOpenConnect={handleOpenConnect} />

      {/* Interactive WhatsApp Community / Inquiry Modal */}
      <ConnectModal
        isOpen={isConnectOpen}
        onClose={handleCloseConnect}
        defaultTab={connectTab}
      />
    </div>
  );
}

export default App;
