// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { useLocalization } from "../../lib/i18n";

// export const HeroSection: React.FC = () => {
//   const { t } = useLocalization();

//   return (
//     <section
//       id="home"
//       className="relative z-10 bg-[#EEEEE9] min-h-[85vh] md:min-h-screen flex items-center overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-20 pt-32 md:pt-44 pb-16 md:pb-24">
        
//         {/* Left Column: Heading and copy */}
//         <div className="col-span-1 lg:col-span-6 space-y-6 text-left py-6">
//           <span className="block text-xs font-bold tracking-[0.25em] uppercase text-brand-gold font-sans">
//             {t("hero.kicker")}
//           </span>

//           <h1 
//             style={{ lineHeight: 1.15 }}
//             className="font-serif font-medium text-brand-charcoal text-4xl sm:text-5xl lg:text-[56px] tracking-tight"
//           >
//             {t("hero.heading")}
//           </h1>

//           <p className="text-brand-charcoal/80 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl font-normal">
//             {t("hero.description")}
//           </p>

//           <div className="pt-2">
//             <motion.a
//               href="#cta"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="group inline-flex h-12 items-center justify-center gap-2 bg-brand-teal text-white px-7 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-brand-teal/90 transition-colors duration-300 shadow-sm"
//             >
//               <span>{t("hero.cta").toUpperCase()}</span>
//               <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
//             </motion.a>
//           </div>
//         </div>

//         {/* Empty placeholder column on desktop to reserve space for absolute image */}
//         <div className="hidden lg:block lg:col-span-6" />

//         {/* Mobile Image (hidden on desktop) */}
//         <div className="col-span-1 lg:hidden w-full flex items-center justify-center py-6">
//           <div className="relative w-full max-w-[520px] aspect-[4/3] overflow-hidden rounded-[20px] border border-brand-teal/15 shadow-lg">
//             <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-[#EEEEE9] to-transparent z-20 pointer-events-none" />
//             <img
//               src="/images/Image20260611133747.png"
//               alt={t("hero.alt")}
//               className="w-full h-full object-cover object-[80%_8%]"
//             />
//           </div>
//         </div>

//       </div>

//       {/* Desktop Full-Bleed Faded Image (hidden on mobile) */}
//       <div className="absolute top-12  right-0 bottom-0 w-[50%] hidden lg:block z-10 overflow-hidden">
//         {/* Fading gradient overlay */}
//         <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-[#EEEEE9] via-[#EEEEE9]/80 to-transparent z-20 pointer-events-none" />
//         <img
//           src="/images/Image20260611133747.png"
//           alt={t("hero.alt")}
//           className="w-full h-full object-cover object-[80%_8%]"
//         />
//       </div>
//     </section>
//   );
// };




import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocalization } from "../../lib/i18n";

export const HeroSection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section
      id="home"
      className="relative z-10 bg-[#EEEEE9] min-h-[85vh] md:min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto w-full px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center relative z-20 pt-32 md:pt-44 pb-16 md:pb-24">
        
        {/* Left Column: Heading and copy */}
        <div className="col-span-1 lg:col-span-6 space-y-6 text-left py-6">
          <span className="block text-xs font-bold tracking-[0.25em] uppercase text-brand-gold font-sans">
            {t("hero.kicker")}
          </span>

          <h1 
            style={{ lineHeight: 1.15 }}
            className="font-serif font-medium text-brand-charcoal text-3xl sm:text-5xl lg:text-[56px] tracking-tight"
          >
            {t("hero.heading")}
          </h1>

          <p className="text-brand-charcoal/80 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl font-normal">
            {t("hero.description")}
          </p>

          <div className="pt-2">
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex h-12 items-center justify-center gap-2 bg-brand-teal text-white px-7 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-brand-teal/90 transition-colors duration-300 shadow-sm"
            >
              <span>{t("hero.cta").toUpperCase()}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
            </motion.a>
          </div>
        </div>

        {/* Empty placeholder column on desktop to reserve space for absolute image */}
        <div className="hidden lg:block lg:col-span-6" />

        {/* Mobile Image (hidden on desktop) */}
        <div className="col-span-1 lg:hidden w-full flex items-center justify-center">
          <div className="relative w-full max-w-[520px] aspect-[4/3] overflow-hidden rounded-[20px] border  shadow-lg">
            {/* <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-[#EEEEE9] to-transparent z-20 pointer-events-none" /> */}
            <img
              src="/images/Image20260611133747.png"
              alt={t("hero.alt")}
              className="w-full h-full object-cover object-[80%_8%]"
              loading="eager"
            />
          </div>
        </div>

      </div>

      {/* Desktop Full-Bleed Faded Image (hidden on mobile) */}
      <div className="absolute top-12 right-0 bottom-0 w-[50%] hidden lg:block z-10 overflow-hidden">
        {/* Fading gradient overlay */}
        <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-[#EEEEE9] via-[#EEEEE9]/80 to-transparent z-20 pointer-events-none" />
        <img
          src="/images/Image20260611133747.png"
          alt={t("hero.alt")}
          className="w-full h-full object-cover object-[80%_8%]"
          loading="eager"
        />
      </div>
    </section>
  );
};