import React, { useState } from 'react';
import { packagesData } from '../data/packages';
import PackageModal from './PackageModal';
import PackageCompareModal from './PackageCompareModal';
import { Check, Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';

export default function Packages({ onOpenEnquiry }) {
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  return (
    <section id="packages" className="py-24 sm:py-32 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C9A96E] font-medium mb-3">
            <Sparkles size={14} />
            <span>TRANSPARENT RATE LIST</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F1EA] tracking-tight leading-tight mb-4">
            CHOOSE YOUR PACKAGE
          </h2>

          <p className="text-sm sm:text-base text-[#A8A29A] font-light max-w-2xl mx-auto">
            Professional coverage tailored for your special moments. No hidden charges. All packages include raw data delivery via Google Drive.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setCompareModalOpen(true)}
              className="glass-panel-gold border border-[#C9A96E]/40 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] text-[#C9A96E] hover:text-[#F5F1EA] hover:scale-105 flex items-center space-x-2 transition-all duration-300 shadow-[0_0_20px_rgba(201,169,110,0.15)]"
            >
              <SlidersHorizontal size={14} />
              <span>Compare All Packages</span>
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                  isPopular
                    ? 'glass-panel-gold gold-border-glow shadow-2xl'
                    : 'glass-panel border-white/10 hover:border-[#C9A96E]/40'
                }`}
              >
                {/* Popular / Badge Tag */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-[#C9A96E] text-[#0B0B0B] text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Package Cover Image Banner */}
                  {pkg.coverImage && (
                    <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden mb-6 border border-white/10 relative group">
                      <img
                        src={pkg.coverImage}
                        alt={pkg.name}
                        className="w-full h-full object-cover object-[center_25%] transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-80" />
                    </div>
                  )}

                  {/* Card Top: Number & Title */}
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold text-[#C9A96E] block mb-1">
                      PACKAGE {pkg.number}
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#F5F1EA]">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price Tag */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#C9A96E]">
                      {pkg.price}
                    </div>
                    {pkg.priceVariants && (
                      <div className="flex items-center space-x-3 mt-2 text-xs text-[#A8A29A]">
                        {pkg.priceVariants.map((v, i) => (
                          <span key={i} className="bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                            {v.label}: <strong className="text-[#F5F1EA]">{v.price}</strong>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.slice(0, 5).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#F5F1EA]/80">
                        <Check size={15} className="text-[#C9A96E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {pkg.features.length > 5 && (
                      <li className="text-[11px] text-[#C9A96E] italic font-medium pt-1">
                        + {pkg.features.length - 5} more inclusions...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Bottom Buttons */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <button
                    onClick={() => setSelectedPkg(pkg)}
                    className="w-full py-3.5 glass-panel text-xs uppercase tracking-widest font-medium text-[#F5F1EA] hover:text-[#C9A96E] hover:border-[#C9A96E]/50 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>View Full Details</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(pkg)}
                    className={`w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg ${
                      isPopular
                        ? 'bg-[#C9A96E] text-[#0B0B0B] hover:bg-[#DBC087]'
                        : 'bg-white/10 text-[#F5F1EA] hover:bg-[#C9A96E] hover:text-[#0B0B0B]'
                    }`}
                  >
                    Enquire Package
                  </button>
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
        onSelectEnquiry={(pkg) => onOpenEnquiry(pkg)}
      />

      {/* Package Compare Modal */}
      <PackageCompareModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
        onSelectEnquiry={(pkg) => onOpenEnquiry(pkg)}
      />
    </section>
  );
}
