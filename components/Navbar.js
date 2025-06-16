'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'
import useMounted from '../hooks/useMounted'

// --- Enhanced Animation Variants ---
const navbarVariants = {
  visible: { 
    y: 0, 
    opacity: 1,
    backdropFilter: "blur(20px)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  hidden: { 
    y: '-100%', 
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
}

const navItemVariants = {
  hidden: { opacity: 0, y: -15, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
}

// Enhanced Mobile menu animation variants
const menuVariants = {
  closed: { 
    height: 0,
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1],
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  },
  open: { 
    height: "auto",
    opacity: 1,
    backdropFilter: "blur(20px)",
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

// Enhanced Mobile menu items animation
const menuItemVariants = {
  closed: { 
    opacity: 0, 
    y: -15,
    x: -10,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeInOut" } 
  },
  open: { 
    opacity: 1, 
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } 
  }
}

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

// --- Enhanced Logo Animation ---
const logoLetterVariants = {
  hover: (i) => ({
    y: [0, -12, 0],
    scale: [1, 1.3, 1],
    rotate: [0, i % 2 === 0 ? 15 : -15, 0],
    color: ["#4F46E5", "#8B5CF6", "#EC4899", "#F59E0B", "#4F46E5"],
    textShadow: [
      "0 0 0px rgba(139, 92, 246, 0)",
      "0 0 20px rgba(139, 92, 246, 0.6)",
      "0 0 0px rgba(139, 92, 246, 0)"
    ],
    transition: {
      y: {
        duration: 0.8,
        ease: "easeInOut",
        delay: i * 0.08
      },
      scale: {
        duration: 0.8,
        ease: "easeInOut",
        delay: i * 0.08
      },
      rotate: {
        duration: 0.8,
        ease: "easeInOut",
        delay: i * 0.08
      },
      color: {
        duration: 1.2,
        ease: "easeInOut",
        delay: i * 0.08
      },
      textShadow: {
        duration: 0.8,
        ease: "easeInOut",
        delay: i * 0.08
      }
    },
  }),
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const mounted = useMounted()
  const { scrollY } = useScroll()
  const pathname = usePathname()

  // --- Enhanced Hide Navbar on Scroll ---
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0

    // Update scroll progress for scroll indicators
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    setScrollProgress(Math.min(latest / documentHeight, 1))

    // Enhanced hide/show logic with smoother transitions
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else if (latest < previous || latest <= 20) {
      setHidden(false)
    }

    // Close mobile menu on scroll
    if (isOpen && latest > 50) {
      setIsOpen(false)
    }
  })

  // --- Dark Mode Handling ---
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialMode = storedMode !== null ? storedMode === 'true' : prefersDark
    setDarkMode(initialMode)

    if (initialMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev
      if (newMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('darkMode', 'true')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('darkMode', 'false')
      }
      return newMode
    })
  }

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!mounted) {
    return <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 opacity-0" aria-hidden="true"></nav>;
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  // Logo text for letter animation
  const logoText = "Luka";

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        animate={hidden ? 'hidden' : 'visible'}
        initial="visible"
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced background elements with gradients and animations */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          />
          
          {/* Floating particles */}
          <motion.div
            className="absolute top-2 left-1/4 w-1 h-1 rounded-full bg-indigo-400/30 dark:bg-indigo-400/40"
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-2 right-1/3 w-0.5 h-0.5 rounded-full bg-purple-400/40 dark:bg-purple-400/50"
            animate={{
              y: [0, 6, 0],
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.8, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 left-3/4 w-0.5 h-0.5 rounded-full bg-pink-400/30 dark:bg-pink-400/40"
            animate={{
              y: [0, -5, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* Hover effect gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              x: isHovered ? '100%' : '-100%'
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Enhanced Logo with magnetic effect */}
            <motion.div
              className="flex items-center space-x-2 magnetic-element"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="group relative flex items-center space-x-2">
                {/* Animated Logo Icon */}
                <motion.div
                  className="relative p-2 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-indigo-200/30 dark:border-indigo-700/30"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)"
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <CodeBracketIcon className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 dark:text-indigo-400" />
                  
                  {/* Animated ring around icon */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-indigo-400/0 dark:border-indigo-400/0"
                    whileHover={{
                      borderColor: "rgba(99, 102, 241, 0.6)",
                      scale: 1.1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Enhanced Logo Text */}
                <motion.div
                  className="relative overflow-hidden"
                  whileHover="hover"
                >
                  <motion.span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent inline-flex">
                    {logoText.split('').map((letter, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={logoLetterVariants}
                        className="inline-block relative"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.span>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Enhanced */}
            <motion.div
              className="hidden md:flex items-center space-x-1"
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  href={item.path}
                  text={item.name}
                  isActive={pathname === item.path}
                  index={index}
                />
              ))}
            </motion.div>

            {/* Enhanced Action Buttons */}
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* Enhanced Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="group relative p-2 md:p-2.5 rounded-xl bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300/50 dark:hover:border-indigo-600/50 transition-all duration-300 magnetic-button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                  backgroundColor: darkMode ? "rgba(99, 102, 241, 0.1)" : "rgba(251, 191, 36, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                {/* Sun/Moon icons with enhanced animations */}
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <SunIcon className="w-4 h-4 md:w-5 md:h-5 text-amber-500 group-hover:text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <MoonIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 dark:from-indigo-400/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={darkMode ? {
                    boxShadow: [
                      "0 0 0px rgba(99, 102, 241, 0)",
                      "0 0 20px rgba(99, 102, 241, 0.3)",
                      "0 0 0px rgba(99, 102, 241, 0)"
                    ]
                  } : {
                    boxShadow: [
                      "0 0 0px rgba(251, 191, 36, 0)",
                      "0 0 20px rgba(251, 191, 36, 0.3)",
                      "0 0 0px rgba(251, 191, 36, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.button>

              {/* Enhanced Mobile Menu Toggle */}
              <motion.button
                onClick={toggleMenu}
                className="md:hidden group relative p-2 rounded-xl bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300/50 dark:hover:border-indigo-600/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XMarkIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Bars3Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
          style={{ width: `${scrollProgress * 100}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0.01 ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-16 md:top-20 left-0 right-0 z-30 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-2xl shadow-gray-900/10 dark:shadow-gray-900/30 overflow-hidden"
          >
            {/* Enhanced mobile menu background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-pink-950/30" />
            
            {/* Floating particles in mobile menu */}
            <motion.div
              className="absolute top-4 right-6 w-1 h-1 rounded-full bg-indigo-400/40"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-4 left-8 w-0.5 h-0.5 rounded-full bg-purple-400/50"
              animate={{
                y: [0, 8, 0],
                opacity: [0.5, 0.9, 0.5]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="container mx-auto px-4 py-6 relative z-10">
              <motion.nav className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    variants={menuItemVariants}
                    custom={index}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`group relative flex items-center px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
                        pathname === item.path
                          ? 'bg-gradient-to-r from-indigo-500/15 to-purple-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-200/30 dark:border-indigo-700/30'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100/80 hover:to-gray-200/80 dark:hover:from-gray-800/80 dark:hover:to-gray-700/80 hover:text-indigo-600 dark:hover:text-indigo-400'
                      } backdrop-blur-sm magnetic-button`}
                    >
                      {/* Item indicator */}
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-3 opacity-0 group-hover:opacity-100"
                        animate={pathname === item.path ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {item.name}
                      
                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: pathname === item.path ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ originX: 0 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Enhanced NavLink Component with magnetic effects
const NavLink = ({ href, text, isActive, index }) => (
  <motion.div
    variants={navItemVariants}
    custom={index}
    whileHover={{ y: -2 }}
    className="relative"
  >
    <Link
      href={href}
      className={`group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-sm magnetic-button ${
        isActive
          ? 'bg-gradient-to-r from-indigo-500/15 to-purple-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-200/30 dark:border-indigo-700/30 shadow-lg shadow-indigo-500/10'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100/80 hover:to-gray-200/80 dark:hover:from-gray-800/80 dark:hover:to-gray-700/80 hover:text-indigo-600 dark:hover:text-indigo-400 border border-transparent hover:border-gray-200/50 dark:hover:border-gray-700/50'
      }`}
    >
      {text}
      
      {/* Enhanced active indicator */}
      <motion.div
        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isActive ? 1 : 0, 
          scale: isActive ? 1 : 0,
        }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{
          boxShadow: "0 0 20px rgba(99, 102, 241, 0.2)"
        }}
      />
    </Link>
  </motion.div>
)
