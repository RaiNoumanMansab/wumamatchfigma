import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';
import { cardReveal, containerStagger } from '../../lib/motion';

type EventData = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  status: 'upcoming' | 'past';
  image: string;
};

const eventsList: EventData[] = [
  {
    id: 1,
    title: 'WuMa Exclusive Sydney',
    date: '2026-09-14',
    location: 'Sydney, Aus',
    description: 'An exclusive, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers...',
    status: 'upcoming',
    image: '/images/wuma_event_arch.png'
  },
  {
    id: 2,
    title: 'WuMa Exclusive Sydney',
    date: '2026-09-14',
    location: 'Online, Zoom',
    description: 'An exclusive, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers...',
    status: 'upcoming',
    image: '/images/wuma_event_arch.png'
  },
  {
    id: 3,
    title: 'WuMa Exclusive Sydney',
    date: '2026-09-16',
    location: 'Sydney, Aus',
    description: 'An exclusive, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers...',
    status: 'upcoming',
    image: '/images/wuma_event_arch.png'
  },
  {
    id: 4,
    title: 'WuMa Exclusive Melbourne',
    date: '2026-05-12',
    location: 'Melbourne, Aus',
    description: 'An exclusive, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers...',
    status: 'past',
    image: '/images/wuma_event_arch.png'
  },
  {
    id: 5,
    title: 'WuMa Exclusive Brisbane',
    date: '2026-04-18',
    location: 'Brisbane, Aus',
    description: 'An exclusive, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers...',
    status: 'past',
    image: '/images/wuma_event_arch.png'
  }
];

export const EventsPage: React.FC = () => {
  const { t } = useLocalization();
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredEvents = useMemo(() => {
    if (activeTab === 'all') {
      return eventsList;
    }
    return eventsList.filter((e) => e.status === activeTab);
  }, [activeTab]);

  return (
    <div className="relative z-10 bg-white min-h-screen">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-[0.05]" />

      {/* Header Block (Beige background block, matching other subpages) */}
      <section className="relative overflow-hidden bg-[#EEEEE9] pt-24 md:pt-28 pb-8 sm:pb-10 px-6 sm:px-8 lg:px-12 border-b border-brand-teal/10">
        <div className="max-w-[var(--container-max-width)] mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="block text-xs font-bold tracking-[0.25em] text-brand-gold uppercase font-sans mb-1.5">
              {t('events.eyebrow')}
            </span>

            <h1 className="font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:text-4xl lg:text-5xl mb-2.5">
              {t('events.heading')}
            </h1>

            <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
              {t('events.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section (White background) */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[var(--container-max-width)] mx-auto relative z-10">
          
          {/* Tab / Category Selector */}
          <div className=" mx-auto flex justify-start gap-3 mb-12 px-1">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 text-[10px] font-bold tracking-widest uppercase rounded-[8px] border transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                  : 'bg-white border-brand-teal/10 text-brand-charcoal/60 hover:text-brand-charcoal hover:border-brand-teal/30'
              }`}
            >
              ALL EVENTS
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 text-[10px] font-bold tracking-widest uppercase rounded-[8px] border transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                  : 'bg-white border-brand-teal/10 text-brand-charcoal/60 hover:text-brand-charcoal hover:border-brand-teal/30'
              }`}
            >
              UPCOMING
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 text-[10px] font-bold tracking-widest uppercase rounded-[8px] border transition-all duration-300 ${
                activeTab === 'past'
                  ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                  : 'bg-white border-brand-teal/10 text-brand-charcoal/60 hover:text-brand-charcoal hover:border-brand-teal/30'
              }`}
            >
              PAST
            </button>
          </div>

          {/* Events Cards Grid */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={cardReveal}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.28, ease: 'easeOut' },
                  }}
                  className="flex flex-col rounded-[24px] border border-brand-teal/10 bg-white overflow-hidden text-left shadow-[0_12px_32px_rgb(var(--color-brand-charcoal)/0.02)] transition-all duration-300 hover:shadow-[0_20px_48px_rgb(var(--color-brand-charcoal)/0.06)] hover:border-brand-gold/30"
                >
                  
                  {/* Event Image Banner with Badge */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover select-none"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2.5 py-1 rounded-[6px] text-[8px] font-sans font-bold text-[#9B7A5B] uppercase tracking-widest border border-brand-gold/20 shadow-sm">
                      {event.status}
                    </div>
                  </div>

                  {/* Event Text Metadata & Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-3 leading-snug">
                      {event.title}
                    </h3>

                    {/* Date and Location pins - charcoal text with brand teal icons */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-3 text-brand-charcoal/70 text-[10px] font-bold tracking-wide">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-light leading-relaxed text-brand-charcoal/70">
                      {event.description}
                    </p>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
