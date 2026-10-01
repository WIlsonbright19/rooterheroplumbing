import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'work' },
    { label: 'Process', id: 'approach' },
    { label: 'Book', id: 'book' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'services', 'work', 'approach', 'book'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#d0d8e4]'
          : 'bg-white border-b border-[#d0d8e4]/60'
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 h-18 flex items-center justify-between">
        {/* Brand Logomark */}
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, 'about')}
          className="flex items-center gap-2.5 text-[#1e1e1e] no-underline focus:outline-none"
        >
          <div className="w-7 h-7 rounded-[4px] bg-[#1e1e1e] flex items-center justify-center text-white font-medium text-xs">
            RH
          </div>
          <span className="text-xl font-semibold tracking-[-0.5px] text-[#1e1e1e]">
            Rooter Hero
          </span>
        </a>

        {/* Desktop Navigation Links (Large screens only) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-[15px] font-medium transition-colors py-1 relative no-underline ${
                  isActive
                    ? 'text-[#1e1e1e]'
                    : 'text-[#5a6271] hover:text-[#1e1e1e]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1e1e1e]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTA (Large screens only) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:8669418214"
            className="text-xs font-mono text-[#5a6271] hover:text-[#1e1e1e] transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(866) 941-8214</span>
          </a>

          <button
            onClick={onBookClick}
            className="btn-brixora-primary group cursor-pointer !min-w-[110px]"
          >
            <span>Book</span>
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile & Tablet Toggle Bar (< 1024px) */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={onBookClick}
            className="btn-brixora-primary !min-w-[80px] !px-3.5 !py-1.5 !text-sm cursor-pointer"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1e1e1e] border border-[#d0d8e4] rounded-[4px] hover:bg-neutral-50 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#d0d8e4] bg-white px-6 sm:px-8 py-6 shadow-sm">
          <div className="flex flex-col gap-3 max-w-md">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-base font-medium py-2.5 border-b border-neutral-100 flex items-center justify-between no-underline transition-colors ${
                  activeSection === item.id ? 'text-[#1e1e1e] font-semibold' : 'text-[#5a6271] hover:text-[#1e1e1e]'
                }`}
              >
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href="tel:8669418214"
              className="text-sm font-mono text-[#1e1e1e] py-3 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>(866) 941-8214 · 24/7 Dispatch Hotline</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
