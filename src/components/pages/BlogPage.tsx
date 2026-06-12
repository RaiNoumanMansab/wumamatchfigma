import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';
import { cardReveal, containerStagger } from '../../lib/motion';

const blogCoffee = '/images/wuma_blog_coffee.png';

type BlogPost = {
  id: number;
  title: string;
  category: 'dating' | 'relationship' | 'matchmaking';
  tag: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '7 Conversation Starters That Go Beyond Small Talk',
    category: 'dating',
    tag: 'UPCOMING',
    date: 'MAY 28, 2026',
    readTime: '5 MIN READ',
    excerpt: 'An intimate, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers.',
    image: blogCoffee,
    author: {
      name: 'Sarah Chen',
      role: 'LEAD MATCHMAKER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80'
    }
  },
  {
    id: 2,
    title: '7 Conversation Starters That Go Beyond Small Talk',
    category: 'dating',
    tag: 'UPCOMING',
    date: 'MAY 28, 2026',
    readTime: '5 MIN READ',
    excerpt: 'An intimate, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers.',
    image: blogCoffee,
    author: {
      name: 'Sarah Chen',
      role: 'LEAD MATCHMAKER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80'
    }
  },
  {
    id: 3,
    title: '7 Conversation Starters That Go Beyond Small Talk',
    category: 'dating',
    tag: 'UPCOMING',
    date: 'MAY 28, 2026',
    readTime: '5 MIN READ',
    excerpt: 'An intimate, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers.',
    image: blogCoffee,
    author: {
      name: 'Sarah Chen',
      role: 'LEAD MATCHMAKER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80'
    }
  },
  {
    id: 4,
    title: '7 Conversation Starters That Go Beyond Small Talk',
    category: 'relationship',
    tag: 'UPCOMING',
    date: 'MAY 28, 2026',
    readTime: '5 MIN READ',
    excerpt: 'An intimate, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers.',
    image: blogCoffee,
    author: {
      name: 'Sarah Chen',
      role: 'LEAD MATCHMAKER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80'
    }
  },
  {
    id: 5,
    title: '7 Conversation Starters That Go Beyond Small Talk',
    category: 'relationship',
    tag: 'UPCOMING',
    date: 'MAY 28, 2026',
    readTime: '5 MIN READ',
    excerpt: 'An intimate, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers.',
    image: blogCoffee,
    author: {
      name: 'Sarah Chen',
      role: 'LEAD MATCHMAKER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80'
    }
  },
  {
    id: 6,
    title: '7 Conversation Starters That Go Beyond Small Talk',
    category: 'matchmaking',
    tag: 'UPCOMING',
    date: 'MAY 28, 2026',
    readTime: '5 MIN READ',
    excerpt: 'An intimate, private evening for verified premium WuMa members. Set in a prestigious format with hands-on vetting and icebreakers.',
    image: blogCoffee,
    author: {
      name: 'Sarah Chen',
      role: 'LEAD MATCHMAKER',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80'
    }
  }
];

export const BlogPage: React.FC = () => {
  const { t } = useLocalization();
  const [activeCategory, setActiveCategory] = useState<'all' | 'dating' | 'relationship' | 'matchmaking'>('all');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="relative z-10 bg-[#FDFBF7] min-h-screen pt-28 md:pt-36 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-[0.06]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <span className="block text-[11px] tracking-[0.25em] text-[#9B7A5B] uppercase font-sans font-bold mb-3">
            {t('blog.eyebrow') || 'WUMA INSIGHTS'}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-medium text-brand-charcoal mb-4 leading-tight tracking-tight">
            Matchmaker Blog & Relationship Guides
          </h1>

          <p className="text-brand-charcoal/70 text-sm sm:text-[15px] font-normal leading-relaxed max-w-2xl mx-auto">
            From first-date conversation tips to navigating long-distance love across the diaspora — curated wisdom from the matchmakers who know what works.
          </p>
        </div>

        {/* Tab / Category Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-lg border transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                : 'bg-white border-zinc-200 text-zinc-400 hover:text-brand-charcoal hover:border-zinc-300'
            }`}
          >
            ALL POSTS
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('dating')}
            className={`px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-lg border transition-all duration-300 ${
              activeCategory === 'dating'
                ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                : 'bg-white border-zinc-200 text-zinc-400 hover:text-brand-charcoal hover:border-zinc-300'
            }`}
          >
            DATING ADVICE
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('relationship')}
            className={`px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-lg border transition-all duration-300 ${
              activeCategory === 'relationship'
                ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                : 'bg-white border-zinc-200 text-zinc-400 hover:text-brand-charcoal hover:border-zinc-300'
            }`}
          >
            RELATIONSHIP TIPS
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('matchmaking')}
            className={`px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-lg border transition-all duration-300 ${
              activeCategory === 'matchmaking'
                ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                : 'bg-white border-zinc-200 text-zinc-400 hover:text-brand-charcoal hover:border-zinc-300'
            }`}
          >
            MATCHMAKING GUIDES
          </button>
        </div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={cardReveal}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.28, ease: 'easeOut' },
                }}
                className="flex flex-col rounded-[24px] border border-brand-teal/5 bg-white overflow-hidden text-left shadow-[0_12px_32px_rgb(var(--color-brand-charcoal)/0.02)] transition-all duration-300 hover:shadow-[0_20px_48px_rgb(var(--color-brand-charcoal)/0.06)]"
              >
                
                {/* Blog Cover Image with Badge */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover select-none"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2.5 py-1 rounded-[6px] text-[8px] font-sans font-bold text-[#9B7A5B] uppercase tracking-widest border border-brand-gold/20 shadow-sm">
                    {post.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-grow min-h-[260px]">
                  <div className="space-y-3">
                    {/* Date and Read Time */}
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-brand-charcoal/45 uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand-teal" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-base font-bold text-brand-charcoal leading-snug">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[11px] font-normal leading-relaxed text-brand-charcoal/65">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author Block */}
                  <div className="flex items-center gap-3 pt-6 border-t border-brand-charcoal/5 mt-6">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-brand-charcoal leading-tight">
                        {post.author.name}
                      </h4>
                      <span className="block text-[8px] font-sans font-bold tracking-wider text-brand-charcoal/40 uppercase mt-0.5">
                        {post.author.role}
                      </span>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};
