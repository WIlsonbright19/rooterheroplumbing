import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS, CLIENT_LOGOS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 border-t border-[#d0d8e4] bg-[#fafbfd]">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8">
        
        {/* Minimal Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#5a6271] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>CLIENT VALIDATION · VERIFIED CUSTOMER REVIEWS</span>
          </div>
          <h2 className="font-headline-display text-3xl sm:text-4xl text-[#1e1e1e] tracking-tight">
            Trusted by 4,800+ California homeowners.
          </h2>
        </div>

        {/* Multiple Clean Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#d0d8e4] rounded-[20px] p-6 sm:p-7 flex flex-col justify-between hover:border-[#1e1e1e] transition-all duration-200"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Body */}
                <blockquote className="text-[#1e1e1e] text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                  "{review.quote}"
                </blockquote>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#d0d8e4]/70 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-9 h-9 rounded-full object-cover border border-[#d0d8e4]"
                />
                <div>
                  <div className="text-sm font-semibold text-[#1e1e1e] leading-tight">
                    {review.author}
                  </div>
                  <div className="text-xs text-[#5a6271] font-mono">
                    {review.role} · {review.company}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Minimal Trust & Industry Certifications Roster */}
        <div className="pt-8 border-t border-[#d0d8e4] flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-[#5a6271]">
          {CLIENT_LOGOS.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 hover:text-[#1e1e1e] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
              <span>{logo.name.toUpperCase()}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
