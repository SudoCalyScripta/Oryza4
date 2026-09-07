import React, { useState, useEffect, useRef } from 'react';
import { ARCHITECTURE_IMAGES } from '../data/mockData';
import { Camera, Eye, X, Filter, Sparkles, MapPin, Calendar, User, Heart, Share2, Upload } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

interface GalleryItem {
  id: string;
  title: string;
  category: 'kegiatan' | 'arsitektur' | 'suasana';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  date: string;
  contributor: string;
  likes: number;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Gotong Royong Perapihan Jalur Hijau',
    category: 'kegiatan',
    categoryLabel: 'Kegiatan Warga',
    imageUrl: ARCHITECTURE_IMAGES.garden,
    caption: 'Warga bersama merapikan dahan peneduh dan membersihkan jalur pedestrian sebelum musim hujan.',
    date: '24 Agustus 2026',
    contributor: 'Fajar (No. 19)',
    likes: 21,
  },
  {
    id: 'gal-2',
    title: 'Kehangatan Senja di Gazebo Utama',
    category: 'suasana',
    categoryLabel: 'Suasana Senja',
    imageUrl: ARCHITECTURE_IMAGES.clubhouse,
    caption: 'Titik temu favorit warga dan anak-anak saat matahari terbenam dengan pemandangan langit jingga.',
    date: '01 September 2026',
    contributor: 'Pak Aldy (No. 14)',
    likes: 24,
  },
  {
    id: 'gal-3',
    title: 'Harmoni Arsitektur Tropis & Kanopi Alami',
    category: 'arsitektur',
    categoryLabel: 'Arsitektur & Lanskap',
    imageUrl: ARCHITECTURE_IMAGES.hero,
    caption: 'Kombinasi fasad batu alam, kayu ulin, dan vegetasi tropis yang menjaga suhu hunian tetap sejuk.',
    date: '15 Juli 2026',
    contributor: 'Panji Kusumah (No. 17)',
    likes: 19,
  },
  {
    id: 'gal-4',
    title: 'Jalur Pedestrian Rindang Menuju Cul-de-sac',
    category: 'arsitektur',
    categoryLabel: 'Arsitektur & Lanskap',
    imageUrl: ARCHITECTURE_IMAGES.pathway,
    caption: 'Trotoar paving berpori bebas debu diapit barisan ketapang kencana yang tertata simetris.',
    date: '10 Agustus 2026',
    contributor: 'Bu Riri (No. 12)',
    likes: 18,
  },
  {
    id: 'gal-5',
    title: 'Sudut Kebun Kompos & Herbal Warga',
    category: 'kegiatan',
    categoryLabel: 'Kegiatan Warga',
    imageUrl: ARCHITECTURE_IMAGES.introduction,
    caption: 'Panen sayur hidroponik dan pemanfaatan kompos sisa dapur organik di sudut selatan klaster.',
    date: '28 Agustus 2026',
    contributor: 'Tiyahandayanis (No. 10)',
    likes: 23,
  },
  {
    id: 'gal-6',
    title: 'Pendar Solar LED & Ketenangan Malam',
    category: 'suasana',
    categoryLabel: 'Suasana Senja',
    imageUrl: ARCHITECTURE_IMAGES.evening,
    caption: 'Lampu jalan tenaga surya otomatis memberikan penerangan teduh nan elegan di seluruh jalur klaster.',
    date: '03 September 2026',
    contributor: 'Bu Sefti (No. 8)',
    likes: 25,
  },
];

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'kegiatan' | 'arsitektur' | 'suasana'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [offsetY, setOffsetY] = useState(0);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (sectionRef.current && !ticking) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
            setOffsetY(rect.top * -0.12);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = selectedFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section
      ref={sectionRef}
      id="snapshot"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#354936] text-[#F7F3E8] overflow-hidden"
    >
      {/* Background Architectural Layer with Parallax */}
      <div
        className="absolute inset-0 w-full h-[130%] -top-[15%] z-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `url(${ARCHITECTURE_IMAGES.garden})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translate3d(0, ${offsetY}px, 0)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#354936] via-[#354936]/90 to-[#354936] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-[#C8A96B]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D8C28F] flex items-center gap-1.5">
                <RiceGrainIcon className="w-3.5 h-3.5 text-[#C8A96B]" />
                Dokumentasi & Memori
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#F7F3E8] font-normal leading-tight">
              Galeri Warga
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#F7F3E8]/75 font-light max-w-xl leading-relaxed">
              Kumpulan potret momen kebersamaan 26 keluarga, sudut asri lingkungan tropis, dan kehangatan hari-hari di Cluster Oryza 4.
            </p>
          </div>

          {/* Action & Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#C8A96B] hover:bg-[#D8C28F] text-[#252821] transition-all duration-300 shadow-md hover:scale-105"
            >
              <Upload className="w-3.5 h-3.5 text-[#354936]" />
              <span>Kirim Foto Momen</span>
            </button>
          </div>
        </div>

        {/* Filter Pills with Frost UI */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {[
            { id: 'all', label: 'Semua Momen' },
            { id: 'kegiatan', label: 'Kegiatan Warga' },
            { id: 'arsitektur', label: 'Arsitektur & Lanskap' },
            { id: 'suasana', label: 'Suasana Senja & Malam' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as typeof selectedFilter)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                selectedFilter === tab.id
                  ? 'bg-[#657A52] text-[#F7F3E8] border border-[#D8C28F]/50 shadow-lg shadow-[#354936]/40 font-semibold'
                  : 'bg-white/5 hover:bg-[#D8C28F]/20 text-white/80 hover:text-[#D8C28F] border border-white/10 hover:border-[#D8C28F]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Bento style editorial masonry) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isLiked = likedMap[item.id];
            const currentLikes = item.likes + (isLiked ? 1 : 0);

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer frost-glass-dark border border-[#D8C28F]/20 transition-all duration-500 hover:-translate-y-2 hover:border-[#D8C28F] hover:shadow-[0_25px_50px_rgba(37,40,33,0.6),0_0_25px_rgba(216,194,143,0.25)] flex flex-col justify-between"
              >
                {/* Photo container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/40">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#354936] via-black/25 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/50 text-[#D8C28F] backdrop-blur-md border border-white/20">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Quick Zoom Pill */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Text Overlaid */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-display text-xl text-white font-normal leading-snug group-hover:text-[#D8C28F] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/80 line-clamp-2 font-light">
                      {item.caption}
                    </p>
                  </div>
                </div>

                {/* Card Footer Metadata */}
                <div className="p-4 bg-[#252821]/85 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <div className="flex items-center gap-1.5 truncate">
                    <User className="w-3.5 h-3.5 text-[#C8A96B] shrink-0" />
                    <span className="truncate">{item.contributor}</span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={(e) => toggleLike(item.id, e)}
                      className={`flex items-center gap-1.5 transition-colors ${
                        isLiked ? 'text-rose-400 font-semibold' : 'hover:text-rose-300'
                      }`}
                      aria-label="Suka foto"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-400' : ''}`} />
                      <span className="text-[11px]">{currentLikes}</span>
                    </button>
                    <span className="text-[10px] text-white/50">{item.date.split(' ').slice(1).join(' ')}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 p-8 rounded-3xl frost-glass-dark border border-[#D8C28F]/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-xl text-white font-normal">
              Punya Foto Sudut Klaster atau Kegiatan Keluarga?
            </h4>
            <p className="text-xs text-[#F7F3E8]/75 font-light">
              Bagikan momen berharga di Oryza 4 untuk diabadikan dalam direktori galeri klaster kita bersama.
            </p>
          </div>
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold bg-white/10 hover:bg-[#D8C28F]/25 hover:border-[#D8C28F] hover:text-[#D8C28F] text-white border border-[#D8C28F]/35 transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(216,194,143,0.2)]"
          >
            <Camera className="w-4 h-4 text-[#C8A96B]" />
            <span>Unggah ke Galeri</span>
          </button>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {activeItem && (
        <div
          id="gallery-lightbox-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300"
          onClick={() => setActiveItem(null)}
        >
          <div
            id="gallery-lightbox-card"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#354936] rounded-3xl border border-[#D8C28F]/30 text-[#F7F3E8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300"
          >
            {/* Image Preview Container */}
            <div className="relative h-72 sm:h-96 md:h-[420px] w-full bg-black/60 flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-cover sm:object-contain"
              />

              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-[#D8C28F]/20 border border-white/20 hover:border-[#D8C28F]/60 text-white hover:text-[#D8C28F] flex items-center justify-center transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-black/50 text-[#D8C28F] backdrop-blur-md border border-white/20">
                  {activeItem.categoryLabel}
                </span>
              </div>
            </div>

            {/* Lightbox Description Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-normal">
                    {activeItem.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-white/70 mt-1">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#C8A96B]" />
                      Oleh {activeItem.contributor}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C8A96B]" />
                      {activeItem.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleLike(activeItem.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                      likedMap[activeItem.id]
                        ? 'bg-rose-950/70 border-rose-500/50 text-rose-300'
                        : 'bg-white/10 hover:bg-[#D8C28F]/20 border-white/20 hover:border-[#D8C28F]/50 text-white hover:text-[#D8C28F]'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${likedMap[activeItem.id] ? 'fill-rose-400 text-rose-400' : ''}`} />
                    <span>{activeItem.likes + (likedMap[activeItem.id] ? 1 : 0)} Menyukai</span>
                  </button>
                </div>
              </div>

              <p className="text-sm text-white/85 font-light leading-relaxed">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Upload Photo Modal */}
      {isUploadModalOpen && (
        <div
          id="upload-photo-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setIsUploadModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#354936] rounded-3xl p-6 sm:p-8 border border-[#D8C28F]/30 text-[#F7F3E8] shadow-2xl animate-in zoom-in-95 duration-300"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#C8A96B]" />
                <h3 className="font-display text-xl text-white font-normal">
                  Kirim Foto Momen Klaster
                </h3>
              </div>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D8C28F]/20 text-white hover:text-[#D8C28F] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {uploadSuccess ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#657A52]/50 border border-[#D8C28F]/40 text-[#D8C28F] flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-display text-2xl text-white font-normal">
                  Foto Berhasil Dikirim!
                </h4>
                <p className="text-xs text-white/80 max-w-sm mx-auto">
                  Terima kasih sudah berbagi momen kebersamaan warga. Foto akan segera tampil di Galeri Warga Oryza 4.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setUploadSuccess(true);
                  setTimeout(() => {
                    setUploadSuccess(false);
                    setIsUploadModalOpen(false);
                  }, 2200);
                }}
                className="mt-5 space-y-4 text-xs"
              >
                <div>
                  <label className="block text-white/80 uppercase tracking-wider font-semibold mb-1.5">
                    Judul Foto / Momen
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Santai Sore Anak-anak di Rumput Tengah"
                    className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D8C28F]"
                  />
                </div>

                <div>
                  <label className="block text-white/80 uppercase tracking-wider font-semibold mb-1.5">
                    Nama Warga & Rumah
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Panji Kusumah (No. 17)"
                    className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D8C28F]"
                  />
                </div>

                <div>
                  <label className="block text-white/80 uppercase tracking-wider font-semibold mb-1.5">
                    Kategori
                  </label>
                  <select className="w-full p-2.5 rounded-xl bg-[#252821] border border-white/20 text-white focus:outline-none focus:border-[#D8C28F]">
                    <option value="kegiatan">Kegiatan Warga (Gotong royong, gathering, senam)</option>
                    <option value="arsitektur">Arsitektur & Lanskap Lingkungan</option>
                    <option value="suasana">Suasana Senja, Malam & Keasrian Alam</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 uppercase tracking-wider font-semibold mb-1.5">
                    Deskripsi Singkat
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ceritakan sedikit cerita di balik momen ini..."
                    className="w-full p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#D8C28F] resize-none"
                  />
                </div>

                <div className="p-4 rounded-xl border border-dashed border-white/30 text-center bg-white/5 hover:bg-[#D8C28F]/10 hover:border-[#D8C28F]/60 cursor-pointer transition-colors">
                  <Upload className="w-6 h-6 text-[#C8A96B] mx-auto mb-1" />
                  <p className="font-medium text-white">Pilih file foto dari perangkat Anda</p>
                  <p className="text-[10px] text-white/60 mt-0.5">JPG, PNG atau WEBP (Maks. 10MB)</p>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsUploadModalOpen(false)}
                    className="px-4 py-2 rounded-full text-white/70 hover:text-[#D8C28F] transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-[#C8A96B] hover:bg-[#D8C28F] text-[#252821] font-semibold tracking-wide transition-all shadow-md"
                  >
                    Kirim Foto
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
