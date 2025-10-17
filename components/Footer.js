'use client'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/SetFodi', 
      icon: FaGithub
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/luka-partenadze-394675348/', 
      icon: FaLinkedin
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/fartenadzeluka/', 
      icon: FaInstagram
    },
    { 
      name: 'Email', 
      href: 'mailto:lukafartenadze2004@gmail.com', 
      icon: FaEnvelope
    },
  ]

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-light tracking-wider gradient-text hover:scale-105 inline-block transition-transform duration-300">
              LUKA
            </Link>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Full Stack Developer crafting elegant digital solutions with modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white mb-4">NAVIGATION</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-sm text-white/40 hover:text-purple-400 transition-all duration-300 hover:translate-x-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium tracking-wider text-white mb-4">CONNECT</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white/40 hover:text-purple-400 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-white/30">
            © 2025 Luka Partenadze. All rights reserved.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            Tbilisi, Georgia
          </p>
        </div>
      </div>
    </footer>
  )
}