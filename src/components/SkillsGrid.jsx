import React from 'react'
import './SkillsGrid.css'
import { FaCode, FaServer, FaTools } from 'react-icons/fa'

const skillGroups = {
  Frontend: {
    icon: <FaCode className="icon-frontend text-3xl mr-3" />,
    skills: {
      HTML: 'text-html',
      CSS: 'text-css',
      JavaScript: 'text-js',
      React: 'text-react',
      Tailwind: 'text-tailwind',
      Vite: 'text-vite',
    },
  },
  Backend: {
    icon: <FaServer className="icon-backend text-3xl mr-3" />,
    skills: {
      'Node.js': 'text-node',
      Express: 'text-express',
    },
  },
  Tools: {
    icon: <FaTools className="icon-tools text-3xl mr-3" />,
    skills: {
      Git: 'text-git',
      GitHub: 'text-github',
      'VS Code': 'text-vscode',
      Postman: 'text-postman',
    },
  },
}

export default function SkillsGrid() {
  return (
    <section className="skills-section">
      <h2 className="skills-main-heading">Skills</h2>
      <div className="skills-grid-container">
        {Object.entries(skillGroups).map(([category, { icon, skills }]) => (
          <div key={category} className="skills-box">
            <div className="skills-header">
              {icon}
              <h3 className="skills-title">{category}</h3>
            </div>
            <div className="skills-list">
              {Object.entries(skills).map(([skill, color], i) => (
                <div key={i} className={`skill-card ${color}`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
