import React from 'react';
import { UserCheck, Sparkles, Heart } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      badge: 'Dedicated Matchmakers',
      title: '1-on-1 Personal Matchmaking',
      desc: 'Partner with a dedicated elite matchmaker who gets to know your personality, values, and relationship aspirations through deep personal consultation.',
      icon: <UserCheck className="w-5 h-5 text-[#D4A853]" />,
      stepNum: '01',
    },
    {
      badge: 'Highly Vetted Singles',
      title: 'Quality Over Quantity',
      desc: 'Every single candidate is rigorously screened, interviewed, and identity-checked to ensure high compatibility and genuine alignment with your goals.',
      icon: <Sparkles className="w-5 h-5 text-[#D4A853]" />,
      stepNum: '02',
    },
    {
      badge: 'Relationship-Focused',
      title: 'Meaningful Connections',
      desc: 'We eschew superficial matching in favor of high-fidelity pairings built on shared lifestyle values, vision, intellect, and emotional readiness.',
      icon: <Heart className="w-5 h-5 text-[#D4A853]" />,
      stepNum: '03',
    },
  ];

  return (
    <section id="process" className="bg-[#071415] py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-radial-gold opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-light text-white mb-10">
          Our Human-Centric Matchmaking Process
        </h2>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#0b1c1e] hover:bg-[#0e2427] border border-[#0F8A96]/10 hover:border-[#0F8A96]/30 rounded-2xl p-6 sm:p-7 text-left transition-all duration-500 flex flex-col justify-between h-full group relative"
            >
              {/* Top: Title & Description */}
              <div className="mb-6">
                <h3 className="font-serif text-lg sm:text-xl text-white font-light mb-3 group-hover:text-[#D4A853] transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom: Badge, Step Indicator, and Icon with reduced opacity and no line separator */}
              <div className="flex items-center justify-between mt-auto pt-2 opacity-40 transition-opacity duration-300 group-hover:opacity-80">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest text-[#0F8A96] bg-[#0F8A96]/5 border border-[#0F8A96]/15 uppercase">
                  {step.badge}
                </span>
                
                {/* Step Number & Icon */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="text-[10px] tracking-[0.2em] font-bold text-[#D4A853] uppercase font-sans">
                    Step {step.stepNum}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500">
                    {step.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
