import React, { useState } from 'react';
import { Info, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';
import { MembersSection } from '../sections/MembersSection';
import { allMembers } from '../../data/members';

export const MembersPage: React.FC = () => {
  const { t } = useLocalization();

  // Search filter states
  const [gender, setGender] = useState('All Genders');
  const [minAge, setMinAge] = useState('25');
  const [maxAge, setMaxAge] = useState('45');
  const [country, setCountry] = useState('All Countries');
  
  const [filteredMembers, setFilteredMembers] = useState(allMembers);

  const handleSearch = () => {
    const min = parseInt(minAge, 10) || 0;
    const max = parseInt(maxAge, 10) || 99;

    const filtered = allMembers.filter((m) => {
      const matchGender = gender === 'All Genders' || m.gender === gender;
      const matchCountry = country === 'All Countries' || m.country === country;
      const matchAge = m.age >= min && m.age <= max;
      return matchGender && matchCountry && matchAge;
    });

    setFilteredMembers(filtered);
  };

  const handleReset = () => {
    setGender('All Genders');
    setMinAge('25');
    setMaxAge('45');
    setCountry('All Countries');
    setFilteredMembers(allMembers);
  };

  return (
    <div className="relative z-10 bg-white min-h-screen">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-[0.05]" />

      {/* Header Block */}
      <section className="relative overflow-hidden bg-[#EEEEE9] pt-28 md:pt-36 pb-12 sm:pb-16">
        <div className="section-container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="block text-xs font-bold tracking-[0.25em] text-brand-gold uppercase font-sans">
              {t('members.eyebrow') || 'OUR MEMBERS'}
            </span>

            <h1 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:mt-6 sm:text-4xl lg:text-5xl mb-4">
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
        <span className="text-white">YOU ARE VIEWING LIMITED PROFILES. JOIN WUMA MATCH TO UNLOCK FULL PROFILES &amp; REPORTS.</span>
      </div>

      <div className="section-container mt-12 mb-2">
        <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm text-left">
          <div className="grid grid-cols-12 gap-4 items-end">
            
            {/* Preferred Gender */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-1.5">
              <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40">
                Preferred Gender
              </label>
              <div className="relative">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full h-11 bg-white border border-zinc-200 rounded-lg pl-3 pr-8 font-inter text-[14px] leading-[20px] font-normal text-[#2D3748] focus:outline-none focus:border-brand-teal appearance-none cursor-pointer"
                >
                  <option>All Genders</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/40 pointer-events-none" />
              </div>
            </div>

            {/* Min Age */}
            <div className="col-span-6 sm:col-span-3 lg:col-span-1 flex flex-col gap-1.5">
              <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40">
                Min Age
              </label>
              <div className="relative">
                <select
                  value={minAge}
                  onChange={(e) => setMinAge(e.target.value)}
                  className="w-full h-11 bg-white border border-zinc-200 rounded-lg pl-3 pr-8 font-inter text-[14px] leading-[20px] font-normal text-[#2D3748] focus:outline-none focus:border-brand-teal appearance-none cursor-pointer"
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
            <div className="col-span-6 sm:col-span-3 lg:col-span-1 flex flex-col gap-1.5">
              <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40">
                Max Age
              </label>
              <div className="relative">
                <select
                  value={maxAge}
                  onChange={(e) => setMaxAge(e.target.value)}
                  className="w-full h-11 bg-white border border-zinc-200 rounded-lg pl-3 pr-8 font-inter text-[14px] leading-[20px] font-normal text-[#2D3748] focus:outline-none focus:border-brand-teal appearance-none cursor-pointer"
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
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-1.5">
              <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40">
                Residence Country
              </label>
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full h-11 bg-white border border-zinc-200 rounded-lg pl-3 pr-8 font-inter text-[14px] leading-[20px] font-normal text-[#2D3748] focus:outline-none focus:border-brand-teal appearance-none cursor-pointer"
                >
                  <option>All Countries</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Singapore</option>
                  <option>France</option>
                  <option>United Arab Emirates</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-charcoal/40 pointer-events-none" />
              </div>
            </div>

            {/* Buttons Group: Search and Reset */}
            <div className="col-span-12 sm:col-span-12 lg:col-span-4 flex gap-3">
              {/* Search Button */}
              <button
                type="button"
                onClick={handleSearch}
                className="group flex-grow h-11 bg-brand-teal hover:bg-brand-teal/90 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SEARCH</span>
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5] text-white transition-transform duration-300 group-hover:rotate-45" />
              </button>

              {/* Reset Button */}
              <button
                type="button"
                onClick={handleReset}
                className="w-24 shrink-0 h-11 border border-zinc-200 hover:border-brand-teal hover:text-brand-teal text-zinc-400 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors duration-300 bg-white flex items-center justify-center cursor-pointer"
              >
                Reset
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Members Section — show filtered cards, hide duplicate header & CTA */}
      <MembersSection limit={8} hideHeader hideCTA members={filteredMembers} />

      {/* Weekly Introductions End Notification */}
      <section className="relative z-20 bg-white pb-20 sm:pb-28 pt-4 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-sans text-[16px] leading-[24px] font-normal text-[#4A4541] tracking-normal mb-6 text-center">
            You Have Reached the end of your weekly introductions.
          </p>
          <button
            type="button"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-brand-teal/20 bg-[#F4FAFA] px-7 py-3.5 font-sans text-[11px] font-bold uppercase tracking-wider text-brand-teal transition-all duration-300 hover:bg-brand-teal/10 hover:border-brand-teal/40 hover:scale-[1.02] active:scale-[0.98] shadow-[0_2px_8px_rgba(12,185,180,0.04)]"
          >
            <span>REQUEST MORE</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5] text-brand-teal transition-transform duration-300 group-hover:rotate-45 active:rotate-45" />
          </button>
        </div>
      </section>
    </div>
  );
};
