import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <section id="portfolio" ref={sectionRef} className="py-24 sm:py-32 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div data-reveal="fade-up" className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C9A96E] font-medium mb-3">
            <Camera size={14} />
            <span>EDITORIAL GALLERY</span>
          </div>

          <h2 data-reveal="fade-up" data-delay="0.1" className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F1EA] tracking-tight leading-tight mb-4">
            VISUAL MASTERPIECES
          </h2>

          <p data-reveal="fade-up" data-delay="0.2" className="text-sm sm:text-base text-[#A8A29A] font-light">
            A curated portfolio of royal wedding stories, candid moments, aerial vistas, and handcrafted memory albums.
          </p>
        </div>

        {/* Filter Category Tabs with Framer Motion Pill */}
        <div data-reveal="fade-up" className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="relative px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 focus:outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#C9A96E] rounded-full shadow-[0_0_20px_rgba(201,169,110,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-[#0B0B0B] font-bold' : 'text-[#A8A29A] hover:text-[#F5F1EA]'}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Gallery Layout with Motion & GSAP */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenModal(index)}
                className="break-inside-avoid mb-6 group relative rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer transition-colors duration-500 hover:border-[#C9A96E]/60 hover:shadow-[0_15px_35px_rgba(201,169,110,0.15)]"
              >
                {/* Image Container with Aspect Ratio */}
                <div className={`w-full overflow-hidden relative ${getAspectClass(item.aspect)}`}>
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover object-[center_25%]"
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
