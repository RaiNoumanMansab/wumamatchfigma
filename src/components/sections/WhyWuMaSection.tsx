import React, { useMemo, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useLocalization } from '../../lib/i18n';

type HeadlinePart = {
  text: string;
  className: string;
};

type AnimatedCharProps = {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
  className?: string;
};

const AnimatedCharacter: React.FC<AnimatedCharProps> = ({
  char,
  index,
  totalChars,
  progress,
  className = '',
}) => {
  const start = index / Math.max(totalChars - 1, 1);
  const end = Math.min(start + 0.08, 1);

  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const y = useTransform(progress, [start, end], [4, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block ${className}`}
    >
      {char}
    </motion.span>
  );
};

const fallbackHeadlineParts: HeadlinePart[] = [
  {
    text: 'We help ambitious singles go from',
    className: 'text-brand-charcoal',
  },
  {
    text: '“good enough”',
    className: 'italic text-brand-gold font-sans',
  },
  {
    text: 'to',
    className: 'text-brand-charcoal',
  },
  {
    text: 'unforgettable',
    className: 'font-semibold',
  },
  {
    text: ', blending psychology, intuition, and deep vetting to deliver connections that actually move the needle.',
    className: 'text-brand-charcoal',
  },
];

const splitIntoSafeWords = (text: string) => {
  const trimmedText = text.trim();
  if (!trimmedText) return [];
  const hasSpaces = /\s/.test(trimmedText);
  if (!hasSpaces) {
    return [trimmedText];
  }
  return trimmedText.split(/\s+/).filter(Boolean);
};

export const WhyWuMaSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { get, t } = useLocalization();

  const translatedHeadlineParts = get<HeadlinePart[]>('why.headlineParts');

  const headlineParts = useMemo(() => {
    const parts = Array.isArray(translatedHeadlineParts)
      ? translatedHeadlineParts.filter(
          (part) =>
            part &&
            typeof part.text === 'string' &&
            typeof part.className === 'string'
        )
      : fallbackHeadlineParts;

    return parts.map((part) => {
      let overridenClass = 'text-brand-charcoal font-sans font-medium';
      
      if (part.className.includes('italic')) {
        overridenClass = part.className.includes('font-sans')
          ? 'italic text-brand-charcoal font-sans'
          : 'italic text-brand-charcoal font-serif';
      }

      // Preserve special text colors (gold and teal accents)
      if (part.className.includes('text-brand-gold')) {
        overridenClass = overridenClass.replace('text-brand-charcoal', 'text-brand-gold');
      } else if (part.className.includes('text-brand-teal')) {
        overridenClass = overridenClass.replace('text-brand-charcoal', 'text-brand-teal');
      }

      // Preserve font weight customization if specified
      if (part.className.includes('font-semibold')) {
        overridenClass = overridenClass.replace('font-medium', 'font-semibold');
      } else if (part.className.includes('font-normal')) {
        overridenClass = overridenClass.replace('font-medium', 'font-normal');
      }

      return {
        ...part,
        className: overridenClass,
      };
    });
  }, [translatedHeadlineParts]);

  const words = useMemo(() => {
    return headlineParts.flatMap((part) =>
      splitIntoSafeWords(part.text).map((word) => ({
        word,
        className: part.className,
      }))
    );
  }, [headlineParts]);

  const totalChars = useMemo(() => {
    return Math.max(
      words.reduce((total, item) => total + Array.from(item.word).length, 0),
      1
    );
  }, [words]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 55%'],
  });

  let charIndex = 0;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-white py-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden border-t border-brand-teal/5"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-3 mb-6 lg:mb-0 min-w-0 pt-2">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-gold font-sans inline-flex items-center gap-2 whitespace-nowrap">
              {t('why.eyebrow') || 'OUR APPROACH'}

              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-flex"
              >
                <ArrowRight className="w-4 h-4 text-brand-gold shrink-0" />
              </motion.span>
            </span>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-9 min-w-0 flex flex-col">
            {/* Character Scroll Reveal Headline */}
            <div className="max-w-5xl w-full min-w-0 mb-8 overflow-hidden">
              <h2
                className="flex flex-wrap items-baseline gap-x-[0.28em] gap-y-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-brand-charcoal tracking-tight max-w-full leading-tight"
              >
                {words.map((item, wordIndex) => (
                  <span
                    key={`${item.word}-${wordIndex}`}
                    className="inline-flex min-w-0 max-w-full flex-nowrap"
                  >
                    {Array.from(item.word).map((char, localCharIndex) => {
                      const currentIndex = charIndex;
                      charIndex += 1;

                      return (
                        <AnimatedCharacter
                          key={`${item.word}-${wordIndex}-${localCharIndex}`}
                          char={char}
                          index={currentIndex}
                          totalChars={totalChars}
                          progress={scrollYProgress}
                          className={item.className}
                        />
                      );
                    })}
                  </span>
                ))}
              </h2>
            </div>

            {/* CTA */}
            <div className="pt-2 max-w-full">
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex h-12 items-center justify-center gap-2 bg-brand-teal text-white px-7 rounded-[8px] text-xs font-bold tracking-wider uppercase hover:bg-brand-teal/90 transition-colors duration-300 shadow-md"
              >
                <span>{(t('why.cta') || 'Apply Now').toUpperCase()}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};