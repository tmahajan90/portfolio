import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Systems.css'

const PROJECTS = [
  {
    num: '01',
    title: 'Marketing Suite Platform',
    tag: 'Microservices · SaaS · Team Lead',
    year: '2023 – Present',
    what: 'Led the engineering of Mindbody\'s Marketing Suite — a set of interconnected microservices handling email campaigns, marketing automations, smart contact lists, and performance analytics for tens of thousands of fitness and wellness businesses globally.',
    hard: 'The hard part was maintaining reliability across service boundaries while shipping new features at speed. Managing a distributed team of 10, aligning with product and design, and reducing technical debt without slowing delivery required constant prioritisation.',
    stack: ['Ruby on Rails', 'Angular', 'Kafka', 'Redis', 'AWS', 'Docker', 'PostgreSQL'],
  },
  {
    num: '02',
    title: 'AWS Cloud Migration',
    tag: 'Infrastructure · DevOps · Architecture',
    year: '2023',
    what: 'Led a full migration of application infrastructure to AWS — spanning compute, storage, networking, and CI/CD pipelines. The move improved deployment reliability and enabled the team to ship with confidence using blue-green deployments and automated rollbacks.',
    hard: 'Zero-downtime migration with live production traffic was the core constraint. Sequencing service cutovers, updating all cross-service connection strings, and keeping the team informed without creating anxiety took as much planning as the technical work itself.',
    stack: ['AWS', 'Docker', 'CI/CD', 'GitLab', 'Azure DevOps', 'Kubernetes'],
  },
  {
    num: '03',
    title: 'GraphQL API Layer',
    tag: 'Full-Stack · API Design · Performance',
    year: '2020 – 2023',
    what: 'Designed and built a GraphQL API layer on top of existing REST services for an investment platform, enabling flexible data fetching for the Angular frontend and significantly reducing over-fetching.',
    hard: 'N+1 query problems became immediately visible once complex nested queries were possible. Implementing dataloader patterns, query depth limits, and cost analysis prevented performance regressions while keeping the API useful for the front-end team.',
    stack: ['Ruby on Rails', 'GraphQL', 'Angular', 'PostgreSQL', 'RSpec', 'Postman'],
  },
]

function ProjectCard({ p, index }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button className="project-toggle" onClick={() => setOpen(o => !o)}>
        <div className="project-top">
          <span className="project-num">{p.num}</span>
          <h3 className="project-title">{p.title}</h3>
          <span className="project-tag">{p.tag}</span>
          <span className="project-year">{p.year}</span>
          <span className="project-arrow">{open ? '−' : '+'}</span>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="project-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-inner">
              <div>
                <p className="project-label">What it was</p>
                <p className="project-text">{p.what}</p>
              </div>
              <div>
                <p className="project-label">What was hard</p>
                <p className="project-text">{p.hard}</p>
              </div>
              <div className="project-stack">
                {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Systems() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="systems" className="systems section-pad">
      <motion.div
        ref={ref}
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="section-num">02</span>
        <h2>Three systems,<br />and what was hard about each.</h2>
      </motion.div>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.num} p={p} index={i} />
        ))}
      </div>
    </section>
  )
}
