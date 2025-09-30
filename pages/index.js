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

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <p className="text-sm tracking-widest text-white/40 uppercase">Full Stack Developer</p>
                  <h1 className="text-5xl md:text-7xl font-light leading-tight">
                    Luka
                    <br />
                    <span className="text-white/40">Partenadze</span>
                  </h1>
                  <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                    Crafting elegant digital experiences through clean code and thoughtful design. 
                    Specialized in building modern web applications that deliver exceptional user experiences.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/projects">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-colors"
                    >
                      View Work
                    </motion.button>
                  </Link>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 border border-white/20 text-sm tracking-wide hover:border-white/40 transition-colors"
                    >
                      Get in Touch
                    </motion.button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                  <div>
                    <div className="text-3xl font-light">10+</div>
                    <div className="text-xs text-white/40 mt-1">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light">2+</div>
                    <div className="text-xs text-white/40 mt-1">Years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light">100%</div>
                    <div className="text-xs text-white/40 mt-1">Satisfaction</div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-white/5">
                  <Image
                    src="/images/profile.jpg"
                    alt="Luka Partenadze"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects - Auto Scrolling Carousel */}
        <section className="py-32 border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm tracking-widest text-white/40 uppercase mb-4">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-light">Featured Work</h2>
              </div>
              <Link href="/projects" className="text-sm text-white/60 hover:text-white transition-colors hidden md:block">
                View All →
              </Link>
            </div>
          </div>

          <AutoScrollCarousel projects={projects} />

          <div className="text-center mt-12 md:hidden">
            <Link href="/projects" className="text-sm text-white/60 hover:text-white transition-colors">
              View All Projects →
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm tracking-widest text-white/40 uppercase mb-4">Expertise</p>
              <h2 className="text-4xl md:text-5xl font-light">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                    className="space-y-4"
                  >
                    <h3 className="text-sm tracking-widest text-white/40 uppercase mb-6">
                      {categoryTitles[category]}
                    </h3>

                    <div className="space-y-3">
                      {skillData
                        .filter(skill => skill.category === category)
                        .slice(0, 6)
                        .map((skill) => (
                          <div
                            key={skill.name}
                            className="text-white/60 hover:text-white transition-colors cursor-default"
                          >
                            {skill.name}
                          </div>
                        ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
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
                <span className="text-white/40">Exceptional Together</span>
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                I'm currently available for freelance projects and collaborations.
                Let's discuss how we can work together.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-colors"
                  >
                    Start a Project
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 border border-white/20 text-sm tracking-wide hover:border-white/40 transition-colors"
                  >
                    More About Me
                  </motion.button>
                </Link>
              </div>
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
                <div className="aspect-[4/3] relative overflow-hidden bg-white/5 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="400px"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs tracking-widest text-white/40 uppercase mb-2">{project.category}</p>
                    <h3 className="text-xl font-light mb-2 group-hover:text-white/80 transition-colors">{project.title}</h3>
                    <p className="text-sm text-white/50 line-clamp-2">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs tracking-wide text-white/40 border border-white/10 px-2 py-1"
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