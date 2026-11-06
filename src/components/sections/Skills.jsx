import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { skillCategories } from '../../data/skillsData';
import SectionHeader from '../ui/SectionHeader';
import { Sparkles, Users } from '../ui/Icons';

export default function Skills() {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  // skills_description viene como "Título: texto\n\nTítulo: texto"
  const highlightIcons = [<Sparkles key="s" />, <Users key="u" />];
  const highlights = t('skills_description')
    .split('\n\n')
    .map((block) => {
      const idx = block.indexOf(':');
      return idx > -1
        ? { title: block.slice(0, idx).trim(), text: block.slice(idx + 1).trim() }
        : { title: '', text: block.trim() };
    });

  return (
    <section id="habilidades" ref={revealRef}>
      <div className="container">
        <SectionHeader
          eyebrow={t('skills_eyebrow')}
          title={t('skills_title')}
          subtitle={t('skills_subtitle')}
        />

        <div className="highlights-grid">
          {highlights.map((h, i) => (
            <div key={i} className={`card highlight-card reveal-element delay-${(i + 1) * 100}`}>
              <span className="highlight-icon">{highlightIcons[i % highlightIcons.length]}</span>
              <div>
                {h.title && <h3 className="highlight-title">{h.title}</h3>}
                <p className="highlight-text">{h.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="categories-grid">
          {skillCategories.map((category, index) => (
            <div key={category.titleKey} className={`card category-card reveal-element delay-${Math.min((index + 1) * 100, 300)}`}>
              <div className="category-head">
                <h3 className="category-title">{t(category.titleKey)}</h3>
                <span className="category-count">{String(category.skills.length).padStart(2, '0')}</span>
              </div>
              <div className="skills-flex">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skill-chip" style={{ '--chip-color': `${skill.color}80` }}>
                    {skill.image ? (
                      <img src={skill.image} alt="" />
                    ) : (
                      <i className={`${skill.icon}${skill.color === '#ffffff' ? '' : ' colored'}`}></i>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
