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

    // Keyboard shortcuts
    const handleKeyPress = (e) => {
      // Alt + H for Home
      if (e.altKey && e.key === 'h') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      // Alt + P for Projects section
      if (e.altKey && e.key === 'p') {
        e.preventDefault()
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
      }
      // Alt + S for Skills section
      if (e.altKey && e.key === 's') {
        e.preventDefault()
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
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
                    <span className="gradient-text-vibrant">Partenadze</span>
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
                    className="object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700"
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

        {/* Featured Projects - Bento Grid */}
        <section id="projects" className="py-32 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-between items-end mb-16"
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

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
              {/* Large Featured Project - 2x2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 lg:row-span-2"
              >
                <Link href={projects[0]?.link} target="_blank" rel="noopener noreferrer">
                  <div className="group h-full glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 card-hover relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                    <div className="absolute inset-0">
                      <Image
                        src={projects[0]?.image}
                        alt={projects[0]?.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <span className="inline-block px-3 py-1 text-xs tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full mb-3">
                        {projects[0]?.category}
                      </span>
                      <h3 className="text-2xl font-light mb-2 group-hover:text-purple-400 transition-colors">
                        {projects[0]?.title}
                      </h3>
                      <p className="text-sm text-white/60 line-clamp-2 mb-4">
                        {projects[0]?.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {projects[0]?.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-xs text-white/40 border border-white/20 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Medium Projects */}
              {projects.slice(1, 3).map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="lg:col-span-2 lg:row-span-1"
                >
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="group h-full glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 card-hover relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                      <div className="grid grid-cols-5 h-full">
                        <div className="col-span-2 relative overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                            sizes="200px"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
                        </div>
                        <div className="col-span-3 p-6 flex flex-col justify-center">
                          <span className="inline-block px-2 py-1 text-xs tracking-wider text-purple-400/70 uppercase mb-2 font-medium">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-light mb-2 group-hover:text-purple-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-white/50 line-clamp-2 mb-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 2).map((tech) => (
                              <span key={tech} className="text-xs text-white/40 border border-white/10 px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}

              {/* Small Square Projects */}
              {projects.slice(3, 7).map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="lg:col-span-1 lg:row-span-1"
                >
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="group h-full glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 card-hover relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                      <div className="h-full flex flex-col">
                        <div className="relative h-2/3 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                            sizes="300px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 group-hover:to-black/10 transition-all duration-500"></div>
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-center">
                          <span className="text-xs tracking-wider text-purple-400/60 uppercase mb-1 font-medium">
                            {project.category}
                          </span>
                          <h3 className="text-base font-light group-hover:text-purple-400 transition-colors line-clamp-1">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 text-sm tracking-wide rounded-lg hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm group relative overflow-hidden inline-flex items-center gap-2"
                >
                  <span className="relative z-10">View All Projects</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 border-t border-white/5 relative overflow-hidden">
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
                            whileHover={{ x: 5 }}
                            className="text-white/60 hover:text-white transition-all duration-300 flex items-center gap-3 group/item cursor-default"
                          >
                            <span className="w-1 h-1 rounded-full bg-white/20 group-hover/item:bg-purple-400 group-hover/item:w-2 group-hover/item:shadow-lg group-hover/item:shadow-purple-400/50 transition-all duration-300"></span>
                            <span className="flex-1">{skill.name}</span>
                            <span className="text-xs text-white/20 group-hover/item:text-purple-400/50 transition-colors">
                              ⦿
                            </span>
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
