'use client'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import CountUp from 'react-countup'

// Dynamically import the Particles component with SSR disabled
const Particles = dynamic(
  () => import('react-tsparticles').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    )
  }
)

const Home = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: 'Syncrolly',
      description: 'Real-time data synchronization platform',
      image: '/images/syncrolly.jpg',
      link: 'https://syncrolly.com',
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    },
    {
      title: 'Typingy',
      description: 'Interactive typing speed test platform',
      image: '/images/typingy.jpg',
      link: 'https://typingy.live',
      technologies: ['Next.js', 'Javascript', 'Tailwind CSS', 'MongoDB'],
    },
    {
      title: 'DevConnect',
      description: 'Developer collaboration network',
      image: '/images/devconnect.jpg',
      link: 'https://github.com/SetFodi/devconnect',
      technologies: ['React', 'Javascript', 'MongoDB', 'Tailwind CSS'],
    },
  ]

  const particlesInit = async (engine) => {
    const { loadSlim } = await import('tsparticles-slim')
    await loadSlim(engine)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Head>
        <title>Luka Partenadze - Full Stack Developer</title>
        <meta name="description" content="Portfolio of SetFodi, Junior Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {mounted && (
            <div className="absolute inset-0 z-0">
              <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                  particles: {
                    number: {
                      value: 50,
                      density: { enable: true, value_area: 800 },
                    },
                    move: {
                      enable: true,
                      speed: 1.5,
                      direction: 'none',
                      random: false,
                      straight: false,
                      out_mode: 'out',
                      bounce: false,
                    },
                    size: {
                      value: 1,
                      random: true,
                    },
                    opacity: {
                      value: 0.5,
                      random: false,
                    },
                    links: {
                      enable: true,
                      distance: 150,
                      color: '#3B82F6',
                      opacity: 0.3,
                      width: 1,
                    },
                  },
                  interactivity: {
                    events: {
                      onhover: { enable: true, mode: 'repulse' },
                    },
                  },
                }}
              />
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Luka Partenadze
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm a Junior Full Stack Developer passionate about building innovative and dynamic digital experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/SetFodi"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Explore My Work
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                My Stats
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A glimpse into my journey as a developer.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <CountUp end={8} duration={2} className="text-4xl font-bold text-blue-600" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">Projects Completed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <CountUp end={1} duration={2} className="text-4xl font-bold text-blue-600" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">Years of Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <CountUp end={3} duration={2} className="text-4xl font-bold text-blue-600" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">Happy Clients</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <CountUp end={250} duration={2} className="text-4xl font-bold text-blue-600" />
                <p className="mt-2 text-gray-600 dark:text-gray-300">Cups of Tea</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
