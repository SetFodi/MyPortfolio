'use client'
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimationFrame } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { skillData, projects } from '../data/homeData'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Head>
        <title>Luka Partenadze | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Luka Partenadze, a Full Stack Developer specializing in modern web technologies." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm tracking-widest text-white/40 uppercase"
                  >
                    Full Stack Developer
                  </motion.p>
                  <h1 className="text-5xl md:text-7xl font-light leading-tight">
                    <span className="gradient-text-vibrant">Luka</span>
                    <br />
                    <span className="text-white/40">Partenadze</span>
                  </h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-white/60 leading-relaxed max-w-lg"
                  >
                    Crafting elegant digital experiences through clean code and thoughtful design. 
                    Specialized in building modern web applications that deliver exceptional user experiences.
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(120, 119, 198, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm tracking-wide rounded-lg font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">View Work</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                  </Link>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border border-white/20 text-sm tracking-wide rounded-lg hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden"
                    >
                      <span className="relative z-10">Get in Touch</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5"
                >
                  <div className="group cursor-default">
                    <div className="text-3xl font-light gradient-text group-hover:scale-110 transition-transform duration-300 inline-block">10+</div>
                    <div className="text-xs text-white/40 mt-1 group-hover:text-white/60 transition-colors">Projects</div>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-3xl font-light gradient-text group-hover:scale-110 transition-transform duration-300 inline-block">2+</div>
                    <div className="text-xs text-white/40 mt-1 group-hover:text-white/60 transition-colors">Years</div>
                  </div>
                  <div className="group cursor-default">
                    <div className="text-3xl font-light gradient-text group-hover:scale-110 transition-transform duration-300 inline-block">100%</div>
                    <div className="text-xs text-white/40 mt-1 group-hover:text-white/60 transition-colors">Satisfaction</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  <Image
                    src="/images/profile.jpg"
                    alt="Luka Partenadze"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute bottom-6 right-6 glass-strong px-4 py-3 rounded-lg z-20"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium">Available for work</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Decorative border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects - Auto Scrolling Carousel */}
        <section className="py-32 border-t border-white/5 overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-between items-end"
            >
              <div>
                <p className="text-sm tracking-widest text-white/40 uppercase mb-4">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-light">
                  Featured <span className="gradient-text">Work</span>
                </h2>
              </div>
              <Link href="/projects" className="text-sm text-white/60 hover:text-purple-400 transition-colors hidden md:flex items-center gap-2 group">
                View All 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>

          <AutoScrollCarousel projects={projects} />

          <div className="text-center mt-12 md:hidden">
            <Link href="/projects" className="text-sm text-white/60 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
              View All Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="text-sm tracking-widest text-white/40 uppercase mb-4">Expertise</p>
              <h2 className="text-4xl md:text-5xl font-light">
                Technical <span className="gradient-text">Skills</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['frontend', 'backend', 'database', 'tools'].map((category, idx) => {
                const categoryTitles = {
                  frontend: 'Frontend',
                  backend: 'Backend',
                  database: 'Database',
                  tools: 'Tools & Deployment'
                }

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group cursor-default border border-white/5 hover:border-purple-500/20"
                  >
                    <h3 className="text-sm tracking-widest text-white/60 uppercase mb-6 font-medium group-hover:text-purple-400 transition-colors">
                      {categoryTitles[category]}
                    </h3>

                    <div className="space-y-3">
                      {skillData
                        .filter(skill => skill.category === category)
                        .slice(0, 6)
                        .map((skill, skillIdx) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
                            className="text-white/60 hover:text-white transition-all duration-300 flex items-center gap-2 group/item"
                          >
                            <span className="w-1 h-1 rounded-full bg-white/20 group-hover/item:bg-purple-400 group-hover/item:w-2 transition-all duration-300"></span>
                            {skill.name}
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Let's Create Something
                <br />
                <span className="gradient-text-vibrant">Exceptional Together</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                I'm currently available for freelance projects and collaborations.
                Let's discuss how we can work together.
              </p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 pt-8"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(120, 119, 198, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm tracking-wide rounded-lg font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Start a Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-white/20 text-sm tracking-wide rounded-lg hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden"
                  >
                    <span className="relative z-10">More About Me</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

// Auto-scrolling Carousel Component
function AutoScrollCarousel({ projects }) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef(null)
  const scrollRef = useRef(0)

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects]

  useAnimationFrame((time, delta) => {
    if (!isPaused && containerRef.current) {
      // Scroll speed (pixels per frame)
      scrollRef.current += delta * 0.05
      
      const maxScroll = containerRef.current.scrollWidth / 2
      
      // Reset scroll when reaching halfway (seamless loop)
      if (scrollRef.current >= maxScroll) {
        scrollRef.current = 0
      }
      
      containerRef.current.style.transform = `translateX(-${scrollRef.current}px)`
    }
  })

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6 will-change-transform"
          style={{ width: 'fit-content' }}
        >
          {duplicatedProjects.map((project, idx) => (
            <Link
              key={`${project.title}-${idx}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group w-[400px] flex-shrink-0">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl bg-white/5 mb-4 border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs tracking-widest text-purple-400/60 uppercase mb-2 font-medium">{project.category}</p>
                    <h3 className="text-xl font-light mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    <p className="text-sm text-white/50 line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs tracking-wide text-white/40 border border-white/10 px-2 py-1 rounded group-hover:border-purple-500/30 group-hover:text-white/60 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}