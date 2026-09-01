import React, { useEffect, useRef } from 'react';
import { servicesData } from '../data/services';
import { initScrollReveals } from '../utils/gsapUtils';
import {
  Video,
  Camera,
  Film,
  Sparkles,
  Aperture,
  Smartphone,
  PlayCircle,
  BookOpen,
  Image as ImageIcon,
  Layers,
  Award,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Video,
  Camera,
  Film,
  Sparkles,
  Aperture,
  Smartphone,
  PlayCircle,
  BookOpen,
  Image: ImageIcon,
  Layers,
};

export default function AboutServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    initScrollReveals(sectionRef.current);
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 sm:py-32 bg-[#F5F1EA] relative overflow-hidden text-[#171717]">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#B08A45]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#B08A45]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div data-reveal="fade-up" className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B08A45] font-semibold mb-3">
            <Award size={14} />
            <span>OUR STUDIO EXPERTISE</span>
          </div>

          <h2 data-reveal="fade-up" data-delay="0.1" className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#171717] tracking-tight leading-tight mb-6">
            WE TURN MOMENTS INTO MEMORIES
          </h2>

          <p data-reveal="fade-up" data-delay="0.2" className="text-sm sm:text-base text-[#625D55] font-light leading-relaxed">
            At <strong className="text-[#171717] font-semibold">SETY VIDEOS AND MIXING LAB</strong>, we specialize in high-end wedding cinematography, traditional photography, and state-of-the-art post-production mixing. Every frame is crafted with artistic precision to celebrate your unique love story.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Camera;
            return (
              <div
                key={service.id}
                data-reveal="fade-up"
                data-delay={`${0.05 * (idx % 3)}`}
                className="group relative bg-white rounded-2xl p-8 border border-[#B08A45]/20 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#B08A45] hover:shadow-[0_12px_30px_rgba(176,138,69,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold text-[#B08A45] bg-[#B08A45]/10 px-3 py-1 rounded-full border border-[#B08A45]/20">
                      SERVICE {service.id}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#625D55] font-medium">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-4 flex items-start space-x-4">
                    <div className="p-3.5 rounded-xl bg-[#ECE7DE] border border-[#B08A45]/20 text-[#B08A45] group-hover:bg-[#B08A45] group-hover:text-white transition-colors duration-300">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif-display text-xl sm:text-2xl font-normal text-[#171717] group-hover:text-[#B08A45] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[11px] uppercase tracking-wider text-[#B08A45] font-medium mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#625D55] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {service.highlights && service.highlights.length > 0 && (
                    <ul className="space-y-2 pt-4 border-t border-[#ECE7DE]">
                      {service.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center space-x-2 text-xs text-[#171717]">
                          <CheckCircle2 size={13} className="text-[#B08A45] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
