import { useEffect, useState, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')
  
  const mouse = useRef({ x: 0, y: 0 })
  const delayedMouse = useRef({ x: 0, y: 0 })
  const rafId = useRef()

  // Smooth animation loop using requestAnimationFrame
  const animateCursor = () => {
    const delay = 0.15 // Smooth follow delay
    
    delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * delay
    delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * delay
    
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${delayedMouse.current.x}px, ${delayedMouse.current.y}px, 0)`
    }
    
    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`
    }
    
    rafId.current = requestAnimationFrame(animateCursor)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      
      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Enhanced hover detection for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = target.matches('a, button, [role="button"], input, textarea, select, .magnetic-button, .cursor-pointer, [data-cursor]')
      
      if (isInteractive) {
        setIsHovering(true)
        
        // Set cursor variant based on element type
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
        setIsHovering(false)
        setCursorVariant('default')
      }
    }

    // Start animation loop
    rafId.current = requestAnimationFrame(animateCursor)

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      // Cleanup
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isVisible])

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          marginLeft: isHovering ? '-30px' : '-20px',
          marginTop: isHovering ? '-30px' : '-20px',
          transition: 'width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), margin 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Outer ring with gradient */}
        <div
          className={`w-full h-full rounded-full border-2 transition-all duration-300 ${
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
            backdropFilter: 'blur(8px)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {/* Inner glow effect */}
          <div
            className={`absolute inset-1 rounded-full transition-all duration-300 ${
              cursorVariant === 'contact'
                ? 'bg-gradient-to-br from-emerald-400/20 to-emerald-600/20'
                : cursorVariant === 'social'
                ? 'bg-gradient-to-br from-blue-400/20 to-blue-600/20'
                : cursorVariant === 'button'
                ? 'bg-gradient-to-br from-purple-400/20 to-purple-600/20'
                : cursorVariant === 'link'
                ? 'bg-gradient-to-br from-indigo-400/20 to-indigo-600/20'
                : 'bg-gradient-to-br from-gray-400/10 to-gray-600/10 dark:from-gray-300/10 dark:to-gray-100/10'
            } ${isHovering ? 'opacity-100' : 'opacity-60'}`}
          />
          
          {/* Center icon for different states */}
          {isHovering && (
            <div className="absolute inset-0 flex items-center justify-center">
              {cursorVariant === 'contact' && (
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {cursorVariant === 'social' && (
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
              {cursorVariant === 'button' && (
                <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
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

      {/* Instant follow dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[10000] w-2 h-2 -ml-1 -mt-1 rounded-full transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorVariant === 'contact'
            ? 'bg-emerald-500'
            : cursorVariant === 'social'
            ? 'bg-blue-500'
            : cursorVariant === 'button'
            ? 'bg-purple-500'
            : cursorVariant === 'link'
            ? 'bg-indigo-500'
            : 'bg-gray-600 dark:bg-gray-300'
        }`}
        style={{
          transition: 'background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />


    </>
  )
}

export default CustomCursor 