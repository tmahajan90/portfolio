import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Trajectory.css'

const ROLES = [
  {
    period: '2023 — Present',
    role: 'Technical Lead',
    company: 'Encora · Mindbody Online',
    location: 'Remote',
    desc: 'Leading a cross-functional team of 10 engineers on the Marketing Suite microservices platform — campaigns, automations, smart lists, and contact management for a global wellness & fitness SaaS serving millions of users.',
    stack: ['Ruby on Rails', 'Angular', 'Kafka', 'AWS', 'Docker'],
  },
  {
    period: '2020 — 2023',
    role: 'Senior Full-Stack Engineer',
    company: 'Covalience India',
    location: 'Remote',
    desc: 'Built and maintained full-stack features across investment platforms and healthcare applications using Ruby on Rails, Angular, and GraphQL. Led API design, mentored junior engineers, and drove testing practices.',
    stack: ['Ruby on Rails', 'Angular', 'GraphQL', 'PostgreSQL', 'RSpec'],
  },
  {
    period: '2019 — 2020',
    role: 'Ruby on Rails Developer',
    company: 'Antier Solutions',
    location: 'Chandigarh',
    desc: 'Developed backend services and REST APIs for fintech and blockchain-adjacent products. Contributed to system architecture and performance optimisation.',
    stack: ['Ruby on Rails', 'MySQL', 'Redis', 'REST APIs'],
  },
  {
    period: '2018 — 2019',
    role: 'Rails Developer',
    company: 'Smart Data Enterprises',
    location: 'Mohali',
    desc: 'Built and maintained web applications for logistics and moving industry clients, delivering features across the full stack.',
    stack: ['Ruby on Rails', 'JavaScript', 'PostgreSQL'],
  },
  {
    period: '2014 — 2018',
    role: 'Ruby on Rails Developer',
    company: 'SkyAch Software',
    location: 'Punjab',
    desc: 'Started professional career building web applications from scratch. Grew from junior to mid-level developer, mastering Rails patterns, test-driven development, and agile workflows.',
    stack: ['Ruby on Rails', 'jQuery', 'MySQL', 'RSpec'],
  },
]

function RoleCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="role-card"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="role-period">{item.period}</div>
      <div className="role-body">
        <div className="role-header">
          <h3 className="role-title">{item.role}</h3>
          <span className="role-company">{item.company}</span>
          <span className="role-location">{item.location}</span>
        </div>
        <p className="role-desc">{item.desc}</p>
        <div className="role-stack">
          {item.stack.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Trajectory() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="trajectory" className="trajectory section-pad">
      <motion.div
        ref={ref}
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="section-num">01</span>
        <h2>Where I am now,<br />and how I got here.</h2>
        <p className="section-sub">Now ————— 2014</p>
      </motion.div>

      <div className="timeline">
        {ROLES.map((item, i) => (
          <RoleCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
