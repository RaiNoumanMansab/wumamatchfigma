import React from 'react';
import { motion } from 'framer-motion';
import { useLocalization } from '../../lib/i18n';
import { sectionReveal, viewportOnce } from '../../lib/motion';

export const ProcessSection: React.FC = () => {
  const { get, t } = useLocalization();
  const steps = get<Array<{ title: string; desc: string; stepNum: string }>>('process.steps') || [];

  return (
    // <section
    //   id="process"
    //   className="bg-brand-cream py-16 sm:py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-t border-brand-teal/10"
    // >


    //   <div className="max-w-container mx-auto relative z-10 text-center">
    //     {/* Section Header */}
    //     <div className="max-w-3xl xl:max-w-4xl mx-auto mb-12 sm:mb-16">
    //       <span className="block text-xs xl:text-sm tracking-[0.3em] text-brand-gold uppercase font-sans font-bold mb-3">
    //         {t('process.kicker') || 'HOW IT WORKS'}
    //       </span>
    //       <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-medium text-brand-charcoal mb-4 leading-tight tracking-tight">
    //         {t('process.heading') || 'A Clear Path to Find Your Love'}
    //       </h2>
    //     </div>

    //     {/* Steps Stack */}
    //     <div className="space-y-16 sm:space-y-20 md:space-y-24">
    //       {steps.map((step, idx) => {
    //         const isEven = idx % 2 === 0;

    //         return (
    //           <motion.div
    //             key={idx}
    //             variants={sectionReveal}
    //             initial="hidden"
    //             whileInView="visible"
    //             viewport={viewportOnce}
    //             className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 xl:gap-20 2xl:gap-24 items-center max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto"
    //           >
    //             {/* Image / Graphic Container */}
    //             <div
    //               className={[
    //                 'flex w-full',
    //                 isEven ? 'md:order-1 md:justify-end' : 'md:order-2 md:justify-start',
    //               ].join(' ')}
    //             >
    //               <div className="relative w-full max-w-[440px] xl:max-w-[500px] 2xl:max-w-[560px] rounded-[20px] shadow-lg overflow-hidden aspect-[4/3]">
    //                 <img
    //                   src={`/images/process_step${idx + 1}.png`}
    //                   alt={step.title}
    //                   className="w-full h-full object-cover object-center"
    //                 />
    //               </div>
    //             </div>

    //             {/* Text Copy Container */}
    //             <div
    //               className={[
    //                 'text-left flex w-full',
    //                 isEven ? 'md:order-2 md:justify-start' : 'md:order-1 md:justify-end',
    //               ].join(' ')}
    //             >
    //               <div className={`w-full max-w-[400px] xl:max-w-[460px] 2xl:max-w-[520px] space-y-4 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
    //                 <span className="block text-xs xl:text-sm font-sans font-bold tracking-[0.3em] text-brand-gold uppercase">
    //                   STEP {parseInt(step.stepNum)}
    //                 </span>
                    
    //                 <h3 className="font-serif text-2xl sm:text-[30px] xl:text-[36px] 2xl:text-[40px] text-brand-charcoal font-medium leading-tight">
    //                   {step.title}
    //                 </h3>
                    
    //                 <p className="text-brand-charcoal/78 text-sm sm:text-base xl:text-[17px] 2xl:text-[18px] leading-relaxed font-light whitespace-pre-line">
    //                   {step.desc}
    //                 </p>
    //               </div>
    //             </div>
    //           </motion.div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>


    <section
  id="process"
  className="relative overflow-hidden border-t border-brand-teal/10 bg-brand-cream px-4 py-14 sm:px-6 sm:py-20 lg:px-0 lg:py-24"
>
  <div className="main-container  relative z-10 text-center">
    {/* Section Header */}
    <div className="mx-auto mb-12 max-w-[var(--container-max-width)] sm:mb-16">
      <span className="mb-3 block font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
        {t("process.kicker") || "HOW IT WORKS"}
      </span>

      <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:text-4xl lg:text-5xl">
        {t("process.heading") || "A Clear Path to Find Your Love"}
      </h2>
    </div>

    {/* Steps */}
    <div className="space-y-14 sm:space-y-16 lg:space-y-20">
      {steps.map((step, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <motion.div
            key={idx}
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2 lg:gap-14"
          >
            {/* Image */}
            <div
              className={[
                "w-full",
                isEven ? "md:order-1" : "md:order-2",
              ].join(" ")}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={`/images/process_step${idx + 1}.png`}
                  alt={step.title}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div
              className={[
                "flex w-full text-left",
                isEven ? "md:order-2" : "md:order-1",
              ].join(" ")}
            >
              <div className="w-full max-w-xl space-y-4">
                <span className="block font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-gold">
                  STEP {parseInt(step.stepNum)}
                </span>

                <h3 className="font-serif text-2xl font-medium leading-tight text-brand-charcoal sm:text-[30px] lg:text-[36px]">
                  {step.title}
                </h3>

                <p className="whitespace-pre-line text-sm font-light leading-relaxed text-brand-charcoal/80 sm:text-base lg:text-[17px]">
                  {step.desc}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
  );
};
