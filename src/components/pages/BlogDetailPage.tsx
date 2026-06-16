import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowUpRight, Tag, Folder, Share2 } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import { cardReveal } from '../../lib/motion';

/* ── Same SVG icons as Footer ── */
const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = useMemo(() => {
    return blogPosts.find((p) => p.id === Number(id));
  }, [id]);

  const recentPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts.filter((p) => p.id !== post.id).slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="font-serif text-3xl text-brand-charcoal mb-4">Post Not Found</h2>
        <button
          onClick={() => navigate('/blog')}
          className="text-sm font-bold tracking-widest uppercase text-brand-teal hover:text-brand-charcoal transition-colors"
        >
          Return to Blog
        </button>
      </div>
    );
  }

  // Parse markdown-like content into basic HTML/React elements
  const renderContent = (text: string) => {
    const paragraphs = text.split('\n\n').filter((p) => p.trim() !== '');
    return paragraphs.map((para, index) => {
      if (para.startsWith('### ')) {
        return (
          <h3 key={index} className="font-serif text-xl sm:text-2xl font-semibold text-brand-charcoal mt-10 mb-3 leading-tight">
            {para.replace('### ', '')}
          </h3>
        );
      }
      // Numbered list items
      if (/^\d+\.\s/.test(para)) {
        const num = para.match(/^(\d+)\.\s(.+)/s);
        if (num) {
          return (
            <div key={index} className="mb-6">
              <h4 className="font-serif text-base font-semibold text-brand-charcoal mb-2">{num[1]}. {num[2].split('\n')[0]}</h4>
              {num[2].split('\n').slice(1).map((line, i) => (
                <p key={i} className="text-[13px] sm:text-[14px] font-light text-brand-charcoal/70 leading-[1.8] mb-2">{line}</p>
              ))}
            </div>
          );
        }
      }
      return (
        <p key={index} className="text-[13px] sm:text-[14px] font-light text-brand-charcoal/75 leading-[1.8] mb-5">
          {para}
        </p>
      );
    });
  };

  const categories = ['Dating Advice', 'Relationship Tips', 'Matchmaking Guides', 'Insights'];
  const popularTags = ['#conversation', '#dating', '#matchmaking', '#relationship', '#wuma', '#introductions'];
  const socials = [
    { name: 'Instagram', href: 'https://instagram.com', icon: <InstagramIcon /> },
    { name: 'LinkedIn',  href: 'https://linkedin.com',  icon: <LinkedinIcon />  },
    { name: 'X',        href: 'https://x.com',         icon: <XIcon />        },
    { name: 'Facebook', href: 'https://facebook.com',  icon: <FacebookIcon />  },
  ];

  return (
    <div className="relative z-10 bg-white min-h-screen">
      {/* Page Hero */}
      <section className="relative w-full pt-28 md:pt-36 pb-10 bg-[#EEEEE9] border-b border-brand-teal/10">
        <div className="section-container relative z-10">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-charcoal/50 hover:text-brand-teal transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to All Posts
          </button>

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 mb-5 rounded-[6px] text-[9px] font-sans font-bold text-[#9B7A5B] uppercase tracking-widest border border-brand-gold/20 bg-white shadow-sm">
              {post.tag}
            </span>
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium leading-tight tracking-tight text-brand-charcoal mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-brand-charcoal/55">
              <div className="flex items-center gap-2">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover border border-brand-teal/20" />
                <span className="font-semibold text-brand-charcoal/80">{post.author.name}</span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-brand-charcoal/40">{post.author.role}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-teal" />
                <span className="font-bold tracking-wider uppercase text-[9px]">{post.date} · {post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="relative z-10 py-14 sm:py-20 bg-white">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">

            {/* LEFT: Article Content */}
            <div className="flex-1 min-w-0">
              {/* Featured Image */}
              <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[45vh] sm:h-[50vh] object-cover select-none"
                />
              </div>

              {/* Intro heading */}
              <h2 className="font-serif text-2xl font-semibold text-brand-charcoal mb-4">Introduction</h2>

              {/* Article body */}
              <div>
                {post.content ? renderContent(post.content) : (
                  <p className="text-brand-charcoal/70 text-base leading-relaxed">Content coming soon.</p>
                )}
              </div>

              {/* Author Card */}
              <div className="mt-14 pt-8 border-t border-brand-charcoal/10">
                <div className="flex items-center gap-5 p-6 rounded-2xl bg-[#F9F5EE] border border-brand-gold/20">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover shrink-0 ring-2 ring-brand-gold/30"
                  />
                  <div>
                    <span className="block text-[9px] font-bold tracking-widest uppercase text-brand-gold mb-1">Written By</span>
                    <h4 className="font-serif text-lg font-semibold text-brand-charcoal">{post.author.name}</h4>
                    <p className="text-xs text-brand-charcoal/55 mt-0.5">{post.author.role} at WuMa Match</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Sidebar */}
            <div className="w-full lg:w-[280px] xl:w-[300px] shrink-0 space-y-8">

              {/* Latest Posts */}
              <div className="rounded-2xl border border-brand-charcoal/8 overflow-hidden">
                <div className="px-5 py-4 bg-[#EEEEE9] border-b border-brand-charcoal/8">
                  <h3 className="font-serif text-base font-semibold text-brand-charcoal">Latest Post</h3>
                </div>
                <div className="divide-y divide-brand-charcoal/5">
                  {recentPosts.map((rp) => (
                    <motion.div
                      key={rp.id}
                      variants={cardReveal}
                      className="group"
                    >
                      <Link to={`/blog/${rp.id}`} className="flex items-start gap-3 p-4 hover:bg-[#F9F5EE] transition-colors">
                        <div className="w-14 h-14 rounded-[10px] overflow-hidden shrink-0">
                          <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/40 mb-1">{rp.date}</p>
                          <h4 className="text-xs font-semibold text-brand-charcoal leading-snug line-clamp-2 group-hover:text-brand-teal transition-colors">
                            {rp.title}
                          </h4>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-2xl border border-brand-charcoal/8 overflow-hidden">
                <div className="px-5 py-4 bg-[#EEEEE9] border-b border-brand-charcoal/8">
                  <h3 className="font-serif text-base font-semibold text-brand-charcoal flex items-center gap-2">
                    <Folder className="w-4 h-4 text-brand-teal" />
                    Categories
                  </h3>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      to="/blog"
                      className="px-3 py-1.5 rounded-[8px] text-[10px] font-bold uppercase tracking-wide text-brand-charcoal/70 bg-[#F4F1EA] hover:bg-brand-teal hover:text-white transition-all duration-200 border border-brand-charcoal/8"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="rounded-2xl border border-brand-charcoal/8 overflow-hidden">
                <div className="px-5 py-4 bg-[#EEEEE9] border-b border-brand-charcoal/8">
                  <h3 className="font-serif text-base font-semibold text-brand-charcoal flex items-center gap-2">
                    <Tag className="w-4 h-4 text-brand-teal" />
                    Popular Tags
                  </h3>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-[8px] text-[10px] font-bold uppercase tracking-wide text-brand-charcoal/70 bg-[#F4F1EA] hover:bg-brand-teal hover:text-white transition-all duration-200 cursor-pointer border border-brand-charcoal/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="rounded-2xl border border-brand-charcoal/8 overflow-hidden">
                <div className="px-5 py-4 bg-[#EEEEE9] border-b border-brand-charcoal/8">
                  <h3 className="font-serif text-base font-semibold text-brand-charcoal flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-brand-teal" />
                    Social Media
                  </h3>
                </div>
                <div className="p-4 flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.name}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-brand-teal bg-[#F4F1EA] hover:bg-brand-teal hover:text-white border border-brand-charcoal/8 hover:scale-110 transition-all duration-200 shadow-sm"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="rounded-2xl bg-brand-teal px-5 py-6 text-white text-center">
                <h3 className="font-serif text-lg font-semibold mb-2">Ready to Find Your Match?</h3>
                <p className="text-xs text-white/75 leading-relaxed mb-4">Join our exclusive network of verified, serious members.</p>
                <a
                  href="/#cta"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-brand-teal text-[11px] font-bold tracking-widest uppercase hover:bg-brand-cream transition-colors duration-300 shadow-sm"
                >
                  <span>APPLY NOW</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
