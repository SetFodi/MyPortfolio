'use client'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { RainbowButton } from './ui/rainbow-button'

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/SetFodi', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/luka-partenadze-394675348/', icon: FaLinkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/fartenadzeluka/', icon: FaInstagram },
  ]

  return (
    <footer className="bg-transparent border-t dark:border-white/5 border-gray-200 pt-20 pb-8 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
            Let's work together.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            Creating digital experiences with a focus on design and performance.
          </p>
          <RainbowButton asChild className="h-12 px-8 rounded-full">
            <a href="mailto:lukafartenadze2004@gmail.com">
              lukafartenadze2004@gmail.com
            </a>
          </RainbowButton>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t dark:border-white/5 border-gray-200 gap-4">
          <p className="text-sm text-muted-foreground/60">
            © 2025 Luka Partenadze
          </p>

          <div className="flex gap-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                <link.icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
