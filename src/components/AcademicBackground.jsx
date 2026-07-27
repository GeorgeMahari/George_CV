import { academicBackground } from '../data/cvData.js'

export default function AcademicBackground() {
  const { intro, disciplines, transferableSkills, courseworkProjects, courses } = academicBackground

  return (
    <section id="academic" className="section">
      <div className="section-eyebrow">
        <span className="state-tag">q3</span>
        <h2>Fundament academic</h2>
      </div>
      <p className="about-text" style={{ marginBottom: 20 }}>{intro}</p>

      <div className="card">
        <p className="subsection-title" style={{ marginTop: 0 }}>Discipline studiate</p>
        <ul className="discipline-list">
          {disciplines.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <p className="subsection-title">Competențe transferabile</p>
        <div className="transferable-row">
          {transferableSkills.map((t) => (
            <span className="pill" key={t}>{t}</span>
          ))}
        </div>

        <p className="subsection-title">Proiecte de curs / laboratoare relevante</p>
        <ul className="discipline-list">
          {courseworkProjects.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <p className="subsection-title">Cursuri & pregătire academică</p>
        {courses.map((c) => (
          <p className="about-text" key={c.title} style={{ marginBottom: 6 }}>
            <strong style={{ color: 'var(--text)' }}>{c.title}</strong> — {c.note}
          </p>
        ))}
      </div>
    </section>
  )
}
