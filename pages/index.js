'use client'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import CountUp from 'react-countup'
import { LightBulbIcon, CodeBracketIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import Tilt from 'react-parallax-tilt'

const Particles = dynamic(
  () => import('react-tsparticles').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    )
  }
)

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

const Home = () => {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  useEffect(() => setMounted(true), [])

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
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-500">
      <Head>
        <title>Luka Partenadze - Full Stack Developer</title>
        <meta name="description" content="Portfolio of SetFodi, Junior Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ scale }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 opacity-20"
          />

          {mounted && (
            <div className="absolute inset-0 z-0">
              <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                  particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: '#3B82F6' },
                    move: {
                      enable: true,
                      speed: 1.5,
                      direction: 'none',
                      out_mode: 'out',
                      bounce: false,
                    },
                    size: { value: 1, random: true },
                    opacity: { value: 0.5, random: false },
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
                      onclick: { enable: true, mode: 'push' }
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
            <motion.div
              variants={floatingVariants}
              animate="float"
              className="inline-block mb-8"
            >
              {/* Terminal style icon */}
              <LightBulbIcon className="w-24 h-24 text-yellow-400 animate-pulse" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Luka Partenadze
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Crafting digital experiences through <span className="font-semibold text-purple-600 dark:text-purple-400">innovative code</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">creative solutions</span>
            </motion.p>

            <div className="flex justify-center space-x-4">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/SetFodi"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  Explore My Work
                </motion.a>
              </Tilt>
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="relative">
          <svg
            className="w-full h-12 text-gray-50 dark:text-black"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,122.7C672,107,768,85,864,101.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
                Development Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Milestones that mark my growth as a developer
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 8, label: 'Projects Completed' },
                { value: 1, label: 'Years Experience' },
                { value: 3, label: 'Happy Clients' },
                { value: 250, label: 'Cups of Tea' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-blue-500/10 blur-2xl group-hover:bg-purple-500/10 transition-colors" />
                    <CountUp
                      end={item.value}
                      duration={2}
                      className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="relative">
          <svg
            className="w-full h-12 text-gray-50 dark:text-black"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,96L48,106.7C96,117,192,139,288,133.3C384,128,480,96,576,101.3C672,107,768,149,864,154.7C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Projects Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
            >
              Featured Innovations
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Tilt glareEnable tiltMaxAngleX={5} tiltMaxAngleY={5}>
                    <ProjectCard
                      {...project}
                      className="hover:shadow-2xl transition-shadow duration-300"
                    />
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl"
            >
              <CommandLineIcon className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <p className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
                "I believe in <span className="text-blue-600">writing clean code</span> that not only solves problems but
                <span className="text-purple-600"> inspires innovation</span> and
                <span className="text-pink-600"> delivers exceptional experiences</span>."
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
