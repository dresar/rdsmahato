export interface DataSantri {
  namaLengkap: string;
  namaPanggilan: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: 'laki-laki' | 'perempuan' | '';
  alamat: string;
  nisn: string;
}

export interface DataOrangTua {
  namaAyah: string;
  namaIbu: string;
  pekerjaanAyah: string;
  pekerjaanIbu: string;
  noWhatsapp: string;
  alamatOrangTua: string;
}

export interface DataPendidikan {
  namaSekolah: string;
  tahunLulus: string;
  nilaiRataRata: string;
}

export interface DataDokumen {
  akteLahir: string;
  kartuKeluarga: string;
  pasFoto: string;
  ijazah: string;
}

export interface FormPendaftaranData {
  santri: DataSantri;
  orangTua: DataOrangTua;
  pendidikan: DataPendidikan;
  dokumen: DataDokumen;
}

export const initialFormData: FormPendaftaranData = {
  santri: {
    namaLengkap: '',
    namaPanggilan: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    alamat: '',
    nisn: '',
  },
  orangTua: {
    namaAyah: '',
    namaIbu: '',
    pekerjaanAyah: '',
    pekerjaanIbu: '',
    noWhatsapp: '',
    alamatOrangTua: '',
  },
  pendidikan: {
    namaSekolah: '',
    tahunLulus: '',
    nilaiRataRata: '',
  },
  dokumen: {
    akteLahir: '',
    kartuKeluarga: '',
    pasFoto: '',
    ijazah: '',
  },
};
