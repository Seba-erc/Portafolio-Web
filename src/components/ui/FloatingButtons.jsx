import React, { useState, useEffect } from 'react';
import { ArrowUp } from './Icons';

export default function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showTopBtn) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="back-to-top"
      title="Volver arriba"
      aria-label="Volver arriba"
    >
      <ArrowUp />
    </button>
  );
}
