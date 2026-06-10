// import React from 'react';
// import { Check } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { softLift } from '../../lib/motion';

// export const StatsBanner: React.FC = () => {
//   const cards = [
//     {
//       metric: '100%',
//       label: 'Private Profiles',
//       bullets: [
//         'No public member browsing',
//         'Photos shared only by approval',
//         'No searchable profile directory',
//       ],
//     },
//     {
//       metric: '1:1',
//       label: 'Personal Matching',
//       bullets: [
//         'Dedicated consultation before matching',
//         'Human review of lifestyle and values',
//         'Introductions shaped around intent',
//       ],
//     },
//     {
//       metric: '3',
//       label: 'Curated Steps',
//       bullets: [
//         'Screening and identity confidence',
//         'Compatibility review before sharing',
//         'Mutual consent before any reveal',
//       ],
//     },
//   ];

//   return (
//     <motion.section
//       id="stats"
//       className="relative z-10 -mt-[26svh] bg-[#FAF7F2] py-14 px-6 sm:px-8 lg:px-12 overflow-hidden rounded-t-[10px] shadow-[0_-42px_110px_rgba(0,0,0,0.22)]"
//     >
//       <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/96 to-transparent pointer-events-none" />
//       <div className="absolute inset-0 bg-radial-teal opacity-20 pointer-events-none" />

//       <div className="max-w-7xl mx-auto text-center relative z-10">

//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#053C42] mb-3 font-serif">
//           Find Success With WuMa
//         </h2>
//         <p className="text-zinc-600 text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-10 font-light leading-relaxed">
//           A private, human-led approach built for serious introductions, not endless browsing.
//         </p>

//         <div
//           className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
//         >
//           {cards.map((card, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={softLift}
//               className="bg-white/88 rounded-[10px] border border-[#0F8A96]/14 p-7 sm:p-8 text-left shadow-[0_14px_38px_rgba(5,60,66,0.08)] hover:shadow-[0_22px_52px_rgba(15,138,150,0.16)] hover:border-[#0F8A96]/28 transition-all duration-500 flex flex-col justify-start group backdrop-blur-sm"
//             >
//               <div className="mb-7">
//                 <span className="block font-serif text-5xl sm:text-6xl font-light text-[#053C42] mb-3 tracking-tight leading-none">
//                   {card.metric}
//                 </span>
//                 <span className="block text-xs text-[#0F8A96] font-bold tracking-[0.16em] uppercase">
//                   {card.label}
//                 </span>
//               </div>

//               <ul className="space-y-3 mt-auto">
//                 {card.bullets.map((bullet, bIdx) => (
//                   <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-[13px] text-zinc-700 font-medium">
//                     <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-[8px] bg-[#0F8A96]/10 shrink-0 group-hover:bg-[#0F8A96]/16 transition-all duration-300">
//                       <Check className="w-3.5 h-3.5 text-[#0F8A96]" />
//                     </span>
//                     <span className="font-light leading-relaxed text-zinc-700">{bullet}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </motion.section>
//   );
// };


import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useLocalization } from '../../lib/i18n';
import { FeaturedSection } from './FeaturedSection';

const statsCardsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const statsCardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 44,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const StatsBanner: React.FC = () => {
  const { get, t } = useLocalization();
  const cards = get<Array<{ metric: string; label: string; bullets: string[] }>>('stats.cards');

  return (
    <section
      id="stats"
      className="relative z-30 -mt-[100svh] overflow-hidden rounded-t-[10px] bg-[#FAF7F2] px-6 py-14 shadow-[0_-46px_120px_rgba(0,0,0,0.2)] sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/96 to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <FeaturedSection />

        <h2 className="mb-3 font-serif text-3xl font-light text-[#053C42] [line-height:1.18] sm:text-4xl md:text-5xl">
          {t('stats.heading')}
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-xs font-light [line-height:1.35] text-zinc-600 sm:text-sm md:text-base">
          {t('stats.description')}
        </p>

        <motion.div
          variants={statsCardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={statsCardReveal}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: { duration: 0.28, ease: 'easeOut' },
              }}
              className="flex flex-col justify-start rounded-[10px] border border-[#0F8A96]/14 bg-white/88 p-7 text-left shadow-[0_14px_38px_rgba(5,60,66,0.08)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_22px_54px_rgba(15,138,150,0.16)] sm:p-8"
            >
              <div className="mb-7">
                <span className="mb-3 block font-serif text-5xl font-light leading-none tracking-tight text-[#053C42] sm:text-6xl">
                  {card.metric}
                </span>

                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#0F8A96]">
                  {card.label}
                </span>
              </div>

              <ul className="mt-auto space-y-3">
                {card.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-xs font-medium text-zinc-700 sm:text-[13px]"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[8px] bg-[#0F8A96]/10">
                      <Check className="h-3.5 w-3.5 text-[#0F8A96]" />
                    </span>

                    <span className="font-light [line-height:1.35] text-zinc-700">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
