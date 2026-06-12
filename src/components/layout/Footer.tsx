import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4 text-brand-teal shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4 text-brand-teal shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4 text-brand-teal shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4 text-brand-teal shrink-0" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLocalization();

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: <InstagramIcon />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <LinkedinIcon />,
    },
    {
      name: 'X',
      href: 'https://x.com',
      icon: <XIcon />,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: <FacebookIcon />,
    },
  ];

  return (
    <footer
      id="footer"
      className="bg-brand-cream border-t border-brand-teal/14 w-full relative z-10 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/35 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="py-14 sm:py-16 px-7 sm:px-12 lg:pr-16 flex flex-col items-start justify-between gap-10 text-left border-b lg:border-b-0 lg:border-r border-brand-teal/12 min-h-[360px]">
          <div>
            <img
              src="/images/Image20260611132035.png"
              alt={t('hero.alt')}
              className="h-20 sm:h-24 w-auto object-contain drop-shadow-[0_0_24px_rgb(var(--color-brand-teal)/0.18)] mb-7"
            />
            <p className="text-sm sm:text-base text-brand-charcoal/78 font-light leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
          </div>
          <p className="text-[10px] font-sans tracking-[0.18em] uppercase text-brand-charcoal/58 font-semibold">
            ©{currentYear} {t('footer.rights')}
          </p>
        </div>

        <div className="py-14 sm:py-16 px-7 sm:px-12 lg:pl-16 flex flex-col justify-between gap-10 text-left min-h-[360px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
            <div className="space-y-5">
              <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-brand-teal">
                {t('footer.contact')}
              </h4>
              <div className="flex flex-col gap-4">
                <a href="mailto:concierge@wumamatch.com" className="flex items-center gap-3 hover:text-brand-teal hover:translate-x-0.5 transition-all duration-300 group text-xs sm:text-sm">
                  <Mail className="w-4 h-4 text-brand-teal group-hover:scale-110 transition-transform duration-300 shrink-0" />
                  <span className="[line-height:1.35] text-brand-charcoal/78 font-medium">concierge@wumamatch.com</span>
                </a>
                <a href="tel:+18008889862" className="flex items-center gap-3 hover:text-brand-teal hover:translate-x-0.5 transition-all duration-300 group text-xs sm:text-sm">
                  <Phone className="w-4 h-4 text-brand-teal group-hover:scale-110 transition-transform duration-300 shrink-0" />
                  <span className="text-brand-charcoal/78 font-medium">+1 (800) 888-WUMA</span>
                </a>
                <div className="flex items-start gap-3 group text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-brand-teal mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-brand-charcoal/78 font-medium [line-height:1.35]">San Francisco • Vancouver • Sydney • Singapore</span>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-brand-teal">
                {t('footer.navigation')}
              </h4>
              <div className="flex flex-col gap-3">
                <a href="#home" className="text-xs sm:text-sm text-brand-charcoal/78 font-medium hover:text-brand-teal transition-colors duration-300">{t('nav.home')}</a>
                <a href="#process" className="text-xs sm:text-sm text-brand-charcoal/78 font-medium hover:text-brand-teal transition-colors duration-300">{t('nav.process')}</a>
                <a href="#testimonials" className="text-xs sm:text-sm text-brand-charcoal/78 font-medium hover:text-brand-teal transition-colors duration-300">{t('nav.testimonials')}</a>
                <a href="#privacy" className="text-xs sm:text-sm text-brand-charcoal/78 font-medium hover:text-brand-teal transition-colors duration-300">{t('footer.privacyNotice')}</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-8 border-t border-brand-teal/12">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-10 h-10 rounded-[10px] border border-brand-teal/16 bg-white/70 flex items-center justify-center hover:border-brand-teal/35 hover:bg-brand-teal/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[10px] font-sans font-semibold tracking-[0.14em] uppercase text-brand-charcoal/58">
              <a href="#privacy" className="hover:text-brand-teal transition-colors duration-300">{t('footer.privacy')}</a>
              <a href="#cta" className="hover:text-brand-teal transition-colors duration-300">{t('footer.apply')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
