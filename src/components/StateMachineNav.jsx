import { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Printer } from 'lucide-react'
import { navStates, personal } from '../data/cvData.js'

const StartArrow = () => (
  <svg viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="5" x2="12" y2="5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M12 1.5L15.5 5L12 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function StateList({ activeId, onSelect, compact }) {
  return (
    <ul>
      {navStates.map((state, i) => (
        <li key={state.id}>
          {state.start && !compact && <div className="fsm-start-arrow"><StartArrow /> start</div>}
          <button
            className={`fsm-state${activeId === state.id ? ' active' : ''}`}
            onClick={() => onSelect(state.id)}
          >
            <span className={`fsm-node${state.accept ? ' accept' : ''}`}>{state.short}</span>
            <span className="fsm-state-label">{state.label}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default function StateMachineNav() {
  const [activeId, setActiveId] = useState(navStates[0].id)
  const observerRef = useRef(null)

  useEffect(() => {
    const sections = navStates
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((s) => observerRef.current.observe(s))
    return () => observerRef.current?.disconnect()
  }, [])

  const handleSelect = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handlePrint = () => window.print()

  return (
    <>
      {/* Desktop sidebar: rendered as a finite-state diagram */}
      <nav className="fsm-nav" aria-label="Navigare CV">
        <div className="fsm-nav-top">
          <div className="fsm-brand">
            <span className="name">{personal.name}</span>
            <span className="tagline">// George.cv · 7 stări</span>
          </div>
          <div className="fsm-diagram">
            <StateList activeId={activeId} onSelect={handleSelect} />
          </div>
        </div>
        <div className="fsm-nav-bottom">
          <div className="fsm-links">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
          </div>
          <button className="print-btn" onClick={handlePrint}>
            <Printer size={14} /> Printează / Export PDF
          </button>
        </div>
      </nav>

      {/* Mobile: compact top strip with the same states */}
      <div className="fsm-nav-mobile">
        <div className="fsm-brand">
          <span className="name">{personal.name}</span>
        </div>
        <button className="print-btn" onClick={handlePrint} aria-label="Printează CV">
          <Printer size={14} />
        </button>
      </div>
      <div className="fsm-nav-mobile-states">
        <StateList activeId={activeId} onSelect={handleSelect} compact />
      </div>
    </>
  )
}
