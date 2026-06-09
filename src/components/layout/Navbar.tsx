import { useState } from "react";
import { ArrowUpRight, Languages, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import logoImg from "../../assets/logo.png";
import { languageOptions, useLocalization } from "../../lib/i18n";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const { locale, setLocale, t } = useLocalization();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const isScrollingDown = latest > previous;

    setIsHidden(isScrollingDown && latest > 520);
    if (isScrollingDown && latest > 520) {
      setIsOpen(false);
    }
  });

  const currentLanguageIndex = languageOptions.findIndex(
    (option) => option.locale === locale,
  );
  const currentLanguage =
    languageOptions[currentLanguageIndex] ?? languageOptions[0];
  const nextLanguage =
    languageOptions[(currentLanguageIndex + 1) % languageOptions.length];

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.process"), href: "#process" },
    { name: t("nav.testimonials"), href: "#testimonials" },
    { name: t("nav.apply"), href: "#cta" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -18 }}
      animate={isHidden ? { opacity: 0, y: -92 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 pointer-events-none"
    >
      <nav className="max-w-7xl mx-auto bg-[#F9F8F4]/80 backdrop-blur-md border border-white/20 rounded-[10px] shadow-luxury px-4 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-300">
        <a
          href="#home"
          className="relative flex items-center group rounded-[10px] border border-[#9B7A5B]/35
px-2 py-1 transition-colors duration-300 hover:border-[#0F9598]/45"
        >
          <span className="absolute -inset-x-5 -inset-y-3 rounded-[10px] bg-[#0F9598]/24 blur-2xl opacity-95 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100" />
          <img
            src={logoImg}
            alt="WuMa Matchmaking"
            className="relative h-10 w-auto object-contain drop-shadow-[0_8px_22px_rgba(15,149,152,0.38)] transition-transform duration-300 group-hover:scale-105 sm:h-11"
          />
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-[#1C1B19] hover:text-[#0F9598] transition-colors duration-300 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLocale(nextLanguage.locale)}
            className="inline-flex h-10 items-center gap-2 rounded-[10px] md:border md:border-[#0F9598]/16 md:bg-white/55 px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1C1B19]/72 md:shadow-sm transition-all duration-300 hover:border-[#0F9598]/35 hover:bg-white hover:text-[#0F9598]"
            aria-label={`Switch language to ${nextLanguage.label}`}
            title={currentLanguage.label}
          >
            <Languages className="h-3.5 w-3.5 text-[#0F9598]" />
            {currentLanguage.shortLabel}
          </button>

          <motion.a
            href="#cta"
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            className="flex items-stretch gap-[8px] group"
          >
            <span className="h-12 bg-[#0F9598] text-white px-5 text-xs sm:text-sm font-semibold tracking-wide flex items-center rounded-[10px] shadow-sm group-hover:bg-[#1C1B19] transition-all duration-300">
              {t("nav.apply")}
            </span>

            <span className=" hidden md:flex h-12 w-12 bg-white text-[#0F9598] border border-white/80 flex items-center justify-center rounded-[10px] shadow-sm transition-colors duration-300 group-hover:bg-[#F9F8F4] group-hover:text-[#1C1B19]">
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-[10px] text-[#1C1B19] hover:text-white hover:bg-[#1C1B19] transition-all duration-300"
            aria-label={t("nav.toggleMenu")}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 max-w-7xl mx-auto bg-[#F9F8F4]/95 backdrop-blur-md border border-white/30 rounded-[10px] p-6 shadow-luxury flex flex-col items-center gap-4 md:hidden pointer-events-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold tracking-wider text-[#1C1B19] hover:text-[#0F9598] transition-colors duration-300 py-1"
            >
              {link.name}
            </a>
          ))}
          {/* <button
            type="button"
            onClick={() => setLocale(nextLanguage.locale)}
            className="inline-flex h-10 items-center gap-2 rounded-[10px] border border-[#0F9598]/16 bg-white/65 px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1C1B19]/72 shadow-sm transition-all duration-300 hover:border-[#0F9598]/35 hover:bg-white hover:text-[#0F9598] sm:hidden"
            aria-label={`Switch language to ${nextLanguage.label}`}
          >
            <Languages className="h-3.5 w-3.5 text-[#0F9598]" />
            {currentLanguage.shortLabel}
          </button> */}
        </motion.div>
      )}
    </motion.div>
  );
};
