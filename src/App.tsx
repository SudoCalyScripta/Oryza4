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
import { Footer } from './components/Footer';

export default function App() {
    const [currentRole, setCurrentRole] = useState<UserRole>('Warga');
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const [isManagementModalOpen, setIsManagementModalOpen] = useState(false);

    const handleEnterCommunity = () => {
        const el = document.getElementById('introduction');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#F7F3E8] text-[#252821] selection:bg-[#354936] selection:text-[#F7F3E8] relative">
            <div id="paper-grain-texture" className="paper-grain-overlay" aria-hidden="true" />
            <Navbar
                currentRole={currentRole}
                onRoleChange={setCurrentRole}
                onOpenReportModal={() => setIsReportModalOpen(true)}
                onOpenManagementModal={() => setIsManagementModalOpen(true)}
            />
            <HeroSection
                onEnterCommunity={handleEnterCommunity}
            />
            <IntroductionSection />
            <GallerySection />
            <NeighborsSection />
            <AnnouncementsSection />
            <EventsSection />
            <CommunityFundSection />
            <LaporLingkunganSection
                isOpenModal={isReportModalOpen}
                onOpenModal={() => setIsReportModalOpen(true)}
                onCloseModal={() => setIsReportModalOpen(false)}
            />
            <Footer />
            {isManagementModalOpen && (
                <ManagementPanel
                    currentRole={currentRole}
                    onClose={() => setIsManagementModalOpen(false)}
                    onRoleChange={setCurrentRole}
                />
            )}
        </div>
    );
}
