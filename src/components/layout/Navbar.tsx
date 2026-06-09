import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#process' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Apply Now', href: '#cta' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 pointer-events-none">
      <nav
        className="max-w-7xl mx-auto bg-[#FAF7F2]/80 backdrop-blur-md border border-white/20 rounded-full shadow-luxury px-4 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-300"
      >
        
        {/* Left: Logo */}
        <a href="#home" className="flex items-center group">
          <img
            src={logoImg}
            alt="WuMa Matchmaking"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-[#053C42] hover:text-[#0F8A96] transition-colors duration-300 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Join Now Button & Hamburger Menu */}
        <div className="flex items-center gap-3">
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold bg-[#8CD1D5] text-[#053C42] hover:bg-[#0F8A96] hover:text-white transition-all duration-300 shadow-sm"
          >
            Join Now
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#053C42] hover:text-[#0F8A96] transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer menu */}
      {isOpen && (
        <div className="mt-2 max-w-7xl mx-auto bg-[#FAF7F2]/95 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-luxury flex flex-col items-center gap-4 md:hidden pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold tracking-wider text-[#053C42] hover:text-[#0F8A96] transition-colors duration-300 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

