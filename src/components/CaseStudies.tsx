import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy, CategoryType } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface CaseStudiesProps {
  onBookCall: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onBookCall }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filterTabs: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'product', label: 'Sewer' },
    { id: 'fintech', label: 'Hydro-Jetting' },
    { id: 'brand', label: 'Water Heaters' },
    { id: 'webflow', label: 'Slab Leaks' },
  ];

  const filteredStudies = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category === activeFilter);

  return (
    <section id="work" className="py-20 border-t border-[#d0d8e4] bg-[#f5f7fb]/40">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-headline-lg text-[#1e1e1e]">
              Featured Solutions
            </h2>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white border border-[#d0d8e4] rounded-[6px]">
            {filterTabs.map(tab => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-[4px] transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#1e1e1e] text-white'
                      : 'text-[#5a6271] hover:text-[#1e1e1e]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedCaseStudy(study)}
              className="brixora-card group cursor-pointer hover:border-[#1e1e1e] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Preview */}
                <div className="relative rounded-[12px] overflow-hidden border border-[#d0d8e4] bg-[#f5f7fb] mb-6 aspect-[16/10]">
                  <img
                    src={study.coverImage}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Minimal Label */}
                <div className="flex items-center justify-between text-xs text-[#5a6271] mb-2 font-mono">
                  <span>{study.client}</span>
                  <span>{study.categoryLabel}</span>
                </div>

                {/* Title */}
                <h3 className="font-headline-md text-[#1e1e1e]">
                  {study.title}
                </h3>
              </div>

              {/* Minimal Impact Footer */}
              <div className="pt-6 mt-6 border-t border-[#d0d8e4] flex items-center justify-between">
                <div className="text-xl font-medium text-[#1e1e1e]">
                  {study.impact} <span className="text-xs text-[#5a6271] font-mono font-normal">/ {study.impactLabel}</span>
                </div>
                <div className="w-8 h-8 rounded-[4px] border border-[#d0d8e4] flex items-center justify-center text-[#1e1e1e] group-hover:bg-[#1e1e1e] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Streamlined Modal */}
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onBookCall={onBookCall}
        />

      </div>
    </section>
  );
};
