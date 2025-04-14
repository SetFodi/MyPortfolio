// Footer.js (Enhanced)
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const staggerContainer = (stagger = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.2,
    },
  },
})

const itemFadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'circOut' } },
}

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/SetFodi', icon: FaGithub, color: 'hover:text-[#6e5494]' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/luka-partenadze-394675348/', icon: FaLinkedin, color: 'hover:text-[#0a66c2]' },
    { name: 'Instagram', href: 'https://www.instagram.com/fartenadzeluka/', icon: FaInstagram, color: 'hover:text-[#e1306c]' },
    { name: 'Email', href: 'mailto:lukafartenadze2004@gmail.com', icon: FaEnvelope, color: 'hover:text-[#ea4335]' },
  ]

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-white/90 to-white/50 dark:from-gray-900/95 dark:to-gray-900/80 backdrop-blur-md border-t border-gray-100/50 dark:border-gray-800/30">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemFadeIn} className="lg:col-span-2 space-y-4">
            <Link href="/" className="group relative inline-block">
              <motion.span 
                className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Luka.
                <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </motion.span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm">
              Crafting digital experiences with modern web technologies. Based in Tbilisi, Georgia.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemFadeIn} className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wider mb-2">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path}>
                  <motion.div
                    className="group relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                    <div className="absolute left-0 -bottom-0.5 h-px w-0 bg-purple-500 group-hover:w-full transition-all duration-300 ease-out"/>
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemFadeIn} className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wider mb-2">
              Connect
            </h4>
            <div className="flex space-x-5">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className={`text-2xl ${link.color} transition-colors relative`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="hover:drop-shadow-lg"/>
                  <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-10 transition-opacity bg-current"/>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemFadeIn} className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wider mb-2">
              Contact
            </h4>
            <div className="space-y-2">
              <motion.a
                href="mailto:lukafartenadze2004@gmail.com"
                className="inline-block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                whileHover={{ x: 3 }}
              >
                lukafartenadze2004@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-100 dark:border-gray-800/30 mt-12 pt-6 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Luka Partenadze. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}