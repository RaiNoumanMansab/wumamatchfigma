import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useLocalization } from '../../lib/i18n';
import { cardReveal, containerStagger } from '../../lib/motion';

import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

export const BlogPage: React.FC = () => {
  const { t } = useLocalization();
  const [activeCategory, setActiveCategory] = useState<'all' | 'dating' | 'relationship' | 'matchmaking'>('all');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="relative z-10 bg-white min-h-screen">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-teal opacity-[0.05]" />

      {/* Header Block (Beige background block, matching other subpages) */}
      <section className="relative overflow-hidden bg-[#EEEEE9] pt-24 md:pt-28 pb-12 sm:pb-16 border-b border-brand-teal/10">
        <div className="section-container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="block text-xs font-bold tracking-[0.25em] text-brand-gold uppercase font-sans">
              {t('blog.eyebrow') || 'WUMA INSIGHTS'}
            </span>

            <h1 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-brand-charcoal sm:mt-6 sm:text-4xl lg:text-full mb-2.5">
              Matchmaker Blog & Relationship Guides
            </h1>

            <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
              From first-date conversation tips to navigating long-distance love across the diaspora — curated wisdom from the matchmakers who know what works.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section (White background) */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
        <div className="section-container relative z-10">

          {/* Tab / Category Selector */}
          <div className=" mx-auto flex flex-wrap justify-start gap-3 mb-12 px-1">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-[8px] border transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                  : 'bg-white border-brand-teal/10 text-brand-charcoal/60 hover:text-brand-charcoal hover:border-brand-teal/30'
              }`}
            >
              ALL POSTS
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('dating')}
              className={`px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-[8px] border transition-all duration-300 ${
                activeCategory === 'dating'
                  ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                  : 'bg-white border-brand-teal/10 text-brand-charcoal/60 hover:text-brand-charcoal hover:border-brand-teal/30'
              }`}
            >
              DATING ADVICE
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('relationship')}
              className={`px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-[8px] border transition-all duration-300 ${
                activeCategory === 'relationship'
                  ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                  : 'bg-white border-brand-teal/10 text-brand-charcoal/60 hover:text-brand-charcoal hover:border-brand-teal/30'
              }`}
            >
              RELATIONSHIP TIPS
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('matchmaking')}
              className={`px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-[8px] border transition-all duration-300 ${
                activeCategory === 'matchmaking'
                  ? 'bg-brand-teal border-brand-teal text-white shadow-sm'
                  : 'bg-white border-brand-teal/10 text-brand-charcoal/60 hover:text-brand-charcoal hover:border-brand-teal/30'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto"
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
                  className="flex flex-col rounded-[24px] border border-brand-teal/5 bg-white overflow-hidden text-left shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] group cursor-pointer"
                >
                  <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                  {/* Blog Cover Image with Badge on the top-left */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white px-2.5 py-1 rounded-[6px] text-[8px] font-sans font-bold text-[#9B7A5B] uppercase tracking-widest border border-brand-gold/20 shadow-sm">
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
                      <h3 className="font-serif text-base font-bold text-brand-charcoal leading-snug group-hover:text-brand-teal transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[13px] font-light text-brand-charcoal/70 line-clamp-3 mt-2 leading-relaxed">
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
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
