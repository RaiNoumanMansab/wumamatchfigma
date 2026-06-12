import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocalization } from "../../lib/i18n";

export const CTASection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section
      id="cta"
      className="bg-[#09111e] py-16 sm:py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-teal opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Inner light card */}
        <motion.div
          className="bg-brand-cream rounded-[20px] border border-brand-teal/5 p-8 sm:p-12 md:p-16 text-center shadow-xl flex flex-col items-center justify-center gap-6 relative overflow-hidden"
        >
          {/* Heading */}
          <div className="space-y-4 max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight font-sans leading-tight">
              {t('cta.heading')}
            </h2>

            <p className="max-w-xl mx-auto text-brand-charcoal/78 text-sm sm:text-base font-light leading-relaxed font-sans">
              {t('cta.description')}
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10 mt-2">
            <motion.a
              href="tel:+123456789"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#0CB9B4] text-white px-6 py-3 rounded-[8px] text-xs font-bold tracking-wider uppercase hover:bg-brand-charcoal transition-colors duration-300 shadow-md"
            >
              <span>{t('cta.button') || 'Book A Call'}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
