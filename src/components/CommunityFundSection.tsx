import React, { useState } from 'react';
import { EXPENSES_DATA, HOUSES_DATA } from '../data/mockData';
import { ShieldCheck, Eye, Car, Home, HeartPulse, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

export const CommunityFundSection: React.FC = () => {
    const [showFullRoster, setShowFullRoster] = useState(false);
    const [rosterTab, setRosterTab] = useState<'all' | 'mobil' | 'canopy' | 'sampah' | 'stiker'>('all');
    const totalFund = 5000000000;
    const targetHouses = HOUSES_DATA.length;
    const paidSampahHouses = HOUSES_DATA.filter((h) => h.iuranStatus === 'Lunas').length;
    const paidStikerHouses = HOUSES_DATA.filter((h) => h.stikerStatus === 'Lunas').length;

    const totalCarBudget = HOUSES_DATA.reduce((acc, h) => acc + (h.carDetails?.price || 0), 0);
    const averageCarPrice = Math.round(totalCarBudget / targetHouses);

    const formatRupiah = (val: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(val);
    };
    return (
        <section
            id="community-fund"
            className="relative py-28 md:py-36 px-6 md:px-12 bg-[#354936] text-[#F7F3E8] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
                    <div>
                        <div className="flex items-center gap-2.5 mb-3">
                            <span className="w-6 h-px bg-[#C8A96B]" />
                            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D8C28F] flex items-center gap-1.5">
                                <RiceGrainIcon className="w-3.5 h-3.5 text-[#C8A96B]" />
                                Transparansi Kas & Program Lingkungan
                            </span>
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl text-[#F7F3E8] font-normal leading-tight">
                            Kas Warga & Pengadaan
                        </h2>
                        <p className="mt-2 text-sm sm:text-base text-[#F7F3E8]/75 font-light max-w-2xl">
                            Pengelolaan kas yang transparan, termasuk realisasi pengadaan mobil ambulans siaga klaster (1 M), penambahan canopy tiap rumah (300 jt), dan alokasi unit mobil untuk 25 keluarga.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#D8C28F] font-mono px-4 py-2 rounded-full border border-[#D8C28F]/30 bg-[#C8A96B]/15 self-start md:self-auto">
                        <ShieldCheck className="w-4 h-4 text-[#C8A96B]" />
                        <span>Audit Finansial Terbuka 2026</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-300">
                                <HeartPulse className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8C28F] bg-[#C8A96B]/15 px-2.5 py-1 rounded-full border border-[#D8C28F]/20">
                                Kesehatan & Darurat
                            </span>
                        </div>
                        <h3 className="font-display text-lg text-white font-normal">Mobil Ambulans Siaga</h3>
                        <p className="text-xs text-[#F7F3E8]/65 mt-1 font-light leading-relaxed">
                            Armada ambulans emergensi 24 jam dengan oksigen medis dan tandu darurat untuk seluruh warga.
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-baseline justify-between">
                            <span className="text-[11px] text-[#F7F3E8]/60">Alokasi Paguyuban</span>
                            <span className="font-display text-xl text-[#D8C28F] font-normal">Rp 1.000.000.000</span>
                        </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                                <Home className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8C28F] bg-[#C8A96B]/15 px-2.5 py-1 rounded-full border border-[#D8C28F]/20">
                                Fasilitas 25 Rumah
                            </span>
                        </div>
                        <h3 className="font-display text-lg text-white font-normal">Penambahan Canopy Rumah</h3>
                        <p className="text-xs text-[#F7F3E8]/65 mt-1 font-light leading-relaxed">
                            Pemasangan canopy solarflat rangka baja ringan terstandar untuk kenyamanan 25 hunian.
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-baseline justify-between">
                            <span className="text-[11px] text-[#F7F3E8]/60">Total Anggaran (25 Unit)</span>
                            <span className="font-display text-xl text-[#D8C28F] font-normal">Rp 300.000.000</span>
                        </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                                <Car className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#D8C28F] bg-[#C8A96B]/15 px-2.5 py-1 rounded-full border border-[#D8C28F]/20">
                                25 Unit Kendaraan
                            </span>
                        </div>
                        <h3 className="font-display text-lg text-white font-normal">Mobil Setiap Keluarga</h3>
                        <p className="text-xs text-[#F7F3E8]/65 mt-1 font-light leading-relaxed">
                            Unit kendaraan keluarga terdata per rumah dengan variasi harga riil per hunian dan stiker klaster.
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-baseline justify-between">
                            <span className="text-[11px] text-[#F7F3E8]/60">Rata-rata / Rumah</span>
                            <span className="font-display text-xl text-[#D8C28F] font-normal">{formatRupiah(averageCarPrice)}</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
                    <div className="lg:col-span-5">
                        <div className="frost-glass-dark rounded-3xl p-8 sm:p-10 border border-[#D8C28F]/25 h-full flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8C28F] block mb-2">
                                    Saldo Kas Berjalan
                                </span>
                                <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F7F3E8] font-normal tracking-tight">
                                    {formatRupiah(totalFund)}
                                </div>
                                <p className="text-xs text-[#F7F3E8]/65 mt-3 font-light leading-relaxed">
                                    Saldo kas likuid paguyuban di rekening bersama Bank Mandiri atas nama Paguyuban Warga Cluster Oryza 4.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                                <div>
                                    <div className="flex items-center justify-between text-xs mb-1.5">
                                        <span className="text-white/80 font-medium">Iuran Sampah (September 2026)</span>
                                        <span className="font-semibold text-[#D8C28F]">
                                            {paidSampahHouses} / {targetHouses} Rumah ({Math.round((paidSampahHouses / targetHouses) * 100)}%)
                                        </span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#657A52] to-[#C8A96B] rounded-full transition-all duration-1000"
                                            style={{ width: `${(paidSampahHouses / targetHouses) * 100}%` }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between text-[11px] text-[#F7F3E8]/60 mt-1">
                                        <span>{paidSampahHouses} Rumah Lunas</span>
                                        <span className="text-amber-300/80">{targetHouses - paidSampahHouses} Belum (No. 7 & No. 14)</span>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="flex items-center justify-between text-xs mb-1.5">
                                        <span className="text-white/80 font-medium">Bayar Stiker Cluster (Rp 5.000)</span>
                                        <span className="font-semibold text-[#D8C28F]">
                                            {paidStikerHouses} / {targetHouses} Rumah ({Math.round((paidStikerHouses / targetHouses) * 100)}%)
                                        </span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#879477] to-[#D8C28F] rounded-full transition-all duration-1000"
                                            style={{ width: `${(paidStikerHouses / targetHouses) * 100}%` }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between text-[11px] text-[#F7F3E8]/60 mt-1">
                                        <span>{paidStikerHouses} Rumah Lunas</span>
                                        <span>{targetHouses - paidStikerHouses} Rumah Belum</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowFullRoster(!showFullRoster)}
                                    className="w-full mt-3 py-3 rounded-2xl border border-[#D8C28F]/40 hover:border-[#D8C28F] bg-[#C8A96B]/20 hover:bg-[#D8C28F]/30 text-xs font-semibold text-white hover:text-[#D8C28F] transition-all flex items-center justify-center gap-2 shadow-xs"
                                >
                                    <Eye className="w-4 h-4 text-[#C8A96B]" />
                                    <span>{showFullRoster ? 'Tutup Rincian Status & Mobil 25 Rumah' : 'Buka Rincian Mobil, Canopy & Iuran 25 Rumah'}</span>
                                    {showFullRoster ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="frost-glass-dark rounded-3xl p-8 sm:p-10 border border-[#D8C28F]/25 h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="font-display text-2xl text-white font-normal">
                                        Pengeluaran & Anggaran Paguyuban
                                    </h3>
                                    <p className="text-xs text-[#F7F3E8]/60 mt-0.5">
                                        Daftar alokasi belanja modal dan operasional klaster
                                    </p>
                                </div>
                                <span className="text-xs text-[#D8C28F] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                    {EXPENSES_DATA.length} Transaksi
                                </span>
                            </div>
                            <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
                                {EXPENSES_DATA.map((item) => (
                                    <div
                                        key={item.id}
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/10 hover:border-[#D8C28F]/50 transition-all duration-300"
                                    >
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-[10px] text-[#F7F3E8]/50 uppercase tracking-wider font-mono">
                                                <span className="text-[#D8C28F] font-medium">{item.category}</span>
                                                <span>•</span>
                                                <span>{item.date}</span>
                                            </div>
                                            <h4 className="text-sm font-medium text-white">
                                                {item.title}
                                            </h4>
                                            {item.notes && (
                                                <p className="text-xs text-[#F7F3E8]/65 line-clamp-1 font-light">
                                                    {item.notes}
                                                </p>
                                            )}
                                            <p className="text-[11px] text-[#F7F3E8]/60">PIC: {item.pic}</p>
                                        </div>
                                        <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
                                            <span className="font-display text-lg sm:text-xl text-[#D8C28F] font-normal block">
                                                - {formatRupiah(item.amount)}
                                            </span>
                                            <span className="text-[10px] text-[#879477] flex items-center sm:justify-end gap-1 mt-0.5">
                                                <CheckCircle2 className="w-3 h-3 text-[#879477]" />
                                                <span>Terverifikasi Paguyuban</span>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {showFullRoster && (
                    <div className="frost-glass-dark rounded-3xl p-6 sm:p-8 border border-[#D8C28F]/30 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
                            <div>
                                <h4 className="font-display text-2xl text-white font-normal flex items-center gap-2.5">
                                    <Car className="w-6 h-6 text-[#C8A96B]" />
                                    <span>Rincian Pembelian Mobil, Canopy & Status 25 Rumah</span>
                                </h4>
                                <p className="text-xs text-[#F7F3E8]/70 mt-1">
                                    Transparansi lengkap alokasi kendaraan per keluarga, canopy terpasang (Rp 300 jt total), serta iuran sampah & stiker 25 rumah.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/10 border border-white/10 text-xs self-start lg:self-auto">
                                <button
                                    onClick={() => setRosterTab('all')}
                                    className={`px-3.5 py-1.5 rounded-xl transition-all ${rosterTab === 'all'
                                            ? 'bg-[#C8A96B] text-[#252821] font-semibold shadow-xs'
                                            : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    Semua ({HOUSES_DATA.length})
                                </button>
                                <button
                                    onClick={() => setRosterTab('mobil')}
                                    className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${rosterTab === 'mobil'
                                            ? 'bg-[#C8A96B] text-[#252821] font-semibold shadow-xs'
                                            : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    <Car className="w-3.5 h-3.5" />
                                    <span>Mobil Tiap Rumah</span>
                                </button>
                                <button
                                    onClick={() => setRosterTab('canopy')}
                                    className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${rosterTab === 'canopy'
                                            ? 'bg-[#C8A96B] text-[#252821] font-semibold shadow-xs'
                                            : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    <Home className="w-3.5 h-3.5" />
                                    <span>Canopy Rumah</span>
                                </button>
                                <button
                                    onClick={() => setRosterTab('sampah')}
                                    className={`px-3.5 py-1.5 rounded-xl transition-all ${rosterTab === 'sampah'
                                            ? 'bg-[#C8A96B] text-[#252821] font-semibold shadow-xs'
                                            : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    Iuran Sampah
                                </button>
                                <button
                                    onClick={() => setRosterTab('stiker')}
                                    className={`px-3.5 py-1.5 rounded-xl transition-all ${rosterTab === 'stiker'
                                            ? 'bg-[#C8A96B] text-[#252821] font-semibold shadow-xs'
                                            : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    Stiker 5.000
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {HOUSES_DATA.map((h) => {
                                const isSampahPaid = h.iuranStatus === 'Lunas';
                                const isStikerPaid = h.stikerStatus === 'Lunas';
                                return (
                                    <div
                                        key={h.id}
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/50 hover:bg-white/10 flex flex-col justify-between text-xs transition-all space-y-3"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono text-xs font-bold text-[#D8C28F] px-2 py-0.5 rounded-md bg-white/10 border border-white/10">
                                                    {h.code}
                                                </span>
                                                <span className="text-[10px] text-white/60">{h.statusLabel}</span>
                                            </div>
                                            <span className="text-white font-medium text-sm block mt-1.5">
                                                {h.headOfFamily}
                                            </span>
                                        </div>
                                        {h.carDetails && (rosterTab === 'all' || rosterTab === 'mobil') && (
                                            <div className="p-2.5 rounded-xl bg-black/20 border border-white/10 space-y-1">
                                                <div className="flex items-center justify-between text-[11px]">
                                                    <span className="text-[#D8C28F] font-semibold flex items-center gap-1 truncate">
                                                        <Car className="w-3 h-3 shrink-0" />
                                                        <span className="truncate">{h.carDetails.model}</span>
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between text-[10px] text-[#F7F3E8]/60 pt-0.5">
                                                    <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-white/80">
                                                        {h.carDetails.plateNumber}
                                                    </span>
                                                    <span className="font-mono font-bold text-[#D8C28F] text-xs">
                                                        {formatRupiah(h.carDetails.price)}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                        {(rosterTab === 'all' || rosterTab === 'canopy') && (
                                            <div className="flex items-center justify-between text-[11px] p-2 rounded-xl bg-white/5 border border-white/10">
                                                <span className="text-white/60 flex items-center gap-1">
                                                    <Home className="w-3 h-3 text-[#C8A96B]" />
                                                    <span>Canopy Rumah:</span>
                                                </span>
                                                <span className="text-[10px] font-semibold text-[#879477] bg-[#657A52]/20 px-2 py-0.5 rounded-md border border-[#879477]/40">
                                                    Terpasang ✅
                                                </span>
                                            </div>
                                        )}
                                        {(rosterTab === 'all' || rosterTab === 'sampah' || rosterTab === 'stiker') && (
                                            <div className="space-y-1.5 pt-2 border-t border-white/10">
                                                {(rosterTab === 'all' || rosterTab === 'sampah') && (
                                                    <div className="flex items-center justify-between text-[11px]">
                                                        <span className="text-white/60">Sampah:</span>
                                                        <span
                                                            className={`px-2 py-0.5 rounded-md font-medium text-[10px] ${isSampahPaid
                                                                    ? 'bg-[#657A52]/70 text-[#D8C28F] border border-[#879477]/40'
                                                                    : 'bg-amber-900/60 text-amber-300 border border-amber-500/30'
                                                                }`}
                                                        >
                                                            {isSampahPaid
                                                                ? (h.iuranCoverage && h.iuranCoverage.includes('s/d')
                                                                    ? h.iuranCoverage.replace('Lunas ', '')
                                                                    : 'Lunas ✅')
                                                                : 'Belum'}
                                                        </span>
                                                    </div>
                                                )}
                                                {(rosterTab === 'all' || rosterTab === 'stiker') && (
                                                    <div className="flex items-center justify-between text-[11px]">
                                                        <span className="text-white/60">Stiker 5rb:</span>
                                                        <span
                                                            className={`px-2 py-0.5 rounded-md font-medium text-[10px] ${isStikerPaid
                                                                    ? 'bg-[#657A52]/70 text-[#D8C28F] border border-[#879477]/40'
                                                                    : 'bg-white/10 text-white/60 border border-white/10'
                                                                }`}
                                                        >
                                                            {isStikerPaid ? 'Lunas ✅' : 'Belum'}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
