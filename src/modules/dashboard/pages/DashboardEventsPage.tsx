import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

type FilterType = 'ALL EVENTS' | 'UPCOMING' | 'PAST';

const events = [
  {
    id: 1,
    status: 'UPCOMING',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    title: 'WuMa Exclusive Sydney',
    date: '2026-09-14',
    location: 'Online, Zoom',
    description: 'An intimate, private evening for verified premium WuMa members. Set at a prestigious harbor-view lounge with curated...',
  },
  {
    id: 2,
    status: 'UPCOMING',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    title: 'WuMa Exclusive Sydney',
    date: '2026-09-14',
    location: 'Online, Zoom',
    description: 'An intimate, private evening for verified premium WuMa members. Set at a prestigious harbor-view lounge with curated...',
  },
  {
    id: 3,
    status: 'UPCOMING',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    title: 'WuMa Exclusive Sydney',
    date: '2026-09-14',
    location: 'Online, Zoom',
    description: 'An intimate, private evening for verified premium WuMa members. Set at a prestigious harbor-view lounge with curated...',
  },
  {
    id: 4,
    status: 'PAST',
    image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=800',
    title: 'WuMa Exclusive Melbourne',
    date: '2026-06-10',
    location: 'Crown Casino, Melbourne',
    description: 'A curated evening of fine dining and meaningful introductions for our premium members in Melbourne...',
  },
];

export const DashboardEventsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL EVENTS');

  const filters: FilterType[] = ['ALL EVENTS', 'UPCOMING', 'PAST'];

  const filtered = activeFilter === 'ALL EVENTS'
    ? events
    : events.filter(e => e.status === activeFilter);

  return (
    <div className="w-full max-w-[var(--container-max-width)] mx-auto pb-12">
      {/* Page Title */}
      <div>
        <h1 className="font-sans font-medium text-[28px] leading-[36px] 2xl:text-[38px] 2xl:leading-[46px] transition-all duration-300 text-brand-charcoal mb-2">
          Events
        </h1>
        <p className="font-sans font-normal text-[13px] sm:text-[14px] 2xl:text-[18px] transition-all duration-300 text-brand-charcoal/70 mb-6">
          Explore upcoming exclusive events tailored for our community.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-3 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-colors ${
              activeFilter === f
                ? 'bg-brand-teal text-white'
                : 'bg-white border border-[#E5E5E5] text-brand-charcoal/70 hover:border-brand-teal hover:text-brand-teal'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {filtered.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-[20px] border border-[#E5E5E5] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
          >
            {/* Image */}
            <div className="relative h-[180px] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Status Badge */}
              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase ${
                event.status === 'UPCOMING'
                  ? 'bg-[#C19C74] text-white'
                  : 'bg-brand-charcoal/60 text-white'
              }`}>
                {event.status}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <h3 className="font-sans text-[18px] font-semibold text-brand-charcoal mb-3">
                {event.title}
              </h3>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-brand-charcoal/60">
                  <Calendar size={13} className="text-brand-teal shrink-0" />
                  <span className="text-[11px] font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-brand-charcoal/60">
                  <MapPin size={13} className="text-brand-teal shrink-0" />
                  <span className="text-[11px] font-medium">{event.location}</span>
                </div>
              </div>

              <p className="font-sans font-normal text-[12px] leading-[16px] text-[#2D3748] line-clamp-3">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
