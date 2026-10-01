import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onBookCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onBookCall }) => {
  const carouselItems = [
    {
      id: 'water-systems',
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
      alt: 'Modern water filtration and plumbing architecture',
      widthClass: 'w-[480px] sm:w-[620px] md:w-[700px]', // Wide primary width
      tag: 'WATER INFRASTRUCTURE // 01',
      title: 'High-Efficiency Filtration'
    },
    {
      id: 'trenchless-tech',
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      alt: 'Trenchless pipe technology inspection',
      widthClass: 'w-[280px] sm:w-[380px] md:w-[420px]', // Medium secondary width
      tag: 'TRENCHLESS CIPP // 02',
      title: 'Zero-Dig Mainline Restoration'
    },
    {
      id: 'hydro-diagnostics',
      src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
      alt: 'Precision commercial plumbing and diagnostics',
      widthClass: 'w-[210px] sm:w-[280px] md:w-[320px]', // Compact tertiary width
      tag: 'HYDRO-JETTING // 03',
      title: '4,000 PSI Descaling'
    }
  ];

  // Duplicated items for a seamless continuous scrolling loop
  const seamlessTrack = [...carouselItems, ...carouselItems];

  return (
    <section id="about" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8">
        
        {/* Minimal Sub-header */}
        <div className="flex items-center gap-2 text-xs text-[#5a6271] mb-6 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live 24/7 Dispatch · Licensed C-36 Master Plumbers</span>
        </div>

        {/* Oversized Display Headline */}
        <div className="max-w-[960px] mb-6">
          <h1 className="font-headline-display text-[#1e1e1e] text-balance">
            Master plumbing & emergency drain specialists.
          </h1>
        </div>

        {/* Minimal Single-line Description */}
        <div className="max-w-[580px] mb-8">
          <p className="text-base sm:text-lg text-[#5a6271]">
            Trenchless sewer restoration, hydro-jetting, and water heater engineering with zero overtime fees.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4 mb-16">
          <button
            onClick={onBookCall}
            className="btn-brixora-primary group cursor-pointer"
          >
            <span>Book Service</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={onExploreWork}
            className="btn-brixora-secondary group cursor-pointer"
          >
            <span>Services</span>
            <ArrowDown className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>

        {/* Continuous In-Motion Scrolling Carousel Track */}
        <div className="relative">
          
          {/* Header Status (No Buttons) */}
          <div className="flex items-center justify-between pb-3 mb-2 text-xs font-mono text-[#5a6271]">
            <div className="flex items-center gap-2">
              <span className="text-[#1e1e1e] font-semibold">EQUIPMENT & CRAFT</span>
              <span>·</span>
              <span className="text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                In Continuous Motion
              </span>
            </div>
            <span className="hidden sm:inline text-[11px] text-[#5a6271]">Hover to pause</span>
          </div>

          {/* Smooth Continuous Scrolling Track */}
          <div className="overflow-hidden rounded-[20px] relative">
            <div className="animate-continuous-scroll flex items-center gap-6 py-1">
              {seamlessTrack.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className={`${item.widthClass} shrink-0 relative rounded-[20px] overflow-hidden border border-[#d0d8e4] bg-[#f5f7fb] group transition-all duration-300 hover:border-[#1e1e1e]`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-[360px] sm:h-[460px] md:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading={idx < 3 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
