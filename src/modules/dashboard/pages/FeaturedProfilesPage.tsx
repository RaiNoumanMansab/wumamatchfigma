import React from 'react';
import { ShieldCheck, Lock, ArrowUpRight } from 'lucide-react';

export const FeaturedProfilesPage: React.FC = () => {
  const profiles = [
    {
      id: 1,
      verifiedType: 'PREMIUM VERIFIED',
      verifiedColor: 'text-brand-gold bg-[#F9F5EE]',
      age: 34,
      location: 'Australia',
      job: 'ARCHITECT',
      description: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spots. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
      height: '165-173 CM',
      education: "MASTER'S DEGREE"
    },
    {
      id: 2,
      verifiedType: 'BASIC VERIFIED',
      verifiedColor: 'text-brand-teal bg-brand-teal/10',
      age: 34,
      location: 'Australia',
      job: 'ARCHITECT',
      description: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spots. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
      height: '165-173 CM',
      education: "MASTER'S DEGREE"
    },
    {
      id: 3,
      verifiedType: 'BASIC VERIFIED',
      verifiedColor: 'text-brand-teal bg-brand-teal/10',
      age: 34,
      location: 'Australia',
      job: 'ARCHITECT',
      description: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spots. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
      height: '165-173 CM',
      education: "MASTER'S DEGREE"
    }
  ];

  return (
    <div className="w-full max-w-[1229px] mx-auto pb-12">
      {/* Page Title */}
      <h1 className="font-sans text-[26px] font-medium text-brand-charcoal mb-8">
        Featured Profile
      </h1>

      {/* Filter Bar */}
      <div className="bg-white rounded-[20px] border border-[#E5E5E5] p-4 mb-8 shadow-sm">
        <div className="flex items-end gap-4 flex-wrap lg:flex-nowrap">
          
          {/* Preferred Gender */}
          <div className="flex-1 min-w-[140px] space-y-1.5">
            <label className="block text-[10px] font-bold text-brand-charcoal/60 uppercase tracking-widest">
              PREFERRED GENDER
            </label>
            <select className="w-full bg-white border border-[#E5E5E5] rounded-xl px-3 py-2.5 text-[13px] text-brand-charcoal focus:border-brand-teal outline-none transition-all appearance-none cursor-pointer">
              <option>All Genders</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Min Age */}
          <div className="w-[100px] shrink-0 space-y-1.5">
            <label className="block text-[10px] font-bold text-brand-charcoal/60 uppercase tracking-widest">
              MIN AGE
            </label>
            <input 
              type="number" 
              defaultValue={25}
              className="w-full bg-white border border-[#E5E5E5] rounded-xl px-3 py-2.5 text-[13px] text-brand-charcoal focus:border-brand-teal outline-none transition-all"
            />
          </div>

          {/* Max Age */}
          <div className="w-[100px] shrink-0 space-y-1.5">
            <label className="block text-[10px] font-bold text-brand-charcoal/60 uppercase tracking-widest">
              MAX AGE
            </label>
            <input 
              type="number" 
              defaultValue={45}
              className="w-full bg-white border border-[#E5E5E5] rounded-xl px-3 py-2.5 text-[13px] text-brand-charcoal focus:border-brand-teal outline-none transition-all"
            />
          </div>

          {/* Residence Country */}
          <div className="flex-1 min-w-[140px] space-y-1.5">
            <label className="block text-[10px] font-bold text-brand-charcoal/60 uppercase tracking-widest">
              RESIDENCE COUNTRY
            </label>
            <select className="w-full bg-white border border-[#E5E5E5] rounded-xl px-3 py-2.5 text-[13px] text-brand-charcoal focus:border-brand-teal outline-none transition-all appearance-none cursor-pointer">
              <option>All Countries</option>
              <option>Australia</option>
              <option>United States</option>
              <option>United Kingdom</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 shrink-0 pb-0.5">
            <button className="px-6 py-2.5 bg-brand-teal text-white rounded-xl text-[11px] font-bold tracking-widest uppercase hover:bg-[#0aa39e] transition-colors flex items-center gap-1.5 group whitespace-nowrap">
              SEARCH
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45 group-active:rotate-90" />
            </button>
            
            <button className="px-5 py-2.5 border border-brand-charcoal/20 text-brand-charcoal rounded-xl text-[12px] font-medium hover:bg-[#f9f5ee] transition-colors whitespace-nowrap">
              Reset
            </button>
          </div>

        </div>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <div key={profile.id} className="bg-white rounded-[20px] border border-[#4A4541] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Top Section with blur */}
            <div className="relative h-[210px] w-full flex flex-col items-center justify-center bg-white border-b border-brand-charcoal/5">
              <span className="absolute top-4 left-4 flex items-center gap-1.5 text-[10px] font-bold text-brand-teal tracking-widest">
                <ShieldCheck size={14} />
                VERIFIED
              </span>

              {/* Blurred Image area */}
              <div className="relative w-[110px] h-[110px] rounded-full overflow-hidden border-4 border-white shadow-lg mt-4">
                <img 
                  src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300`} 
                  alt="Profile" 
                  className="w-full h-full object-cover blur-md scale-110"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-white/30 flex flex-col items-center justify-center text-[#9B7A5B]">
                  <Lock size={20} className="mb-1" />
                  <span className="text-[9px] font-bold tracking-widest uppercase">
                    JOIN TO VIEW
                  </span>
                </div>
              </div>

              {/* Badge */}
              <div className={`mt-4 px-4 py-1.5 rounded-full flex items-center gap-1.5 text-[9px] font-bold tracking-widest ${profile.verifiedColor}`}>
                <ShieldCheck size={12} />
                {profile.verifiedType}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 text-center flex flex-col items-center">
              <h3 className="font-serif text-xl font-medium text-brand-charcoal mb-1">
                {profile.age} Yrs • {profile.location}
              </h3>
              <p className="text-[11px] font-bold text-brand-charcoal/50 uppercase tracking-widest mb-4">
                {profile.job}
              </p>

              <p className="text-[13px] font-light leading-relaxed text-brand-charcoal/80 mb-6 line-clamp-3">
                {profile.description}
              </p>

              <div className="flex items-center justify-between w-full mb-6 px-2">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-widest mb-1">HEIGHT</span>
                  <span className="text-[12px] font-medium text-brand-charcoal">{profile.height}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-brand-charcoal/50 uppercase tracking-widest mb-1">EDUCATION</span>
                  <span className="text-[12px] font-medium text-brand-charcoal">{profile.education}</span>
                </div>
              </div>

              <button className="w-full py-3 bg-[#EAF4F4] text-brand-teal rounded-xl text-[12px] font-semibold hover:bg-brand-teal hover:text-white transition-colors duration-300">
                Unlock All Profiles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
