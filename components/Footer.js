'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/SetFodi', icon: <FaGithub /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/luka-partenadze-394675348/', icon: <FaLinkedin /> },
    { name: 'Instagram', href: 'https://www.instagram.com/fartenadzeluka/', icon: <FaInstagram /> },
    { name: 'Email', href: 'mailto:lukafartenadze2004@gmail.com', icon: <FaEnvelope /> }
  ]

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Brand Section */}
          <div className="space-y-2">
            <motion.h3
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
             Luka Partenadze 
            </motion.h3>
            <motion.p
              className="text-sm text-gray-300"
              whileHover={{ scale: 1.02 }}
            >
              Crafting digital solutions that make an impact.
            </motion.p>
          </div>

          {/* Navigation Section */}
          <div className="space-y-2">
            <motion.h4
              className="text-sm font-semibold text-white uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              Navigation
            </motion.h4>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <Link key={index} href={link.path} legacyBehavior>
                  <a className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-2">
            <motion.h4
              className="text-sm font-semibold text-white uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              Connect
            </motion.h4>
            <nav className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="text-2xl transition-colors hover:text-white"
                >
                  {link.icon}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Luka Partenadze. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
