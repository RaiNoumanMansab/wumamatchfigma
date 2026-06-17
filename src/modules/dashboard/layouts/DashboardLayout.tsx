import React, { useState } from 'react';
import { 
  Users, 
  Smile, 
  MessageSquare, 
  Calendar, 
  User, 
  Tag, 
  LogOut, 
  List, 
  HelpCircle, 
  Bell 
} from 'lucide-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const sidebarWidth = isSidebarOpen ? 260 : 80;

  const navItems = [
    { icon: Users, label: 'Featured Profiles', path: '/user/featured' },
    { icon: Smile, label: 'Your Matches', path: '/user/matches' },
    { icon: MessageSquare, label: 'Messages', path: '/user/messages' },
    { icon: Calendar, label: 'Events', path: '/user/events' },
    { icon: User, label: 'Profile', path: '/user/profile' },
    { icon: Tag, label: 'Membership', path: '/user/membership' },
  ];

  return (
    <div className="dashboard-ui min-h-screen bg-[#F2F2EE] flex">
      {/* Sidebar */}
      <aside
        style={{ width: sidebarWidth }}
        className="bg-white border-r border-[#E0E0E0] flex flex-col shrink-0 fixed inset-y-0 left-0 transition-all duration-300 z-30"
      >
        {/* Logo Area */}
        <div
          className={`h-[72px] flex items-center border-b border-[#E0E0E0] ${
            isSidebarOpen ? 'px-4' : 'justify-center px-0'
          }`}
        >
          <Link
            to="/"
            className={`flex items-center cursor-pointer ${isSidebarOpen ? 'gap-2.5' : ''}`}
          >
            <img
              src="/images/logo.png"
              alt="WuMa Logo"
              className="h-[46px] w-auto object-contain shrink-0"
            />

            {isSidebarOpen && (
              <div className="flex flex-col justify-center leading-[1.15]">
                <span className="font-sans font-bold text-[14px] text-[#161C2D]">WuMa</span>
                <span className="font-sans font-bold text-[14px] text-[#161C2D]">Matchmaking</span>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav
          className={`flex-1 overflow-y-auto py-6 space-y-2.5 ${
            isSidebarOpen ? 'px-4' : 'px-2'
          }`}
        >
          {navItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname.startsWith(path);
            return (
              <Link
                key={path}
                to={path}
                title={!isSidebarOpen ? label : undefined}
                className={`flex items-center rounded-[12px] text-[13px] transition-colors ${
                  isSidebarOpen ? 'px-4 py-3.5 gap-3' : 'justify-center p-3'
                } ${
                  isActive
                    ? 'bg-[#0AA39E] text-white font-semibold'
                    : 'text-[#4F5E71] hover:bg-[#F9F5EE] hover:text-[#161C2D] font-medium'
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
                {isSidebarOpen && <span className="whitespace-nowrap">{label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div
          className={`p-3.5 border-t border-[#E0E0E0] ${
            !isSidebarOpen ? 'flex justify-center' : ''
          }`}
        >
          <button
            onClick={() => navigate('/login')}
            title={!isSidebarOpen ? 'LOGOUT' : undefined}
            className={`flex items-center justify-center rounded-[12px] text-[#F26464] bg-[#FFEDE9] hover:bg-[#FFE3DC] transition-colors ${
              isSidebarOpen
                ? 'w-full px-4 py-3 gap-2 text-[11px] font-bold tracking-[0.12em] uppercase'
                : 'p-3'
            }`}
          >
            <LogOut size={isSidebarOpen ? 15 : 18} />
            {isSidebarOpen && 'LOGOUT'}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div
        style={{ marginLeft: sidebarWidth }}
        className="flex-1 flex flex-col min-h-screen transition-all duration-300"
      >
        {/* Top Header */}
        <header className="h-[80px] bg-white border-b border-[#E5E5E5] flex items-center justify-between px-8 shrink-0 sticky top-0 z-20">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-brand-charcoal hover:text-brand-teal transition-colors"
          >
            <List size={24} className={`transition-transform duration-300 ${!isSidebarOpen ? 'rotate-90' : 'rotate-0'}`} />
          </button>

          <div className="flex items-center gap-6">
            <button className="text-brand-charcoal/70 hover:text-brand-teal transition-colors">
              <HelpCircle size={20} />
            </button>
            <button className="text-brand-charcoal/70 hover:text-brand-teal transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-brand-teal rounded-full" />
            </button>
            
            <div className="h-8 w-px bg-[#E5E5E5] mx-2" />

            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" 
                alt="User" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-brand-charcoal leading-tight">John Doe</span>
                <span className="text-[11px] text-brand-charcoal/60 leading-tight">User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

