'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [count, setCount] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const duration = 2000 // 2 seconds loading
    const interval = 20
    const steps = duration / interval
    
    let current = 0
    const timer = setInterval(() => {
      current++
      const progress = Math.min(Math.round((current / steps) * 100), 100)
      setCount(progress)
      
      if (current >= steps) {
        clearInterval(timer)
        setTimeout(() => setComplete(true), 500)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {!complete && (
        <motion.div
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#141414] text-white"
        >
          <div className="flex flex-col items-center">
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-9xl font-bold font-mono"
            >
              {count}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

