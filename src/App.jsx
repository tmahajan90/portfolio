import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Trajectory from './components/Trajectory'
import Systems from './components/Systems'
import Substrate from './components/Substrate'
import Provenance from './components/Provenance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/App.css'

const SECTIONS = [
  { id: 'hero',       label: '00 Signal' },
  { id: 'trajectory', label: '01 Trajectory' },
  { id: 'systems',    label: '02 Systems' },
  { id: 'substrate',  label: '03 Substrate' },
  { id: 'provenance', label: '04 Provenance' },
  { id: 'contact',    label: '05 Channel' },
]

export default function App() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      return obs
    }).filter(Boolean)
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      <Nav sections={SECTIONS} active={active} />
      <main>
        <Hero />
        <Trajectory />
        <Systems />
        <Substrate />
        <Provenance />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
