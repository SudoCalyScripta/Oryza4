import React from 'react';
import { House } from '../types';
import { X, Users, Calendar, Phone, Heart, ShieldCheck, MapPin, Car, Home } from 'lucide-react';

interface HouseDetailModalProps {
  house: House | null;
  onClose: () => void;
  onContactWhatsApp?: (phone: string, name: string) => void;
}

export const HouseDetailModal: React.FC<HouseDetailModalProps> = ({
  house,
  onClose,
}) => {
  if (!house) return null;

  return (
    <div
      id="house-detail-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="house-detail-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#F7F3E8] rounded-3xl overflow-hidden shadow-2xl border border-[#354936]/15 text-[#252821] animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col"
      >
        {/* Header with House Architectural Image */}
        <div className="relative h-56 sm:h-64 w-full shrink-0">
          <img
            src={house.image}
            alt={`Rumah ${house.code}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#252821]/85 via-[#252821]/35 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-[#D8C28F]/20 text-white hover:text-[#D8C28F] backdrop-blur-md flex items-center justify-center transition-colors border border-white/20 hover:border-[#D8C28F]/60"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* House Badges & Code */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A96B] text-[#252821] text-xs font-semibold tracking-wider font-mono uppercase mb-2 shadow-xs">
                {house.code}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-normal">
                {house.familyName}
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 text-white text-xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  house.status === 'active'
                    ? 'bg-[#879477]'
                    : house.status === 'away'
                    ? 'bg-[#D8C28F]'
                    : 'bg-sky-300'
                }`}
              />
              <span className="font-medium">{house.statusLabel}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Top Quick Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-[#354936]/5 border border-[#354936]/10 text-center">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#756653]">Nomor</span>
              <p className="font-semibold text-sm text-[#354936] mt-0.5">{house.houseNumber || house.code}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#756653]">Iuran Sampah</span>
              <p className={`font-semibold text-xs mt-1 ${house.iuranStatus === 'Lunas' ? 'text-[#657A52]' : 'text-amber-700'}`}>
                {house.iuranCoverage || house.iuranStatus}
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#756653]">Stiker (Rp 5.000)</span>
              <p className={`font-semibold text-xs mt-1 ${house.stikerStatus === 'Lunas' ? 'text-[#657A52]' : 'text-stone-500'}`}>
                {house.stikerStatus === 'Lunas' ? 'Lunas ✅' : 'Belum Lunas'}
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#756653]">Warga Sejak</span>
              <p className="font-semibold text-sm text-[#354936] mt-0.5">Tahun {house.joinedYear}</p>
            </div>
          </div>

          {/* Car Purchase & Canopy Details */}
          <div className="p-4 rounded-2xl bg-[#354936]/5 border border-[#354936]/10 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#354936] flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#657A52]" />
                <span>Mobil Keluarga & Fasilitas Hunian</span>
              </span>
              <span className="text-[10px] text-[#657A52] font-semibold bg-[#657A52]/15 px-2.5 py-0.5 rounded-full">
                Canopy Terpasang ✅
              </span>
            </h4>

            {house.carDetails ? (
              <div className="p-3 rounded-xl bg-white border border-[#354936]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-semibold text-[#252821] text-sm block">
                    {house.carDetails.model}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-[#756653]">
                    <span className="font-mono bg-stone-100 px-1.5 py-0.5 rounded text-[11px] font-medium border border-stone-200">
                      {house.carDetails.plateNumber}
                    </span>
                    <span>• Stiker Gerbang Terdaftar</span>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] text-[#756653] uppercase tracking-wider block">Harga Pembelian Unit</span>
                  <span className="font-mono text-sm font-bold text-[#354936]">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(house.carDetails.price)}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-xs text-[#756653]">Data kendaraan keluarga sedang diperbarui.</p>
            )}

            <div className="text-[11px] text-[#756653] flex items-center gap-1.5 pt-1">
              <Home className="w-3.5 h-3.5 text-[#C8A96B] shrink-0" />
              <span>Termasuk penambahan canopy solarflat rangka baja ringan (program paguyuban).</span>
            </div>
          </div>

          {/* Residents List */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#354936] mb-3 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[#657A52]" />
              <span>Daftar Anggota Keluarga</span>
            </h4>
            <div className="divide-y divide-[#354936]/10 border border-[#354936]/10 rounded-2xl bg-white/80 overflow-hidden">
              {house.residents.map((r) => (
                <div key={r.id} className="p-3.5 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-medium text-[#252821] text-sm block">{r.name}</span>
                    <span className="text-[#756653]">{r.relation}</span>
                  </div>
                  {r.phone && (
                    <a
                      href={`https://wa.me/62${r.phone.replace(/[^0-9]/g, '').slice(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#657A52]/15 hover:bg-[#D8C28F] text-[#354936] hover:text-[#252821] border border-transparent hover:border-[#D8C28F] transition-all duration-300"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{r.phone}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Special Notes / Description */}
          {house.notes && (
            <div className="p-4 rounded-2xl bg-[#EDE6D5]/60 border border-[#354936]/10">
              <h5 className="text-[11px] uppercase tracking-wider font-semibold text-[#354936] mb-1">
                Catatan & Peran di Lingkungan
              </h5>
              <p className="text-xs text-[#756653] leading-relaxed">{house.notes}</p>
            </div>
          )}

          {/* Favorite Spot */}
          {house.favoriteCorner && (
            <div className="flex items-center gap-2 text-xs text-[#756653]">
              <Heart className="w-4 h-4 text-[#C8A96B] shrink-0" />
              <span>
                <strong>Sudut Favorit:</strong> {house.favoriteCorner}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#EDE6D5]/40 border-t border-[#354936]/10 flex items-center justify-between">
          <span className="text-xs text-[#756653] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#657A52]" />
            Warga Resmi Terverifikasi Paguyuban
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-[#354936] text-[#F7F3E8] hover:bg-[#D8C28F] hover:text-[#252821] transition-all duration-300 shadow-sm"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
