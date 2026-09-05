import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Palette } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const sections = [
  { id: 'profil', label: 'Profil', icon: User },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'password', label: 'Password', icon: Lock },
  { id: 'tema', label: 'Tema', icon: Palette },
];

const PengaturanPage = () => {
  const [activeSection, setActiveSection] = useState('profil');
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold mb-1">Pengaturan Akun</h1>
        <p className="text-sm text-muted-foreground mb-6">Kelola profil dan preferensi akun Anda.</p>

        {/* Section tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeSection === s.id
                  ? 'gradient-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </button>
          ))}
        </div>

        {/* Profil */}
        {activeSection === 'profil' && (
          <div className="glass-card p-6 space-y-5">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xl font-bold">A</div>
              <div>
                <p className="font-semibold">Ahmad Fauzan</p>
                <p className="text-sm text-muted-foreground">Calon Santri MTs</p>
              </div>
            </div>
            {[
              { label: 'Nama Lengkap', value: 'Ahmad Fauzan' },
              { label: 'Nama Panggilan', value: 'Fauzan' },
              { label: 'Tempat, Tanggal Lahir', value: 'Pekanbaru, 15 Mei 2012' },
              { label: 'Alamat', value: 'Jl. Lintas Mahato, Tambusai Utara' },
            ].map(f => (
              <div key={f.label}>
                <label className="text-xs text-muted-foreground">{f.label}</label>
                <input
                  type="text"
                  defaultValue={f.value}
                  className="w-full mt-1 px-3 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            ))}
            <button className="w-full py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold">
              Simpan Perubahan
            </button>
          </div>
        )}

        {/* Email */}
        {activeSection === 'email' && (
          <div className="glass-card p-6 space-y-5">
            <div>
              <label className="text-xs text-muted-foreground">Email Saat Ini</label>
              <input type="email" defaultValue="ahmad.fauzan@email.com" className="w-full mt-1 px-3 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email Baru</label>
              <input type="email" placeholder="Masukkan email baru" className="w-full mt-1 px-3 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </div>
            <button className="w-full py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold">
              Update Email
            </button>
          </div>
        )}

        {/* Password */}
        {activeSection === 'password' && (
          <div className="glass-card p-6 space-y-5">
            {['Password Lama', 'Password Baru', 'Konfirmasi Password'].map(label => (
              <div key={label}>
                <label className="text-xs text-muted-foreground">{label}</label>
                <input type="password" placeholder="••••••••" className="w-full mt-1 px-3 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            ))}
            <button className="w-full py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-semibold">
              Ubah Password
            </button>
          </div>
        )}

        {/* Tema */}
        {activeSection === 'tema' && (
          <div className="glass-card p-6">
            <p className="text-sm text-muted-foreground mb-4">Pilih tema tampilan aplikasi.</p>
            <div className="grid grid-cols-3 gap-3">
              {([['light', 'Terang'], ['dark', 'Gelap'], ['system', 'Sistem']] as const).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setTheme(value)}
                  className={`p-4 rounded-xl border text-center text-sm font-medium transition-colors ${
                    theme === value ? 'border-primary bg-primary/10 text-primary' : 'border-border text-muted-foreground hover:border-primary/30'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PengaturanPage;
