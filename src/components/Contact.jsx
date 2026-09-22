import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="contact section-pad">
      <motion.div
        ref={ref}
        className="contact-inner"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-num">04</span>
        <h2 className="contact-heading">Let's work together.</h2>
        <p className="contact-sub">
          Open to senior engineering and technical leadership roles.<br />
          Remote · India · 30–45 day notice
        </p>

        <a className="contact-email" href="mailto:mahajan.tarun1990@gmail.com">
          mahajan.tarun1990@gmail.com
        </a>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/tmahajan90/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://github.com/tmahajan90" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </div>
      </motion.div>
    </section>
  )
}
