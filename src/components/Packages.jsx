import React, { useState, useEffect, useRef } from 'react';
import { packagesData } from '../data/packages';
import { contactConfig } from '../config/contact';
import PackageModal from './PackageModal';
import PackageCompareModal from './PackageCompareModal';
import { initScrollReveals } from '../utils/gsapUtils';
import { Check, Sparkles, SlidersHorizontal, ArrowRight, Phone } from 'lucide-react';

export default function Packages() {
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    initScrollReveals(sectionRef.current);
  }, []);

  return (
    <section id="packages" ref={sectionRef} className="py-24 sm:py-32 bg-[#F5F1EA] relative text-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div data-reveal="fade-up" className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B08A45] font-semibold mb-3">
            <Sparkles size={14} />
            <span>TRANSPARENT RATE LIST</span>
          </div>

          <h2 data-reveal="fade-up" data-delay="0.1" className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#171717] tracking-tight leading-tight mb-4">
            CHOOSE YOUR PACKAGE
          </h2>

          <p data-reveal="fade-up" data-delay="0.2" className="text-sm sm:text-base text-[#625D55] font-light max-w-2xl mx-auto">
            Professional coverage tailored for your special moments. No hidden charges. All packages include raw data delivery via Google Drive.
          </p>

          <div data-reveal="fade-up" data-delay="0.3" className="mt-6 flex justify-center">
            <button
              onClick={() => setCompareModalOpen(true)}
              className="bg-white border border-[#B08A45]/40 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] text-[#B08A45] hover:bg-[#B08A45] hover:text-white flex items-center space-x-2 transition-all duration-300 shadow-md font-semibold"
            >
              <SlidersHorizontal size={14} />
              <span>Compare All Packages</span>
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg, idx) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                data-reveal="fade-up"
                data-delay={`${(idx % 3) * 0.08}`}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 bg-white ${
                  isPopular
                    ? 'border-2 border-[#B08A45] shadow-[0_15px_40px_rgba(176,138,69,0.2)]'
                    : 'border border-[#B08A45]/20 hover:border-[#B08A45] shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
                }`}
              >
                {/* Popular / Badge Tag */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-[#B08A45] text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Package Cover Image Banner */}
                  {pkg.coverImage && (
                    <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden mb-6 border border-[#B08A45]/20 relative group">
                      <img
                        src={pkg.coverImage}
                        alt={pkg.name}
                        className="w-full h-full object-cover object-[center_25%] transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent opacity-60" />
                    </div>
                  )}

                  {/* Card Top: Number & Title */}
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold text-[#B08A45] block mb-1">
                      PACKAGE {pkg.number}
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#171717]">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price Tag */}
                  <div className="mb-6 pb-6 border-b border-[#ECE7DE]">
                    <div className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#B08A45]">
                      {pkg.price}
                    </div>
                    {pkg.priceVariants && (
                      <div className="flex items-center space-x-3 mt-2 text-xs text-[#625D55]">
                        {pkg.priceVariants.map((v, i) => (
                          <span key={i} className="bg-[#ECE7DE] px-2.5 py-1 rounded-md border border-[#B08A45]/20">
                            {v.label}: <strong className="text-[#171717]">{v.price}</strong>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.slice(0, 5).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#171717]">
                        <Check size={15} className="text-[#B08A45] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {pkg.features.length > 5 && (
                      <li className="text-[11px] text-[#B08A45] italic font-medium pt-1">
                        + {pkg.features.length - 5} more inclusions...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Bottom Buttons */}
                <div className="space-y-3 pt-4 border-t border-[#ECE7DE]">
                  <button
                    onClick={() => setSelectedPkg(pkg)}
                    className="w-full py-3.5 bg-[#ECE7DE] text-xs uppercase tracking-widest font-semibold text-[#171717] hover:text-[#B08A45] hover:bg-white rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 border border-[#B08A45]/20"
                  >
                    <span>View Full Details</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href={`tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`}
                    className={`w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md flex items-center justify-center space-x-2 ${
                      isPopular
                        ? 'bg-[#B08A45] text-white hover:bg-[#8F6E33]'
                        : 'bg-[#171717] text-white hover:bg-[#B08A45]'
                    }`}
                  >
                    <Phone size={14} />
                    <span>Call Studio to Book</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Package Detail Modal */}
      <PackageModal
        isOpen={selectedPkg !== null}
        pkg={selectedPkg}
        onClose={() => setSelectedPkg(null)}
      />

      {/* Package Compare Modal */}
      <PackageCompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
      />
    </section>
  );
}
