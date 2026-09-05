import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Landmark, Monitor, Home, Library, Heart, Dumbbell } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { facilities } from '@/data/mockData';

const iconMap: Record<string, React.ElementType> = { Landmark, Monitor, Home, Library, Heart, Dumbbell };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

const FasilitasPage = () => {
  return (
    <>
      <PageHeader
        title="Fasilitas"
        subtitle="Sarana dan prasarana modern yang mendukung proses pendidikan berkualitas."
        breadcrumbs={[{ label: 'Fasilitas' }]}
      />
      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {facilities.map((f, i) => {
            const Icon = iconMap[f.icon] || Landmark;
            return (
              <motion.div key={f.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link to={`/fasilitas/${f.slug}`} className="block group">
                  <div className="glass-card overflow-hidden hover-lift h-full">
                    <div className="aspect-video bg-muted" />
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{f.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{f.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
};

export default FasilitasPage;
