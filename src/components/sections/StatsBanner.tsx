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
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useLocalization } from '../../lib/i18n';

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
      className="relative z-25 overflow-hidden bg-[#EEEEE9] px-6 py-14 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <div className="mb-10 max-w-3xl mx-auto">
          <h2 className="mb-4 font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-brand-charcoal leading-tight">
            {t('stats.heading')}
          </h2>

          <p className="mx-auto text-sm sm:text-base font-normal text-brand-charcoal/70 leading-relaxed">
            {t('stats.description')}
          </p>
        </div>

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
                y: -6,
                scale: 1.01,
                transition: { duration: 0.28, ease: 'easeOut' },
              }}
              className="flex flex-col justify-start rounded-[16px] border border-[#4A4541] bg-[#FFFFFF01] p-8 text-left shadow-[0_14px_38px_rgb(var(--color-brand-charcoal)/0.03)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_48px_rgb(var(--color-brand-charcoal)/0.06)] hover:border-brand-gold/30"
            >
              <div className="mb-7">
                <span className="mb-2 block font-serif text-5xl font-normal leading-none tracking-tight text-brand-charcoal sm:text-6xl">
                  {card.metric}
                </span>

                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-brand-gold">
                  {card.label}
                </span>
              </div>

              <ul className="mt-auto space-y-3">
                {card.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-xs sm:text-[13px] font-normal text-brand-charcoal/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />

                    <span className="leading-relaxed">
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
