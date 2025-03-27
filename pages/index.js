'use client'
import Head from 'next/head'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { useEffect, useState, useRef } from 'react'
import {
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiPython,
  SiPhp,
  SiLaravel,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript
} from 'react-icons/si'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const skillData = [
  { name: 'JavaScript', icon: <SiJavascript />, category: 'frontend', color: 'text-yellow-500' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend', color: 'text-blue-600' },
  { name: 'HTML', icon: <SiHtml5 />, category: 'frontend', color: 'text-orange-500' },
  { name: 'CSS', icon: <SiCss3 />, category: 'frontend', color: 'text-blue-500' },
  { name: 'React', icon: <SiReact />, category: 'frontend', color: 'text-cyan-500' },
  { name: 'Angular', icon: <SiAngular />, category: 'frontend', color: 'text-red-600' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'frontend', color: 'text-gray-800 dark:text-white' },
  { name: 'Node.js', icon: <SiNodedotjs />, category: 'backend', color: 'text-green-600' },
  { name: 'Python', icon: <SiPython />, category: 'backend', color: 'text-blue-500' },
  { name: 'PHP', icon: <SiPhp />, category: 'backend', color: 'text-indigo-600' },
  { name: 'Laravel', icon: <SiLaravel />, category: 'backend', color: 'text-red-500' },
  { name: 'C#', icon: <SiDotnet />, category: 'backend', color: 'text-purple-600' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'database', color: 'text-green-500' },
  { name: 'MySQL', icon: <SiMysql />, category: 'database', color: 'text-blue-600' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'database', color: 'text-blue-500' },
  { name: 'Git', icon: <SiGit />, category: 'tools', color: 'text-orange-600' },
]

// Example projects
const projects = [
  {
    title: 'Syncrolly',
    description: 'Real-time data synchronization platform built for seamless integration with existing systems and high-performance data transfer.',
    image: '/images/syncrolly.jpg',
    link: 'https://syncrolly.com',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Typingy',
    description: 'Interactive typing speed test platform featuring customizable tests, real-time analytics, and competitive leaderboards.',
    image: '/images/typingy.jpg',
    link: 'https://typingy.live',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'DevConnect',
    description: 'Developer collaboration network designed to connect programmers for pair programming, mentorship, and project collaboration.',
    image: '/images/devconnect.jpg',
    link: 'https://github.com/SetFodi/devconnect',
    technologies: ['React', 'JavaScript', 'MongoDB', 'Tailwind CSS'],
    color: 'from-emerald-500 to-teal-400',
  },
]

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const skillsRef = useRef(null)

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }
  
  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300 flex flex-col">
      <Head>
        <title>Luka Partenadze | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Luka Partenadze, a passionate Web Developer specializing in modern web technologies and user-centric applications."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <main className="flex-1 w-full overflow-hidden">
        {/* Hero Section with Animated Background */}
        <motion.section 
          className="relative overflow-hidden min-h-[90vh] flex items-center"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          {/* Animated particles background */}
          <div className="absolute inset-0 z-0">
            {Array(20).fill(0).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500 opacity-30 dark:opacity-40"
                style={{
                  width: Math.random() * 60 + 10,
                  height: Math.random() * 60 + 10,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50],
                  scale: [1, Math.random() + 0.5],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
          
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/0 to-purple-50/30 dark:from-blue-900/10 dark:via-gray-900/0 dark:to-purple-900/10"></div>
          
          <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left Column: Headline / Titles */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInLeft}
                className="flex-1 text-center md:text-left"
              >
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 backdrop-blur-sm"
                >
                  Junior Full Stack Web Developer
                </motion.span>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                  <motion.div className="overflow-hidden inline-block">
                    <motion.span 
                      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ duration:.8, delay: 0.3 }}
                    >
                      Luka
                    </motion.span>
                  </motion.div>{" "}
                  <motion.div className="overflow-hidden inline-block">
                    <motion.span 
                      className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
                      initial={{ y: 100 }}
                      animate={{ y: 0 }}
                      transition={{ duration: .8, delay: 0.4 }}
                    >
                      Partenadze
                    </motion.span>
                  </motion.div>
                </h1>
                
                <motion.p 
                  variants={fadeIn}
                  transition={{ delay: 0.6 }}
                  className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
                >
                  Building intuitive, responsive, and scalable web applications with modern technologies and best practices.
                </motion.p>
                
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                >
                  <motion.a
                    variants={fadeIn}
                    transition={{ delay: 0.8 }}
                    href="/projects"
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-400 dark:hover:to-blue-500 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    View Projects
                  </motion.a>
                  <motion.a
                    variants={fadeIn}
                    transition={{ delay: 0.9 }}
                    href="/contact"
                    className="inline-block bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-8 py-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get in Touch
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Image with decorative elements */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInRight}
                className="flex-1 flex justify-center md:justify-end"
              >
                <div className="relative">
                  {/* Decorative elements behind the image */}
                  <motion.div 
                    className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  ></motion.div>
                  
                  <div className="absolute -inset-2 bg-white dark:bg-gray-800 rounded-full"></div>
                  
                  {/* Profile image with reflection effect */}
                  <motion.div 
                    className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Image
                      src="/images/profile.jpg"
                      alt="Luka Partenadze"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Shiny reflection effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-30"
                      animate={{ 
                        x: [0, 100, 0],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    ></motion.div>
                  </motion.div>
                  
                  {/* Floating skill badges with improved animations */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute -bottom-6 -left-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <SiReact className="text-3xl text-blue-500" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute -top-2 -right-8 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                  >
                    <SiNextdotjs className="text-3xl text-black dark:text-white" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20, y: 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="absolute top-1/2 -right-12 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                  >
                    <SiNodedotjs className="text-3xl text-green-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
            <motion.div 
              className="w-1.5 h-8 rounded-full border-2 border-gray-400 dark:border-gray-500 flex justify-center"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div 
                className="w-1 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-1"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Skills Section with Categories */}
        <section className="py-20 px-4 relative overflow-hidden" id="skills" ref={skillsRef}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
              {Array(100).fill(0).map((_, i) => (
                <div key={i} className="border-b border-r border-gray-300 dark:border-gray-700"></div>
              ))}
            </div>
          </div>
          
          {/* Floating technology orbs */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {skillData.slice(0, 8).map((skill, i) => (
              <motion.div
                key={i}
                className={`absolute ${skill.color} opacity-20 rounded-full flex items-center justify-center`}
                style={{
                  width: Math.random() * 80 + 60,
                  height: Math.random() * 80 + 60,
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                animate={{
                  y: [0, Math.random() * 50 - 25],
                  x: [0, Math.random() * 50 - 25],
                  scale: [1, Math.random() * 0.3 + 0.8, 1]
                }}
                transition={{
                  duration: Math.random() * 8 + 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 backdrop-blur-sm"
              >
                Technical Toolkit
              </motion.span>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Skills & Expertise
              </h2>
              
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                I leverage a range of modern technologies to build robust, maintainable, and
                visually appealing applications that scale.
              </p>
            </motion.div>

            {/* Categorized Skills - Now with color icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Frontend */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <span className="text-2xl">🎨</span> Frontend
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillData.filter(skill => skill.category === 'frontend').map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className={`text-2xl ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Backend */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-800 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <span className="text-2xl">⚙️</span> Backend
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillData.filter(skill => skill.category === 'backend').map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className={`text-2xl ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Database */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <span className="text-2xl">🗄️</span> Database
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillData.filter(skill => skill.category === 'database').map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className={`text-2xl ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Tools */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span> Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillData.filter(skill => skill.category === 'tools').map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className={`text-2xl ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Summary statement with subtle animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-8"
            >
              <div className="relative py-6 px-8 max-w-3xl mx-auto">
                <div className="absolute top-0 left-8 text-5xl text-gray-200 dark:text-gray-700">"</div>
                <p className="text-gray-600 dark:text-gray-300 text-lg italic relative z-10">
                  I specialize in creating responsive, user-friendly applications with clean code and modern architecture.
                </p>
                <div className="absolute bottom-0 right-8 text-5xl text-gray-200 dark:text-gray-700">"</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section - With Glass Effect */}
        <section className="py-20 px-4 relative overflow-hidden" id="projects">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 z-0"></div>
          
         {/* Background blurred circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute w-96 h-96 rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-3xl"
              style={{ top: '10%', right: '5%' }}
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div 
              className="absolute w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl"
              style={{ bottom: '20%', left: '5%' }}
              animate={{ 
                scale: [1, 1.2, 1],
                x: [0, -20, 0],
                y: [0, 40, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 backdrop-blur-sm"
              >
                My Work
              </motion.span>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Featured Projects
              </h2>
              
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                Explore a selection of my recent work showcasing my technical skills and problem-solving approach.
              </p>
            </motion.div>
            
            <div className="grid gap-10 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Tilt
                    glareEnable={!isMobile}
                    glareColor="#ffffff"
                    glareMaxOpacity={0.15}
                    tiltMaxAngleX={isMobile ? 0 : 10}
                    tiltMaxAngleY={isMobile ? 0 : 10}
                    scale={1.03}
                    transitionSpeed={1500}
                    className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="w-full h-56 relative overflow-hidden">
                      {/* Colorful gradient overlay based on project type */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80 mix-blend-multiply`}></div>
                      
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-overlay"
                      />
                      
                      {/* Fancy hover overlay with depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                      
                      {/* Project title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white drop-shadow-lg transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      >
                        View Project
                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center mt-16"
            >
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-400 dark:hover:to-indigo-400 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-medium">View All Projects</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action Section with Animated Background */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 z-0">
            {/* Animated wave pattern */}
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
              <motion.path 
                d="M 0 300 Q 360 220 720 300 Q 1080 380 1440 300 L 1440 800 L 0 800 Z"
                fill="rgba(255, 255, 255, 0.05)"
                animate={{ 
                  d: [
                    "M 0 300 Q 360 220 720 300 Q 1080 380 1440 300 L 1440 800 L 0 800 Z",
                    "M 0 320 Q 360 380 720 320 Q 1080 260 1440 320 L 1440 800 L 0 800 Z",
                    "M 0 300 Q 360 220 720 300 Q 1080 380 1440 300 L 1440 800 L 0 800 Z"
                  ]
                }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
              />
              <motion.path 
                d="M 0 400 Q 360 320 720 400 Q 1080 480 1440 400 L 1440 800 L 0 800 Z"
                fill="rgba(255, 255, 255, 0.08)"
                animate={{ 
                  d: [
                    "M 0 400 Q 360 320 720 400 Q 1080 480 1440 400 L 1440 800 L 0 800 Z",
                    "M 0 450 Q 360 490 720 450 Q 1080 410 1440 450 L 1440 800 L 0 800 Z",
                    "M 0 400 Q 360 320 720 400 Q 1080 480 1440 400 L 1440 800 L 0 800 Z"
                  ]
                }}
                transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
              />
            </svg>
            
            {/* Floating particles */}
            {Array(8).fill(0).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white opacity-20"
                style={{
                  width: Math.random() * 30 + 10,
                  height: Math.random() * 30 + 10,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0.2, 0, 0.2],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            ))}
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Let's Build Something Amazing Together
              </motion.h2>
              
              <motion.p 
                className="text-xl opacity-90 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Looking for a developer who can turn your ideas into reality? I'm currently available for freelance projects and collaborations.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Me
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-medium transform hover:-translate-y-1 transition-all duration-300"
                >
                  Learn More About Me
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
