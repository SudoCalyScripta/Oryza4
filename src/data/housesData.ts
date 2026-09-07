import { House } from '../types';

export const HOUSE_IMAGES = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
];

export const HOUSES_DATA: House[] = [
    {
        id: 1,
        code: 'No. 1',
        houseNumber: 'No. 1',
        familyName: 'Keluarga Bu Ria',
        headOfFamily: 'Bu Ria',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r1-1', name: 'Bu Ria', relation: 'Kepala Keluarga / Penghuni', phone: '0812-8811-0101' },
            { id: 'r1-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Penghuni tetap No. 1.',
        favoriteCorner: 'Teras depan & taman sudut',
        joinedYear: 2021,
        image: HOUSE_IMAGES[0],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Belum Lunas',
        carDetails: {
            model: 'Toyota Yaris Cross HEV',
            plateNumber: 'B 1041 ORZ',
            price: 440600000
        }
    },
    {
        id: 2,
        code: 'No. 2',
        houseNumber: 'No. 2',
        familyName: 'Keluarga Bu Arum',
        headOfFamily: 'Bu Arum',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r2-1', name: 'Bu Arum', relation: 'Kepala Keluarga / Penghuni', phone: '0811-9234-0202' },
            { id: 'r2-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Penghuni tetap No. 2.',
        favoriteCorner: 'Balkon lantai 2',
        joinedYear: 2021,
        image: HOUSE_IMAGES[1],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Belum Lunas',
        carDetails: {
            model: 'Honda HR-V e:HEV RS',
            plateNumber: 'B 1042 ORZ',
            price: 465800000
        }
    },
    {
        id: '2A',
        code: 'No. 2A',
        houseNumber: 'No. 2A',
        familyName: 'Keluarga Pak Arman',
        headOfFamily: 'Pak Arman',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r2A-1', name: 'Pak Arman', relation: 'Kepala Keluarga', phone: '0813-1122-0203' },
            { id: 'r2A-2', name: 'Istri', relation: 'Istri' }
        ],
        notes: 'Penghuni tetap No. 2A.',
        favoriteCorner: 'Halaman depan asri',
        joinedYear: 2022,
        image: HOUSE_IMAGES[2],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Mitsubishi Xforce Ultimate',
            plateNumber: 'B 1043 ORZ',
            price: 419100000
        }
    },
    {
        id: 3,
        code: 'No. 3',
        houseNumber: 'No. 3',
        familyName: 'Keluarga Bu Nadia & Pak Yoga',
        headOfFamily: 'Bu Nadia / Pak Yoga',
        residentsCount: 4,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r3-1', name: 'Pak Yoga', relation: 'Kepala Keluarga', phone: '0812-3344-0303' },
            { id: 'r3-2', name: 'Bu Nadia', relation: 'Istri' },
            { id: 'r3-3', name: 'Anak', relation: 'Anak' }
        ],
        notes: 'Penghuni tetap No. 3.',
        favoriteCorner: 'Teras samping & taman hidroponik',
        joinedYear: 2021,
        image: HOUSE_IMAGES[3],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Hyundai Creta Prime IVT',
            plateNumber: 'B 1044 ORZ',
            price: 408300000
        }
    },
    {
        id: 5,
        code: 'No. 5',
        houseNumber: 'No. 5',
        familyName: 'Keluarga Bu Dina',
        headOfFamily: 'Bu Dina',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r5-1', name: 'Bu Dina', relation: 'Kepala Keluarga / Penghuni', phone: '0815-7766-0505' },
            { id: 'r5-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Penghuni tetap No. 5.',
        favoriteCorner: 'Teras tanaman hias',
        joinedYear: 2022,
        image: HOUSE_IMAGES[4],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Wuling BinguoEV 410km',
            plateNumber: 'B 1045 ORZ',
            price: 372000000
        }
    },
    {
        id: 6,
        code: 'No. 6',
        houseNumber: 'No. 6',
        familyName: 'Keluarga Pak Tanaya',
        headOfFamily: 'Pak Tanaya',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r6-1', name: 'Pak Tanaya', relation: 'Kepala Keluarga', phone: '0818-4455-0606' },
            { id: 'r6-2', name: 'Istri', relation: 'Istri' }
        ],
        notes: 'Iuran sampah telah lunas di muka sampai dengan Oktober 2026. Stiker cluster lunas.',
        favoriteCorner: 'Ruang kerja & teras santai',
        joinedYear: 2020,
        image: HOUSE_IMAGES[5],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas s/d Oktober 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Toyota Innova Zenix Q Hybrid',
            plateNumber: 'B 1046 ORZ',
            price: 625000000
        }
    },
    {
        id: 7,
        code: 'No. 7',
        houseNumber: 'No. 7',
        familyName: 'Keluarga Pak Azis',
        headOfFamily: 'Pak Azis',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r7-1', name: 'Pak Azis', relation: 'Kepala Keluarga', phone: '0819-2233-0707' },
            { id: 'r7-2', name: 'Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Menunggu konfirmasi pembayaran iuran sampah September 2026 & stiker cluster.',
        favoriteCorner: 'Halaman depan',
        joinedYear: 2022,
        image: HOUSE_IMAGES[0],
        iuranStatus: 'Menunggu',
        iuranCoverage: 'Belum Lunas (September 2026)',
        stikerStatus: 'Belum Lunas',
        carDetails: {
            model: 'Mazda CX-3 Pro Edition',
            plateNumber: 'B 1047 ORZ',
            price: 399900000
        }
    },
    {
        id: 8,
        code: 'No. 8',
        houseNumber: 'No. 8',
        familyName: 'Keluarga Bu Sefti',
        headOfFamily: 'Bu Sefti',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r8-1', name: 'Bu Sefti', relation: 'Kepala Keluarga / Penghuni', phone: '0812-6677-0808' },
            { id: 'r8-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas. Stiker cluster belum lunas.',
        favoriteCorner: 'Teras depan teduh',
        joinedYear: 2021,
        image: HOUSE_IMAGES[1],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Belum Lunas',
        carDetails: {
            model: 'Chery Omoda 5 GT AWD',
            plateNumber: 'B 1048 ORZ',
            price: 488800000
        }
    },
    {
        id: 9,
        code: 'No. 9',
        houseNumber: 'No. 9',
        familyName: 'Keluarga Bu Indri',
        headOfFamily: 'Bu Indri',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r9-1', name: 'Bu Indri', relation: 'Kepala Keluarga / Penghuni', phone: '0813-8899-0909' },
            { id: 'r9-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas. Stiker cluster belum lunas.',
        favoriteCorner: 'Taman samping rumah',
        joinedYear: 2022,
        image: HOUSE_IMAGES[2],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Belum Lunas',
        carDetails: {
            model: 'Suzuki Grand Vitara Hybrid',
            plateNumber: 'B 1049 ORZ',
            price: 389400000
        }
    },
    {
        id: 10,
        code: 'No. 10',
        houseNumber: 'No. 10',
        familyName: 'Keluarga Tiyahandayanis',
        headOfFamily: 'Tiyahandayanis',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r10-1', name: 'Tiyahandayanis', relation: 'Bendahara Paguyuban / Penghuni', phone: '0817-5544-1010' },
            { id: 'r10-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas & stiker cluster lunas.',
        favoriteCorner: 'Balkon atas',
        joinedYear: 2021,
        image: HOUSE_IMAGES[3],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'BYD Atto 3 Superior Extended',
            plateNumber: 'B 1050 ORZ',
            price: 515000000
        }
    },
    {
        id: 11,
        code: 'No. 11',
        houseNumber: 'No. 11',
        familyName: 'Keluarga Bu Ghina & Pak Fahmi',
        headOfFamily: 'Bu Ghina / Pak Fahmi',
        residentsCount: 4,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r11-1', name: 'Pak Fahmi', relation: 'Kepala Keluarga', phone: '0812-9900-1111' },
            { id: 'r11-2', name: 'Bu Ghina', relation: 'Istri' }
        ],
        notes: 'Iuran sampah September 2026 lunas & stiker cluster lunas.',
        favoriteCorner: 'Teras depan asri',
        joinedYear: 2021,
        image: HOUSE_IMAGES[4],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Honda WR-V RS Sensing',
            plateNumber: 'B 1051 ORZ',
            price: 318500000
        }
    },
    {
        id: '11A',
        code: 'No. 11A',
        houseNumber: 'No. 11A',
        familyName: 'Keluarga Pak Arwan',
        headOfFamily: 'Pak Arwan',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r11A-1', name: 'Pak Arwan', relation: 'Kepala Keluarga', phone: '0811-3322-1112' },
            { id: 'r11A-2', name: 'Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas. Stiker cluster belum lunas.',
        favoriteCorner: 'Teras samping',
        joinedYear: 2022,
        image: HOUSE_IMAGES[5],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Belum Lunas',
        carDetails: {
            model: 'Toyota Fortuner 2.8 VRZ GR',
            plateNumber: 'B 1052 ORZ',
            price: 645000000
        }
    },
    {
        id: 12,
        code: 'No. 12',
        houseNumber: 'No. 12',
        familyName: 'Keluarga Bu Riri',
        headOfFamily: 'Bu Riri',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r12-1', name: 'Bu Riri', relation: 'Kepala Keluarga / Penghuni', phone: '0813-7744-1212' },
            { id: 'r12-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas & stiker cluster lunas.',
        favoriteCorner: 'Taman depan & kolam hias',
        joinedYear: 2021,
        image: HOUSE_IMAGES[0],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Hyundai Ioniq 5 Signature Long',
            plateNumber: 'B 1053 ORZ',
            price: 782000000
        }
    },
    {
        id: 14,
        code: 'No. 14',
        houseNumber: 'No. 14',
        familyName: 'Keluarga Pak Aldy',
        headOfFamily: 'Pak Aldy',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r14-1', name: 'Pak Aldy', relation: 'Kepala Keluarga', phone: '0818-6655-1414' },
            { id: 'r14-2', name: 'Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Stiker cluster lunas. Menunggu konfirmasi pembayaran iuran sampah September 2026.',
        favoriteCorner: 'Halaman depan',
        joinedYear: 2023,
        image: HOUSE_IMAGES[1],
        iuranStatus: 'Menunggu',
        iuranCoverage: 'Belum Lunas (September 2026)',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Kia Sonet Premiere iVT',
            plateNumber: 'B 1054 ORZ',
            price: 346000000
        }
    },
    {
        id: 15,
        code: 'No. 15',
        houseNumber: 'No. 15',
        familyName: 'Keluarga Bu Salsa & Nova',
        headOfFamily: 'Bu Salsa / Nova',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r15-1', name: 'Bu Salsa', relation: 'Kepala Keluarga / Penghuni', phone: '0812-4411-1515' },
            { id: 'r15-2', name: 'Nova', relation: 'Anggota Keluarga' }
        ],
        notes: 'Iuran sampah telah lunas di muka sampai dengan November 2026. Stiker cluster belum lunas.',
        favoriteCorner: 'Balkon atas menghadap taman',
        joinedYear: 2022,
        image: HOUSE_IMAGES[2],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas s/d November 2026',
        stikerStatus: 'Belum Lunas',
        carDetails: {
            model: 'Mitsubishi Pajero Sport Dakar',
            plateNumber: 'B 1055 ORZ',
            price: 662000000
        }
    },
    {
        id: 16,
        code: 'No. 16',
        houseNumber: 'No. 16',
        familyName: 'Keluarga Pak Anjas',
        headOfFamily: 'Pak Anjas',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r16-1', name: 'Pak Anjas', relation: 'Kepala Keluarga', phone: '0813-8822-1616' },
            { id: 'r16-2', name: 'Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah telah lunas di muka sampai dengan Oktober 2026. Stiker cluster lunas.',
        favoriteCorner: 'Teras depan',
        joinedYear: 2021,
        image: HOUSE_IMAGES[3],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas s/d Oktober 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Toyota Corolla Cross Hybrid',
            plateNumber: 'B 1056 ORZ',
            price: 540900000
        }
    },
    {
        id: 17,
        code: 'No. 17',
        houseNumber: 'No. 17',
        familyName: 'Keluarga Panji Kusumah',
        headOfFamily: 'Panji Kusumah',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r17-1', name: 'Panji Kusumah', relation: 'PIC Paguyuban / Kepala Keluarga', phone: '0819-3311-1717' },
            { id: 'r17-2', name: 'Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas & stiker cluster lunas.',
        favoriteCorner: 'Teras samping',
        joinedYear: 2021,
        image: HOUSE_IMAGES[4],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Toyota Camry Hybrid Premium',
            plateNumber: 'B 1057 ORZ',
            price: 798000000
        }
    },
    {
        id: 18,
        code: 'No. 18',
        houseNumber: 'No. 18',
        familyName: 'Keluarga Bu Hani',
        headOfFamily: 'Bu Hani',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r18-1', name: 'Bu Hani', relation: 'Kepala Keluarga / Penghuni', phone: '0811-7788-1818' },
            { id: 'r18-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas & stiker cluster lunas.',
        favoriteCorner: 'Taman depan & teras bunga',
        joinedYear: 2021,
        image: HOUSE_IMAGES[5],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Nissan Kicks e-POWER',
            plateNumber: 'B 1058 ORZ',
            price: 519000000
        }
    },
    {
        id: 19,
        code: 'No. 19',
        houseNumber: 'No. 19',
        familyName: 'Keluarga Fajar & Bu Jersie',
        headOfFamily: 'Fajar / Bu Jersie',
        residentsCount: 4,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r19-1', name: 'Fajar', relation: 'Wakil PIC / Kepala Keluarga', phone: '0812-5566-1919' },
            { id: 'r19-2', name: 'Bu Jersie', relation: 'Istri' }
        ],
        notes: 'Iuran sampah telah lunas di muka sampai dengan Oktober 2026. Stiker cluster lunas (Pak Fajar).',
        favoriteCorner: 'Gazebo halaman dalam',
        joinedYear: 2022,
        image: HOUSE_IMAGES[0],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas s/d Oktober 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Hyundai Stargazer X Prime',
            plateNumber: 'B 1059 ORZ',
            price: 341400000
        }
    },
    {
        id: 20,
        code: 'No. 20',
        houseNumber: 'No. 20',
        familyName: 'Keluarga Bu Iva',
        headOfFamily: 'Bu Iva',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r20-1', name: 'Bu Iva', relation: 'Kepala Keluarga / Penghuni', phone: '0819-8877-2020' },
            { id: 'r20-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas & stiker cluster lunas.',
        favoriteCorner: 'Teras depan santai',
        joinedYear: 2021,
        image: HOUSE_IMAGES[1],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Honda CR-V RS e:HEV',
            plateNumber: 'B 1060 ORZ',
            price: 814500000
        }
    },
    {
        id: 21,
        code: 'No. 21',
        houseNumber: 'No. 21',
        familyName: 'Keluarga Bu Talitha',
        headOfFamily: 'Bu Talitha',
        residentsCount: 4,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r21-1', name: 'Bu Talitha', relation: 'Kepala Keluarga / Penghuni', phone: '0812-1133-2121' },
            { id: 'r21-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Kavling No. 21 (gabung No. 23). Iuran sampah lunas di muka s/d Desember 2027! Stiker cluster lunas.',
        favoriteCorner: 'Taman asri sambung kavling',
        joinedYear: 2020,
        image: HOUSE_IMAGES[2],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas s/d Desember 2027',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'BYD Seal Premium Extended',
            plateNumber: 'B 1061 ORZ',
            price: 629000000
        }
    },
    {
        id: 22,
        code: 'No. 22',
        houseNumber: 'No. 22',
        familyName: 'Keluarga Pak Naufal',
        headOfFamily: 'Pak Naufal',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r22-1', name: 'Pak Naufal', relation: 'Kepala Keluarga', phone: '0813-5566-2222' },
            { id: 'r22-2', name: 'Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah telah lunas di muka sampai dengan Oktober 2026. Stiker cluster belum lunas.',
        favoriteCorner: 'Halaman rumput terbuka',
        joinedYear: 2023,
        image: HOUSE_IMAGES[3],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas s/d Oktober 2026',
        stikerStatus: 'Belum Lunas',
        carDetails: {
            model: 'Mazda CX-5 Kuro Edition',
            plateNumber: 'B 1062 ORZ',
            price: 618800000
        }
    },
    {
        id: 23,
        code: 'No. 23',
        houseNumber: 'No. 23',
        familyName: 'Keluarga Bu Talitha',
        headOfFamily: 'Bu Talitha',
        residentsCount: 4,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r23-1', name: 'Bu Talitha', relation: 'Kepala Keluarga / Penghuni', phone: '0812-1133-2123' },
            { id: 'r23-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Kavling No. 23 (gabung No. 21). Iuran sampah lunas di muka s/d Desember 2027! Stiker cluster lunas.',
        favoriteCorner: 'Courtyard tengah kavling gabung',
        joinedYear: 2020,
        image: HOUSE_IMAGES[1],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas s/d Desember 2027',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Mini Cooper 3-Door S',
            plateNumber: 'B 1063 ORZ',
            price: 895000000
        }
    },
    {
        id: 24,
        code: 'No. 24',
        houseNumber: 'No. 24',
        familyName: 'Keluarga Bu Marita',
        headOfFamily: 'Bu Marita',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r24-1', name: 'Bu Marita', relation: 'Kepala Keluarga / Penghuni', phone: '0811-9988-2424' },
            { id: 'r24-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas & stiker cluster lunas.',
        favoriteCorner: 'Teras depan bunga tabebuya',
        joinedYear: 2021,
        image: HOUSE_IMAGES[4],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Toyota Raize 1.0 Turbo GR Sport',
            plateNumber: 'B 1064 ORZ',
            price: 305100000
        }
    },
    {
        id: 25,
        code: 'No. 25',
        houseNumber: 'No. 25',
        familyName: 'Keluarga Bu Riska',
        headOfFamily: 'Bu Riska',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r25-1', name: 'Bu Riska', relation: 'Kepala Keluarga / Penghuni', phone: '0812-7711-2525' },
            { id: 'r25-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas & stiker cluster lunas.',
        favoriteCorner: 'Courtyard tengah terbuka',
        joinedYear: 2021,
        image: HOUSE_IMAGES[5],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'Wuling Almaz Hybrid',
            plateNumber: 'B 1065 ORZ',
            price: 476000000
        }
    },
    {
        id: 26,
        code: 'No. 26',
        houseNumber: 'No. 26',
        familyName: 'Keluarga Bu Lia',
        headOfFamily: 'Bu Lia',
        residentsCount: 3,
        status: 'active',
        statusLabel: 'Penghuni Tetap',
        residents: [
            { id: 'r26-1', name: 'Bu Lia', relation: 'Kepala Keluarga / Penghuni', phone: '0815-6677-2626' },
            { id: 'r26-2', name: 'Anggota Keluarga', relation: 'Keluarga' }
        ],
        notes: 'Iuran sampah September 2026 lunas & stiker cluster lunas.',
        favoriteCorner: 'Teras depan cul-de-sac ujung',
        joinedYear: 2021,
        image: HOUSE_IMAGES[0],
        iuranStatus: 'Lunas',
        iuranCoverage: 'Lunas September 2026',
        stikerStatus: 'Lunas',
        carDetails: {
            model: 'MG 4 EV Magnify i-SMART',
            plateNumber: 'B 1066 ORZ',
            price: 423000000
        }
    }
];
