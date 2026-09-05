import { motion } from 'framer-motion';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { dailySchedule } from '@/data/mockData';
import type { ScheduleItem } from '@/types';

const typeColors: Record<ScheduleItem['type'], string> = {
  ibadah: 'bg-primary/15 text-primary border-primary/30',
  akademik: 'bg-accent/15 text-accent border-accent/30',
  ekstrakurikuler: 'bg-emerald-light/15 text-emerald-light border-emerald-light/30',
  istirahat: 'bg-muted text-muted-foreground border-border',
};

const typeLabels: Record<ScheduleItem['type'], string> = {
  ibadah: 'Ibadah',
  akademik: 'Akademik',
  ekstrakurikuler: 'Ekskul',
  istirahat: 'Istirahat',
};

const JadwalPage = () => {
  return (
    <>
      <PageHeader title="Jadwal Harian Santri" subtitle="Rutinitas harian yang terstruktur dari subuh hingga malam." breadcrumbs={[{ label: 'Kehidupan Santri' }, { label: 'Jadwal' }]} />
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          {/* Legend */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(Object.keys(typeColors) as ScheduleItem['type'][]).map((t) => (
              <span key={t} className={`px-3 py-1 text-xs font-medium rounded-full border ${typeColors[t]}`}>{typeLabels[t]}</span>
            ))}
          </div>

          <div className="space-y-2">
            {dailySchedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`flex items-center gap-4 p-3 md:p-4 rounded-xl border ${typeColors[item.type]}`}
              >
                <span className="text-sm font-mono font-bold w-12 shrink-0">{item.time}</span>
                <div className="w-px h-6 bg-border" />
                <span className="text-sm flex-1">{item.activity}</span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-background/30 hidden sm:inline">{typeLabels[item.type]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default JadwalPage;
