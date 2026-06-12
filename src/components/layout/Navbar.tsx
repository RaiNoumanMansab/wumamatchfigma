import { useState, useEffect } from "react";
import { Languages, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { languageOptions, useLocalization } from "../../lib/i18n";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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

  // Track the active section dynamically on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "process", "testimonials", "cta"];
      const scrollPosition = window.scrollY + 120; // offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLanguageIndex = languageOptions.findIndex(
    (option) => option.locale === locale,
  );
  const currentLanguage =
    languageOptions[currentLanguageIndex] ?? languageOptions[0];
  const nextLanguage =
    languageOptions[(currentLanguageIndex + 1) % languageOptions.length];

  const navLinks = [
    { name: t("nav.home"), href: "#home", id: "home" },
    { name: t("nav.process"), href: "#process", id: "process" },
    { name: t("nav.testimonials"), href: "#testimonials", id: "testimonials" },
    { name: t("nav.apply"), href: "#cta", id: "cta" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -18 }}
      animate={isHidden ? { opacity: 0, y: -92 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-brand-teal via-[#5ECFCB] to-brand-cream border-b border-brand-teal/10 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center justify-between">
        <div className="flex items-center gap-20 md:gap-32 lg:gap-44">
          {/* Logo with Gold Skyline */}
          <a
            href="#home"
            className="relative flex items-center transition-transform duration-300 hover:scale-[1.02] -ml-1.5"
          >
            <img
              src="/images/Image20260611130244.png"
              alt="WuMa Matchmaking"
              className="h-[52px] sm:h-[68px] w-auto object-contain"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] lg:text-[12px] font-bold tracking-widest uppercase transition-all duration-300 py-1.5 border-b-2 ${
                    isActive
                      ? "border-brand-gold text-black"
                      : "border-transparent text-black/75 hover:text-black hover:border-black/25"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={() => setLocale(nextLanguage.locale)}
            className="inline-flex h-9 items-center gap-2 rounded-lg px-2 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-darkTeal/72 transition-all duration-300 hover:bg-white/40 hover:text-brand-darkTeal"
            aria-label={`Switch language to ${nextLanguage.label}`}
            title={currentLanguage.label}
          >
            <Languages className="h-3.5 w-3.5 text-brand-darkTeal/80" />
            {currentLanguage.shortLabel}
          </button>

          {/* Apply Now Button with Arrow */}
          <motion.a
            href="#cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex h-10 items-center justify-center bg-brand-teal text-white px-5 font-bold text-[11px] tracking-widest uppercase rounded-lg hover:bg-brand-teal/90 transition-colors duration-300 shadow-sm"
          >
            {t("nav.apply").toUpperCase()} ↗
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-brand-darkTeal hover:bg-white/30 transition-colors duration-300"
            aria-label={t("nav.toggleMenu")}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-brand-cream border-t border-brand-teal/10 px-6 py-6 shadow-md flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-[11px] font-bold tracking-widest uppercase transition-all duration-300 py-2 ${
                  isActive
                    ? "text-black pl-2 border-l-2 border-brand-gold"
                    : "text-black/75 hover:text-black pl-2 border-l-2 border-transparent"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="h-px bg-brand-teal/10 my-1" />

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                setLocale(nextLanguage.locale);
                setIsOpen(false);
              }}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-brand-teal/20 bg-white px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-charcoal transition-all duration-300 hover:border-brand-teal"
            >
              <Languages className="h-3.5 w-3.5 text-brand-teal" />
              {currentLanguage.label}
            </button>

            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-9 items-center justify-center bg-brand-teal text-white px-4 font-bold text-[10px] tracking-widest uppercase rounded-lg shadow-sm"
            >
              {t("nav.apply").toUpperCase()} ↗
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
