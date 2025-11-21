'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function SpotlightButton({ children, onClick, className = "", type = "button", disabled = false }) {
  const divRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setOpacity(1)
  }

  const handleBlur = () => {
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <button
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`relative overflow-hidden rounded-full bg-white/5 px-8 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/20 active:scale-[0.98] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 rounded-full border border-white/10" />
    </button>
  )
}

