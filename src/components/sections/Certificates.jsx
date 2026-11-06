import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { certificatesData } from '../../data/certificatesData';
import SectionHeader from '../ui/SectionHeader';
import { ArrowRight, Check, Clock, Award } from '../ui/Icons';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configurar el worker de PDF.js usando CDN para asegurar compatibilidad
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Certificates() {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <section id="certificados" ref={revealRef}>
      <div className="container">
        <SectionHeader
          eyebrow={t('cert_eyebrow')}
          title={t('cert_title')}
          subtitle={t('cert_subtitle')}
        />

        <div className="certifications-grid reveal-element delay-100">
          {certificatesData.map((cert) => {
            const content = (
              <>
                <div className="cert-thumb">
                  {cert.pending ? (
                    <div className="cert-thumb-empty">
                      <Award size={28} />
                      {t('cert_status_soon')}
                    </div>
                  ) : (
                    <Document
                      file={cert.file}
                      loading={<div className="cert-thumb-msg">{t('cert_loading')}</div>}
                      error={<div className="cert-thumb-msg">{t('cert_error')}</div>}
                    >
                      <Page pageNumber={1} height={200} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                  )}
                </div>
                <div className="cert-body">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-meta">
                    {cert.pending ? (
                      <span className="badge"><Clock /> {t('cert_status_soon')}</span>
                    ) : (
                      <>
                        <span className="badge badge-success"><Check size={12} /> {t('cert_status_completed')}</span>
                        <span className="cert-link">{t('cert_open')} <ArrowRight size={14} /></span>
                      </>
                    )}
                  </div>
                </div>
              </>
            );

            return cert.pending ? (
              <div key={cert.title} className="card cert-card pending" title={t('cert_status_soon')}>
                {content}
              </div>
            ) : (
              <a
                key={cert.title}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="card cert-card"
                title={t('cert_open')}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
