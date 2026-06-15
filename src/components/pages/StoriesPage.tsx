import React from 'react';
import { motion } from 'framer-motion';
import { Star, Crown } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';
import { cardReveal, containerStagger } from '../../lib/motion';

import coupleWedding from '../../assets/couple_wedding.jpg';
import coupleOne from '../../assets/testimonalsImages/couple1.jpg';
import coupleTwo from '../../assets/testimonalsImages/couple2.jpg';
import coupleThree from '../../assets/testimonalsImages/couple3.jpg';
import coupleFour from '../../assets/testimonalsImages/couple4.jpg';
import { CTASection } from '../sections/CTASection';

type StoryData = {
  id: number;
  names: string;
  role: string;
  quote: string;
  image: string;
};

const storiesList: StoryData[] = [
  {
    id: 1,
    names: 'Sarah & Aaron',
    role: 'MATCHED COUPLE  •  WUMA-MATCH',
    quote: 'Finding someone who shares my core values and vision for family was everything. We feel incredibly lucky.',
    image: coupleOne
  },
  {
    id: 2,
    names: 'Emily & Ryan',
    role: 'MATCHED COUPLE  •  WUMA-MATCH',
    quote: 'It never felt random - every step felt thoughtfully guided and supported by our matchmaking team.',
    image: coupleTwo
  },
  {
    id: 3,
    names: 'Jessica & Michael',
    role: 'MATCHED COUPLE  •  WUMA-MATCH',
    quote: 'From our first coffee date to planning our future, everything fell naturally into place with absolute alignment.',
    image: coupleThree
  },
  {
    id: 4,
    names: 'Anna & David',
    role: 'MATCHED COUPLE  •  WUMA-MATCH',
    quote: 'The process was professional yet deeply personal. They truly understood what we were looking for.',
    image: coupleFour
  },
  {
    id: 5,
    names: 'Sarah & Aaron',
    role: 'MATCHED COUPLE  •  WUMA-MATCH',
    quote: 'Finding someone who shares my core values and vision for family was everything. We feel incredibly lucky.',
    image: coupleOne
  },
  {
    id: 6,
    names: 'Emily & Ryan',
    role: 'MATCHED COUPLE  •  WUMA-MATCH',
    quote: 'It never felt random - every step felt thoughtfully guided and supported by our matchmaking team.',
    image: coupleTwo
  },
  {
    id: 7,
    names: 'Jessica & Michael',
    role: 'MATCHED COUPLE  •  WUMA-MATCH',
    quote: 'From our first coffee date to planning our future, everything fell naturally into place with absolute alignment.',
    image: coupleThree
  },
  {
    id: 8,
    names: 'Anna & David',
    role: 'MATCHED COUPLE  •  WUMA-MATCH',
    quote: 'The process was professional yet deeply personal. They truly understood what we were looking for.',
    image: coupleFour
  }
];

export const StoriesPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className="relative z-10 bg-white min-h-screen">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-[0.05]" />

      {/* Header Block (Beige background block, matching other subpages) */}
      <section className="relative overflow-hidden bg-[#EEEEE9] pt-28 md:pt-36 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 border-b border-brand-teal/10">
        <div className="max-w-[var(--container-max-width)] mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="block text-xs font-bold tracking-[0.25em] text-brand-gold uppercase font-sans mb-3">
              {t('stories.eyebrow') || 'REAL LIFE STORIES'}
            </span>

            <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:text-4xl lg:text-5xl mb-4">
              Love Stories That Started Here
            </h1>

            <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
              Real matchmaking success stories from WuMa Match
            </p>
          </div>
        </div>
      </section>

      {/* Content Section (White background) */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[var(--container-max-width)] mx-auto relative z-10">
          
          {/* Featured Big Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58 }}

            className=" mx-auto bg-white border border-brand-teal/10 rounded-[32px] overflow-hidden flex flex-col md:flex-row text-left shadow-[0_12px_40px_rgba(22,28,45,0.02)] mb-16 hover:shadow-[0_20px_50px_rgba(22,28,45,0.05)] transition-shadow duration-300"
          >
            {/* Left Column: Image (Figma exact dimensions 619x625) */}
            <div className="w-full md:w-[619px] h-72 sm:h-96 md:h-[540px] overflow-hidden shrink-0">
              <img
                src={coupleWedding}
                alt="Featured Matched Couple Emily & Ryan"
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Right Column: Text content */}
            <div className="w-full md:flex-grow p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center gap-6">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center justify-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 px-3.5 py-1 text-[9px] font-sans font-bold uppercase tracking-widest text-[#9B7A5B]">
                  <Crown className="w-3.5 h-3.5 text-[#9B7A5B]" />
                  FEATURED STORY
                </div>

                {/* Quote */}
                <p className="font-sans font-light text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
                  “The team introduced us with care and intention. It never felt random - every step felt thoughtfully guided.It never felt random - every step felt thoughtfully guided.It never felt random - every step felt thoughtfully guided.”
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-brand-charcoal/10 my-6" />

              {/* Couple details */}
              <div className="mt-4 md:mt-8">
                {/* Stars */}
                <div className="flex gap-0.5 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-gold stroke-none" />
                  ))}
                </div>
                <h3 className="font-serif text-xl font-medium text-brand-charcoal">
                  Emily & Ryan
                </h3>
                <span className="block text-[9px] font-sans font-bold tracking-[0.16em] uppercase text-brand-charcoal/45 mt-1">
                  MATCHED COUPLE • WUMA-MATCH
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stories Grid */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  mx-auto mb-20"
          >
            {storiesList.map((story) => (
              <motion.div
                key={story.id}
                variants={cardReveal}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.28, ease: 'easeOut' },
                }}
                className="w-full aspect-[3/4] md:h-[380px] rounded-[12px] overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 relative group snap-start bg-white"
              >
                {/* Card Background Image */}
                <img
                  src={story.image}
                  alt={story.names}
                  className="w-full h-full object-cover brightness-[0.88] group-hover:brightness-[0.94] transition-all duration-700 group-hover:scale-105 select-none"
                  loading="lazy"
                />

                {/* Soft Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/55 via-brand-charcoal/8 to-transparent" />

                {/* Fixed Height Review Overlay Card */}
                <div className="absolute bottom-3 left-3 right-3 h-[170px] bg-white/95 backdrop-blur-sm rounded-[10px] p-3.5 border border-[#4A4541]/15 shadow-lg flex flex-col items-start text-left group-hover:shadow-xl transition-all duration-300">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-brand-gold text-brand-gold"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-brand-charcoal/72 text-[10px] sm:text-[11px] font-light leading-relaxed mb-2 line-clamp-3">
                    “{story.quote}”
                  </p>

                  {/* Divider line & info */}
                  <div className="w-full pt-2 border-t border-[#4A4541]/15 mt-auto">
                    <h4 className="font-sans font-medium text-xs text-brand-charcoal tracking-wide mb-0.5">
                      {story.names}
                    </h4>

                    <div className="flex items-center gap-1.5 text-[7.5px] tracking-wider text-brand-charcoal/40 font-semibold uppercase mt-0.5">
                      <span>{story.role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action (CTA) Section with Black Background */}

      <CTASection />
    </div>
  );
};
