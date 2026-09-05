import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ClipboardList, Bell, BookOpen, HelpCircle } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Assalamu'alaikum, Ahmad! 👋</h1>
          <p className="text-sm text-muted-foreground mt-1">Selamat datang di portal santri Raudhatussalam.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { icon: ClipboardList, label: 'Form Pendaftaran', href: '/app/form-pendaftaran', color: 'gradient-primary text-primary-foreground' },
            { icon: Bell, label: 'Notifikasi', href: '/app/notifikasi', color: 'bg-accent text-accent-foreground' },
            { icon: BookOpen, label: 'Akademik', href: '/app/akademik', color: 'bg-secondary text-foreground' },
            { icon: HelpCircle, label: 'Bantuan', href: '/kontak', color: 'bg-secondary text-foreground' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl ${item.color} hover:opacity-90 transition-opacity`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-3">Status Pendaftaran</h3>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent font-medium">Dalam Proses Verifikasi</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Dokumen Anda sedang diverifikasi oleh tim pendaftaran.</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-3">Pengumuman</h3>
            <p className="text-sm text-muted-foreground">Jadwal tes masuk akan diumumkan pada tanggal 15 Maret 2026.</p>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-semibold mb-3">Bantuan</h3>
            <p className="text-sm text-muted-foreground mb-3">Butuh bantuan? Hubungi panitia pendaftaran.</p>
            <Link to="/kontak" className="text-sm text-primary font-medium hover:underline">Hubungi Kami</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
