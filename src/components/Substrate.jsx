import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Substrate.css'

const STACK = [
  {
    category: 'Backend',
    items: ['Ruby on Rails', 'Node.js', 'REST APIs', 'GraphQL', 'Sidekiq', 'Puma', 'Passenger'],
  },
  {
    category: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'HTML5 / CSS3', 'React'],
  },
  {
    category: 'Data & Messaging',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ', 'Redis Pub/Sub'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'GitLab', 'Azure DevOps'],
  },
  {
    category: 'Testing & Tooling',
    items: ['RSpec', 'Postman', 'Git', 'Jira', 'Confluence', 'New Relic'],
  },
  {
    category: 'Architecture',
    items: ['Microservices', 'Event-Driven', 'Domain-Driven Design', 'SOLID', 'TDD / BDD'],
  },
]

function SubstrateGroup({ group, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className="substrate-group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
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
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="substrate" className="substrate section-pad">
      <motion.div
        ref={ref}
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
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
