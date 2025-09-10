import { useEffect, useState, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isReduced, setIsReduced] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const mouse = useRef({ x: 0, y: 0 })
  const delayedMouse = useRef({ x: 0, y: 0 })
  const rafId = useRef()
  const lastUpdate = useRef(0)

  // Check for reduced motion and mobile
  useEffect(() => {
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setIsReduced(mediaQuery.matches)
    }
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || !window.matchMedia('(hover: hover)').matches)
    }
    
    checkReducedMotion()
    checkMobile()
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => checkReducedMotion()
    const handleResize = () => checkMobile()
    
    mediaQuery.addEventListener('change', handleChange)
    window.addEventListener('resize', handleResize)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Optimized animation loop with frame rate limiting
  const animateCursor = useCallback(() => {
    const now = performance.now()
    
    // Limit to ~60fps but allow skipping frames if needed
    if (now - lastUpdate.current < 16) {
      rafId.current = requestAnimationFrame(animateCursor)
      return
    }
    
    lastUpdate.current = now
    
    const delay = isReduced ? 1 : 0.15 // Instant movement if reduced motion
    
    if (!isReduced) {
      delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * delay
      delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * delay
    } else {
      delayedMouse.current.x = mouse.current.x
      delayedMouse.current.y = mouse.current.y
    }
    
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${delayedMouse.current.x}px, ${delayedMouse.current.y}px, 0)`
    }
    
    
    rafId.current = requestAnimationFrame(animateCursor)
  }, [isReduced])

  useEffect(() => {
    // Don't initialize cursor on mobile or if reduced motion is preferred
    if (isMobile || isReduced) return

    let lastMouseUpdate = 0
    
    const handleMouseMove = (e) => {
      const now = performance.now()
      
      // Throttle mouse updates to reduce performance impact
      if (now - lastMouseUpdate < 8) return // ~120fps throttle
      lastMouseUpdate = now
      
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      
      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Simplified hover detection with debouncing
    let hoverTimeout
    const handleMouseOver = (e) => {
      clearTimeout(hoverTimeout)
      
      const target = e.target
      const isInteractive = target.matches('a, button, [role="button"], input, textarea, select, .magnetic-button, .cursor-pointer, [data-cursor]')
      
      if (isInteractive) {
        setIsHovering(true)
        
        // Simplified cursor variant detection
        if (target.matches('a[href^="mailto:"], a[href^="tel:"]')) {
          setCursorVariant('contact')
        } else if (target.matches('a[href*="github"], a[href*="linkedin"]')) {
          setCursorVariant('social')
        } else if (target.matches('button, [role="button"], .magnetic-button')) {
          setCursorVariant('button')
        } else if (target.matches('a')) {
          setCursorVariant('link')
        } else {
          setCursorVariant('hover')
        }
      } else {
        // Debounce the hover state change
        hoverTimeout = setTimeout(() => {
          setIsHovering(false)
          setCursorVariant('default')
        }, 50)
      }
    }

    // Start animation loop
    rafId.current = requestAnimationFrame(animateCursor)

    // Add event listeners with passive option for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })

    return () => {
      // Cleanup
      clearTimeout(hoverTimeout)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [animateCursor, isVisible, isMobile, isReduced])

  // Don't render on mobile devices or if reduced motion is preferred
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (isMobile || isReduced || !mounted) {
    return null
  }

  const cursorUI = (
    <>
      {/* Main cursor ring - simplified */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovering ? '50px' : '32px',
          height: isHovering ? '50px' : '32px',
          marginLeft: isHovering ? '-25px' : '-16px',
          marginTop: isHovering ? '-25px' : '-16px',
          transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease',
          willChange: 'transform',
        }}
      >
        {/* Simplified outer ring */}
        <div
          className={`w-full h-full rounded-full border-2 transition-all duration-200 ${
            cursorVariant === 'contact'
              ? 'border-emerald-400 bg-emerald-400/10'
              : cursorVariant === 'social'
              ? 'border-blue-400 bg-blue-400/10'
              : cursorVariant === 'button'
              ? 'border-purple-400 bg-purple-400/10'
              : cursorVariant === 'link'
              ? 'border-indigo-400 bg-indigo-400/10'
              : 'border-gray-400 dark:border-gray-300 bg-gray-400/5 dark:bg-gray-300/5'
          } ${isHovering ? 'scale-100' : 'scale-75'}`}
          style={{
            backdropFilter: 'blur(4px)',
            transition: 'all 0.2s ease',
            willChange: 'transform, background, border-color',
          }}
        >
          {/* Simplified inner element */}
          <div
            className={`absolute inset-2 rounded-full transition-all duration-200 ${
              cursorVariant === 'contact'
                ? 'bg-emerald-400/15'
                : cursorVariant === 'social'
                ? 'bg-blue-400/15'
                : cursorVariant === 'button'
                ? 'bg-purple-400/15'
                : cursorVariant === 'link'
                ? 'bg-indigo-400/15'
                : 'bg-gray-400/8 dark:bg-gray-300/8'
            } ${isHovering ? 'opacity-100' : 'opacity-60'}`}
          />
          
          {/* Simplified center icon for different states */}
          {isHovering && (
            <div className="absolute inset-0 flex items-center justify-center">
              {cursorVariant === 'contact' && (
                <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {cursorVariant === 'social' && (
                <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
              {cursorVariant === 'button' && (
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
              )}
              {cursorVariant === 'link' && (
                <svg className="w-3 h-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </div>
          )}
        </div>
      </div>

    </>
  )

  // Render via portal to avoid clipping/containment issues
  return createPortal(cursorUI, document.body)
}

export default CustomCursor 