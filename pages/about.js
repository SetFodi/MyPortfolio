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
    { year: '2020', title: 'Started Journey', description: 'Began learning web development fundamentals' },
    { year: '2021', title: 'First Projects', description: 'Built first websites and web applications' },
    { year: '2022', title: 'Full Stack', description: 'Expanded into backend technologies' },
    { year: '2024', title: 'Professional Growth', description: 'Working on complex real-world projects' },
    { year: '2025', title: 'Backend Developer', description: 'Joined Fostral as Backend Developer (Odoo Python)' },
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

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
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

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8 order-1 lg:order-2"
              >
                <div className="space-y-4">
                  <p className="text-sm tracking-widest text-white/40 uppercase">About Me</p>
                  <h1 className="text-5xl md:text-6xl font-light leading-tight">
                    Luka
                    <br />
                    <span className="text-white/40">Partenadze</span>
                  </h1>
                  <p className="text-lg text-white/60 leading-relaxed">
                    Full Stack Developer based in Tbilisi, Georgia
                  </p>
                </div>

                <div className="space-y-6 text-white/60 leading-relaxed">
                  <p>
                    I'm a passionate developer focused on creating elegant, user-friendly web applications. 
                    With expertise in modern frameworks and a keen eye for design, I transform complex 
                    problems into intuitive digital experiences.
                  </p>
                  <p>
                    My journey in web development started in 2020, and since then I've been continuously 
                    learning and building projects that challenge me to grow as a developer.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/projects">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-colors"
                    >
                      View Projects
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
              </motion.div>
            </div>
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
                    className="space-y-6"
                  >
                    <h3 className="text-sm tracking-widest text-white/40 uppercase pb-4 border-b border-white/10">
                      {titles[category]}
                    </h3>
                    <div className="space-y-3">
                      {items.map((skill) => (
                        <div
                          key={skill}
                          className="text-white/60 hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm tracking-widest text-white/40 uppercase mb-4">Journey</p>
              <h2 className="text-4xl md:text-5xl font-light">My Path</h2>
            </div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-8 items-start group"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-sm tracking-wider text-white/40 group-hover:text-white transition-colors">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-px h-20 bg-white/10 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40 group-hover:bg-white transition-colors"></div>
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="text-xl font-light mb-2 group-hover:text-white/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/50">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <p className="text-sm tracking-widest text-white/40 uppercase">Philosophy</p>
              <h2 className="text-3xl md:text-5xl font-light leading-tight">
                "I believe in continuous learning and creating solutions that not only solve problems but also inspire users."
              </h2>
              <div className="pt-8 space-y-6 text-white/60 max-w-2xl mx-auto">
                <div className="space-y-4">
                  <h3 className="text-lg text-white/80">User-Centered Design</h3>
                  <p className="text-sm">Creating intuitive interfaces that prioritize user experience and accessibility.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg text-white/80">Clean Code</h3>
                  <p className="text-sm">Writing well-structured, documented code that's easy to maintain and scale.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg text-white/80">Performance</h3>
                  <p className="text-sm">Building fast, efficient applications that provide smooth experiences.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}