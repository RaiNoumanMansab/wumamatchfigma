import React, { useState } from 'react';
import { Search, MoreVertical, Smile, Send } from 'lucide-react';

type ChatUser = {
  id: string;
  name: string;
  role: string;
  time: string;
  avatar: string;
  isOnline: boolean;
};

type Message = {
  id: string;
  senderId: string; // 'me' or user id
  text: string;
  timestamp: string;
  senderName?: string;
  avatar?: string;
};

export const MessagesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const users: ChatUser[] = [
    {
      id: '1',
      name: 'Kaiya George',
      role: 'Project Manager',
      time: '15 mins',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
      isOnline: true,
    },
    {
      id: '2',
      name: 'Lindsey Curtis',
      role: 'Designer',
      time: '30 mins',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfff2?auto=format&fit=crop&q=80&w=150',
      isOnline: true,
    },
    {
      id: '3',
      name: 'Zain Geidt',
      role: 'Content Writer',
      time: '45 mins',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
      isOnline: false,
    },
    {
      id: '4',
      name: 'Carla George',
      role: 'Front-end Developer',
      time: '2 days',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
      isOnline: false,
    },
    {
      id: '5',
      name: 'Abram Schleifer',
      role: 'Digital Marketer',
      time: '1 hour',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      isOnline: false,
    },
    {
      id: '6',
      name: 'Lincoln Dorin',
      role: 'Project Manager/Product Designer',
      time: '3 days',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
      isOnline: true,
    },
    {
      id: '7',
      name: 'Erin Geidthem',
      role: 'Copyrighter',
      time: '5 days',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      isOnline: true,
    },
  ];

  const messages: Message[] = [
    {
      id: 'm1',
      senderId: '1',
      senderName: 'Kaiya George',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
      text: 'I want to make an appointment tomorrow from 2:00 to 5:00pm?',
      timestamp: 'Kaiya George, 15 mins',
    },
    {
      id: 'm2',
      senderId: '2',
      senderName: 'Lindsey Curtis',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfff2?auto=format&fit=crop&q=80&w=150',
      text: 'I want to make an appointment tomorrow from 2:00 to 5:00pm?',
      timestamp: 'Lindsey Curtis, 30 mins',
    },
    {
      id: 'm3',
      senderId: 'me',
      text: "If don't like something, I'll stay away from it.",
      timestamp: '2 hours ago',
    },
    {
      id: 'm4',
      senderId: '2',
      senderName: 'Lindsey Curtis',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfff2?auto=format&fit=crop&q=80&w=150',
      text: 'I want more detailed information.',
      timestamp: 'Lindsey Curtis, 2 hours ago',
    },
    {
      id: 'm5',
      senderId: 'me',
      text: 'They got there early, and got really good seats.',
      timestamp: '2 hours ago',
    },
    {
      id: 'm6',
      senderId: '2',
      senderName: 'Lindsey Curtis',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1bfff2?auto=format&fit=crop&q=80&w=150',
      text: 'I want more detailed information.',
      timestamp: 'Lindsey Curtis, 2 hours ago',
    },
  ];

  const activeUser = users[1]; // Lindsey Curtis

  return (
    <div className="w-full max-w-[var(--container-max-width)] mx-auto pb-6 h-[calc(100vh-100px)] min-h-[750px] flex flex-col">
      {/* Page Title */}
      <h1 className="font-sans font-medium text-[28px] leading-[36px] text-brand-charcoal mb-6 shrink-0">
        Messages
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        {/* ─── LEFT SIDEBAR: CHATS LIST ─── */}
        <div className="w-full lg:w-[320px] h-[350px] lg:h-auto shrink-0 bg-white rounded-[20px] flex flex-col overflow-hidden border border-[#E8E8E4]">
          {/* Header */}
          <div className="p-6 pb-4 flex items-center justify-between shrink-0">
            <h2 className="font-sans text-[22px] font-medium text-brand-charcoal">Chats</h2>
            <button className="text-brand-charcoal/40 hover:text-brand-charcoal transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>

          {/* Search */}
          <div className="px-6 mb-4 shrink-0">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-charcoal/40" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E5E5] rounded-xl text-[13px] text-brand-charcoal focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
              />
            </div>
          </div>

          {/* Users List */}
          <div className="flex-1 overflow-y-auto scrollbar-hide px-3 pb-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-start gap-4 p-3 rounded-xl cursor-pointer transition-colors hover:bg-gray-50"
              >
                <div className="relative shrink-0 mt-1">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  {user.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#4CAF50] rounded-full border-2 border-white" />
                  )}
                  {!user.isOnline && user.id === '4' && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#FF9800] rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="text-[14px] font-semibold text-brand-charcoal truncate">{user.name}</h3>
                    <span className="text-[10px] text-brand-charcoal/40 shrink-0">{user.time}</span>
                  </div>
                  <p className="text-[11px] text-brand-charcoal/50 truncate">{user.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT MAIN CONTENT: CHAT WINDOW ─── */}
        <div className="flex-1 bg-white rounded-[20px] flex flex-col min-w-0 border border-[#E8E8E4] min-h-[400px] lg:min-h-0">
          {/* Chat Header */}
          <div className="px-8 py-5 border-b border-[#E5E5E5]/60 flex items-center gap-4 shrink-0">
            <div className="relative shrink-0">
              <img
                src={activeUser.avatar}
                alt={activeUser.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#4CAF50] rounded-full border-2 border-white" />
            </div>
            <h2 className="text-[15px] font-semibold text-brand-charcoal">{activeUser.name}</h2>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-8 flex flex-col gap-6">
            {messages.map((msg) => {
              const isMe = msg.senderId === 'me';

              return (
                <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                  {/* Message Bubble + Avatar Row */}
                  <div className={`flex gap-3 max-w-[70%] ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                    
                    {!isMe && (
                      <div className="shrink-0 relative">
                        <img
                          src={msg.avatar}
                          alt={msg.senderName}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>
                    )}

                    <div
                      className={`px-5 py-3.5 rounded-[14px] text-[13px] leading-relaxed ${
                        isMe
                          ? 'bg-[#0AA39E] text-white rounded-br-sm'
                          : 'bg-[#F2F4F7] text-brand-charcoal rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  
                  {/* Timestamp */}
                  <div className={`mt-2 text-[10px] text-brand-charcoal/40 ${isMe ? 'mr-1' : 'ml-11'}`}>
                    {msg.timestamp}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Input */}
          <div className="p-6 border-t border-[#E5E5E5]/60 shrink-0">
            <div className="flex items-center gap-4 bg-white">
              <button className="text-brand-charcoal/40 hover:text-brand-charcoal transition-colors">
                <Smile size={22} />
              </button>
              <input
                type="text"
                placeholder="Type a message"
                className="flex-1 py-1 px-1 text-[13px] text-brand-charcoal focus:outline-none placeholder:text-brand-charcoal/30"
              />
              <button className="w-10 h-10 rounded-[10px] bg-[#0AA39E] text-white flex items-center justify-center hover:bg-[#088c88] transition-colors shrink-0">
                <Send size={18} className="ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
