import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import FlightButton from '../components/FlightButton'
import { projects } from '../data/homeData'
import { FaGithub, FaExternalLinkAlt, FaCode, FaPaperPlane } from 'react-icons/fa'

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const categories = ['All', 'Frontend', 'Full Stack', 'Mobile'] // Example categories
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(filter))

  // Helper to check if project has a live link
  const hasLiveLink = (link) => link && link !== '#' && !link.includes('github.com')

  return (
    <div className="bg-transparent text-white selection:bg-purple-500/30 selection:text-white min-h-screen flex flex-col">
      <Head>
        <title>Projects | Luka Partenadze</title>
        <meta name="description" content="Showcase of my latest development projects." />
      </Head>

      <Logo />
      <Navbar />

      <main className="pt-12 flex-grow pb-32">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-24">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Selected Works</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <p className="text-white/50 mr-8">Filter by:</p>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${filter === cat
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECTS LIST LAYOUT */}
          <div className="space-y-32 mb-32">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center group ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* IMAGE SIDE */}
                  <div className="w-full md:w-3/5 relative">
                    <Link href={project.link} target="_blank" className="block relative aspect-[16/9] rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Status Indicator */}
                      <div className="absolute top-6 right-6 z-20">
                        {hasLiveLink(project.link) ? (
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-green-500/30 rounded-full">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-medium uppercase tracking-widest text-green-400">Live</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                            <span className="h-2 w-2 rounded-full bg-white/40"></span>
                            <span className="text-[10px] font-medium uppercase tracking-widest text-white/60">Completed</span>
                          </div>
                        )}
                      </div>

                      {/* Floating Tech Stack Badge */}
                      <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-3 py-1 text-xs bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-white/80">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 text-xs bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-white/80">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </Link>
                  </div>

                  {/* CONTENT SIDE */}
                  <div className="w-full md:w-2/5 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-purple-400 text-sm font-mono">0{index + 1}</span>
                      <div className="h-[1px] w-12 bg-purple-500/30"></div>
                      <span className="text-white/40 text-sm uppercase tracking-widest">{project.category}</span>
                    </div>

                    <h2 className="text-4xl font-bold group-hover:text-purple-200 transition-colors duration-300">
                      {project.title}
                    </h2>

                    <p className="text-white/60 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div className="flex gap-6 pt-4">
                      {hasLiveLink(project.link) && (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors border-b border-transparent hover:border-purple-400 pb-1"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          <span className="text-sm font-medium uppercase tracking-wide">Live Demo</span>
                        </Link>
                      )}
                      <Link
                        href={project.github || '#'}
                        target="_blank"
                        className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors border-b border-transparent hover:border-purple-400 pb-1"
                      >
                        <FaGithub className="text-lg" />
                        <span className="text-sm font-medium uppercase tracking-wide">Source Code</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CALL TO ACTION */}
          <div className="bg-white/5 rounded-3xl p-12 md:p-24 text-center border border-white/5 mb-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a project in mind?</h2>
            <p className="text-white/50 mb-12 max-w-xl mx-auto">
              I'm always open to discussing new projects and opportunities.
              Let's build something amazing together.
            </p>
            <FlightButton
              href="/contact"
              text="Start a Project"
              icon={FaPaperPlane}
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
