'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiLaravel,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit
} from 'react-icons/si'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
  { name: 'Git', icon: <SiGit />, category: 'tools' }
]

const projects = [
  {
    title: 'Syncrolly',
    description:
      'Real-time data synchronization platform built for seamless integration with existing systems and high-performance data transfer.',
    image: '/images/syncrolly.jpg',
    link: 'https://syncrolly.com',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB']
  },
  {
    title: 'Typingy',
    description:
      'Interactive typing speed test platform featuring customizable tests, real-time analytics, and competitive leaderboards.',
    image: '/images/typingy.jpg',
    link: 'https://typingy.live',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB']
  },
  {
    title: 'DevConnect',
    description:
      'Developer collaboration network designed to connect programmers for pair programming, mentorship, and project collaboration.',
    image: '/images/devconnect.jpg',
    link: 'https://github.com/SetFodi/devconnect',
    technologies: ['React', 'JavaScript', 'MongoDB', 'Tailwind CSS']
  }
]

// tsParticles init + options
const particlesInit = async main => {
  await loadFull(main)
}
const particlesOptions = {
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: 'repulse' } }
  },
  particles: {
    color: { value: ['#6EE7B7', '#3B82F6', '#E879F9'] },
    links: { enable: true, distance: 120, color: '#aaa', opacity: 0.4 },
    move: { enable: true, speed: 1.5 },
    size: { value: { min: 1, max: 4 } }
  }
}

// SVG Wave separator
const Wave = ({ flipY = false }) => (
  <svg
    className={`${flipY ? 'rotate-180' : ''} w-full h-20`}
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,32L40,42.7C80,53,160,75,240,85.3C320,96,400,96,480,85.3C560,75,640,53,720,48C800,43,880,53,960,90.7C1040,128,1120,192,1200,197.3C1280,203,1360,149,1400,122.7L1440,96L1440,0L0,0Z"
      fill="currentColor"
    />
  </svg>
)

export default function Home() {
  const { scrollY } = useScroll()
  const yHero = useTransform(scrollY, [0, 500], [0, 50])
  const ySkills = useTransform(scrollY, [0, 500], [0, 100])

  const [text] = useTypewriter({
    words: [
      'Full Stack Developer',
      'React Enthusiast',
      'Next.js Ninja',
      'Node.js Lover'
    ],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500
  })

  return (
    <>
      <Head>
        <title>Luka Partenadze | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Luka Partenadze, a passionate Web Developer."
        />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          @keyframes hue-rotate {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          .animate-hue {
            animation: hue-rotate 10s linear infinite;
          }
          .mask-blob {
            clip-path: url('#mask-blob');
          }
          .btn-liquid {
            position: relative;
            overflow: hidden;
          }
          .btn-liquid::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            transition: transform 0.5s ease;
          }
          .btn-liquid:hover::after {
            transform: translate(-50%, -50%) scale(1);
          }
        `}</style>
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="mask-blob" clipPathUnits="objectBoundingBox">
              <path
                d="M0.32,0.13 C0.47,0.07 0.66,0.05 0.78,0.17 C0.92,0.29
                   0.88,0.52 0.75,0.66 C0.64,0.78 0.45,0.83 0.31,0.74
                   C0.17,0.65 0.05,0.47 0.10,0.31 C0.15,0.16 0.17,0.19
                   0.32,0.13 Z"
              />
            </clipPath>
          </defs>
        </svg>
      </Head>

      <div className="relative">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100
                        dark:from-gray-900 dark:to-gray-800 text-gray-800
                        dark:text-gray-100 transition-colors flex flex-col
                        relative z-10">
          <Navbar />

          <motion.section
            style={{ y: yHero }}
            className="relative overflow-hidden pt-28 pb-36 px-4"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row
                            items-center gap-16">
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-4 py-1.5 text-xs font-medium
                                  text-blue-700 bg-blue-100 rounded-full mb-5
                                  shadow-sm">
                  {text}
                  <Cursor cursorStyle="|" />
                </span>
                <h1 className="text-7xl font-extrabold mb-6 bg-gradient-to-r
                              from-blue-500 via-purple-500 to-pink-500
                              bg-clip-text text-transparent animate-hue">
                  Luka Partenadze
                </h1>
                <p className="text-lg mb-10 max-w-xl leading-relaxed">
                  Building intuitive, responsive, and scalable web
                  applications with modern technologies and best practices.
                </p>
                <div className="flex flex-wrap gap-4 justify-center
                                md:justify-start">
                  <a
                    href="/projects"
                    className="btn-liquid inline-block bg-blue-600
                                hover:bg-blue-700 text-white px-8 py-3
                                rounded-lg font-semibold shadow-lg
                                transition-all duration-300"
                  >
                    View Projects
                  </a>
                  <a
                    href="/contact"
                    className="btn-liquid inline-block bg-white text-blue-600
                                border border-blue-600 px-8 py-3 rounded-lg
                                font-semibold transition-all duration-300
                                hover:bg-gray-50"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r
                                  from-blue-500 to-purple-500 rounded-full
                                  blur-xl opacity-30"></div>
                  <div className="absolute -inset-2 bg-white
                                  dark:bg-gray-800 rounded-full shadow-inner"></div>
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80
                                  md:w-96 md:h-96 rounded-full overflow-hidden
                                  shadow-2xl border-4 border-white
                                  dark:border-gray-800">
                    <Image
                      src="/images/profile.jpg"
                      alt="Luka Partenadze"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 18rem,
                             (max-width: 1024px) 20rem, 24rem"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr
                                    from-white/0 via-white/30 to-white/0
                                    opacity-30 group-hover:opacity-40
                                    transition-opacity duration-300"></div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 150
                    }}
                    className="absolute -bottom-5 -left-8 bg-white
                                dark:bg-gray-700 rounded-full p-3 shadow-lg
                                border border-gray-200 dark:border-gray-600
                                mask-blob"
                  >
                    <SiReact className="text-3xl text-blue-500" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 150
                    }}
                    className="absolute -top-1 -right-6 bg-white
                                dark:bg-gray-700 rounded-full p-3 shadow-lg
                                border border-gray-200 dark:border-gray-600
                                mask-blob"
                  >
                    <SiNextdotjs className="text-3xl text-black" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.2,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 150
                    }}
                    className="absolute top-1/2 -right-10 transform
                                -translate-y-1/2 bg-white dark:bg-gray-700
                                rounded-full p-3 shadow-lg border
                                border-gray-200 dark:border-gray-600
                                mask-blob"
                  >
                    <SiNodedotjs className="text-3xl text-green-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <div className="text-gray-100 dark:text-gray-900">
            <Wave flipY />
          </div>

          <motion.section
            style={{ y: ySkills }}
            className="py-24 px-4 bg-gray-100 dark:bg-gray-800/50
                        relative overflow-hidden"
            id="skills"
          >
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]">
              <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                {Array(400)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="border-b border-r border-gray-300
                                 dark:border-gray-700"
                    ></div>
                  ))}
              </div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-1.5 text-xs font-medium
                                  text-blue-700 bg-blue-100 rounded-full
                                  mb-5 shadow-sm dark:text-blue-300
                                  dark:bg-blue-900/40">
                  Technical Toolkit
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6
                              bg-clip-text text-transparent bg-gradient-to-r
                              from-blue-500 to-purple-500 animate-hue">
                  Skills & Expertise
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600
                              dark:text-gray-300 text-lg leading-relaxed">
                  I leverage a range of modern technologies to build
                  robust, maintainable, and visually appealing applications
                  that scale.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                              gap-10 mb-20">
                {['frontend', 'backend', 'database', 'tools'].map(
                  (cat, idx) => {
                    const colors = {
                      frontend: 'blue',
                      backend: 'green',
                      database: 'purple',
                      tools: 'orange'
                    }
                    return (
                      <motion.div
                        key={cat}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: idx * 0.1,
                          duration: 0.6,
                          ease: 'easeOut'
                        }}
                        className={`bg-white/80 dark:bg-gray-800/80
                                    backdrop-blur-md rounded-xl p-8
                                    shadow-xl border border-transparent
                                    hover:border-${colors[cat]}-200
                                    dark:hover:border-gray-700
                                    transition-all duration-300`}
                      >
                        <h3
                          className={`text-xl font-semibold mb-6 text-${
                            colors[cat]
                          }-600 dark:text-${colors[cat]}-400 flex items-center`}
                        >
                          <span
                            className={`bg-${colors[cat]}-100 dark:bg-${colors[cat]}-900/40
                                        p-2 rounded-lg mr-3`}
                          >
                            {
                              {
                                frontend: <SiReact />,
                                backend: <SiNodedotjs />,
                                database: <SiMongodb />,
                                tools: <SiGit />
                              }[cat]
                            }
                          </span>
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                          {skillData
                            .filter(s => s.category === cat)
                            .map(skill => (
                              <motion.div
                                key={skill.name}
                                whileHover={{ scale: 1.05, x: 3 }}
                                className="flex items-center gap-3 p-1.5
                                            rounded-lg hover:bg-gray-50
                                            dark:hover:bg-gray-800/80
                                            transition-colors duration-200"
                              >
                                <div className="text-2xl text-gray-600
                                                dark:text-gray-400">
                                  {skill.icon}
                                </div>
                                <span className="font-medium text-gray-800
                                                 dark:text-gray-200 text-sm">
                                  {skill.name}
                                </span>
                              </motion.div>
                            ))}
                        </div>
                      </motion.div>
                    )
                  }
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="text-center mt-12"
              >
                <div className="py-8 px-6 bg-white/50 dark:bg-gray-800/30
                                backdrop-blur-sm rounded-xl shadow-md border
                                border-gray-100 dark:border-gray-700/50
                                max-w-3xl mx-auto">
                  <p className="text-gray-600 dark:text-gray-400 text-lg
                                italic leading-relaxed">
                    "I specialize in creating responsive, user-friendly
                    applications with clean code and modern architecture."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <div className="text-white bg-white dark:bg-gray-900">
            <Wave />
          </div>

          <motion.section
            className="py-24 px-4 bg-white dark:bg-gray-900"
            id="projects"
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-1.5 text-xs
                                  sm:text-sm font-medium text-blue-700
                                  bg-blue-100 dark:bg-blue-900/40 rounded-full
                                  mb-5 shadow-sm dark:text-blue-300">
                  My Work
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6
                              bg-clip-text text-transparent
                              bg-gradient-to-r from-blue-500 to-purple-500
                              animate-hue">
                  Featured Projects
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600
                              dark:text-gray-300 text-lg leading-relaxed">
                  Explore a selection of my recent work showcasing my technical
                  skills and problem-solving approach.
                </p>
              </motion.div>

              <div className="grid gap-12 lg:gap-10 sm:grid-cols-2
                              lg:grid-cols-3">
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.15,
                      duration: 0.6,
                      ease: 'easeOut'
                    }}
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
                      className="h-full bg-white dark:bg-gray-800
                                  rounded-2xl overflow-hidden shadow-xl
                                  hover:shadow-2xl border border-gray-100
                                  dark:border-gray-700/50 hover:border-gray-200
                                  dark:hover:border-gray-700 transition-all
                                  duration-300 ease-in-out group mask-blob"
                    >
                      <div className="w-full h-56 relative overflow-hidden
                                      border-b border-gray-100
                                      dark:border-gray-700/50">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform
                                      duration-700 ease-in-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw,
                                 (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t
                                        from-black/60 via-black/20 to-transparent
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300
                                        ease-in-out flex items-end">
                          <div className="p-6 w-full">
                            <motion.span
                              initial={{ opacity: 0, y: 20 }}
                              whileHover={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-white font-medium text-sm
                                          opacity-0 group-hover:opacity-100
                                          transition-opacity duration-300"
                            >
                              View details
                            </motion.span>
                          </div>
                        </div>
                      </div>

                      <div className="p-8 flex flex-col h-[calc(100%-14rem)]">
                        <h3 className="text-xl font-semibold mb-3
                                       group-hover:text-blue-600
                                       dark:group-hover:text-blue-400
                                       transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400
                                      mb-5 text-sm leading-relaxed flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 text-[0.7rem] font-medium
                                          bg-blue-50 dark:bg-gray-700/50
                                          text-blue-700 dark:text-blue-300
                                          rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600
                                      dark:text-blue-400 font-medium text-sm
                                      hover:text-blue-800 dark:hover:text-blue-300
                                      transition-colors duration-200 ease-in-out
                                      mt-auto group/link"
                        >
                          View Project
                          <svg
                            className="ml-1.5 w-4 h-4 transition-transform
                                       duration-300 ease-in-out
                                       group-hover/link:translate-x-1.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
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
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                className="text-center mt-20"
              >
                <a
                  href="/projects"
                  className="inline-flex items-center px-8 py-3 text-white
                              bg-blue-600 hover:bg-blue-700 dark:bg-blue-500
                              dark:hover:bg-blue-600 rounded-lg font-semibold
                              shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                              transition-all duration-300 ease-in-out"
                >
                  View All Projects
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.section>

          <div className="text-gray-100 dark:text-gray-900">
            <Wave flipY />
          </div>

          <section className="py-24 px-4 bg-gradient-to-r
                              from-blue-600 via-indigo-600 to-purple-700
                              text-white relative overflow-hidden">
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
                      opacity: Math.random() * 0.3
                    }}
                    animate={{
                      y: [0, Math.random() * -100 - 50],
                      opacity: [0.1, 0]
                    }}
                    transition={{
                      duration: Math.random() * 10 + 15,
                      repeat: Infinity,
                      ease: 'linear'
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
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-lg sm:text-xl opacity-90 mb-10
                              max-w-2xl mx-auto leading-relaxed">
                  Looking for a developer who can turn your ideas into
                  reality? I'm currently available for freelance projects and
                  collaborations.
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-white text-blue-700
                                hover:bg-gray-100 rounded-lg font-semibold
                                shadow-lg hover:shadow-xl transform hover:-translate-y-1
                                transition-all duration-300 ease-in-out"
                  >
                    Contact Me
                  </motion.a>
                  <motion.a
                    href="/about"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-transparent border-2 border-white
                                hover:bg-white/10 rounded-lg font-semibold
                                transform hover:-translate-y-1 transition-all
                                duration-300 ease-in-out"
                  >
                    Learn More About Me
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  )
}
