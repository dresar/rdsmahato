import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, GraduationCap, Award, Calendar, BookOpen, Star, ChevronRight, Quote } from 'lucide-react';
import heroImage from '@/assets/hero-pesantren.jpg';
import SectionWrapper, { SectionHeader } from '@/components/shared/SectionWrapper';
import { programs, statistics, testimonials, blogPosts } from '@/data/mockData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const iconMap: Record<string, React.ElementType> = { Users, GraduationCap, Award, Calendar };

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center -mt-16 md:-mt-18">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Pesantren Raudhatussalam" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative container mx-auto max-w-7xl px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/15 text-primary border border-primary/25">
              Pendaftaran Tahun Ajaran 2025/2026 Dibuka
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Mencetak{' '}
              <span className="text-gradient-primary">Pemimpin Umat</span>{' '}
              Masa Depan
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Pondok Pesantren Modern Raudhatussalam Mahato — memadukan ilmu agama dan pengetahuan umum untuk generasi unggul berakhlak mulia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/pendaftaran"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
              >
                Daftar Sekarang
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/profil/sejarah"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border border-border bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
              >
                Kenali Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {statistics.map((stat, i) => {
              const Icon = iconMap[stat.icon] || Star;
              return (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="glass-card p-4 md:p-6 text-center hover-lift"
                >
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-gradient-primary">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs */}
      <SectionWrapper>
        <SectionHeader
          badge="Program Unggulan"
          title="Jenjang Pendidikan"
          subtitle="Lima program pendidikan terpadu yang dirancang untuk membentuk generasi berilmu dan berakhlak mulia."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {programs.slice(0, 3).map((program, i) => (
            <motion.div
              key={program.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Link to={`/program/${program.slug}`} className="block group">
                <div className="glass-card p-6 h-full hover-lift">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <BookOpen className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{program.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{program.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">{program.level}</span>
                    <span>{program.duration}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/program" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            Lihat Semua Program <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-secondary/50">
        <SectionHeader
          badge="Testimoni"
          title="Apa Kata Mereka"
          subtitle="Pengalaman wali santri dan alumni yang telah merasakan pendidikan di Raudhatussalam."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card p-6 hover-lift"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Latest Blog */}
      <SectionWrapper>
        <SectionHeader badge="Blog" title="Berita Terbaru" subtitle="Kabar terkini seputar kegiatan dan prestasi pesantren." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.div key={post.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link to={`/blog/${post.slug}`} className="block group">
                <div className="glass-card overflow-hidden hover-lift">
                  <div className="aspect-[4/3] bg-muted" />
                  <div className="p-3 md:p-5">
                    <span className="text-[10px] md:text-xs font-medium text-primary">{post.category}</span>
                    <h3 className="text-sm md:text-base font-semibold mt-1 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1.5 hidden md:block line-clamp-2">{post.excerpt}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-2">{post.date}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            Semua Artikel <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden gradient-primary p-8 md:p-12 text-center islamic-pattern"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">Siap Bergabung?</h2>
            <p className="text-primary-foreground/80 text-sm md:text-base max-w-lg mx-auto mb-8">
              Daftarkan putra-putri Anda sekarang dan wujudkan generasi yang berilmu, beriman, dan berakhlak mulia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/pendaftaran"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-background text-foreground hover:bg-background/90 transition-colors"
              >
                Daftar Sekarang
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
