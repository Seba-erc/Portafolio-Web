import React, { useEffect, useState } from 'react';

export default function Lightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  // Estados para el Zoom Avanzado
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragged, setDragged] = useState(false);

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const goToNext = (e) => {
    if (e) e.stopPropagation();
    resetZoom();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = (e) => {
    if (e) e.stopPropagation();
    resetZoom();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Zoom con rueda del mouse
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      // Scroll hacia arriba -> acercar
      setScale(s => Math.min(s + 0.25, 4));
    } else {
      // Scroll hacia abajo -> alejar
      setScale(s => {
        const newScale = Math.max(s - 0.25, 1);
        if (newScale === 1) setPosition({ x: 0, y: 0 });
        return newScale;
      });
    }
  };

  // Panning (Arrastrar imagen con click)
  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragged(false);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setDragged(true);
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    if (dragged) {
      setDragged(false);
      return;
    }
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2);
    }
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (scale > 1) resetZoom();
        else onClose();
      }
      if (scale === 1) {
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scale, onClose]);

  return (
    <div 
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: 99999,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
      }}
      onWheel={handleWheel} // Interceptar la rueda del ratón
    >
      {/* Botón cerrar */}
      <button onClick={onClose} style={{
        position: 'absolute', top: '10px', right: '20px', 
        background: 'none', border: 'none', color: '#fff', fontSize: '3rem', cursor: 'pointer', zIndex: 100000,
        padding: '10px', display: scale > 1 ? 'none' : 'block'
      }}>
        &times;
      </button>

      {/* Imagen Principal y Controles */}
      <div 
        style={{ 
          position: 'relative', width: '100%', flex: 1, display: 'flex', 
          alignItems: 'center', justifyContent: 'center', overflow: 'hidden' 
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        
        {/* Flecha Izquierda */}
        {scale === 1 && (
          <button onClick={goToPrev} style={{
            position: 'absolute', left: '10px', background: 'rgba(255,255,255,0.1)', 
            border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', padding: '1rem', borderRadius: '50%',
            backdropFilter: 'blur(5px)', zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '60px', height: '60px'
          }}>
            &#10094;
          </button>
        )}

        <img 
          src={images[currentIndex]} 
          alt={`Imagen ${currentIndex + 1}`} 
          onClick={toggleZoom}
          onMouseDown={handleMouseDown}
          draggable={false}
          style={{ 
            maxWidth: '95vw', 
            maxHeight: '80vh', 
            objectFit: 'contain', 
            borderRadius: '8px',
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
            userSelect: 'none',
            WebkitUserDrag: 'none'
          }} 
        />

        {/* Flecha Derecha */}
        {scale === 1 && (
          <button onClick={goToNext} style={{
            position: 'absolute', right: '10px', background: 'rgba(255,255,255,0.1)', 
            border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', padding: '1rem', borderRadius: '50%',
            backdropFilter: 'blur(5px)', zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '60px', height: '60px'
          }}>
            &#10095;
          </button>
        )}
      </div>

      {/* Miniaturas inferiores */}
      {scale === 1 && (
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
              onClick={() => { resetZoom(); setCurrentIndex(idx); }}
              style={{ 
                height: '90px', width: '140px', objectFit: 'cover', borderRadius: '6px', cursor: 'pointer',
                opacity: idx === currentIndex ? 1 : 0.4,
                border: idx === currentIndex ? '2px solid var(--accent-primary)' : '2px solid transparent',
                transition: 'all 0.3s ease', flexShrink: 0
              }} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
