'use client'
import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Head>
        <title>Luka Partenadze | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Luka Partenadze, a passionate Full Stack Developer specializing in modern web technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center pt-20 md:pt-0"
        >
          {/* Modern Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800"></div>

            {/* Animated gradient blobs */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-60 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/4 w-1/4 h-1/4 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-20 h-20 border-2 border-indigo-200 dark:border-indigo-800/30 rounded-lg rotate-12 opacity-20"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-purple-200 dark:border-purple-800/30 rounded-full opacity-20"></div>
          </div>

          <div className="container mx-auto px-4 z-10 relative">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left Column - Content */}
              <motion.div
                className="w-full lg:w-1/2 lg:pr-16 mb-12 lg:mb-0"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeIn} className="mb-4">
                  <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {text}
                    <span className="animate-pulse ml-1">|</span>
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeIn}
                  className="text-4xl md:text-6xl font-bold mb-6"
                >
                  <span className="block">Hi, I'm Luka</span>
                  <span className="text-indigo-600 dark:text-indigo-400">Full Stack Developer</span>
                </motion.h1>

                <motion.p
                  variants={fadeIn}
                  className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
                >
                  I build exceptional digital experiences with modern technologies,
                  focusing on performance, accessibility, and beautiful design.
                </motion.p>

                <motion.div
                  variants={fadeIn}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/projects" passHref legacyBehavior>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
                    >
                      View My Work
                    </motion.a>
                  </Link>
                  <Link href="/contact" passHref legacyBehavior>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
                    >
                      Get in Touch
                    </motion.a>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-gray-800">
                  <Image
                    src="/images/profile.jpg"
                    alt="Luka Partenadze"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
                </div>
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
          className="py-20 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  )
}
