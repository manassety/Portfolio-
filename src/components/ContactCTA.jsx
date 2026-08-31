import React, { useRef, useEffect } from 'react';
import { contactConfig } from '../config/contact';
import { initScrollReveals } from '../utils/gsapUtils';
import { Phone, MessageSquare, Calendar, Sparkles, MapPin, Instagram, Youtube, Facebook, Clock } from 'lucide-react';

export default function ContactCTA({ onOpenEnquiry }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    initScrollReveals(sectionRef.current);
  }, []);

  const handleCallClick = () => {
    window.location.href = `tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`;
  };

  const handleWhatsAppClick = () => {
    const cleanNum = contactConfig.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNum}?text=Hello%20Sety%20Videos%2C%20I%20would%20like%20to%20enquire%20about%20wedding%20photography%20packages.`, '_blank');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 sm:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A96E]/10 via-[#0B0B0B]/80 to-[#0B0B0B]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-16 border border-[#C9A96E]/30 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#C9A96E]/40" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#C9A96E]/40" />

          {/* Eyebrow */}
          <div data-reveal="fade-up" className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C9A96E] font-medium mb-4">
            <Sparkles size={14} />
            <span>DIRECT STUDIO CONTACT</span>
          </div>

          {/* Main Headline */}
          <h2 data-reveal="fade-up" data-delay="0.1" className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-normal text-[#F5F1EA] tracking-tight leading-tight mb-6">
            LET'S CAPTURE YOUR STORY
          </h2>

          <p data-reveal="fade-up" data-delay="0.2" className="text-base sm:text-xl text-[#A8A29A] font-light max-w-2xl mx-auto mb-10">
            "Your moments. Our frames. Memories that last forever."
          </p>

          {/* Direct Studio Contact Cards Grid */}
          <div data-reveal="fade-up" data-delay="0.3" className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10 text-left">
            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center space-x-4 hover:border-[#C9A96E]/50 transition-all overflow-hidden">
              <div className="p-3.5 rounded-xl bg-[#C9A96E]/10 text-[#C9A96E] border border-[#C9A96E]/20 shrink-0">
                <Phone size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase tracking-widest text-[#A8A29A] font-semibold block">
                  Call / WhatsApp
                </span>
                <a
                  href={`tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-mono text-base sm:text-lg font-bold text-[#F5F1EA] hover:text-[#C9A96E] transition-colors block mt-0.5 whitespace-nowrap tracking-wider"
                >
                  {contactConfig.phone}
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center space-x-4 hover:border-[#C9A96E]/50 transition-all overflow-hidden">
              <div className="p-3.5 rounded-xl bg-[#C9A96E]/10 text-[#C9A96E] border border-[#C9A96E]/20 shrink-0">
                <Instagram size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase tracking-widest text-[#A8A29A] font-semibold block">
                  Instagram Page
                </span>
                <a
                  href={contactConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif-display text-base sm:text-lg font-normal text-[#F5F1EA] hover:text-[#C9A96E] transition-colors block mt-0.5 truncate"
                  title={contactConfig.instagramHandle}
                >
                  {contactConfig.instagramHandle}
                </a>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center space-x-4 hover:border-[#C9A96E]/50 transition-all overflow-hidden">
              <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Facebook size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase tracking-widest text-[#A8A29A] font-semibold block">
                  Facebook Page
                </span>
                <a
                  href={contactConfig.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif-display text-base sm:text-lg font-normal text-[#F5F1EA] hover:text-[#C9A96E] transition-colors block mt-0.5 truncate"
                  title={contactConfig.facebookHandle}
                >
                  {contactConfig.facebookHandle}
                </a>
              </div>
            </div>

            {/* YouTube Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center space-x-4 hover:border-[#C9A96E]/50 transition-all overflow-hidden">
              <div className="p-3.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                <Youtube size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase tracking-widest text-[#A8A29A] font-semibold block">
                  YouTube Channel
                </span>
                <a
                  href={contactConfig.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif-display text-xs sm:text-sm font-normal text-[#F5F1EA] hover:text-[#C9A96E] transition-colors block mt-0.5 truncate"
                  title={contactConfig.youtubeHandle}
                >
                  {contactConfig.youtubeHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Studio Address Card */}
          <div data-reveal="fade-up" data-delay="0.35" className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center space-x-4 max-w-3xl mx-auto mb-10 text-left hover:border-[#C9A96E]/50 transition-all">
            <div className="p-3.5 rounded-xl bg-[#C9A96E]/10 text-[#C9A96E] border border-[#C9A96E]/20 shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A8A29A] font-semibold block">
                STUDIO LOCATION & ADDRESS
              </span>
              <address className="not-italic font-serif-display text-lg sm:text-xl font-normal text-[#F5F1EA] mt-0.5 leading-snug">
                {contactConfig.address}
              </address>
            </div>
          </div>

          {/* Quick Interactive Actions */}
          <div data-reveal="fade-up" data-delay="0.4" className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mx-auto mb-10">
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto px-8 py-4 bg-[#C9A96E] text-[#0B0B0B] font-semibold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#DBC087] transition-all shadow-[0_0_25px_rgba(201,169,110,0.3)] flex items-center justify-center space-x-2"
            >
              <Calendar size={15} />
              <span>BOOK EVENT DATES</span>
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 py-4 glass-panel border border-emerald-500/30 text-emerald-400 font-semibold text-xs uppercase tracking-[0.2em] rounded-full hover:border-emerald-400 hover:bg-emerald-500/10 transition-all flex items-center justify-center space-x-2"
            >
              <MessageSquare size={15} />
              <span>CHAT ON WHATSAPP</span>
            </button>
          </div>

          {/* Studio Hours & Booking Status */}
          <div data-reveal="fade-up" data-delay="0.5" className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A29A] gap-4">
            <div className="flex items-center space-x-2">
              <Clock size={14} className="text-[#C9A96E]" />
              <span>{contactConfig.hours}</span>
            </div>
            <div className="text-[#C9A96E] font-medium">
              ✨ {contactConfig.bookingStatus}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
