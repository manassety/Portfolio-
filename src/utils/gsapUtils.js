import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function initScrollReveals(container) {
  if (!container || typeof window === 'undefined') return;

  // Check prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  try {
    const revealElements = container.querySelectorAll('[data-reveal]');
    revealElements.forEach((el) => {
      const type = el.getAttribute('data-reveal') || 'fade-up';
      const delay = parseFloat(el.getAttribute('data-delay') || '0');

      let fromVars = { opacity: 0, y: 20 };
      if (type === 'fade-left') fromVars = { opacity: 0, x: -30 };
      if (type === 'fade-right') fromVars = { opacity: 0, x: 30 };
      if (type === 'scale') fromVars = { opacity: 0, scale: 0.95 };

      gsap.fromTo(
        el,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  } catch (err) {
    console.warn('GSAP ScrollTrigger skipped:', err);
  }
}

export { gsap, ScrollTrigger };
