import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Skills() {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  
  const skillCategories = [
    {
      title: t('skills_cat_1'),
      skills: [
        { name: "HTML5", icon: "devicon-html5-plain", color: "#e34f26" },
        { name: "CSS3", icon: "devicon-css3-plain", color: "#1572b6" },
        { name: "JavaScript", icon: "devicon-javascript-plain", color: "#f7df1e" },
        { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933" },
        { name: "React", icon: "devicon-react-original", color: "#61dafb" },
        { name: "C#", icon: "devicon-csharp-plain", color: "#9b4993" },
        { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178c6" },
        { name: "Java", icon: "devicon-java-plain", color: "#ea2d2e" },
        { name: "Express", icon: "devicon-express-original", color: "#ffffff" },
        { name: "Kotlin", icon: "devicon-kotlin-plain", color: "#7f52ff" },
        { name: "Python", icon: "devicon-python-plain", color: "#3776ab" },
        { name: "C++", icon: "devicon-cplusplus-plain", color: "#00599c" },
        { name: "SQL", icon: "devicon-azuresqldatabase-plain", color: "#003b57" }
      ]
    },
    {
      title: t('skills_cat_2'),
      skills: [
        { name: "VS Code", icon: "devicon-vscode-plain", color: "#007acc" },
        { name: "Visual Studio", icon: "devicon-visualstudio-plain", color: "#5c2d91" },
        { name: "Expo", image: "/assets/icons/expo.svg?v=2", color: "#ffffff" },
        { name: "Android Studio", icon: "devicon-androidstudio-plain", color: "#3ddc84" },
        { name: "Apache NetBeans", icon: "devicon-apache-plain", color: "#1b6ac6" },
        { name: "Unity", image: "/assets/icons/unity-icon.svg", color: "#ffffff" },
        { name: "Arduino IDE", icon: "devicon-arduino-plain", color: "#00979d" }
      ]
    },
    {
      title: t('skills_cat_3'),
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479a1" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#336791" },
        { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain", color: "#cc292b" },
        { name: "DBeaver", image: "/assets/icons/dbeaver.svg", color: "#382922" }
      ]
    },
    {
      title: t('skills_cat_4'),
      skills: [
        { name: "GNU/Linux", icon: "devicon-linux-plain", color: "#fcc624" },
        { name: "Windows", icon: "devicon-windows8-original", color: "#00a4ef" },
        { name: "Azure", icon: "devicon-azure-plain", color: "#0089d6" }
      ]
    }
  ];

  return (
    <section id="habilidades" className="container" ref={revealRef}>
      <h2 className="section-title reveal-element">{t('skills_title')}</h2>
      
      <div className="glass-card reveal-element delay-100" style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          {t('skills_description')}
        </p>
      </div>

      <div className="categories-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className={`glass-card reveal-element delay-${Math.min((index + 1) * 100, 300)}`} style={{ padding: '2.5rem 1.5rem' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--accent-hover)', fontSize: '1.5rem', textAlign: 'center' }}>{category.title}</h3>
            <div className="skills-flex">
              {category.skills.map((skill, sIndex) => (
                <div 
                  key={sIndex} 
                  className="skill-item tooltip-container"
                  tabIndex="0"
                  style={{
                    backgroundColor: skill.color ? `${skill.color}15` : 'rgba(255,255,255,0.05)',
                    borderColor: skill.color ? `${skill.color}30` : 'rgba(255,255,255,0.1)'
                  }}
                >
                  {skill.image ? (
                    <img src={skill.image} alt={skill.name} className="skill-icon-img" />
                  ) : (
                    <i className={`${skill.icon} colored skill-icon`}></i>
                  )}
                  <span className="custom-tooltip">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
