import { profileSummary } from '../data/cvData.js'

export default function About() {
  return (
    <div className="section" style={{ paddingTop: 40 }}>
      <div className="section-eyebrow">
        <span className="state-tag">q0</span>
        <h2>Despre mine</h2>
      </div>
      <p className="about-text">{profileSummary}</p>
    </div>
  )
}
