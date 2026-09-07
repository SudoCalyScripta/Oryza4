import React, { useEffect, useState, useRef } from 'react';
import { ARCHITECTURE_IMAGES } from '../data/mockData';
import { Trees, ShieldCheck, HeartHandshake } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

export const IntroductionSection: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setInView(true);
                    setScrollY(window.scrollY - (sectionRef.current.offsetTop || 0));
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="introduction"
            className="relative py-28 md:py-36 px-6 md:px-12 bg-[#F7F3E8] text-[#252821] overflow-hidden"
        >
            {/* Decorative subtle background typography */}
            <div className="absolute -top-10 -right-20 pointer-events-none select-none opacity-[0.03] text-[#354936] font-display text-[22vw] leading-none whitespace-nowrap">
                ORYZA
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Top Editorial Label */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-px bg-[#C8A96B]" />
                    <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#657A52] flex items-center gap-1.5">
                        <RiceGrainIcon className="w-3.5 h-3.5 text-[#C8A96B]" />
                        Tentang Paguyuban
                    </span>
                </div>

                {/* Section Headline */}
                <div className="max-w-3xl mb-16 md:mb-20">
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#354936] leading-tight font-normal">
                        Lebih dari sekadar tempat tinggal.
                    </h2>
                    <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-[#756653] font-light leading-snug">
                        Tempat <span className="font-display italic text-[#657A52] font-normal">25 rumah</span> tumbuh sebagai satu lingkungan.
                    </p>
                </div>

                {/* Asymmetric Layout: Architectural Image with Parallax + Floating Glass Panel */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
                    {/* Architectural Image Container (7 Cols) */}
                    <div className="lg:col-span-7 relative group">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#354936]/15 aspect-[16/11]">
                            <img
                                src={ARCHITECTURE_IMAGES.introduction}
                                alt="Arsitektur tropis modern Cluster Oryza 4"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                style={{
                                    transform: inView ? `translate3d(0, ${scrollY * 0.05}px, 0)` : undefined,
                                }}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#252821]/45 via-transparent to-transparent pointer-events-none" />

                            {/* In-image caption tag */}
                            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-[#F7F3E8] text-xs">
                                <span className="backdrop-blur-md bg-[#252821]/50 px-3.5 py-1 rounded-full border border-white/20">
                                    Desain Residensial Tropis Kontemporer
                                </span>
                                <span className="hidden sm:inline-block text-[#D8C28F] font-mono text-[11px]">
                                    Berdiri sejak 2020 • 25 Rumah
                                </span>
                            </div>
                        </div>

                        {/* Subtle decorative underlay shadow element */}
                        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#879477]/20 rounded-full blur-3xl -z-10" />
                    </div>

                    {/* Floating Frosted Glass Panel (5 Cols, overlapping visually) */}
                    <div className="lg:col-span-5 relative lg:-ml-12 z-20">
                        <div className="frost-glass frost-glass-hover rounded-3xl p-8 sm:p-10 border border-[#354936]/12 shadow-[0_20px_50px_-15px_rgba(53,73,54,0.08)]">
                            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#354936] mb-4">
                                <Trees className="w-4 h-4 text-[#657A52]" />
                                <span>Privat & Harmonis</span>
                            </div>

                            <h3 className="font-display text-2xl sm:text-3xl text-[#354936] font-normal leading-snug mb-5">
                                Kenyamanan intim dalam ekosistem hunian terpelihara.
                            </h3>

                            <p className="text-sm sm:text-base text-[#756653] leading-relaxed font-normal mb-6">
                                Dibangun atas dasar rasa saling percaya antar tetangga, Cluster Oryza 4 menghadirkan harmoni antara privasi setiap keluarga dengan kebersamaan yang hangat.
                            </p>

                            <div className="space-y-4 pt-4 border-t border-[#354936]/10 text-sm">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-full bg-[#657A52]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#354936]">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#252821] text-xs uppercase tracking-wider">Akses Satu Pintu Terpantau</h4>
                                        <p className="text-xs text-[#756653] mt-0.5">Sistem keamanan gerbang 24 jam dengan integrasi plat kendaraan otomatis.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-8 h-8 rounded-full bg-[#657A52]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#354936]">
                                        <HeartHandshake className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#252821] text-xs uppercase tracking-wider">Guyub & Transparan</h4>
                                        <p className="text-xs text-[#756653] mt-0.5">Seluruh pembiayaan kas lingkungan dan laporan perbaikan dapat diakses terbuka.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
