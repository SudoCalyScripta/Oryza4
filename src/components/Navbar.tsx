import React, { useState, useEffect } from 'react';
import { UserRole } from '../types';
import { Shield, Menu, X, ChevronDown, Sparkles, MessageSquarePlus, Home } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

interface NavbarProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onOpenReportModal: () => void;
  onOpenManagementModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRole,
  onRoleChange,
  onOpenReportModal,
  onOpenManagementModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Galeri', href: '#snapshot' },
    { label: 'Data Warga', href: '#neighbors' },
    { label: 'Pengumuman', href: '#announcements' },
    { label: 'Agenda', href: '#events' },
    { label: 'Kas Warga', href: '#community-fund' },
    { label: 'Lapor Lingkungan', href: '#lapor-lingkungan' },
  ];

  const roles: UserRole[] = ['Warga', 'PIC', 'Wakil PIC', 'Bendahara'];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#354936]/90 backdrop-blur-2xl border-b border-[#D8C28F]/20 shadow-[0_15px_35px_-10px_rgba(37,40,33,0.35)] text-white'
            : 'py-6 bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo with delicate Rice leaf motif */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-3 tracking-widest text-left"
            id="nav-brand-logo"
          >
            <div className="w-9 h-9 rounded-xl border border-[#D8C28F]/35 bg-[#354936]/40 backdrop-blur-md flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-sm relative">
              <span className="font-display text-lg tracking-normal font-bold text-[#F7F3E8]">O4</span>
              <span className="absolute -top-1 -right-1 text-[#C8A96B]">
                <RiceGrainIcon className="w-2.5 h-2.5 rotate-12" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-[0.2em] font-semibold text-[#F7F3E8] uppercase leading-none">
                ORYZA 4
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#D8C28F] uppercase mt-1 font-light">
                Paguyuban Warga
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium tracking-wider text-[#F7F3E8]/90 hover:text-[#D8C28F] hover:bg-[#D8C28F]/15 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Role Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Report Button */}
            <button
              id="nav-quick-report-btn"
              onClick={onOpenReportModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#C8A96B] hover:bg-[#D8C28F] text-[#252821] hover:shadow-[0_0_15px_rgba(216,194,143,0.4)] transition-all duration-200 shadow-sm"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-[#354936]" />
              <span>Lapor</span>
            </button>

            {/* Role Switcher Menu */}
            <div className="relative">
              <button
                id="nav-role-switcher-btn"
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border border-[#D8C28F]/30 bg-[#354936]/60 hover:bg-[#354936]/80 hover:border-[#D8C28F] hover:text-[#D8C28F] backdrop-blur-md text-[#F7F3E8] transition-all duration-200"
              >
                <Shield className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span className="font-medium tracking-wide">{currentRole}</span>
                <ChevronDown className="w-3 h-3 opacity-60 text-[#D8C28F]" />
              </button>

              {isRoleDropdownOpen && (
                <div
                  id="nav-role-dropdown"
                  className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#252821]/95 backdrop-blur-2xl border border-[#D8C28F]/25 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-200 text-[#F7F3E8]"
                >
                  <div className="px-3 py-2 border-b border-white/10">
                    <p className="text-[10px] tracking-wider uppercase text-[#D8C28F] font-semibold">Simulasi Peran</p>
                    <p className="text-xs text-white/90 font-medium">Beralih Akses Warga / Pengurus</p>
                  </div>
                  <div className="py-1">
                    {roles.map((role) => (
                      <button
                        key={role}
                        onClick={() => {
                          onRoleChange(role);
                          setIsRoleDropdownOpen(false);
                          if (role !== 'Warga') {
                            onOpenManagementModal();
                          }
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-left transition-colors ${
                          currentRole === role
                            ? 'bg-[#354936] text-[#F7F3E8] font-semibold border border-[#D8C28F]/30'
                            : 'text-white/75 hover:bg-[#D8C28F]/15 hover:text-[#D8C28F]'
                        }`}
                      >
                        <span>{role}</span>
                        {role !== 'Warga' && (
                          <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#C8A96B]/20 text-[#D8C28F] font-mono">
                            Pengurus
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                  {currentRole !== 'Warga' && (
                    <div className="mt-1 pt-1 border-t border-white/10">
                      <button
                        onClick={() => {
                          setIsRoleDropdownOpen(false);
                          onOpenManagementModal();
                        }}
                        className="w-full flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-[#D8C28F] hover:bg-[#D8C28F]/20 hover:text-white transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
                        <span>Buka Panel Pengurus</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-white/10 border border-white/20 hover:border-[#D8C28F]/60 hover:text-[#D8C28F] text-white backdrop-blur-md transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#354936]/95 backdrop-blur-3xl pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden text-white animate-in fade-in duration-300"
        >
          <div className="space-y-4">
            <p className="text-[11px] tracking-[0.25em] uppercase text-[#D8C28F] font-semibold">Navigasi Lingkungan</p>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-3 rounded-xl text-lg font-display text-white/90 hover:text-[#D8C28F] hover:bg-[#D8C28F]/15 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/15 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Peran Pengguna:</span>
              <div className="flex gap-1.5">
                {roles.map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      onRoleChange(r);
                      setIsMobileMenuOpen(false);
                      if (r !== 'Warga') onOpenManagementModal();
                    }}
                    className={`px-2.5 py-1 text-xs rounded-full border transition-all ${
                      currentRole === r
                        ? 'bg-[#C8A96B] text-[#252821] border-[#C8A96B] font-medium'
                        : 'border-white/20 text-white/80 hover:border-[#D8C28F]/60 hover:text-[#D8C28F]'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenReportModal();
              }}
              className="w-full py-3 rounded-xl bg-[#C8A96B] hover:bg-[#D8C28F] text-[#252821] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:shadow-[0_0_20px_rgba(216,194,143,0.35)]"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#354936]" />
              <span>Buat Laporan Lingkungan</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
