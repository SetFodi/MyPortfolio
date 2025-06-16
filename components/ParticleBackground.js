import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = ({ density = 50, interactive = true }) => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef([])
  const animationRef = useRef()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  class Particle {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.baseX = x
      this.baseY = y
      this.vx = (Math.random() - 0.5) * 0.5
      this.vy = (Math.random() - 0.5) * 0.5
      this.size = Math.random() * 2 + 1
      this.opacity = Math.random() * 0.5 + 0.2
      this.angle = Math.random() * Math.PI * 2
      this.speed = Math.random() * 0.02 + 0.01
      this.hue = Math.random() * 60 + 200 // Blue to purple range
    }

    update(mouse) {
      // Base movement
      this.angle += this.speed
      this.x = this.baseX + Math.cos(this.angle) * 50
      this.y = this.baseY + Math.sin(this.angle) * 50

      // Mouse interaction
      if (interactive && mouse) {
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          const repelX = (this.x - mouse.x) * force * 0.1
          const repelY = (this.y - mouse.y) * force * 0.1
          
          this.x += repelX
          this.y += repelY
          this.opacity = Math.min(1, this.opacity + force * 0.5)
        } else {
          // Return to base position
          this.x += (this.baseX + Math.cos(this.angle) * 50 - this.x) * 0.1
          this.y += (this.baseY + Math.sin(this.angle) * 50 - this.y) * 0.1
          this.opacity = Math.max(0.2, this.opacity - 0.01)
        }
      }

      // Keep particles within bounds
      if (this.x < 0 || this.x > dimensions.width) {
        this.baseX = Math.random() * dimensions.width
      }
      if (this.y < 0 || this.y > dimensions.height) {
        this.baseY = Math.random() * dimensions.height
      }
    }

    draw(ctx) {
      ctx.save()
      ctx.globalAlpha = this.opacity
      
      // Create gradient for particle
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 3
      )
      gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, 1)`)
      gradient.addColorStop(1, `hsla(${this.hue}, 70%, 60%, 0)`)
      
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
      ctx.fill()
      
      // Inner glow
      ctx.fillStyle = `hsla(${this.hue}, 80%, 80%, 0.8)`
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
      
      ctx.restore()
    }
  }

  const initParticles = () => {
    particlesRef.current = []
    for (let i = 0; i < density; i++) {
      const x = Math.random() * dimensions.width
      const y = Math.random() * dimensions.height
      particlesRef.current.push(new Particle(x, y))
    }
  }

  const drawConnections = (ctx) => {
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const dx = particlesRef.current[i].x - particlesRef.current[j].x
        const dy = particlesRef.current[i].y - particlesRef.current[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 120) {
          const opacity = (120 - distance) / 120 * 0.3
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
          ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
          ctx.stroke()
        }
      }
    }
  }

  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    // Update and draw particles
    particlesRef.current.forEach(particle => {
      particle.update(interactive ? mouseRef.current : null)
      particle.draw(ctx)
    })

    // Draw connections
    drawConnections(ctx)

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [interactive])

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      initParticles()
      animate()
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions])

  return (
    <motion.canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        background: 'transparent',
      }}
    />
  )
}

export default ParticleBackground 