'use client'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Tilt from 'react-parallax-tilt'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6 
    } 
  },
}

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    } 
  },
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeTech, setActiveTech] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [filteredCount, setFilteredCount] = useState(0)
  const projectsRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

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
      technologies: ['React', 'JavaScript', 'WebSocket', 'MongoDB', 'Tailwind CSS'],
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
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'API Integration', 'Tailwind CSS'],
    },
    {
      title: 'Furtniture',
      description: 'Furniture Shop Website',
      image: '/furniture.jpeg',
      link: 'https://github.com/SetFodi/furniture-store',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    },
  ]

  // Generate technology list for filter
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].sort()

  // Update filtered count when filter changes
  useEffect(() => {
    const filtered = projects.filter(project => {
      if (activeTech === null) return true;
      return project.technologies.some(tech => 
        tech.toLowerCase().includes(activeTech.toLowerCase()) || 
        activeTech.toLowerCase().includes(tech.toLowerCase())
      );
    });
    setFilteredCount(filtered.length);
  }, [activeTech, projects])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black transition-colors duration-500">
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
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          {/* Simple Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-pink-500 opacity-70 dark:opacity-50"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h1 className="font-extrabold text-white mb-6 md:mb-8 inline-block">
              <span className="block text-5xl sm:text-6xl md:text-7xl">My Innovative Projects</span>
              <div className="h-1 w-full bg-white mt-2 rounded-full"></div>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-white max-w-3xl mx-auto font-light leading-relaxed">
              Explore a showcase of creative digital solutions that transform ideas into reality.
            </p>
            
            {/* Scroll indicator */}
            <div className="mt-12 animate-bounce cursor-pointer" onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}>
              <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 sm:h-24 text-white dark:text-gray-950">
              <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,112C672,117,768,171,864,181.3C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Technology Filter Section */}
        <section ref={projectsRef} className="pt-8 pb-4 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Filter by Technology</h2>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setActiveTech(null)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTech === null
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300'
                  }`}
                >
                  All
                </button>
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setActiveTech(tech)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTech === tech
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pt-4 pb-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-500 text-sm mb-4">
              Showing {filteredCount} {filteredCount === 1 ? 'project' : 'projects'} 
              {activeTech ? ` with "${activeTech}" technology` : ''}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects
                .filter(project => {
                  if (activeTech === null) {
                    return true;
                  }
                  return project.technologies.some(tech => 
                    tech.toLowerCase().includes(activeTech.toLowerCase()) || 
                    activeTech.toLowerCase().includes(tech.toLowerCase())
                  );
                })
                .map((project, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  >
                    <Tilt
                      tiltMaxAngleX={isMobile ? 0 : 7}
                      tiltMaxAngleY={isMobile ? 0 : 7}
                      glareEnable={!isMobile}
                      glareMaxOpacity={0.15}
                      glareColor="white"
                      glarePosition="all"
                      glareBorderRadius="16px"
                      className="h-full"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl dark:shadow-gray-900/30 dark:hover:shadow-indigo-500/10 border border-gray-100 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-800/50 transition-all duration-300 transform"
                      >
                        {/* Project Image */}
                        <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
                          <div className="h-full w-full">
                            <div 
                              className="w-full h-full bg-cover bg-center transition-transform duration-700"
                              style={{ 
                                backgroundImage: `url(${project.image})`,
                                transform: hoveredIndex === index ? 'scale(1.08)' : 'scale(1)',
                                transition: 'transform 0.7s cubic-bezier(0.33, 1, 0.68, 1)'
                              }}
                            />
                          </div>
                          
                          {/* Gradient overlay */}
                          <div 
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" 
                          />
                          
                          {/* Technology badges */}
                          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className={`px-2.5 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                                  tech === activeTech
                                    ? 'bg-indigo-600/90 text-white'
                                    : 'bg-black/70 text-white'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span
                                className="px-2.5 py-1 text-xs font-medium bg-black/70 text-white rounded-full backdrop-blur-sm"
                              >
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 h-full flex flex-col">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
                            {project.description}
                          </p>
                          
                          {/* Visit button */}
                          <div className={`mt-auto ${isMobile ? 'flex' : 'hidden group-hover:flex'} items-center justify-between transition-opacity duration-300`}>
                            <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline decoration-2 underline-offset-2">
                              View Project
                            </span>
                            <div>
                              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            </div>
                          </div>
                        </div>

                        {/* Hover overlay */}
                        {!isMobile && (
                          <div
                            className="absolute inset-0 flex items-center justify-center bg-indigo-700/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                            style={{
                              opacity: hoveredIndex === index ? 1 : 0
                            }}
                          >
                            <div className="relative px-6 py-3 bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 border border-indigo-200 dark:border-indigo-800">
                              <span>Visit Site</span>
                              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                              <div className="absolute -inset-[3px] rounded-xl bg-indigo-400/20 -z-10"></div>
                            </div>
                          </div>
                        )}
                      </a>
                    </Tilt>
                  </div>
                ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="max-w-3xl mx-auto rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl">
                  <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 p-8 sm:p-10 rounded-[calc(1.5rem-2px)]">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                      Looking for more?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-8">
                      Check out my GitHub repository for additional projects and code samples.
                    </p>
                    
                    <a 
                      href="https://github.com/SetFodi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-600/30"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>Visit GitHub Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* CSS animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  )
}