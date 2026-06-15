import React from 'react';
import { Info } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';
import { MembersSection } from '../sections/MembersSection';

export const MembersPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className="relative z-10 bg-white min-h-screen">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-[0.05]" />

      {/* Header Block */}
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
        <span className="text-white">YOU ARE VIEWING LIMITED PROFILES. JOIN WUMA MATCH TO UNLOCK FULL PROFILES &amp; REPORTS.</span>
      </div>

      {/* Members Section (same as homepage) */}
      <MembersSection />
    </div>
  );
};
