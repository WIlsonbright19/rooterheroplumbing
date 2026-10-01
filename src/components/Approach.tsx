import React from 'react';

export const Approach: React.FC = () => {
  const steps = [
    { num: '01', title: 'Dispatch', time: 'Under 45 Min', desc: 'Locally stationed mobile units dispatched 24/7 with zero overtime surcharge.' },
    { num: '02', title: 'Inspect', time: 'Step 2', desc: 'Fiber-optic HD camera diagnostics show the exact pipe condition on screen.' },
    { num: '03', title: 'Quote', time: 'Step 3', desc: 'Upfront flat-rate transparent pricing before any repair work commences.' },
    { num: '04', title: 'Guarantee', time: 'Step 4', desc: 'Code-compliant master craftsmanship backed by 100% parts & labor warranty.' }
  ];

  return (
    <section id="approach" className="py-20 border-t border-[#d0d8e4] bg-[#f5f7fb]/30">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-headline-lg text-[#1e1e1e]">
            Process
          </h2>
        </div>

        {/* 4 Minimal Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="brixora-card !p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#5a6271] mb-6">
                  <span>{step.num}</span>
                  <span>{step.time}</span>
                </div>
                <h3 className="text-xl font-medium text-[#1e1e1e] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5a6271]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
