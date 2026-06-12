import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  cardReveal,
  sectionReveal,
  softLift,
  viewportOnce,
} from "../../lib/motion";
import { useLocalization } from "../../lib/i18n";

import coupleOne from "../../assets/testimonalsImages/couple1.jpg";
import coupleTwo from "../../assets/testimonalsImages/couple2.jpg";
import coupleThree from "../../assets/testimonalsImages/couple3.jpg";
import coupleFour from "../../assets/testimonalsImages/couple4.jpg";
import coupleFive from "../../assets/testimonalsImages/couple5.jpg";

type TestimonialItem = {
  name: string;
  role: string;
  brand: string;
  review: string;
};

export const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { get, t } = useLocalization();

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const testimonialImages = [
    coupleOne,
    coupleTwo,
    coupleThree,
    coupleFour,
    coupleFive,
  ];

  const testimonialItems = get<TestimonialItem[]>("testimonials.items") || [];

  const testimonials = testimonialItems.map((testimonial, index) => ({
    ...testimonial,
    bgImg: testimonialImages[index % testimonialImages.length],
  }));

  const updateScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = Math.max(0, Math.round(container.scrollLeft));
    const maxScrollLeft = Math.max(
      0,
      Math.round(container.scrollWidth - container.clientWidth)
    );

    const threshold = 36;

    const atStart = scrollLeft <= threshold;
    const atEnd = maxScrollLeft <= threshold || scrollLeft >= maxScrollLeft - threshold;

    setIsAtStart(atStart);
    setIsAtEnd(atEnd);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 340;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    const targetScroll =
      direction === "left"
          ? Math.max(container.scrollLeft - scrollAmount, 0)
          : Math.min(container.scrollLeft + scrollAmount, maxScrollLeft);

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    if (targetScroll <= 36) {
      setIsAtStart(true);
      setIsAtEnd(maxScrollLeft <= 36);
    } else if (targetScroll >= maxScrollLeft - 36) {
      setIsAtStart(false);
      setIsAtEnd(true);
    }

    requestAnimationFrame(updateScrollButtons);
    window.setTimeout(updateScrollButtons, 120);
    window.setTimeout(updateScrollButtons, 360);
    window.setTimeout(updateScrollButtons, 720);
  };

  useLayoutEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollLeft = 0;
    updateScrollButtons();
  }, [updateScrollButtons, testimonials.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => updateScrollButtons();
    const handleResize = () => updateScrollButtons();

    const resizeObserver = new ResizeObserver(() => {
      updateScrollButtons();
    });

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    resizeObserver.observe(container);

    const timerOne = window.setTimeout(() => {
      container.scrollLeft = 0;
      updateScrollButtons();
    }, 50);

    const timerTwo = window.setTimeout(() => {
      updateScrollButtons();
    }, 300);

    return () => {
      window.clearTimeout(timerOne);
      window.clearTimeout(timerTwo);
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [updateScrollButtons, testimonials.length]);

  return (
    <motion.section
      id="testimonials"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="bg-brand-cream pt-16 pb-6 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-t border-brand-teal/10"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto relative z-10 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="block text-xs tracking-[0.25em] text-brand-gold uppercase font-sans font-bold mb-3">
            {t("testimonials.eyebrow")}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-charcoal mb-4 font-serif leading-tight tracking-tight">
            {t("testimonials.heading")}
          </h2>

          <p className="text-brand-charcoal/70 text-sm sm:text-base font-light leading-relaxed">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="relative w-full">
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollButtons}
            className="flex gap-8 overflow-x-auto pb-6 pt-2 px-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={cardReveal}
                whileHover={softLift}
                className="w-[285px] sm:w-[320px] shrink-0 aspect-[3/4] rounded-[10px] overflow-hidden border border-brand-teal/15 shadow-soft hover:shadow-luxury hover:border-brand-teal/40 transition-all duration-500 relative group snap-start bg-white"
              >
                {/* Card Background Image */}
                <img
                  src={testimonial.bgImg}
                  alt={testimonial.name}
                  onLoad={updateScrollButtons}
                  className="w-full h-full object-cover brightness-[0.88] group-hover:brightness-[0.94] transition-all duration-700 group-hover:scale-105"
                />

                {/* Soft Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/55 via-brand-charcoal/8 to-transparent" />

                {/* Fixed Height Review Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 h-[205px] bg-white/95 backdrop-blur-sm rounded-[10px] p-5 border border-brand-teal/10 shadow-lg flex flex-col items-start text-left group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-brand-gold text-brand-gold"
                      />
                    ))}
                  </div>

                  <p className="text-brand-charcoal/72 text-xs sm:text-[13px] font-light leading-relaxed mb-4 line-clamp-4">
                    “{testimonial.review}”
                  </p>

                  <div className="w-full pt-3 border-t border-brand-teal/10 mt-auto">
                    <h4 className="font-sans font-bold text-sm text-brand-charcoal tracking-wide mb-1.5">
                      {testimonial.name}
                    </h4>

                    <div className="flex items-center gap-1.5 text-[10px] tracking-wider text-brand-charcoal/58 font-semibold uppercase">
                      <span>{testimonial.role}</span>
                      <span>•</span>
                      <span>{testimonial.brand}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Controls */}
          <div className="flex items-center justify-end gap-4 mt-3 px-4 max-w-7xl mx-auto">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={isAtStart}
              aria-disabled={isAtStart}
              aria-label={t("testimonials.scrollLeft")}
              className={[
                "group h-12 w-12 border flex items-center justify-center rounded-[10px] transition-all duration-300",
                isAtStart
                  ? "bg-transparent text-brand-charcoal/20 border-brand-charcoal/10 shadow-none opacity-35 cursor-not-allowed pointer-events-none"
                  : "bg-white text-brand-teal border-brand-teal/12 shadow-soft hover:bg-brand-cream hover:text-brand-charcoal hover:border-brand-teal/28 cursor-pointer",
              ].join(" ")}
            >
              <ChevronLeft
                className={[
                  "w-5 h-5 transition-transform",
                  !isAtStart ? "group-hover:-translate-x-0.5" : "",
                ].join(" ")}
              />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={isAtEnd}
              aria-disabled={isAtEnd}
              aria-label={t("testimonials.scrollRight")}
              className={[
                "group h-12 w-12 border flex items-center justify-center rounded-[10px] transition-all duration-300",
                isAtEnd
                  ? "bg-transparent text-brand-charcoal/20 border-brand-charcoal/10 shadow-none opacity-35 cursor-not-allowed pointer-events-none"
                  : "bg-white text-brand-teal border-brand-teal/12 shadow-soft hover:bg-brand-cream hover:text-brand-charcoal hover:border-brand-teal/28 cursor-pointer",
              ].join(" ")}
            >
              <ChevronRight
                className={[
                  "w-5 h-5 transition-transform",
                  !isAtEnd ? "group-hover:translate-x-0.5" : "",
                ].join(" ")}
              />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

