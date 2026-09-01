import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-4 shadow-2xl'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Business Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <img
              src="./images/gallery/logo/logos.png"
              alt="SETY VIDEOS AND MIXING LAB Logo"
              className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-wider text-[#F5F1EA] group-hover:text-[#B08A45] transition-colors duration-300">
                SETY
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#B08A45] font-semibold">
                VIDEOS & MIXING LAB
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.18em] text-[#F5F1EA]/90 hover:text-[#B08A45] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B08A45] hover:after:w-full after:transition-all after:duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Direct Contact Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center space-x-2 rounded-full border border-[#B08A45]/60 bg-[#B08A45]/10 px-5 py-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#F5F1EA] hover:bg-[#B08A45] hover:text-white transition-all duration-300 shadow-sm"
            >
              <Phone size={13} className="text-[#B08A45] group-hover:text-white" />
              <span>Call Studio</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F1EA] hover:text-[#B08A45] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#171717]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-12 md:hidden animate-fade-in text-[#F5F1EA]">
          <div className="flex flex-col space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B08A45] border-b border-white/10 pb-3 font-semibold">
              Navigation Menu
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif-display text-3xl font-normal text-[#F5F1EA] hover:text-[#B08A45] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans text-[#B08A45] font-mono">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-4 pt-8 border-t border-white/10">
            <a
              href={`tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#B08A45] text-white font-semibold uppercase tracking-widest text-xs py-4 rounded-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center space-x-2"
            >
              <Phone size={15} />
              <span>Call {contactConfig.phone}</span>
            </a>

            <div className="flex items-center justify-around pt-2 text-[#ECE7DE]/70 text-xs">
              {contactConfig.whatsapp && (
                <a
                  href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 hover:text-[#B08A45]"
                >
                  <MessageSquare size={14} />
                  <span>Chat on WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
