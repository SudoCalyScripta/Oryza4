export type UserRole = 'Warga' | 'PIC' | 'Wakil PIC' | 'Bendahara';

export interface Resident {
    id: string;
    name: string;
    relation: string;
    phone?: string;
    avatar?: string;
}

export interface House {
    id: number | string;
    code: string;
    houseNumber: string;
    familyName: string;
    headOfFamily: string;
    residentsCount: number;
    status: 'active' | 'away' | 'renovation';
    statusLabel: string;
    residents: Resident[];
    notes?: string;
    favoriteCorner?: string;
    joinedYear: number;
    image: string;
    iuranStatus: 'Lunas' | 'Menunggu' | 'Jatuh Tempo';
    iuranCoverage?: string;
    stikerStatus: 'Lunas' | 'Belum Lunas';
    carDetails?: {
        model: string;
        plateNumber: string;
        price: number;
    };
}

export interface Announcement {
    id: string;
    tag: string;
    title: string;
    date: string;
    isoDate: string;
    summary: string;
    author: string;
    authorRole: string;
    isUrgent?: boolean;
    image?: string;
}

export interface CommunityEvent {
    id: string;
    day: string;
    month: string;
    year: string;
    time: string;
    title: string;
    location: string;
    description: string;
    attendeesCount: number;
    rsvpd?: boolean;
}

export interface ExpenseItem {
    id: string;
    title: string;
    category: 'Keamanan' | 'Kebersihan & Taman' | 'Fasilitas & Utilitas' | 'Sosial' | 'Kesehatan & Darurat' | 'Renovasi & Fasilitas' | 'Pengadaan Kendaraan';
    amount: number;
    date: string;
    pic: string;
    notes?: string;
}

export interface NeighborhoodReport {
    id: string;
    category: 'Lampu jalan' | 'Kebersihan' | 'Air' | 'Keamanan' | 'Fasilitas';
    categoryIcon: string;
    title: string;
    description: string;
    houseCode: string;
    date: string;
    status: 'Baru' | 'Dalam Proses' | 'Selesai';
    location: string;
}
