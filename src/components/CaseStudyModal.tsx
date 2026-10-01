import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onBookCall
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#d0d8e4] rounded-[20px] max-w-3xl w-full max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-[#d0d8e4] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 text-xs text-[#5a6271] font-mono">
            <span>{caseStudy.client}</span>
            <span>·</span>
            <span>{caseStudy.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#5a6271] hover:text-[#1e1e1e] rounded-[4px]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-medium text-[#1e1e1e]">
              {caseStudy.title}
            </h2>
            <div className="text-3xl font-semibold text-[#1e1e1e] mt-2">
              {caseStudy.impact} <span className="text-sm font-normal text-[#5a6271] font-mono">{caseStudy.impactLabel}</span>
            </div>
          </div>

          <div className="rounded-[12px] overflow-hidden border border-[#d0d8e4]">
            <img
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              className="w-full h-[320px] object-cover"
            />
          </div>

          <p className="text-[#5a6271] text-base leading-relaxed">
            {caseStudy.summary}
          </p>

          <div className="pt-4 border-t border-[#d0d8e4] flex items-center justify-between">
            <button
              onClick={onClose}
              className="btn-brixora-secondary !min-w-[90px]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCall();
              }}
              className="btn-brixora-primary"
            >
              <span>Book Discussion</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
