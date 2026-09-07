import React, { useState } from 'react';
import { UserRole } from '../types';
import { Shield, Sparkles, X, Check, Bell, Calendar, MessageSquare, AlertCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

interface ManagementPanelProps {
  currentRole: UserRole;
  onClose: () => void;
  onRoleChange: (role: UserRole) => void;
}

export const ManagementPanel: React.FC<ManagementPanelProps> = ({
  currentRole,
  onClose,
  onRoleChange,
}) => {
  const [broadcastSent, setBroadcastSent] = useState(false);
  const [verifiedItems, setVerifiedItems] = useState<Record<string, boolean>>({});

  const roleProfiles: Record<UserRole, { name: string; house: string; title: string }> = {
    'PIC': { name: 'Panji Kusumah', house: 'No. 17', title: 'Koordinator Paguyuban Warga' },
    'Wakil PIC': { name: 'Fajar', house: 'No. 19', title: 'Wakil Koordinator & Komunikasi' },
    'Bendahara': { name: 'Tiyahandayanis', house: 'No. 10', title: 'Bendahara Paguyuban Kas & Iuran' },
    'Warga': { name: 'Bu Ria', house: 'No. 1', title: 'Penghuni Klaster Oryza 4' },
  };

  const profile = roleProfiles[currentRole];

  const handleVerify = (id: string) => {
    setVerifiedItems((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div
      id="management-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="management-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#354936] rounded-3xl border border-[#D8C28F]/25 text-[#F7F3E8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300"
      >
        {/* Editorial Top Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#1D2B1E] to-[#354936] border-b border-[#D8C28F]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#C8A96B]/20 border border-[#D8C28F]/40 flex items-center justify-center text-[#D8C28F]">
              <Shield className="w-6 h-6 text-[#C8A96B]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D8C28F] font-semibold flex items-center gap-1.5">
                  <RiceGrainIcon className="w-3 h-3 text-[#C8A96B]" />
                  Ruang Kemudi Pengurus
                </span>
                <span className="text-[10px] text-white/40">•</span>
                <span className="text-[10px] text-[#D8C28F] font-mono">{profile.house}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-white font-normal">
                {profile.name}
              </h2>
              <p className="text-xs text-[#F7F3E8]/70 font-light">{profile.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            {/* Quick Switcher within panel */}
            <div className="flex items-center p-1 rounded-full bg-white/10 border border-white/15 text-xs">
              {(['PIC', 'Wakil PIC', 'Bendahara'] as UserRole[]).map((r) => (
                <button
                  key={r}
                  onClick={() => onRoleChange(r)}
                  className={`px-3 py-1 rounded-full transition-all text-[11px] ${
                    currentRole === r
                      ? 'bg-[#C8A96B] text-[#252821] font-semibold shadow-xs'
                      : 'text-white/70 hover:text-[#D8C28F] hover:bg-[#D8C28F]/15'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D8C28F]/25 border border-white/20 hover:border-[#D8C28F] text-white hover:text-[#D8C28F] flex items-center justify-center transition-all"
              aria-label="Tutup Panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Greeting Headline */}
          <div>
            <h3 className="font-display text-3xl sm:text-4xl text-[#F7F3E8] font-normal leading-tight">
              Good morning.
            </h3>
            <p className="text-sm sm:text-base text-[#D8C28F] font-light mt-1">
              Here’s what’s happening in Oryza 4 today.
            </p>
          </div>

          {/* 3 Meaningful Contextual Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Context Item 1 */}
            <div className="frost-glass-dark rounded-2xl p-5 border border-[#D8C28F]/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#D8C28F] uppercase block mb-1">
                  Keuangan Kas
                </span>
                <h4 className="font-display text-lg text-white font-normal">
                  2 data iuran perlu konfirmasi
                </h4>
                <p className="text-xs text-[#F7F3E8]/65 mt-2 font-light leading-relaxed">
                  No. 7 (Pak Azis) & No. 14 (Pak Aldy) menunggu konfirmasi setoran iuran sampah September 2026.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-[#F7F3E8]/60">2 Rumah</span>
                <button
                  onClick={() => handleVerify('iuran-pending')}
                  className={`text-xs px-3 py-1 rounded-full transition-all ${
                    verifiedItems['iuran-pending']
                      ? 'bg-[#657A52]/80 text-[#D8C28F]'
                      : 'bg-[#C8A96B] text-[#252821] font-medium hover:bg-[#D8C28F] hover:shadow-[0_0_12px_rgba(216,194,143,0.4)]'
                  }`}
                >
                  {verifiedItems['iuran-pending'] ? 'Terkirim Notif' : 'Kirim Pengingat'}
                </button>
              </div>
            </div>

            {/* Context Item 2 */}
            <div className="frost-glass-dark rounded-2xl p-5 border border-[#D8C28F]/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#D8C28F] uppercase block mb-1">
                  Laporan Lingkungan
                </span>
                <h4 className="font-display text-lg text-white font-normal">
                  1 catatan baru masuk
                </h4>
                <p className="text-xs text-[#F7F3E8]/65 mt-2 font-light leading-relaxed">
                  "Daun gugur menumpuk di saluran samping gazebo" dari No. 12.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-[#D8C28F]">Status: Baru</span>
                <button
                  onClick={() => handleVerify('rep-12')}
                  className={`text-xs px-3 py-1 rounded-full transition-all ${
                    verifiedItems['rep-12']
                      ? 'bg-[#657A52]/80 text-[#D8C28F]'
                      : 'bg-white/15 text-white hover:bg-[#D8C28F] hover:text-[#252821]'
                  }`}
                >
                  {verifiedItems['rep-12'] ? 'Ditugaskan' : 'Tugaskan Petugas'}
                </button>
              </div>
            </div>

            {/* Context Item 3 */}
            <div className="frost-glass-dark rounded-2xl p-5 border border-[#D8C28F]/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#879477] uppercase block mb-1">
                  Agenda Mendatang
                </span>
                <h4 className="font-display text-lg text-white font-normal">
                  2 agenda perlu koordinasi
                </h4>
                <p className="text-xs text-[#F7F3E8]/65 mt-2 font-light leading-relaxed">
                  Gotong Royong (13 Sep) & Pertemuan Triwulan III (20 Sep). Sebanyak 22 keluarga telah RSVP.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-[#D8C28F]">22 Konfirmasi</span>
                <span className="text-xs text-[#C8A96B] flex items-center gap-1 font-medium">
                  Siap <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Quick Broadcast Section */}
          <div className="frost-glass-dark rounded-2xl p-6 border border-[#D8C28F]/25">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D8C28F]">
                <Bell className="w-4 h-4 text-[#C8A96B]" />
                <span>Kirim Siaran Cepat ke 26 Keluarga</span>
              </div>
              <span className="text-[11px] text-[#F7F3E8]/60">WhatsApp & Portal Warga</span>
            </div>

            {broadcastSent ? (
              <div className="p-4 rounded-xl bg-[#657A52]/40 border border-[#879477]/50 flex items-center gap-3 text-[#D8C28F] text-xs">
                <CheckCircle2 className="w-5 h-5 text-[#C8A96B] shrink-0" />
                <span>Pesan siaran berhasil dikirimkan ke kontak terdaftar seluruh 26 rumah.</span>
              </div>
            ) : (
              <div className="space-y-3">
                <textarea
                  rows={2}
                  defaultValue="Pengingat: Gotong Royong kebersihan klaster akan dimulai besok Minggu pukul 07.00 WIB. Titik kumpul di Gazebo Utama."
                  className="w-full p-3 rounded-xl bg-[#1D2B1E]/60 border border-[#D8C28F]/30 text-xs text-[#F7F3E8] focus:outline-none focus:border-[#D8C28F] resize-none"
                />
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setBroadcastSent(true);
                      setTimeout(() => setBroadcastSent(false), 4000);
                    }}
                    className="px-5 py-2 rounded-full bg-[#C8A96B] hover:bg-[#D8C28F] text-[#252821] text-xs font-semibold tracking-wide transition-all shadow-md hover:shadow-[0_0_15px_rgba(216,194,143,0.4)]"
                  >
                    Kirim Siaran Sekarang
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Panel Footer */}
        <div className="p-4 sm:p-6 bg-[#1D2B1E]/80 border-t border-white/10 flex items-center justify-between text-xs text-[#F7F3E8]/60">
          <span>Cluster Oryza 4 Internal Management System • 26 Homes</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full border border-white/20 text-white hover:bg-[#D8C28F]/20 hover:border-[#D8C28F] hover:text-[#D8C28F] transition-all"
          >
            Tutup Panel
          </button>
        </div>
      </div>
    </div>
  );
};
