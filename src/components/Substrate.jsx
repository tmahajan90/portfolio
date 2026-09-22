import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, delay },
})
import './Substrate.css'

const STACK = [
  {
    category: 'Languages & Frameworks',
    items: ['Ruby on Rails', 'Angular', 'React', 'JavaScript', 'TypeScript', 'HTML5 / CSS3'],
  },
  {
    category: 'APIs & Architecture',
    items: ['GraphQL', 'REST / SOAP Web Services', 'Microservices', 'JSON-API', 'API Design & Integration'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Messaging & Caching',
    items: ['Kafka', 'RabbitMQ', 'Redis Pub/Sub', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD Pipelines', 'GitLab', 'Azure DevOps', 'Git'],
  },
  {
    category: 'Testing & Quality',
    items: ['RSpec (Unit, Integration, API)', 'Postman Automated API Testing', 'TDD / BDD', 'Code Reviews'],
  },
  {
    category: 'App Servers',
    items: ['Puma', 'Passenger (Phusion)', 'WEBrick'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Jira', 'Confluence', 'Agile / Scrum', 'Devise', 'Paperclip', 'Sidekiq'],
  },
  {
    category: 'Core Competencies',
    items: ['Full-Stack Development', 'Software Architecture & Design', 'Performance Optimisation', 'Team Leadership & Mentoring', 'Cross-Functional Collaboration', 'Change Management'],
  },
]

function SubstrateGroup({ group, index }) {
  return (
    <motion.div
      className="substrate-group"
      {...fadeUp(index * 0.06)}
    >
      <h3 className="substrate-category">{group.category}</h3>
      <ul>
        {group.items.map(item => (
          <li key={item} className="substrate-item">{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Substrate() {
  return (
    <section id="substrate" className="substrate section-pad">
      <motion.div
        className="section-header"
        {...fadeUp()}
      >
        <span className="section-num">03</span>
        <h2>What the systems<br />are made of.</h2>
      </motion.div>

      <div className="substrate-grid">
        {STACK.map((group, gi) => (
          <SubstrateGroup key={group.category} group={group} index={gi} />
        ))}
      </div>
    </section>
  )
}
