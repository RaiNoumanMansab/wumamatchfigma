import React, { useState, useEffect } from 'react';
import { useLocalization } from '../../lib/i18n';
import logo390 from '../../assets/featuredSectionLogos/logoipsum-390.svg';
import logo410 from '../../assets/featuredSectionLogos/logoipsum-410.svg';
import logo418 from '../../assets/featuredSectionLogos/logoipsum-418.svg';
import logo426 from '../../assets/featuredSectionLogos/logoipsum-426.svg';
import { motion, AnimatePresence } from 'framer-motion';

const featuredBrands = [
  { name: 'The Knot', logo: logo390 },
  { name: 'WeddingWire', logo: logo410 },
  { name: 'Brides', logo: logo418 },
  { name: 'Happy Couple', logo: logo426 },
];

export const FeaturedSection: React.FC = () => {
  const { t } = useLocalization();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const total = featuredBrands.length;
  // Get 3 brands for the current index, shifting by 3 each time
  const currentBrands = [
    featuredBrands[(index * 3) % total],
    featuredBrands[(index * 3 + 1) % total],
    featuredBrands[(index * 3 + 2) % total],
  ];

  return (
    <section className="bg-[#FEF9EF] py-4 relative z-20 border-b border-brand-charcoal/15 w-full">
      <div className="relative mx-auto w-full max-w-5xl px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-brand-gold shrink-0">
          {t('featured.eyebrow') || 'AS SEEN ON'}
        </p>

        <div className="relative w-full max-w-[310px] sm:max-w-[480px] h-10 sm:h-12 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex items-center gap-6 sm:gap-10 absolute"
            >
              {currentBrands.map((brand, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center w-[90px] sm:w-[120px] h-7 sm:h-8 shrink-0"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain brightness-0"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

