'use client'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const timeline = [
    { 
      year: '2020', 
      title: 'Started Journey', 
      description: 'Began learning web development fundamentals',
      icon: '🚀'
    },
    { 
      year: '2021', 
      title: 'First Projects', 
      description: 'Built first websites and web applications',
      icon: '💻'
    },
    { 
      year: '2022', 
      title: 'Full Stack', 
      description: 'Expanded into backend technologies',
      icon: '⚡'
    },
    { 
      year: '2024', 
      title: 'Professional Growth', 
      description: 'Working on complex real-world projects',
      icon: '📈'
    },
    { 
      year: '2025', 
      title: 'Backend Developer', 
      description: 'Joined Fostral as Backend Developer (Odoo Python)',
      icon: '🎯'
    },
  ]

  const stats = [
    { label: 'Projects Completed', value: '15+', suffix: '' },
    { label: 'Years of Experience', value: '5+', suffix: '' },
    { label: 'Technologies', value: '20+', suffix: '' },
    { label: 'Code Quality', value: '100', suffix: '%' },
  ]

  const skills = {
    frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML/CSS', 'Angular'],
    backend: ['Node.js', 'Python', 'PHP', 'Laravel', 'C#', 'Odoo'],
    database: ['MongoDB', 'MySQL', 'PostgreSQL'],
    tools: ['Git', 'Docker', 'Lua']
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Head>
        <title>About - Luka Partenadze</title>
        <meta name="description" content="Learn about Luka Partenadze, a Full Stack Developer based in Tbilisi, Georgia." />
      </Head>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1 relative group"
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  <Image
                    src="/images/profile.jpg"
                    alt="Luka Partenadze"
                    fill
                    className="object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Decorative border effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8 order-1 lg:order-2"
              >
                <div className="space-y-4">
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-sm tracking-widest text-white/40 uppercase"
                  >
                    About Me
                  </motion.p>
                  <h1 className="text-5xl md:text-6xl font-light leading-tight">
                    <span className="gradient-text-vibrant">Luka</span>
                    <br />
                    <span className="text-white/40">Partenadze</span>
                  </h1>
                  <p className="text-lg text-purple-400/80 leading-relaxed font-medium">
                    Full Stack Developer based in Tbilisi, Georgia
                  </p>
                </div>

                <div className="space-y-6 text-white/60 leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    I'm a passionate developer focused on creating elegant, user-friendly web applications. 
                    With expertise in modern frameworks and a keen eye for design, I transform complex 
                    problems into intuitive digital experiences.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    My journey in web development started in 2020, and since then I've been continuously 
                    learning and building projects that challenge me to grow as a developer.
                  </motion.p>
                </div>

                {/* Stats Grid */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-2 gap-4 pt-4"
                >
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                      className="glass rounded-xl p-4 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group cursor-default"
                    >
                      <div className="text-3xl font-light gradient-text mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-xs text-white/40 group-hover:text-white/60 transition-colors">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Link href="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(120, 119, 198, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm tracking-wide rounded-lg font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">View Projects</span>
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
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
              {Object.entries(skills).map(([category, items], idx) => {
                const titles = {
                  frontend: 'Frontend',
                  backend: 'Backend',
                  database: 'Database',
                  tools: 'Tools'
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
                      {titles[category]}
                    </h3>
                    <div className="space-y-3">
                      {items.map((skill, skillIdx) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
                          whileHover={{ x: 5 }}
                          className="text-white/60 hover:text-white transition-all duration-300 flex items-center gap-3 group/item cursor-default"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/20 group-hover/item:bg-purple-400 group-hover/item:w-2 group-hover/item:shadow-lg group-hover/item:shadow-purple-400/50 transition-all duration-300"></span>
                          <span className="flex-1">{skill}</span>
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

        {/* Timeline Section */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="text-sm tracking-widest text-white/40 uppercase mb-4">Journey</p>
              <h2 className="text-4xl md:text-5xl font-light">
                My <span className="gradient-text">Path</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-sm tracking-wider text-white/40 group-hover:text-purple-400 transition-colors font-medium">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300 border border-white/10 group-hover:border-purple-500/30">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    {idx !== timeline.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-purple-500/20 to-transparent"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="glass rounded-xl p-6 hover:bg-white/5 transition-all duration-300 border border-white/5 group-hover:border-purple-500/20">
                      <h3 className="text-xl font-light mb-2 group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <p className="text-sm tracking-widest text-white/40 uppercase">Philosophy</p>
              <h2 className="text-3xl md:text-5xl font-light leading-tight">
                "I believe in continuous learning and creating solutions that not only solve problems but also <span className="gradient-text-vibrant">inspire users</span>."
              </h2>
              <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/60 max-w-4xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-purple-500/20 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg text-white/80 mb-3 font-medium group-hover:text-purple-400 transition-colors">User-Centered Design</h3>
                  <p className="text-sm">Creating intuitive interfaces that prioritize user experience and accessibility.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-purple-500/20 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg text-white/80 mb-3 font-medium group-hover:text-purple-400 transition-colors">Clean Code</h3>
                  <p className="text-sm">Writing well-structured, documented code that's easy to maintain and scale.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-purple-500/20 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg text-white/80 mb-3 font-medium group-hover:text-purple-400 transition-colors">Performance</h3>
                  <p className="text-sm">Building fast, efficient applications that provide smooth experiences.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}