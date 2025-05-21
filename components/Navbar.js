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

// --- Animation Variants ---
const navbarVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: '-100%', opacity: 0 },
}

const navItemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0 },
}

const mobileMenuVariants = {
  closed: { opacity: 0, scaleY: 0.95, transition: { duration: 0.2 } },
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
}

const mobileNavItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 },
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

// --- Fancy Hover Animation for Logo ---
const logoLetterVariants = {
  hover: (i) => ({
    y: [0, -8, 0],
    scale: [1, 1.2, 1],
    rotate: [0, i % 2 === 0 ? 10 : -10, 0],
    color: ["#4F46E5", "#8B5CF6", "#EC4899", "#4F46E5"],
    transition: {
      y: {
        duration: 0.6,
        ease: "easeInOut",
        delay: i * 0.05
      },
      scale: {
        duration: 0.6,
        ease: "easeInOut",
        delay: i * 0.05
      },
      rotate: {
        duration: 0.6,
        ease: "easeInOut",
        delay: i * 0.05
      },
      color: {
        duration: 0.8,
        ease: "easeInOut",
        delay: i * 0.05
      }
    },
  }),
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const mounted = useMounted()
  const { scrollY } = useScroll()
  const pathname = usePathname()

  // --- Hide Navbar on Scroll ---
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0

    // Update scroll progress for potential scroll indicators
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    setScrollProgress(Math.min(latest / documentHeight, 1))

    // Hide only if scrolling down significantly and not at the very top
    if (latest > previous && latest > 100) {
      setHidden(true)
    } else if (latest < previous || latest <= 10) {
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
        transition={{ duration: 0.35, ease: [0.1, 0.25, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/85 backdrop-blur-xl border-b border-gray-200/70 dark:border-gray-800/70 shadow-sm overflow-hidden`}
      >
        {/* Fun background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -right-10 top-0 w-32 h-32 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-10 top-5 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Enhanced Logo with Letter Animation */}
            <Link href="/" passHref legacyBehavior>
              <motion.a
                className="text-2xl md:text-3xl font-bold cursor-pointer tracking-tight flex items-center"
                whileHover="hover"
              >
                <span className="flex overflow-hidden">
                  {logoText.split('').map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={logoLetterVariants}
                      className="inline-block text-gray-900 dark:text-gray-100"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
                <motion.span
                  className="relative text-transparent"
                  whileHover={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 10, 0, -10, 0],
                    transition: { duration: 0.7 }
                  }}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180],
                        borderRadius: ["50%", "30%", "50%"]
                      }}
                      transition={{
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </span>
                  .
                </motion.span>
              </motion.a>
            </Link>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-1 lg:space-x-2"
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.path}
                  text={item.name}
                  isActive={pathname === item.path}
                />
              ))}
            </motion.div>

            {/* Right side controls */}
            <div className="flex items-center space-x-3 md:space-x-4">
              {/* Developer icon with tooltip - new addition */}
              <motion.div className="relative hidden sm:block">
                <motion.a
                  href="https://github.com/SetFodi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-colors duration-200 flex items-center justify-center"
                  aria-label="View GitHub profile"
                >
                  <CodeBracketIcon className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    GitHub
                  </span>
                </motion.a>
              </motion.div>

              {/* Dark Mode Toggle - Enhanced */}
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1, rotate: darkMode ? -20 : 20 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-colors duration-200 relative"
                aria-label={darkMode ? 'Activate light mode' : 'Activate dark mode'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={darkMode ? 'moon' : 'sun'}
                    initial={{ y: -10, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.25 }}
                  >
                    {darkMode ? (
                      <SunIcon className="h-5 w-5 md:h-6 md:w-6" />
                    ) : (
                      <MoonIcon className="h-5 w-5 md:h-6 md:w-6" />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Subtle ripple effect on toggle */}
                <AnimatePresence>
                  {darkMode && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={{ scale: 2, opacity: 0 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 m-auto w-full h-full rounded-full bg-yellow-300 dark:bg-indigo-500"
                    />
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button - Enhanced */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-700/70 focus:outline-none transition-colors duration-200 relative z-50"
                  aria-label="Toggle mobile menu"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={isOpen ? 'close' : 'open'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {isOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                      ) : (
                        <Bars3Icon className="h-6 w-6" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - Enhanced with gradient border */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/90 backdrop-blur-xl shadow-lg border-t border-gray-200/70 dark:border-gray-800/70 overflow-hidden origin-top z-50"
              style={{
                backgroundImage: darkMode
                  ? 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.95))'
                  : 'linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.98))'
              }}
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navItems.map((item) => (
                  <MobileNavLink
                    key={item.name}
                    href={item.path}
                    text={item.name}
                    isActive={pathname === item.path}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
                {/* Extra GitHub link in mobile menu */}
                <motion.a
                  href="https://github.com/SetFodi"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={mobileNavItemVariants}
                  className="flex items-center gap-2 px-3 py-3 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{
            scaleX: scrollProgress,
            width: '100%',
            originX: 0,
            opacity: scrollProgress > 0 ? 1 : 0
          }}
        />
      </motion.nav>
      {/* Fun floating elements in the navbar */}
      <div className="hidden md:block">
        <div className="fixed top-3 right-[20%] w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-20 dark:opacity-30 blur-sm animate-float animation-delay-2000"></div>
        <div className="fixed top-5 left-[30%] w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 dark:opacity-30 blur-sm animate-float"></div>
        <div className="fixed top-12 right-[40%] w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-20 dark:opacity-30 blur-sm animate-float animation-delay-4000"></div>
      </div>
    </>
  )
}

// Enhanced Desktop NavLink Component with fun animations
const NavLink = ({ href, text, isActive }) => (
  <Link href={href} passHref legacyBehavior>
    <motion.a
      variants={navItemVariants}
      className={`relative text-sm lg:text-base font-medium px-3 lg:px-4 py-2 rounded-md transition-colors duration-200 group overflow-hidden
        ${
          isActive
            ? 'text-gray-900 dark:text-white'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      whileHover="hover"
    >
      {/* Text with letter animation on hover */}
      <motion.span className="relative z-10 flex">
        {text.split('').map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              hover: {
                y: [0, -5, 0],
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: i * 0.03,
                  repeat: 0
                }
              }
            }}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>

      {/* Fun hover effect for non-active items */}
      {!isActive && (
        <>
          <motion.span
            className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full rounded-full"
            initial={{ scaleX: 0 }}
            variants={{
              hover: {
                scaleX: 1,
                transition: { duration: 0.3, ease: 'easeOut' }
              }
            }}
            style={{ originX: 0 }}
          />
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-md"
            initial={{ opacity: 0 }}
            variants={{
              hover: {
                opacity: 1,
                transition: { duration: 0.3 }
              }
            }}
          />
        </>
      )}

      {/* Enhanced active indicator with gradient and animation */}
      {isActive && (
        <>
          <motion.div
            layoutId="active-nav-indicator"
            className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full rounded-full"
            initial={false}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-md"
            layoutId="active-nav-background"
            initial={false}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          />
          <motion.div
            className="absolute -right-1 top-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-70"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}
    </motion.a>
  </Link>
)

// Enhanced Mobile NavLink Component with fun animations
const MobileNavLink = ({ href, text, isActive, onClick }) => (
  <Link href={href} passHref legacyBehavior>
    <motion.a
      variants={mobileNavItemVariants}
      onClick={onClick}
      whileHover={{ x: 5 }}
      className={`block px-3 py-3 text-base font-medium rounded-md transition-all duration-200 relative overflow-hidden
        ${
          isActive
            ? 'text-purple-600 dark:text-purple-400 bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/30 dark:to-transparent'
            : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/50'
        }`}
    >
      {/* Background sparkle effect for active items */}
      {isActive && (
        <>
          <motion.div
            className="absolute top-1 right-4 w-1.5 h-1.5 rounded-full bg-purple-400/70"
            animate={{
              y: [0, -8, 0],
              opacity: [0.7, 0, 0.7],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1 right-8 w-1 h-1 rounded-full bg-indigo-400/70"
            animate={{
              y: [0, 5, 0],
              opacity: [0.7, 0, 0.7],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </>
      )}

      <span className="flex items-center relative z-10">
        {isActive && (
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            className="mr-2 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
          />
        )}

        {/* Text with subtle animation */}
        <motion.span
          initial={false}
          animate={isActive ? {
            color: ["#9333EA", "#6366F1", "#9333EA"],
            transition: { duration: 3, repeat: Infinity }
          } : {}}
        >
          {text}
        </motion.span>
      </span>

      {/* Bottom border animation on hover for non-active items */}
      {!isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-gray-400/50 to-transparent dark:via-gray-500/30 w-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.a>
  </Link>
)
