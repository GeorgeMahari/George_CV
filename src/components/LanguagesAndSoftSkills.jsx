import { languages, softSkills } from '../data/cvData.js'

export default function LanguagesAndSoftSkills() {
  return (
    <section id="languages" className="section">
      <div className="section-eyebrow">
        <span className="state-tag">q5</span>
        <h2>Limbi & Soft Skills</h2>
      </div>
      <div className="split-row">
        <div className="card">
          <p className="subsection-title" style={{ marginTop: 0 }}>Limbi</p>
          {languages.map((l) => (
            <div className="lang-row" key={l.name}>
              <span>{l.name}</span>
              <span className="lang-level">{l.level}</span>
            </div>
          ))}
        </div>
        <div className="card">
          <p className="subsection-title" style={{ marginTop: 0 }}>Soft Skills</p>
          <div className="soft-skills-list">
            {softSkills.map((s) => (
              <span className="pill" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
