'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/SetFodi', icon: <FaGithub /> },
    { name: 'LinkedIn', href: '#', icon: <FaLinkedin /> },
    { name: 'Twitter', href: '#', icon: <FaTwitter /> },
    { name: 'Email', href: 'mailto:hello@setfodi.com', icon: <FaEnvelope /> }
  ]

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-lg font-semibold text-white"
              whileHover={{ scale: 1.05 }}
            >
              SetFodi
            </motion.h3>
            <motion.p className="text-sm">
              Building digital solutions that make an impact.
            </motion.p>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <motion.h4 
              className="text-sm font-semibold text-white uppercase"
              whileHover={{ scale: 1.05 }}
            >
              Navigation
            </motion.h4>
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <Link key={index} href={link.path} legacyBehavior>
                  <a className="block text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <motion.h4 
              className="text-sm font-semibold text-white uppercase"
              whileHover={{ scale: 1.05 }}
            >
              Connect
            </motion.h4>
            <nav className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <motion.h4 
              className="text-sm font-semibold text-white uppercase"
              whileHover={{ scale: 1.05 }}
            >
              Legal
            </motion.h4>
            <nav className="space-y-2">
              {legalLinks.map((link, index) => (
                <Link key={index} href={link.path} legacyBehavior>
                  <a className="block text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-sm"
        >
          <p>&copy; {new Date().getFullYear()} SetFodi. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
