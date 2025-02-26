'use client'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
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
  visible: { opacity: 1, y: 0, scale: 1 },
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

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
      image: '/AndCode.jpg',
      link: 'https://andcode.vercel.app/',
      technologies: ['Next.js', 'Node', 'API Integration', 'Tailwind CSS'],
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <Head>
        <title>Projects - Luka Portfolio</title>
        <meta
          name="description"
          content="Projects by SetFodi, Junior Full Stack Developer"
        />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Colorful Gradient Background */}
          <motion.div
            style={{ scale }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-800 via-sky-500 to-emerald-600 dark:from-gray-900 dark:via-gray-700 dark:to-gray-600 opacity-30"
          />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-6 drop-shadow-lg"
            >
              My Innovative Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
            >
              Explore a showcase of creative digital solutions that transform ideas into reality.
            </motion.p>
          </div>
          {/* SVG Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full leading-[0]">
            <svg
              className="block w-full h-16 text-white dark:text-black"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                fillOpacity="1"
                d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,64C960,64,1056,96,1152,128C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              />
            </svg>
          </div>
        </section>

{/* Projects Grid */}
<section className="pt-20 pb-20 bg-white dark:bg-black">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ y: -10, scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable
            glareMaxOpacity={0.2}
          >
            {/* Entire card is now inside the anchor */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl overflow-hidden shadow-2xl border border-transparent hover:border-blue-400 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.07 }}
                />
                {/* Hover Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                />
              </div>
              {/* Content Area */}
              <div className="p-6 bg-white dark:bg-gray-900">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Call-to-Action Overlay */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
  </div>
</section>

      </main>

      <Footer />
    </div>
  )
}
