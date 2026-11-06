// Categorías de habilidades. `titleKey` se traduce con t() desde translations.js
export const skillCategories = [
  {
    titleKey: 'skills_cat_1',
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain", color: "#e34f26" },
      { name: "CSS3", icon: "devicon-css3-plain", color: "#1572b6" },
      { name: "JavaScript", icon: "devicon-javascript-plain", color: "#f7df1e" },
      { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933" },
      { name: "React", icon: "devicon-react-original", color: "#61dafb" },
      { name: "Next.js", icon: "devicon-nextjs-plain", color: "#ffffff" },
      { name: "C#", icon: "devicon-csharp-plain", color: "#9b4993" },
      { name: "TypeScript", icon: "devicon-typescript-plain", color: "#3178c6" },
      { name: "Java", icon: "devicon-java-plain", color: "#ea2d2e" },
      { name: "Express", icon: "devicon-express-original", color: "#ffffff" },
      { name: "Kotlin", icon: "devicon-kotlin-plain", color: "#7f52ff" },
      { name: "Python", icon: "devicon-python-plain", color: "#3776ab" },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain", color: "#0078d4" }
    ]
  },
  {
    titleKey: 'skills_cat_2',
    skills: [
      { name: "VS Code", icon: "devicon-vscode-plain", color: "#007acc" },
      { name: "Visual Studio", icon: "devicon-visualstudio-plain", color: "#5c2d91" },
      { name: "Expo", image: "/assets/icons/expo.svg?v=2", color: "#ffffff" },
      { name: "Android Studio", icon: "devicon-androidstudio-plain", color: "#3ddc84" },
      { name: "Apache NetBeans", image: "/assets/icons/netbeans.svg", color: "#1b6ac6" },
      { name: "Unity", image: "/assets/icons/unity-icon.svg", color: "#ffffff" },
      { name: "Arduino IDE", icon: "devicon-arduino-plain", color: "#00979d" }
    ]
  },
  {
    titleKey: 'skills_cat_3',
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479a1" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", color: "#336791" },
      { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain", color: "#cc292b" },
      { name: "DBeaver", image: "/assets/icons/dbeaver.svg", color: "#a0785a" }
    ]
  },
  {
    titleKey: 'skills_cat_4',
    skills: [
      { name: "GNU/Linux", icon: "devicon-linux-plain", color: "#fcc624" },
      { name: "Windows", icon: "devicon-windows8-original", color: "#00a4ef" },
      { name: "Azure", icon: "devicon-azure-plain", color: "#0089d6" }
    ]
  }
];

export const totalSkills = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);
