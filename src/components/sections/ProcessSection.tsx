import React from 'react';
import { motion } from 'framer-motion';
import { softLift } from '../../lib/motion';
import { ArrowRight } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';

export const ProcessSection: React.FC = () => {
  const { get, t } = useLocalization();
  const steps = get<Array<{ title: string; desc: string; stepNum: string }>>('process.steps');

  return (
    <section
      id="process"
      className="bg-brand-darkTeal  py-16 sm:py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-teal opacity-30 mix-blend-screen pointer-events-none" />

      <div className="max-w-[112rem] mx-auto relative z-10 text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-10 sm:mb-14 font-serif tracking-tight [line-height:1.18]">
          {t('process.heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={softLift}
              // className="min-h-[300px] lg:min-h-[380px] bg-[#071415]  border border-white/18 hover:border-[#0F9598]/70 rounded-[10px] p-6 sm:p-7 lg:p-8 text-left transition-all duration-500 flex flex-col group relative overflow-hidden shadow-[0_18px_60px_rgba(28,27,25,0.35)] hover:shadow-[0_26px_80px_rgba(15,149,152,0.16)]"
              className="min-h-[300px] lg:min-h-[380px] bg-transparent  border border-white/18 hover:border-brand-teal/70 rounded-[10px] p-6 sm:p-7 lg:p-8 text-left transition-all duration-500 flex flex-col group relative overflow-hidden shadow-[0_18px_60px_rgb(var(--color-brand-charcoal)/0.35)] hover:shadow-[0_26px_80px_rgb(var(--color-brand-teal)/0.16)]"

            >
              <div className="absolute inset-0 bg-brand-teal/0 group-hover:bg-brand-teal/[0.035] transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10 flex items-start justify-between">
                <span className="font-sans text-sm sm:text-[15px] font-light text-white [line-height:1.35]">
                  {step.stepNum}
                </span>
                {/* <span className="font-sans text-xl text-white leading-none group-hover:text-brand-teal transition-colors duration-300">
                  +
                </span> */}
<ArrowRight
  className="w-4 h-4 stroke-[2.3] text-white rotate-90 md:rotate-0 transition-transform duration-300 group-hover:text-brand-teal"
/>

              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-end pt-24 sm:pt-32">
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-light mb-6 [line-height:1.18] group-hover:text-white transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-white text-sm sm:text-[15px] font-light [line-height:1.35] max-w-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
