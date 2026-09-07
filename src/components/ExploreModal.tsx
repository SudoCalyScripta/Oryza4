import React from 'react';
import { ARCHITECTURE_IMAGES } from '../data/mockData';
import { X, Compass, Trees, Shield, SunMedium, PhoneCall, Sparkles } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

interface ExploreModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ExploreModal: React.FC<ExploreModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            id="explore-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-2xl animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div
                id="explore-modal-card"
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl bg-[#354936] rounded-3xl border border-[#D8C28F]/25 text-[#F7F3E8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300"
            >
                {/* Header with image */}
                <div className="relative h-48 sm:h-56 w-full shrink-0">
                    <img
                        src={ARCHITECTURE_IMAGES.clubhouse}
                        alt="Cluster Oryza 4 Architecture Overview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#354936] via-[#354936]/40 to-transparent" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-[#D8C28F]/20 border border-white/20 hover:border-[#D8C28F]/60 text-white hover:text-[#D8C28F] flex items-center justify-center transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-4 left-6 right-6">
                        <span className="text-[10px] font-mono tracking-widest text-[#D8C28F] uppercase font-semibold flex items-center gap-1.5">
                            <RiceGrainIcon className="w-3 h-3 text-[#C8A96B]" />
                            Kawasan & Tata Ruang
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl text-white font-normal">
                            Eksplorasi Cluster Oryza 4
                        </h3>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#F7F3E8]/85 font-light leading-relaxed">
                    <p>
                        Cluster Oryza 4 didesain dengan pendekatan arsitektur tropis modern berkelanjutan. Terdiri dari tepat 26 unit hunian eksklusif yang mengelilingi ruang terbuka hijau sentral, memaksimalkan pencahayaan alami, sirkulasi angin silang, dan rasa aman bagi keluarga.
                    </p>

                    {/* 4 Pillars of Oryza 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 hover:bg-white/10 transition-all duration-300">
                            <div className="w-8 h-8 rounded-xl bg-[#657A52]/50 flex items-center justify-center text-[#D8C28F] mb-2.5">
                                <Shield className="w-4 h-4 text-[#C8A96B]" />
                            </div>
                            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">
                                Akses Tunggal & Keamanan 24/7
                            </h4>
                            <p className="text-xs text-[#F7F3E8]/65">
                                Pintu gerbang otomatis dengan kartu RFID, ANPR kamera pengenal plat nomor, dan pos penjagaan 24 jam dengan 3 personil keamanan berdedikasi.
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 hover:bg-white/10 transition-all duration-300">
                            <div className="w-8 h-8 rounded-xl bg-[#657A52]/50 flex items-center justify-center text-[#D8C28F] mb-2.5">
                                <Trees className="w-4 h-4 text-[#C8A96B]" />
                            </div>
                            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">
                                Koridor Hijau & Taman Komunal
                            </h4>
                            <p className="text-xs text-[#F7F3E8]/65">
                                Deretan pohon Tabebuya merah muda dan ketapang kencana yang rindang, dilengkapi gazebo kayu dan kebun komposting ramah lingkungan.
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 hover:bg-white/10 transition-all duration-300">
                            <div className="w-8 h-8 rounded-xl bg-[#657A52]/50 flex items-center justify-center text-[#D8C28F] mb-2.5">
                                <SunMedium className="w-4 h-4 text-[#C8A96B]" />
                            </div>
                            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">
                                Paving Berpori & Sumur Resapan
                            </h4>
                            <p className="text-xs text-[#F7F3E8]/65">
                                Jalanan klaster menggunakan paving berpori ramah lingkungan serta 12 sumur biopori resapan air untuk konservasi air tanah alami.
                            </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D8C28F]/40 hover:bg-white/10 transition-all duration-300">
                            <div className="w-8 h-8 rounded-xl bg-[#657A52]/50 flex items-center justify-center text-[#D8C28F] mb-2.5">
                                <PhoneCall className="w-4 h-4 text-[#C8A96B]" />
                            </div>
                            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">
                                Kontak Darurat Klaster
                            </h4>
                            <p className="text-xs text-[#F7F3E8]/65">
                                Pos Satpam: (021) 7890-4401 • WhatsApp Gerbang: 0812-4400-0404 • Hotline Medis Tetangga (Dr. Raditya - Rumah No. 2).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 sm:p-6 bg-[#1D2B1E]/80 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#F7F3E8]/60">Cluster Oryza 4 • 26 Rumah, Satu Kebersamaan</span>
                    <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-full bg-[#C8A96B] text-[#252821] text-xs font-semibold hover:bg-[#D8C28F] transition-all shadow-xs hover:shadow-[0_0_15px_rgba(216,194,143,0.4)]"
                    >
                        Selesai
                    </button>
                </div>
            </div>
        </div>
    );
};
