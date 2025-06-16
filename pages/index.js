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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
      setText(phrases[(index + 1) % phrases.length])
    }, 3000)
    return () => clearInterval(interval)
  }, [index])

  // For dark mode - default to light mode
  useEffect(() => {
    // Always default to light mode on home page
    document.documentElement.classList.remove('dark')

    // Save the theme preference
    localStorage.setItem('theme', 'light')
  }, [])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
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
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <ScrollAnimations>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
        <Head>
          <title>Luka Partenadze | Full Stack Developer</title>
          <meta name="description" content="Portfolio of Luka Partenadze, a passionate Full Stack Developer specializing in modern web technologies." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <CustomCursor />
        <ParticleBackground density={30} interactive={true} />
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-50 transform origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <Navbar />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden"
        >
          {/* Advanced Background */}
          <div className="absolute inset-0 z-0">
            {/* Dynamic gradient base */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950"
              animate={{
                background: [
                  "linear-gradient(135deg, rgb(238, 242, 255) 0%, rgb(237, 233, 254) 50%, rgb(251, 242, 249) 100%)",
                  "linear-gradient(135deg, rgb(237, 233, 254) 0%, rgb(251, 242, 249) 50%, rgb(255, 247, 237) 100%)",
                  "linear-gradient(135deg, rgb(251, 242, 249) 0%, rgb(255, 247, 237) 50%, rgb(238, 242, 255) 100%)",
                  "linear-gradient(135deg, rgb(238, 242, 255) 0%, rgb(237, 233, 254) 50%, rgb(251, 242, 249) 100%)"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Morphing gradient blobs */}
            <motion.div 
              className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-300/40 to-purple-400/40 dark:from-indigo-600/30 dark:to-purple-700/30 rounded-full blur-3xl"
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-300/40 to-indigo-400/40 dark:from-pink-600/30 dark:to-indigo-700/30 rounded-full blur-3xl"
              animate={{
                x: [0, -60, 40, 0],
                y: [0, 30, -50, 0],
                scale: [1, 0.9, 1.3, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-bl from-purple-300/30 to-pink-400/30 dark:from-purple-600/20 dark:to-pink-700/20 rounded-full blur-3xl"
              animate={{
                x: [0, 70, -20, 0],
                y: [0, -30, 60, 0],
                scale: [1, 1.1, 0.7, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            />

            {/* Floating geometric shapes */}
            <motion.div 
              className="absolute top-20 left-20 w-16 h-16 border-2 border-indigo-300/50 dark:border-indigo-600/50 rounded-lg"
              animate={{
                rotate: [0, 180, 360],
                x: [0, 20, -10, 0],
                y: [0, -15, 10, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-32 right-24 w-24 h-24 border-2 border-purple-300/50 dark:border-purple-600/50 rounded-full"
              animate={{
                rotate: [0, -90, -180, -270, -360],
                scale: [1, 1.1, 0.9, 1.05, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-pink-400/30 to-purple-500/30 dark:from-pink-600/20 dark:to-purple-700/20 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Noise texture overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay"></div>
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
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(99, 102, 241, 0.1)",
                        "0 0 30px rgba(99, 102, 241, 0.2)",
                        "0 0 20px rgba(99, 102, 241, 0.1)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.span
                      key={text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {text}
                    </motion.span>
                    <motion.span 
                      className="ml-2 text-indigo-600 dark:text-indigo-400"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    >
                      |
                    </motion.span>
                  </motion.span>
                </motion.div>

                <motion.h1
                  variants={fadeIn}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                >
                  <motion.span 
                    className="block text-reveal magnetic"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Hi, I'm{" "}
                    <motion.span 
                      className="gradient-text relative inline-block"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Luka
                      <motion.div
                        className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  </motion.span>
                  <motion.span 
                    className="block gradient-text text-reveal magnetic"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    Full Stack Developer
                  </motion.span>
                </motion.h1>

                <motion.p
                  variants={fadeIn}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed reveal-up"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  I build{" "}
                  <motion.span 
                    className="gradient-text font-semibold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    exceptional digital experiences
                  </motion.span>
                  {" "}with modern technologies, focusing on performance, accessibility, and beautiful design.
                </motion.p>

                <motion.div
                  variants={fadeIn}
                  className="flex flex-wrap gap-4 stagger-children"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link href="/projects" passHref legacyBehavior>
                    <motion.a
                      className="group magnetic relative overflow-hidden px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-magical transition-all duration-500"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 flex items-center">
                        View My Work
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
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0, rotate: 180 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.a>
                  </Link>
                  <Link href="/contact" passHref legacyBehavior>
                    <motion.a
                      className="group magnetic relative overflow-hidden px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 font-semibold rounded-xl shadow-lg border border-indigo-200/50 dark:border-indigo-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-500"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.95)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Get in Touch</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/50 dark:to-purple-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                className="w-full lg:w-1/2 perspective-1000 reveal-right"
                initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Floating elements around image */}
                  <motion.div
                    className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-sm opacity-20"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -top-4 -right-12 w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-500 rounded-lg rotate-45 opacity-25"
                    animate={{
                      rotate: [45, 225, 45],
                      y: [0, -15, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-sm opacity-15"
                    animate={{
                      scale: [1, 1.2, 1],
                      x: [0, -15, 0]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />

                  {/* Main image container with advanced effects */}
                  <motion.div
                    className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-3d border border-white/20 dark:border-gray-700/30 backdrop-blur-sm"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
                    }}
                    whileHover={{
                      rotateX: 5,
                      rotateY: -5,
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(99, 102, 241, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: "linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899, #f59e0b, #6366f1)",
                        backgroundSize: "300% 300%",
                        padding: "2px"
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full rounded-3xl overflow-hidden bg-white dark:bg-gray-900">
                        <Image
                          src="/images/profile.jpg"
                          alt="Luka Partenadze"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                        
                        {/* Overlay gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-purple-900/20 to-transparent"></div>
                        
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatDelay: 3,
                            ease: "easeInOut" 
                          }}
                        />
                        
                        {/* Glowing dots */}
                        <div className="absolute top-4 right-4">
                          <motion.div
                            className="w-3 h-3 bg-green-400 rounded-full shadow-glow-sm"
                            animate={{
                              opacity: [0.5, 1, 0.5],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* 3D depth layers */}
                    <motion.div
                      className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 -z-10 blur-xl"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>

                  {/* Stats overlay */}
                  <motion.div
                    className="absolute -bottom-8 left-4 right-4 p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-center">
                        <motion.div 
                          className="text-xl font-bold gradient-text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                                                 >
                           10+
                         </motion.div>
                         <div className="text-gray-600 dark:text-gray-400">Advanced Projects</div>
                      </div>
                      <div className="text-center">
                        <motion.div 
                          className="text-xl font-bold gradient-text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.4 }}
                        >
                          3+
                        </motion.div>
                        <div className="text-gray-600 dark:text-gray-400">Years</div>
                      </div>
                      <div className="text-center">
                        <motion.div 
                          className="text-xl font-bold gradient-text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.6 }}
                        >
                          ∞
                        </motion.div>
                        <div className="text-gray-600 dark:text-gray-400">Learning</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-8 h-12 rounded-full border-2 border-indigo-400/50 flex justify-center items-start p-2"
            >
              <motion.div
                className="w-1.5 h-3 bg-indigo-400/70 rounded-full"
                animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.1,
                }}
              />
            </motion.div>
          </motion.div>
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
