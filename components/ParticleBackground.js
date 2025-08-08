import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = ({ density = 15, interactive = false }) => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef([])
  const animationRef = useRef()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isReduced, setIsReduced] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReduced(mediaQuery.matches)
    
    const handleChange = (e) => setIsReduced(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Performance-optimized Particle class
  class Particle {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.baseX = x
      this.baseY = y
      this.vx = (Math.random() - 0.5) * 0.2 // Reduced velocity
      this.vy = (Math.random() - 0.5) * 0.2
      this.size = Math.random() * 1.5 + 0.5 // Smaller particles
      this.opacity = Math.random() * 0.3 + 0.1 // Lower opacity
      this.angle = Math.random() * Math.PI * 2
      this.speed = Math.random() * 0.01 + 0.005 // Slower movement
      this.hue = Math.random() * 30 + 220 // Narrower blue range
    }

    update(mouse) {
      // Simplified movement
      this.angle += this.speed
      this.x = this.baseX + Math.cos(this.angle) * 20 // Reduced movement range
      this.y = this.baseY + Math.sin(this.angle) * 20

      // Simplified mouse interaction (only if enabled and close)
      if (interactive && mouse) {
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) { // Reduced interaction radius
          const force = (100 - distance) / 100
          this.x += (this.x - mouse.x) * force * 0.05 // Reduced force
          this.y += (this.y - mouse.y) * force * 0.05
        }
      }

      // Keep particles within bounds
      if (this.x < -50 || this.x > dimensions.width + 50) {
        this.baseX = Math.random() * dimensions.width
      }
      if (this.y < -50 || this.y > dimensions.height + 50) {
        this.baseY = Math.random() * dimensions.height
      }
    }

    draw(ctx) {
      // Simplified rendering - single circle instead of gradient
      ctx.save()
      ctx.globalAlpha = this.opacity
      ctx.fillStyle = `hsl(${this.hue}, 50%, 70%)`
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }
  }

  const initParticles = () => {
    particlesRef.current = []
    // Reduce particle count on mobile
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? Math.min(density, 8) : density
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * dimensions.width
      const y = Math.random() * dimensions.height
      particlesRef.current.push(new Particle(x, y))
    }
  }

  // Simplified connection drawing with fewer connections
  const drawConnections = (ctx) => {
    // Skip connections on mobile or if reduced motion is preferred
    if (window.innerWidth < 768 || isReduced) return
    
    const maxConnections = 3 // Limit connections per particle
    
    for (let i = 0; i < particlesRef.current.length; i++) {
      let connectionCount = 0
      for (let j = i + 1; j < particlesRef.current.length && connectionCount < maxConnections; j++) {
        const dx = particlesRef.current[i].x - particlesRef.current[j].x
        const dy = particlesRef.current[i].y - particlesRef.current[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 80) { // Reduced connection distance
          const opacity = (80 - distance) / 80 * 0.15 // Lower opacity
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
          ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
          ctx.stroke()
          connectionCount++
        }
      }
    }
  }

  const lastFrameTimeRef = useRef(0)

  const animate = (timestamp) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    // Throttle to ~30fps
    const last = lastFrameTimeRef.current || 0
    if (timestamp && timestamp - last < 33) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }
    lastFrameTimeRef.current = timestamp

    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    // Update and draw particles
    particlesRef.current.forEach(particle => {
      particle.update(interactive ? mouseRef.current : null)
      particle.draw(ctx)
    })

    // Draw connections only if not reduced motion
    if (!isReduced) {
      drawConnections(ctx)
    }

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
      // Throttle mouse updates
      if (Date.now() - (handleMouseMove.lastCall || 0) < 16) return // ~60fps throttle
      handleMouseMove.lastCall = Date.now()
      
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    if (interactive && !isReduced) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [interactive, isReduced])

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      initParticles()
      // Don't start animation if reduced motion is preferred
      if (!isReduced) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, isReduced])

  // Pause when tab hidden to avoid background CPU usage
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      } else if (!document.hidden && !isReduced) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [isReduced])

  // Don't render on mobile or if reduced motion
  if (typeof window !== 'undefined' && (window.innerWidth < 768 || isReduced)) {
    return null
  }

  return (
    <motion.canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }} // Reduced opacity
      transition={{ duration: 2 }}
      style={{
        background: 'transparent',
        willChange: 'auto', // Remove will-change when not animating
      }}
    />
  )
}

export default ParticleBackground 