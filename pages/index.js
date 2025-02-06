'use client'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt' // <-- Added for 3D tilt effect
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
} from 'react-icons/si'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const skillData = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'Angular', icon: <SiAngular /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'PHP', icon: <SiPhp /> },
  { name: 'Laravel', icon: <SiLaravel /> },
  { name: 'C#', icon: <SiDotnet /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
]

// Example projects
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
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
  },
  {
    title: 'DevConnect',
    description: 'Developer collaboration network',
    image: '/images/devconnect.jpg',
    link: 'https://github.com/SetFodi/devconnect',
    technologies: ['React', 'JavaScript', 'MongoDB', 'Tailwind CSS'],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 flex flex-col">
      <Head>
        <title>Luka Partenadze - Junior Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Luka Partenadze, Junior Web Developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            {/* Left Column: Headline / Titles */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                Luka Partenadze
              </h1>
              <p className="text-lg sm:text-xl mb-6 text-gray-500 dark:text-gray-300 max-w-xl">
                Junior Web Developer passionate about crafting modern, user-centric
                digital experiences.
              </p>
              {/* Updated the href to /projects */}
              <a
                href="/projects"
                className="inline-block bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 px-6 py-3 rounded-md font-medium hover:shadow-lg transition-shadow"
              >
                View Projects
              </a>
            </motion.div>

            {/* Right Column: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Luka Partenadze"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-gray-100 dark:bg-gray-800 py-16" id="skills">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-8"
            >
              Skills & Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10"
            >
              I leverage a range of modern technologies to build robust, maintainable, and
              visually appealing applications.
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 max-w-4xl mx-auto">
              {skillData.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-md shadow hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white dark:bg-gray-900 py-16" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold mb-8 text-center"
            >
              Highlighted Projects
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Wrap each project card with Parallax Tilt for fancy 3D hover */}
                  <Tilt
                    glareEnable
                    glareColor="#ffffff"
                    glareMaxOpacity={0.2}
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-full h-44 relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                      >
                        Visit Project &rarr;
                      </a>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
