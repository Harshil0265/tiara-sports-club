/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AdminInboxModal } from './components/AdminInboxModal';
import { FirstTimeLoader } from './components/FirstTimeLoader';
import { PageTransitionLoader } from './components/PageTransitionLoader';
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { FacilitiesView } from './components/views/FacilitiesView';
import { BlogView } from './components/views/BlogView';
import { ContactView } from './components/views/ContactView';
import { LegalView } from './components/views/LegalView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<NavRoute>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingFacilityId, setBookingFacilityId] = useState<string>('tennis-courts');
  const [isAdminInboxOpen, setIsAdminInboxOpen] = useState<boolean>(false);

  // Task 4: First-time entry loading animation
  const [showFirstTimeLoader, setShowFirstTimeLoader] = useState<boolean>(true);

  // Task 5: Animated sports icons loader on every page redirection
  const [isPageTransitioning, setIsPageTransitioning] = useState<boolean>(false);
  const [transitionTargetPage, setTransitionTargetPage] = useState<string>('home');

  // Sync dark class on root document and html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#090a0f';
      document.body.style.color = '#f8fafc';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
  }, [isDarkMode]);

  // Working theme toggle
  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Animated page redirection handler with sports icon loader
  const handleNavigate = (newRoute: NavRoute) => {
    if (newRoute === currentRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTransitionTargetPage(newRoute);
    setIsPageTransitioning(true);

    setTimeout(() => {
      setCurrentRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => {
        setIsPageTransitioning(false);
      }, 320);
    }, 280);
  };

  const handleOpenBooking = (facilityId: string = 'tennis-courts') => {
    setBookingFacilityId(facilityId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        isDarkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Task 4: Creative First-Time Site Entry Loading Page Animation */}
      {showFirstTimeLoader && (
        <FirstTimeLoader onComplete={() => setShowFirstTimeLoader(false)} />
      )}

      {/* Task 5: Sports Icons Animated Redirection Loader */}
      {isPageTransitioning && (
        <PageTransitionLoader
          targetPageName={transitionTargetPage}
          isLightMode={!isDarkMode}
        />
      )}

      {/* Top Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Multi-Sport Content View */}
      <main className="flex-1 w-full">
        {currentRoute === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            isDarkMode={isDarkMode}
          />
        )}
        {currentRoute === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            isDarkMode={isDarkMode}
          />
        )}
        {currentRoute === 'facilities' && (
          <FacilitiesView
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            isDarkMode={isDarkMode}
          />
        )}
        {currentRoute === 'blog' && (
          <BlogView
            onNavigate={handleNavigate}
            isDarkMode={isDarkMode}
          />
        )}
        {currentRoute === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            isDarkMode={isDarkMode}
          />
        )}
        {currentRoute === 'legal' && (
          <LegalView
            onNavigate={handleNavigate}
            isDarkMode={isDarkMode}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
      />

      {/* Multi-Sport Court & Turf Booking Pass Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultFacilityId={bookingFacilityId}
        isDarkMode={isDarkMode}
      />

      {/* Admin Inquiry Inbox & Email Dispatch Modal */}
      <AdminInboxModal
        isOpen={isAdminInboxOpen}
        onClose={() => setIsAdminInboxOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
