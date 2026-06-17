import React, { useState } from 'react';
import {
  MapPin,
  ShieldCheck,
  Send,
  Inbox,
  CalendarDays,
  Heart,
  Calendar,
} from 'lucide-react';

type TabType = 'OVERVIEW' | 'LIFESTYLE' | 'RELATIONSHIP GOALS' | 'MATCHMAKER REPORT';

const TABS: TabType[] = ['OVERVIEW', 'LIFESTYLE', 'RELATIONSHIP GOALS', 'MATCHMAKER REPORT'];

const STATS = [
  { icon: Send, label: 'Requests Sent', value: 3 },
  { icon: Inbox, label: 'Requests Received', value: 2 },
  { icon: CalendarDays, label: 'Meetings', value: 4 },
  { icon: Heart, label: 'Active Matches', value: 2 },
];

const BACKGROUND_DETAILS = [
  { label: 'LOCATION', value: 'Sydney, Australia' },
  { label: 'NATIONALITY', value: 'Australia' },
  { label: 'EDUCATION', value: "Master's Degree" },
  { label: 'PROFESSION', value: 'Architect' },
  { label: 'RELATIONSHIP STATUS', value: 'Single' },
  { label: 'HAS CHILDREN', value: 'No' },
];

export const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('OVERVIEW');

  return (
    <div className="w-full">
      <h1 className="text-[26px] font-semibold text-brand-charcoal mb-6">My Profile</h1>

      <div className="flex gap-6 items-start">
        {/* Left Column — 3 separate cards */}
        <div className="w-[285px] shrink-0 space-y-5">
          {/* Profile Summary Card */}
          <div className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="relative h-[96px] bg-brand-teal">
              <div className="absolute -bottom-[40px] left-1/2 -translate-x-1/2">
                <div className="relative w-[80px] h-[80px] rounded-full border-[3px] border-white overflow-hidden shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
                    alt="Sophia Chen"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#4CAF50] rounded-full border-2 border-white" />
                </div>
              </div>
            </div>

            <div className="pt-12 pb-5 px-5 text-center">
              <h2 className="text-[17px] font-semibold text-brand-charcoal">Sophia Chen</h2>
              <p className="text-[9px] font-bold tracking-[0.18em] text-brand-gold mt-1 uppercase">
                Elite Member
              </p>
              <div className="flex items-center justify-center gap-1 mt-2 text-brand-charcoal/55">
                <MapPin size={12} className="text-brand-teal shrink-0" />
                <span className="text-[11px]">London, United Kingdom</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-brand-teal text-brand-teal bg-white">
                <ShieldCheck size={12} />
                <span className="text-[9px] font-bold tracking-[0.14em] uppercase">Premium Verified</span>
              </div>
            </div>
          </div>

          {/* My Stats Card */}
          <div className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5">
            <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-brand-charcoal/40 mb-4">
              My Stats
            </p>
            <ul className="space-y-3.5">
              {STATS.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon size={14} className="text-brand-teal shrink-0" strokeWidth={2} />
                    <span className="text-[12px] text-brand-charcoal/65">{label}</span>
                  </div>
                  <span className="text-[14px] font-bold text-brand-teal">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Your Matchmaker Card */}
          <div className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden border-t-[3px] border-t-brand-gold">
            <div className="p-5 pb-4">
              <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-brand-gold mb-4">
                Your Matchmaker
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
                  alt="Jennifer Wu"
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-[13px] font-semibold text-brand-charcoal leading-tight">Jennifer Wu</p>
                  <p className="text-[11px] text-brand-charcoal/50 mt-0.5">Senior Matchmaker</p>
                </div>
              </div>
            </div>
            <div className="mx-5 mb-5 flex items-center gap-2 bg-[#F4F1EA] rounded-[10px] px-3.5 py-2.5">
              <Calendar size={13} className="text-brand-gold shrink-0" />
              <span className="text-[10px] text-brand-charcoal/60">
                Next consultation:{' '}
                <span className="font-semibold text-brand-charcoal">Fri 12 Jun - 14:00</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-8 border-b border-[#E5E5E5] mb-6">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-[11px] font-bold tracking-[0.12em] uppercase whitespace-nowrap transition-colors relative ${
                  activeTab === tab
                    ? 'text-brand-teal'
                    : 'text-brand-charcoal/45 hover:text-brand-charcoal/65'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-teal rounded-full" />
                )}
              </button>
            ))}
          </div>

          {activeTab === 'OVERVIEW' && (
            <div className="space-y-5">
              <div className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6">
                <h3 className="text-[15px] font-semibold text-brand-charcoal mb-3">
                  Personal Statement
                </h3>
                <p className="text-[13px] leading-[1.7] text-brand-charcoal/75">
                  A thoughtful professional who values deep conversation, design aesthetics, and
                  exploring hidden city spots. Looking for someone with a mature perspective on life
                  and a shared appreciation for growth.
                </p>
              </div>

              <div className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6">
                <h3 className="text-[15px] font-semibold text-brand-charcoal mb-5">
                  Background Details
                </h3>
                <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                  {BACKGROUND_DETAILS.map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[9px] font-bold tracking-[0.14em] uppercase text-brand-charcoal/40 mb-1">
                        {label}
                      </p>
                      <p className="text-[13px] text-brand-charcoal">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'OVERVIEW' && (
            <div className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-10 text-center">
              <p className="text-[13px] text-brand-charcoal/45">{activeTab} content coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
