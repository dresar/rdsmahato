import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, CreditCard, ArrowRight, Check, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper, { SectionHeader } from '@/components/shared/SectionWrapper';
import { registrationRequirements, registrationFees } from '@/data/mockData';

const PendaftaranPage = () => {
  return (
    <>
      <PageHeader title="Pendaftaran Santri Baru" subtitle="Informasi lengkap pendaftaran Tahun Ajaran 2025/2026." breadcrumbs={[{ label: 'Pendaftaran' }]} />

      {/* Alert */}
      <div className="container mx-auto max-w-7xl px-4 mt-8">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
          <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-primary">Pendaftaran Dibuka!</p>
            <p className="text-sm text-muted-foreground mt-0.5">Periode pendaftaran: 1 Januari - 30 Juni 2026. Kuota terbatas!</p>
          </div>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Persyaratan</h3>
            </div>
            <div className="space-y-3">
              {registrationRequirements.map((r, i) => (
                <motion.div key={r.id} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 p-3 rounded-lg bg-secondary">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{r.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fees */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Rincian Biaya</h3>
            </div>
            <div className="space-y-2">
              {registrationFees.map((f, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary">
                  <span className="text-sm">{f.item}</span>
                  <span className="text-sm font-semibold text-primary">{f.amount}</span>
                </div>
              ))}
              <div className="flex items-center justify-between p-3 rounded-lg gradient-primary text-primary-foreground mt-2">
                <span className="text-sm font-semibold">Total Estimasi</span>
                <span className="text-sm font-bold">Rp 10.150.000</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">*Biaya dapat berubah sewaktu-waktu. Hubungi kami untuk informasi terbaru.</p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Siap Mendaftar?</h3>
          <p className="text-muted-foreground mb-6">Buat akun untuk memulai proses pendaftaran online.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/register" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl gradient-primary text-primary-foreground">
              Daftar Online <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/kontak" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-secondary transition-colors">
              Hubungi Kami
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
};

export default PendaftaranPage;
