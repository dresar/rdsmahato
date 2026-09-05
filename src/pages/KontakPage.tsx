import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import SectionWrapper from '@/components/shared/SectionWrapper';
import { contactInfo } from '@/data/mockData';

const KontakPage = () => {
  return (
    <>
      <PageHeader title="Hubungi Kami" subtitle="Kami siap menjawab pertanyaan Anda seputar pesantren." breadcrumbs={[{ label: 'Kontak' }]} />
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Informasi Kontak</h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Alamat', value: contactInfo.address },
                { icon: Phone, label: 'Telepon', value: contactInfo.phone },
                { icon: Mail, label: 'Email', value: contactInfo.email },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-4 glass-card p-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Map Placeholder */}
            <div className="aspect-video rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground text-sm">
              Google Maps akan ditampilkan di sini
            </div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Kirim Pesan</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Nama Lengkap</label>
                <input type="text" className="w-full px-4 py-2.5 text-sm rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <input type="email" className="w-full px-4 py-2.5 text-sm rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="email@contoh.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Subjek</label>
                <input type="text" className="w-full px-4 py-2.5 text-sm rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Topik pesan Anda" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Pesan</label>
                <textarea rows={4} className="w-full px-4 py-2.5 text-sm rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Tulis pesan Anda..." />
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4" /> Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default KontakPage;
