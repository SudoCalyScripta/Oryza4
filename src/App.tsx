import React, { useState } from 'react';
import { UserRole } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { GallerySection } from './components/GallerySection';
import { NeighborsSection } from './components/NeighborsSection';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { EventsSection } from './components/EventsSection';
import { CommunityFundSection } from './components/CommunityFundSection';
import { LaporLingkunganSection } from './components/LaporLingkunganSection';
import { ManagementPanel } from './components/ManagementPanel';
import { ExploreModal } from './components/ExploreModal';
import { Footer } from './components/Footer';

export default function App() {
    const [currentRole, setCurrentRole] = useState<UserRole>('Warga');
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const [isManagementModalOpen, setIsManagementModalOpen] = useState(false);
    const [isExploreModalOpen, setIsExploreModalOpen] = useState(false);

    const handleEnterCommunity = () => {
        const el = document.getElementById('introduction');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleExploreOryza = () => {
        setIsExploreModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#F7F3E8] text-[#252821] selection:bg-[#354936] selection:text-[#F7F3E8] relative">
            {/* Subtle Natural Paper Grain Texture Overlay */}
            <div id="paper-grain-texture" className="paper-grain-overlay" aria-hidden="true" />

            {/* Floating Glass Navigation */}
            <Navbar
                currentRole={currentRole}
                onRoleChange={setCurrentRole}
                onOpenReportModal={() => setIsReportModalOpen(true)}
                onOpenManagementModal={() => setIsManagementModalOpen(true)}
            />

            {/* 05 — Hero Section with 3-Layer Parallax */}
            <HeroSection
                onEnterCommunity={handleEnterCommunity}
                onExploreOryza={handleExploreOryza}
            />

            {/* 07 — Community Introduction (Asymmetric Editorial Layout) */}
            <IntroductionSection />

            {/* 08 — Galeri Warga (Community Moments & Architecture) */}
            <GallerySection />

            {/* 09 — Our Neighbors (25 Houses Grid & Detail Modal) */}
            <NeighborsSection />

            {/* 10 — Community Notice / Announcements */}
            <AnnouncementsSection />

            {/* 11 — Community Events Timeline */}
            <EventsSection />

            {/* 12 — Community Fund (Rp 12.450.000 & Transparency) */}
            <CommunityFundSection />

            {/* 13 — Lapor Lingkungan Friendly Experience */}
            <LaporLingkunganSection
                isOpenModal={isReportModalOpen}
                onOpenModal={() => setIsReportModalOpen(true)}
                onCloseModal={() => setIsReportModalOpen(false)}
            />

            {/* 20 — Minimal Editorial Footer */}
            <Footer />

            {/* Management Experience Modal for PIC / Wakil PIC / Bendahara */}
            {isManagementModalOpen && (
                <ManagementPanel
                    currentRole={currentRole}
                    onClose={() => setIsManagementModalOpen(false)}
                    onRoleChange={setCurrentRole}
                />
            )}

            {/* Cluster Exploration Modal */}
            <ExploreModal
                isOpen={isExploreModalOpen}
                onClose={() => setIsExploreModalOpen(false)}
            />
        </div>
    );
}
