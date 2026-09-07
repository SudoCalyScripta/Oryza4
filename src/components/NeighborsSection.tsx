import React, { useState, useMemo } from 'react';
import { House } from '../types';
import { HOUSES_DATA } from '../data/mockData';
import { HouseDetailModal } from './HouseDetailModal';
import { Search, Home, ArrowUpRight, CheckCircle2, AlertCircle, LayoutGrid, List, ShieldCheck, Car } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

export const NeighborsSection: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'sampah-lunas' | 'sampah-belum' | 'stiker-lunas' | 'stiker-belum'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredHouses = useMemo(() => {
    return HOUSES_DATA.filter((h) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        h.code.toLowerCase().includes(query) ||
        (h.houseNumber && h.houseNumber.toLowerCase().includes(query)) ||
        h.familyName.toLowerCase().includes(query) ||
        h.headOfFamily.toLowerCase().includes(query) ||
        (h.iuranCoverage && h.iuranCoverage.toLowerCase().includes(query));

      if (!matchesSearch) return false;

      if (filterType === 'sampah-lunas') return h.iuranStatus === 'Lunas';
      if (filterType === 'sampah-belum') return h.iuranStatus !== 'Lunas';
      if (filterType === 'stiker-lunas') return h.stikerStatus === 'Lunas';
      if (filterType === 'stiker-belum') return h.stikerStatus !== 'Lunas';

      return true;
    });
  }, [searchQuery, filterType]);

  const sampahLunasCount = HOUSES_DATA.filter((h) => h.iuranStatus === 'Lunas').length;
  const sampahBelumCount = HOUSES_DATA.filter((h) => h.iuranStatus !== 'Lunas').length;
  const stikerLunasCount = HOUSES_DATA.filter((h) => h.stikerStatus === 'Lunas').length;
  const stikerBelumCount = HOUSES_DATA.filter((h) => h.stikerStatus !== 'Lunas').length;

  return (
    <section
      id="neighbors"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#F7F3E8] text-[#252821] overflow-hidden"
    >
      {/* Editorial Decorative Background Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] text-[#354936] font-display text-[24vw] leading-none whitespace-nowrap">
        RESIDENTS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-[#C8A96B]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#657A52] flex items-center gap-1.5">
                <RiceGrainIcon className="w-3.5 h-3.5 text-[#C8A96B]" />
                Directory of 26 Homes
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#354936] font-normal leading-tight">
              Meet Your Neighbors
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#756653] font-light max-w-2xl">
              Daftar resmi seluruh 26 hunian warga Cluster Oryza 4 beserta status hunian dan kontribusi iuran sampah serta stiker kendaraan cluster.
            </p>
          </div>

          {/* Quick Summary Badges */}
          <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-end">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#354936]/15 text-xs text-[#354936] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#657A52]" />
              <span className="font-semibold">Iuran Sampah:</span>
              <span className="text-[#657A52] font-mono">{sampahLunasCount} Lunas</span>
              <span className="text-[#756653]/40">•</span>
              <span className="text-amber-700 font-mono">{sampahBelumCount} Belum</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#354936]/15 text-xs text-[#354936] shadow-xs">
              <span className="font-semibold">Stiker 5rb:</span>
              <span className="text-[#657A52] font-mono">{stikerLunasCount} Lunas</span>
              <span className="text-[#756653]/40">•</span>
              <span className="text-stone-600 font-mono">{stikerBelumCount} Belum</span>
            </div>
          </div>
        </div>

        {/* Search, Filter Tabs & View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 p-3 rounded-2xl bg-white/70 backdrop-blur-md border border-[#354936]/15 shadow-xs">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#657A52] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama warga, nomor rumah (contoh: Bu Ria, No. 6)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl text-xs bg-white border border-[#354936]/20 focus:outline-none focus:border-[#D8C28F] text-[#252821] placeholder-[#756653]/60 w-full transition-all"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all text-[11px] ${
                filterType === 'all'
                  ? 'bg-[#354936] text-[#F7F3E8] shadow-xs'
                  : 'text-[#756653] hover:text-[#354936] hover:bg-[#D8C28F]/25'
              }`}
            >
              Semua ({HOUSES_DATA.length})
            </button>
            <button
              onClick={() => setFilterType('sampah-lunas')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all text-[11px] ${
                filterType === 'sampah-lunas'
                  ? 'bg-[#354936] text-[#F7F3E8] shadow-xs'
                  : 'text-[#756653] hover:text-[#354936] hover:bg-[#D8C28F]/25'
              }`}
            >
              Sampah Lunas ({sampahLunasCount})
            </button>
            <button
              onClick={() => setFilterType('sampah-belum')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all text-[11px] ${
                filterType === 'sampah-belum'
                  ? 'bg-amber-900 text-amber-100 shadow-xs'
                  : 'text-amber-800 hover:text-amber-900 hover:bg-amber-100/50'
              }`}
            >
              Sampah Belum ({sampahBelumCount})
            </button>
            <button
              onClick={() => setFilterType('stiker-lunas')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all text-[11px] ${
                filterType === 'stiker-lunas'
                  ? 'bg-[#354936] text-[#F7F3E8] shadow-xs'
                  : 'text-[#756653] hover:text-[#354936] hover:bg-[#D8C28F]/25'
              }`}
            >
              Stiker Lunas ({stikerLunasCount})
            </button>
            <button
              onClick={() => setFilterType('stiker-belum')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all text-[11px] ${
                filterType === 'stiker-belum'
                  ? 'bg-stone-800 text-stone-100 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
              }`}
            >
              Stiker Belum ({stikerBelumCount})
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white border border-[#354936]/15 self-end md:self-auto shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[#354936] text-white shadow-xs'
                  : 'text-[#756653] hover:text-[#354936] hover:bg-[#D8C28F]/20'
              }`}
              title="Tampilan Kartu"
              aria-label="Tampilan Kartu"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'table'
                  ? 'bg-[#354936] text-white shadow-xs'
                  : 'text-[#756653] hover:text-[#354936] hover:bg-[#D8C28F]/20'
              }`}
              title="Tampilan Tabel"
              aria-label="Tampilan Tabel"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 26 Houses Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredHouses.map((house) => {
              const isSampahPaid = house.iuranStatus === 'Lunas';
              const isStikerPaid = house.stikerStatus === 'Lunas';

              return (
                <div
                  key={house.id}
                  onClick={() => setSelectedHouse(house)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden frost-glass border border-[#354936]/12 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(53,73,54,0.18),0_0_22px_rgba(216,194,143,0.35)] hover:border-[#D8C28F] hover:bg-white flex flex-col justify-between"
                >
                  {/* Image thumbnail on top */}
                  <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3 bg-[#252821]">
                    <img
                      src={house.image}
                      alt={house.code}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                    {/* House Code Badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-[#F7F3E8]/95 text-[#354936] backdrop-blur-md group-hover:bg-[#D8C28F] group-hover:text-[#252821] transition-colors shadow-xs">
                        {house.code}
                      </span>
                    </div>

                    {/* Status indicator badge */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[9px] text-white">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          house.status === 'active' ? 'bg-[#879477]' : 'bg-[#D8C28F]'
                        }`}
                      />
                      <span>{house.statusLabel}</span>
                    </div>

                    {/* Quick Explore Icon */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-6 h-6 rounded-full bg-white/90 group-hover:bg-[#D8C28F] text-[#354936] group-hover:text-[#252821] flex items-center justify-center shadow-sm transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Name (House Number) & Status */}
                  <div className="mb-3">
                    <h3 className="font-display text-base font-normal text-[#252821] group-hover:text-[#354936] transition-colors line-clamp-1">
                      {house.headOfFamily} <span className="text-xs font-sans font-medium text-[#657A52]">({house.code})</span>
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-[#756653]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#657A52]" />
                      <span>Status: {house.statusLabel}</span>
                    </div>
                  </div>

                  {/* Contribution Status (Iuran Sampah & Bayar Stiker) */}
                  <div className="pt-2.5 border-t border-[#354936]/10 space-y-2 text-xs">
                    {/* Car Details Row */}
                    {house.carDetails && (
                      <div className="flex items-center justify-between p-2 rounded-xl bg-[#354936]/5 border border-[#354936]/10">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <Car className="w-3.5 h-3.5 text-[#657A52] shrink-0" />
                          <span className="text-[11px] text-[#252821] font-medium truncate">
                            {house.carDetails.model}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#354936] shrink-0">
                          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(house.carDetails.price)}
                        </span>
                      </div>
                    )}

                    {/* Iuran Sampah Row */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-[#354936]/10">
                      <span className="text-[11px] text-[#756653]">Iuran Sampah:</span>
                      {isSampahPaid ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#657A52]/15 text-[#354936] border border-[#657A52]/30 max-w-[130px] truncate">
                          <CheckCircle2 className="w-3 h-3 text-[#657A52] shrink-0" />
                          <span className="truncate">
                            {house.iuranCoverage && house.iuranCoverage.includes('s/d')
                              ? house.iuranCoverage.replace('Lunas ', '')
                              : 'Lunas ✅'}
                          </span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-amber-100 text-amber-900 border border-amber-300">
                          <AlertCircle className="w-3 h-3 text-amber-600 shrink-0" />
                          <span>Belum Bayar</span>
                        </span>
                      )}
                    </div>

                    {/* Bayar Stiker Row */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-[#354936]/10">
                      <span className="text-[11px] text-[#756653]">Bayar Stiker:</span>
                      {isStikerPaid ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#D8C28F]/30 text-[#354936] border border-[#D8C28F]">
                          <CheckCircle2 className="w-3 h-3 text-[#C8A96B] shrink-0" />
                          <span>Lunas ✅ (Rp 5.000)</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-stone-100 text-stone-600 border border-stone-300">
                          <span>Belum Bayar</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 26 Houses Table / Directory View */}
        {viewMode === 'table' && (
          <div className="frost-glass rounded-3xl border border-[#354936]/15 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#354936] text-[#F7F3E8] border-b border-[#354936]/20 font-mono text-[11px] uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-semibold">Rumah</th>
                    <th className="py-3.5 px-4 font-semibold">Nama (Nomor Rumah)</th>
                    <th className="py-3.5 px-4 font-semibold">Status Hunian</th>
                    <th className="py-3.5 px-4 font-semibold">Mobil Keluarga & Harga</th>
                    <th className="py-3.5 px-4 font-semibold">Iuran Sampah</th>
                    <th className="py-3.5 px-4 font-semibold">Bayar Stiker (Rp 5.000)</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#354936]/10 bg-white/60">
                  {filteredHouses.map((house) => {
                    const isSampahPaid = house.iuranStatus === 'Lunas';
                    const isStikerPaid = house.stikerStatus === 'Lunas';

                    return (
                      <tr
                        key={house.id}
                        onClick={() => setSelectedHouse(house)}
                        className="hover:bg-white transition-colors cursor-pointer"
                      >
                        <td className="py-3.5 px-4 font-mono font-bold text-[#354936]">
                          {house.code}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-medium text-[#252821] text-sm block">
                            {house.headOfFamily}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-[#657A52]/10 text-[#354936] border border-[#657A52]/20 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#657A52]" />
                            {house.statusLabel}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          {isSampahPaid ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#657A52]/15 text-[#354936] border border-[#657A52]/30">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#657A52]" />
                              <span>{house.iuranCoverage || 'Lunas ✅'}</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-900 border border-amber-300">
                              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                              <span>Belum Lunas</span>
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          {isStikerPaid ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#D8C28F]/30 text-[#354936] border border-[#D8C28F]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A96B]" />
                              <span>Lunas ✅ (Rp 5.000)</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-stone-100 text-stone-600 border border-stone-300">
                              <span>Belum Bayar</span>
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedHouse(house);
                            }}
                            className="px-3 py-1 rounded-lg border border-[#354936]/20 hover:border-[#D8C28F] hover:bg-[#D8C28F]/20 text-[#354936] font-medium transition-all inline-flex items-center gap-1"
                          >
                            <span>Detail</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty Search State */}
        {filteredHouses.length === 0 && (
          <div className="text-center py-16 frost-glass rounded-3xl p-8 border border-[#354936]/15 max-w-md mx-auto">
            <Home className="w-10 h-10 text-[#657A52]/50 mx-auto mb-3" />
            <p className="text-sm font-medium text-[#354936]">Tidak ditemukan rumah dengan kriteria tersebut.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterType('all');
              }}
              className="mt-3 text-xs text-[#C8A96B] hover:text-[#D8C28F] font-semibold underline transition-colors"
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </div>

      {/* House Detail Modal */}
      <HouseDetailModal
        house={selectedHouse}
        onClose={() => setSelectedHouse(null)}
      />
    </section>
  );
};
