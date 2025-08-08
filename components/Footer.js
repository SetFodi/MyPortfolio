// Footer.js (Enhanced with Next-Level Visuals)
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart, FaCode, FaRocket } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const fadeIn = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
}

const staggerContainer = (stagger = 0.15) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.3,
    },
  },
})

const itemFadeIn = {
  hidden: { opacity: 0, y: 20, x: -10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
}

// Enhanced floating particles animation
const particleVariants = {
  animate: (i) => ({
    x: [0, Math.random() * 40 - 20, 0],
    y: [0, Math.random() * -50 - 20, 0],
    scale: [1, 1.2 + Math.random() * 0.5, 1],
    opacity: [0.3, 0.8, 0.3],
    rotate: [0, Math.random() * 360, 360],
    transition: {
      duration: 4 + Math.random() * 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.3,
    }
  })
}

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/SetFodi', 
      icon: FaGithub, 
      color: 'hover:text-[#6e5494]',
      bgColor: 'hover:bg-[#6e5494]/10',
      shadowColor: 'hover:shadow-[#6e5494]/30'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/luka-partenadze-394675348/', 
      icon: FaLinkedin, 
      color: 'hover:text-[#0a66c2]',
      bgColor: 'hover:bg-[#0a66c2]/10',
      shadowColor: 'hover:shadow-[#0a66c2]/30'
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/fartenadzeluka/', 
      icon: FaInstagram, 
      color: 'hover:text-[#e1306c]',
      bgColor: 'hover:bg-[#e1306c]/10',
      shadowColor: 'hover:shadow-[#e1306c]/30'
    },
    { 
      name: 'Email', 
      href: 'mailto:lukafartenadze2004@gmail.com', 
      icon: FaEnvelope, 
      color: 'hover:text-[#ea4335]',
      bgColor: 'hover:bg-[#ea4335]/10',
      shadowColor: 'hover:shadow-[#ea4335]/30'
    },
  ]

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'
  ]

  return (
    <footer className="relative bg-gradient-to-br from-white via-indigo-50/60 to-purple-50/40 dark:from-gray-950 dark:via-indigo-950/80 dark:to-purple-950/60 border-t border-gray-200/40 dark:border-gray-800/40 overflow-hidden">
      {/* Enhanced background with multiple gradient layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 via-purple-100/15 to-pink-100/20 dark:from-indigo-900/15 dark:via-purple-900/10 dark:to-pink-900/15"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '400% 400%'
          }}
        />

        {/* Subtle gradient shapes (reduced motion and count) */}
        <div className="absolute -top-20 -right-32 w-64 h-64 bg-gradient-to-br from-indigo-300/15 to-purple-400/15 dark:from-indigo-600/10 dark:to-purple-700/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-32 w-72 h-72 bg-gradient-to-br from-blue-300/10 to-cyan-400/10 dark:from-blue-600/8 dark:to-cyan-700/8 rounded-full blur-3xl" />

        {/* Fewer subtle dots */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-indigo-400/30' : 
              i % 3 === 1 ? 'bg-purple-400/30' : 'bg-pink-400/30'
            } dark:opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Static divider accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Enhanced Brand Section */}
          <motion.div variants={itemFadeIn} className="lg:col-span-5 space-y-6">
            <Link href="/" className="group relative inline-block">
              <motion.div
                className="relative"
                whileHover="hover"
              >
                {/* Enhanced animated logo text */}
                <motion.span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent inline-flex items-center">
                  {/* Animated letters with enhanced effects */}
                  {"Luka".split('').map((letter, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hover: {
                          y: [0, -12, 0],
                          color: i % 2 === 0 ? "#8B5CF6" : "#EC4899",
                          textShadow: [
                            "0 0 0px rgba(139, 92, 246, 0)",
                            "0 0 20px rgba(139, 92, 246, 0.8)",
                            "0 0 0px rgba(139, 92, 246, 0)"
                          ],
                          transition: {
                            y: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
                            color: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
                            textShadow: { duration: 0.6, ease: "easeOut", delay: i * 0.08 }
                          }
                        }
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}

                  {/* Enhanced animated dot with multiple effects */}
                  <motion.span
                    className="relative inline-block ml-1"
                    variants={{
                      hover: {
                        rotate: [0, 360, 720],
                        scale: [1, 1.5, 1],
                        transition: { duration: 1, ease: "easeInOut" }
                      }
                    }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full blur-sm"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.7, 1, 0.7],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="relative z-10">.</span>
                  </motion.span>
                </motion.span>

                {/* Enhanced animated underline with gradient */}
                <motion.div
                  className="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0, opacity: 0 }}
                  variants={{
                    hover: {
                      scaleX: 1,
                      opacity: 1,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }
                  }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </Link>

            {/* Enhanced description with animated typing effect */}
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.2
                  }
                }
              }}
            >
              Crafting digital experiences with modern web technologies. 
              <motion.span
                className="inline-block ml-2 w-0.5 h-5 bg-indigo-500 animate-pulse"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.p>

            {/* Enhanced tech stack badges */}
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.4,
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-indigo-100/80 to-purple-100/80 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200/50 dark:border-indigo-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-200 cursor-default"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 4px 15px rgba(99, 102, 241, 0.2)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Navigation Section */}
          <motion.div variants={itemFadeIn} className="lg:col-span-3 space-y-6">
            <motion.h4
              className="text-lg font-bold text-gray-800 dark:text-gray-100 relative inline-flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaRocket className="w-5 h-5 mr-2 text-indigo-500" />
              Navigation
              <motion.div
                className="absolute -right-4 -top-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"
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
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: i * 0.1 }
                    }
                  }}
                >
                  <Link
                    href={link.path}
                    className="group relative flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 magnetic-button"
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-3 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ originX: 0 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Enhanced Connect Section */}
          <motion.div variants={itemFadeIn} className="lg:col-span-4 space-y-6">
            <motion.h4
              className="text-lg font-bold text-gray-800 dark:text-gray-100 relative inline-flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaCode className="w-5 h-5 mr-2 text-purple-500" />
              Let's Connect
              <motion.div
                className="absolute -right-4 -top-2 w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.h4>

            {/* Enhanced social links grid */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {socialLinks.map((social, i) => (
                <motion.div
                  key={social.name}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: { delay: i * 0.1 }
                    }
                  }}
                >
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center p-4 rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 ${social.bgColor} ${social.shadowColor} transition-all duration-300 magnetic-button overflow-hidden`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Enhanced icon with glow effect */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <social.icon className={`w-6 h-6 text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300 relative z-10`} />
                      
                      {/* Animated glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-indigo-400/0 group-hover:border-indigo-400/60"
                        animate={{
                          borderColor: ["rgba(99, 102, 241, 0)", "rgba(99, 102, 241, 0.6)", "rgba(99, 102, 241, 0)"]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                    
                    <div className="ml-3 relative z-10">
                      <p className={`font-medium text-gray-700 dark:text-gray-300 ${social.color} transition-colors duration-300`}>
                        {social.name}
                      </p>
                    </div>

                    {/* Hover arrow indicator */}
                    <motion.div
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      <div className="w-4 h-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <svg className="w-2 h-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced bottom section with animated divider */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 relative"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.8 }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Animated border line */}
          <motion.div
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent w-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Enhanced copyright with animated elements */}
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-sm flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <span>© 2024 Luka Partenadze. Made with</span>
              <motion.span
                className="mx-2"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart className="w-4 h-4 text-red-500" />
              </motion.span>
              <span>in Tbilisi, Georgia</span>
            </motion.p>

            {/* Enhanced "Built with" badges */}
            <motion.div 
              className="flex items-center space-x-3"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <span className="text-sm text-gray-500 dark:text-gray-500">Built with:</span>
              {['Next.js', 'Tailwind', 'Framer'].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-700/80 text-gray-600 dark:text-gray-400 rounded-md border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-200 cursor-default"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced scroll-to-top indicator */}
      <motion.div
        className="absolute top-4 right-4 opacity-30"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-1 h-8 bg-gradient-to-t from-indigo-500 to-transparent rounded-full" />
      </motion.div>
    </footer>
  )
}