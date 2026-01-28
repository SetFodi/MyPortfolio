'use client'
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import HeroSection from '@/components/ui/interactive-image-accordion'
import { projects } from '../data/homeData'
import { skillData } from '../data/homeData' // Assuming skillData is exported from here

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-transparent text-white selection:bg-purple-500/30 selection:text-white">
      <Head>
        <title>Luka Partenadze | Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Logo />
      <Navbar />

      <main ref={containerRef} className="relative z-10">

        {/* HERO SECTION */}
        <HeroSection />

        {/* SELECTED WORK - BENTO GRID */}
        <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-medium tracking-tight">Selected Work</h2>
            <Link href="/projects" className="text-sm text-white/50 hover:text-white transition-colors">View All &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[380px]">
            {/* Main Featured Project - Spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 row-span-1 relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              <Link href={projects[0].link} target="_blank" className="block h-full w-full">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <span className="text-xs font-medium text-purple-400 mb-2 block uppercase tracking-wider">{projects[0].category}</span>
                  <h3 className="text-3xl font-semibold mb-2">{projects[0].title}</h3>
                  <p className="text-white/70 max-w-md line-clamp-2">{projects[0].description}</p>
                </div>
              </Link>
            </motion.div>

            {/* Secondary Projects */}
            {projects.slice(1, 4).map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
              >
                <Link href={project.link} target="_blank" className="block h-full w-full">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <span className="text-xs font-medium text-purple-400 mb-2 block uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECH STACK - CREATIVE INTERACTIVE GRID */}
        <section className="py-32 bg-transparent border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
              <span className="text-sm text-purple-400 uppercase tracking-widest font-medium">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Tools & Technologies</h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                My preferred stack for building scalable, high-performance applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  category: 'Frontend',
                  desc: 'Building immersive user interfaces',
                  skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
                  gradient: 'from-purple-500/20 to-blue-500/20'
                },
                {
                  category: 'Backend',
                  desc: 'Powering robust server-side logic',
                  skills: ['Node.js', 'Python', 'PHP', 'Laravel', 'Odoo'],
                  gradient: 'from-green-500/20 to-emerald-500/20'
                },
                {
                  category: 'Database',
                  desc: 'Architecting reliable data storage',
                  skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
                  gradient: 'from-orange-500/20 to-red-500/20'
                },
                {
                  category: 'DevOps & Tools',
                  desc: 'Streamlining deployment & workflow',
                  skills: ['Git', 'Docker', 'Swagger', 'Postman', 'Linux'],
                  gradient: 'from-blue-500/20 to-cyan-500/20'
                }
              ].map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-500"
                >
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{cat.category}</h3>
                        <p className="text-white/40 text-sm">{cat.desc}</p>
                      </div>
                      <span className="text-xs font-mono text-white/30 px-2 py-1 rounded border border-white/10">0{i + 1}</span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {cat.skills.map((skill, j) => (
                        <span
                          key={j}
                          className="px-4 py-2 rounded-full text-sm bg-black/20 border border-white/5 text-white/70 group-hover:bg-black/40 group-hover:border-white/10 group-hover:text-white transition-all duration-300 backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
