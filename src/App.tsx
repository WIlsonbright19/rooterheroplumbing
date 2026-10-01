/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { Testimonials } from './components/Testimonials';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>('Drain Cleaning & Hydro-Jetting');
  const [preselectedBudget, setPreselectedBudget] = useState<string>('Standard Dispatch');

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectScopeForBooking = (serviceName: string, budgetEstimate: string) => {
    setPreselectedService(serviceName);
    setPreselectedBudget(budgetEstimate);
    scrollTo('book');
  };

  return (
    <div className="min-h-screen bg-white text-[#1e1e1e] flex flex-col font-sans selection:bg-[#1e1e1e] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onBookClick={() => scrollTo('book')} />

      {/* Main Single-Page Content Body */}
      <main className="flex-1">
        {/* Section 1: Hero & Studio Overview */}
        <Hero
          onExploreWork={() => scrollTo('work')}
          onBookCall={() => scrollTo('book')}
        />

        {/* Section 2: Selected Case Studies & Work */}
        <CaseStudies onBookCall={() => scrollTo('book')} />

        {/* Section 3: Capabilities & Interactive Sprint Configurator */}
        <Services onSelectScopeForBooking={handleSelectScopeForBooking} />

        {/* Section 4: Sprint Methodology */}
        <Approach />

        {/* Section 5: Founder Testimonials & Brand Validation */}
        <Testimonials />

        {/* Section 6: Minimal Booking */}
        <BookingSection
          preselectedService={preselectedService}
        />
      </main>

      {/* Editorial Footer with Live Clocks and Wordmark */}
      <Footer onNavClick={(id) => scrollTo(id)} />
    </div>
  );
}
