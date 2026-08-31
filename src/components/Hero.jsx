import React, { useRef, useEffect } from 'react';
import { animateHeroEntrance } from '../utils/gsapUtils';
import { contactConfig } from '../config/contact';
import { ChevronDown, Sparkles, Film } from 'lucide-react';

export default function Hero({ onOpenEnquiry }) {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const businessRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const targets = {
      bgRef,
      businessRef,
      mainHeadingRef,
      subtitleRef,
      buttonsRef,
      scrollIndicatorRef,
    };
    const timeline = animateHeroEntrance(targets);

    return () => {
      if (timeline) timeline.kill();
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B0B0B] pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image Container with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgRef}
          src="./images/hero.jpg"
          alt="SETY VIDEOS AND MIXING LAB Wedding Cinematography"
          className="w-full h-full object-cover object-center transform scale-[1.08] filter brightness-[0.45] contrast-[1.08]"
          onError={(e) => {
            // Elegant dark fallback if image replacement occurs
            e.target.style.display = 'none';
          }}
        />
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B0B0B]/40 to-[#0B0B0B]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center my-auto">
        {/* Eyebrow & Business Badge with Logo */}
        <div ref={businessRef} className="flex flex-col items-center mb-6">
          {/* Studio Brand Logo */}
          <img
            src="./images/gallery/logo/logos.png"
            alt="SETY VIDEOS AND MIXING LAB Logo"
            className="h-20 sm:h-28 w-auto object-contain filter drop-shadow-[0_10px_25px_rgba(201,169,110,0.3)] mb-4 animate-fade-in"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-[#C9A96E]/30 mb-3">
            <Sparkles size={13} className="text-[#C9A96E] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#C9A96E]">
              CAPTURING MOMENTS • CREATING MEMORIES
            </span>
          </div>

          <h2 className="text-xs sm:text-sm uppercase tracking-[0.4em] font-semibold text-[#F5F1EA]/80 mt-1">
            {contactConfig.brandName}
          </h2>
        </div>

        {/* Main Heading Reveal */}
        <div ref={mainHeadingRef} className="overflow-hidden mb-6 px-2">
          <h1 className="hero-heading-line font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F5F1EA] leading-[1.08]">
            Every Moment Deserves
          </h1>
          <h1 className="hero-heading-line font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight gold-gradient-text leading-[1.08] mt-1 sm:mt-2">
            To Be Remembered.
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="max-w-2xl text-xs sm:text-sm md:text-base text-[#A8A29A] uppercase tracking-[0.2em] font-light leading-relaxed mb-10 px-4"
        >
          Traditional Photography • Cinematic Films • Candid Moments • Drone Coverage
        </p>

        {/* Call to Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md px-4"
        >
          <button
            onClick={() => handleScrollTo('#portfolio')}
            className="w-full sm:w-auto px-8 py-4 bg-[#C9A96E] text-[#0B0B0B] font-semibold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#DBC087] transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(201,169,110,0.3)] flex items-center justify-center space-x-2"
          >
            <Film size={15} />
            <span>VIEW PORTFOLIO</span>
          </button>

          <button
            onClick={() => handleScrollTo('#packages')}
            className="w-full sm:w-auto px-8 py-4 glass-panel border border-white/20 text-[#F5F1EA] font-semibold text-xs uppercase tracking-[0.2em] rounded-full hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>VIEW PACKAGES</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center space-y-2 cursor-pointer group"
        onClick={() => handleScrollTo('#services')}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#A8A29A] group-hover:text-[#C9A96E] transition-colors">
          EXPLORE STUDIO
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#C9A96E] transition-colors">
          <div className="w-1 h-2 bg-[#C9A96E] rounded-full animate-bounce mt-1" />
        </div>
      </div>
    </section>
  );
}
