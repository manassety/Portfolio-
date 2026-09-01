import React from 'react';
import { X, Check, BookOpen, HardDrive, Sparkles, Phone } from 'lucide-react';
import { contactConfig } from '../config/contact';

export default function PackageModal({ isOpen, pkg, onClose }) {
  if (!isOpen || !pkg) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-300"
      />

      {/* Modal Content */}
      <div className="relative z-10 max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-8 my-8 shadow-2xl border border-[#B08A45]/30 text-[#171717] animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#ECE7DE] text-[#171717] hover:text-[#B08A45] transition-all"
          aria-label="Close Package Details"
        >
          <X size={20} />
        </button>

        {/* Package Header */}
        <div className="mb-6 border-b border-[#ECE7DE] pb-6 pr-8">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-mono font-bold text-white bg-[#B08A45] px-3 py-1 rounded-full uppercase tracking-wider">
              Package {pkg.number}
            </span>
            {pkg.badge && (
              <span className="text-xs uppercase tracking-widest text-[#B08A45] font-semibold">
                {pkg.badge}
              </span>
            )}
          </div>

          <h3 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#171717]">
            {pkg.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#625D55] mt-1 font-light">
            {pkg.tagline}
          </p>

          <div className="mt-4 flex items-baseline space-x-2">
            <span className="font-serif-display text-4xl font-semibold text-[#B08A45]">
              {pkg.price}
            </span>
            <span className="text-xs text-[#625D55]">All Taxes & Data Delivery Included</span>
          </div>
        </div>

        {/* Key Deliverables Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {pkg.deliverables?.album && (
            <div className="bg-[#ECE7DE] p-3.5 rounded-xl border border-[#B08A45]/20 flex items-start space-x-3">
              <BookOpen size={18} className="text-[#B08A45] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#625D55] font-semibold block">
                  Album & Finishing
                </span>
                <span className="text-xs text-[#171717] font-medium">
                  {pkg.deliverables.album}
                </span>
              </div>
            </div>
          )}

          {pkg.deliverables?.storage && (
            <div className="bg-[#ECE7DE] p-3.5 rounded-xl border border-[#B08A45]/20 flex items-start space-x-3">
              <HardDrive size={18} className="text-[#B08A45] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#625D55] font-semibold block">
                  Storage & Backup
                </span>
                <span className="text-xs text-[#171717] font-medium">
                  {pkg.deliverables.storage}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Detailed Features List */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-widest text-[#B08A45] font-semibold mb-3 flex items-center space-x-2">
            <Sparkles size={14} />
            <span>Full Services & Inclusions</span>
          </h4>

          <ul className="space-y-2.5">
            {pkg.features.map((feat, i) => (
              <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#171717]">
                <div className="p-1 rounded-full bg-[#B08A45]/10 text-[#B08A45] shrink-0 mt-0.5">
                  <Check size={12} />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#ECE7DE]">
          <a
            href={`tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full bg-[#B08A45] text-white font-semibold uppercase tracking-widest text-xs py-4 rounded-xl shadow-md hover:bg-[#8F6E33] transition-all flex items-center justify-center space-x-2"
          >
            <Phone size={14} />
            <span>Call Studio {contactConfig.phone}</span>
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-4 bg-[#ECE7DE] text-xs text-[#625D55] hover:text-[#171717] rounded-xl font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
