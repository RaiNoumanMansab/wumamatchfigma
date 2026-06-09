import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocalization } from "../../lib/i18n";

export const CTASection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section
      id="cta"
      className="bg-[#071415] py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-teal opacity-30 mix-blend-screen pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Inner light card */}
        <motion.div
          // whileHover={{ y: -4, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
          className="bg-gradient-to-br from-[#F9F8F4] to-[#F9F8F4] rounded-[10px] border border-[#9B7A5B]/25 p-8 sm:p-12 md:p-14 text-center shadow-luxury flex flex-col items-center justify-center gap-8 relative overflow-hidden group"
        >
          {/* Heading */}
          <div className="space-y-5 max-w-2xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#1C1B19] [line-height:1.18] font-serif">
              {t('cta.heading')}
            </h2>

            <p className="max-w-xl mx-auto text-[#1C1B19]/68 text-sm sm:text-base font-light leading-relaxed">
              {t('cta.description')}
            </p>

            {/* <p className="text-[#1C1B19]/70 text-[10px] sm:text-xs tracking-wider uppercase font-bold">
    Confidentiality guaranteed. Bespoke introductions only.
  </p> */}
          </div>

          {/* Button */}
          <div className="relative z-10 flex items-center gap-2.5">
            <motion.a
              href="tel:+123456789"
              initial="rest"
              animate="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="flex items-stretch gap-[8px] group"
            >
              <span className="h-12 bg-[#0F9598] text-white px-7 text-xs sm:text-sm font-semibold tracking-wide flex items-center rounded-[10px] shadow-[0_14px_30px_rgba(15,149,152,0.28)] hover:bg-[#1C1B19] transition-all duration-300">
                {t('cta.button')}
              </span>

              <span className="h-12 w-12 bg-white text-[#0F9598] border border-[#0F9598]/25 flex items-center justify-center rounded-[10px] shadow-[0_14px_30px_rgba(255,255,255,0.14)] transition-colors duration-300 group-hover:bg-[#F9F8F4] group-hover:text-[#1C1B19] group-hover:border-[#1C1B19]/20 group-hover:shadow-[0_18px_34px_rgba(255,255,255,0.2)]">
                <motion.span
                  variants={{
                    rest: { rotate: 0 },
                    hover: {
                      rotate: 50,
                      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="flex items-center justify-center"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.3]" />
                </motion.span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
