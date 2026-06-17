import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, Heart, ArrowUpRight } from 'lucide-react';
import { useLocalization } from '../../../lib/i18n';
import { cardReveal, containerStagger } from '../../../lib/motion';


import { ProcessSection } from '../../../components/sections/ProcessSection';

export const AboutPage: React.FC = () => {
  const { t } = useLocalization();

  const pillars = [
    {
      icon: <Shield className="w-5.5 h-5.5 text-brand-teal" />,
      title: 'Identity & Safety Trust',
      desc: 'Every member goes through a rigorous identification check and vetting process before profile activation.'
    },
    {
      icon: <Lock className="w-5.5 h-5.5 text-brand-teal" />,
      title: 'Privacy is Confidential',
      desc: 'Sensitive data, profiles, and high-resolution images are kept strictly blurred until active alignment is reached.'
    },
    {
      icon: <CheckCircle className="w-5.5 h-5.5 text-brand-teal" />,
      title: 'Verified Matches Only',
      desc: 'No algorithm guesses. Introductions are manually curated by senior matchmakers based on compatibility and core alignment.'
    },
    {
      icon: <Heart className="w-5.5 h-5.5 text-brand-teal" />,
      title: 'Commitment & Intention',
      desc: 'We cater exclusively to marriage-minded singles who value serious dates, meaningful alignment, and shared values.'
    }
  ];

  return (
    <div className="relative z-10 bg-[#FDFBF7] min-h-screen">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-[0.05]" />

      {/* Section 1: Our Mission Header (Beige background block, matching other subpages) */}
      <section className="relative overflow-hidden bg-[#EEEEE9] pt-28 md:pt-36 pb-12 sm:pb-16 border-b border-brand-teal/10">
        <div className="section-container relative z-10 text-center">
          <div className=" mx-auto">
            <span className="block text-xs font-bold tracking-[0.25em] text-brand-gold uppercase font-sans">
              {t('about.eyebrow')}
            </span>

            <h1 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:mt-6 sm:text-4xl lg:text-5xl mb-4">
              {t('about.heading')}
            </h1>

            <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Introduction Block (Two columns) */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 border-t border-brand-teal/5">
        <div className="section-container relative z-10">
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center text-left">
            {/* Left Column: Text */}
            <div className="space-y-5">
              <span className="block text-xs font-bold tracking-[0.25em] text-brand-gold uppercase font-sans">
                A PLACE BUILT FOR REAL LOVE
              </span>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:mt-6 sm:text-4xl lg:text-5xl">
                Crafting Love Stories Globally
              </h2>
              <p className="text-brand-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
                We believe deep connection starts with shared values, vetted profiles, and personalized concierge introductions. Our matchmaking team takes the noise out of dating, guiding you to find your life partner.
              </p>
              <p className="text-brand-charcoal/80 text-sm sm:text-base leading-relaxed font-light">
                WuMa Match serves serious, marriage-minded professionals across major metropolitan cities. We value your safety, time, and privacy, keeping photos and details blurred until you align.
              </p>
              <div className="pt-2">
                <motion.a
                  href="#cta"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex h-11 items-center justify-center gap-2 bg-brand-teal text-white px-6 font-bold text-[10px] tracking-widest uppercase rounded-lg hover:bg-brand-teal/90 transition-colors duration-300 shadow-sm"
                >
                  <span>APPLY FOR MEMBERSHIP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
                </motion.a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/Image20260616142038.png"
                  alt="Matched wedding couple"
                  className="w-full h-auto object-contain select-none bg-brand-cream/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pillars Section with Beige background */}
      <section className="relative overflow-hidden bg-[#EEEEE9] border-t border-b border-brand-teal/10 py-16 sm:py-20 lg:py-24">
        <div className="section-container relative z-10 text-center">
          <div className=" mx-auto mb-12">
            <span className="block text-xs font-bold tracking-[0.25em] text-brand-gold uppercase font-sans">
              OUR GUIDING VALUES
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:mt-6 sm:text-4xl lg:text-5xl mb-4">
              Our Core Pillars
            </h2>
            <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
              The values that guide our matchmakers, security, and community interactions.
            </p>
          </div>

          {/* Grid layout */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left  mx-auto"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={cardReveal}
                className="bg-white border border-brand-teal/10 rounded-[20px] p-6 shadow-[0_12px_32px_rgba(22,28,45,0.02)] hover:shadow-[0_20px_48px_rgba(22,28,45,0.06)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h4 className="font-serif text-base font-bold text-brand-charcoal mb-2 leading-tight">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm font-light leading-relaxed text-brand-charcoal/70">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4: How It Works Section */}
      <ProcessSection />

      {/* Section 5: Ready to Start CTA Block with Black Background */}
      <section className="bg-black w-full py-16 sm:py-24 relative overflow-hidden text-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-radial-teal opacity-[0.12] pointer-events-none" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52 }}
            className="bg-white border border-brand-teal/5 rounded-[20px] sm:rounded-[24px] py-12 sm:py-14 md:py-16 px-6 sm:px-10 md:px-12  mx-auto shadow-luxury overflow-hidden relative z-10"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-brand-charcoal tracking-tight font-serif leading-tight mb-4">
              Ready to Start?
            </h2>
            <p className="max-w-xl mx-auto text-brand-charcoal/78 text-sm sm:text-base font-light leading-relaxed font-sans mb-8">
              Get started by scheduling your confidential introductory consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex h-11 items-center justify-center gap-2 bg-brand-teal text-white px-6 font-bold text-[10px] tracking-widest uppercase rounded-lg hover:bg-brand-teal/90 transition-colors duration-300 shadow-sm w-full sm:w-auto"
              >
                <span>APPLY FOR MEMBERSHIP</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
              </motion.a>

              <motion.a
                href="#cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex h-11 items-center justify-center gap-2 border border-brand-teal text-brand-teal bg-white px-6 font-bold text-[10px] tracking-widest uppercase rounded-lg hover:bg-brand-teal/5 transition-colors duration-300 w-full sm:w-auto"
              >
                <span>BOOK A CALL</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
