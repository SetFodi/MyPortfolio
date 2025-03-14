'use client'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300 flex flex-col">
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
        {/* Hero Section with Animated Background */}
        <section className="relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Left Column: Headline / Titles */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center md:text-left"
              >
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                  Junior Full Stack Web Developer
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                  Luka Partenadze
                </h1>
                <p className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                  Building intuitive, responsive, and scalable web applications with modern technologies and best practices.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="/projects"
                    className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    View Projects
                  </a>
                  <a
                    href="/contact"
                    className="inline-block bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-8 py-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Hero Image with decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex justify-center md:justify-end"
              >
                <div className="relative">
                  {/* Decorative elements behind the image */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
                  <div className="absolute -inset-2 bg-white dark:bg-gray-800 rounded-full"></div>
                  
                  {/* Profile image with reflection effect */}
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src="/images/profile.jpg"
                      alt="Luka Partenadze"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Shiny reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-30"></div>
                  </div>
                  
                  {/* Floating skill badges */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute -bottom-6 -left-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                  >
                    <SiReact className="text-3xl text-blue-500" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -top-2 -right-8 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                  >
                    <SiNextdotjs className="text-3xl text-black dark:text-white" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute top-1/2 -right-12 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                  >
                    <SiNodedotjs className="text-3xl text-green-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section with Categories */}
        <section className="py-20 px-4 relative overflow-hidden" id="skills">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
              {Array(100).fill(0).map((_, i) => (
                <div key={i} className="border-b border-r border-gray-300 dark:border-gray-700"></div>
              ))}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                Technical Toolkit
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Skills & Expertise</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                I leverage a range of modern technologies to build robust, maintainable, and
                visually appealing applications that scale.
              </p>
            </motion.div>

            {/* Categorized Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Frontend */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Frontend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillData.filter(skill => skill.category === 'frontend').map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-2"
                    >
                      <div className="text-2xl text-gray-700 dark:text-gray-300">
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
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Backend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillData.filter(skill => skill.category === 'backend').map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-2"
                    >
                      <div className="text-2xl text-gray-700 dark:text-gray-300">
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
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Database</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillData.filter(skill => skill.category === 'database').map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-2"
                    >
                      <div className="text-2xl text-gray-700 dark:text-gray-300">
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
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillData.filter(skill => skill.category === 'tools').map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 p-2"
                    >
                      <div className="text-2xl text-gray-700 dark:text-gray-300">
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
            
            {/* Summary statement */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-8"
            >
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto italic">
                "I specialize in creating responsive, user-friendly applications with clean code and modern architecture."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 bg-white dark:bg-gray-900" id="projects">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                My Work
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Featured Projects</h2>
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
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Tilt
                    glareEnable
                    glareColor="#ffffff"
                    glareMaxOpacity={0.15}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    scale={1.03}
                    transitionSpeed={1500}
                    className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="w-full h-56 relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
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
                className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="font-medium">View All Projects</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Looking for a developer who can turn your ideas into reality? I'm currently available for freelance projects and collaborations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
