import React, { useState } from 'react';
import {
  MapPin,
  ShieldCheck,
  Send,
  Inbox,
  CalendarDays,
  Heart,
  Calendar
} from 'lucide-react';

type TabType = 'OVERVIEW' | 'LIFESTYLE' | 'RELATIONSHIP GOALS' | 'MATCHMAKER REPORT';

const TABS: TabType[] = ['OVERVIEW', 'LIFESTYLE', 'RELATIONSHIP GOALS', 'MATCHMAKER REPORT'];

const STATS = [
  { icon: Send, label: 'Requests Sent', mobileLabel: 'Sent', value: 3 },
  { icon: Inbox, label: 'Requests Received', mobileLabel: 'Received', value: 2 },
  { icon: CalendarDays, label: 'Meetings', mobileLabel: 'Meetings', value: 4 },
  { icon: Heart, label: 'Active Matches', mobileLabel: 'Matches', value: 2 },
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

  const renderMatchmakerCardDesktop = () => (
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
            <p className="font-sans font-normal text-[12px] leading-[16px] text-[#2D3748] mt-0.5">Senior Matchmaker</p>
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
  );

  const renderMatchmakerCardMobile = () => (
    <div className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden border-t-[3px] border-t-brand-gold">
      <div className="p-5 pb-4">
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-gold mb-4">
          YOUR MATCHMAKER
        </p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#EFE8E0] text-[#9B7A5B] flex items-center justify-center font-sans font-semibold text-[16px] shrink-0">
            JW
          </div>
          <div>
            <p className="text-[14px] font-semibold text-brand-charcoal leading-tight">Jennifer Wu</p>
            <p className="font-sans font-normal text-[12px] leading-[16px] text-brand-charcoal/50 mt-0.5">Senior matchmaker</p>
          </div>
        </div>
      </div>
      <div className="mx-5 mb-5 flex items-center gap-2 bg-[#F9F6F1] rounded-[10px] px-3.5 py-3">
        <Calendar size={14} className="text-brand-gold shrink-0" />
        <span className="font-sans font-normal text-[12px] leading-[16px] text-[#2D3748]">
          Next consultation:{' '}
          <span className="font-semibold text-brand-charcoal ml-1">Fri 12 Jun - 14:00</span>
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-[var(--container-max-width)] mx-auto px-1 lg:px-0">
      {/* Mobile Header */}
      <div className="lg:hidden flex flex-col items-start mb-5 px-2 text-left">
        <h1 className="font-sans font-semibold text-[17px] text-brand-charcoal mb-1">My profile</h1>
        <p className="font-sans font-normal text-[12px] text-brand-charcoal/70">
          Manage your personal information and preferences.
        </p>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block mb-6">
        <h1 className="font-sans font-medium text-[28px] leading-[36px] 2xl:text-[38px] 2xl:leading-[46px] transition-all duration-300 text-brand-charcoal mb-2">
          My Profile
        </h1>
        <p className="font-sans font-normal text-[13px] sm:text-[14px] 2xl:text-[18px] transition-all duration-300 text-brand-charcoal/70">
          Manage your personal information and preferences.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-start">
        {/* Left Column */}
        <div className="w-full lg:w-[285px] shrink-0 space-y-5">
          {/* Profile Summary Card - DESKTOP */}
          <div className="hidden lg:block bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
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

          {/* Profile Summary Card - MOBILE */}
          <div className="lg:hidden bg-white rounded-[16px] border border-[#E8E8E4] shadow-sm overflow-hidden">
            <div className="relative h-[110px] bg-[#0AA39E]">
              <div className="absolute -bottom-[44px] left-1/2 -translate-x-1/2">
                <div className="relative w-[88px] h-[88px] rounded-full border-[4px] border-white overflow-hidden shadow-sm bg-[#E5F5F4]">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
                    alt="Sophia Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-[2px] right-[2px] w-[18px] h-[18px] bg-[#4CAF50] rounded-full border-[3px] border-white shadow-sm" />
              </div>
            </div>

            <div className="pt-14 pb-8 px-5 text-center">
              <h2 className="text-[24px] font-bold text-[#1A202C] tracking-tight">Sophia Chen</h2>
              
              <div className="flex items-center justify-center gap-2 mt-1 mb-6 text-[#4A5568]">
                <div className="w-3.5 h-3.5 border-[1.5px] border-[#A0AEC0] rounded flex items-center justify-center shrink-0">
                  <div className="w-1 h-1 bg-[#A0AEC0] rounded-[1px]"></div>
                </div>
                <span className="font-sans font-medium text-[14px]">London, United Kingdom</span>
              </div>
              
              <div className="flex flex-col gap-3 items-center">
                <div className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#F6E0B5] text-[#1A202C] min-w-[200px]">
                  <div className="w-[11px] h-[11px] border-[1.5px] border-[#1A202C] rounded-[3px] flex items-center justify-center shrink-0">
                    <div className="w-[3px] h-[3px] bg-[#1A202C] rounded-[1px]"></div>
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.08em] uppercase mt-[1px]">Elite Member</span>
                </div>
                
                <div className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border-[1.5px] border-[#0AA39E] text-[#0AA39E] bg-white min-w-[200px]">
                  <div className="w-[11px] h-[11px] border-[1.5px] border-[#0AA39E] rounded-[3px] flex items-center justify-center shrink-0">
                    <div className="w-[3px] h-[3px] bg-[#0AA39E] rounded-[1px]"></div>
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.08em] uppercase mt-[1px]">Premium Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stats Grid */}
          <div className="grid grid-cols-4 gap-2.5 lg:hidden w-full">
            {STATS.map(({ mobileLabel, value }) => (
              <div key={mobileLabel} className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] py-4 flex flex-col items-center justify-center">
                <span className="text-[20px] font-bold text-brand-charcoal mb-0.5">{value}</span>
                <span className="text-[11px] text-brand-charcoal/50">{mobileLabel}</span>
              </div>
            ))}
          </div>

          {/* Desktop Stats Card */}
          <div className="hidden lg:block bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-5">
            <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-brand-charcoal/40 mb-4">
              My Stats
            </p>
            <ul className="space-y-3.5">
              {STATS.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Icon size={14} className="text-brand-teal shrink-0" strokeWidth={2} />
                    <span className="font-sans font-normal text-[12px] leading-[16px] text-[#2D3748]">{label}</span>
                  </div>
                  <span className="text-[14px] font-bold text-brand-teal">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Matchmaker Card */}
          <div className="hidden lg:block">
            {renderMatchmakerCardDesktop()}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-0 w-full flex flex-col gap-5">
          <div className="flex items-center gap-6 sm:gap-8 border-b border-[#E5E5E5] overflow-x-auto scrollbar-hide px-1 lg:px-0">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-sans lg:uppercase tracking-[0.7px] lg:text-[14px] text-[15px] leading-[20px] whitespace-nowrap transition-colors relative ${
                  activeTab === tab
                    ? 'text-brand-teal font-semibold lg:font-medium'
                    : 'text-brand-charcoal/50 lg:text-brand-charcoal font-medium hover:text-brand-charcoal/80'
                }`}
              >
                <span className="lg:hidden capitalize">{tab.toLowerCase()}</span>
                <span className="hidden lg:inline">{tab}</span>
                
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-teal rounded-full" />
                )}
              </button>
            ))}
          </div>

          {activeTab === 'OVERVIEW' && (
            <div className="space-y-5">
              {/* Content box */}
              <div className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6">
                <h3 className="text-[16px] lg:text-[15px] font-semibold text-brand-charcoal mb-3">
                  Personal statement
                </h3>
                <p className="font-sans font-normal text-[14px] lg:text-[12px] leading-[22px] lg:leading-[16px] text-brand-charcoal/70 lg:text-[#2D3748]">
                  A thoughtful professional who values deep conversation, design aesthetics and
                  exploring hidden city spots. Looking for someone with a mature perspective on life
                  and a shared appreciation for growth.
                </p>
              </div>

              <div className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6">
                <h3 className="text-[16px] lg:text-[15px] font-semibold text-brand-charcoal mb-5">
                  Background details
                </h3>
                <div className="grid grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-5">
                  {BACKGROUND_DETAILS.map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[10px] lg:text-[9px] font-bold tracking-[0.1em] lg:tracking-[0.14em] uppercase text-brand-charcoal/40 mb-1.5 lg:mb-1">
                        {label}
                      </p>
                      <p className="font-sans font-normal text-[13px] lg:text-[12px] leading-[16px] text-[#2D3748]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'OVERVIEW' && (
            <div className="bg-white rounded-[14px] border border-[#E8E8E4] shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-10 text-center">
              <p className="font-sans font-normal text-[12px] leading-[16px] text-[#2D3748] capitalize lg:uppercase">{tabContentText(activeTab)} content coming soon.</p>
            </div>
          )}

          {/* Mobile Matchmaker Card */}
          <div className="lg:hidden mt-2">
            {renderMatchmakerCardMobile()}
          </div>
        </div>
      </div>
    </div>
  );
};

function tabContentText(tab: TabType) {
  if (tab === 'RELATIONSHIP GOALS') return 'Relationship Goals';
  if (tab === 'MATCHMAKER REPORT') return 'Matchmaker Report';
  return tab.toLowerCase();
}
