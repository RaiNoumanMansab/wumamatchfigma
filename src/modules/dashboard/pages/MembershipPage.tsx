import React from 'react';
import { Check } from 'lucide-react';

export const MembershipPage: React.FC = () => {
  const plans = [
    {
      id: 1,
      badge: ['Active'],
      badgeColors: ['bg-[#E6F7F6] text-[#0E8B86] text-[10px] font-bold px-3 py-1 capitalize'],
      tier: 'Free',
      tierLabel: 'ESSENTIAL',
      price: '$0',
      priceNote: '/ forever',
      subscribers: '2,940',
      features: '5',
      featureList: [
        'Browse profiles',
        '5 conversations per day',
        '1 priority introduction per month',
        'Guided bio builder',
      ],
      button: 'Subscribed',
      buttonStyle: 'bg-brand-teal text-white hover:bg-[#0aa39e]',
      cardStyle: 'bg-white border border-[#D8D2C4]',
      statsStyle: 'bg-[#F4F1EA]',
      textColor: 'text-brand-charcoal',
      featureColor: 'text-brand-charcoal/80',
      dividerColor: 'border-[#E5E5E5]',
    },
    {
      id: 2,
      badge: ['Active', 'Popular'],
      badgeColors: [
        'bg-[#E6F7F6] text-[#0E8B86] text-[10px] font-bold px-3 py-1 capitalize', 
        'bg-white/20 text-white border border-white/30 text-[8px] font-bold tracking-widest uppercase px-2.5 py-0.5'
      ],
      tier: 'Founding Member',
      tierLabel: 'PREMIUM',
      price: 'From $11.99/mo',
      priceNote: '/ lock-in forever',
      subscribers: '4,218',
      features: '10',
      featureList: [
        '1 Month – $15.99',
        '3 Months – $14.99 per month',
        '6 Months – $11.99 per month',
        '9 Months – $11.99 per month',
        'Everything in Free',
      ],
      button: 'Upgrade Now',
      buttonStyle: 'bg-white text-brand-teal hover:bg-white/90',
      cardStyle: 'bg-brand-teal border border-brand-teal',
      statsStyle: 'bg-white/15',
      textColor: 'text-white',
      featureColor: 'text-white/90',
      dividerColor: 'border-white/20',
      featured: true,
    },
    {
      id: 3,
      badge: ['Active'],
      badgeColors: ['bg-[#E6F7F6] text-[#0E8B86] text-[10px] font-bold px-3 py-1 capitalize'],
      tier: 'SVIP',
      tierLabel: 'ELITE',
      price: '$600',
      priceNote: '/ entry fee',
      subscribers: '1,180',
      features: '7',
      featureList: [
        'Everything in Founding Member',
        'Personal matchmaker',
        'Handpicked introductions',
        'Unlimited priority introductions',
      ],
      button: 'Apply Now',
      buttonStyle: 'bg-brand-teal text-white hover:bg-[#0aa39e]',
      cardStyle: 'bg-white border border-[#D8D2C4]',
      statsStyle: 'bg-[#F4F1EA]',
      textColor: 'text-brand-charcoal',
      featureColor: 'text-brand-charcoal/80',
      dividerColor: 'border-[#E5E5E5]',
    },
  ];

  return (
    <div className="w-full max-w-[var(--container-max-width)] mx-auto pb-6">
      {/* Page Title */}
      <h1 className="font-sans font-medium text-[28px] leading-[36px] text-brand-charcoal mb-6">
        Membership
      </h1>

      {/* Plans Grid — 1223px wide per Figma */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-[20px] overflow-hidden flex flex-col ${plan.cardStyle} ${plan.featured ? 'shadow-xl scale-[1.01]' : 'shadow-sm'} transition-shadow duration-300`}
          >
            {/* Header */}
            <div className="px-5 pt-5 pb-3">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-3">
                {plan.badge.map((b, i) => (
                  <span key={b} className={`rounded-full ${plan.badgeColors[i]}`}>
                    {b}
                  </span>
                ))}
              </div>

              {/* Tier Name */}
              <h2 className={`font-serif text-[18px] font-medium mb-0 ${plan.textColor}`}>
                {plan.tier}
              </h2>
              {/* Tier Label */}
              <p className={`text-[9px] font-bold tracking-widest uppercase mb-2.5 ${plan.featured ? 'text-white/60' : 'text-brand-charcoal/40'}`}>
                {plan.tierLabel}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className={`font-sans text-[22px] font-bold ${plan.textColor}`}>
                  {plan.price}
                </span>
                <span className={`text-[10px] ${plan.featured ? 'text-white/70' : 'text-brand-charcoal/50'}`}>
                  {plan.priceNote}
                </span>
              </div>

              {/* Stats Row */}
              <div className={`flex items-center gap-0 rounded-xl overflow-hidden mb-4 ${plan.statsStyle}`}>
                <div className="flex-1 px-3 py-2 text-center">
                  <p className={`text-[9px] font-bold tracking-widest uppercase mb-0.5 ${plan.featured ? 'text-white/60' : 'text-brand-charcoal/40'}`}>SUBSCRIBERS</p>
                  <p className={`text-[14px] font-bold ${plan.textColor}`}>{plan.subscribers}</p>
                </div>
                <div className={`w-px h-8 ${plan.featured ? 'bg-white/20' : 'bg-[#E5E5E5]'}`} />
                <div className="flex-1 px-3 py-2 text-center">
                  <p className={`text-[9px] font-bold tracking-widest uppercase mb-0.5 ${plan.featured ? 'text-white/60' : 'text-brand-charcoal/40'}`}>FEATURES</p>
                  <p className={`text-[14px] font-bold ${plan.textColor}`}>{plan.features}</p>
                </div>
              </div>

              {/* Divider */}
              <div className={`border-t mb-3 ${plan.dividerColor}`} />

              {/* Feature List */}
              <ul className="space-y-2 flex-1 mb-4">
                {plan.featureList.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <Check
                      size={12}
                      strokeWidth={2.5}
                      className={`shrink-0 mt-0.5 ${plan.featured ? 'text-white' : 'text-brand-teal'}`}
                    />
                    <span className={`text-[11px] leading-snug ${plan.featureColor}`}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button — pinned to bottom */}
            <div className="px-5 pb-5 mt-auto">
              <button
                className={`w-full py-3 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${plan.buttonStyle}`}
              >
                {plan.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
