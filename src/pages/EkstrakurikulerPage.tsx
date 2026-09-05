import { motion } from 'framer-motion';
import { Tent, Mic, Swords, BookOpen, Trophy, Pen, Newspaper, Globe } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { extracurriculars } from '@/data/mockData';

const iconMap: Record<string, React.ElementType> = { Tent, Mic, Swords, BookOpen, Trophy, Pen, Newspaper, Globe };

const EkstrakurikulerPage = () => {
  return (
    <>
      <PageHeader title="Ekstrakurikuler" subtitle="Pengembangan bakat dan minat santri melalui beragam kegiatan." breadcrumbs={[{ label: 'Kehidupan Santri' }, { label: 'Ekstrakurikuler' }]} />
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {extracurriculars.map((e, i) => {
            const Icon = iconMap[e.icon] || BookOpen;
            return (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-5 hover-lift"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-[10px] font-medium text-primary uppercase tracking-wider">{e.category}</span>
                <h3 className="font-semibold mt-1 mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.description}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
};

export default EkstrakurikulerPage;
