import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';
import { cardReveal, containerStagger } from '../../lib/motion';

import coupleWedding from '../../assets/couple_wedding.jpg';
import coupleOne from '../../assets/testimonalsImages/couple1.jpg';
import coupleTwo from '../../assets/testimonalsImages/couple2.jpg';
import coupleThree from '../../assets/testimonalsImages/couple3.jpg';
import coupleFour from '../../assets/testimonalsImages/couple4.jpg';

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
    <div className="relative z-10 bg-[#FDFBF7] min-h-screen pt-28 md:pt-36 pb-0 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-[0.05]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <span className="block text-[11px] tracking-[0.25em] text-[#9B7A5B] uppercase font-sans font-bold mb-3">
            {t('stories.eyebrow') || 'REAL SUCCESS STORIES'}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-medium text-brand-charcoal mb-4 leading-tight tracking-tight">
            Love Stories That Started Here
          </h1>

          <p className="text-brand-charcoal/70 text-sm sm:text-[15px] font-normal leading-relaxed max-w-xl mx-auto">
            Meet the intentional matchmaking matches who found love through WuMa Match.
          </p>
        </div>

        {/* Featured Big Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58 }}
          className="max-w-5xl mx-auto bg-white border border-brand-teal/5 rounded-[32px] overflow-hidden flex flex-col md:flex-row text-left shadow-[0_12px_40px_rgba(22,28,45,0.02)] mb-16 hover:shadow-[0_20px_50px_rgba(22,28,45,0.05)] transition-shadow duration-300"
        >
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 h-72 sm:h-96 md:h-auto overflow-hidden">
            <img
              src={coupleWedding}
              alt="Featured Matched Couple Emily & Ryan"
              className="w-full h-full object-cover select-none"
            />
          </div>

          {/* Right Column: Text content */}
          <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center justify-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 px-3.5 py-1 text-[9px] font-sans font-bold uppercase tracking-widest text-[#9B7A5B]">
                <Star className="w-3 h-3 fill-[#9B7A5B] stroke-none" />
                FEATURED STORY
              </div>

              {/* Quote */}
              <p className="font-serif text-lg sm:text-[21px] text-brand-charcoal/90 italic leading-relaxed">
                "The team introduced us with care and intention. It never felt random - every step felt thoughtfully guided. It never felt random - every step felt thoughtfully guided."
              </p>
            </div>

            {/* Couple details */}
            <div>
              {/* Stars */}
              <div className="flex gap-0.5 mb-2.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-gold stroke-none" />
                ))}
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                Emily & Ryan
              </h3>
              <span className="block text-[9px] font-sans font-bold tracking-[0.16em] uppercase text-brand-charcoal/45 mt-1">
                MATCHED COUPLE  •  WUMA-MATCH
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stories Grid */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20"
        >
          {storiesList.map((story) => (
            <motion.div
              key={story.id}
              variants={cardReveal}
              whileHover={{
                y: -6,
                transition: { duration: 0.28, ease: 'easeOut' },
              }}
              className="flex flex-col rounded-[24px] border border-brand-teal/5 bg-white overflow-hidden text-left shadow-[0_10px_30px_rgba(22,28,45,0.02)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(22,28,45,0.05)]"
            >
              {/* Card Image */}
              <div className="h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src={story.image}
                  alt={story.names}
                  className="w-full h-full object-cover select-none"
                />
              </div>

              {/* Card content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-brand-gold stroke-none" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-[11px] font-normal leading-relaxed text-brand-charcoal/75 italic mb-4">
                    "{story.quote}"
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-[15px] font-bold text-brand-charcoal leading-tight">
                    {story.names}
                  </h4>
                  <span className="block text-[8px] font-sans font-bold tracking-wider text-brand-charcoal/40 uppercase mt-1">
                    {story.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action (CTA) Section with Black Background */}
      <div className="bg-black w-full py-16 md:py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-radial-teal opacity-[0.12] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52 }}
            className="bg-white border border-brand-teal/5 rounded-[24px] py-12 px-8 sm:px-12 md:px-16 shadow-lg max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-brand-charcoal mb-3 leading-snug">
              Want To Be Next Story
            </h2>
            <p className="text-brand-charcoal/70 text-xs sm:text-sm leading-relaxed mb-6">
              Begin with a conversation. Our matches are made with patience and care.
            </p>
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex h-11 items-center justify-center gap-2 bg-brand-teal text-white px-7 font-bold text-[10px] tracking-widest uppercase rounded-lg hover:bg-brand-teal/95 transition-colors duration-300 shadow-sm"
            >
              <span>APPLY NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
