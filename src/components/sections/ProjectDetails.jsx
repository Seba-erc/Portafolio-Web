import React, { useEffect, useState, useRef } from 'react';
import Lightbox from '../ui/Lightbox';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { parseProjectTitle } from './Projects';
import { ArrowLeft, Play, ExternalLink } from '../ui/Icons';

export default function ProjectDetails({ project, onBack }) {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Variables de estado y referencia para el Drag-to-Scroll
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleMouseLeave = () => {
    setIsDown(false);
  };
  const handleMouseUp = () => {
    setIsDown(false);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador de velocidad de arrastre
    if (Math.abs(walk) > 5) setIsDragging(true);
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Hacer scroll hacia arriba cuando se abre el proyecto
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) return null;

  const { cleanTitle, inProgress } = parseProjectTitle(project.title);
  const hasSource = project.github && project.github !== '#' && project.github !== 'https://github.com/Seba-erc';
  const hasDemo = project.demo && project.demo !== '#';

  return (
    <section className="details container" ref={revealRef}>
      <div className="details-topbar reveal-element">
        <button onClick={onBack} className="btn btn-ghost btn-sm" type="button">
          <ArrowLeft /> {t('details_back')}
        </button>
      </div>

      {/* Encabezado */}
      <header className="details-header">
        <span className="eyebrow reveal-element">{inProgress ? t('projects_in_progress') : t('details_eyebrow')}</span>
        <h1 className="details-title reveal-element delay-100">{cleanTitle}</h1>
        <p className="details-lead reveal-element delay-100">{project.shortDescription}</p>

        <div className="details-tags reveal-element delay-200">
          {project.tech.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        <div className="details-actions reveal-element delay-200">
          {hasDemo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <Play /> {t('details_demo')}
            </a>
          )}
          {hasSource ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
              <i className="devicon-github-original" style={{ fontSize: '1.15rem' }}></i> {t('details_source')}
            </a>
          ) : (
            <div className="btn btn-secondary btn-lg btn-locked" title={t('details_locked')} aria-disabled="true">
              <i className="devicon-github-original" style={{ fontSize: '1.15rem' }}></i> {t('details_source')}
              <div className="locked-stamp">
                <span>{t('details_locked')}</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Imagen principal */}
      {project.image && (
        <div className="details-cover reveal-element delay-200">
          <img src={project.image} alt={cleanTitle} />
        </div>
      )}

      {/* Descripción + ficha técnica */}
      <div className="details-grid">
        <div className="reveal-element">
          <h2 className="details-subtitle">{t('details_about')}</h2>
          <div className="details-text">{project.longDescription}</div>
        </div>

        <aside className="card spec-card reveal-element delay-100">
          <div className="spec-row">
            <span className="spec-label">{t('details_status')}</span>
            {inProgress ? (
              <span className="badge badge-warning"><span className="badge-dot"></span>{t('projects_in_progress')}</span>
            ) : (
              <span className="badge badge-success"><span className="badge-dot"></span>{t('cert_status_completed')}</span>
            )}
          </div>
          <div className="spec-row">
            <span className="spec-label">{t('details_stack')}</span>
            <div className="spec-value">{project.tech.join(' · ')}</div>
          </div>
          <div className="spec-row">
            <span className="spec-label">{t('details_links')}</span>
            <div className="spec-links">
              {hasDemo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} /> {t('details_demo')}
                </a>
              )}
              {hasSource ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} /> {t('details_source')}
                </a>
              ) : (
                <span className="spec-value" style={{ color: 'var(--text-dim)' }}>{t('details_source')} — {t('details_locked')}</span>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Galería */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="reveal-element">
          <h2 className="details-subtitle">{t('details_gallery')}</h2>
          <div
            className="custom-scrollbar gallery-track"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
              scrollSnapType: isDown ? 'none' : 'x mandatory',
              cursor: isDown ? 'grabbing' : 'grab'
            }}
          >
            {project.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${cleanTitle} screenshot ${idx + 1}`}
                loading="lazy"
                onClick={(e) => {
                  if (isDragging) {
                    e.stopPropagation();
                    return;
                  }
                  setLightboxIndex(idx);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={project.gallery}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
