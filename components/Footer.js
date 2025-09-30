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
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-light tracking-wider text-white hover:text-white/80 transition-colors">
              LUKA
            </Link>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Full Stack Developer crafting elegant digital solutions with modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-light tracking-wider text-white mb-4">NAVIGATION</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-sm text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-light tracking-wider text-white mb-4">CONNECT</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white/40 hover:text-white transition-colors group"
                >
                  <social.icon className="w-4 h-4 mr-3" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-white/30">
            © 2024 Luka Partenadze. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Tbilisi, Georgia
          </p>
        </div>
      </div>
    </footer>
  )
}