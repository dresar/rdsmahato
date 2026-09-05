import { motion } from 'framer-motion';
import { Eye, Target, Sparkles } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';

const values = [
  { title: 'Berilmu Amaliyah', desc: 'Ilmu yang diamalkan dalam kehidupan sehari-hari.' },
  { title: 'Beramal Ilmiyah', desc: 'Setiap amal didasari oleh ilmu yang benar.' },
  { title: 'Berakhlakul Karimah', desc: 'Akhlak mulia sebagai mahkota kehidupan.' },
  { title: 'Berbadan Sehat', desc: 'Jasmani yang kuat sebagai wadah ibadah.' },
  { title: 'Berwawasan Luas', desc: 'Pemikiran terbuka terhadap ilmu dan peradaban.' },
];

const misi = [
  'Menyelenggarakan pendidikan terpadu yang memadukan kurikulum nasional dan kurikulum pesantren modern.',
  'Membina santri agar memiliki keimanan yang kuat, ilmu yang luas, dan akhlak yang mulia.',
  'Menciptakan lingkungan belajar yang kondusif, disiplin, dan islami.',
  'Mengembangkan potensi santri melalui program ekstrakurikuler yang komprehensif.',
  'Mempersiapkan lulusan yang mampu bersaing di tingkat nasional dan internasional.',
];

const VisiMisi = () => {
  return (
    <>
      <PageHeader
        title="Visi & Misi"
        subtitle="Fondasi dan arah langkah pesantren kami."
        breadcrumbs={[{ label: 'Profil', href: '/profil' }, { label: 'Visi & Misi' }]}
      />

      <SectionWrapper>
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Visi */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Visi</h2>
            <p className="text-xl md:text-2xl font-arabic text-primary leading-relaxed">
              "Menjadi lembaga pendidikan Islam terpadu yang unggul dalam mencetak pemimpin umat yang berilmu, beriman, dan berakhlak mulia serta mampu menjawab tantangan zaman."
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Misi</h2>
            </div>
            <div className="space-y-3">
              {misi.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 glass-card"
                >
                  <span className="w-7 h-7 shrink-0 rounded-md gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">{i + 1}</span>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Panca Jiwa</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass-card p-5 hover-lift">
                  <h3 className="font-semibold text-primary mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default VisiMisi;
