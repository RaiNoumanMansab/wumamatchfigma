// import React from 'react';
// import { Shield, EyeOff, Search, Lock } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { sectionReveal, viewportOnce } from '../../lib/motion';

// export const PrivacySection: React.FC = () => {
//   const points = [
//     {
//       icon: <Shield className="w-5 h-5 text-[#0F9598]" />,
//       title: 'Liveness Check',
//       desc: 'Rigorous verification process to ensure every member is genuine, active, and identity-verified.',
//     },
//     {
//       icon: <EyeOff className="w-5 h-5 text-[#0F9598]" />,
//       title: 'Photos Protected',
//       desc: 'Your photos are never shared publicly or cataloged. Only hand-selected matches approved by you can view them.',
//     },
//     {
//       icon: <Search className="w-5 h-5 text-[#0F9598]" />,
//       title: 'Not Indexed',
//       desc: 'Your profile is completely invisible to search engines, crawlers, and public directories.',
//     },
//   ];

//   const profiles = [
//     {
//       img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
//       tag: 'Vetted Member',
//       id: 'WM-9832',
//       status: 'Verified',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
//       tag: 'VIP Client',
//       id: 'WM-4102',
//       status: 'VIP Verified',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
//       tag: 'Vetted Member',
//       id: 'WM-7392',
//       status: 'Verified',
//     },
//   ];

//   const scrollingProfiles = [...profiles, ...profiles];

//   return (
//     <motion.section
//       id="privacy"
//       variants={sectionReveal}
//       initial="hidden"
//       whileInView="visible"
//       viewport={viewportOnce}
//       className="bg-[#F9F8F4] py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
//           {/* Left Column - Copy & Points */}
//           <motion.div variants={sectionReveal} className="lg:col-span-7 space-y-6 text-left">
//             <div className="space-y-3">
//               <span className="block text-[10px] tracking-[0.25em] font-bold text-[#9B7A5B] uppercase font-sans font-semibold">
//                 Security & Privacy
//               </span>
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1B19] leading-tight font-serif">
//                 Your privacy is our highest mandate.
//               </h2>
//               <p className="text-[#1C1B19]/70 text-sm sm:text-base leading-relaxed font-light max-w-xl">
//                 There is no public database browsing. Your profile is strictly private, shared only with curated matches you explicitly approve beforehand.
//               </p>
//             </div>

//             {/* Verification Features */}
//             <div className="space-y-4 pt-6 border-t border-[#0F9598]/15">
//               {points.map((pt, idx) => (
//                 <div key={idx} className="flex gap-4 group">
//                   <div className="w-9 h-9 rounded-[10px] bg-[#0F9598]/8 border border-[#0F9598]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0F9598]/15 group-hover:border-[#0F9598]/30 transition-all duration-300">
//                     {pt.icon}
//                   </div>
//                   <div>
//                     <h3 className="font-sans font-bold text-xs sm:text-sm text-[#1C1B19] tracking-wide mb-1">
//                       {pt.title}
//                     </h3>
//                     <p className="text-[#1C1B19]/58 text-xs sm:text-sm font-light leading-relaxed">
//                       {pt.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div variants={sectionReveal} className="lg:col-span-5 w-full flex flex-col items-center justify-center">
//             <div className="privacy-scroll-window relative w-full max-w-sm h-[400px] md:h-[520px] overflow-hidden rounded-[10px] border border-[#0F9598]/14 bg-white/58 p-4 shadow-[0_24px_70px_rgba(28,27,25,0.1)] backdrop-blur-md">
//               <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#F9F8F4] to-transparent z-20 pointer-events-none" />
//               <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F9F8F4] to-transparent z-20 pointer-events-none" />

//               <div 
//                 className="privacy-marquee-track flex flex-col gap-5"
//                 aria-hidden="true"
//               >
//                 {scrollingProfiles.map((profile, index) => (
//                   <div 
//                     key={index}
//                     className="relative w-full h-[350px] shrink-0 rounded-[10px] overflow-hidden shadow-[0_18px_45px_rgba(28,27,25,0.12)] border border-[#0F9598]/12 bg-white p-4 flex flex-col justify-between"
//                   >
//                     <div className="relative h-[216px] w-full rounded-[10px] overflow-hidden bg-[#F9F8F4] flex items-center justify-center group">
//                       <img
//                         src={profile.img}
//                         alt="Confidential Portrait Profile"
//                         className="w-full h-full object-cover filter blur-[22px] scale-110 pointer-events-none select-none"
//                       />
                      
//                       <div className="absolute inset-0 bg-[#1C1B19]/34 flex flex-col items-center justify-center p-4 text-center">
//                         <div className="w-10 h-10 rounded-[10px] bg-[#F9F8F4] flex items-center justify-center shadow-lg border border-[#9B7A5B]/30 mb-2.5 animate-gentle-float">
//                           <Lock className="w-4 h-4 text-[#9B7A5B]" />
//                         </div>
//                         <span className="text-[10px] tracking-[0.2em] font-bold text-white uppercase block mb-1">
//                           Confidential Profile
//                         </span>
//                         <p className="text-[9px] text-[#FFFFFF]/72 max-w-[180px] leading-relaxed">
//                           Photos & full bio unlocked only after mutual authorization.
//                         </p>
//                       </div>
//                     </div>

//                     {/* Profile Metadata - showing clear, premium verified status */}
//                     <div className="flex flex-col gap-2">
//                       <div className="flex items-center justify-between">
//                         <span className="text-[10px] font-bold text-[#1C1B19] tracking-wider uppercase bg-[#1C1B19]/5 px-2 py-0.5 rounded font-sans">
//                           ID: {profile.id}
//                         </span>
//                         <span className="text-[9px] font-bold text-[#0F9598] tracking-[0.15em] uppercase">
//                           {profile.tag}
//                         </span>
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <span className="bg-[#9B7A5B]/15 text-[#9B7A5B] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-[8px] border border-[#9B7A5B]/30 font-sans">
//                           {profile.status}
//                         </span>
//                       </div>
//                       <div className="space-y-1.5 pt-2 border-t border-[#0F9598]/10">
//                         <div className="h-2.5 w-full bg-[#1C1B19]/10 rounded" />
//                         <div className="h-2.5 w-4/5 bg-[#1C1B19]/10 rounded" />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </motion.div>

//         </div>
//       </div>
//     </motion.section>
//   );
// };


import React from 'react';
import { Shield, EyeOff, Search, Lock } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';

export const PrivacySection: React.FC = () => {
  const { get, t } = useLocalization();
  const translatedPoints = get<Array<{ title: string; desc: string }>>('privacy.points');
  const points = [
    {
      icon: <Shield className="w-5 h-5 text-[#0F9598]" />,
      title: translatedPoints[0].title,
      desc: translatedPoints[0].desc,
    },
    {
      icon: <EyeOff className="w-5 h-5 text-[#0F9598]" />,
      title: translatedPoints[1].title,
      desc: translatedPoints[1].desc,
    },
    {
      icon: <Search className="w-5 h-5 text-[#0F9598]" />,
      title: translatedPoints[2].title,
      desc: translatedPoints[2].desc,
    },
  ];

  const translatedProfiles = get<Array<{ tag: string; id: string; status: string }>>('privacy.profiles');
  const profileImages = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  ];

  const profiles = translatedProfiles.map((profile, index) => ({
    ...profile,
    img: profileImages[index],
  }));

  const scrollingProfiles = [...profiles, ...profiles];

  return (
    <section
      id="privacy"
      className="bg-[#F9F8F4] py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column - Copy & Points */}
          <div className="lg:col-span-7 space-y-6 text-left lg:w-[80%]">
            <div className="space-y-3">
              <span className="block text-[10px] tracking-[0.25em] text-[#9B7A5B] uppercase font-sans font-semibold">
                {t('privacy.eyebrow')}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1C1B19] leading-[1.18] font-serif"
              style={{ lineHeight: 1.18 }}
              >
                {t('privacy.heading')}
              </h2>

              <p className="text-[#1C1B19]/70 text-sm sm:text-base [line-height:1.35] font-light max-w-xl">
                {t('privacy.description')}
              </p>
            </div>

            {/* Verification Features */}
            <div className="space-y-3">
              {points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 group rounded-[14px] border border-[#0F9598]/15 bg-white/35 px-4 py-3.5 transition-all duration-300 hover:border-[#0F9598]/30 hover:bg-white/55"
                >
                  <div className="w-9 h-9 rounded-[10px] bg-[#0F9598]/8 border border-[#0F9598]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0F9598]/15 group-hover:border-[#0F9598]/30 transition-all duration-300">
                    {pt.icon}
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-xs sm:text-sm text-[#1C1B19] tracking-wide mb-1">
                      {pt.title}
                    </h3>

                    <p className="text-[#1C1B19]/58 text-xs sm:text-sm font-light [line-height:1.35]">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Confidential Profiles */}
          <div className="lg:col-span-5 w-full flex flex-col items-center justify-center">
            <div className="privacy-scroll-window relative w-full max-w-sm h-[400px] md:h-[520px] overflow-hidden rounded-[10px] border border-[#0F9598]/14 bg-white/58 p-4 shadow-[0_24px_70px_rgba(28,27,25,0.1)] backdrop-blur-md">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#F9F8F4] to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F9F8F4] to-transparent z-20 pointer-events-none" />

              <div
                className="privacy-marquee-track flex flex-col gap-5"
                aria-hidden="true"
              >
                {scrollingProfiles.map((profile, index) => (
                  <div
                    key={index}
                    className="relative w-full h-[350px] shrink-0 rounded-[10px] overflow-hidden shadow-[0_18px_45px_rgba(28,27,25,0.12)] border border-[#0F9598]/12 bg-white p-4 flex flex-col justify-between"
                  >
                    <div className="relative h-[216px] w-full rounded-[10px] overflow-hidden bg-[#F9F8F4] flex items-center justify-center group">
                      <img
                        src={profile.img}
                        alt={t('privacy.profileAlt')}
                        className="w-full h-full object-cover filter blur-[22px] scale-110 pointer-events-none select-none"
                      />

                      <div className="absolute inset-0 bg-[#1C1B19]/34 flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-10 h-10 rounded-[10px] bg-[#F9F8F4] flex items-center justify-center shadow-lg border border-[#9B7A5B]/30 mb-2.5 animate-gentle-float">
                          <Lock className="w-4 h-4 text-[#9B7A5B]" />
                        </div>

                        <span className="text-[10px] tracking-[0.2em] font-bold text-white uppercase block mb-1">
                          {t('privacy.confidentialProfile')}
                        </span>

                        <p className="text-[9px] text-white/72 max-w-[170px] [line-height:1.35]">
                          {t('privacy.unlockNote')}
                        </p>
                      </div>
                    </div>

                    {/* Profile Metadata */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#1C1B19] tracking-wider uppercase bg-[#1C1B19]/5 px-2 py-0.5 rounded font-sans">
                          ID: {profile.id}
                        </span>

                        <span className="text-[9px] font-bold text-[#0F9598] tracking-[0.15em] uppercase">
                          {profile.tag}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="bg-[#9B7A5B]/15 text-[#9B7A5B] text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-[8px] border border-[#9B7A5B]/30 font-sans">
                          {profile.status}
                        </span>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-[#0F9598]/10">
                        <div className="h-2.5 w-full bg-[#1C1B19]/10 rounded" />
                        <div className="h-2.5 w-4/5 bg-[#1C1B19]/10 rounded" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
