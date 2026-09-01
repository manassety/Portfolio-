import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/gallery';
import GalleryModal from './GalleryModal';
import { Camera, Eye, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const filteredItems = activeCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handleOpenModal = (index) => {
    setSelectedItemIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedItemIndex(null);
  };

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const getAspectClass = (aspect) => {
    switch (aspect) {
      case 'portrait':
        return 'aspect-[2/3]';
      case 'landscape':
        return 'aspect-[3/2]';
      case 'wide':
        return 'aspect-[16/9]';
      case 'square':
      default:
        return 'aspect-[1/1]';
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C9A96E] font-medium mb-3">
            <Camera size={14} />
            <span>EDITORIAL GALLERY</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F1EA] tracking-tight leading-tight mb-4">
            VISUAL MASTERPIECES
          </h2>

          <p className="text-sm sm:text-base text-[#A8A29A] font-light">
            A curated portfolio of royal wedding stories, candid moments, aerial vistas, and handcrafted memory albums.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#C9A96E] text-[#0B0B0B] shadow-[0_0_20px_rgba(201,169,110,0.3)] font-bold'
                    : 'glass-panel text-[#A8A29A] hover:text-[#F5F1EA] hover:border-[#C9A96E]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Gallery Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(index)}
              className="break-inside-avoid mb-6 group relative rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer transition-all duration-500 hover:border-[#C9A96E]/60 hover:shadow-[0_15px_35px_rgba(201,169,110,0.15)] transform hover:-translate-y-1.5"
            >
              {/* Image Container with Aspect Ratio */}
              <div className={`w-full overflow-hidden relative ${getAspectClass(item.aspect)}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_25%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.target.src = './images/hero.jpg';
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-widest text-[#C9A96E] font-semibold flex items-center space-x-1">
                      <Sparkles size={11} />
                      <span>{item.categoryLabel}</span>
                    </span>
                    <h3 className="font-serif-display text-2xl font-normal text-[#F5F1EA] mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#A8A29A] mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 p-3 rounded-full bg-[#0B0B0B]/80 text-[#C9A96E] border border-[#C9A96E]/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryModal
        isOpen={selectedItemIndex !== null}
        item={selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null}
        items={filteredItems}
        onClose={handleCloseModal}
        onSelectNext={handleNext}
        onSelectPrev={handlePrev}
      />
    </section>
  );
}
