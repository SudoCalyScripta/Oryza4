import React, { useEffect, useState } from 'react';
import { ARCHITECTURE_IMAGES } from '../data/mockData';
import { ArrowDown, Compass, Users } from 'lucide-react';
import { RiceGrainIcon } from './RiceMotif';

interface HeroSectionProps {
  onEnterCommunity: () => void;
  onExploreOryza: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onEnterCommunity,
  onExploreOryza,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionPreference = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionPreference);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreference);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax offsets (disabled if user prefers reduced motion)
  const bgOffset = prefersReducedMotion ? 0 : scrollY * 0.35;
  const atmosphereOffset = prefersReducedMotion ? 0 : scrollY * 0.2;
  const contentOffset = prefersReducedMotion ? 0 : scrollY * -0.15;
  const contentOpacity = Math.max(0, 1 - scrollY / 700);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#252821]"
    >
      {/* LAYER 1: Architectural Background (Slow Parallax) */}
      <div
        className="absolute inset-0 w-full h-[125%] -top-[12%] z-0 will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${bgOffset}px, 0) scale(1.05)`,
          backgroundImage: `url(${ARCHITECTURE_IMAGES.hero})`,
          backgroundPosition: 'center 45%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* LAYER 2: Warm Sunlight & Deep Green Atmosphere (Medium Parallax) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity will-change-transform"
        style={{
          transform: `translate3d(0, ${atmosphereOffset}px, 0)`,
          background: `
            radial-gradient(ellipse at 50% 32%, rgba(101, 122, 82, 0.42) 0%, rgba(53, 73, 54, 0.85) 70%, rgba(37, 40, 33, 0.96) 100%),
            linear-gradient(180deg, rgba(53, 73, 54, 0.65) 0%, rgba(101, 122, 82, 0.3) 50%, #252821 100%)
          `,
        }}
      />

      {/* Subtle Golden Sunlight Glow at Golden Hour */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full blur-[140px] pointer-events-none z-10 opacity-30"
        style={{
          backgroundColor: '#D8C28F',
        }}
      />

      {/* LAYER 3: Foreground Frosted Glass Elements & Typography */}
      <div
        className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center will-change-transform"
        style={{
          transform: `translate3d(0, ${contentOffset}px, 0)`,
          opacity: contentOpacity,
        }}
      >
        {/* Small Editorial Pill with Rice Grain motif */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D8C28F]/30 bg-white/10 backdrop-blur-xl shadow-lg mb-6 sm:mb-8 animate-in fade-in duration-700">
          <RiceGrainIcon className="w-3 h-3 text-[#C8A96B]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#F7F3E8]/95">
            Private Resident Community
          </span>
        </div>

        {/* Dramatic Display Typography */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F7F3E8] font-normal tracking-[0.14em] uppercase leading-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)]">
          ORYZA 4
        </h1>

        {/* Tagline */}
        <div className="mt-4 sm:mt-6 max-w-2xl">
          <p className="text-lg sm:text-2xl md:text-3xl font-light text-[#F7F3E8]/95 tracking-wide font-sans">
            26 Homes. <span className="italic font-display font-normal text-[#D8C28F]">One Community.</span>
          </p>
          <p className="mt-3 text-xs sm:text-sm text-[#F7F3E8]/75 font-light max-w-lg mx-auto tracking-wider leading-relaxed">
            Kawasan residensial privat bersahaja di mana ketenangan arsitektur, kelestarian alam, dan kehangatan bertetangga berpadu sempurna.
          </p>
        </div>

        {/* Action Buttons with Frost UI */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <button
            id="hero-enter-community-btn"
            onClick={onEnterCommunity}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider text-[#252821] bg-[#F7F3E8] hover:bg-[#D8C28F] hover:shadow-[0_12px_30px_-5px_rgba(216,194,143,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
          >
            <Users className="w-4 h-4 text-[#354936]" />
            <span>Enter Community</span>
          </button>

          <button
            id="hero-explore-oryza-btn"
            onClick={onExploreOryza}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium tracking-wider text-[#F7F3E8] border border-[#D8C28F]/35 bg-white/10 hover:bg-[#D8C28F]/20 hover:text-[#D8C28F] hover:border-[#D8C28F] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(216,194,143,0.25)] active:scale-95 flex items-center justify-center gap-2.5 shadow-sm"
          >
            <Compass className="w-4 h-4 text-[#C8A96B]" />
            <span>Explore Oryza 4</span>
          </button>
        </div>

        {/* Floating Cluster Micro Stats Bar */}
        <div className="mt-12 sm:mt-14 hidden md:inline-flex items-center gap-6 px-6 py-2.5 rounded-full border border-[#D8C28F]/20 bg-[#252821]/45 backdrop-blur-2xl text-[#F7F3E8]/85 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#879477]" />
            <span className="font-medium text-white">26 / 26</span>
            <span className="text-[#F7F3E8]/60">Keluarga Terdaftar</span>
          </div>
          <div className="h-3 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-[#D8C28F] font-semibold">24 Jam</span>
            <span className="text-[#F7F3E8]/60">Keamanan & CCTV</span>
          </div>
          <div className="h-3 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-[#C8A96B] font-semibold">Aktif</span>
            <span className="text-[#F7F3E8]/60">Pengelolaan Lingkungan Mandiri</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#introduction"
        onClick={(e) => {
          e.preventDefault();
          const intro = document.getElementById('introduction');
          intro?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#F7F3E8]/75 hover:text-[#D8C28F] transition-colors group cursor-pointer"
        id="hero-scroll-indicator"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium group-hover:tracking-[0.3em] transition-all">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border border-white/30 group-hover:border-[#D8C28F]/60 flex items-start justify-center p-1.5 bg-white/5 backdrop-blur-sm transition-colors">
          <div className="w-1.5 h-2 bg-[#C8A96B] rounded-full animate-bounce" />
        </div>
      </a>

      {/* Bottom Gradient Fade for Seamless Parallax Transition into Rice Ivory */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7F3E8] via-[#F7F3E8]/30 to-transparent pointer-events-none z-10" />
    </section>
  );
};
