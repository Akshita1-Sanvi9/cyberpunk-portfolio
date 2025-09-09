import React from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Neon Portfolio',
    description: 'A scroll-reactive, glitch-themed portfolio with parallax and terminal intro.',
    tech: ['React', 'Tailwind', 'Vite'],
  },
  {
    title: 'EcoQuest',
    description: 'Gamified eco-awareness app with animated UI and impact tracking.',
    tech: ['JavaScript', 'GSAP', 'Firebase'],
  },
  {
    title: 'CyberGrid UI Kit',
    description: 'Modular UI components with neon glow, glitch buttons, and holographic cards.',
    tech: ['HTML', 'CSS', 'Figma'],
  },
]

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <div className="card-inner">
              {/* Front Face */}
              <div className="card-front">
                <h3 className="card-title">{project.title}</h3>
                <ul className="card-tech">
                  {project.tech.map((tech, j) => (
                    <li key={j}>{tech}</li>
                  ))}
                </ul>
              </div>

              {/* Back Face */}
              <div className="card-back">
                <p className="card-desc">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
