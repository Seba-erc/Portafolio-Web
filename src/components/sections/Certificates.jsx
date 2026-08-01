import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configurar el worker de PDF.js usando CDN para asegurar compatibilidad
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Certificates() {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  const certificates = [
    { title: "Programación Básica", file: "/images/certificados/Certificado Programación Básica.pdf", category: "Escolares" },
    { title: "Diseño de Software y Base de Datos", file: "/images/certificados/Certificado Diseño de Software y Base de Datos.pdf", category: "Escolares" },
    { title: "Administración de Sistemas", file: "/images/certificados/Certificado Administración de Sistemas.pdf", category: "Escolares" },
    { title: "Arquitectura de Software", file: "/images/certificados/Certificado Arquitectura de Software.pdf", category: "Profesionales" },
    { title: "Análisis de Datos", file: "/images/certificados/Certificado Análisis de Datos.pdf", category: "Profesionales" },
    { title: "Gestión de Proyectos Informáticos", file: "/images/certificados/Certificado Gestión de Proyectos Informáticos.pdf", category: "Profesionales" },
    { title: "Redes y Enrutamiento", file: "/images/certificados/Certificado Redes y Enrutamiento.pdf", category: "Profesionales" },
    { title: "Seguridad Informática", file: "/images/certificados/Certificado Seguridad Informática.pdf", category: "Profesionales" },
    { title: "Programación Avanzada", file: null, pending: true, category: "Escolares" },
    { title: "Excel - de Básico a Intermedio", file: null, pending: true, category: "Otros" }
  ];

  const filters = ['Todos', 'Profesionales', 'Escolares', 'Otros'];

  const filteredCertificates = certificates.filter(cert => 
    activeFilter === 'Todos' || cert.category === activeFilter
  );

  return (
    <section id="certificados" className="container" ref={revealRef}>
      <h2 className="section-title reveal-element">{t('cert_title')}</h2>
      
      {/* Botones de Filtro */}
      <div className="reveal-element delay-100" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`btn ${activeFilter === filter ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', borderRadius: '50px' }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="certifications-grid reveal-element delay-200">
        {filteredCertificates.map((cert, index) => (
          <div key={`${cert.title}-${index}`} className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '1.2rem', alignItems: 'center', animation: 'fadeIn 0.5s ease' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.15rem', color: '#FFD700', textShadow: '0 0 8px rgba(255, 215, 0, 0.4)', textAlign: 'center', minHeight: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cert.title}</h3>
            
            <a 
              href={cert.file} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'block',
                width: '100%',
                maxWidth: '280px',
                height: '190px', 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                borderRadius: '8px', 
                marginBottom: '1.5rem', 
                overflow: 'hidden',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                cursor: 'pointer'
              }}
              title={cert.pending ? t('cert_status_soon') : "Abrir PDF en tamaño completo"}
              className="pdf-thumbnail-container"
              onClick={cert.pending ? (e) => e.preventDefault() : undefined}
            >
              {cert.pending ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '190px', width: '100%', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '1.2rem', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  {t('cert_status_soon')}...
                </div>
              ) : (
                <Document 
                  file={cert.file}
                  loading={<div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>Cargando miniatura...</div>}
                  error={<div style={{ textAlign: 'center', padding: '2rem', color: '#ff6b6b' }}>Error al cargar miniatura</div>}
                >
                  <Page 
                    pageNumber={1} 
                    height={190}
                    renderTextLayer={false} 
                    renderAnnotationLayer={false} 
                  />
                </Document>
              )}
            </a>

            {cert.pending ? (
              <button disabled className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', opacity: 0.5, cursor: 'not-allowed' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                {t('cert_status_soon')}
              </button>
            ) : (
              <a href={cert.file} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                Abrir Certificado
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
