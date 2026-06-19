import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const YourMatchesPage: React.FC = () => {
  const matches = [
    {
      id: 1,
      status: 'ACCEPTED',
      statusColor: 'bg-brand-teal text-white',
      verifiedType: 'PREMIUM VERIFIED',
      verifiedColor: 'text-brand-gold bg-[#F9F5EE]',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
      age: 34,
      location: 'Australia',
      job: 'ARCHITECT',
      description: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spots. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
      height: '165-173 CM',
      education: "MASTER'S DEGREE"
    },
    {
      id: 2,
      status: 'PENDING',
      statusColor: 'bg-[#C19C74] text-white',
      verifiedType: 'PREMIUM VERIFIED',
      verifiedColor: 'text-brand-gold bg-[#F9F5EE]',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
      age: 34,
      location: 'Australia',
      job: 'ARCHITECT',
      description: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spots. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
      height: '165-173 CM',
      education: "MASTER'S DEGREE"
    },
    {
      id: 3,
      status: 'PENDING',
      statusColor: 'bg-[#C19C74] text-white',
      verifiedType: 'PREMIUM VERIFIED',
      verifiedColor: 'text-brand-gold bg-[#F9F5EE]',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
      age: 34,
      location: 'Australia',
      job: 'ARCHITECT',
      description: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spots. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
      height: '165-173 CM',
      education: "MASTER'S DEGREE"
    }
  ];

  return (
    <div className="w-full max-w-[var(--container-max-width)] mx-auto pb-12">
      {/* Page Title */}
      <div>
        <h1 className="font-sans font-medium text-[28px] leading-[36px] 2xl:text-[38px] 2xl:leading-[46px] transition-all duration-300 text-brand-charcoal mb-2">
          Your Matches
        </h1>
        <p className="font-sans font-normal text-[13px] sm:text-[14px] 2xl:text-[18px] transition-all duration-300 text-brand-charcoal/70 mb-8">
          Discover and connect with your carefully selected mutual matches.
        </p>
      </div>

      {/* Matches Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {matches.map((match) => (
          <div key={match.id} className="bg-white rounded-[20px] border border-[#4A4541] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Top Section */}
            <div className="relative w-full flex flex-col items-center pt-10 pb-2">
              {/* Status Badge */}
              <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest ${match.statusColor}`}>
                <Check size={12} strokeWidth={3} />
                {match.status}
              </div>

              {/* Profile Image */}
              <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                <img 
                  src={match.image} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Verified Badge (Overlapping Image) */}
              <div className={`relative -mt-3 z-10 px-4 py-1.5 rounded-full flex items-center gap-1.5 text-[9px] font-bold tracking-widest ${match.verifiedColor} border border-white`}>
                <ShieldCheck size={12} />
                {match.verifiedType}
              </div>
            </div>

            {/* Content Section */}
            <div className="px-8 pb-8 pt-4 text-center flex flex-col items-center flex-1">
              <h3 className="font-sans text-[18px] font-semibold text-brand-charcoal mb-1">
                {match.age} Yrs • {match.location}
              </h3>
              <p className="text-[10px] font-bold text-[#C19C74] uppercase tracking-widest mb-4">
                {match.job}
              </p>

              <p className="font-sans font-normal text-[12px] leading-[16px] text-[#2D3748] mb-6">
                {match.description}
              </p>

              <div className="flex items-center justify-center gap-12 w-full mb-8">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-bold text-brand-charcoal/50 uppercase tracking-widest mb-1.5">HEIGHT</span>
                  <span className="font-sans font-normal text-[12px] leading-[16px] text-[#2D3748]">{match.height}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-bold text-brand-charcoal/50 uppercase tracking-widest mb-1.5">EDUCATION</span>
                  <span className="font-sans font-normal text-[12px] leading-[16px] text-[#2D3748]">{match.education}</span>
                </div>
              </div>

              {/* View Details Button */}
              <button className="w-full py-3.5 bg-[#EAF4F4] text-brand-teal rounded-xl text-[11px] font-bold tracking-widest uppercase hover:bg-brand-teal hover:text-white transition-colors mt-auto">
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
