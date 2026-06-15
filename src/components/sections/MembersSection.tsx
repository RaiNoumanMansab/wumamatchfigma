import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock, Shield, Crown } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';
import { cardReveal, containerStagger } from '../../lib/motion';
import { allMembers, type MemberData } from '../../data/members';

type Props = {
  /** How many cards to show. Defaults to 4 (homepage preview). Pass Infinity or omit for all. */
  limit?: number;
  /** Hide the section heading (e.g. when used inside MembersPage which has its own header) */
  hideHeader?: boolean;
  /** Hide the "View All" CTA button at the bottom */
  hideCTA?: boolean;
  /** Optional custom list of members to render */
  members?: MemberData[];
};

export const MembersSection: React.FC<Props> = ({
  limit = 4,
  hideHeader = false,
  hideCTA = false,
  members,
}) => {
  const { t } = useLocalization();
  const baseMembers = members || allMembers;
  const visibleMembers = baseMembers.slice(0, limit);

  return (
    <section
      id="members"
      className="relative z-20 overflow-hidden border-t border-brand-teal/10 bg-white px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="main-container relative z-10 text-center">

        {/* Header — shown only on homepage */}
        {!hideHeader && (
          <div className="mx-auto mb-10 max-w-[var(--container-max-width)] sm:mb-12">
            <span className="mb-3 block font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
              {t('members.eyebrow') || 'FEATURED MEMBERS'}
            </span>

            <h2 className="mb-4 font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:text-4xl lg:text-5xl">
              {t('members.heading') || 'Meet Some of Our Members'}
            </h2>

            <p className="text-sm font-normal leading-relaxed text-brand-charcoal/70 sm:text-base">
              {t('members.description') ||
                'All members are identity-verified. Photos and sensitive details are blurred for public visitors.'}
            </p>
          </div>
        )}

        {/* Members Cards Grid */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid w-full max-w-[var(--container-max-width)] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-center"
        >
          {visibleMembers.map((member, idx) => (
            <motion.div
              key={idx}
              variants={cardReveal}
              className="relative flex h-full w-full mx-auto flex-col rounded-2xl border border-[#4A4541] bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7 lg:p-8"
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
                      member.badgeType === 'PREMIUM'
                        ? 'border-brand-gold/30 text-brand-gold'
                        : 'border-brand-teal/30 text-brand-teal'
                    }`}
                  >
                    {member.badgeType === 'PREMIUM' ? (
                      <Crown className="h-3 w-3 text-brand-gold" />
                    ) : (
                      <Shield className="h-3 w-3 text-brand-teal" />
                    )}
                    {member.badgeType === 'PREMIUM' ? 'PREMIUM VERIFIED' : 'BASIC VERIFIED'}
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

        {/* Bottom CTA — shown only on homepage */}
        {!hideCTA && (
          <div className="flex justify-center pt-10">
            <Link
              to="/members"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-teal px-8 font-sans text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-all duration-300 hover:bg-brand-teal/90 hover:scale-[1.03] active:scale-[0.97]"
            >
              <span>{t('members.cta').toUpperCase()}</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
