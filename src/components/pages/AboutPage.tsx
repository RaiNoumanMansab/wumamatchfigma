import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, Heart, ArrowUpRight } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';
import { cardReveal, containerStagger } from '../../lib/motion';

import coupleWedding from '../../assets/couple_wedding.jpg';
import step1 from '/images/process_step1.png';
import step2 from '/images/process_step2.png';
import step3 from '/images/process_step3.png';
import step4 from '/images/process_step4.png';
import step5 from '/images/process_step5.png';

export const AboutPage: React.FC = () => {
  const { t } = useLocalization();

  const pillars = [
    {
      icon: <Shield className="w-5 h-5 text-brand-teal" />,
      title: 'Identity & Safety Trust',
      desc: 'Every member goes through a rigorous identification check and vetting process before profile activation.'
    },
    {
      icon: <Lock className="w-5 h-5 text-brand-teal" />,
      title: 'Privacy is Confidential',
      desc: 'Sensitive data, profiles, and high-resolution images are kept strictly blurred until active alignment is reached.'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-brand-teal" />,
      title: 'Verified Matches Only',
      desc: 'No algorithm guesses. Introductions are manually curated by senior matchmakers based on compatibility and core alignment.'
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-teal" />,
      title: 'Commitment & Intention',
      desc: 'We cater exclusively to marriage-minded singles who value serious dates, meaningful alignment, and shared values.'
    }
  ];

  return (
    <div className="relative z-10 bg-[#FDFBF7] min-h-screen pt-28 md:pt-36 pb-0 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-[0.05]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Our Mission Header */}
        <div className="max-w-3xl mx-auto mb-16 px-6">
          <span className="block text-[11px] tracking-[0.25em] text-[#9B7A5B] uppercase font-sans font-bold mb-3">
            {t('about.eyebrow') || 'ABOUT US'}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-medium text-brand-charcoal mb-4 leading-tight tracking-tight">
            Our Mission: Meaningful Connections
          </h1>

          <p className="text-brand-charcoal/70 text-sm sm:text-[15px] font-normal leading-relaxed max-w-xl mx-auto">
            Helping people find intentional matches built on shared values, safety, and privacy in a digital world.
          </p>
        </div>

        {/* Introduction Block (Two columns) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-left px-6 mb-20">
          {/* Left Column: Text */}
          <div className="md:col-span-6 space-y-5">
            <span className="block text-[11px] tracking-[0.2em] text-[#9B7A5B] uppercase font-sans font-bold">
              A PLACE BUILT FOR REAL LOVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal tracking-tight leading-tight">
              Crafting Love Stories Globally
            </h2>
            <p className="text-brand-charcoal/80 text-xs sm:text-sm leading-relaxed font-light">
              We believe deep connection starts with shared values, vetted profiles, and personalized concierge introductions. Our matchmaking team takes the noise out of dating, guiding you to find your life partner.
            </p>
            <p className="text-brand-charcoal/80 text-xs sm:text-sm leading-relaxed font-light">
              WuMa Match serves serious, marriage-minded professionals across major metropolitan cities. We value your safety, time, and privacy, keeping photos and details blurred until you align.
            </p>
            <div className="pt-2">
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex h-11 items-center justify-center gap-2 bg-brand-teal text-white px-6 font-bold text-[10px] tracking-widest uppercase rounded-lg hover:bg-brand-teal/95 transition-colors duration-300 shadow-sm"
              >
                <span>APPLY FOR MEMBERSHIP</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
              </motion.a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:col-span-6 w-full">
            <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-[24px] border border-brand-teal/5 shadow-md">
              <img
                src={coupleWedding}
                alt="Matched wedding couple"
                className="w-full h-full object-cover select-none"
              />
            </div>
          </div>
        </div>

        {/* Pillars Section with Beige background */}
        <div className="bg-[#F5F5F0] py-16 md:py-20 w-full px-6 mb-20 relative">
          <div className="max-w-5xl mx-auto relative z-10">
            <span className="block text-[11px] tracking-[0.2em] text-[#9B7A5B] uppercase font-sans font-bold mb-3">
              OUR GUIDING VALUES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-brand-charcoal mb-4 tracking-tight">
              Our Core Pillars
            </h2>
            <p className="text-brand-charcoal/70 text-xs sm:text-sm max-w-xl mx-auto mb-12 leading-relaxed">
              The values that guide our matchmakers, security, and community interactions.
            </p>

            {/* Grid layout */}
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
            >
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={cardReveal}
                  className="bg-white border border-brand-teal/5 rounded-[20px] p-6 shadow-[0_8px_24px_rgba(22,28,45,0.01)] hover:shadow-[0_12px_32px_rgba(22,28,45,0.03)] transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h4 className="font-serif text-sm font-bold text-brand-charcoal mb-2 leading-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] font-normal leading-relaxed text-brand-charcoal/65">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-5xl mx-auto text-center px-6 mb-24">
          <span className="block text-[11px] tracking-[0.25em] text-[#9B7A5B] uppercase font-sans font-bold mb-3">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-brand-charcoal mb-16 tracking-tight leading-tight">
            A Clear Path to Find Your Love
          </h2>

          {/* Alternating Step items */}
          <div className="space-y-16 md:space-y-24">
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-left">
              <div className="md:col-span-6 order-2 md:order-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-brand-teal/5 shadow-sm">
                  <img
                    src={step1}
                    alt="Step 1: Join & Verify"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
              <div className="md:col-span-6 order-1 md:order-2 space-y-3">
                <span className="block text-[10px] tracking-[0.16em] text-[#9B7A5B] uppercase font-sans font-bold">
                  STEP 1
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-charcoal">
                  Join & Verify
                </h3>
                <p className="text-brand-charcoal/75 text-xs sm:text-sm leading-relaxed font-light">
                  Submit profiles securely. We verify identity and basic references to maintain a high-trust network of intentional matchmakers.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-left">
              <div className="md:col-span-6 space-y-3">
                <span className="block text-[10px] tracking-[0.16em] text-[#9B7A5B] uppercase font-sans font-bold">
                  STEP 2
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-charcoal">
                  Speak with a Matchmaker
                </h3>
                <p className="text-brand-charcoal/75 text-xs sm:text-sm leading-relaxed font-light">
                  Engage in a 1-on-1 private video call. We dive deep into compatibility factors, life objectives, and alignment parameters.
                </p>
              </div>
              <div className="md:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-brand-teal/5 shadow-sm">
                  <img
                    src={step2}
                    alt="Step 2: Speak with a Matchmaker"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-left">
              <div className="md:col-span-6 order-2 md:order-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-brand-teal/5 shadow-sm">
                  <img
                    src={step3}
                    alt="Step 3: Receive Curated Matches"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
              <div className="md:col-span-6 order-1 md:order-2 space-y-3">
                <span className="block text-[10px] tracking-[0.16em] text-[#9B7A5B] uppercase font-sans font-bold">
                  STEP 3
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-charcoal">
                  Receive Curated Matches
                </h3>
                <p className="text-brand-charcoal/75 text-xs sm:text-sm leading-relaxed font-light">
                  Receive hand-selected match proposals. We present comprehensive candidate briefs outlining compatibility metrics while keeping photos securely blurred.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-left">
              <div className="md:col-span-6 space-y-3">
                <span className="block text-[10px] tracking-[0.16em] text-[#9B7A5B] uppercase font-sans font-bold">
                  STEP 4
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-charcoal">
                  Meet with Intention
                </h3>
                <p className="text-brand-charcoal/75 text-xs sm:text-sm leading-relaxed font-light">
                  Align on matches to unblur profile photos, coordinate virtual introductions, and transition to private in-person meetings.
                </p>
              </div>
              <div className="md:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-brand-teal/5 shadow-sm">
                  <img
                    src={step4}
                    alt="Step 4: Meet with Intention"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center text-left">
              <div className="md:col-span-6 order-2 md:order-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-brand-teal/5 shadow-sm">
                  <img
                    src={step5}
                    alt="Step 5: Build a Real Relationship"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
              <div className="md:col-span-6 order-1 md:order-2 space-y-3">
                <span className="block text-[10px] tracking-[0.16em] text-[#9B7A5B] uppercase font-sans font-bold">
                  STEP 5
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-brand-charcoal">
                  Build a Real Relationship
                </h3>
                <p className="text-brand-charcoal/75 text-xs sm:text-sm leading-relaxed font-light">
                  Embark on dating with alignment, safety checks, and matchmaker feedback reviews, paving the way to build a lasting, loving partnership.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Ready to Start CTA Block with Black Background */}
      <div className="bg-black w-full py-16 md:py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden text-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-radial-teal opacity-[0.12] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52 }}
            className="bg-white border border-brand-teal/5 rounded-[24px] py-12 px-8 sm:px-12 md:px-16 shadow-lg max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-brand-charcoal mb-3 leading-snug">
              Ready to Start?
            </h2>
            <p className="text-brand-charcoal/70 text-xs sm:text-sm leading-relaxed mb-8">
              Get started by scheduling your confidential introductory consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex h-11 items-center justify-center gap-2 bg-brand-teal text-white px-6 font-bold text-[10px] tracking-widest uppercase rounded-lg hover:bg-brand-teal/95 transition-colors duration-300 shadow-sm w-full sm:w-auto"
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
      </div>

    </div>
  );
};
