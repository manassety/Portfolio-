import React, { useState, Component } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Studio Portfolio Component Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B0B0B] text-[#F5F1EA] flex flex-col items-center justify-center p-6 text-center">
          <h2 className="font-serif-display text-3xl font-bold text-[#C9A96E] mb-2">SETY VIDEOS AND MIXING LAB</h2>
          <p className="text-sm text-[#A8A29A] mb-6">Something went wrong while loading the interactive elements. Please refresh the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#C9A96E] text-[#0B0B0B] font-semibold text-xs uppercase tracking-wider rounded-full"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

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
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}
