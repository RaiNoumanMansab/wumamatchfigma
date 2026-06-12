import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Crown } from 'lucide-react';
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
    age: 36,
    country: 'Canada',
    occupation: 'SOFTWARE ENGINEER',
    bio: 'Tech lead at an enterprise startup. Passionate about AI, snowboarding, and fine coffees. Looking to build a secure foundation with a partner who is intellectual, caring, and ready for long-term commitment.',
    height: '175–183 CM',
    education: "MASTER'S DEGREE",
    badgeType: 'PREMIUM',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80'
  },
  {
    age: 29,
    country: 'United States',
    occupation: 'FINANCIAL ANALYST',
    bio: 'Dedicated finance professional who loves running, classical music, and international cuisines. Seeking a family-oriented partner who shares traditional values with a modern perspective.',
    height: '155–163 CM',
    education: "BACHELOR'S DEGREE",
    badgeType: 'BASIC',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80'
  }
];

export const MembersSection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section
      id="members"
      className="relative z-20 bg-white py-16 sm:py-20 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-brand-teal/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="block text-xs tracking-[0.25em] text-brand-gold uppercase font-sans font-bold mb-3">
            {t('members.eyebrow') || 'FEATURED MEMBERS'}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-brand-charcoal mb-4 leading-tight tracking-tight">
            {t('members.heading') || 'Meet Some of Our Members'}
          </h2>

          <p className="text-brand-charcoal/70 text-sm sm:text-base font-normal leading-relaxed">
            {t('members.description') || 'All members are identity-verified. Photos and sensitive details are blurred for public visitors.'}
          </p>
        </div>

        {/* Members Cards Grid */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
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
              className="flex flex-col justify-between rounded-[20px] border border-[#4A4541] bg-white p-8 text-center shadow-[0_14px_38px_rgb(var(--color-brand-charcoal)/0.03)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_22px_54px_rgb(var(--color-brand-charcoal)/0.07)] hover:border-brand-gold/30 relative"
            >
              {/* Verified Pill Badge (Top Left) */}
              <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full border border-brand-teal/20 bg-white/90 px-2.5 py-1 text-[8px] font-sans font-bold uppercase tracking-wider text-brand-teal shadow-sm">
                <Shield className="w-2.5 h-2.5 text-brand-teal" />
                VERIFIED
              </div>

              {/* Centered Blurred Avatar Circle */}
              <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border border-brand-teal/10 bg-brand-cream flex items-center justify-center">
                <img
                  src={member.image}
                  alt="Member profile"
                  className="w-full h-full object-cover blur-[5px] scale-110 select-none"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/15">
                  <Lock className="w-5 h-5 text-brand-gold mb-1" />
                  <span className="text-[9px] font-sans font-bold uppercase tracking-[0.16em] text-brand-gold">
                    JOIN TO VIEW
                  </span>
                </div>
              </div>

              {/* Premium / Basic Badge */}
              <div className="mb-4">
                {member.badgeType === 'PREMIUM' ? (
                  <div className="inline-flex items-center justify-center gap-1 rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-1 text-[9px] font-sans font-bold uppercase tracking-wider text-brand-gold">
                    <Crown className="w-3 h-3 text-brand-gold" />
                    PREMIUM VERIFIED
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center gap-1 rounded-full border border-brand-teal/30 bg-brand-teal/5 px-4 py-1 text-[9px] font-sans font-bold uppercase tracking-wider text-brand-teal">
                    <Shield className="w-3 h-3 text-brand-teal" />
                    BASIC VERIFIED
                  </div>
                )}
              </div>

              {/* Combined Blurred Details Block (Personal Details & Bio Blurred) */}
              <div className="relative my-4 flex-grow flex flex-col justify-center">
                {/* Blurred Content Container */}
                <div className="blur-[4px] select-none space-y-4">
                  {/* Metadata Headings */}
                  <div>
                    <h4 className="font-serif text-[19px] font-bold text-brand-charcoal text-center leading-none">
                      {member.age} Yrs • {member.country}
                    </h4>
                    
                    <span className="block text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-brand-gold/90 text-center mt-2">
                      {member.occupation}
                    </span>
                  </div>

                  {/* Bio Paragraph */}
                  <p className="text-[11px] font-normal leading-relaxed text-brand-charcoal/60 text-center px-4 h-16 overflow-hidden">
                    {member.bio}
                  </p>
                </div>

                {/* Single Centered Lock Badge Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                  <div className="rounded-full border border-brand-teal/20 bg-white/95 px-4 py-1.5 text-[9px] font-sans font-bold uppercase tracking-widest text-brand-teal shadow-md flex items-center gap-1.5 transition-transform duration-300 hover:scale-105">
                    <Lock className="w-3.5 h-3.5 text-brand-teal" />
                    PROFILE LOCKED
                  </div>
                </div>
              </div>

              {/* Divider & Heights / Education Metadata (Personal Information Blurred) */}
              <div className="w-full pt-4 border-t border-brand-charcoal/10 flex items-center justify-between text-left mt-auto relative">
                <div className="flex w-full justify-between blur-[4px] select-none">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40 leading-none">
                      HEIGHT
                    </span>
                    <span className="text-[11px] font-bold text-brand-charcoal mt-1 leading-none">
                      {member.height}
                    </span>
                  </div>
                  
                  <div className="flex flex-col text-right">
                    <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-brand-charcoal/40 leading-none">
                      EDUCATION
                    </span>
                    <span className="text-[11px] font-bold text-brand-charcoal mt-1 leading-none">
                      {member.education}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[8px] font-sans font-bold uppercase tracking-widest text-brand-teal/60">
                    PRIVATE
                  </span>
                </div>
              </div>

              {/* Unlock Button */}
              <button
                type="button"
                className="w-full mt-5 text-center py-2.5 rounded-lg border border-brand-teal/20 bg-brand-teal/5 text-brand-teal hover:bg-brand-teal/10 transition-colors duration-300 text-[10px] font-bold tracking-wider uppercase"
              >
                Unlock All Profiles
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Large bottom browse button */}
        <div className="flex justify-center pt-6">
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-11 items-center justify-center bg-brand-teal text-white px-8 font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-brand-teal/90 transition-colors duration-300 shadow-sm"
          >
            {t('members.cta').toUpperCase()} ↗
          </motion.a>
        </div>

      </div>
    </section>
  );
};
