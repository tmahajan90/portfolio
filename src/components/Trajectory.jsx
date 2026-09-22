import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, delay },
})
import './Trajectory.css'

const ROLES = [
  {
    period: 'Aug 2023 — Present',
    role: 'Technical Lead / Lead Full-Stack Engineer',
    company: 'Encora · Mindbody Online',
    location: 'Bangalore (Remote)',
    desc: 'Leading the design and delivery of the Marketing Suite platform for Mindbody Online — a global wellness & fitness SaaS. Spearheads feature development, leads Ruby version upgrades, conducts code reviews, and manages a cross-functional team of up to 10 engineers. Led a seamless, zero-downtime end-to-end AWS migration and introduced proactive monitoring that reduced incident resolution times and improved 24/7 uptime.',
    stack: ['Ruby on Rails', 'Redis', 'Microservices', 'JSON-API', 'Devise', 'AWS', 'Docker'],
  },
  {
    period: 'Apr 2020 — Aug 2023',
    role: 'Senior Full-Stack Developer',
    company: 'Covalience India Pvt. Ltd.',
    location: 'Mohali',
    desc: 'Delivered three major projects: NIS (investment scheme platform migrated from legacy Windows to web using RoR + Angular 13 + GraphQL), a Medical Equipment Planning System (Angular 9→15 upgrade + RoR GraphQL APIs), and Trendency (BI platform migration from legacy Windows using Angular + .NET + GraphQL). Collaborated directly with clients and directed projects from concept to deployment.',
    stack: ['Ruby on Rails', 'Angular 13', 'GraphQL', 'Devise', 'Paperclip', '.NET'],
  },
  {
    period: 'Aug 2019 — Apr 2020',
    role: 'Ruby on Rails Developer',
    company: 'Antier Solutions Pvt. Ltd.',
    location: 'Mohali',
    desc: 'Built Arya — a comprehensive EHR system covering patient data, appointments, e-prescribing, and medical billing. Designed an intuitive interface optimising clinical workflow efficiency and streamlined healthcare operations to improve patient care.',
    stack: ['Ruby on Rails', 'Angular', 'REST APIs', 'MySQL'],
  },
  {
    period: 'Jul 2018 — Mar 2019',
    role: 'Ruby on Rails Developer',
    company: 'Smart Data Enterprises Inc.',
    location: 'Mohali',
    desc: 'Built Health Tree — a patient-driven research platform empowering multiple myeloma patients with real-time treatment options. Equipped community healthcare providers with up-to-date myeloma treatment insights and launched a personalized treatment decision tool.',
    stack: ['Ruby on Rails', 'React', 'REST APIs', 'PostgreSQL'],
  },
  {
    period: 'Sep 2014 — Jun 2018',
    role: 'Ruby on Rails Developer',
    company: 'SkyAch Software Solutions Pvt. Ltd.',
    location: 'Mohali',
    desc: 'Delivered multiple platforms including moveitpro.com (moving company SaaS with PayPal/Authorize.net payments and Twilio chat), a Lead Assignment & Maintenance System for financial advisors, and a Doctor & Patient Appointment Booking System. Grew from junior to mid-level engineer across 4 years mastering Rails, TDD, and Agile practices.',
    stack: ['Rails 3–5', 'MySQL', 'jQuery', 'Twilio', 'PayPal', 'AWS', 'Spree', 'Devise'],
  },
]

function RoleCard({ item, index }) {
  return (
    <motion.div
      className="role-card"
      {...fadeUp(index * 0.06)}
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
  return (
    <section id="trajectory" className="trajectory section-pad">
      <motion.div
        className="section-header"
        {...fadeUp()}
      >
        <span className="section-num">01</span>
        <h2>Where I am now,<br />and how I got here.</h2>
        <p className="section-sub">Present ————— 2014</p>
      </motion.div>

      <div className="timeline">
        {ROLES.map((item, i) => (
          <RoleCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
