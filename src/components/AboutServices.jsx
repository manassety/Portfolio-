import React from 'react';
import { servicesData } from '../data/services';
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
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C9A96E] font-medium mb-3">
            <Award size={14} />
            <span>OUR STUDIO EXPERTISE</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F1EA] tracking-tight leading-tight mb-6">
            WE TURN MOMENTS INTO MEMORIES
          </h2>

          <p className="text-sm sm:text-base text-[#A8A29A] font-light leading-relaxed">
            At <strong className="text-[#F5F1EA] font-medium">SETY VIDEOS AND MIXING LAB</strong>, we specialize in high-end wedding cinematography, traditional photography, and state-of-the-art post-production mixing. Every frame is crafted with artistic precision to celebrate your unique love story.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Camera;
            return (
              <div
                key={service.id}
                className="group relative glass-panel rounded-2xl p-8 hover:border-[#C9A96E]/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(201,169,110,0.1)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold text-[#C9A96E] bg-[#C9A96E]/10 px-3 py-1 rounded-full border border-[#C9A96E]/20">
                      SERVICE {service.id}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#A8A29A]">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-4 flex items-start space-x-4">
                    <div className="p-3.5 rounded-xl bg-[#151515] border border-white/10 text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-[#0B0B0B] transition-colors duration-300">
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif-display text-xl sm:text-2xl font-normal text-[#F5F1EA] group-hover:text-[#C9A96E] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[11px] uppercase tracking-wider text-[#C9A96E]/80 font-medium mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A8A29A] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {service.highlights && service.highlights.length > 0 && (
                    <ul className="space-y-2 pt-4 border-t border-white/5">
                      {service.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center space-x-2 text-xs text-[#F5F1EA]/80">
                          <CheckCircle2 size={13} className="text-[#C9A96E] shrink-0" />
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
