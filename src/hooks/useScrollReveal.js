import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.1, repeat = false, rootMargin = '50px' } = options;

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const elements = currentRef.querySelectorAll('.reveal-element');
    const targetElements = [...elements];
    if (currentRef.classList.contains('reveal-element')) {
      targetElements.push(currentRef);
    }

    // Si el navegador no soporta IntersectionObserver, mostramos todo
    if (!('IntersectionObserver' in window)) {
      targetElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          if (!repeat) {
            observer.unobserve(entry.target);
          }
        } else if (repeat) {
          entry.target.classList.remove('revealed');
        }
      });
    }, { root: null, rootMargin, threshold });

    targetElements.forEach(el => observer.observe(el));

    // Revelar de inmediato lo que ya está en pantalla al montar
    const raf = requestAnimationFrame(() => {
      const vh = window.innerHeight;
      targetElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) el.classList.add('revealed');
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [threshold, repeat, rootMargin]);

  return ref;
}
