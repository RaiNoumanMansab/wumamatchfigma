// import React from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import coupleImg from '../../assets/coupleImage.png';
// import { sectionReveal } from '../../lib/motion';

// export const HeroSection: React.FC = () => {
//   const { scrollY } = useScroll();
//   const wrapperY = useTransform(scrollY, [0, 600], [0, -52]);
//   const bgY = useTransform(scrollY, [0, 600], [0, -156]);
//   const contentY = useTransform(scrollY, [0, 600], [0, -88]);

//   const wrapperSpring = useSpring(wrapperY, { stiffness: 12, damping: 35, mass: 0.95 });
//   const bgSpring = useSpring(bgY, { stiffness: 14, damping: 38, mass: 1 });
//   const contentSpring = useSpring(contentY, { stiffness: 14, damping: 38, mass: 1 });

//   return (
//     <motion.section
//       id="home"
//       initial="hidden"
//       animate="visible"
//       variants={sectionReveal}
//       className="relative z-0 h-[122svh] min-h-screen bg-[#F9F8F4]"
//     >
//       <motion.div
//         style={{ y: wrapperSpring }}
//         className="sticky top-0 h-[100svh] min-h-[90vh] flex items-end justify-center overflow-hidden bg-[#F9F8F4] pb-12 pt-28 sm:pb-14 lg:pb-16"
//       >

//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <motion.img
//           src={coupleImg}
//           alt="WuMa Matchmaking"
//           style={{ y: bgSpring }}
//           animate={{ scale: [1, 1.018, 1], x: ['0%', '-0.35%', '0%'] }}
//           transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
//           className="w-full h-full object-cover object-[center_32%] opacity-100 brightness-[0.97] contrast-[1.02] saturate-[1.02]"
//         />
//         <img
//           src={coupleImg}
//           alt=""
//           aria-hidden="true"
//           className="absolute inset-0 w-full h-full object-cover object-[center_32%] blur-[7px] scale-[1.015] opacity-35 pointer-events-none select-none"
//           style={{
//             WebkitMaskImage: 'linear-gradient(to top, rgba(28,27,25,0.95) 0%, rgba(28,27,25,0.55) 26%, rgba(28,27,25,0) 60%)',
//             maskImage: 'linear-gradient(to top, rgba(28,27,25,0.95) 0%, rgba(28,27,25,0.55) 26%, rgba(28,27,25,0) 60%)',
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#1C1B19]/34 via-[#1C1B19]/10 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B19]/64 via-[#1C1B19]/18 to-transparent" />
//         <div
//           className="absolute inset-x-0 bottom-0 h-[50%] bg-[#1C1B19]/34 backdrop-blur-[10px]"
//           style={{
//             WebkitMaskImage: 'linear-gradient(to top, rgba(28,27,25,1) 0%, rgba(28,27,25,0.78) 48%, rgba(28,27,25,0) 100%)',
//             maskImage: 'linear-gradient(to top, rgba(28,27,25,1) 0%, rgba(28,27,25,0.78) 48%, rgba(28,27,25,0) 100%)',
//           }}
//         />
//         <div className="absolute inset-0 bg-[#1C1B19]/8" />
//       </div>

//       <motion.div
//         style={{ y: contentSpring }}
//         className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-3 sm:pb-4 lg:pb-6 flex flex-col justify-end min-h-[calc(90vh-120px)] sm:min-h-[calc(100vh-120px)]"
//       >

//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 w-full">
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 filter: 'blur(0px)',
//                 transition: { duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
//               },
//             }}
//             className="max-w-3xl text-left space-y-2.5 md:space-y-2.0"
//           >
//             <p className="text-sm sm:text-base lg:text-lg text-white font-sans font-light leading-snug drop-shadow-[0_4px_18px_rgba(28,27,25,0.42)]">
//               {/* Private matchmaking for verified people ready for intentional introductions. */}
//               Private matchmaking for verified people.

//             </p>
//             <h1
//             style={{ lineHeight: 1.18 }}
//             className="font-serif font-light w-[85%]  text-white text-3xl  md:text-4xl lg:text-6xl leading-[1.2] drop-shadow-[0_10px_30px_rgba(28,27,25,0.42)] tracking-tight">
//    Discreet matchmaking for committed individuals
//             </h1>
//           </motion.div>

//           <motion.div
//             variants={{
//               hidden: { opacity: 0, x: 24 },
//               visible: {
//                 opacity: 1,
//                 x: 0,
//                 transition: { duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
//               },
//             }}
//             className="flex flex-wrap items-center justify-start md:justify-end gap-4 shrink-0"
//           >
//             <motion.a
//               href="#cta"
//               initial="rest"
//               animate="rest"
//               whileHover="hover"
//               whileTap={{ scale: 0.98 }}
//               className="flex items-stretch gap-[8px] group"
//             >
//               <span className="h-12 bg-[#0F9598] text-white px-7 text-xs sm:text-sm font-semibold tracking-wide flex items-center rounded-[10px] shadow-[0_14px_30px_rgba(15,149,152,0.28)] group-hover:bg-[#1C1B19] transition-all duration-300">
//                 Start Your Journey
//               </span>
//               <motion.span
//                 variants={{
//                   rest: { x: 0 },
//                   hover: { x: 10, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
//                 }}
//                 className="h-12 w-12 bg-white text-[#0F9598] border border-white/80 flex items-center justify-center rounded-[10px] shadow-[0_14px_30px_rgba(255,255,255,0.14)] transition-colors duration-300 group-hover:bg-[#F9F8F4] group-hover:text-[#1C1B19] group-hover:shadow-[0_18px_34px_rgba(255,255,255,0.2)]"
//               >
//                 <motion.span
//                   variants={{
//                     rest: { x: 0, y: 0, rotate: 0 },
//                     hover: {
//                       // x: 2,
//                       // y: -2,
//                       rotate: 50,
//                       transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
//                     },
//                   }}
//                 >
//                   <ArrowUpRight className="w-4 h-4 stroke-[2.3]" />
//                 </motion.span>
//               </motion.span>
//             </motion.a>

//           </motion.div>

//       </div>
//       </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// };

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import coupleImg from "../../assets/coupleImage.png";
import { useLocalization } from "../../lib/i18n";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { locale, t } = useLocalization();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0px", "-72px"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.24, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-42px"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    [1, 0.96, 0.9],
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative z-0 h-[200svh] min-h-screen bg-brand-cream pb-12 md:pb-0"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-brand-charcoal">
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              src={coupleImg}
              alt={t('hero.alt')}
              style={{ y: imageY, scale: imageScale }}
              className="absolute -inset-y-16 inset-x-0 h-[calc(100%+8rem)] w-full object-cover object-[center_32%] opacity-100 brightness-[0.97] contrast-[1.02] saturate-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/34 via-brand-charcoal/10 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/64 via-brand-charcoal/18 to-transparent" />

            <div className="absolute inset-0 bg-brand-charcoal/8" />
          </div>

          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative z-10 flex h-full w-full items-end"
          >
            <div className="mx-auto w-full max-w-7xl px-6 pb-12 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <div className="max-w-3xl space-y-4 text-left">
                  <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight leading-[1.08]">
                    {locale === 'en' ? (
                      <>
                        Discreet matchmaking <span className="text-brand-teal">for committed individuals</span>
                      </>
                    ) : (
                      t('hero.heading')
                    )}
                  </h1>

                  <p className="text-sm font-light leading-snug text-white/80 sm:text-base lg:text-lg">
                    {t('hero.kicker')}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center justify-start gap-4">
                  <motion.a
                    href="#cta"
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    className="flex items-stretch gap-[8px] group"
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
                      className="flex h-12 items-center rounded-[10px] bg-brand-teal px-7 text-xs font-semibold tracking-wide text-white shadow-[0_14px_30px_rgba(var(--color-brand-teal),0.28)] transition-colors duration-300 group-hover:bg-brand-charcoal sm:text-sm"
                    >
                      {t('hero.cta')}
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
                      className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-white/80 bg-white text-brand-teal shadow-[0_14px_30px_rgba(255,255,255,0.14)] transition-colors duration-300 group-hover:bg-brand-cream group-hover:text-brand-charcoal group-hover:shadow-[0_18px_34px_rgba(255,255,255,0.2)]"
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
                        <ArrowUpRight className="h-4 w-4 stroke-[2.3]" />
                      </motion.span>
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
