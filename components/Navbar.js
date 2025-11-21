'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Magnetic from './Magnetic'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} onClick={() => setActiveTab(item.path)}>
            <div className="relative px-5 py-2.5 rounded-full group cursor-pointer transition-colors">
              {activeTab === item.path && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${activeTab === item.path ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                {item.name}
              </span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"></span>
            </div>
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}
