import React from 'react';
import { MapPin } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

export const Footer: React.FC = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <footer className="relative bg-[#1D2B1E] text-[#F7F3E8] pt-20 pb-12 px-6 md:px-12 border-t border-[#354936]/40 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#354936]/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
                    <div className="md:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-14 h-14 flex items-center justify-center">
                                {/* Disesuaikan menggunakan import.meta.env.BASE_URL */}
                                <img
                                    src={`${import.meta.env.BASE_URL}assets/logo.png`}
                                    alt="Logo Oryza Family"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <span className="font-display text-2xl tracking-[0.2em] font-semibold text-[#F7F3E8] uppercase block leading-none">
                                    ORYZA 4
                                </span>
                                <span className="text-[10px] tracking-[0.25em] text-[#D8C28F] uppercase font-mono mt-1 flex items-center gap-1.5">
                                    <RiceGrainIcon className="w-3 h-3 text-[#C8A96B]" />
                                    Portal Warga Oryza 4
                                </span>
                            </div>
                        </div>
                        <p className="font-display text-xl sm:text-2xl text-[#F7F3E8]/90 font-light italic">
                            "25 Rumah. Satu Kebersamaan."
                        </p>
                        <p className="text-xs text-[#F7F3E8]/70 font-light leading-relaxed max-w-sm">
                            "Silih Asah, Silih Asih, Silih Asaan".
                        </p>
                        <div className="pt-2 flex items-center gap-2 text-xs text-[#F7F3E8]/60">
                            <MapPin className="w-3.5 h-3.5 text-[#C8A96B] shrink-0" />
                            <span>Gland Ciwastra Park2 Oryza 04</span>
                        </div>
                    </div>
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8C28F] mb-4">
                            Navigasi Warga
                        </h4>
                        <ul className="space-y-2.5 text-xs text-[#F7F3E8]/75">
                            <li>
                                <button
                                    onClick={() => scrollTo('hero')}
                                    className="hover:text-[#D8C28F] transition-colors"
                                >
                                    Beranda Utama
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollTo('neighbors')}
                                    className="hover:text-[#D8C28F] transition-colors"
                                >
                                    Data 25 Rumah Warga
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollTo('announcements')}
                                    className="hover:text-[#D8C28F] transition-colors"
                                >
                                    Pengumuman Warga
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollTo('events')}
                                    className="hover:text-[#D8C28F] transition-colors"
                                >
                                    Agenda Kegiatan Warga
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollTo('community-fund')}
                                    className="hover:text-[#D8C28F] transition-colors"
                                >
                                    Kas & Transparansi Dana
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollTo('lapor-lingkungan')}
                                    className="hover:text-[#D8C28F] transition-colors"
                                >
                                    Lapor Lingkungan
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-4 space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8C28F] mb-4">
                            Kontak Darurat 24 Jam
                        </h4>
                        <div className="space-y-3 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-between">
                                <div>
                                    <span className="font-medium text-white block">Pos Satpam Gerbang Utama</span>
                                    <span className="text-[11px] text-[#F7F3E8]/60">Siaga 24 Jam Non-stop</span>
                                </div>
                                <span className="font-mono text-[#D8C28F] text-xs font-semibold">
                                    0812-4400-0404
                                </span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-between">
                                <div>
                                    <span className="font-medium text-white block">PIC Paguyuban (Panji Kusumah)</span>
                                    <span className="text-[11px] text-[#F7F3E8]/60">Rumah No. 17</span>
                                </div>
                                <span className="font-mono text-[#F7F3E8]/85 text-xs">
                                    0819-3311-1717
                                </span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-between">
                                <div>
                                    <span className="font-medium text-white block">Wakil PIC (Fajar)</span>
                                    <span className="text-[11px] text-[#F7F3E8]/60">Rumah No. 19</span>
                                </div>
                                <span className="font-mono text-[#F7F3E8]/85 text-xs">
                                    0812-5566-1919
                                </span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-between">
                                <div>
                                    <span className="font-medium text-white block">Bendahara (Tiyahandayanis)</span>
                                    <span className="text-[11px] text-[#F7F3E8]/60">Rumah No. 10</span>
                                </div>
                                <span className="font-mono text-[#F7F3E8]/85 text-xs">
                                    0817-5544-1010
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F3E8]/60 font-light">
                    <p className="tracking-wide">
                        Portal Warga Oryza 4
                    </p>
                    <div className="flex items-center gap-1">
                        <span>Dikelola bersama oleh Warga Oryza 4</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};