import React, { useState } from 'react';
import { ANNOUNCEMENTS_DATA, ARCHITECTURE_IMAGES } from '../data/mockData';
import { Bell, Calendar, User, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

export const AnnouncementsSection: React.FC = () => {
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(ANNOUNCEMENTS_DATA[0]);
    const [hasAcknowledged, setHasAcknowledged] = useState<Record<string, boolean>>({ 'ann-1': true });
    const toggleAcknowledge = (id: string) => {
        setHasAcknowledged((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    return (
        <section
            id="announcements"
            className="relative py-28 md:py-36 px-6 md:px-12 bg-[#354936] text-[#F7F3E8] overflow-hidden"
        >
            <div
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                style={{
                    backgroundImage: `url(${ARCHITECTURE_IMAGES.evening})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#354936] via-[#354936]/90 to-[#354936] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2.5 mb-3">
                            <span className="w-6 h-px bg-[#C8A96B]" />
                            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D8C28F] flex items-center gap-1.5">
                                <RiceGrainIcon className="w-3.5 h-3.5 text-[#C8A96B]" />
                                Papan Pengumuman Warga
                            </span>
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl text-[#F7F3E8] font-normal leading-tight">
                            Kabar dari Lingkungan
                        </h2>
                        <p className="mt-2 text-sm sm:text-base text-[#F7F3E8]/75 font-light max-w-lg">
                            Kabar penting, agenda gotong royong, dan pembaruan fasilitas langsung dari jajaran pengurus Oryza 4.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-[#F7F3E8]/60">Diperbarui berkala untuk 25 rumah</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                    <div className="lg:col-span-7">
                        <div className="frost-glass-dark rounded-3xl p-8 sm:p-10 border border-[#D8C28F]/25 shadow-2xl relative overflow-hidden group">
                            {/* Top Accent Badge */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A96B]/20 text-[#D8C28F] border border-[#D8C28F]/30 text-[11px] font-semibold tracking-widest uppercase font-mono">
                                    <Bell className="w-3 h-3 text-[#C8A96B]" />
                                    <span>{selectedAnnouncement.tag}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-[#F7F3E8]/60">
                                    <Calendar className="w-3.5 h-3.5 text-[#C8A96B]" />
                                    <span>{selectedAnnouncement.date}</span>
                                </div>
                            </div>
                            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#F7F3E8] font-normal leading-snug mb-5">
                                {selectedAnnouncement.title}
                            </h3>
                            <p className="text-sm sm:text-base text-[#F7F3E8]/85 leading-relaxed font-light mb-8">
                                {selectedAnnouncement.summary}
                            </p>
                            {selectedAnnouncement.image && (
                                <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden mb-6 border border-white/10">
                                    <img
                                        src={selectedAnnouncement.image}
                                        alt={selectedAnnouncement.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                </div>
                            )}
                            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#C8A96B]">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold text-white block">{selectedAnnouncement.author}</span>
                                        <span className="text-[11px] text-[#F7F3E8]/60">{selectedAnnouncement.authorRole}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => toggleAcknowledge(selectedAnnouncement.id)}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${hasAcknowledged[selectedAnnouncement.id]
                                            ? 'bg-[#657A52]/70 border border-[#D8C28F]/40 text-[#D8C28F]'
                                            : 'bg-[#C8A96B] hover:bg-[#D8C28F] text-[#252821] hover:shadow-[0_0_15px_rgba(216,194,143,0.4)]'
                                        }`}
                                >
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>
                                        {hasAcknowledged[selectedAnnouncement.id]
                                            ? 'Sudah Dibaca Warga'
                                            : 'Konfirmasi Sudah Membaca'}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 space-y-4">
                        <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D8C28F] mb-2 flex items-center gap-1.5">
                            <RiceGrainIcon className="w-3 h-3 text-[#C8A96B]" />
                            Pengumuman Lainnya
                        </h4>
                        {ANNOUNCEMENTS_DATA.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedAnnouncement(item)}
                                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border group ${selectedAnnouncement.id === item.id
                                        ? 'bg-[#657A52]/50 border-[#D8C28F]/60 shadow-lg'
                                        : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-[#D8C28F]/60 hover:shadow-[0_10px_25px_rgba(216,194,143,0.15)]'
                                    }`}
                            >
                                <div className="flex items-center justify-between text-[10px] text-white/60 uppercase tracking-wider mb-2 font-mono">
                                    <span>{item.tag}</span>
                                    <span>{item.date}</span>
                                </div>
                                <h5 className="font-display text-lg text-white font-normal line-clamp-2 leading-snug group-hover:text-[#D8C28F] transition-colors">
                                    {item.title}
                                </h5>
                                <p className="mt-2 text-xs text-[#F7F3E8]/75 line-clamp-2 leading-relaxed">
                                    {item.summary}
                                </p>
                                <div className="mt-3 flex items-center justify-between text-[11px] text-[#D8C28F]">
                                    <span>Oleh {item.author}</span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        ))}
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-[#F7F3E8]/80">
                            <ShieldAlert className="w-4 h-4 text-[#C8A96B] shrink-0 mt-0.5" />
                            <div>
                                <strong className="text-white font-medium block">Pemberitahuan Tamu & Ekspedisi:</strong>
                                Kurir paket diharapkan meletakkan barang di pos keamanan gerbang jika penghuni sedang tidak di tempat.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
