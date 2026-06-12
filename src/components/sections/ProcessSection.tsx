import React from 'react';
import { motion } from 'framer-motion';
import { useLocalization } from '../../lib/i18n';
import { sectionReveal, viewportOnce } from '../../lib/motion';

export const ProcessSection: React.FC = () => {
  const { get, t } = useLocalization();
  const steps = get<Array<{ title: string; desc: string; stepNum: string }>>('process.steps') || [];

  return (
    <section
      id="process"
      className="bg-brand-cream py-16 sm:py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-t border-brand-teal/10"
    >
      <div className="absolute inset-0 bg-radial-teal opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="block text-xs tracking-[0.25em] text-brand-gold uppercase font-sans font-bold mb-3">
            {t('process.kicker') || 'HOW IT WORKS'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-brand-charcoal mb-4 leading-tight tracking-tight">
            {t('process.heading') || 'A Clear Path to Find Your Love'}
          </h2>
        </div>

        {/* Steps Stack */}
        <div className="space-y-20 sm:space-y-28 md:space-y-32">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                variants={sectionReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center"
              >
                {/* Image / Graphic Container */}
                <div
                  className={[
                    'md:col-span-7 flex justify-center w-full',
                    isEven ? 'md:order-1 md:justify-start' : 'md:order-2 md:justify-end',
                  ].join(' ')}
                >
                  <div className="relative w-full max-w-[460px] rounded-[20px] shadow-lg overflow-hidden aspect-[4/3]">
                    <img
                      src={`/images/process_step${idx + 1}.png`}
                      alt={step.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Text Copy Container */}
                <div
                  className={[
                    'md:col-span-5 text-left',
                    isEven ? 'md:order-2 md:pl-10' : 'md:order-1 md:pr-10',
                  ].join(' ')}
                >
                  <div className={`w-full max-w-[400px] space-y-3.5 ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                    <span className="block text-xs font-sans font-bold tracking-[0.25em] text-brand-gold uppercase">
                      STEP {parseInt(step.stepNum)}
                    </span>
                    
                    <h3 className="font-sans text-2xl sm:text-[30px] text-brand-charcoal font-bold leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-brand-charcoal/78 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
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
