import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../../assets/logo.png';

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4 text-[#0F8A96] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4 text-[#0F8A96] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4 text-[#0F8A96] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4 text-[#0F8A96] shrink-0" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: <InstagramIcon />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <LinkedinIcon />,
    },
    {
      name: 'X',
      href: 'https://x.com',
      icon: <XIcon />,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: <FacebookIcon />,
    },
  ];

  return (
    <footer id="footer" className="bg-[#FAF7F2] border-t border-zinc-300 w-full relative z-10">
      
      {/* 3-Column Split Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
        
        {/* Column 1 - Logo */}
        <div className="py-8 md:py-12 px-6 sm:px-12 flex flex-col items-start justify-start text-left">
          {/* Brand Logo */}
          <img
            src={logoImg}
            alt="WuMa Matchmaking"
            className="h-20 sm:h-24 w-auto object-contain filter brightness-95"
          />
        </div>

        {/* Column 2 - Social Links */}
        <div className="py-8 md:py-12 px-6 sm:px-12 flex flex-col items-start justify-start text-left">
          {/* Vertical Social Links list */}
          <div className="flex flex-col gap-4 font-sans text-xs sm:text-sm text-zinc-700 font-medium">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#0F8A96] transition-colors duration-300"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 - Contact Us */}
        <div className="py-8 md:py-12 px-6 sm:px-12 flex flex-col items-start justify-start text-left">
          <div className="space-y-4 w-full">
            <h4 className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#053C42]">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 font-sans text-xs text-zinc-600 font-medium">
              <a href="mailto:concierge@wumamatch.com" className="flex items-center gap-2.5 hover:text-[#0F8A96] transition-colors duration-300">
                <Mail className="w-4 h-4 text-[#0F8A96]" />
                <span>concierge@wumamatch.com</span>
              </a>
              <a href="tel:+18008889862" className="flex items-center gap-2.5 hover:text-[#0F8A96] transition-colors duration-300">
                <Phone className="w-4 h-4 text-[#0F8A96]" />
                <span>+1 (800) 888-WUMA</span>
              </a>
              <div className="flex items-start gap-2.5 text-zinc-600">
                <MapPin className="w-4 h-4 text-[#0F8A96] mt-0.5 shrink-0" />
                <span>San Francisco • Vancouver • Sydney • Singapore</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Sub-footer bottom bar */}
      <div className="py-4 px-6 sm:px-12 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans tracking-wide text-zinc-500 font-medium">
          <p>©{currentYear} WuMa-Match, Inc. All Rights Reserved.</p>
          <a
            href="#privacy"
            className="hover:text-[#0F8A96] transition-colors duration-300"
          >
            Privacy Notice
          </a>
        </div>
      </div>

    </footer>
  );
};
