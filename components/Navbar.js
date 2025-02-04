'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import useMounted from '../hooks/useMounted'

const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const mounted = useMounted()

  if (!mounted) return null

  // Toggle dark mode by adding or removing the `dark` class on the <html> element
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev
      if (newMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return newMode
    })
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="text-3xl font-extrabold text-gray-900 dark:text-gray-100"
            >
              SetFodi
            </motion.a>
          </Link>

          {/* Desktop Navigation and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.path} text={item.name} />
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile: Show dark mode toggle next to the mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 transition-colors"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <MobileNavLink
                key={item.name}
                href={item.path}
                text={item.name}
                setIsOpen={setIsOpen}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

const NavLink = ({ href, text }) => (
  <Link href={href} legacyBehavior>
    <motion.a
      whileHover={{ scale: 1.05 }}
      className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md relative group cursor-pointer"
    >
      {text}
      <motion.span
        initial={{ width: 0 }}
        whileHover={{ width: '80%' }}
        transition={{ duration: 0.3 }}
        className="absolute left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 bottom-0"
      />
    </motion.a>
  </Link>
)

const MobileNavLink = ({ href, text, setIsOpen }) => (
  <Link href={href} legacyBehavior>
    <motion.a
      onClick={() => setIsOpen(false)}
      className="block px-3 py-2 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
    >
      {text}
    </motion.a>
  </Link>
)

export default Navbar
