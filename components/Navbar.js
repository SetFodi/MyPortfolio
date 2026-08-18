'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

function DockIcon({ mouseX, item, isActive }) {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <Link href={item.path}>
      <motion.div
        ref={ref}
        style={{ width }}
        className={`aspect-square rounded-full flex items-center justify-center relative group cursor-pointer ${isActive
          ? 'bg-brand text-[#07111d] shadow-lg shadow-brand/20'
          : 'bg-white/[0.07] text-white hover:bg-brand/15 hover:text-brand border border-white/10'
          }`}
      >
        <span className="text-xs font-medium uppercase tracking-wider absolute -top-10 bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          {item.name}
        </span>
        <item.icon className={`w-1/2 h-1/2 ${isActive ? 'text-[#07111d]' : 'text-current'}`} />

        {isActive && (
          <span className="absolute -bottom-2 w-1 h-1 rounded-full bg-brand"></span>
        )}
      </motion.div>
    </Link>
  )
}

import { FaHome, FaUser, FaLayerGroup, FaEnvelope, FaTag, FaFileAlt } from 'react-icons/fa'
import SkyToggle from '@/components/ui/sky-toggle'

export default function Navbar() {
  const mouseX = useMotionValue(Infinity)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'About', path: '/about', icon: FaUser },
    { name: 'Projects', path: '/projects', icon: FaLayerGroup },
    { name: 'CV', path: '/cv', icon: FaFileAlt },
    { name: 'Pricing', path: '/pricing', icon: FaTag },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ]

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 items-end gap-2 sm:gap-4 rounded-2xl bg-[#07111d]/70 px-2 sm:px-4 pb-3 border border-white/10 shadow-2xl shadow-black/25 backdrop-blur-2xl"
      >
        {navItems.map((item) => (
          <DockIcon
            key={item.path}
            mouseX={mouseX}
            item={item}
            isActive={pathname === item.path}
          />
        ))}

        {/* Theme Toggle - Separator */}
        <div className="hidden sm:block h-8 w-[1px] bg-white/10 mx-1 mb-4"></div>

        <div className="hidden sm:block mb-3 px-2">
          <SkyToggle />
        </div>
      </motion.div>
    </div>
  )
}
