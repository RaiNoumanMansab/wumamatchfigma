import React from 'react';
import { Check } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const cards = [
    {
      metric: '80%',
      label: 'Relationship-Ready Singles',
      bullets: [
        'Thoroughly vetted single members',
        'Focused on long-term commitment',
        'Background & identity verified',
        'Highly motivated relationship intent'
      ],
    },
    {
      metric: '1M+',
      label: 'Rated Dating Service',
      bullets: [
        '98% client satisfaction rate',
        'Accredited professional network',
        'Featured in leading publications',
        'Trusted by top professionals'
      ],
    },
    {
      metric: '#1',
      label: 'Matchmaker in America',
      bullets: [
        '100% human-curated introductions',
        'Confidential executive search',
        'No public profiles or databases',
        'Bespoke matchmaking experience'
      ],
    },
  ];

  return (
    <section id="stats" className="bg-[#FAF7F2] py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background soft radial gradient for premium look */}
      <div className="absolute inset-0 bg-radial-gold opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#053C42] mb-3 font-serif">
          Find Success With WuMa
        </h2>
        <p className="text-zinc-600 text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Our proven process ensures meaningful introductions and lasting relationships. We are committed to your journey.
        </p>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/80 rounded-[1.5rem] border border-[#D4A853]/15 p-6 sm:p-8 text-left shadow-soft hover:shadow-luxury hover:border-[#D4A853]/35 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Top Section */}
              <div>
                <span className="block font-serif text-4xl sm:text-5xl font-light text-[#0F8A96] mb-2 tracking-tight">
                  {card.metric}
                </span>
                <span className="block text-xs sm:text-sm text-[#0F8A96] font-semibold tracking-wide mb-4">
                  {card.label}
                </span>
              </div>
              
              {/* Separator Divider */}
              <div className="border-t border-[#D4A853]/15 my-4" />

              {/* Bottom Section (Bullets) */}
              <ul className="space-y-2.5">
                {card.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-600 font-light">
                    <span className="w-5 h-5 rounded-full bg-[#97DDD9]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#0F8A96]" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
