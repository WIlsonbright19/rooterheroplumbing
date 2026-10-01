import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesProps {
  onSelectScopeForBooking: (serviceName: string, budgetEstimate: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectScopeForBooking }) => {
  return (
    <section id="services" className="py-20 border-t border-[#d0d8e4] bg-white">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-headline-lg text-[#1e1e1e]">
            Services
          </h2>
        </div>

        {/* 4 Minimal Disciplines */}
        <div className="divide-y divide-[#d0d8e4] border-y border-[#d0d8e4]">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectScopeForBooking(service.title, 'Standard Dispatch')}
              className="py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer hover:bg-[#f5f7fb]/60 transition-colors px-2 sm:px-4"
            >
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="font-mono text-sm text-[#5a6271] w-8">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#1e1e1e] group-hover:translate-x-1 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5a6271] mt-1 max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 self-end md:self-center">
                <span className="text-xs font-mono text-[#5a6271]">
                  {service.timeline}
                </span>
                <div className="w-8 h-8 rounded-[4px] border border-[#d0d8e4] flex items-center justify-center text-[#1e1e1e] group-hover:bg-[#1e1e1e] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
