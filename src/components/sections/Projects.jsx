import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../ui/SectionHeader';
import { ArrowRight, Clock } from '../ui/Icons';

// Separa "(En Desarrollo)" del título para mostrarlo como badge
export const parseProjectTitle = (title) => {
  const inProgress = /\(en desarrollo\)/i.test(title);
  return { cleanTitle: title.replace(/\s*\(en desarrollo\)\s*/i, '').trim(), inProgress };
};

export default function Projects({ onViewMore }) {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { id: 'All', label: t('projects_filter_all') },
    { id: 'React', label: 'React' },
    { id: '.NET', label: '.NET / C#' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'React') return project.tech.includes('React') || project.tech.includes('React 19');
    if (activeFilter === '.NET') return project.tech.some((tech) => tech.includes('.NET') || tech.includes('C#'));
    return true;
  });

  return (
    <section id="proyectos" ref={revealRef}>
      <div className="container">
        <div className="section-head-row">
          <SectionHeader
            eyebrow={t('projects_eyebrow')}
            title={t('projects_title')}
            subtitle={t('projects_subtitle')}
          />
          <div className="segmented reveal-element delay-100" role="tablist">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? 'active' : ''}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`projects-grid ${filteredProjects.length === 1 ? 'single' : ''}`}>
          {filteredProjects.map((project, idx) => {
            const { cleanTitle, inProgress } = parseProjectTitle(project.title);
            return (
              <article
                key={project.id}
                className={`card project-card reveal-element delay-${Math.min((idx + 1) * 100, 300)}`}
                onClick={() => onViewMore(project)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onViewMore(project))}
                role="link"
                tabIndex={0}
                aria-label={cleanTitle}
              >
                <div className="project-media">
                  {project.image ? (
                    <img src={project.image} alt={cleanTitle} loading="lazy" />
                  ) : (
                    <div className="project-placeholder">
                      <i className={project.icon}></i>
                    </div>
                  )}
                  {inProgress && (
                    <span className="badge badge-warning"><Clock /> {t('projects_in_progress')}</span>
                  )}
                </div>

                <div className="project-body">
                  <h3 className="project-title">{cleanTitle}</h3>
                  <p className="project-desc">{project.shortDescription}</p>
                  <div className="project-tags">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <span>{t('projects_btn_more')}</span>
                    <ArrowRight />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
