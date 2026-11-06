import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projectsData } from '../../data/projectsData';
import { completedCertificates } from '../../data/certificatesData';
import { totalSkills } from '../../data/skillsData';
import { ArrowRight, FileText, GraduationCap, Mail, Building, Phone, Copy, Check, WhatsApp } from '../ui/Icons';

const EMAIL_PERSONAL = 'sebastian31reinoso10@gmail.com';
const EMAIL_INSTITUTIONAL = 's.reinoso4@alumnos.santotomas.cl';
const PHONE_RAW = '+56935487150';
const PHONE_DISPLAY = '+56 9 3548 7150';

export default function Hero() {
  const [copiedItem, setCopiedItem] = useState('');
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(''), 2000);
  };

  const contacts = [
    { icon: <Mail />, label: t('hero_personal'), value: EMAIL_PERSONAL, href: `mailto:${EMAIL_PERSONAL}` },
    { icon: <Building />, label: t('hero_institutional'), value: EMAIL_INSTITUTIONAL, href: `mailto:${EMAIL_INSTITUTIONAL}` },
    { icon: <Phone />, label: t('hero_phone'), value: PHONE_DISPLAY, copyValue: PHONE_RAW, href: `tel:${PHONE_RAW}` }
  ];

  const stats = [
    { value: projectsData.length, label: t('hero_stat_projects'), href: '#proyectos' },
    { value: completedCertificates, label: t('hero_stat_certs'), href: '#certificados' },
    { value: `${totalSkills}+`, label: t('hero_stat_tech'), href: '#habilidades' }
  ];

  const renderRichText = (text) =>
    text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={i}>{part.slice(2, -2)}</strong>
      ) : (
        part
      )
    );

  return (
    <section id="inicio" className="hero container" ref={revealRef}>
      <div className="hero-grid">

        {/* Presentación */}
        <div className="hero-intro">
          <div className="reveal-element">
            <span className="status-badge">
              <span className="status-dot"></span>
              {t('hero_available')}
            </span>
          </div>

          <h1 className="hero-title reveal-element delay-100">
            <span className="hero-greeting">{t('hero_greeting')}</span>
            <span className="text-gradient">Sebastián Reinoso</span>
          </h1>

          <p className="hero-role reveal-element delay-100">{t('hero_subtitle')}</p>

          <div className="hero-desc-wrap reveal-element delay-200">
            <div className={`hero-desc ${isDescExpanded ? 'expanded' : 'collapsed'}`}>
              {t('hero_description').split('\n\n').map((para, idx) => (
                <p key={idx}>{renderRichText(para)}</p>
              ))}
            </div>
            <button
              type="button"
              className="hero-desc-toggle"
              onClick={() => setIsDescExpanded((prev) => !prev)}
              aria-expanded={isDescExpanded}
            >
              <span>{isDescExpanded ? t('hero_read_less') : t('hero_read_more')}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: isDescExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>

          <div className="hero-actions reveal-element delay-200">
            <a href="#proyectos" className="btn btn-primary btn-lg">
              {t('hero_btn_projects')} <ArrowRight />
            </a>
            <a href="/docs/Curriculum.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
              <FileText /> {t('hero_btn_cv')}
            </a>
            <a href="/docs/Malla.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
              <GraduationCap /> {t('hero_btn_malla')}
            </a>
          </div>

          <div className="hero-stats reveal-element delay-300">
            {stats.map((s) => (
              <a key={s.label} href={s.href} className="hero-stat">
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Tarjeta de perfil / contacto */}
        <aside className="profile-card reveal-element delay-200">
          <div className="profile-head">
            <img src="/assets/logos/logo-serc.png" alt="Logo SERC" className="profile-avatar" />
            <div>
              <div className="profile-name">Sebastián Esteban Reinoso Concha</div>
              <div className="profile-career">{t('hero_career')}</div>
              <div className="profile-school">{t('hero_school')}</div>
            </div>
          </div>

          <ul className="contact-list">
            {contacts.map((c) => {
              const copyValue = c.copyValue || c.value;
              const copied = copiedItem === copyValue;
              return (
                <li key={c.value} className="contact-item">
                  <span className="contact-icon">{c.icon}</span>
                  <div className="contact-text">
                    <span className="contact-label">{c.label}</span>
                    <a href={c.href} className="contact-value" title={c.value}>{c.value}</a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(copyValue)}
                    className={`copy-btn ${copied ? 'copied' : ''}`}
                    title={t('hero_copy')}
                    aria-label={`${t('hero_copy')}: ${c.value}`}
                  >
                    {copied ? <Check /> : <Copy />}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="profile-actions">
            <a href="https://wa.me/56935487150" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <WhatsApp /> {t('hero_whatsapp_btn')}
            </a>
            <a href="https://www.linkedin.com/in/devserc" target="_blank" rel="noopener noreferrer" className="btn btn-secondary icon-btn" title="LinkedIn" aria-label="LinkedIn">
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href="https://github.com/Seba-erc" target="_blank" rel="noopener noreferrer" className="btn btn-secondary icon-btn" title="GitHub" aria-label="GitHub">
              <i className="devicon-github-original"></i>
            </a>
          </div>
        </aside>

      </div>
    </section>
  );
}
