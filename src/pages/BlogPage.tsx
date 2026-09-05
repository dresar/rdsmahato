import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Clock } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { blogPosts } from '@/data/mockData';

const categories = ['Semua', 'Berita', 'Prestasi', 'Artikel'];

const BlogPage = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = blogPosts.filter((p) => {
    const matchCategory = activeCategory === 'Semua' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <PageHeader title="Blog" subtitle="Berita, prestasi, dan artikel seputar Pesantren Raudhatussalam." breadcrumbs={[{ label: 'Blog' }]} />
      <SectionWrapper>
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Cari artikel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === c ? 'gradient-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/blog/${post.slug}`} className="block group">
                <div className="glass-card overflow-hidden hover-lift h-full">
                  <div className="aspect-[4/3] bg-muted" />
                  <div className="p-3 md:p-5">
                    <span className="text-[10px] md:text-xs font-medium text-primary">{post.category}</span>
                    <h3 className="text-sm md:text-base font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 hidden md:block">{post.excerpt}</p>
                    <div className="flex items-center gap-2 mt-2 text-[10px] md:text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span className="hidden md:inline">•</span>
                      <span className="hidden md:flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Tidak ada artikel yang ditemukan.</p>
          </div>
        )}
      </SectionWrapper>
    </>
  );
};

export default BlogPage;
