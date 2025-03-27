'use client'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const [isMobile, setIsMobile] = useState(false)

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects = [
    {
      title: 'Syncrolly',
      description: 'A project that synchronizes data in real time.',
      image: '/syncrolly.jpg',
      link: 'https://syncrolly.com',
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    },
    {
      title: 'Typingy',
      description: 'Test your typing speed and accuracy in a fun way.',
      image: '/typingy.jpg',
      link: 'https://typingy.live',
      technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'MongoDB'],
    },
    {
      title: 'Devconnect',
      description: 'Connecting developers around the world.',
      image: '/devconnect.jpg',
      link: 'https://github.com/SetFodi/devconnect',
      technologies: ['React', 'JavaScript', 'MongoDB', 'Tailwind CSS'],
    },
    {
      title: 'MoviesProfile',
      description: 'Movie-themed website built with React.',
      image: '/MovieApp.jpg',
      link: 'https://github.com/SetFodi/moviesProfile',
      technologies: ['React', 'JavaScript', 'CSS', 'API Integration'],
    },
    {
      title: 'Task-Manager',
      description: 'Task management app (first project in Next.js).',
      image: '/taskmanager.jpg',
      link: 'https://github.com/SetFodi/TaskManger',
      technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'MongoDB'],
    },
    {
      title: 'MusicStreamingService',
      description: 'App for streaming music (great learning experience).',
      image: '/musicstreamingservice.jpg',
      link: 'https://github.com/SetFodi/MusicStreamingService',
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    },
    {
      title: 'SetWord',
      description: 'Wordle clone built Next-js.',
      image: '/SetWord.jpg',
      link: 'https://setword.vercel.app/',
      technologies: ['Next.js', 'JavaScript', 'API Integration', 'Tailwind CSS'],
    },
    {
      title: 'AndCode',
      description: 'Coding Challanges - Train your coding skills.',
      image: '/andcode.jpg',
      link: 'https://andcode.vercel.app/',
      technologies: ['Next.js', 'Node', 'API Integration', 'Tailwind CSS'],
    },
    {
      title: 'AndWatch',
      description: 'Platform for saving your favorite Movies/Animes.',
      image: '/andwatch.jpg',
      link: 'https://andwatch.vercel.app/',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Api Integration', 'Tailwind CSS'],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Head>
        <title>Projects - Luka Portfolio</title>
        <meta
          name="description"
          content="Projects by SetFodi, Junior Full Stack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section - Improved for mobile */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Colorful Gradient Background */}
          <motion.div
            style={{ scale }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-sky-500 to-emerald-600 dark:from-gray-900 dark:via-gray-700 dark:to-gray-600 opacity-30"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-4 md:mb-6 drop-shadow-lg"
            >
              My Innovative Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Explore a showcase of creative digital solutions that transform ideas into reality.
            </motion.p>
          </div>
          
          {/* Improved SVG Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg
              className="block w-full h-12 sm:h-16 text-white dark:text-black"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                fillOpacity="1"
                d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,64C960,64,1056,96,1152,128C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </section>

        {/* Projects Grid - Improved for mobile */}
        <section className="pt-16 pb-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter tabs for mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-12 overflow-x-auto scrollbar-hide flex justify-center"
            >
              <div className="inline-flex space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                <button className="px-4 py-2 text-sm font-medium rounded-full bg-blue-500 text-white">
                  All Projects
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Web Apps
                </button>
                <button className="px-4 py-2 text-sm font-medium rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                  Mobile
                </button>
              </div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={!isMobile ? { y: -10, scale: 1.03 } : {}}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative group"
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                >
                  <Tilt
                    tiltMaxAngleX={isMobile ? 0 : 5}
                    tiltMaxAngleY={isMobile ? 0 : 5}
                    glareEnable={!isMobile}
                    glareMaxOpacity={0.2}
                    className="h-full"
                  >
                    {/* Entire card is now inside the anchor */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
                    >
                      {/* Project Image */}
                      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                          whileHover={{ scale: 1.07 }}
                        />
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                        
                        {/* Technology badges on image */}
                        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 text-xs font-medium bg-black/70 text-white rounded-full backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-black/70 text-white rounded-full backdrop-blur-sm">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 h-full flex flex-col">
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                          {project.description}
                        </p>
                        
                        {/* Visit button always visible on mobile */}
                        <div className={`mt-auto ${isMobile ? 'block' : 'hidden group-hover:flex'} items-center justify-between`}>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            View Project
                          </span>
                          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>

                      {/* Hover Call-to-Action Overlay (desktop only) */}
                      {!isMobile && hoveredIndex === index && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.span
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                            whileHover={{ scale: 1.05, x: 5 }}
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                            Visit Site
                          </motion.span>
                        </motion.div>
                      )}
                    </a>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Looking for more?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">Check out my GitHub repository for additional projects and code samples.</p>
                <a 
                  href="https://github.com/SetFodi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Visit GitHub Profile
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
