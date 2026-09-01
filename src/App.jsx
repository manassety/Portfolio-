import React, { Component } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import Portfolio from './components/Portfolio';
import Packages from './components/Packages';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

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
        <div className="min-h-screen bg-[#171717] text-[#F5F1EA] flex flex-col items-center justify-center p-6 text-center">
          <h2 className="font-serif-display text-3xl font-bold text-[#B08A45] mb-2">SETY VIDEOS AND MIXING LAB</h2>
          <p className="text-sm text-[#ECE7DE]/80 mb-6">Something went wrong while loading the page. Please refresh.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#B08A45] text-white font-semibold text-xs uppercase tracking-wider rounded-full"
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
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#171717] text-[#F5F1EA] selection:bg-[#B08A45] selection:text-white relative no-overflow-x">
        {/* Desktop Cursor Ring */}
        <CustomCursor />

        {/* Main Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Section 1: Intro / Hero */}
          <Hero />

          {/* Section 2: About & Services Grid */}
          <AboutServices />

          {/* Section 3: Photography Portfolio & Gallery */}
          <Portfolio />

          {/* Section 4: Rate List & Packages */}
          <Packages />

          {/* Section 5: Call to Action / Contact */}
          <ContactCTA />
        </main>

        {/* Section 6: Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
