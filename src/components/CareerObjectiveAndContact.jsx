import { Mail, Phone, Linkedin, Github, MapPin, BadgeCheck } from 'lucide-react'
import { careerObjective, personal } from '../data/cvData.js'

export default function CareerObjectiveAndContact() {
  return (
    <section id="contact" className="section">
      <div className="section-eyebrow">
        <span className="state-tag">q6 · accept</span>
        <h2>{careerObjective.title}</h2>
      </div>

      <p className="objective-text">{careerObjective.text}</p>

      <p className="subsection-title" style={{ marginTop: 0 }}>Interesat de</p>
      <div className="interest-tags">
        {careerObjective.interests.map((i) => (
          <span className="pill" key={i}>{i}</span>
        ))}
      </div>
      <p className="about-text" style={{ marginTop: 8 }}>
        Locație preferată: {careerObjective.preferredLocation}
      </p>

      <p className="subsection-title">Contact</p>
      <div className="contact-grid">
        <div className="card contact-item">
          <Mail size={17} color="var(--accent)" />
          <div>
            <span className="label">Email</span>
            <a className="value" href={`mailto:${personal.email}`}>{personal.email}</a>
          </div>
        </div>
        <div className="card contact-item">
          <Phone size={17} color="var(--accent)" />
          <div>
            <span className="label">Telefon</span>
            <a className="value" href={`tel:${personal.phone}`}>{personal.phone}</a>
          </div>
        </div>
        <div className="card contact-item">
          <Linkedin size={17} color="var(--accent)" />
          <div>
            <span className="label">LinkedIn</span>
            <a className="value" href={personal.linkedin} target="_blank" rel="noreferrer">Profil LinkedIn</a>
          </div>
        </div>
        <div className="card contact-item">
          <Github size={17} color="var(--accent)" />
          <div>
            <span className="label">GitHub</span>
            <a className="value" href={personal.github} target="_blank" rel="noreferrer">Profil GitHub</a>
          </div>
        </div>
        <div className="card contact-item">
          <MapPin size={17} color="var(--accent)" />
          <div>
            <span className="label">Locație</span>
            <span className="value">{personal.location}</span>
          </div>
        </div>
        <div className="card contact-item">
          <BadgeCheck size={17} color="var(--accent)" />
          <div>
            <span className="label">Permis conducere</span>
            <span className="value">{personal.drivingLicense}</span>
          </div>
        </div>
      </div>

    </section>
  )
}
