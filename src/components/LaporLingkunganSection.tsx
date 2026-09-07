import React, { useState } from 'react';
import { INITIAL_REPORTS, HOUSES_DATA } from '../data/mockData';
import { NeighborhoodReport } from '../types';
import { MessageSquarePlus, CheckCircle2, Clock, MapPin, X, Send } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

interface LaporLingkunganSectionProps {
    isOpenModal: boolean;
    onOpenModal: () => void;
    onCloseModal: () => void;
}

export const LaporLingkunganSection: React.FC<LaporLingkunganSectionProps> = ({
    isOpenModal,
    onOpenModal,
    onCloseModal,
}) => {
    const [reports, setReports] = useState<NeighborhoodReport[]>(INITIAL_REPORTS);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    // Form State
    const [selectedCategory, setSelectedCategory] = useState<NeighborhoodReport['category']>('Lampu jalan');
    const [selectedHouse, setSelectedHouse] = useState(HOUSES_DATA[0]?.code || 'No. 1');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const categories: { label: NeighborhoodReport['category']; icon: string; desc: string }[] = [
        { label: 'Lampu jalan', icon: '💡', desc: 'Penerangan & sensor' },
        { label: 'Kebersihan', icon: '🧹', desc: 'Sampah, daun, saluran air' },
        { label: 'Air', icon: '💧', desc: 'Tekanan air & pipa komunal' },
        { label: 'Keamanan', icon: '🛡️', desc: 'Gerbang, CCTV, ketertiban' },
        { label: 'Fasilitas', icon: '🏠', desc: 'Gazebo, taman, jalan' },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description) return;
        const categoryIcon = categories.find((c) => c.label === selectedCategory)?.icon || '🏠';
        const newReport: NeighborhoodReport = {
            id: `rep-${Date.now()}`,
            category: selectedCategory,
            categoryIcon,
            title,
            description,
            houseCode: selectedHouse,
            date: 'Hari ini',
            status: 'Baru',
            location: location || 'Area Lingkungan Oryza 4',
        };

        setReports([newReport, ...reports]);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setTitle('');
            setLocation('');
            setDescription('');
            onCloseModal();
        }, 2000);
    };

    const filteredReports = activeCategory === 'all'
        ? reports
        : reports.filter((r) => r.category === activeCategory);

    return (
        <section
            id="lapor-lingkungan"
            className="relative py-28 md:py-36 px-6 md:px-12 bg-[#F7F3E8] text-[#252821] overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">
                {/* Editorial Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#354936]/10 text-[#354936] text-xs font-semibold tracking-widest uppercase mb-3">
                        <RiceGrainIcon className="w-3.5 h-3.5 text-[#C8A96B]" />
                        <span>Peduli Lingkungan Bersama</span>
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl text-[#354936] font-normal leading-tight">
                        Ada yang perlu diperbaiki?
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-[#756653] font-light">
                        Temukan hal yang perlu diperbaiki di sekitar lingkungan? Beritahukan kami agar dapat segera dirapikan demi kenyamanan bersama.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <button
                            id="lapor-lingkungan-trigger-btn"
                            onClick={onOpenModal}
                            className="px-8 py-4 rounded-full bg-[#354936] hover:bg-[#D8C28F] text-[#F7F3E8] hover:text-[#252821] font-semibold text-sm tracking-wider transition-all duration-300 shadow-[0_15px_30px_-5px_rgba(53,73,54,0.25)] hover:shadow-[0_15px_30px_-5px_rgba(216,194,143,0.4)] hover:scale-105 active:scale-95 flex items-center gap-3"
                        >
                            <MessageSquarePlus className="w-5 h-5 text-[#C8A96B]" />
                            <span>Lapor Lingkungan</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto mb-14">
                    {categories.map((cat) => (
                        <button
                            key={cat.label}
                            onClick={() => {
                                setSelectedCategory(cat.label);
                                onOpenModal();
                            }}
                            className="p-4 rounded-2xl bg-white/80 hover:bg-white border border-[#354936]/12 hover:border-[#D8C28F] transition-all duration-300 text-center group shadow-sm hover:shadow-[0_10px_25px_rgba(216,194,143,0.25)]"
                        >
                            <span className="text-2xl mb-1.5 block transition-transform group-hover:scale-125">
                                {cat.icon}
                            </span>
                            <span className="text-xs font-semibold text-[#354936] block">{cat.label}</span>
                            <span className="text-[10px] text-[#756653] mt-0.5 block">{cat.desc}</span>
                        </button>
                    ))}
                </div>
                <div className="frost-glass rounded-3xl p-6 sm:p-10 border border-[#354936]/12">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                        <div>
                            <h3 className="font-display text-2xl text-[#354936] font-normal">
                                Catatan Perawatan Lingkungan Terkini
                            </h3>
                            <p className="text-xs text-[#756653] mt-0.5">
                                Pemantauan transparan dari seluruh warga untuk kawasan Oryza 4.
                            </p>
                        </div>
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                            <button
                                onClick={() => setActiveCategory('all')}
                                className={`px-3 py-1 rounded-full text-xs transition-colors whitespace-nowrap ${activeCategory === 'all'
                                        ? 'bg-[#354936] text-[#F7F3E8] font-medium'
                                        : 'bg-white/60 text-[#756653] hover:bg-[#D8C28F]/25 hover:text-[#354936]'
                                    }`}
                            >
                                Semua
                            </button>
                            {categories.map((c) => (
                                <button
                                    key={c.label}
                                    onClick={() => setActiveCategory(c.label)}
                                    className={`px-3 py-1 rounded-full text-xs transition-colors whitespace-nowrap ${activeCategory === c.label
                                            ? 'bg-[#354936] text-[#F7F3E8] font-medium'
                                            : 'bg-white/60 text-[#756653] hover:bg-[#D8C28F]/25 hover:text-[#354936]'
                                        }`}
                                >
                                    {c.icon} {c.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        {filteredReports.map((report) => (
                            <div
                                key={report.id}
                                className="p-4 sm:p-5 rounded-2xl bg-white/85 border border-[#354936]/10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 transition-all duration-300 hover:bg-white hover:border-[#D8C28F]/50 hover:shadow-[0_10px_25px_rgba(216,194,143,0.15)]"
                            >
                                <div className="flex items-start gap-3.5">
                                    <span className="text-2xl shrink-0 p-2 rounded-xl bg-[#EDE6D5]/60">
                                        {report.categoryIcon}
                                    </span>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#354936]/10 text-[#354936]">
                                                {report.houseCode}
                                            </span>
                                            <span className="text-xs text-[#756653] flex items-center gap-1">
                                                <MapPin className="w-3 h-3 text-[#657A52]" />
                                                {report.location}
                                            </span>
                                            <span className="text-xs text-[#756653]/60">• {report.date}</span>
                                        </div>
                                        <h4 className="text-sm font-semibold text-[#252821]">
                                            {report.title}
                                        </h4>
                                        <p className="text-xs text-[#756653] mt-1 leading-relaxed">
                                            {report.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="shrink-0 self-start sm:self-center">
                                    <span
                                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${report.status === 'Selesai'
                                                ? 'bg-[#657A52]/20 text-[#354936] border border-[#657A52]/30'
                                                : report.status === 'Dalam Proses'
                                                    ? 'bg-[#D8C28F]/30 text-[#756653] border border-[#C8A96B]/30'
                                                    : 'bg-sky-100 text-sky-800'
                                            }`}
                                    >
                                        {report.status === 'Selesai' ? (
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#354936]" />
                                        ) : (
                                            <Clock className="w-3.5 h-3.5" />
                                        )}
                                        <span>{report.status}</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isOpenModal && (
                <div
                    id="lapor-modal-backdrop"
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl animate-in fade-in duration-300"
                    onClick={onCloseModal}
                >
                    <div
                        id="lapor-modal-card"
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-xl bg-[#F7F3E8] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#354936]/15 text-[#252821] animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
                    >
                        <div className="flex items-start justify-between pb-4 border-b border-[#354936]/10">
                            <div>
                                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#354936] mb-1">
                                    <MessageSquarePlus className="w-3.5 h-3.5 text-[#C8A96B]" />
                                    <span>Sampaikan Kepada Pengurus</span>
                                </div>
                                <h3 className="font-display text-2xl text-[#354936] font-normal">
                                    Lapor Kebutuhan Lingkungan
                                </h3>
                            </div>
                            <button
                                onClick={onCloseModal}
                                className="w-8 h-8 rounded-full bg-black/5 hover:bg-[#D8C28F]/25 text-[#252821] hover:text-[#354936] flex items-center justify-center transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        {isSubmitted ? (
                            <div className="py-12 text-center space-y-3">
                                <div className="w-14 h-14 rounded-full bg-[#657A52]/20 text-[#354936] flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h4 className="font-display text-2xl text-[#354936] font-normal">
                                    Terima Kasih, Tetangga!
                                </h4>
                                <p className="text-xs text-[#756653] max-w-sm mx-auto">
                                    Catatan Anda telah disampaikan ke pengurus Paguyuban Oryza 4 dan petugas kebersihan/keamanan terkait.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-[#354936] uppercase tracking-wider mb-2">
                                        Kategori Perhatian
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                        {categories.map((c) => (
                                            <button
                                                type="button"
                                                key={c.label}
                                                onClick={() => setSelectedCategory(c.label)}
                                                className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${selectedCategory === c.label
                                                        ? 'bg-[#354936] text-[#F7F3E8] border-[#354936]'
                                                        : 'bg-white/90 border-[#354936]/15 text-[#252821] hover:bg-white hover:border-[#D8C28F] hover:bg-[#D8C28F]/15'
                                                    }`}
                                            >
                                                <span>{c.icon}</span>
                                                <span>{c.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#354936] uppercase tracking-wider mb-1.5">
                                        Rumah Pelapor
                                    </label>
                                    <select
                                        value={selectedHouse}
                                        onChange={(e) => setSelectedHouse(e.target.value)}
                                        className="w-full p-2.5 rounded-xl bg-white border border-[#354936]/20 text-xs font-medium text-[#252821] focus:outline-none focus:border-[#D8C28F]"
                                    >
                                        {HOUSES_DATA.map((h) => (
                                            <option key={h.id} value={h.code}>
                                                {h.code} ({h.headOfFamily})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#354936] uppercase tracking-wider mb-1.5">
                                        Pokok Perhatian
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Contoh: Lampu solar tiang 04 berkedip saat malam"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full p-2.5 rounded-xl bg-white border border-[#354936]/20 text-xs text-[#252821] focus:outline-none focus:border-[#D8C28F]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#354936] uppercase tracking-wider mb-1.5">
                                        Lokasi di Dalam Cluster
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Contoh: Depan taman tengah / tikungan timur"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full p-2.5 rounded-xl bg-white border border-[#354936]/20 text-xs text-[#252821] focus:outline-none focus:border-[#D8C28F]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#354936] uppercase tracking-wider mb-1.5">
                                        Keterangan Tambahan
                                    </label>
                                    <textarea
                                        rows={3}
                                        required
                                        placeholder="Ceritakan sedikit detailnya agar penanganan cepat tepat..."
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full p-2.5 rounded-xl bg-white border border-[#354936]/20 text-xs text-[#252821] focus:outline-none focus:border-[#D8C28F] resize-none"
                                    />
                                </div>
                                <div className="pt-2 flex items-center justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={onCloseModal}
                                        className="px-5 py-2.5 rounded-full text-xs font-medium text-[#756653] hover:text-[#D8C28F] transition-colors"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#354936] hover:bg-[#D8C28F] text-[#F7F3E8] hover:text-[#252821] flex items-center gap-2 shadow-md transition-all duration-300"
                                    >
                                        <Send className="w-3.5 h-3.5 text-[#C8A96B]" />
                                        <span>Kirim Catatan</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};
