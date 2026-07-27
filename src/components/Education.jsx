import { education } from '../data/cvData.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-eyebrow">
        <span className="state-tag">q1</span>
        <h2>Educație</h2>
      </div>
      {education.map((edu) => (
        <div className="card" key={edu.institution}>
          <div className="timeline-item">
            <span className="timeline-marker mono">{edu.period}</span>
            <div>
              <h3>{edu.institution}</h3>
              <p className="timeline-sub">{edu.faculty}</p>
              <p className="timeline-sub">
                {edu.program} · {edu.degree} · {edu.year}
              </p>
              <p className="timeline-sub">{edu.location} · {edu.status}</p>
              {edu.note && <span className="timeline-note">{edu.note}</span>}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
