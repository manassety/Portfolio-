import React, { useState, useEffect, useRef } from 'react';
import { galleryCategories, galleryItems } from '../data/gallery';
import GalleryModal from './GalleryModal';
import { initScrollReveals } from '../utils/gsapUtils';
import { Camera, Eye, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    initScrollReveals(sectionRef.current);
  }, []);

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
    <section id="portfolio" ref={sectionRef} className="py-24 sm:py-32 bg-[#ECE7DE] relative text-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div data-reveal="fade-up" className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B08A45] font-semibold mb-3">
            <Camera size={14} />
            <span>EDITORIAL GALLERY</span>
          </div>

          <h2 data-reveal="fade-up" data-delay="0.1" className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#171717] tracking-tight leading-tight mb-4">
            VISUAL MASTERPIECES
          </h2>

          <p data-reveal="fade-up" data-delay="0.2" className="text-sm sm:text-base text-[#625D55] font-light">
            A curated portfolio of royal wedding stories, candid moments, aerial vistas, and handcrafted memory albums.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div data-reveal="fade-up" className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#B08A45] text-white shadow-[0_4px_15px_rgba(176,138,69,0.3)] font-semibold'
                    : 'bg-white text-[#625D55] hover:text-[#171717] hover:border-[#B08A45] border border-[#B08A45]/20 shadow-sm'
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
              className="break-inside-avoid mb-6 group relative rounded-2xl overflow-hidden bg-white border border-[#B08A45]/20 cursor-pointer transition-all duration-500 hover:border-[#B08A45] hover:shadow-[0_15px_35px_rgba(176,138,69,0.2)] transform hover:-translate-y-1.5"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-widest text-[#E6CA94] font-semibold flex items-center space-x-1">
                      <Sparkles size={11} />
                      <span>{item.categoryLabel}</span>
                    </span>
                    <h3 className="font-serif-display text-2xl font-normal text-white mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#ECE7DE] mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 p-3 rounded-full bg-[#171717]/80 text-[#B08A45] border border-[#B08A45]/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
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
