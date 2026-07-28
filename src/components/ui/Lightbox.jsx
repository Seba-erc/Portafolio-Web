import React, { useEffect } from 'react';

export default function Lightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: 99999,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}>
      {/* Botón cerrar */}
      <button onClick={onClose} style={{
        position: 'absolute', top: '10px', right: '20px', 
        background: 'none', border: 'none', color: '#fff', fontSize: '3rem', cursor: 'pointer', zIndex: 100000,
        padding: '10px'
      }}>
        &times;
      </button>

      {/* Imagen Principal */}
      <div style={{ position: 'relative', width: '100%', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        
        {/* Flecha Izquierda */}
        <button onClick={goToPrev} style={{
          position: 'absolute', left: '10px', background: 'rgba(255,255,255,0.1)', 
          border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', padding: '1rem', borderRadius: '50%',
          backdropFilter: 'blur(5px)', zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '60px', height: '60px'
        }}>
          &#10094;
        </button>

        <img 
          src={images[currentIndex]} 
          alt={`Imagen ${currentIndex + 1}`} 
          style={{ maxWidth: '95vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px' }} 
        />

        {/* Flecha Derecha */}
        <button onClick={goToNext} style={{
          position: 'absolute', right: '10px', background: 'rgba(255,255,255,0.1)', 
          border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', padding: '1rem', borderRadius: '50%',
          backdropFilter: 'blur(5px)', zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '60px', height: '60px'
        }}>
          &#10095;
        </button>
      </div>

      {/* Miniaturas inferiores */}
      <div className="custom-scrollbar" style={{ 
        height: '140px', width: '100%', background: 'rgba(0,0,0,0.8)', 
        display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 2rem', 
        overflowX: 'auto', WebkitOverflowScrolling: 'touch', flexShrink: 0
      }}>
        {images.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            alt={`Miniatura ${idx + 1}`} 
            onClick={() => setCurrentIndex(idx)}
            style={{ 
              height: '90px', width: '140px', objectFit: 'cover', borderRadius: '6px', cursor: 'pointer',
              opacity: idx === currentIndex ? 1 : 0.4,
              border: idx === currentIndex ? '2px solid var(--accent-primary)' : '2px solid transparent',
              transition: 'all 0.3s ease', flexShrink: 0
            }} 
          />
        ))}
      </div>
    </div>
  );
}
