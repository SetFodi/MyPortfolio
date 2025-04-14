'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion, useAnimation, useScroll } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
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

import Navbar from '../components/Navbar' // Assuming this component exists
import Footer from '../components/Footer' // Assuming this component exists

const skillData = [
  { name: 'JavaScript', icon: <SiJavascript />, category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend' },
  { name: 'HTML', icon: <SiHtml5 />, category: 'frontend' },
  { name: 'CSS', icon: <SiCss3 />, category: 'frontend' },
  { name: 'React', icon: <SiReact />, category: 'frontend' },
  { name: 'Angular', icon: <SiAngular />, category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'frontend' },
  { name: 'Node.js', icon: <SiNodedotjs />, category: 'backend' },
  { name: 'Python', icon: <SiPython />, category: 'backend' },
  { name: 'PHP', icon: <SiPhp />, category: 'backend' },
  { name: 'Laravel', icon: <SiLaravel />, category: 'backend' },
  { name: 'C#', icon: <SiDotnet />, category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'database' },
  { name: 'MySQL', icon: <SiMysql />, category: 'database' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'database' },
  { name: 'Git', icon: <SiGit />, category: 'tools' },
]

// Example projects
const projects = [
  {
    title: 'Syncrolly',
    description: 'Real-time data synchronization platform built for seamless integration with existing systems and high-performance data transfer.',
    image: '/images/syncrolly.jpg',
    link: 'https://syncrolly.com',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
  },
  {
    title: 'Typingy',
    description: 'Interactive typing speed test platform featuring customizable tests, real-time analytics, and competitive leaderboards.',
    image: '/images/typingy.jpg',
    link: 'https://typingy.live',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
  },
  {
    title: 'DevConnect',
    description: 'Developer collaboration network designed to connect programmers for pair programming, mentorship, and project collaboration.',
    image: '/images/devconnect.jpg',
    link: 'https://github.com/SetFodi/devconnect',
    technologies: ['React', 'JavaScript', 'MongoDB', 'Tailwind CSS'],
  },
]

export default function Home() {
  // Mouse position for parallax effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const heroControls = useAnimation();

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5),
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (scrollY?.get() < 100) {
        heroControls.start({ opacity: 1, y: 0 });
      } else {
        heroControls.start({ opacity: 0.8, y: scrollY?.get() / 10 });
      }
    };

    return scrollY?.onChange(handleScroll);
  }, [scrollY, heroControls]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300 ease-in-out flex flex-col">
      <Head>
        <title>Luka Partenadze | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Luka Partenadze, a passionate Web Developer specializing in modern web technologies and user-centric applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-1 w-full">
{/* Hero Section */}
<section className="relative overflow-hidden pt-28 pb-36 sm:pt-36 sm:pb-44 md:pb-32 px-4">
  {/* Background elements remain the same */}
  <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
    {/* Your existing background blobs */}
  </div>
  
  <div className="max-w-7xl mx-auto relative">
    <div className="flex flex-col md:flex-row items-center gap-16">
      {/* Left Column: Title content remains the same */}
      <motion.div className="flex-1 text-center md:text-left z-10">
        {/* Your existing content */}
      </motion.div>

      {/* Right Column: Hero Image with repositioned code */}
      <motion.div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 relative">
        {/* Profile image with effects remains the same */}
        <div className="relative group z-10">
          {/* Your existing profile image code */}
        </div>
        
        {/* Improved Code Snippet - positioned relative to the container */}
        <motion.div 
          className="absolute right-0 md:right-10 bottom-0 md:-bottom-16 w-[300px] sm:w-[350px] md:w-[400px] max-w-full opacity-70 dark:opacity-60 pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            x: mousePosition.x * 5,
            y: mousePosition.y * 5
          }}
        >

        </motion.div>
      </motion.div>
    </div>
    
    {/* Add a floating tech icon near the code */}
    <motion.div 
      className="absolute bottom-8 right-10 z-10 hidden md:block"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
    >
      <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-full shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    </motion.div>
  </div>

          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
              {/* Left Column: Headline / Titles */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 text-center md:text-left"
              >
                <motion.span 
                  className="inline-block px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-5 shadow-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Junior Full Stack Web Developer
                </motion.span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 gradient-text">
                  Luka Partenadze
                </h1>
                <p className="text-lg sm:text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                  Building intuitive, responsive, and scalable web applications with modern technologies and best practices.
                </p>
                <motion.div 
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="/projects"
                    variants={fadeIn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                  >
                    View Projects
                  </motion.a>
                  <motion.a
                    href="/contact"
                    variants={fadeIn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                  >
                    Get in Touch
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
                style={{
                  x: mousePosition.x * -15,
                  y: mousePosition.y * -15
                }}
              >
                <div className="relative group">
                  {/* Enhanced decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
                  <div className="absolute -inset-2 bg-white dark:bg-gray-800 rounded-full shadow-inner"></div>
                  
                  {/* Enhanced profile image */}
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    <Image
                      src="/images/profile.jpg"
                      alt="Luka Partenadze"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 18rem, (max-width: 1024px) 20rem, 24rem"
                    />
                    {/* Enhanced shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Enhanced floating skill badges */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 150 }}
                    className="absolute -bottom-5 -left-8 sm:-bottom-6 sm:-left-10 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-600"
                    style={{
                      x: mousePosition.x * 10,
                      y: mousePosition.y * 10
                    }}
                  >
                    <SiReact className="text-3xl text-blue-500" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 150 }}
                    className="absolute -top-1 -right-6 sm:-top-2 sm:-right-8 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-600"
                    style={{
                      x: mousePosition.x * -10,
                      y: mousePosition.y * -10
                    }}
                  >
                    <SiNextdotjs className="text-3xl text-black dark:text-white" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 150 }}
                    className="absolute top-1/2 -right-10 sm:-right-12 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-600"
                    style={{
                      x: mousePosition.x * -15,
                      y: mousePosition.y * 5
                    }}
                  >
                    <SiNodedotjs className="text-3xl text-green-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 px-4 relative overflow-hidden bg-gray-100 dark:bg-gray-800/50" id="skills"> 
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]">
            <div className="grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] h-full w-full">
              {Array(400).fill(0).map((_, i) => (
                <div key={i} className="border-b border-r border-gray-300 dark:border-gray-700"></div>
              ))}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-5 shadow-sm">
                Technical Toolkit
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I leverage a range of modern technologies to build robust, maintainable, and
                visually appealing applications that scale.
              </p>
            </motion.div>

            {/* Enhanced Categorized Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20"> 
              {/* Frontend */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent hover:border-blue-200 dark:hover:border-gray-700 transition-all duration-300 ease-in-out card-hover"
              >
                <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400 flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg mr-3">
                    <SiReact className="text-blue-600 dark:text-blue-400 text-xl" />
                  </span>
                  Frontend
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {skillData.filter(skill => skill.category === 'frontend').map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05, x: 3 }}
                      className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors duration-200"
                    >
                      <div className="text-2xl text-gray-600 dark:text-gray-400">{skill.icon}</div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Backend */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent hover:border-green-200 dark:hover:border-gray-700 transition-all duration-300 ease-in-out card-hover"
              >
                <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400 flex items-center">
                  <span className="bg-green-100 dark:bg-green-900/40 p-2 rounded-lg mr-3">
                    <SiNodedotjs className="text-green-600 dark:text-green-400 text-xl" />
                  </span>
                  Backend
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {skillData.filter(skill => skill.category === 'backend').map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05, x: 3 }}
                      className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors duration-200"
                    >
                      <div className="text-2xl text-gray-600 dark:text-gray-400">{skill.icon}</div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Database */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent hover:border-purple-200 dark:hover:border-gray-700 transition-all duration-300 ease-in-out card-hover"
              >
                <h3 className="text-xl font-semibold mb-6 text-purple-600 dark:text-purple-400 flex items-center">
                  <span className="bg-purple-100 dark:bg-purple-900/40 p-2 rounded-lg mr-3">
                    <SiMongodb className="text-purple-600 dark:text-purple-400 text-xl" />
                  </span>
                  Database
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {skillData.filter(skill => skill.category === 'database').map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05, x: 3 }}
                      className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors duration-200"
                    >
                      <div className="text-2xl text-gray-600 dark:text-gray-400">{skill.icon}</div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Tools */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent hover:border-orange-200 dark:hover:border-gray-700 transition-all duration-300 ease-in-out card-hover"
              >
                <h3 className="text-xl font-semibold mb-6 text-orange-600 dark:text-orange-400 flex items-center">
                  <span className="bg-orange-100 dark:bg-orange-900/40 p-2 rounded-lg mr-3">
                    <SiGit className="text-orange-600 dark:text-orange-400 text-xl" />
                  </span>
                  Tools
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {skillData.filter(skill => skill.category === 'tools').map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05, x: 3 }}
                      className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors duration-200"
                    >
                      <div className="text-2xl text-gray-600 dark:text-gray-400">{skill.icon}</div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced summary statement */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-center mt-12"
            >
              <div className="py-8 px-6 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 dark:border-gray-700/50 max-w-3xl mx-auto">
                <p className="text-gray-600 dark:text-gray-400 text-lg italic leading-relaxed">
                  "I specialize in creating responsive, user-friendly applications with clean code and modern architecture."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 px-4 bg-white dark:bg-gray-900" id="projects"> 
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-5 shadow-sm">
                My Work
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Explore a selection of my recent work showcasing my technical skills and problem-solving approach.
              </p>
            </motion.div>
            
            {/* Enhanced Projects Grid */}
            <div className="grid gap-12 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3"> 
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                >
                  <Tilt
                    glareEnable
                    glareColor="#ffffff"
                    glarePosition="all"
                    glareMaxOpacity={0.08}
                    tiltMaxAngleX={7}
                    tiltMaxAngleY={7}
                    scale={1.02}
                    transitionSpeed={2000}
                    className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700/50 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 ease-in-out group"
                  >
                    <div className="w-full h-56 relative overflow-hidden border-b border-gray-100 dark:border-gray-700/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-end">
                        <div className="p-6 w-full">
                          <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            View details
                          </motion.span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col h-[calc(100%-14rem)]">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 text-[0.7rem] font-medium bg-blue-50 dark:bg-gray-700/50 text-blue-700 dark:text-blue-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 ease-in-out mt-auto group/link"
                      >
                        View Project
                        <svg className="ml-1.5 w-4 h-4 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="text-center mt-20"
            >
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              >
                <span>View All Projects</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
        
        {/* Enhanced Call to Action Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden"> 
          {/* Animated floating elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 300 + 50,
                    height: Math.random() * 300 + 50,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.3,
                  }}
                  animate={{
                    y: [0, Math.random() * -100 - 50],
                    opacity: [0.1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Let's Build Something Amazing Together</h2>
              <p className="text-lg sm:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Looking for a developer who can turn your ideas into reality? I'm currently available for freelance projects and collaborations.
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-semibold transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  Learn More About Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
