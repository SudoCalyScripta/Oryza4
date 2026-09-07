import { Announcement, CommunityEvent, ExpenseItem, NeighborhoodReport } from '../types';

export { HOUSES_DATA, HOUSE_IMAGES } from './housesData';

// Curated high quality architecture imagery
export const ARCHITECTURE_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
  introduction: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
  clubhouse: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  garden: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
  pathway: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
  evening: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
};

export const ANNOUNCEMENTS_DATA: Announcement[] = [
  {
    id: 'ann-1',
    tag: 'KEGIATAN BERSAMA',
    title: 'Gotong Royong Kebersihan & Peremajaan Jalur Hijau Oryza 4',
    date: '13 September 2026',
    isoDate: '2026-09-13',
    summary: 'Persiapan kegiatan kebersihan area bersama 25 rumah menjelang pergantian musim. Pembersihan drainase, perapihan dahan tabebuya, dan silaturahmi sarapan bersama warga.',
    author: 'Panji Kusumah',
    authorRole: 'PIC Paguyuban (No. 17)',
    isUrgent: true,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ann-2',
    tag: 'FASILITAS & KEAMANAN',
    title: 'Distribusi Stiker Resmi Kendaraan Cluster (Rp 5.000) & CCTV 4K',
    date: '02 September 2026',
    isoDate: '2026-09-02',
    summary: 'Stiker identitas resmi akses gerbang cluster Oryza 4 (iuran Rp 5.000) telah didistribusikan kepada 18 rumah yang sudah lunas. Bagi 8 rumah yang belum, mohon konfirmasi ke pengurus.',
    author: 'Fajar',
    authorRole: 'Wakil PIC (No. 19)',
    isUrgent: false
  },
  {
    id: 'ann-3',
    tag: 'KESEHATAN LINGKUNGAN',
    title: 'Jadwal Fogging Botanical Ramah Lingkungan & Pemilahan Sampah',
    date: '28 Agustus 2026',
    isoDate: '2026-08-28',
    summary: 'Bekerja sama dengan Puskesmas setempat, fogging botanical water-based akan dilaksanakan Sabtu pagi. Pembayaran iuran sampah September 2026 telah mencapai 24 rumah (92%).',
    author: 'Tiyahandayanis',
    authorRole: 'Bendahara Paguyuban (No. 10)',
    isUrgent: false
  }
];

export const EVENTS_DATA: CommunityEvent[] = [
  {
    id: 'evt-1',
    day: '13',
    month: 'SEP',
    year: '2026',
    time: '07:00 - 10:30 WIB',
    title: 'Gotong Royong & Kerja Bakti Oryza 4',
    location: 'Jalur Utama & Gazebo Komunal',
    description: 'Pembersihan saluran air, perapihan tanaman pedestrian, dan sarapan bubur ayam bersama warga.',
    attendeesCount: 22,
    rsvpd: true
  },
  {
    id: 'evt-2',
    day: '20',
    month: 'SEP',
    year: '2026',
    time: '19:30 - 21:00 WIB',
    title: 'Musyawarah Warga Triwulan III (Laporan Kas & Stiker)',
    location: 'Gazebo Utama Oryza 4 & Hybrid Zoom',
    description: 'Musyawarah laporan kas bulanan, rekapitulasi iuran sampah & stiker 5.000, serta evaluasi satpam gerbang.',
    attendeesCount: 19,
    rsvpd: false
  },
  {
    id: 'evt-3',
    day: '04',
    month: 'OCT',
    year: '2026',
    time: '16:00 - 20:00 WIB',
    title: 'Ramah Tamah Warga & Makan Sore Bersama',
    location: 'Courtyard Tengah & Area Taman Rumput',
    description: 'Ajang ramah tamah hangat 25 keluarga Oryza 4 & pentas mini anak-anak warga.',
    attendeesCount: 24,
    rsvpd: true
  },
  {
    id: 'evt-4',
    day: '18',
    month: 'OCT',
    year: '2026',
    time: '08:30 - 11:00 WIB',
    title: 'Pelatihan Kompos Mandiri Bersama Warga',
    location: 'Kebun Kompos Selatan',
    description: 'Belajar teknik mengolah sisa organik rumah tangga menjadi pupuk tanaman hidroponik dan kebun.',
    attendeesCount: 14,
    rsvpd: false
  }
];

export const EXPENSES_DATA: ExpenseItem[] = [
  {
    id: 'exp-ambulan',
    title: 'Pembelian Mobil Ambulans Siaga Warga Oryza 4 (1 M)',
    category: 'Kesehatan & Darurat',
    amount: 1000000000,
    date: '05 Sep 2026',
    pic: 'PIC (Panji Kusumah)',
    notes: 'Unit mobil ambulans emergensi lengkap fasilitas medis darurat untuk warga 24 jam.'
  },
  {
    id: 'exp-canopy',
    title: 'Penambahan Canopy Tiap Rumah (25 Unit @ Rp 12.000.000)',
    category: 'Renovasi & Fasilitas',
    amount: 300000000,
    date: '04 Sep 2026',
    pic: 'Wakil PIC (Fajar)',
      notes: 'Pemasangan kanopi seragam bahan solarflat & baja ringan untuk seluruh 25 rumah.'
  },
  {
    id: 'exp-mobil-keluarga',
    title: 'Program Pembelian Mobil Setiap Keluarga (25 Unit Mobil Warga)',
    category: 'Pengadaan Kendaraan',
    amount: 13629100000,
    date: '02 Sep 2026',
    pic: 'Bendahara (Tiyahandayanis)',
    notes: 'Rincian unit mobil dan harga per rumah tertera lengkap di tabel rincian warga.'
  },
  {
    id: 'exp-1',
    title: 'Honor Petugas Keamanan 24 Jam (3 Personil)',
    category: 'Keamanan',
    amount: 5400000,
    date: '01 Sep 2026',
    pic: 'Bendahara (Tiyahandayanis)'
  },
  {
    id: 'exp-2',
    title: 'Retribusi Pengangkutan Sampah Mandiri Cluster',
    category: 'Kebersihan & Taman',
    amount: 1750000,
    date: '03 Sep 2026',
    pic: 'PIC (Panji Kusumah)'
  },
  {
    id: 'exp-3',
    title: 'Pengadaan Stiker Hologram Akses Kendaraan Cluster (Rp 5.000)',
    category: 'Fasilitas & Utilitas',
    amount: 150000,
    date: '29 Agu 2026',
    pic: 'Wakil PIC (Fajar)'
  },
  {
    id: 'exp-4',
    title: 'Service Rutin & Kuras Filter Pompa Booster Utama',
    category: 'Fasilitas & Utilitas',
    amount: 650000,
    date: '25 Agu 2026',
    pic: 'Bendahara (Tiyahandayanis)'
  },
  {
    id: 'exp-5',
    title: 'Konsumsi Gotong Royong & Snack Pos Ronda',
    category: 'Sosial',
    amount: 430000,
    date: '18 Agu 2026',
    pic: 'Ibu-ibu Paguyuban'
  }
];

export const INITIAL_REPORTS: NeighborhoodReport[] = [
  {
    id: 'rep-1',
    category: 'Lampu jalan',
    categoryIcon: '💡',
    title: 'Lampu solar LED dekat tikungan barat berkedip saat malam',
    description: 'Sensor otomatis menyala tetapi cahaya redup dan kadang berkedip setelah jam 23.00.',
    houseCode: 'No. 07',
    date: '04 Sep 2026',
    status: 'Dalam Proses',
    location: 'Depan rumah No. 07 / tikungan barat'
  },
  {
    id: 'rep-2',
    category: 'Kebersihan',
    categoryIcon: '🧹',
    title: 'Daun gugur menumpuk di saluran samping gazebo',
    description: 'Saluran air sedikit melambat alirannya karena tertutup guguran daun mangga.',
    houseCode: 'No. 12',
    date: '05 Sep 2026',
    status: 'Baru',
    location: 'Samping Gazebo Komunal'
  },
  {
    id: 'rep-3',
    category: 'Fasilitas',
    categoryIcon: '🏠',
    title: 'Engsel pintu gerbang pejalan kaki perlu pelumas',
    description: 'Pintu kecil akses pejalan kaki mengeluarkan decit saat dibuka pagi hari.',
    houseCode: 'No. 02',
    date: '31 Agu 2026',
    status: 'Selesai',
    location: 'Pos Gerbang Utama'
  }
];
