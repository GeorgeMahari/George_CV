import StateMachineNav from './components/StateMachineNav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import AcademicBackground from './components/AcademicBackground.jsx'
import Projects from './components/Projects.jsx'
import LanguagesAndSoftSkills from './components/LanguagesAndSoftSkills.jsx'
import CareerObjectiveAndContact from './components/CareerObjectiveAndContact.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <StateMachineNav />
      <main className="main-content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <AcademicBackground />
        <Projects />
        <LanguagesAndSoftSkills />
        <CareerObjectiveAndContact />
      </main>
    </div>
  )
}
