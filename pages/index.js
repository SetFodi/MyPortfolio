'use client'
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import HeroSection from '@/components/ui/interactive-image-accordion'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import DisplayCards from '@/components/ui/display-cards'
import { Sparkles, Code, Rocket } from 'lucide-react'
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

        {/* SELECTED WORK - SCROLL ANIMATION */}
        <section className="-mt-12">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center mb-10">
                <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                  Selected Work
                </h2>
                <Link href="/projects" className="text-xl text-purple-400 mt-4 hover:text-purple-300 transition-colors">
                  View All Projects &rarr;
                </Link>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[380px] p-4 text-left h-full">
              {/* Main Featured Project - Spans 2 columns */}
              {(() => {
                const mainProject = projects.find(p => p.title === 'Furniture') || projects[0];
                return (
                  <motion.div
                    className="md:col-span-2 row-span-1 relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10"
                  >
                    <Link href={mainProject.link} target="_blank" className="block h-full w-full">
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <Image
                        src={mainProject.image}
                        alt={mainProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 p-8 z-20">
                        <span className="text-xs font-medium text-purple-400 mb-2 block uppercase tracking-wider">{mainProject.category}</span>
                        <h3 className="text-3xl font-semibold mb-2">{mainProject.title}</h3>
                        <p className="text-white/70 max-w-md line-clamp-2">{mainProject.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })()}

              {/* Secondary Projects */}
              {[
                projects.find(p => p.title === 'AndScore') || projects.find(p => p.title === 'AndCode'),
                projects[0], // AndWatch moved here
                projects[2], // AndCook
                projects[3]  // Syncrolly
              ].map((project, i) => (
                <motion.div
                  key={i}
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
          </ContainerScroll>
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

        {/* WORKFLOW - DISPLAY CARDS */}
        <section className="py-32 border-y border-white/5 bg-transparent overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-32">
            <div className="w-full md:w-1/2">
              <span className="text-sm text-purple-400 uppercase tracking-widest font-medium">Workflow</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">How I Work</h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                My process is streamlined to deliver high-quality results efficiently.
                From initial concept to final deployment, every step is crafted for excellence.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">1</div>
                  <span className="text-white/80">Strategic Planning & Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">2</div>
                  <span className="text-white/80">Agile Development & Testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">3</div>
                  <span className="text-white/80">Optimization & Deployment</span>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 flex justify-center py-10">
              <DisplayCards cards={[
                {
                  icon: <Sparkles className="size-4 text-blue-300" />,
                  title: "Design",
                  description: "Modern & Intuitive",
                  date: "Phase 1",
                  iconClassName: "text-blue-500",
                  titleClassName: "text-blue-500",
                  className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                },
                {
                  icon: <Code className="size-4 text-purple-300" />,
                  title: "Develop",
                  description: "Clean & Scalable",
                  date: "Phase 2",
                  iconClassName: "text-purple-500",
                  titleClassName: "text-purple-500",
                  className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
                },
                {
                  icon: <Rocket className="size-4 text-green-300" />,
                  title: "Deploy",
                  description: "Fast & Secure",
                  date: "Phase 3",
                  iconClassName: "text-green-500",
                  titleClassName: "text-green-500",
                  className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
                },
              ]} />
            </div>
          </div>
        </section>



        {/* PRICING PREVIEW */}
        <section className="py-32 border-y border-white/5 bg-transparent overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-sm text-purple-400 uppercase tracking-widest font-medium">Pricing</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4">Transparent Packages</h2>
              </div>
              <Link href="/pricing" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                View All Plans &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Landing Page", price: "400-700 ₾", desc: "Perfect for small businesses." },
                { title: "Business Website", price: "1,000+ ₾", desc: "Full-featured professional site.", popular: true },
                { title: "E-Commerce", price: "3,000+ ₾", desc: "Complete online store solution." }
              ].map((plan, i) => (
                <div key={i} className={`p-8 rounded-2xl border ${plan.popular ? 'bg-white/10 border-purple-500/50' : 'bg-white/5 border-white/10'} hover:border-white/30 transition-all`}>
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-3xl font-bold text-white mb-4">{plan.price}</p>
                  <p className="text-white/50 mb-8">{plan.desc}</p>
                  <Link href="/pricing" className="text-sm font-bold text-purple-400 hover:text-purple-300 flex items-center gap-2">
                    Learn More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
