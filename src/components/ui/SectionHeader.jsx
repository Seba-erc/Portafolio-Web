import React from 'react';

// Encabezado de sección reutilizable: etiqueta pequeña + título + subtítulo
export default function SectionHeader({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`section-head reveal-element ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}
