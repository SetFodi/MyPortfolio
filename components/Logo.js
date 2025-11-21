'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <Link href="/" className="fixed top-8 left-8 z-40 mix-blend-difference">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group flex flex-col"
      >
        <span className="text-xl font-bold tracking-tighter text-white group-hover:text-purple-400 transition-colors">LUKA</span>
        <span className="text-xl font-light tracking-widest text-white/80 group-hover:text-purple-400 transition-colors -mt-2">PARTENADZE</span>
      </motion.div>
    </Link>
  )
}

