import { motion } from 'framer-motion'
import photo from '../assets/photo.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-role">Technical Lead &amp; Full-Stack Engineer</span>
          <span className="hero-sep">/</span>
          <span className="hero-domains">Ruby on Rails · Angular · Microservices · AWS</span>
        </div>

        <div className="hero-name-block">
          <motion.div
            className="hero-first"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            TARUN
          </motion.div>
          <motion.div
            className="hero-second-row"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={photo} alt="Tarun Mahajan" className="hero-photo" />
            <span className="hero-last">MAHAJAN</span>
          </motion.div>
        </div>

        <div className="hero-divider" />
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="hero-tags-mono">
            {['Ruby on Rails', 'Angular', 'Microservices', 'AWS', 'GraphQL', 'Docker', 'Team Lead'].map(t => (
              <span key={t} className="hero-tag-mono">{t}</span>
            ))}
          </div>
          <h2 className="hero-tagline">
            I build the systems that connect teams, data, and products.
          </h2>
          <p className="hero-desc">
            Accomplished Technical Lead with 12+ years delivering scalable full-stack platforms — from EHR systems and investment platforms to SaaS marketing suites serving tens of thousands of businesses globally.
          </p>
          <button
            className="hero-cta"
            onClick={() => document.getElementById('trajectory')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See my work ↓
          </button>
        </motion.div>
      </div>
    </section>
  )
}
