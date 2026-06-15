import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock, Shield, Crown } from 'lucide-react';
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
  },
  {
    age: 22,
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
  className="relative z-20 overflow-hidden border-t border-brand-teal/10 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-0 lg:py-20"
>
  <div className="main-container  relative z-10 text-center">
    {/* Header */}
    <div className="mx-auto mb-10 max-w-[var(--container-max-width)] sm:mb-12">
      <span className="mb-3 block font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
        {t("members.eyebrow") || "FEATURED MEMBERS"}
      </span>

      <h2 className="mb-4 font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:text-4xl lg:text-5xl">
        {t("members.heading") || "Meet Some of Our Members"}
      </h2>

      <p className="text-sm font-normal leading-relaxed text-brand-charcoal/70 sm:text-base">
        {t("members.description") ||
          "All members are identity-verified. Photos and sensitive details are blurred for public visitors."}
      </p>
    </div>

    {/* Members Cards Grid */}
    <motion.div
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-center"
    >
      {membersList.map((member, idx) => (
        <motion.div
          key={idx}
          variants={cardReveal}
          className="relative flex h-full w-full max-w-[270px] mx-auto flex-col rounded-2xl border border-[#4A4541] bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7 lg:p-8"
        >
          {/* Verified Badge */}
          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full border border-brand-teal/20 bg-white/90 px-2.5 py-1 font-sans text-[8px] font-bold uppercase tracking-wider text-brand-teal shadow-sm">
            <Shield className="h-2.5 w-2.5 text-brand-teal" />
            VERIFIED
          </div>

          {/* Avatar */}
          <div className="relative mx-auto mb-8 mt-4 h-28 w-28 sm:h-32 sm:w-32">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-brand-teal/10 bg-brand-cream">
              <img
                src={member.image}
                alt="Member profile"
                className="h-full w-full scale-110 select-none object-cover blur-[3px]"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/15">
                <Lock className="mb-1 h-5 w-5 text-brand-gold" />

                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.16em] text-brand-gold">
                  JOIN TO VIEW
                </span>
              </div>
            </div>

            {/* Membership Badge */}
            <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2 whitespace-nowrap">
              <div
                className={`inline-flex items-center justify-center gap-1 rounded-full border bg-white px-4 py-1 font-sans text-[9px] font-bold uppercase tracking-wider shadow-md ${
                  member.badgeType === "PREMIUM"
                    ? "border-brand-gold/30 text-brand-gold"
                    : "border-brand-teal/30 text-brand-teal"
                }`}
              >
                {member.badgeType === "PREMIUM" ? (
                  <Crown className="h-3 w-3 text-brand-gold" />
                ) : (
                  <Shield className="h-3 w-3 text-brand-teal" />
                )}

                {member.badgeType === "PREMIUM"
                  ? "PREMIUM VERIFIED"
                  : "BASIC VERIFIED"}
              </div>
            </div>
          </div>

          {/* Locked Personal Details */}
          <div className="relative my-3">
            <div className="select-none py-1 blur-[2px]">
              <h4 className="text-center font-serif text-[19px] font-bold leading-none text-brand-charcoal">
                {member.age} Yrs • {member.country}
              </h4>

              <span className="mt-2 block text-center font-sans text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-brand-gold/90">
                {member.occupation}
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-1 rounded-full border border-brand-teal/15 bg-white/95 px-3.5 py-1 font-sans text-[8px] font-bold uppercase tracking-widest text-brand-teal shadow-sm">
                <Lock className="h-3.5 w-3.5 text-brand-teal" />
                LOCKED
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="my-4 flex flex-grow items-center justify-center">
            <p className="px-2 text-center text-[11px] font-normal leading-relaxed text-brand-charcoal/70 sm:px-4">
              {member.bio}
            </p>
          </div>

          {/* Metadata */}
          <div className="relative mt-auto w-full border-t border-brand-charcoal/10 pt-4">
            <div className="flex w-full justify-between select-none blur-[2px]">
              <div className="flex flex-col text-left">
                <span className="font-sans text-[9px] font-bold uppercase leading-none tracking-wider text-brand-charcoal/40">
                  HEIGHT
                </span>

                <span className="mt-1 text-[11px] font-bold leading-none text-brand-charcoal">
                  {member.height}
                </span>
              </div>

              <div className="flex flex-col text-right">
                <span className="font-sans text-[9px] font-bold uppercase leading-none tracking-wider text-brand-charcoal/40">
                  EDUCATION
                </span>

                <span className="mt-1 text-[11px] font-bold leading-none text-brand-charcoal">
                  {member.education}
                </span>
              </div>
            </div>
          </div>

          {/* Unlock Button */}
          <button
            type="button"
            className="mt-5 w-full rounded-lg border border-brand-teal/20 bg-brand-teal/5 py-2.5 text-center font-sans text-[10px] font-bold uppercase tracking-wider text-brand-teal transition-colors duration-300 hover:bg-brand-teal/10"
          >
            Unlock All Profiles
          </button>
        </motion.div>
      ))}
    </motion.div>

    {/* Bottom CTA */}
    <div className="flex justify-center pt-10">
      <Link
        to="/members"
        className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-teal px-8 font-sans text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-all duration-300 hover:bg-brand-teal/90 hover:scale-[1.03] active:scale-[0.97]"
      >
        <span>{t("members.cta").toUpperCase()}</span>

        <ArrowUpRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
      </Link>
    </div>
  </div>
</section>
  );
};
