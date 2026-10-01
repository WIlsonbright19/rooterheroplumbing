import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const [times, setTimes] = useState<{ la: string; phx: string }>({
    la: '',
    phx: ''
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimes({
        la: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }),
        phx: now.toLocaleTimeString('en-US', { timeZone: 'America/Phoenix', hour: '2-digit', minute: '2-digit' })
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-white border-t border-[#d0d8e4] pt-16 pb-12 text-[#1e1e1e]">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8">
        
        {/* Top Info Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 border-b border-[#d0d8e4] text-xs font-mono text-[#5a6271]">
          <div className="flex items-center gap-6">
            <span>24/7 LIVE DISPATCH</span>
            <span>LA {times.la}</span>
            <span>PHX {times.phx}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:8669418214" className="text-[#1e1e1e] hover:underline flex items-center gap-1 font-semibold">
              <Phone className="w-3.5 h-3.5" />
              <span>(866) 941-8214</span>
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#1e1e1e] hover:text-[#5a6271] flex items-center gap-1 cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Oversized Wordmark */}
        <div className="py-10 select-none text-center">
          <div className="font-semibold tracking-[-0.04em] text-[#1e1e1e] leading-none">
            <div className="text-[clamp(40px,13vw,144px)]">ROOTER HERO</div>
            <div className="mt-3 text-sm sm:text-base font-mono tracking-normal">PLUMBING</div>
          </div>
        </div>

        {/* Bottom Minimal Line */}
        <div className="pt-6 border-t border-[#d0d8e4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5a6271] font-mono">
          <span>© {new Date().getFullYear()} Rooter Hero Plumbing · Licensed C-36 Contractor</span>
          <div className="flex items-center gap-4">
            {['services', 'work', 'approach', 'book'].map((id) => (
              <button
                key={id}
                onClick={() => onNavClick(id)}
                className="capitalize hover:text-[#1e1e1e] cursor-pointer"
              >
                {id}
              </button>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
