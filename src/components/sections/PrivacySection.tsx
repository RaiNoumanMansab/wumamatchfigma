import React, { useRef } from 'react';
import { Shield, EyeOff, Search, Lock } from 'lucide-react';

export const PrivacySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const points = [
    {
      icon: <Shield className="w-5 h-5 text-[#0F8A96]" />,
      title: 'Liveness Check',
      desc: 'Rigorous verification process to ensure every member is genuine, active, and identity-verified.',
    },
    {
      icon: <EyeOff className="w-5 h-5 text-[#0F8A96]" />,
      title: 'Photos Protected',
      desc: 'Your photos are never shared publicly or cataloged. Only hand-selected matches approved by you can view them.',
    },
    {
      icon: <Search className="w-5 h-5 text-[#0F8A96]" />,
      title: 'Not Indexed',
      desc: 'Your profile is completely invisible to search engines, crawlers, and public directories.',
    },
  ];

  const profiles = [
    {
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      tag: 'Vetted Member',
      tagColor: 'from-[#D4A853] to-[#B38F44]',
      id: 'WM-9832',
      status: 'Verified',
    },
    {
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      tag: 'VIP Client',
      tagColor: 'from-[#0F8A96] to-[#0D7984]',
      id: 'WM-4102',
      status: 'VIP Verified',
    },
    {
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      tag: 'Vetted Member',
      tagColor: 'from-[#D4A853] to-[#B38F44]',
      id: 'WM-7392',
      status: 'Verified',
    },
  ];

  return (
    <section id="privacy" className="bg-[#FAF7F2] py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column - Copy & Points */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="block text-[10px] tracking-[0.25em] font-bold text-[#D4A853] uppercase font-sans font-semibold">
                Security & Privacy
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#053C42] leading-tight font-serif">
                Your privacy is our highest mandate.
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                There is no public database browsing. Your profile is strictly private, shared only with curated matches you explicitly approve beforehand.
              </p>
            </div>

            {/* Verification Features */}
            <div className="space-y-4 pt-4 border-t border-[#0F8A96]/10">
              {points.map((pt, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#0F8A96]/5 border border-[#0F8A96]/15 flex items-center justify-center shrink-0">
                    {pt.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-xs sm:text-sm text-[#053C42] tracking-wide mb-0.5">
                      {pt.title}
                    </h3>
                    <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Vertically Scrolling Feed of Confidential Profiles */}
          <div className="lg:col-span-5 w-full flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm h-[510px] overflow-hidden rounded-3xl border border-[#0F8A96]/10 bg-white/50 p-4">
              
              {/* Premium Fade Gradients at Top and Bottom of Scroll Container */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#FAF7F2] to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FAF7F2] to-transparent z-20 pointer-events-none" />

              <div 
                ref={scrollRef}
                className="h-full overflow-y-auto flex flex-col gap-6 scrollbar-none snap-y snap-mandatory scroll-smooth pb-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {profiles.map((profile, index) => (
                  <div 
                    key={index}
                    className="relative w-full h-[450px] shrink-0 rounded-2xl overflow-hidden shadow-luxury border border-[#0F8A96]/10 bg-white p-5 flex flex-col justify-between snap-center"
                  >
                    {/* Profile Card Mockup */}
                    <div className="relative h-[290px] w-full rounded-xl overflow-hidden bg-zinc-100 flex items-center justify-center group">
                      {/* Blur portrait placeholder */}
                      <img
                        src={profile.img}
                        alt="Confidential Portrait Profile"
                        className="w-full h-full object-cover filter blur-[24px] scale-105 pointer-events-none select-none"
                      />
                      
                      {/* Lock Overlay */}
                      <div className="absolute inset-0 bg-[#071415]/40 flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center shadow-lg border border-[#D4A853]/30 mb-2.5 animate-gentle-float">
                          <Lock className="w-4.5 h-4.5 text-[#D4A853]" />
                        </div>
                        <span className="text-[10px] tracking-[0.2em] font-bold text-white uppercase block mb-1">
                          Confidential Profile
                        </span>
                        <p className="text-[9px] text-zinc-300 max-w-[180px] leading-relaxed">
                          Photos & full bio unlocked only after mutual authorization.
                        </p>
                      </div>
                    </div>

                    {/* Profile Metadata - showing clear, premium verified status */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#053C42] tracking-wider uppercase bg-[#053C42]/5 px-2 py-0.5 rounded font-sans">
                          ID: {profile.id}
                        </span>
                        <span className="bg-[#D4A853]/15 text-[#B38F44] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-[#D4A853]/30 font-sans">
                          {profile.status}
                        </span>
                      </div>
                      <div className="space-y-1.5 pt-2 border-t border-[#0F8A96]/10">
                        <div className="h-2.5 w-full bg-zinc-200/60 rounded" />
                        <div className="h-2.5 w-4/5 bg-zinc-200/60 rounded" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
