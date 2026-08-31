import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Check if the user prefers reduced motion
 */
export const isReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Create a safe GSAP context with automatic React cleanup
 */
export const useGsapContext = (scopeRef, callback) => {
  if (!scopeRef?.current || isReducedMotion()) return () => {};
  
  const ctx = gsap.context(callback, scopeRef);
  return () => ctx.revert();
};

/**
 * Hero Timeline Entrance Animation
 */
export const animateHeroEntrance = (targets) => {
  if (isReducedMotion()) return;

  const { bgRef, businessRef, mainHeadingRef, subtitleRef, buttonsRef, scrollIndicatorRef } = targets;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // 1. Slow scale background image 1.08 -> 1
  if (bgRef?.current) {
    tl.fromTo(bgRef.current, { scale: 1.12, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' });
  }

  // 2. Business name reveal
  if (businessRef?.current) {
    tl.fromTo(businessRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=1.4');
  }

  // 3. Main heading line-by-line reveal
  if (mainHeadingRef?.current) {
    const lines = mainHeadingRef.current.querySelectorAll('.hero-heading-line');
    if (lines.length > 0) {
      tl.fromTo(lines, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 }, '-=0.6');
    } else {
      tl.fromTo(mainHeadingRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.6');
    }
  }

  // 4. Subtitle fade up
  if (subtitleRef?.current) {
    tl.fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5');
  }

  // 5. Buttons fade up
  if (buttonsRef?.current) {
    tl.fromTo(buttonsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4');
  }

  // 6. Scroll indicator
  if (scrollIndicatorRef?.current) {
    tl.fromTo(scrollIndicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.3');
  }

  return tl;
};

/**
 * Scroll triggered reveal for section titles and element grids
 */
export const initScrollReveals = (scopeElement) => {
  if (isReducedMotion() || !scopeElement) return;

  const elements = scopeElement.querySelectorAll('[data-reveal]');
  
  elements.forEach((el) => {
    const animationType = el.getAttribute('data-reveal') || 'fade-up';
    const delay = parseFloat(el.getAttribute('data-delay') || '0');

    if (animationType === 'fade-up') {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    } else if (animationType === 'clip-reveal') {
      gsap.fromTo(
        el,
        { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          opacity: 1,
          duration: 1.2,
          delay: delay,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  });
};
