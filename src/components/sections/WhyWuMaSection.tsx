// // import React from 'react';
// // import { ArrowUpRight } from 'lucide-react';
// // import { motion } from 'framer-motion';

// // export const WhyWuMaSection: React.FC = () => {
// //   return (
// //     <section
// //       id="about"
// //       className="bg-[#071415] py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
// //     >
// //       {/* Background radial glow */}
// //       <div className="absolute inset-0 bg-radial-teal opacity-30 mix-blend-screen pointer-events-none" />

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

// //           {/* Left Column - Heading */}
// //           <div className="lg:col-span-5">
// //             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white [line-height:1.18] font-serif tracking-tight">
// //               The WuMa-Match Difference: Beyond Algorithms
// //             </h2>
// //           </div>

// //           {/* Right Column - Body copy & button */}
// //           <div className="lg:col-span-7 flex flex-col space-y-7 text-white font-light text-sm sm:text-base [line-height:1.35]">
// //             <p>
// //               At WuMa-Match, we value human connection. Our matchmakers combine psychology, intuition, and a vast global network to create truly compatible connections, moving beyond superficial swiping.
// //             </p>
// //             <p>
// //               We believe in a tailored approach, recognizing that every individual's journey to find a partner is unique. We work closely with you to understand your values, aspirations, and lifestyle, ensuring every match is intentional and deeply considered.
// //             </p>
// //             <p>
// //               From the initial consultation to guided introductions, we support you every step of the way. Our commitment is to foster meaningful, long-term relationships built on genuine compatibility, shared values, and mutual respect.
// //             </p>

// //             <div className="pt-2">
// //               <motion.a
// //                 href="#cta"
// //                 initial="rest"
// //                 animate="rest"
// //                 whileHover="hover"
// //                 whileTap={{ scale: 0.98 }}
// //                 className="flex items-stretch gap-[8px] group"
// //               >
// //                 <span className="h-12 bg-[#0F9598] text-white px-7 text-xs sm:text-sm font-semibold tracking-wide flex items-center rounded-[10px] shadow-[0_14px_30px_rgba(15,149,152,0.28)] group-hover:bg-[#1C1B19] transition-all duration-300">
// //                   Book A Consultation
// //                 </span>

// //                 <span className="h-12 w-12 bg-white text-[#0F9598] border border-white/80 flex items-center justify-center rounded-[10px] shadow-[0_14px_30px_rgba(255,255,255,0.14)] transition-colors duration-300 group-hover:bg-[#F9F8F4] group-hover:text-[#1C1B19] group-hover:shadow-[0_18px_34px_rgba(255,255,255,0.2)]">
// //                   <motion.span
// //                     variants={{
// //                       rest: { rotate: 0 },
// //                       hover: {
// //                         rotate: 50,
// //                         transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
// //                       },
// //                     }}
// //                     className="flex items-center justify-center"
// //                   >
// //                     <ArrowUpRight className="w-4 h-4 stroke-[2.3]" />
// //                   </motion.span>
// //                 </span>
// //               </motion.a>
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// import React from 'react';
// import { ArrowRight, ArrowUpRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// export const WhyWuMaSection: React.FC = () => {
//   return (
//     <section
//       id="about"
//       className="bg-[#071415] py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden"
//     >
//       {/* Background radial glows */}
//       <div className="absolute inset-0 bg-radial-teal opacity-30 mix-blend-screen pointer-events-none" />

//       <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-radial-gold opacity-20 pointer-events-none mix-blend-screen" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//           {/* Left Column */}
//           <div className="lg:col-span-3 mb-6 lg:mb-0">
//             <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white font-sans inline-flex items-center gap-2.5 whitespace-nowrap">
//               OUR APPROACH

//               <motion.span
//                 animate={{
//                   x: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 1.8,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 }}
//                 className="inline-flex"
//               >
//                 <ArrowRight className="w-4 h-4 text-white shrink-0" />
//               </motion.span>
//             </span>
//           </div>

//           {/* Right Column */}
//           <div className="lg:col-span-9 flex flex-col pt-2 sm:pt-3">
//             {/* Headline */}
//             <div className="max-w-4xl mb-5">
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide font-serif antialiased"
//               style={{ lineHeight: '1.18' }}
//               >
//                 We help ambitious singles go from{' '}
//                 <span className="italic text-zinc-300">“good enough”</span> to{' '}
//                 <span className="text-[#D4A853] font-normal">unforgettable</span>,
//                 blending psychology, intuition, and deep vetting to deliver
//                 connections that actually move the needle.
//               </h2>
//             </div>

//             {/* CTA */}
//             <div className="pt-2 pb-8 max-w-full">
//               <motion.a
//                 href="#cta"
//                 initial="rest"
//                 animate="rest"
//                 whileHover="hover"
//                 whileTap={{ scale: 0.98 }}
//                 className="inline-flex items-stretch gap-[8px] group"
//               >
//                 <motion.span
//                   variants={{
//                     rest: {
//                       y: 0,
//                     },
//                     hover: {
//                       y: -2,
//                       transition: {
//                         duration: 0.28,
//                         ease: [0.22, 1, 0.36, 1],
//                       },
//                     },
//                   }}
//                   className="h-12 bg-[#0F9598] text-white px-7 text-xs sm:text-sm font-semibold tracking-wide flex items-center rounded-[10px] shadow-[0_14px_30px_rgba(15,149,152,0.28)] group-hover:bg-[#1C1B19] transition-colors duration-300"
//                 >
//                   Apply Now
//                 </motion.span>

//                 <motion.span
//                   variants={{
//                     rest: {
//                       y: 0,
//                     },
//                     hover: {
//                       y: -2,
//                       transition: {
//                         duration: 0.28,
//                         ease: [0.22, 1, 0.36, 1],
//                       },
//                     },
//                   }}
//                   className="h-12 w-12 bg-white text-[#0F9598] border border-white/80 flex items-center justify-center rounded-[10px] shadow-[0_14px_30px_rgba(255,255,255,0.14)] transition-colors duration-300 group-hover:bg-[#F9F8F4] group-hover:text-[#1C1B19] group-hover:shadow-[0_18px_34px_rgba(255,255,255,0.2)]"
//                 >
//                   <motion.span
//                     variants={{
//                       rest: {
//                         rotate: 0,
//                         x: 0,
//                         y: 0,
//                       },
//                       hover: {
//                         rotate: 45,
//                         x: 2,
//                         y: -2,
//                         transition: {
//                           duration: 0.42,
//                           ease: [0.22, 1, 0.36, 1],
//                         },
//                       },
//                     }}
//                     className="flex items-center justify-center"
//                   >
//                     <ArrowUpRight className="w-4 h-4 stroke-[2.3]" />
//                   </motion.span>
//                 </motion.span>
//               </motion.a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



// import React, { useRef } from 'react';
// import { ArrowRight, ArrowUpRight } from 'lucide-react';
// import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
// import { useLocalization } from '../../lib/i18n';

// type AnimatedCharProps = {
//   char: string;
//   index: number;
//   totalChars: number;
//   progress: MotionValue<number>;
//   className?: string;
// };

// const AnimatedCharacter: React.FC<AnimatedCharProps> = ({
//   char,
//   index,
//   totalChars,
//   progress,
//   className = '',
// }) => {
// const start = index / Math.max(totalChars - 1, 1);
// const end = Math.min(start + 0.08, 1);

//   const opacity = useTransform(progress, [start, end], [0.16, 1]);
//   const y = useTransform(progress, [start, end], [8, 0]);
//   const blur = useTransform(progress, [start, end], [3, 0]);
//   const filter = useTransform(blur, (value) => `blur(${value}px)`);

//   return (
//     <motion.span
//       style={{ opacity, y, filter }}
//       className={`inline-block ${className}`}
//     >
//       {char}
//     </motion.span>
//   );
// };

// export const WhyWuMaSection: React.FC = () => {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const { get, t } = useLocalization();

//   const headlineParts = get<Array<{ text: string; className: string }>>('why.headlineParts');

//   const words = headlineParts.flatMap((part) =>
//     part.text.split(' ').map((word) => ({
//       word,
//       className: part.className,
//     }))
//   );

//   const totalChars = words.reduce((total, item) => total + item.word.length, 0);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start 75%', 'center 35%'],
//   });

//   let charIndex = 0;

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       className="bg-[#071415] py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden"
//     >
//       {/* Background radial glows */}
//       <div className="absolute inset-0 bg-radial-teal opacity-30 mix-blend-screen pointer-events-none" />
//       <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-radial-gold opacity-20 pointer-events-none mix-blend-screen" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//           {/* Left Column */}
//           <div className="lg:col-span-3 mb-6 lg:mb-0">
//             <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white font-sans inline-flex items-center gap-2.5 whitespace-nowrap">
//               {t('why.eyebrow')}

//               <motion.span
//                 animate={{
//                   x: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 1.8,
//                   repeat: Infinity,
//                   ease: 'easeInOut',
//                 }}
//                 className="inline-flex"
//               >
//                 <ArrowRight className="w-4 h-4 text-white shrink-0" />
//               </motion.span>
//             </span>
//           </div>

//           {/* Right Column */}
//           <div className="lg:col-span-9 flex flex-col pt-2 sm:pt-3">
//             {/* Character Scroll Reveal Headline */}
//             <div className="max-w-5xl mb-5">
//               <h2
//                 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide font-serif antialiased"
//                 style={{ lineHeight: '1.18' }}
//               >
//                 {words.map((item, wordIndex) => (
//                   <span
//                     key={`${item.word}-${wordIndex}`}
//                     className="inline-block mr-[0.28em] whitespace-nowrap"
//                   >
//                     {Array.from(item.word).map((char, localCharIndex) => {
//                       const currentIndex = charIndex;
//                       charIndex += 1;

//                       return (
//                         <AnimatedCharacter
//                           key={`${item.word}-${localCharIndex}`}
//                           char={char}
//                           index={currentIndex}
//                           totalChars={totalChars}
//                           progress={scrollYProgress}
//                           className={item.className}
//                         />
//                       );
//                     })}
//                   </span>
//                 ))}
//               </h2>
//             </div>

//             {/* CTA */}
//             <div className="pt-2 pb-8 max-w-full">
//               <motion.a
//                 href="#cta"
//                 initial="rest"
//                 animate="rest"
//                 whileHover="hover"
//                 whileTap={{ scale: 0.98 }}
//                 className="inline-flex items-stretch gap-[8px] group"
//               >
//                 <motion.span
//                   variants={{
//                     rest: {
//                       y: 0,
//                     },
//                     hover: {
//                       y: -2,
//                       transition: {
//                         duration: 0.28,
//                         ease: [0.22, 1, 0.36, 1],
//                       },
//                     },
//                   }}
//                   className="h-12 bg-[#0F9598] text-white px-7 text-xs sm:text-sm font-semibold tracking-wide flex items-center rounded-[10px] shadow-[0_14px_30px_rgba(15,149,152,0.28)] group-hover:bg-[#1C1B19] transition-colors duration-300"
//                 >
//                   {t('why.cta')}
//                 </motion.span>

//                 <motion.span
//                   variants={{
//                     rest: {
//                       y: 0,
//                     },
//                     hover: {
//                       y: -2,
//                       transition: {
//                         duration: 0.28,
//                         ease: [0.22, 1, 0.36, 1],
//                       },
//                     },
//                   }}
//                   className="h-12 w-12 bg-white text-[#0F9598] border border-white/80 flex items-center justify-center rounded-[10px] shadow-[0_14px_30px_rgba(255,255,255,0.14)] transition-colors duration-300 group-hover:bg-[#F9F8F4] group-hover:text-[#1C1B19] group-hover:shadow-[0_18px_34px_rgba(255,255,255,0.2)]"
//                 >
//                   <motion.span
//                     variants={{
//                       rest: {
//                         rotate: 0,
//                         x: 0,
//                         y: 0,
//                       },
//                       hover: {
//                         rotate: 45,
//                         x: 2,
//                         y: -2,
//                         transition: {
//                           duration: 0.42,
//                           ease: [0.22, 1, 0.36, 1],
//                         },
//                       },
//                     }}
//                     className="flex items-center justify-center"
//                   >
//                     <ArrowUpRight className="w-4 h-4 stroke-[2.3]" />
//                   </motion.span>
//                 </motion.span>
//               </motion.a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };



import React, { useMemo, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useLocalization } from '../../lib/i18n';

type HeadlinePart = {
  text: string;
  className: string;
};

type AnimatedCharProps = {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
  className?: string;
};

const AnimatedCharacter: React.FC<AnimatedCharProps> = ({
  char,
  index,
  totalChars,
  progress,
  className = '',
}) => {
  const start = index / Math.max(totalChars - 1, 1);
  const end = Math.min(start + 0.08, 1);

  const opacity = useTransform(progress, [start, end], [0.16, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);
  const blur = useTransform(progress, [start, end], [3, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className={`inline-block ${className}`}
    >
      {char}
    </motion.span>
  );
};

const fallbackHeadlineParts: HeadlinePart[] = [
  {
    text: 'We help ambitious singles go from',
    className: 'text-white',
  },
  {
    text: '“good enough”',
    className: 'italic text-zinc-300',
  },
  {
    text: 'to',
    className: 'text-white',
  },
  {
    text: 'unforgettable',
    className: 'text-[#9B7A5B] font-normal',
  },
  {
    text: ', blending psychology, intuition, and deep vetting to deliver connections that actually move the needle.',
    className: 'text-white',
  },
];

const splitIntoSafeWords = (text: string) => {
  const trimmedText = text.trim();

  if (!trimmedText) return [];

  const hasSpaces = /\s/.test(trimmedText); //checks for any whitespace character /\s/.test(trimmedText), which is more robust than just checking for ' '.

  if (!hasSpaces) {
    return [trimmedText];
  }

  return trimmedText.split(/\s+/).filter(Boolean);
};

export const WhyWuMaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { get, t } = useLocalization();

  const translatedHeadlineParts = get<HeadlinePart[]>('why.headlineParts');

  const headlineParts = Array.isArray(translatedHeadlineParts)
    ? translatedHeadlineParts.filter(
        (part) =>
          part &&
          typeof part.text === 'string' &&
          typeof part.className === 'string'
      )
    : fallbackHeadlineParts;

  const words = useMemo(() => {
    return headlineParts.flatMap((part) =>
      splitIntoSafeWords(part.text).map((word) => ({
        word,
        className: part.className,
      }))
    );
  }, [headlineParts]);

  const totalChars = useMemo(() => {
    return Math.max(
      words.reduce((total, item) => total + Array.from(item.word).length, 0),
      1
    );
  }, [words]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 55%'],
  });

  let charIndex = 0;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#071415] py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute inset-0 bg-radial-teal opacity-30 mix-blend-screen pointer-events-none" />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-radial-gold opacity-20 pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-3 mb-6 lg:mb-0 min-w-0">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white font-sans inline-flex items-center gap-2.5 whitespace-nowrap">
              {t('why.eyebrow') || 'OUR APPROACH'}

              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-flex"
              >
                <ArrowRight className="w-4 h-4 text-white shrink-0" />
              </motion.span>
            </span>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-9 min-w-0 flex flex-col pt-2 sm:pt-3">
            {/* Character Scroll Reveal Headline */}
            <div className="max-w-5xl w-full min-w-0 mb-5 overflow-hidden">
              <h2
                className="flex flex-wrap items-baseline gap-x-[0.28em] gap-y-1 text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide font-serif antialiased max-w-full"
                style={{ lineHeight: '1.18' }}
              >
                {words.map((item, wordIndex) => (
                  <span
                    key={`${item.word}-${wordIndex}`}
                    className="inline-flex min-w-0 max-w-full flex-nowrap"
                  >
                    {Array.from(item.word).map((char, localCharIndex) => {
                      const currentIndex = charIndex;
                      charIndex += 1;

                      return (
                        <AnimatedCharacter
                          key={`${item.word}-${wordIndex}-${localCharIndex}`}
                          char={char}
                          index={currentIndex}
                          totalChars={totalChars}
                          progress={scrollYProgress}
                          className={item.className}
                        />
                      );
                    })}
                  </span>
                ))}
              </h2>
            </div>

            {/* CTA */}
            <div className="pt-2 pb-8 max-w-full">
              <motion.a
                href="#cta"
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-stretch gap-[8px] group"
              >
                <motion.span
                  variants={{
                    rest: {
                      y: 0,
                    },
                    hover: {
                      y: -2,
                      transition: {
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="h-12 bg-[#0F9598] text-white px-7 text-xs sm:text-sm font-semibold tracking-wide flex items-center rounded-[10px] shadow-[0_14px_30px_rgba(15,149,152,0.28)] group-hover:bg-[#1C1B19] transition-colors duration-300"
                >
                  {t('why.cta') || 'Apply Now'}
                </motion.span>

                <motion.span
                  variants={{
                    rest: {
                      y: 0,
                    },
                    hover: {
                      y: -2,
                      transition: {
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="h-12 w-12 bg-white text-[#0F9598] border border-white/80 flex items-center justify-center rounded-[10px] shadow-[0_14px_30px_rgba(255,255,255,0.14)] transition-colors duration-300 group-hover:bg-[#F9F8F4] group-hover:text-[#1C1B19] group-hover:shadow-[0_18px_34px_rgba(255,255,255,0.2)]"
                >
                  <motion.span
                    variants={{
                      rest: {
                        rotate: 0,
                        x: 0,
                        y: 0,
                      },
                      hover: {
                        rotate: 45,
                        x: 2,
                        y: -2,
                        transition: {
                          duration: 0.42,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    className="flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.3]" />
                  </motion.span>
                </motion.span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};