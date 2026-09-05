import { motion } from 'framer-motion';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { organizationMembers } from '@/data/mockData';

const levels = [0, 1, 2, 3];

const Organisasi = () => {
  return (
    <>
      <PageHeader
        title="Struktur Organisasi"
        subtitle="Susunan pengurus Pondok Pesantren Modern Raudhatussalam."
        breadcrumbs={[{ label: 'Profil', href: '/profil' }, { label: 'Organisasi' }]}
      />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-4">
          {levels.map((level) => {
            const members = organizationMembers.filter((m) => m.level === level);
            if (members.length === 0) return null;
            return (
              <div key={level}>
                {level > 0 && (
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-primary/30" />
                  </div>
                )}
                <div className={`grid gap-3 ${members.length === 1 ? 'grid-cols-1 max-w-sm mx-auto' : members.length === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto' : 'grid-cols-1 sm:grid-cols-3'}`}>
                  {members.map((m, i) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className={`glass-card p-4 md:p-5 text-center hover-lift ${level === 0 ? 'border-primary/30 shadow-glow' : ''}`}
                    >
                      <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-sm ${level === 0 ? 'gradient-primary text-primary-foreground text-lg' : 'bg-muted text-muted-foreground'}`}>
                        {m.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                      </div>
                      <h3 className="font-semibold text-sm md:text-base">{m.name}</h3>
                      <p className="text-xs text-primary mt-1">{m.position}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Organisasi;
