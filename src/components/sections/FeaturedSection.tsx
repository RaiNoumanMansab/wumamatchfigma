import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocalization } from '../../lib/i18n';
import logo390 from '../../assets/featuredSectionLogos/logoipsum-390.svg';
import logo410 from '../../assets/featuredSectionLogos/logoipsum-410.svg';
import logo418 from '../../assets/featuredSectionLogos/logoipsum-418.svg';
import logo426 from '../../assets/featuredSectionLogos/logoipsum-426.svg';

type FeaturedBrand = {
  name: string;
  logo: string;
};

const ROTATION_MS = 5000;
const SLIDE_EASE = [0.65, 0, 0.35, 1] as const;

const featuredBrands: FeaturedBrand[] = [
  { name: 'Logoipsum 390', logo: logo390 },
  { name: 'Logoipsum 410', logo: logo410 },
  { name: 'Logoipsum 418', logo: logo418 },
  { name: 'Logoipsum 426', logo: logo426 },
];

const buildBrandGroups = (brands: FeaturedBrand[]) => {
  if (brands.length <= 3) {
    return [brands];
  }

  return brands.map((_, groupIndex) =>
    Array.from(
      { length: 3 },
      (_item, itemIndex) => brands[(groupIndex + itemIndex) % brands.length],
    ),
  );
};

export const FeaturedSection: React.FC = () => {
  const { t } = useLocalization();
  const brandGroups = useMemo(() => buildBrandGroups(featuredBrands), []);
  const [activeGroup, setActiveGroup] = useState(0);

  useEffect(() => {
    if (brandGroups.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveGroup((current) => (current + 1) % brandGroups.length);
    }, ROTATION_MS);

    return () => window.clearInterval(timer);
  }, [brandGroups.length]);

  const visibleBrands = brandGroups[activeGroup] ?? [];

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden text-center sm:mb-6">
      {/* <div className="pointer-events-none absolute inset-x-0 top-2 z-0 mx-auto h-40 max-w-4xl" /> */}

      <p className="relative z-10 mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#9B7A5B]">
        {t('featured.eyebrow')}
      </p>

      {/* <h3 className="mx-auto mb-7 max-w-2xl font-serif text-2xl font-light text-[#9B7A5B] [line-height:1.16] sm:text-3xl">
        {t('featured.heading')}
      </h3> */}

      <div className="relative z-10 mx-auto h-[104px] max-w-4xl overflow-hidden sm:h-[126px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#FAF7F2] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#FAF7F2] to-transparent sm:w-20" />

        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={activeGroup}
            initial={{ x: 96, opacity: 0, filter: 'blur(8px)' }}
            animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ x: -96, opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.78, ease: SLIDE_EASE }}
            className="absolute inset-0 grid grid-cols-3 items-center gap-4 px-1 sm:gap-8 sm:px-6"
          >
            {visibleBrands.map((brand, index) => {
              const isFeatured = index === 1;

              return (
                <motion.div
                  key={`${brand.name}-${activeGroup}`}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.52,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    'flex min-w-0 items-center justify-center px-1 transition-all duration-500 sm:px-4',
                    isFeatured
                      ? 'scale-110 opacity-100 sm:scale-125'
                      : 'scale-90 opacity-100',
                  ].join(' ')}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-auto max-h-10 w-full max-w-[150px] object-contain [filter:brightness(0)_saturate(100%)_invert(18%)_sepia(23%)_saturate(1321%)_hue-rotate(140deg)_brightness(91%)_contrast(96%)] drop-shadow-[0_10px_24px_rgba(5,60,66,0.08)] sm:max-h-12 sm:max-w-[210px]"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
