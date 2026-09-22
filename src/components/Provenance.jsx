import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Provenance.css'

export default function Provenance() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="provenance" className="provenance section-pad">
      <motion.div
        ref={ref}
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="section-num">04</span>
        <h2>On the record.</h2>
      </motion.div>

      <div className="provenance-grid">
        <div className="provenance-col">
          <h3 className="provenance-label">Education</h3>
          <div className="provenance-item">
            <span className="provenance-title">MCA — Master of Computer Applications</span>
            <span className="provenance-meta">Punjabi University, Patiala · 2014</span>
          </div>
          <div className="provenance-item">
            <span className="provenance-title">BCA — Bachelor of Computer Applications</span>
            <span className="provenance-meta">Guru Nanak Dev University, Pathankot · 2011</span>
          </div>
        </div>

        <div className="provenance-col">
          <h3 className="provenance-label">Certifications</h3>
          <div className="provenance-item">
            <span className="provenance-title">Code Bashing in Ruby on Rails</span>
          </div>
        </div>

        <div className="provenance-col">
          <h3 className="provenance-label">Awards & Recognition</h3>
          <div className="provenance-item">
            <span className="provenance-award">★</span>
            <div>
              <span className="provenance-title">Super Encorian Award (×2)</span>
              <span className="provenance-meta">Encora</span>
            </div>
          </div>
          <div className="provenance-item">
            <span className="provenance-award">★</span>
            <div>
              <span className="provenance-title">Rising Star Award</span>
              <span className="provenance-meta">Antier Solutions Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
