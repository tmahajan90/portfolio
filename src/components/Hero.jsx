import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 241, 53, ${p.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden />

      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technical Lead · Full-Stack Engineer · 11+ years
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          TARUN<br />MAHAJAN
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          I build the systems that connect teams, data, and products.
        </motion.p>

        <motion.div
          className="hero-tags"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          {['Ruby on Rails', 'Angular', 'AWS', 'Microservices', 'Team Lead'].map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </motion.div>

        <motion.button
          className="hero-cta"
          onClick={() => document.getElementById('trajectory')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.95 }}
        >
          See my work ↓
        </motion.button>
      </div>
    </section>
  )
}
