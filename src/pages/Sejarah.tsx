import { motion } from 'framer-motion';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper, { SectionHeader } from '@/components/shared/SectionWrapper';
import { timeline } from '@/data/mockData';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const Sejarah = () => {
  return (
    <>
      <PageHeader
        title="Sejarah Pesantren"
        subtitle="Perjalanan panjang membangun generasi emas sejak 2008."
        breadcrumbs={[{ label: 'Profil', href: '/profil' }, { label: 'Sejarah' }]}
      />
      <SectionWrapper>
        <SectionHeader badge="Timeline" title="Jejak Langkah Kami" />
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {timeline.map((event, i) => (
            <motion.div
              key={event.year}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={fadeUp}
              className={`relative flex items-start gap-6 mb-8 md:mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full gradient-primary border-2 border-background -translate-x-1.5 mt-1.5 z-10" />
              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                <span className="text-sm font-bold text-primary">{event.year}</span>
                <h3 className="text-lg font-semibold mt-1">{event.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Sejarah;
