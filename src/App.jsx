import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPkgForEnquiry, setSelectedPkgForEnquiry] = useState(null);

  const handleOpenEnquiry = (pkg = null) => {
    setSelectedPkgForEnquiry(pkg);
    setEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
    setSelectedPkgForEnquiry(null);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F1EA] selection:bg-[#C9A96E] selection:text-[#0B0B0B] relative no-overflow-x">
      {/* Desktop Cursor Ring */}
      <CustomCursor />

      {/* Main Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Intro / Hero */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Section 2: About & Services Grid */}
        <AboutServices />

        {/* Section 3: Photography Portfolio & Gallery */}
        <Portfolio />

        {/* Section 4: Rate List & Packages */}
        <Packages onOpenEnquiry={handleOpenEnquiry} />

        {/* Section 5: Call to Action / Contact */}
        <ContactCTA onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Section 6: Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Interactive Booking / Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={handleCloseEnquiry}
        selectedPkg={selectedPkgForEnquiry}
      />
    </div>
  );
}
