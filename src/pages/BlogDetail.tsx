import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { blogPosts } from '@/data/mockData';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return <SectionWrapper><div className="text-center py-20"><h2 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h2><Link to="/blog" className="text-primary hover:underline">Kembali</Link></div></SectionWrapper>;
  }

  return (
    <>
      <PageHeader title={post.title} breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card overflow-hidden">
            <div className="aspect-video bg-muted" />
            <div className="p-5 md:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-6">
                <span className="px-2.5 py-1 rounded bg-primary/10 text-primary font-medium">{post.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{post.author}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
              </div>
              <div className="prose prose-sm prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="text-muted-foreground leading-relaxed mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </motion.article>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Artikel Terkait</h3>
              <div className="grid grid-cols-2 gap-3">
                {related.map((r) => (
                  <Link key={r.id} to={`/blog/${r.slug}`} className="block group">
                    <div className="glass-card overflow-hidden hover-lift">
                      <div className="aspect-[4/3] bg-muted" />
                      <div className="p-3">
                        <span className="text-[10px] text-primary font-medium">{r.category}</span>
                        <h4 className="text-sm font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">{r.title}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-6">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Blog
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default BlogDetail;
