import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function Navbar({ onOpenEnquiry }) {
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
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
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
              src="./images/gallery/Logo/LoGoS.png"
              alt="SETY VIDEOS AND MIXING LAB Logo"
              className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-wider text-[#F5F1EA] group-hover:text-[#C9A96E] transition-colors duration-300">
                SETY
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
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
                className="text-xs uppercase tracking-[0.18em] text-[#F5F1EA]/80 hover:text-[#C9A96E] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A96E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden rounded-full border border-[#C9A96E]/50 px-6 py-2.5 text-xs uppercase tracking-[0.18em] font-medium text-[#F5F1EA] transition-all duration-300 hover:border-[#C9A96E] hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]"
            >
              <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 group-hover:text-[#0B0B0B] transition-colors duration-300">
                Enquire Now
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F1EA] hover:text-[#C9A96E] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-12 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] border-b border-white/10 pb-3 font-semibold">
                Navigation Menu
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  className="font-serif-display text-3xl font-normal text-[#F5F1EA] hover:text-[#C9A96E] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans text-[#C9A96E]/50 font-mono">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col space-y-4 pt-8 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full bg-[#C9A96E] text-[#0B0B0B] font-semibold uppercase tracking-widest text-xs py-4 rounded-lg shadow-lg active:scale-95 transition-transform"
              >
                Enquire Now for Event
              </button>

              <div className="flex items-center justify-around pt-2 text-[#A8A29A] text-xs">
                {contactConfig.phone && (
                  <a
                    href={`tel:${contactConfig.phone}`}
                    className="flex items-center space-x-2 hover:text-[#C9A96E]"
                  >
                    <Phone size={14} />
                    <span>Call Us</span>
                  </a>
                )}
                {contactConfig.whatsapp && (
                  <a
                    href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 hover:text-[#C9A96E]"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
