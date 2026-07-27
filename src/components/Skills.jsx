import { skillCategories } from '../data/cvData.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-eyebrow">
        <span className="state-tag">q2</span>
        <h2>Technical Skills</h2>
      </div>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div className="skill-category" key={cat.title}>
            <h3>{cat.title}</h3>
            <div className="skill-tags">
              {cat.skills.map((s) => (
                <span className="skill-tag" key={s.name}>
                  {s.name} <span className="level">· {s.level}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
