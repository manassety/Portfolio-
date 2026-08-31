import React from 'react';
import { contactConfig } from '../config/contact';
import { Instagram, Facebook, Youtube, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/10 text-[#A8A29A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column (2 Spans on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center space-x-3 group">
              <img
                src="./images/gallery/Logo/LoGoS.png"
                alt="SETY VIDEOS AND MIXING LAB Logo"
                className="h-12 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-wider text-[#F5F1EA] block">
                  SETY
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-semibold block">
                  VIDEOS & MIXING LAB
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-[#A8A29A] font-light max-w-sm leading-relaxed">
              {contactConfig.shortAbout}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {contactConfig.socials.instagram && (
                <a
                  href={contactConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full glass-panel text-[#F5F1EA] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors"
                  aria-label="Instagram Page"
                >
                  <Instagram size={16} />
                </a>
              )}
              {contactConfig.socials.facebook && (
                <a
                  href={contactConfig.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full glass-panel text-[#F5F1EA] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors"
                  aria-label="Facebook Page"
                >
                  <Facebook size={16} />
                </a>
              )}
              {contactConfig.socials.youtube && (
                <a
                  href={contactConfig.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full glass-panel text-[#F5F1EA] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors"
                  aria-label="YouTube Channel"
                >
                  <Youtube size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#F5F1EA] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'Services', 'Portfolio', 'Packages', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#C9A96E] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#F5F1EA] font-semibold mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>Traditional Photography</li>
              <li>Traditional Videography</li>
              <li>Cinematic Wedding Films</li>
              <li>Candid Photography</li>
              <li>Drone Aerial Shoots</li>
              <li>Wedding Albums (14x40)</li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#F5F1EA] font-semibold mb-4">
              Studio Desk
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="text-[#F5F1EA] font-medium font-serif-display text-base">{contactConfig.phone}</li>
              <li className="text-[#C9A96E]">IG: {contactConfig.instagramHandle}</li>
              <li>{contactConfig.email}</li>
              <li className="text-[#A8A29A]/80">{contactConfig.address}</li>
              <li className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="text-xs uppercase tracking-wider text-[#C9A96E] underline hover:text-[#F5F1EA] transition-colors"
                >
                  Book Event Now &rarr;
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A29A] gap-4">
          <p>© 2026 Sety Videos and Mixing Lab. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span>Crafted for Wedding Memories</span>
              <Heart size={12} className="text-[#C9A96E] fill-[#C9A96E]" />
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full glass-panel text-[#F5F1EA] hover:text-[#C9A96E] transition-colors"
              aria-label="Scroll Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
