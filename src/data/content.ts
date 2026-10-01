import { CaseStudy, ServiceItem, TestimonialItem } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'trenchless-sewer',
    title: 'Trenchless Sewer Relining — Zero-Dig Restoration',
    category: 'product',
    categoryLabel: 'Sewer Line',
    client: 'Sepulveda Residential Complex',
    year: '2026',
    timeline: '1 Day',
    summary: 'Restored 140 linear feet of severely cracked clay sewer mainline using cured-in-place pipe (CIPP) lining with zero landscape destruction.',
    impact: '0-Dig',
    impactLabel: 'Landscaping Preserved',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    collageSecondaryImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    collageAccentTag: 'CIPP Epoxy Lining // 50-Yr Life',
    tags: ['Trenchless Sewer', 'CIPP Lining', 'No Excavation', 'HD Camera Inspected'],
    challenge: 'Main sewer line had heavy root penetration and collapsed joint under a paved driveway and mature landscaping.',
    solution: 'Pneumatically pulled epoxy-saturated liner through single access point, curing seamless new pipe inside the old host pipe.',
    deliverables: ['Pre & Post Video Camera Inspection', 'Hydro-Scrub Descaling', 'Trenchless Structural Relining', 'Lifetime Warranty Handover'],
    testimonial: {
      quote: 'Rooter Hero saved us over $15,000 by not tearing up our concrete driveway. The technicians were fast, clean, and professional.',
      author: 'David Ramirez',
      role: 'Property Director',
      company: 'Sepulveda Estates'
    }
  },
  {
    id: 'hydro-jetting',
    title: 'Commercial Hydro-Jetting & Descaling Cleanout',
    category: 'fintech',
    categoryLabel: 'Drain Cleaning',
    client: 'Valley Boulevard Retail Center',
    year: '2026',
    timeline: '3 Hours',
    summary: 'Clearing recurrent commercial grease blockages and heavy mineral scale using 4,000 PSI high-velocity water jetting.',
    impact: '4,000 PSI',
    impactLabel: 'Cleaned to Bare Pipe',
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    collageSecondaryImage: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=600&q=80',
    collageAccentTag: 'Flow Restored: 100%',
    tags: ['Hydro Jetting', 'Drain Cleaning', 'Grease & Scale', 'Preventative Care'],
    challenge: 'Standard mechanical snaking failed to remove hardened grease coagulations and scale deposits causing repeat backups.',
    solution: 'Deployed dual-stage rotary hydro-jetter with 360-degree scouring nozzles, fully flushing debris to municipal main.',
    deliverables: ['Fiber-Optic Scope Diagnostic', 'Full Hydro-Jet Flush', 'Grease Trap Inspection', 'Flow Rate Verification'],
    testimonial: {
      quote: 'The team arrived within 45 minutes of our emergency call. No downtime for our restaurant tenants.',
      author: 'Sarah Lin',
      role: 'Operations Manager',
      company: 'Valley Commercial Group'
    }
  },
  {
    id: 'tankless-water-heater',
    title: 'High-Efficiency Tankless Water Heater Conversion',
    category: 'brand',
    categoryLabel: 'Water Heaters',
    client: 'San Fernando Valley Residence',
    year: '2025',
    timeline: 'Same Day',
    summary: 'Replaced a leaking 50-gallon storage tank with an on-demand high-efficiency condensing tankless system providing endless hot water.',
    impact: '40%',
    impactLabel: 'Energy Bill Savings',
    coverImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    collageSecondaryImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80',
    collageAccentTag: 'Endless Hot Water // 98% AFUE',
    tags: ['Tankless Water Heater', 'Energy Efficient', 'Same-Day Install', 'Gas Line Upgrade'],
    challenge: 'A failed 12-year-old water heater flooded a residential garage during peak winter holiday hours.',
    solution: 'Same-day dispatch, removed damaged tank, retrofitted ventilation and high-output gas line, installed top-rated unit.',
    deliverables: ['Emergency Removal & Disposal', 'Direct-Vent Installation', 'Digital Temperature Calibration', 'City Permit & Inspection Filing'],
    testimonial: {
      quote: 'Unbelievable speed. The Rooter Hero technician replaced our blown heater with a tankless unit the very same afternoon.',
      author: 'Michael Torres',
      role: 'Homeowner',
      company: 'Mission Hills, CA'
    }
  },
  {
    id: 'slab-leak-detection',
    title: 'Acoustic Slab Leak Detection & Non-Invasive Repipe',
    category: 'webflow',
    categoryLabel: 'Leak Detection',
    client: 'Encino Hillside Residence',
    year: '2026',
    timeline: '24 Hours',
    summary: 'Pinpointed pressurized hot water copper pipe leak under foundation using ultrasonic sound amplification, avoiding concrete jackhammering.',
    impact: '100%',
    impactLabel: 'Pinpoint Diagnostic',
    coverImage: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=1200&q=80',
    collageSecondaryImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
    collageAccentTag: 'Thermal Imaging Verified',
    tags: ['Slab Leak', 'Ultrasonic Detection', 'PEX Bypass', 'Thermal Scan'],
    challenge: 'Unexplained water bill spike and hot spots on hardwood flooring indicated high-pressure foundation leak.',
    solution: 'Acoustic microphones located the precise pinhole; executed modern PEX attic bypass with zero concrete drilling.',
    deliverables: ['Infrared & Acoustic Leak Isolation', 'PEX Pipe Wall Routing', 'Pressure Drop Testing', 'Insurance Documentation Report'],
    testimonial: {
      quote: 'Rooter Hero found the exact leak without destroying my hardwood floor or foundation. Total lifesavers.',
      author: 'Carla Mendoza',
      role: 'Homeowner',
      company: 'Encino, CA'
    }
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'drain-cleaning',
    number: '01',
    title: 'Drain Cleaning & Hydro-Jetting',
    description: 'Motorized cabling and 4,000 PSI high-velocity hydro-jetting to eliminate grease, soap scum, hair, and stubborn tree root intrusions.',
    deliverables: ['Clogged Sink & Toilet Clearing', 'Hydro-Jetting Pipe Scouring', 'HD Camera Video Inspection', 'Preventative Bio-Drain Care'],
    timeline: 'Same-Day Dispatch',
    team: 'Certified Drain Specialists',
    keyMetric: 'Clear flow guaranteed',
    iconName: 'layout'
  },
  {
    id: 'trenchless-sewer',
    number: '02',
    title: 'Trenchless Sewer Line Repair',
    description: 'No-dig epoxy relining (CIPP) and pipe bursting to replace broken sewer lines without excavating yards, driveways, or patios.',
    deliverables: ['Zero-Excavation Pipe Relining', 'Pipe Bursting Replacement', 'Main Sewer Line Cleanout Install', '50-Year Pipe Longevity'],
    timeline: '1 – 2 Days',
    team: 'Master Sewer Technicians',
    keyMetric: 'No lawn destruction',
    iconName: 'code'
  },
  {
    id: 'water-heaters',
    number: '03',
    title: 'Water Heater & Tankless Systems',
    description: 'Expert installation, repair, and maintenance for gas, electric, hybrid, and high-efficiency on-demand tankless water heaters.',
    deliverables: ['Emergency Heater Replacement', 'Tankless Upgrades & Conversions', 'Anode Rod & Flush Maintenance', 'Gas Line & Venting Upgrades'],
    timeline: 'Same-Day Service',
    team: 'Licensed Gas & Plumbing Techs',
    keyMetric: 'Endless hot water',
    iconName: 'pen'
  },
  {
    id: 'emergency-leaks',
    number: '04',
    title: '24/7 Emergency & Slab Leaks',
    description: 'Immediate 24-hour emergency response for burst pipes, sewer overflows, gas leaks, and non-invasive acoustic slab leak detection.',
    deliverables: ['24/7/365 Emergency Dispatch', 'Ultrasonic Slab Leak Detection', 'PEX & Copper Repiping', 'Water Shutoff & Pressure Regulators'],
    timeline: 'Under 45 Min Arrival',
    team: 'Emergency Rapid Response Crew',
    keyMetric: 'Zero after-hours fee',
    iconName: 'rocket'
  }
];

export const METHODOLOGY_STEPS = [
  {
    phase: 'Phase 01',
    duration: 'Under 45 Min',
    title: 'Immediate 24/7 Dispatch',
    description: 'Our mobile plumbing units are stationed locally and fully equipped for same-day arrival with zero overtime fees.',
    bullets: ['Rapid emergency response', 'Fully stocked service vehicles', 'GPS tracked dispatch']
  },
  {
    phase: 'Phase 02',
    duration: 'Step 2',
    title: 'HD Camera Inspection & Diagnostics',
    description: 'We run fiber-optic cameras directly into pipes to inspect the issue and show you the exact problem on screen.',
    bullets: ['Non-invasive diagnostic', 'Clear video evidence', 'Root cause identification']
  },
  {
    phase: 'Phase 03',
    duration: 'Step 3',
    title: 'Upfront Flat-Rate Pricing',
    description: 'You receive a transparent quote before any work begins. No hidden charges, no surprises, no hourly run-ups.',
    bullets: ['All-inclusive pricing', 'No overtime or weekend fees', 'Financing options available']
  },
  {
    phase: 'Phase 04',
    duration: 'Step 4',
    title: 'Precision Repair & 100% Guarantee',
    description: 'Licensed C-36 master plumbers execute clean, code-compliant repairs backed by full parts and labor warranties.',
    bullets: ['Spotless work area cleanup', 'Code-compliant craftsmanship', '100% satisfaction guarantee']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Rooter Hero arrived within 35 minutes when our mainline backed up at midnight on a Sunday. No overtime surcharge, upfront quote, and fixed in an hour. Absolute lifesavers.',
    author: 'James R.',
    role: 'Homeowner',
    company: 'Mission Hills, CA',
    metric: '35 Min',
    metricLabel: 'Emergency Response Time',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    rating: 5,
    serviceCategory: 'Emergency Drain',
    source: 'Google Verified',
    date: 'Yesterday'
  },
  {
    id: 'test-2',
    quote: 'Other plumbers quoted thousands to dig up our concrete driveway. Rooter Hero used trenchless pipe relining and finished in one day with zero damage to our landscaping.',
    author: 'Elena Rostova',
    role: 'Property Owner',
    company: 'Los Angeles, CA',
    metric: '$14,000',
    metricLabel: 'Saved in Excavation Costs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
    rating: 5,
    serviceCategory: 'Trenchless Sewer',
    source: 'Yelp Verified',
    date: '3 days ago'
  },
  {
    id: 'test-3',
    quote: 'Upgraded our leaking 50-gallon tank to a Navien tankless water heater. Clean installation, polite technicians who wore shoe covers, and endless hot water for the entire family.',
    author: 'Marcus Vance',
    role: 'Homeowner',
    company: 'San Fernando Valley',
    metric: 'Endless Hot Water',
    metricLabel: 'High-Efficiency Navien',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
    rating: 5,
    serviceCategory: 'Water Heaters',
    source: 'Google Verified',
    date: '1 week ago'
  },
  {
    id: 'test-4',
    quote: 'Our commercial kitchen floor drains backed up right during Friday dinner prep. The dispatch crew arrived with a 4,000 PSI hydro-jetter, scoured out all grease, and kept us open for service.',
    author: 'David Chen',
    role: 'Restaurant GM',
    company: 'Pasadena, CA',
    metric: 'Zero Downtime',
    metricLabel: 'Commercial Kitchen Cleanout',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80',
    rating: 5,
    serviceCategory: 'Commercial Hydro-Jet',
    source: 'Google Verified',
    date: '2 weeks ago'
  },
  {
    id: 'test-5',
    quote: 'We heard water running under the floorboards and our bill spiked. Rooter Hero pinpointed the exact pinhole leak acoustically through the slab and routed a clean PEX bypass with zero jackhammering.',
    author: 'Carla Mendoza',
    role: 'Homeowner',
    company: 'Encino, CA',
    metric: '0 Jackhammers',
    metricLabel: 'Acoustic Leak Isolation',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
    rating: 5,
    serviceCategory: 'Slab Leak Detection',
    source: 'Yelp Elite',
    date: '2 weeks ago'
  },
  {
    id: 'test-6',
    quote: 'Replaced 60-year-old galvanized pipes with modern copper and installed a whole-house water filtration system. Water pressure is incredible and the taste is crystal clear. Upfront flat pricing.',
    author: 'Michael Torres',
    role: 'Homeowner',
    company: 'Burbank, CA',
    metric: '100% Copper',
    metricLabel: 'Whole-Home Repiping',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80',
    rating: 5,
    serviceCategory: 'Copper Repiping',
    source: 'HomeAdvisor Top Rated',
    date: 'Last month'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Licensed C-36', symbol: 'LIC' },
  { name: '24/7 Dispatch', symbol: '24H' },
  { name: 'BBB Accredited A+', symbol: 'BBB' },
  { name: '100+ Yrs Heritage', symbol: '100' },
  { name: 'Zero Overtime Fee', symbol: '0$' },
  { name: 'EPA Lead-Safe', symbol: 'EPA' }
];

export const FAQS = [
  {
    question: 'Do you charge extra for emergency, night, or weekend calls?',
    answer: 'No. Rooter Hero Plumbing operates 24/7/365 with upfront flat-rate pricing. We never charge extra overtime fees for nights, weekends, or holidays.'
  },
  {
    question: 'How quickly can a plumber arrive at my location?',
    answer: 'We maintain dispatched service vehicles across the Los Angeles, San Fernando Valley, Orange County, and surrounding areas. Typical arrival time is under 45 to 60 minutes for urgent calls.'
  },
  {
    question: 'What is trenchless sewer repair and how does it save money?',
    answer: 'Trenchless sewer repair allows us to replace or reline damaged underground sewer pipes through small access holes, eliminating the need to tear up driveways, lawns, sidewalks, and patios.'
  },
  {
    question: 'Are your plumbers licensed and background-checked?',
    answer: 'Yes. All Rooter Hero technicians are state-licensed (CA Lic # C-36), insured, background-checked, and drug-tested with continuous factory certifications.'
  },
  {
    question: 'Do you offer free video camera inspections with drain cleanout?',
    answer: 'Yes, with qualifying drain cleanouts we provide a complimentary high-definition video camera inspection to verify that roots, scale, and obstructions have been completely removed.'
  }
];
