import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Crown, Lock, ChevronDown, Info } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';
import { cardReveal, containerStagger } from '../../lib/motion';

type MemberData = {
  age: number;
  country: string;
  occupation: string;
  bio: string;
  height: string;
  education: string;
  badgeType: 'PREMIUM' | 'BASIC';
  image: string;
};

const membersList: MemberData[] = [
  {
    age: 34,
    country: 'Australia',
    occupation: 'ARCHITECT',
    bio: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spaces. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
    height: '165–173 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'PREMIUM',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    age: 34,
    country: 'Australia',
    occupation: 'ARCHITECT',
    bio: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spaces. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
    height: '165–173 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    age: 34,
    country: 'Australia',
    occupation: 'ARCHITECT',
    bio: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spaces. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
    height: '165–173 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    age: 34,
    country: 'Australia',
    occupation: 'ARCHITECT',
    bio: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spaces. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
    height: '165–173 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    age: 34,
    country: 'Australia',
    occupation: 'ARCHITECT',
    bio: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spaces. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
    height: '165–173 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    age: 34,
    country: 'Australia',
    occupation: 'ARCHITECT',
    bio: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spaces. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
    height: '165–173 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    age: 34,
    country: 'Australia',
    occupation: 'ARCHITECT',
    bio: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spaces. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
    height: '165–173 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    age: 34,
    country: 'Australia',
    occupation: 'ARCHITECT',
    bio: 'A thoughtful professional who values deep conversation, design aesthetics, and exploring hidden city spaces. Looking for someone with a mature perspective on life and a shared appreciation for growth.',
    height: '165–173 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&h=300&q=80'
  }
];

export const MembersPage: React.FC = () => {
  const { t } = useLocalization();

  // Search filter states
  const [gender, setGender] = useState('All Genders');
  const [minAge, setMinAge] = useState('25');
  const [maxAge, setMaxAge] = useState('45');
  const [country, setCountry] = useState('All Countries');

  return (
    <div className="relative z-10 bg-white min-h-screen">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-[0.05]" />

      {/* Header Block (Beige background block, matching mockup) */}
      <section className="relative overflow-hidden bg-[#EEEEE9] pt-28 md:pt-36 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 border-b border-brand-teal/10">
        <div className="max-w-[var(--container-max-width)] mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="block text-xs font-bold tracking-[0.25em] text-brand-gold uppercase font-sans mb-3">
              {t('members.eyebrow') || 'OUR MEMBERS'}
            </span>

            <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:text-4xl lg:text-5xl mb-4">
              {t('members.heading') || 'Meet Some of Our Members'}
            </h1>

            <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
              {t('members.description') || 'All members are identity-verified. Photos and sensitive details are blurred for public visitors.'}
            </p>
          </div>
        </div>
      </section>

      {/* Full-width Gold Warning Banner */}
      <div className="w-full bg-gradient-to-r from-[#D4A853] via-[#C29956] to-[#9B7A5B] py-3 px-6 flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-widest text-white relative z-20 shadow-sm text-center">
        <Info className="w-4 h-4 text-black shrink-0" />
        <span className="text-white">YOU ARE VIEWING LIMITED PROFILES. JOIN WUMA MATCH TO UNLOCK FULL PROFILES & REPORTS.</span>
      </div>

      {/* Filters & Grid Section (White background) */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[var(--container-max-width)] mx-auto relative z-10 text-center">
          
          {/* Filter / Search Bar Container */}
          <div className="mx-auto bg-white border border-brand-teal/10 rounded-2xl p-6 shadow-sm mb-12 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
              
              {/* Preferred Gender */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40">
                  Preferred Gender
                </label>
                <div className="relative">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full h-11 bg-white border border-zinc-200 rounded-lg pl-3 pr-8 text-xs font-semibold text-brand-charcoal focus:outline-none focus:border-brand-teal appearance-none cursor-pointer"
                  >
                    <option>All Genders</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/40 pointer-events-none" />
                </div>
              </div>

              {/* Min Age */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40">
                  Min Age
                </label>
                <div className="relative">
                  <select
                    value={minAge}
                    onChange={(e) => setMinAge(e.target.value)}
                    className="w-full h-11 bg-white border border-zinc-200 rounded-lg pl-3 pr-8 text-xs font-semibold text-brand-charcoal focus:outline-none focus:border-brand-teal appearance-none cursor-pointer"
                  >
                    <option>18</option>
                    <option>25</option>
                    <option>30</option>
                    <option>35</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/40 pointer-events-none" />
                </div>
              </div>

              {/* Max Age */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40">
                  Max Age
                </label>
                <div className="relative">
                  <select
                    value={maxAge}
                    onChange={(e) => setMaxAge(e.target.value)}
                    className="w-full h-11 bg-white border border-zinc-200 rounded-lg pl-3 pr-8 text-xs font-semibold text-brand-charcoal focus:outline-none focus:border-brand-teal appearance-none cursor-pointer"
                  >
                    <option>35</option>
                    <option>40</option>
                    <option>45</option>
                    <option>50</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/40 pointer-events-none" />
                </div>
              </div>

              {/* Residence Country */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40">
                  Residence Country
                </label>
                <div className="relative">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full h-11 bg-white border border-zinc-200 rounded-lg pl-3 pr-8 text-xs font-semibold text-brand-charcoal focus:outline-none focus:border-brand-teal appearance-none cursor-pointer"
                  >
                    <option>All Countries</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/40 pointer-events-none" />
                </div>
              </div>

              {/* Search Button */}
              <button
                type="button"
                className="w-full h-11 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors duration-300 shadow-sm flex items-center justify-center gap-2"
              >
                <span>SEARCH</span>
              </button>

              {/* Reset Button */}
              <button
                type="button"
                onClick={() => {
                  setGender('All Genders');
                  setMinAge('25');
                  setMaxAge('45');
                  setCountry('All Countries');
                }}
                className="w-full h-11 border border-zinc-200 hover:border-brand-teal hover:text-brand-teal text-zinc-400 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors duration-300 bg-white flex items-center justify-center"
              >
                Reset
              </button>

            </div>
          </div>

          {/* 4-column cards grid layout */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  mx-auto mb-16 text-center"
          >
            {membersList.map((member, idx) => (
              <motion.div
                key={idx}
                variants={cardReveal}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  transition: { duration: 0.28, ease: 'easeOut' },
                }}
                className="flex flex-col justify-between rounded-[20px] border border-[#4A4541] bg-white p-6 text-center shadow-[0_12px_32px_rgb(var(--color-brand-charcoal)/0.02)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_48px_rgb(var(--color-brand-charcoal)/0.06)] hover:border-brand-gold/30 relative max-w-[270px] w-full mx-auto"
              >
                {/* Verified Pill Badge (Top Left) */}
                <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full border border-brand-teal/20 bg-white/90 px-2.5 py-1 text-[8px] font-sans font-bold uppercase tracking-wider text-brand-teal shadow-sm">
                  <Shield className="w-2.5 h-2.5 text-brand-teal" />
                  VERIFIED
                </div>

                {/* Centered Avatar and Badge Wrapper */}
                <div className="relative w-28 h-28 mx-auto mb-6 mt-2">
                  {/* Centered Blurred Avatar Circle */}
                  <div className="w-full h-full rounded-full overflow-hidden border border-brand-teal/10 bg-brand-cream flex items-center justify-center relative">
                    <img
                      src={member.image}
                      alt="Member profile"
                      className="w-full h-full object-cover blur-[3px] scale-110 select-none"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/15">
                      <Lock className="w-4 h-4 text-brand-gold mb-1" />
                      <span className="text-[8px] font-sans font-bold uppercase tracking-[0.16em] text-brand-gold">
                        JOIN TO VIEW
                      </span>
                    </div>
                  </div>

                  {/* Premium / Basic Badge Overlapping the Bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 whitespace-nowrap">
                    {member.badgeType === 'PREMIUM' ? (
                      <div className="inline-flex items-center justify-center gap-1 rounded-full border border-brand-gold/30 bg-white px-3 py-1 text-[8px] font-sans font-bold uppercase tracking-wider text-brand-gold shadow-md">
                        <Crown className="w-2.5 h-2.5 text-brand-gold" />
                        PREMIUM VERIFIED
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center gap-1 rounded-full border border-brand-teal/30 bg-white px-3 py-1 text-[8px] font-sans font-bold uppercase tracking-wider text-brand-teal shadow-md">
                        <Shield className="w-2.5 h-2.5 text-brand-teal" />
                        BASIC VERIFIED
                      </div>
                    )}
                  </div>
                </div>

                {/* Blurred Personal Details Block */}
                <div className="relative my-4">
                  {/* Blurred Content Container */}
                  <div className="blur-[2px] select-none py-1">
                    <h4 className="font-serif text-[17px] font-bold text-brand-charcoal text-center leading-none">
                      {member.age} Yrs • {member.country}
                    </h4>
                    
                    <span className="block text-[9px] font-sans font-bold uppercase tracking-[0.18em] text-brand-gold/90 text-center mt-2 leading-none">
                      {member.occupation}
                    </span>
                  </div>

                  {/* Lock Badge Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-brand-teal/15 bg-white/95 px-3 py-1 text-[8px] font-sans font-bold uppercase tracking-widest text-brand-teal shadow-sm flex items-center gap-1 transition-transform duration-300 hover:scale-105">
                      <Lock className="w-3 h-3 text-brand-teal" />
                      LOCKED
                    </div>
                  </div>
                </div>

                {/* Bio Paragraph (Clear and readable) */}
                <div className="my-3 flex-grow flex items-center justify-center">
                  <p className="text-[10px] font-normal leading-relaxed text-brand-charcoal/70 text-center px-2">
                    {member.bio}
                  </p>
                </div>

                {/* Divider & Heights / Education Metadata */}
                <div className="w-full pt-4 border-t border-brand-charcoal/10 flex items-center justify-between text-left mt-auto relative">
                  <div className="flex w-full justify-between blur-[2px] select-none">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40 leading-none">
                        HEIGHT
                      </span>
                      <span className="text-[10px] font-bold text-brand-charcoal mt-1 leading-none">
                        {member.height}
                      </span>
                    </div>
                    
                    <div className="flex flex-col text-right">
                      <span className="text-[8px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40 leading-none">
                        EDUCATION
                      </span>
                      <span className="text-[10px] font-bold text-brand-charcoal mt-1 leading-none">
                        {member.education}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Unlock All Profiles Outline Button inside each card */}
                <button
                  type="button"
                  className="w-full mt-4 text-center py-2 rounded-lg border border-brand-teal/20 bg-brand-teal/5 text-brand-teal hover:bg-brand-teal/10 transition-colors duration-300 text-[10px] font-bold tracking-wider uppercase shadow-sm"
                >
                  Unlock All Profiles
                </button>

              </motion.div>
            ))}
          </motion.div>

          {/* End of results message & Request More Button */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4">
            <span className="text-xs font-sans text-brand-charcoal/50">
              You Have Reached the end of your weekly introductions.
            </span>
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-2 border border-brand-teal/30 bg-brand-teal/5 hover:bg-brand-teal/10 text-brand-teal px-6 font-bold text-[10px] tracking-widest uppercase rounded-lg transition-colors duration-300 shadow-sm"
            >
              <span>REQUEST MORE</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
