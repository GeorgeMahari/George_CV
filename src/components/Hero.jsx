import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { personal } from '../data/cvData.js'

export default function Hero() {
  return (
    <section id="profile" className="section hero">
      <div className="hero-eyebrow">
        <span className="dot" /> disponibil pentru practică de specialitate · septembrie 2026
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        {personal.photo && (
          <img src={personal.photo} alt={personal.name} className="hero-photo" />
        )}
        <div>
          <h1>{personal.name}</h1>
          <p className="hero-role" style={{ marginTop: 10 }}>{personal.role}</p>
        </div>
      </div>

      <div className="hero-meta">
        <span className="meta-item"><MapPin size={13} /> {personal.location}</span>
        <a className="meta-item" href={`mailto:${personal.email}`}><Mail size={13} /> {personal.email}</a>
        <a className="meta-item" href={`tel:${personal.phone}`}><Phone size={13} /> {personal.phone}</a>
        <a className="meta-item" href={personal.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={13} /> LinkedIn
        </a>
        <a className="meta-item" href={personal.github} target="_blank" rel="noreferrer">
          <Github size={13} /> GitHub
        </a>
      </div>
    </section>
  )
}
