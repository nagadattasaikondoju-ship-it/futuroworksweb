import React from 'react';

interface FuturoBadgeProps {
  size?: number | string;
  className?: string;
  showText?: boolean;
}

export const FuturoBadge: React.FC<FuturoBadgeProps> = ({ 
  size = 44, 
  className = "",
  showText = true 
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Circular Badge with Electric Yellow Accent */}
      <div 
        className="relative rounded-full bg-black flex items-center justify-center border border-[#FFFF00]/40 overflow-hidden shadow-[0_0_15px_rgba(255,255,0,0.25)] flex-shrink-0 group-hover:border-[#FFFF00] transition-colors duration-300"
        style={{ width: size, height: size }}
      >
        {/* Glow ambient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFFF00]/20 via-transparent to-transparent opacity-70" />
        
        {/* SVG geometric icon inspired by Futuro Works brand */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-3/5 h-3/5 text-[#FFFF00]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dynamic dynamic lines representing AVCGI dimensions */}
          <path 
            d="M20 30H80M20 50H65M20 70H80M50 20V80" 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <circle cx="75" cy="50" r="6" fill="currentColor" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold tracking-tight text-white leading-none text-sm md:text-base flex items-center gap-1">
            FUTURO<span className="text-[#FFFF00]">WORKS</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 font-medium leading-tight">
            Future Together
          </span>
        </div>
      )}
    </div>
  );
};
