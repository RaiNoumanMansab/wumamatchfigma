import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocalization } from "../../lib/i18n";

interface CTASectionProps {
  heading?: string;
  description?: string;
  buttonText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ heading, description, buttonText }) => {
  const { t } = useLocalization();

  return (
    <section
      id="cta"
      className="bg-[#09111e] py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-teal opacity-20 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Inner light card */}
        <motion.div
          className="bg-[#EEEEE9] rounded-[20px] border border-brand-teal/5 p-8 sm:p-12 md:p-16 text-center shadow-xl flex flex-col items-center justify-center gap-6 relative overflow-hidden"
        >
          {/* Heading */}
          <div className="space-y-4  mx-auto relative z-10">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-brand-charcoal tracking-tight font-serif leading-tight">
              {heading || t('cta.heading')}
            </h2>

            <p className="max-w-4xl mx-auto text-brand-charcoal/78 text-sm sm:text-base font-light leading-relaxed font-sans">
              {description || t('cta.description')}
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10 mt-2">
            <motion.a
              href="tel:+123456789"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex h-12 items-center justify-center gap-2 bg-brand-teal text-white px-7 rounded-[8px] text-xs font-bold tracking-wider uppercase hover:bg-brand-teal/90 transition-colors duration-300 shadow-md"
            >
              <span>{((buttonText || t('cta.button')) ?? 'Book A Call').toUpperCase()}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
