import React, { useState } from 'react';
import { NavRoute, BlogPost } from '../../types';
import { BLOG_POSTS } from '../../data/clubData';
import { ArrowRight, X, BookOpen, Search, Clock, Calendar, User, Share2, Check } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (route: NavRoute) => void;
  isDarkMode?: boolean;
}

export const BlogView: React.FC<BlogViewProps> = ({
  onNavigate,
  isDarkMode = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className={`min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDarkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Blog Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-8 border-neutral-800/60">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-red-600 text-xs font-bold uppercase tracking-widest block font-mono">
                TIARA EDITORIAL · COACHING INSIGHTS & VADODARA CLUB NEWS
              </span>
              <span className="px-2 py-0.5 bg-red-600/20 text-red-500 border border-red-600/40 text-[10px] font-mono font-bold uppercase rounded-xs">
                10 A-Z GUIDES
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              TIARA SPORTS BLOG
            </h1>
            <p
              className={`text-xs sm:text-sm mt-3 leading-relaxed ${
                isDarkMode ? 'text-neutral-400' : 'text-slate-600'
              }`}
            >
              Comprehensive A-to-Z tactical guides, tournament preparation, injury prevention, 
              slide mechanics, and athlete nutrition manuals written by certified directors at Tiara Sports Club in Vadodara, Gujarat.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-xs border text-xs ${
                isDarkMode
                  ? 'bg-neutral-900 border-neutral-800 text-white'
                  : 'bg-white border-slate-300 text-slate-900'
              }`}
            >
              <Search className="w-4 h-4 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search blog articles..."
                className="w-full bg-transparent focus:outline-none text-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-neutral-400 hover:text-red-500 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-red-600 text-white shadow-xs font-black'
                  : isDarkMode
                  ? 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-300'
              }`}
            >
              {cat === 'All' ? 'All Blog Articles' : cat}
            </button>
          ))}
        </div>

        {/* No Results Fallback */}
        {filteredPosts.length === 0 && (
          <div
            className={`text-center py-16 border rounded-xs p-8 ${
              isDarkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-slate-200'
            }`}
          >
            <BookOpen className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
            <h3 className="font-display text-xl font-bold uppercase">No Blog Articles Found</h3>
            <p className={`text-xs mt-1 ${isDarkMode ? 'text-neutral-400' : 'text-slate-600'}`}>
              Try searching for a different sports keyword or select another category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase rounded-xs cursor-pointer"
            >
              Reset Blog Filters
            </button>
          </div>
        )}

        {/* Featured Blog Article (When matching post available) */}
        {filteredPosts[0] && (
          <div
            onClick={() => setSelectedArticle(filteredPosts[0])}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border rounded-xs p-6 sm:p-8 cursor-pointer transition-all group ${
              isDarkMode
                ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-xs overflow-hidden">
              <img
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-2.5 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-xs font-mono shadow-sm">
                FEATURED BLOG POST
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs text-red-600 flex items-center gap-2 font-mono font-bold">
                <span>{filteredPosts[0].category}</span>
                <span>·</span>
                <span>{filteredPosts[0].readTime}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase group-hover:text-red-600 transition-colors leading-tight">
                {filteredPosts[0].title}
              </h2>

              <p
                className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-neutral-300' : 'text-slate-700'
                }`}
              >
                {filteredPosts[0].excerpt}
              </p>

              <div
                className={`pt-2 text-xs font-mono ${
                  isDarkMode ? 'text-neutral-500' : 'text-slate-500'
                }`}
              >
                BY {filteredPosts[0].author} · {filteredPosts[0].date}
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-600 group-hover:underline">
                  <span>Read Full Blog Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Blog Article Grid */}
        {filteredPosts.length > 1 && (
          <div className="space-y-4">
            <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
              MORE FROM TIARA SPORTS BLOG
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedArticle(post)}
                  className={`border rounded-xs overflow-hidden cursor-pointer transition-all group flex flex-col justify-between ${
                    isDarkMode
                      ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 text-red-400 text-[10px] font-bold uppercase rounded-xs font-mono">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <div
                        className={`text-[11px] flex items-center gap-2 font-mono ${
                          isDarkMode ? 'text-neutral-500' : 'text-slate-500'
                        }`}
                      >
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                        <span>·</span>
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold uppercase group-hover:text-red-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p
                        className={`text-xs line-clamp-3 leading-relaxed ${
                          isDarkMode ? 'text-neutral-400' : 'text-slate-600'
                        }`}
                      >
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`p-6 pt-0 text-[11px] font-mono border-t mt-3 pt-3 flex items-center justify-between ${
                      isDarkMode ? 'border-neutral-800 text-neutral-400' : 'border-slate-100 text-slate-500'
                    }`}
                  >
                    <span className="truncate">{post.author}</span>
                    <span className="text-red-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Reader Modal */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`relative max-w-3xl w-full border rounded-xs p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl ${
                isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between border-b pb-3 mb-4 border-neutral-800/60">
                <span className="font-mono text-xs font-bold text-red-600 tracking-wider uppercase">
                  TIARA SPORTS BLOG · {selectedArticle.category}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-1.5 text-neutral-400 hover:text-white rounded-xs transition-colors cursor-pointer flex items-center gap-1 text-xs"
                    title="Share article link"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                    <span className="text-[11px]">{copiedLink ? 'Copied' : 'Share'}</span>
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-1.5 text-neutral-400 hover:text-red-500 rounded-xs transition-colors cursor-pointer"
                    aria-label="Close article"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-tight">
                  {selectedArticle.title}
                </h1>

                <div
                  className={`flex flex-wrap items-center gap-3 text-xs border-y py-2.5 font-mono ${
                    isDarkMode ? 'border-neutral-800 text-neutral-400' : 'border-slate-200 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-red-500" />
                    <span>{selectedArticle.author}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>

                <div className="h-64 sm:h-80 rounded-xs overflow-hidden border border-neutral-800">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div
                  className={`space-y-4 text-sm sm:text-base leading-relaxed pt-2 ${
                    isDarkMode ? 'text-neutral-300' : 'text-slate-700'
                  }`}
                >
                  {selectedArticle.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-red-600 font-bold uppercase">TIARA SPORTS CLUB</span>
                    <span className="text-neutral-500">· Vadodara, Gujarat</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedArticle(null);
                        onNavigate('facilities');
                      }}
                      className="text-xs font-bold uppercase text-neutral-400 hover:text-white cursor-pointer"
                    >
                      Explore Facilities
                    </button>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold uppercase text-xs rounded-xs cursor-pointer"
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
