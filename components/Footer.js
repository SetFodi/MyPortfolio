'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Magnetic from './Magnetic'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0])

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/SetFodi', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/luka-partenadze-394675348/', icon: FaLinkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/fartenadzeluka/', icon: FaInstagram },
    { name: 'Email', href: 'mailto:lukafartenadze2004@gmail.com', icon: FaEnvelope },
  ]

  return (
    <div 
      className="relative h-[600px]" 
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      ref={container}
    >
      <div className="fixed bottom-0 h-[600px] w-full">
        <div className="h-full bg-[#0f0f0f] flex flex-col justify-between p-12 lg:p-24 text-white border-t border-white/10">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
               <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-sm text-white/50 uppercase tracking-widest">Available for work</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">LET'S WORK</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">TOGETHER</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((link, i) => (
                <Magnetic key={i}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 rounded-full border border-white/10 hover:bg-white text-white hover:text-black transition-all duration-300"
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                </Magnetic>
              ))}
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="text-white/40 text-sm">© 2025 Luka Partenadze</p>
              <p className="text-white/40 text-sm">Developed with Next.js & Framer Motion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
