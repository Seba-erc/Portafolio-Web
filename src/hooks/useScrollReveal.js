import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const elements = currentRef.querySelectorAll('.reveal-element');
    const targetElements = [...elements];
    if (currentRef.classList.contains('reveal-element')) {
      targetElements.push(currentRef);
    }

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: options.threshold || 0.1,
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          if (!options.repeat) {
            observer.unobserve(entry.target);
          }
        } else if (options.repeat) {
          entry.target.classList.remove('revealed');
        }
      });
    }, observerOptions);

    targetElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return ref;
}
