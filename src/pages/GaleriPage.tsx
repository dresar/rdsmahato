import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { galleryItems } from '@/data/mockData';

const categories = ['Semua', 'Ibadah', 'Akademik', 'Kegiatan', 'Olahraga', 'Acara'];

const GaleriPage = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const filtered = activeCategory === 'Semua' ? galleryItems : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <>
      <PageHeader title="Galeri" subtitle="Momen-momen berkesan dari kehidupan di pesantren." breadcrumbs={[{ label: 'Galeri' }]} />
      <SectionWrapper>
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {categories.map((c) => (
            <button key={c} onClick={() => setActiveCategory(c)} className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${activeCategory === c ? 'gradient-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04 }}
              className="break-inside-avoid glass-card overflow-hidden hover-lift"
            >
              <div className={`bg-muted ${item.aspectRatio === 'portrait' ? 'aspect-[3/4]' : item.aspectRatio === 'square' ? 'aspect-square' : 'aspect-video'}`} />
              <div className="p-3">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default GaleriPage;
