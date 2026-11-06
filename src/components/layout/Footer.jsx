import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="/" className="brand">
            <span className="brand-bracket">&lt;</span>SERC<span className="brand-bracket">/&gt;</span>
          </a>
          <span className="footer-copy">
            © {year} Sebastián Reinoso · devseba.cl · {t('footer_built')}
          </span>
        </div>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/devserc" target="_blank" rel="noopener noreferrer" className="btn btn-ghost icon-btn" title="LinkedIn" aria-label="LinkedIn">
            <i className="devicon-linkedin-plain"></i>
          </a>
          <a href="https://github.com/Seba-erc" target="_blank" rel="noopener noreferrer" className="btn btn-ghost icon-btn" title="GitHub" aria-label="GitHub">
            <i className="devicon-github-original"></i>
          </a>
          <a href="mailto:sebastian31reinoso10@gmail.com" className="btn btn-ghost icon-btn" title="Email" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
