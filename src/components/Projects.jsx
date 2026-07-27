import { ExternalLink } from 'lucide-react'
import { projects } from '../data/cvData.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-eyebrow">
        <span className="state-tag">q4</span>
        <h2>Proiecte</h2>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.name}>
            <div>
              <h3>{p.name}</h3>
              <p className="project-type">{p.type}</p>
            </div>
            <p className="project-desc">{p.description}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {p.link && (
              <a className="project-link" href={p.link.startsWith('http') ? p.link : '#'}>
                <ExternalLink size={12} /> {p.link.startsWith('http') ? 'Repository' : p.link}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
