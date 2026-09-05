import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, PartyPopper } from 'lucide-react';
import StepperForm from '@/components/forms/StepperForm';
import UploadField from '@/components/forms/UploadField';
import { FormPendaftaranData, initialFormData } from '@/types/form';

const steps = [
  { label: 'Data Santri', shortLabel: 'Santri' },
  { label: 'Data Orang Tua', shortLabel: 'Ortu' },
  { label: 'Pendidikan', shortLabel: 'Pendidikan' },
  { label: 'Dokumen', shortLabel: 'Dokumen' },
  { label: 'Review', shortLabel: 'Review' },
];

const inputClass =
  'w-full px-4 py-2.5 text-sm rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors';

const FormPendaftaranPage = () => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState<FormPendaftaranData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormPendaftaranData>(
    section: K,
    field: keyof FormPendaftaranData[K],
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const next = () => setCurrent((p) => Math.min(p + 1, steps.length - 1));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg mx-auto text-center py-12"
      >
        <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
          <PartyPopper className="w-10 h-10 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-bold mb-3">Pendaftaran Berhasil! 🎉</h2>
        <p className="text-muted-foreground mb-2">
          Alhamdulillah, formulir pendaftaran Anda telah berhasil dikirim.
        </p>
        <p className="text-sm text-muted-foreground">
          Tim kami akan memverifikasi data dan menghubungi Anda melalui WhatsApp dalam 1-3 hari kerja.
        </p>
        <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
          <p className="text-sm font-medium text-primary">Nomor Registrasi</p>
          <p className="text-2xl font-bold mt-1">REG-2026-{Math.floor(Math.random() * 9000 + 1000)}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl font-bold mb-1">Formulir Pendaftaran Santri Baru</h1>
        <p className="text-sm text-muted-foreground">Tahun Ajaran 2026/2027</p>
      </div>

      <div className="mb-8">
        <StepperForm steps={steps} currentStep={current} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="glass-card p-5 md:p-8"
        >
          {current === 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-4">Data Santri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-1.5 block">Nama Lengkap</label>
                  <input className={inputClass} value={data.santri.namaLengkap} onChange={(e) => update('santri', 'namaLengkap', e.target.value)} placeholder="Masukkan nama lengkap" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Nama Panggilan</label>
                  <input className={inputClass} value={data.santri.namaPanggilan} onChange={(e) => update('santri', 'namaPanggilan', e.target.value)} placeholder="Nama panggilan" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">NISN</label>
                  <input className={inputClass} value={data.santri.nisn} onChange={(e) => update('santri', 'nisn', e.target.value)} placeholder="0012345678" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Tempat Lahir</label>
                  <input className={inputClass} value={data.santri.tempatLahir} onChange={(e) => update('santri', 'tempatLahir', e.target.value)} placeholder="Kota kelahiran" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Tanggal Lahir</label>
                  <input type="date" className={inputClass} value={data.santri.tanggalLahir} onChange={(e) => update('santri', 'tanggalLahir', e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Jenis Kelamin</label>
                  <select className={inputClass} value={data.santri.jenisKelamin} onChange={(e) => update('santri', 'jenisKelamin', e.target.value)}>
                    <option value="">Pilih</option>
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-1.5 block">Alamat Lengkap</label>
                  <textarea className={`${inputClass} min-h-[80px] resize-none`} value={data.santri.alamat} onChange={(e) => update('santri', 'alamat', e.target.value)} placeholder="Jl. ..." />
                </div>
              </div>
            </div>
          )}

          {current === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-4">Data Orang Tua / Wali</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Nama Ayah</label>
                  <input className={inputClass} value={data.orangTua.namaAyah} onChange={(e) => update('orangTua', 'namaAyah', e.target.value)} placeholder="Nama lengkap ayah" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Pekerjaan Ayah</label>
                  <input className={inputClass} value={data.orangTua.pekerjaanAyah} onChange={(e) => update('orangTua', 'pekerjaanAyah', e.target.value)} placeholder="Pekerjaan" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Nama Ibu</label>
                  <input className={inputClass} value={data.orangTua.namaIbu} onChange={(e) => update('orangTua', 'namaIbu', e.target.value)} placeholder="Nama lengkap ibu" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Pekerjaan Ibu</label>
                  <input className={inputClass} value={data.orangTua.pekerjaanIbu} onChange={(e) => update('orangTua', 'pekerjaanIbu', e.target.value)} placeholder="Pekerjaan" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">No. WhatsApp</label>
                  <input className={inputClass} value={data.orangTua.noWhatsapp} onChange={(e) => update('orangTua', 'noWhatsapp', e.target.value)} placeholder="08xxxxxxxxxx" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium mb-1.5 block">Alamat Orang Tua</label>
                  <textarea className={`${inputClass} min-h-[80px] resize-none`} value={data.orangTua.alamatOrangTua} onChange={(e) => update('orangTua', 'alamatOrangTua', e.target.value)} placeholder="Alamat lengkap" />
                </div>
              </div>
            </div>
          )}

          {current === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-4">Pendidikan Sebelumnya</h3>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Nama Sekolah Asal</label>
                <input className={inputClass} value={data.pendidikan.namaSekolah} onChange={(e) => update('pendidikan', 'namaSekolah', e.target.value)} placeholder="SD/MI ..." />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Tahun Lulus</label>
                  <input className={inputClass} value={data.pendidikan.tahunLulus} onChange={(e) => update('pendidikan', 'tahunLulus', e.target.value)} placeholder="2026" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Nilai Rata-rata</label>
                  <input className={inputClass} value={data.pendidikan.nilaiRataRata} onChange={(e) => update('pendidikan', 'nilaiRataRata', e.target.value)} placeholder="85.5" />
                </div>
              </div>
            </div>
          )}

          {current === 3 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-4">Upload Dokumen</h3>
              <p className="text-sm text-muted-foreground mb-4">Upload dokumen persyaratan. Format: PDF, JPG, PNG (maks. 2MB).</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UploadField label="Akte Kelahiran" onFileSelect={(n) => update('dokumen', 'akteLahir', n)} />
                <UploadField label="Kartu Keluarga" onFileSelect={(n) => update('dokumen', 'kartuKeluarga', n)} />
                <UploadField label="Pas Foto 3x4" accept=".jpg,.png" onFileSelect={(n) => update('dokumen', 'pasFoto', n)} />
                <UploadField label="Ijazah / SKL" onFileSelect={(n) => update('dokumen', 'ijazah', n)} />
              </div>
            </div>
          )}

          {current === 4 && (
            <div className="space-y-6">
              <h3 className="font-semibold text-lg mb-4">Review Data Pendaftaran</h3>

              <ReviewSection title="Data Santri">
                <ReviewRow label="Nama Lengkap" value={data.santri.namaLengkap} />
                <ReviewRow label="Nama Panggilan" value={data.santri.namaPanggilan} />
                <ReviewRow label="Tempat, Tanggal Lahir" value={`${data.santri.tempatLahir}, ${data.santri.tanggalLahir}`} />
                <ReviewRow label="Jenis Kelamin" value={data.santri.jenisKelamin} />
                <ReviewRow label="NISN" value={data.santri.nisn} />
                <ReviewRow label="Alamat" value={data.santri.alamat} />
              </ReviewSection>

              <ReviewSection title="Data Orang Tua">
                <ReviewRow label="Nama Ayah" value={data.orangTua.namaAyah} />
                <ReviewRow label="Pekerjaan Ayah" value={data.orangTua.pekerjaanAyah} />
                <ReviewRow label="Nama Ibu" value={data.orangTua.namaIbu} />
                <ReviewRow label="Pekerjaan Ibu" value={data.orangTua.pekerjaanIbu} />
                <ReviewRow label="No. WhatsApp" value={data.orangTua.noWhatsapp} />
              </ReviewSection>

              <ReviewSection title="Pendidikan">
                <ReviewRow label="Sekolah Asal" value={data.pendidikan.namaSekolah} />
                <ReviewRow label="Tahun Lulus" value={data.pendidikan.tahunLulus} />
                <ReviewRow label="Nilai Rata-rata" value={data.pendidikan.nilaiRataRata} />
              </ReviewSection>

              <ReviewSection title="Dokumen">
                <ReviewRow label="Akte Kelahiran" value={data.dokumen.akteLahir || '—'} />
                <ReviewRow label="Kartu Keluarga" value={data.dokumen.kartuKeluarga || '—'} />
                <ReviewRow label="Pas Foto" value={data.dokumen.pasFoto || '—'} />
                <ReviewRow label="Ijazah" value={data.dokumen.ijazah || '—'} />
              </ReviewSection>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <ArrowLeft className="w-4 h-4" /> Sebelumnya
        </button>

        {current < steps.length - 1 ? (
          <button
            onClick={next}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Selanjutnya <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <CheckCircle2 className="w-4 h-4" /> Kirim Pendaftaran
          </button>
        )}
      </div>
    </div>
  );
};

const ReviewSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="p-4 rounded-lg bg-secondary">
    <h4 className="text-sm font-semibold text-primary mb-3">{title}</h4>
    <div className="space-y-2">{children}</div>
  </div>
);

const ReviewRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-start justify-between gap-4 text-sm">
    <span className="text-muted-foreground shrink-0">{label}</span>
    <span className="font-medium text-right">{value || '—'}</span>
  </div>
);

export default FormPendaftaranPage;
