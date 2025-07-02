'use client'
import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import ParticleBackground from '../components/ParticleBackground'
import ScrollAnimations from '../components/ScrollAnimations'
import { skillData, projects } from '../data/homeData'

export default function Home() {
  // For intersection observers
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  // For typewriter effect
  const [text, setText] = useState('Full Stack Developer')
  const [index, setIndex] = useState(0)
  const phrases = [
    'Full Stack Developer',
    'React Specialist',
    'Next.js Expert',
    'UI/UX Enthusiast'
  ]

  // Check for reduced motion and mobile
  const [isReduced, setIsReduced] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReduced(mediaQuery.matches)
    
    // Check mobile
    setIsMobile(window.innerWidth < 768)
    
    const handleChange = (e) => setIsReduced(e.matches)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    
    mediaQuery.addEventListener('change', handleChange)
    window.addEventListener('resize', handleResize)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    // Simplified typewriter effect with longer intervals for better performance
    if (isReduced) return // Skip animation if reduced motion
    
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
      setText(phrases[(index + 1) % phrases.length])
    }, 4000) // Increased interval
    return () => clearInterval(interval)
  }, [index, isReduced])

  // For dark mode - remove forced light mode and sync with navbar
  useEffect(() => {
    // Sync with stored theme preference instead of forcing light mode
    const storedMode = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = storedMode !== null ? storedMode === 'true' : prefersDark
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Simplified animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' } // Reduced duration
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const { scrollYProgress } = useScroll()
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -30]) // Reduced transform

  return (
    <ScrollAnimations>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden transition-colors duration-500">
        <Head>
          <title>Luka Partenadze | Full Stack Developer</title>
          <meta name="description" content="Portfolio of Luka Partenadze, a passionate Full Stack Developer specializing in modern web technologies." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <CustomCursor />
        <ParticleBackground density={isMobile ? 5 : 12} interactive={false} />
        
        {/* Simplified Scroll Progress Bar */}
        {!isReduced && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-50 transform origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        )}

        <Navbar />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden"
        >
          {/* Simplified Background */}
          <div className="absolute inset-0 z-0">
            {/* Static gradient base for mobile, animated for desktop */}
            {!isReduced && !isMobile ? (
              <motion.div 
                className="absolute inset-0"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(238, 242, 255, 0.6) 0%, rgba(237, 233, 254, 0.6) 50%, rgba(251, 242, 249, 0.6) 100%)",
                    "linear-gradient(135deg, rgba(251, 242, 249, 0.6) 0%, rgba(255, 247, 237, 0.6) 50%, rgba(238, 242, 255, 0.6) 100%)",
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-indigo-100/60 dark:from-gray-800/60 dark:to-gray-900/60" />
            )}
            
            {/* Dark mode overlay */}
            <div className="absolute inset-0 bg-gray-900/20 dark:bg-gray-900/60 transition-colors duration-500" />

            {/* Simplified gradient blobs - fewer and less intensive */}
            {!isReduced && !isMobile && (
              <>
                <motion.div 
                  className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 dark:from-indigo-500/15 dark:to-purple-600/15 rounded-full blur-3xl"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-400/20 to-indigo-500/20 dark:from-pink-500/15 dark:to-indigo-600/15 rounded-full blur-3xl"
                  animate={{
                    x: [0, -20, 0],
                    y: [0, 15, 0],
                    scale: [1, 0.9, 1],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
              </>
            )}

            {/* Simplified floating shapes - only on desktop and no reduced motion */}
            {!isReduced && !isMobile && (
              <>
                <motion.div 
                  className="absolute top-20 left-20 w-12 h-12 border-2 border-indigo-400/30 dark:border-indigo-400/50 rounded-lg"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute bottom-32 right-24 w-16 h-16 border-2 border-purple-400/30 dark:border-purple-400/50 rounded-full"
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
              </>
            )}
          </div>

          <div className="container mx-auto px-4 z-10 relative">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left Column - Content */}
              <motion.div
                className="w-full lg:w-1/2 lg:pr-16 mb-12 lg:mb-0 reveal-up"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div 
                  variants={fadeIn} 
                  className="mb-6"
                >
                  <motion.span 
                    className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-200/50 dark:border-indigo-700/50 backdrop-blur-sm"
                    animate={!isReduced ? {
                      boxShadow: [
                        "0 0 15px rgba(99, 102, 241, 0.1)",
                        "0 0 20px rgba(99, 102, 241, 0.15)",
                        "0 0 15px rgba(99, 102, 241, 0.1)"
                      ]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.span
                      key={text}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {text}
                    </motion.span>
                    {!isReduced && (
                      <motion.span 
                        className="ml-2 text-indigo-600 dark:text-indigo-400"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                      >
                        |
                      </motion.span>
                    )}
                  </motion.span>
                </motion.div>

                <motion.h1
                  variants={fadeIn}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                >
                  <motion.span 
                    className="block text-reveal magnetic"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                      Luka
                    </span>
                  </motion.span>
                  <motion.span
                    className="block mt-2 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Building Digital Experiences
                  </motion.span>
                </motion.h1>

                <motion.p
                  variants={fadeIn}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl"
                >
                  Passionate full-stack developer crafting modern web applications 
                  with cutting-edge technologies. I transform ideas into elegant, 
                  performant digital solutions.
                </motion.p>

                <motion.div 
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <Link href="/projects" passHref legacyBehavior>
                    <motion.a
                      className="group magnetic relative overflow-hidden px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                      whileHover={!isReduced ? {
                        scale: 1.02,
                        boxShadow: "0 15px 30px rgba(99, 102, 241, 0.3)"
                      } : {}}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center">
                        View My Work
                        {!isReduced && (
                          <motion.svg 
                            className="ml-2 w-5 h-5"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            initial={{ x: 0 }}
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </motion.svg>
                        )}
                      </span>
                    </motion.a>
                  </Link>
                  <Link href="/contact" passHref legacyBehavior>
                    <motion.a
                      className="group magnetic relative overflow-hidden px-8 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-300 font-semibold rounded-xl shadow-lg border border-indigo-200/60 dark:border-indigo-600/60 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300"
                      whileHover={!isReduced ? {
                        scale: 1.02,
                        backgroundColor: "rgba(255, 255, 255, 0.95)"
                      } : {}}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Get in Touch</span>
                    </motion.a>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                className="w-full lg:w-1/2 perspective-1000 reveal-right"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={!isReduced ? { scale: 1.02 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Simplified floating elements around image */}
                  {!isReduced && !isMobile && (
                    <>
                      <motion.div
                        className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 dark:from-indigo-500 dark:to-purple-600 rounded-full blur-sm opacity-30 dark:opacity-20"
                        animate={{
                          y: [0, -15, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 dark:from-green-500 dark:to-blue-600 rounded-full blur-sm opacity-25 dark:opacity-15"
                        animate={{
                          scale: [1, 1.15, 1],
                          x: [0, -10, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      />
                    </>
                  )}

                  {/* Main image container with simplified effects */}
                  <motion.div
                    className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-600/30 backdrop-blur-sm"
                    whileHover={!isReduced ? {
                      rotateX: 2,
                      rotateY: -2,
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
                    } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Simplified animated border */}
                    {!isReduced && (
                      <motion.div
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          background: "linear-gradient(45deg, transparent, rgba(99, 102, 241, 0.1), transparent)"
                        }}
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                    )}

                    {/* Profile Image */}
                    <div className="relative w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30">
                      <Image
                        src="/images/profile.jpg"
                        alt="Luka Partenadze"
                        fill
                        className="object-cover rounded-3xl"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Simplified overlay effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 via-transparent to-purple-600/20 rounded-3xl"
                        animate={!isReduced ? {
                          opacity: [0.2, 0.3, 0.2]
                        } : {}}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.div>

                  {/* Simplified stats overlay */}
                  <motion.div
                    className="absolute -bottom-6 left-4 right-4 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-center">
                        <motion.div 
                          className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          10+
                        </motion.div>
                        <div className="text-gray-600 dark:text-gray-400">Advanced Projects</div>
                      </div>
                      <div className="text-center">
                        <motion.div 
                          className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                        >
                          2+
                        </motion.div>
                        <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <motion.div 
                          className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.4 }}
                        >
                          100%
                        </motion.div>
                        <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section
          ref={projectsRef}
          className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50/30 dark:from-gray-800 dark:to-indigo-950/30 relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 bg-mesh opacity-5 dark:opacity-3"></div>
          <motion.div
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-2xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-indigo-300/20 to-blue-300/20 dark:from-indigo-600/10 dark:to-blue-600/10 rounded-full blur-2xl"
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <div className="container mx-auto px-4">
            <div className="relative z-10">
              <motion.div
                className="text-center mb-16 scale-in"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text text-reveal"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Featured Projects
                </motion.h2>
                <motion.p 
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed reveal-up"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Here are some of my recent projects that showcase my skills and expertise in modern web development.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
              {projects.slice(0, 3).map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm font-medium">{project.category}</span>
                            <span className="px-2 py-1 bg-indigo-600 text-white text-xs rounded-full">{project.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex justify-between items-center mt-auto">
                        <Link href={project.link} passHref legacyBehavior>
                          <motion.a
                            whileHover={{ x: 3 }}
                            className="text-indigo-600 dark:text-indigo-400 font-medium text-sm inline-flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project
                            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </motion.a>
                        </Link>

                        {project.github && (
                          <Link href={project.github} passHref legacyBehavior>
                            <motion.a
                              whileHover={{ y: -3 }}
                              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 font-bold"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GH
                            </motion.a>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link href="/projects" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
                >
                  View All Projects
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </Link>
            </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={skillsRef}
          className="py-20 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I work with a variety of technologies to create modern, scalable, and user-friendly applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['frontend', 'backend', 'database', 'tools'].map((category, idx) => {
                const categoryTitles = {
                  frontend: 'Frontend',
                  backend: 'Backend',
                  database: 'Database',
                  tools: 'Tools & Deployment'
                }

                const categoryColors = {
                  frontend: 'indigo',
                  backend: 'green',
                  database: 'purple',
                  tools: 'orange'
                }

                const color = categoryColors[category]

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md border-t-4 ${
                      color === 'indigo' ? 'border-indigo-500' :
                      color === 'green' ? 'border-green-500' :
                      color === 'purple' ? 'border-purple-500' :
                      'border-orange-500'
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4">
                      {categoryTitles[category]}
                    </h3>

                    <div className="space-y-2">
                      {skillData
                        .filter(skill => skill.category === category)
                        .slice(0, 6)
                        .map((skill) => (
                          <div
                            key={skill.name}
                            className="flex items-center p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            <div
                              className="w-2 h-2 rounded-full mr-2"
                              style={{ backgroundColor: skill.color }}
                            ></div>
                            <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                          </div>
                        ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section
          ref={contactRef}
          className="py-20 bg-indigo-600 text-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-xl opacity-90 mb-10">
                I'm currently available for freelance projects and collaborations.
                If you have a project in mind or just want to chat, feel free to reach out!
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-indigo-700 hover:bg-gray-100 font-medium rounded-lg shadow-lg transition-all duration-300"
                  >
                    Get in Touch
                  </motion.a>
                </Link>

                <Link href="/about" passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300"
                  >
                    Learn More About Me
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
      </div>
    </ScrollAnimations>
  )
}
