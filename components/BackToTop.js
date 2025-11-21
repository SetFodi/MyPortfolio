'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion'
import Magnetic from './Magnetic'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Smooth progress for the ring
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Map scroll progress to stroke-dashoffset for the circle
  // Circle circumference = 2 * pi * r. For r=18, C ≈ 113
  const strokeDashoffset = useTransform(scrollProgress, [0, 1], [113, 0])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-50 mix-blend-difference"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:bg-purple-400 transition-colors duration-300 hover:scale-110"
          >
            {/* Progress Ring SVG */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 40 40">
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-black/10"
                />
                <motion.circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-black"
                  style={{ 
                    strokeDasharray: 113,
                    strokeDashoffset 
                  }}
                />
              </svg>

              {/* Arrow Icon */}
              <div className="relative z-10 overflow-hidden h-4 w-4 flex flex-col items-center">
                <FaArrowUp className="text-sm group-hover:-translate-y-full transition-transform duration-300" />
                <FaArrowUp className="text-sm absolute top-full group-hover:-translate-y-full transition-transform duration-300" />
              </div>
            </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

