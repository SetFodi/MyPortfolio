'use client'
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Magnetic from '../components/Magnetic'
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
    <div className="bg-[#0a0a0a] text-white selection:bg-purple-500/30 selection:text-white">
      <Head>
        <title>Luka Partenadze | Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main ref={containerRef} className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20">
          <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
             
             {/* Subtle Status Indicator */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4"
             >
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs text-white/60 uppercase tracking-widest">Available for work</span>
             </motion.div>

             <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
               className="text-6xl md:text-8xl font-bold tracking-tight leading-tight"
             >
               <span className="block text-white">Luka Partenadze</span>
               <span className="block text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white/80 to-white/40 font-light mt-2">
                 Full Stack Developer
               </span>
             </motion.h1>

             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
             >
               Crafting <span className="text-white/80">digital experiences</span> that matter. 
               Blending technical expertise with a keen eye for minimal design.
             </motion.p>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="flex flex-wrap justify-center gap-4 pt-4"
             >
                <Link href="/projects">
                  <Magnetic>
                    <button className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm tracking-wide hover:bg-gray-200 transition-colors">
                      View Projects
                    </button>
                  </Magnetic>
                </Link>
                <Link href="/contact">
                  <Magnetic>
                    <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium text-sm tracking-wide hover:bg-white/5 transition-colors">
                      Contact Me
                    </button>
                  </Magnetic>
                </Link>
             </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]"></div>
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]"></div>
          </div>
        </section>

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

        {/* TECH STACK - CLEAN GRID */}
        <section className="py-32 bg-[#0d0d0d] border-y border-white/5">
           <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="text-center mb-16">
                 <span className="text-sm text-purple-400 uppercase tracking-widest font-medium">Expertise</span>
                 <h2 className="text-3xl md:text-4xl font-bold mt-4">Tools & Technologies</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {['Frontend', 'Backend', 'Database', 'Design'].map((cat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                       <h3 className="text-lg font-semibold mb-4 text-white/90">{cat}</h3>
                       <ul className="space-y-2">
                          {/* Placeholder filtering, in real app map actual skills */}
                          {skillData.filter(s => s.category.toLowerCase().includes(cat.toLowerCase()) || (cat === 'Design' && s.category === 'tools')).slice(0, 4).map((skill, j) => (
                             <li key={j} className="flex items-center gap-2 text-sm text-white/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
                                {skill.name}
                             </li>
                          ))}
                       </ul>
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
