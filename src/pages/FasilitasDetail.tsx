import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { facilities } from '@/data/mockData';

const FasilitasDetail = () => {
  const { slug } = useParams();
  const facility = facilities.find((f) => f.slug === slug);

  if (!facility) {
    return (
      <SectionWrapper><div className="text-center py-20"><h2 className="text-2xl font-bold mb-4">Fasilitas tidak ditemukan</h2><Link to="/fasilitas" className="text-primary hover:underline">Kembali</Link></div></SectionWrapper>
    );
  }

  return (
    <>
      <PageHeader title={facility.title} subtitle={facility.description} breadcrumbs={[{ label: 'Fasilitas', href: '/fasilitas' }, { label: facility.title }]} />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card overflow-hidden">
            <div className="aspect-video bg-muted" />
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-4">Fitur Unggulan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {facility.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-secondary">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{facility.description} Kami terus berupaya meningkatkan kualitas fasilitas untuk mendukung kenyamanan dan efektivitas pembelajaran santri.</p>
            </div>
          </motion.div>
          <Link to="/fasilitas" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-6">
            <ArrowLeft className="w-4 h-4" /> Kembali
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
};

export default FasilitasDetail;
