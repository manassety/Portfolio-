import React from 'react';
import { X, Check, BookOpen, HardDrive, Sparkles } from 'lucide-react';

export default function PackageModal({ isOpen, pkg, onClose, onSelectEnquiry }) {
  if (!isOpen || !pkg) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-300"
      />

      {/* Modal Content */}
      <div className="relative z-10 max-w-2xl w-full glass-panel-gold rounded-3xl p-6 sm:p-8 my-8 shadow-2xl border border-[#C9A96E]/40 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full glass-panel border border-white/20 text-[#F5F1EA] hover:text-[#C9A96E] transition-all"
          aria-label="Close Package Details"
        >
          <X size={20} />
        </button>

        {/* Package Header */}
        <div className="mb-6 border-b border-white/10 pb-6 pr-8">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold text-[#0B0B0B] bg-[#C9A96E] px-3 py-1 rounded-full uppercase tracking-wider">
              Package {pkg.number}
            </span>
            {pkg.badge && (
              <span className="text-xs uppercase tracking-widest text-[#C9A96E] font-medium">
                {pkg.badge}
              </span>
            )}
          </div>

          <h3 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#F5F1EA]">
            {pkg.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#A8A29A] mt-1 font-light">
            {pkg.tagline}
          </p>

          <div className="mt-4 flex items-baseline space-x-2">
            <span className="font-serif-display text-4xl font-semibold text-[#C9A96E]">
              {pkg.price}
            </span>
            <span className="text-xs text-[#A8A29A]">All Taxes & Data Delivery Included</span>
          </div>
        </div>

        {/* Key Deliverables Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {pkg.deliverables?.album && (
            <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex items-start space-x-3">
              <BookOpen size={18} className="text-[#C9A96E] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A8A29A] font-semibold block">
                  Album & Finishing
                </span>
                <span className="text-xs text-[#F5F1EA] font-medium">
                  {pkg.deliverables.album}
                </span>
              </div>
            </div>
          )}

          {pkg.deliverables?.storage && (
            <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex items-start space-x-3">
              <HardDrive size={18} className="text-[#C9A96E] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A8A29A] font-semibold block">
                  Storage & Backup
                </span>
                <span className="text-xs text-[#F5F1EA] font-medium">
                  {pkg.deliverables.storage}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Detailed Features List */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-widest text-[#C9A96E] font-semibold mb-3 flex items-center space-x-2">
            <Sparkles size={14} />
            <span>Full Services & Inclusions</span>
          </h4>

          <ul className="space-y-2.5">
            {pkg.features.map((feat, i) => (
              <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#F5F1EA]/90">
                <div className="p-1 rounded-full bg-[#C9A96E]/20 text-[#C9A96E] shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onSelectEnquiry(pkg);
            }}
            className="w-full bg-[#C9A96E] text-[#0B0B0B] font-semibold uppercase tracking-widest text-xs py-4 rounded-xl shadow-[0_0_25px_rgba(201,169,110,0.3)] hover:bg-[#DBC087] transition-all"
          >
            Book / Enquire Package
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-4 glass-panel text-xs text-[#A8A29A] hover:text-[#F5F1EA] rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
