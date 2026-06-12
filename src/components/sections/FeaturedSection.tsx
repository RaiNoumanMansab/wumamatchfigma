import React, { useState, useEffect } from 'react';
import { useLocalization } from '../../lib/i18n';
import logo390 from '../../assets/featuredSectionLogos/logoipsum-390.svg';
import logo410 from '../../assets/featuredSectionLogos/logoipsum-410.svg';
import logo418 from '../../assets/featuredSectionLogos/logoipsum-418.svg';
import logo426 from '../../assets/featuredSectionLogos/logoipsum-426.svg';
import { motion } from 'framer-motion';

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

  // Concatenate array to allow endless scrolling list
  const displayBrands = [...featuredBrands, ...featuredBrands, ...featuredBrands, ...featuredBrands];
  const itemWidth = 160; // item width (120px) + gap (40px)

  return (
    <section className="bg-brand-cream py-4 relative z-20 border-b border-brand-teal/5 w-full">
      <div className="relative mx-auto w-full max-w-5xl px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-brand-gold shrink-0">
          {t('featured.eyebrow') || 'AS SEEN ON'}
        </p>

        <div className="relative w-full max-w-[440px] h-12 overflow-hidden flex items-center">
          <motion.div
            animate={{ x: -(index % featuredBrands.length) * itemWidth }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-10 absolute left-0"
          >
            {displayBrands.map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-[120px] h-8 opacity-45 hover:opacity-85 transition-opacity duration-300 shrink-0"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain brightness-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

