import React, { useState } from 'react';
import { X, Send, Calendar, User, Phone as PhoneIcon, CheckCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';
import { packagesData } from '../data/packages';

export default function EnquiryModal({ isOpen, onClose, selectedPkg }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    eventType: 'Wedding',
    packageId: selectedPkg ? selectedPkg.name : 'General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-2xl transition-opacity duration-300"
      />

      {/* Modal Content */}
      <div className="relative z-10 max-w-lg w-full glass-panel-gold rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#C9A96E]/40 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full glass-panel text-[#F5F1EA] hover:text-[#C9A96E]"
          aria-label="Close Enquiry Modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 border-b border-white/10 pb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A96E] font-semibold">
                BOOK YOUR EVENT
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#F5F1EA] mt-1">
                Enquire With Studio
              </h3>
              <p className="text-xs text-[#A8A29A] mt-1 font-light">
                {contactConfig.brandName} • Event Booking Desk
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Name Input */}
              <div>
                <label className="block text-[#A8A29A] uppercase tracking-wider text-[10px] font-medium mb-1.5">
                  Your Name *
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29A]" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#151515] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[#F5F1EA] placeholder-[#A8A29A]/50 focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-[#A8A29A] uppercase tracking-wider text-[10px] font-medium mb-1.5">
                  Mobile Number *
                </label>
                <div className="relative">
                  <PhoneIcon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29A]" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#151515] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[#F5F1EA] placeholder-[#A8A29A]/50 focus:outline-none focus:border-[#C9A96E]"
                  />
                </div>
              </div>

              {/* Event Date & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A8A29A] uppercase tracking-wider text-[10px] font-medium mb-1.5">
                    Event Date *
                  </label>
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A29A]" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#151515] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#A8A29A] uppercase tracking-wider text-[10px] font-medium mb-1.5">
                    Package Selected
                  </label>
                  <select
                    value={formData.packageId}
                    onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                    className="w-full bg-[#151515] border border-white/10 rounded-xl py-3 px-3 text-[#F5F1EA] focus:outline-none focus:border-[#C9A96E]"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    {packagesData.map((p) => (
                      <option key={p.id} value={p.name}>
                        Package {p.number}: {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#A8A29A] uppercase tracking-wider text-[10px] font-medium mb-1.5">
                  Additional Event Details / Venue
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your wedding venue, dates, or specific video preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#151515] border border-white/10 rounded-xl p-3 text-[#F5F1EA] placeholder-[#A8A29A]/50 focus:outline-none focus:border-[#C9A96E]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A96E] text-[#0B0B0B] font-semibold uppercase tracking-widest text-xs py-4 rounded-xl shadow-[0_0_25px_rgba(201,169,110,0.3)] hover:bg-[#DBC087] transition-all flex items-center justify-center space-x-2 mt-4"
              >
                <Send size={15} />
                <span>Submit Booking Enquiry</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#C9A96E]/20 text-[#C9A96E] rounded-full flex items-center justify-center mx-auto border border-[#C9A96E]/40">
              <CheckCircle size={36} />
            </div>

            <h3 className="font-serif-display text-3xl font-normal text-[#F5F1EA]">
              Enquiry Received!
            </h3>

            <p className="text-xs text-[#A8A29A] max-w-sm mx-auto leading-relaxed">
              Thank you <strong className="text-[#F5F1EA]">{formData.name}</strong>. The team at <strong className="text-[#C9A96E]">{contactConfig.brandName}</strong> will get in touch with you shortly to confirm your booking dates and package terms.
            </p>

            <button
              onClick={handleReset}
              className="bg-[#C9A96E] text-[#0B0B0B] font-semibold uppercase tracking-widest text-xs px-8 py-3.5 rounded-xl shadow-lg mt-4 hover:bg-[#DBC087] transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
