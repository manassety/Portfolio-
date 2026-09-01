import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function GalleryModal({ isOpen, item, items, onClose, onSelectNext, onSelectPrev }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    },
    [isOpen, onClose, onSelectNext, onSelectPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Dark Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-300"
      />

      {/* Modal Controls Bar */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center space-x-3">
        <span className="text-xs font-mono text-[#A8A29A] hidden sm:inline-block">
          Use ESC or Arrow keys to navigate
        </span>
        <button
          onClick={onClose}
          className="p-3 rounded-full glass-panel border border-white/20 text-[#F5F1EA] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all"
          aria-label="Close Lightbox"
        >
          <X size={22} />
        </button>
      </div>

      {/* Previous Button */}
      <button
        onClick={onSelectPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-panel border border-white/20 text-[#F5F1EA] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all"
        aria-label="Previous Image"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={onSelectNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-panel border border-white/20 text-[#F5F1EA] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all"
        aria-label="Next Image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Image Container */}
      <div className="relative z-10 max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center pointer-events-auto animate-fade-in">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[72vh] flex items-center justify-center bg-[#151515]">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[72vh] w-auto max-w-full object-contain"
            onError={(e) => {
              e.target.src = './images/hero.jpg';
            }}
          />
        </div>

        {/* Caption Details */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#C9A96E] mb-1 font-semibold">
            <span>{item.categoryLabel}</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <MapPin size={10} />
              <span>{item.location}</span>
            </span>
          </div>
          <h3 className="font-serif-display text-xl sm:text-2xl font-normal text-[#F5F1EA]">
            {item.title}
          </h3>
          {item.caption && (
            <p className="text-xs sm:text-sm text-[#A8A29A] font-light mt-1">
              {item.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
