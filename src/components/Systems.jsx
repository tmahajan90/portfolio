import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, delay },
})
import './Systems.css'

const PROJECTS = [
  {
    num: '01',
    title: 'Marketing Suite — Mindbody Online',
    tag: 'Microservices · SaaS · Technical Lead',
    year: '2023 – Present',
    what: 'Spearheaded the design and delivery of Mindbody\'s Marketing Suite — a set of microservices powering email campaigns, marketing automations, smart contact lists, and performance analytics for tens of thousands of wellness and fitness businesses globally. Led a cross-functional team of up to 10 engineers delivering rapid, reliable releases.',
    hard: 'Coordinating zero-downtime AWS migration in a live production system while simultaneously shipping new features was the central challenge. Sequencing service cutovers, maintaining deployment reliability, and keeping team velocity high required meticulous planning and strong process discipline.',
    stack: ['Ruby on Rails', 'Redis', 'Microservices', 'JSON-API', 'Devise', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    num: '02',
    title: 'moveitpro.com — Movers & Packers Platform',
    tag: 'Full-Stack · Payments · SaaS',
    year: '2014 – 2018',
    what: 'Led creation of a robust SaaS platform for moving companies — streamlining sales pipelines, job management, and customer interactions. Integrated PayPal and Authorize.net for secure payment processing, implemented Twilio chat for real-time customer communications, and built PDF generation and e-commerce features using Prawn and Spree.',
    hard: 'Building reliable payment flows across two providers (PayPal + Authorize.net) with consistent error handling and reconciliation was the most critical piece. Ensuring the Twilio chat integration held up under concurrent sessions without dropped messages required careful queue management.',
    stack: ['Rails 3–5', 'MySQL', 'jQuery', 'Twilio', 'PayPal', 'Authorize.net', 'AWS', 'Prawn', 'Spree'],
  },
  {
    num: '03',
    title: 'NIS — Investment Scheme Platform',
    tag: 'Migration · Full-Stack · GraphQL',
    year: '2020 – 2023',
    what: 'Spearheaded the migration of a legacy Windows desktop application to a modern web platform for an investment scheme management product. Built the full stack using Ruby on Rails for the backend and Angular 13 for the frontend, with a GraphQL API layer enabling flexible data access. Applied Angular lazy loading to optimize performance and resource management.',
    hard: 'Migrating a legacy Windows application with years of business logic baked in required careful reverse-engineering of requirements before writing a line of new code. Keeping feature parity while modernising the architecture and collaborating directly with clients on evolving requirements was the hardest part.',
    stack: ['Ruby on Rails', 'Angular 13', 'GraphQL', 'Devise', 'Paperclip', 'PostgreSQL'],
  },
  {
    num: '04',
    title: 'Arya — EHR System',
    tag: 'Healthcare · Full-Stack · RoR',
    year: '2019 – 2020',
    what: 'Delivered a comprehensive Electronic Health Records system covering patient data management, appointment scheduling, e-prescribing, and medical billing. Designed to be affordable and accessible for healthcare providers of all sizes, with an intuitive interface that required minimal training.',
    hard: 'Healthcare data is inherently sensitive and complex — correctly modelling patient records, prescriptions, and billing in a way that matched clinical workflows (not just technical convenience) required close collaboration with domain experts and a lot of iteration on the data model.',
    stack: ['Ruby on Rails', 'Angular', 'REST APIs', 'MySQL'],
  },
  {
    num: '05',
    title: 'Health Tree — Patient Research Platform',
    tag: 'Healthcare · Patient-Driven · APIs',
    year: '2018 – 2019',
    what: 'Built a patient-driven research platform empowering multiple myeloma patients with real-time treatment options for informed physician discussions. Equipped community providers with up-to-date myeloma treatment insights and delivered a personalised treatment decision tool bridging patients and healthcare professionals.',
    hard: 'The hardest problem was surfacing the right treatment data at the right time — the platform needed to aggregate clinical and community data and present it in a way that was actionable for patients without being overwhelming or medically misleading.',
    stack: ['Ruby on Rails', 'React', 'REST APIs', 'PostgreSQL'],
  },
]

function ProjectCard({ p, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className="project-card"
      {...fadeUp(index * 0.07)}
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
  return (
    <section id="systems" className="systems section-pad">
      <motion.div
        className="section-header"
        {...fadeUp()}
      >
        <span className="section-num">02</span>
        <h2>Five systems,<br />and what was hard about each.</h2>
      </motion.div>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.num} p={p} index={i} />
        ))}
      </div>
    </section>
  )
}
