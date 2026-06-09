import React from 'react';
import { PhoneCall } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section id="cta" className="bg-[#071415] py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background blur decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#0F8A96]/10 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Inner light card */}
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#D4A853]/20 p-6 sm:p-8 md:p-10 text-center shadow-luxury flex flex-col items-center justify-center gap-6 relative overflow-hidden">
          
          {/* Subtle gold corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4A853]/25 rounded-tl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D4A853]/25 rounded-br-3xl pointer-events-none" />

          {/* Heading */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#053C42] leading-tight font-serif">
              Ready to Find Your Soulmate? Let WuMa-Match Guide You to Your Perfect Partner.
            </h2>
            <p className="text-zinc-500 text-[10px] sm:text-xs tracking-wider uppercase font-semibold">
              Begin your bespoke journey today. Confidentiality guaranteed.
            </p>
          </div>

          {/* Button */}
          <div>
            <a
              href="tel:+123456789"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase text-white bg-[#0F8A96] hover:bg-[#0D7984] hover:scale-105 transition-all duration-300 shadow-glow-teal hover:shadow-[0_0_30px_rgba(15,138,150,0.6)]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4A853]" />
              Book A Call
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
