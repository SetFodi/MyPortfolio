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
  { name: 'C#', icon: <SiDotnet />, category: 'backend' }, // Assuming SiDotnet represents C#
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
    image: '/images/syncrolly.jpg', // Make sure these paths are correct
    link: 'https://syncrolly.com',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
  },
  {
    title: 'Typingy',
    description: 'Interactive typing speed test platform featuring customizable tests, real-time analytics, and competitive leaderboards.',
    image: '/images/typingy.jpg', // Make sure these paths are correct
    link: 'https://typingy.live',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
  },
  {
    title: 'DevConnect',
    description: 'Developer collaboration network designed to connect programmers for pair programming, mentorship, and project collaboration.',
    image: '/images/devconnect.jpg', // Make sure these paths are correct
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
        staggerChildren: 0.1,
        delayChildren: 0.2 // Enhancement: Slight delay for children
      }
    }
  }
  
  return (
    // Enhancement: Added ease-in-out to main transition
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
        <section className="relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
            {/* Enhancement: Larger, softer blurs with subtle animation */}
            <motion.div 
              className="absolute top-10 left-5 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-500 blur-[100px] animate-pulse"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-10 right-5 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-purple-500 blur-[100px] animate-pulse"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
          </div>
          
          {/* Enhancement: Increased vertical padding */}
          <div className="max-w-7xl mx-auto px-4 py-28 sm:py-36 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16"> {/* Enhancement: Increased gap */}
              {/* Left Column: Headline / Titles */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8, ease: "easeOut" }} // Enhancement: Added ease
                className="flex-1 text-center md:text-left"
              >
                <motion.span 
                  className="inline-block px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-5" // Enhancement: Adjusted padding/size/colors
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Junior Full Stack Web Developer
                </motion.span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-300 dark:to-gray-400"> {/* Enhancement: Adjusted gradient */}
                  Luka Partenadze
                </h1>
                <p className="text-lg sm:text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"> {/* Enhancement: Increased bottom margin */}
                  Building intuitive, responsive, and scalable web applications with modern technologies and best practices.
                </p>
                <motion.div 
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }} // Enhancement: Delay container animation
                >
                  <motion.a
                    href="/projects" // Consider linking to #projects if it's on the same page
                    variants={fadeIn}
                    className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out" // Enhancement: Adjusted padding/font-weight
                  >
                    View Projects
                  </motion.a>
                  <motion.a
                    href="/contact" // Consider linking to a contact section or page
                    variants={fadeIn}
                    className="inline-block bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out" // Enhancement: Adjusted padding/font-weight/hover
                  >
                    Get in Touch
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Right Column: Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }} // Enhancement: Added ease
                className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
              >
                <div className="relative group"> {/* Enhancement: Added group for potential hover effects on children */}
                  {/* Decorative elements behind the image */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-25 animate-pulse duration-[4000ms]"></div> {/* Enhancement: Adjusted blur/opacity/duration */}
                  <div className="absolute -inset-2 bg-white dark:bg-gray-800 rounded-full shadow-inner"></div> {/* Enhancement: Added subtle inner shadow */}
                  
                  {/* Profile image */}
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"> {/* Enhancement: Added border */}
                    <Image
                      src="/images/profile.jpg" // Make sure this path is correct
                      alt="Luka Partenadze"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 18rem, (max-width: 1024px) 20rem, 24rem" // Enhancement: Added sizes prop
                    />
                    {/* Shiny reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-40 pointer-events-none"></div> {/* Enhancement: Adjusted opacity */}
                  </div>
                  
                  {/* Floating skill badges */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 150 }} // Enhancement: Spring animation
                    className="absolute -bottom-5 -left-8 sm:-bottom-6 sm:-left-10 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-600" // Enhancement: Adjusted position/dark bg/border
                  >
                    <SiReact className="text-3xl text-blue-500" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 150 }} // Enhancement: Spring animation
                    className="absolute -top-1 -right-6 sm:-top-2 sm:-right-8 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-600" // Enhancement: Adjusted position/dark bg/border
                  >
                    <SiNextdotjs className="text-3xl text-black dark:text-white" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 150 }} // Enhancement: Spring animation
                    className="absolute top-1/2 -right-10 sm:-right-12 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-600" // Enhancement: Adjusted position/dark bg/border
                  >
                    <SiNodedotjs className="text-3xl text-green-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        {/* Enhancement: Increased vertical padding */}
        <section className="py-24 px-4 relative overflow-hidden bg-gray-100 dark:bg-gray-800/50" id="skills"> 
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]">
            <div 
              className="absolute inset-0 bg-[url('/path/to/subtle-pattern.svg')] bg-repeat" // Enhancement: Example using a subtle SVG pattern (replace path)
              style={{ backgroundSize: '30px 30px' }} // Adjust size as needed
            ></div>
            {/* Fallback grid pattern if SVG is not used */}
            {/* <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
              {Array(100).fill(0).map((_, i) => (
                <div key={i} className="border-b border-r border-gray-300 dark:border-gray-700"></div>
              ))}
            </div> */}
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Enhancement: Trigger animation sooner
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-5"> {/* Enhancement: Consistent badge style */}
                Technical Toolkit
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Skills & Expertise</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed"> {/* Enhancement: Added leading-relaxed */}
                I leverage a range of modern technologies to build robust, maintainable, and
                visually appealing applications that scale.
              </p>
            </motion.div>

            {/* Categorized Skills */}
            {/* Enhancement: Increased gap */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"> 
              {/* Frontend */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                // Enhancement: Added subtle border, increased padding, smoother transition
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent hover:border-blue-200 dark:hover:border-gray-700 transition-all duration-300 ease-in-out" 
              >
                <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Frontend</h3> {/* Enhancement: Adjusted font-weight/margin */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-5"> {/* Enhancement: Adjusted gap */}
                  {skillData.filter(skill => skill.category === 'frontend').map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05, x: 3 }} // Enhancement: Added slight x-shift on hover
                      className="flex items-center gap-3 p-1" // Enhancement: Adjusted gap/padding
                    >
                      {/* Enhancement: Increased icon size */}
                      <div className="text-3xl text-gray-600 dark:text-gray-400"> 
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm"> {/* Enhancement: Adjusted text size */}
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
                // Enhancement: Added subtle border, increased padding, smoother transition
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent hover:border-green-200 dark:hover:border-gray-700 transition-all duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold mb-6 text-green-600 dark:text-green-400">Backend</h3> {/* Enhancement: Adjusted font-weight/margin */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-5"> {/* Enhancement: Adjusted gap */}
                  {skillData.filter(skill => skill.category === 'backend').map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05, x: 3 }} // Enhancement: Added slight x-shift on hover
                      className="flex items-center gap-3 p-1" // Enhancement: Adjusted gap/padding
                    >
                      {/* Enhancement: Increased icon size */}
                      <div className="text-3xl text-gray-600 dark:text-gray-400">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm"> {/* Enhancement: Adjusted text size */}
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
                // Enhancement: Added subtle border, increased padding, smoother transition
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent hover:border-purple-200 dark:hover:border-gray-700 transition-all duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold mb-6 text-purple-600 dark:text-purple-400">Database</h3> {/* Enhancement: Adjusted font-weight/margin */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-5"> {/* Enhancement: Adjusted gap */}
                  {skillData.filter(skill => skill.category === 'database').map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05, x: 3 }} // Enhancement: Added slight x-shift on hover
                      className="flex items-center gap-3 p-1" // Enhancement: Adjusted gap/padding
                    >
                      {/* Enhancement: Increased icon size */}
                      <div className="text-3xl text-gray-600 dark:text-gray-400">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm"> {/* Enhancement: Adjusted text size */}
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
                // Enhancement: Added subtle border, increased padding, smoother transition
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-8 shadow-xl border border-transparent hover:border-orange-200 dark:hover:border-gray-700 transition-all duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold mb-6 text-orange-600 dark:text-orange-400">Tools</h3> {/* Enhancement: Adjusted font-weight/margin */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-5"> {/* Enhancement: Adjusted gap */}
                  {skillData.filter(skill => skill.category === 'tools').map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn}
                      whileHover={{ scale: 1.05, x: 3 }} // Enhancement: Added slight x-shift on hover
                      className="flex items-center gap-3 p-1" // Enhancement: Adjusted gap/padding
                    >
                      {/* Enhancement: Increased icon size */}
                      <div className="text-3xl text-gray-600 dark:text-gray-400">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm"> {/* Enhancement: Adjusted text size */}
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
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-center mt-12" // Enhancement: Increased margin-top
            >
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto italic text-lg"> {/* Enhancement: Slightly larger italic text */}
                "I specialize in creating responsive, user-friendly applications with clean code and modern architecture."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        {/* Enhancement: Increased vertical padding */}
        <section className="py-24 px-4 bg-white dark:bg-gray-900" id="projects"> 
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Enhancement: Trigger animation sooner
              variants={fadeIn}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-5"> {/* Enhancement: Consistent badge style */}
                My Work
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Featured Projects</h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed"> {/* Enhancement: Added leading-relaxed */}
                Explore a selection of my recent work showcasing my technical skills and problem-solving approach.
              </p>
            </motion.div>
            
            {/* Enhancement: Increased gap */}
            <div className="grid gap-12 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3"> 
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }} // Enhancement: Increased initial y offset
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }} // Enhancement: Adjusted delay/ease
                >
                  <Tilt
                    glareEnable
                    glareColor="#ffffff"
                    glareMaxOpacity={0.1} // Enhancement: More subtle glare
                    tiltMaxAngleX={8} // Enhancement: Reduced tilt angle
                    tiltMaxAngleY={8} // Enhancement: Reduced tilt angle
                    scale={1.02} // Enhancement: Slightly reduced scale effect
                    transitionSpeed={2000} // Enhancement: Slower transition
                    // Enhancement: Added h-full, subtle border on hover
                    className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700/50 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 ease-in-out group" 
                  >
                    <div className="w-full h-56 relative overflow-hidden border-b border-gray-100 dark:border-gray-700/50"> {/* Enhancement: Added border-b */}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Enhancement: Slower/subtler scale
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Enhancement: Added sizes prop
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                    </div>
                    {/* Enhancement: Increased padding */}
                    <div className="p-8 flex flex-col h-[calc(100%-14rem)]"> {/* Enhancement: Flex col to push link down */}
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 ease-in-out">{project.title}</h3> {/* Enhancement: Adjusted font-weight */}
                      <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed flex-grow"> {/* Enhancement: Adjusted dark color, margin, leading, flex-grow */}
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            // Enhancement: Refined tag styling
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
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 ease-in-out mt-auto" // Enhancement: mt-auto to push to bottom
                      >
                        View Project
                        {/* Enhancement: Slightly larger arrow, smoother transition */}
                        <svg className="ml-1.5 w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }} // Enhancement: Adjusted delay
              className="text-center mt-20" // Enhancement: Increased margin-top
            >
              <a
                href="/projects" // Link to a dedicated projects page if available
                // Enhancement: Consistent button styling with Hero section
                className="inline-flex items-center px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out" 
              >
                <span>View All Projects</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> {/* Enhancement: Slightly different arrow */}
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        {/* Enhancement: Increased vertical padding */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"> 
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }} // Enhancement: Trigger animation sooner
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
              <p className="text-lg sm:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed"> {/* Enhancement: Adjusted size/leading */}
                Looking for a developer who can turn your ideas into reality? I'm currently available for freelance projects and collaborations.
              </p>
              <div className="flex flex-wrap justify-center gap-5"> {/* Enhancement: Increased gap */}
                <a
                  href="/contact" // Link to contact page or section
                  // Enhancement: Consistent styling, added font-semibold
                  className="px-8 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out" 
                >
                  Contact Me
                </a>
                <a
                  href="/about" // Link to about page or section
                  // Enhancement: Consistent styling, added font-semibold
                  className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-semibold transform hover:-translate-y-1 transition-all duration-300 ease-in-out" 
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

