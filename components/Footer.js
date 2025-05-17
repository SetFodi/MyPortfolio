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
    <footer className="relative bg-gradient-to-b from-white/90 to-white/50 dark:from-gray-900/95 dark:to-gray-900/80 backdrop-blur-md border-t border-gray-100/50 dark:border-gray-800/30 overflow-hidden">
      {/* Fun background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-20 bottom-0 w-64 h-64 bg-gradient-to-br from-indigo-200/10 to-purple-200/10 dark:from-indigo-900/5 dark:to-purple-900/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-10 w-48 h-48 bg-gradient-to-br from-blue-200/10 to-cyan-200/10 dark:from-blue-900/5 dark:to-cyan-900/5 rounded-full blur-3xl"></div>

        {/* Animated particles */}
        <motion.div
          className="absolute top-10 right-1/4 w-2 h-2 rounded-full bg-indigo-400/30 dark:bg-indigo-400/20"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-1.5 h-1.5 rounded-full bg-purple-400/30 dark:bg-purple-400/20"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full bg-blue-400/30 dark:bg-blue-400/20"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Brand Section with Fun Logo */}
          <motion.div variants={itemFadeIn} className="lg:col-span-2 space-y-4">
            <Link href="/" className="group relative inline-block">
              <motion.div
                className="relative"
                whileHover="hover"
              >
                {/* Animated logo text */}
                <motion.span className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent inline-flex">
                  {/* Animated letters */}
                  {"Luka".split('').map((letter, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hover: {
                          y: [0, -7, 0],
                          color: i % 2 === 0 ? "#9333EA" : "#3B82F6",
                          transition: {
                            y: { duration: 0.5, ease: "easeOut", delay: i * 0.05 },
                            color: { duration: 0.5, ease: "easeOut", delay: i * 0.05 }
                          }
                        }
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}

                  {/* Animated dot with fun effects */}
                  <motion.span
                    className="relative inline-block ml-0.5"
                    variants={{
                      hover: {
                        rotate: [0, 360],
                        scale: [1, 1.3, 1],
                        transition: { duration: 0.7, ease: "easeInOut" }
                      }
                    }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full blur-[1px]"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="relative z-10">.</span>
                  </motion.span>
                </motion.span>

                {/* Animated underline */}
                <motion.div
                  className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  variants={{
                    hover: {
                      scaleX: 1,
                      opacity: 1,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }
                  }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm">
              Crafting digital experiences with modern web technologies. Based in Tbilisi, Georgia.
            </p>
          </motion.div>

          {/* Navigation Links with Fun Animations */}
          <motion.div variants={itemFadeIn} className="space-y-4">
            <motion.h4
              className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wider mb-2 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Navigation
              <motion.div
                className="absolute -right-3 -top-1 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-70"
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
            </motion.h4>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <Link key={link.name} href={link.path}>
                  <motion.div
                    className="group relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors overflow-hidden"
                    whileHover="hover"
                  >
                    {/* Text with letter animation */}
                    <motion.span className="relative z-10 inline-flex">
                      {link.name.split('').map((letter, i) => (
                        <motion.span
                          key={i}
                          variants={{
                            hover: {
                              y: [0, -3, 0],
                              transition: {
                                duration: 0.3,
                                ease: "easeInOut",
                                delay: i * 0.03,
                              }
                            }
                          }}
                          className="inline-block"
                        >
                          {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                      ))}
                    </motion.span>

                    {/* Animated underline with gradient */}
                    <motion.div
                      className="absolute left-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      variants={{
                        hover: {
                          scaleX: 1,
                          transition: { duration: 0.3, ease: "easeOut" }
                        }
                      }}
                      style={{ originX: 0 }}
                    />

                    {/* Subtle background glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded"
                      initial={{ opacity: 0 }}
                      variants={{
                        hover: {
                          opacity: 1,
                          x: 5,
                          transition: { duration: 0.3 }
                        }
                      }}
                    />
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social Links with Fun Animations */}
          <motion.div variants={itemFadeIn} className="space-y-4">
            <motion.h4
              className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wider mb-2 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Connect
              <motion.div
                className="absolute -right-3 -top-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-70"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.h4>
            <div className="flex space-x-5">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className={`text-2xl ${link.color} transition-colors relative`}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3 + (i * 0.1) }
                  }}
                >
                  {/* Icon with glow effect */}
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-current rounded-full blur-[3px] opacity-0"
                      whileHover={{ opacity: 0.3, scale: 1.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <link.icon className="relative z-10 drop-shadow-lg"/>
                  </div>

                  {/* Animated ring on hover */}
                  <motion.div
                    className="absolute -inset-1 rounded-full border border-current opacity-0"
                    whileHover={{
                      opacity: 0.5,
                      scale: [1, 1.3, 1.2],
                      transition: { duration: 1, repeat: Infinity }
                    }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info with Fun Animations */}
          <motion.div variants={itemFadeIn} className="space-y-4">
            <motion.h4
              className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wider mb-2 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Contact
              <motion.div
                className="absolute -right-3 -top-1 w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-red-400 opacity-70"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0.3, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.h4>
            <div className="space-y-2">
              <motion.a
                href="mailto:lukafartenadze2004@gmail.com"
                className="inline-block text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative group"
                whileHover="hover"
              >
                {/* Email with letter animation */}
                <motion.span className="relative z-10 inline-flex">
                  {"lukafartenadze2004@gmail.com".split('').map((letter, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hover: {
                          y: [0, letter === '@' ? -5 : -2, 0],
                          color: letter === '@' ? "#9333EA" : undefined,
                          transition: {
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: i * 0.01,
                          }
                        }
                      }}
                      className={`inline-block ${letter === '@' ? 'text-purple-500 dark:text-purple-400' : ''}`}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>

                {/* Animated underline */}
                <motion.div
                  className="absolute left-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  variants={{
                    hover: {
                      scaleX: 1,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }
                  }}
                  style={{ originX: 0 }}
                />

                {/* Email icon that appears on hover */}
                <motion.div
                  className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-purple-500 dark:text-purple-400 opacity-0"
                  variants={{
                    hover: {
                      opacity: 1,
                      x: [-5, 0],
                      transition: { duration: 0.3 }
                    }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright with Fun Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="border-t border-gray-100 dark:border-gray-800/30 mt-12 pt-6 text-center relative"
        >
          {/* Animated particles */}
          <motion.div
            className="absolute left-1/4 -top-3 w-1 h-1 rounded-full bg-purple-400/50 dark:bg-purple-400/30"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 0, 0.5],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute right-1/3 -top-2 w-1 h-1 rounded-full bg-blue-400/50 dark:bg-blue-400/30"
            animate={{
              y: [0, -8, 0],
              opacity: [0.5, 0, 0.5],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          <motion.p
            className="text-sm text-gray-500 dark:text-gray-500"
            whileHover={{
              color: ["#6B7280", "#9333EA", "#6B7280"],
              transition: { duration: 1.5 }
            }}
          >
            &copy; {new Date().getFullYear()} Luka Partenadze. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}