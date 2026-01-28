import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-transparent text-foreground min-h-screen selection:bg-purple-500/30 selection:text-white transition-colors duration-300">
      <Head>
        <title>About | Luka Partenadze</title>
      </Head>

      <Logo />
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">

        {/* HEADER SECTION */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter text-foreground">
              Creative <br />
              <span className="text-muted-foreground">Developer.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <p className="text-lg text-muted-foreground/80 leading-relaxed mb-8 max-w-lg">
                I'm a Full Stack Developer based in Georgia, passionate about building digital products
                that look great and perform even better. I blend technical expertise with a keen eye
                for design to create meaningful user experiences.
              </p>

              <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
                {[
                  { label: 'Years Experience', value: '2+' },
                  { label: 'Projects Completed', value: '15+' },
                  { label: 'Happy Clients', value: '10+' },
                  { label: 'Cups of Coffee', value: '∞' }
                ].map((stat, i) => (
                  <div key={i}>
                    <span className="block text-3xl font-bold text-foreground mb-1">{stat.value}</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

          {/* SERVICES */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-8">What I Do</h2>
            <div className="space-y-12">
              {[
                {
                  title: 'Web Development',
                  desc: 'Building fast, responsive, and scalable websites using modern frameworks like Next.js and React.',
                  tools: ['React', 'Next.js', 'Tailwind', 'Node.js']
                },
                {
                  title: 'UI/UX Design',
                  desc: 'Crafting intuitive and aesthetically pleasing interfaces that enhance user engagement.',
                  tools: ['Figma', 'Framer', 'Prototyping']
                },
                {
                  title: 'E-Commerce',
                  desc: 'Developing robust online stores with secure payment integrations and easy management.',
                  tools: ['Shopify', 'Stripe', 'WooCommerce']
                }
              ].map((service, i) => (
                <div key={i} className="group">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded dark:bg-white/5 bg-gray-100 dark:text-muted-foreground text-foreground/70 border dark:border-white/5 border-gray-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE / EDUCATION */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-8">Journey</h2>

            <div className="relative border-l dark:border-white/10 border-gray-200 ml-3 space-y-12 pl-8 pb-4">
              {[
                {
                  year: '2023 - Present',
                  role: 'Freelance Full Stack Developer',
                  company: 'Self-Employed',
                  desc: 'Working with diverse clients to deliver custom web solutions, from landing pages to full-stack applications.'
                },
                {
                  year: '2023 - Present',
                  role: 'Junior Odoo Developer',
                  company: 'BDO Georgia',
                  desc: 'Developing and customizing modules for Odoo ERP, integrating varied business processes.'
                },
                {
                  year: '2021 - 2025',
                  role: 'Bachelor of Computer Science',
                  company: 'Business and Technology University',
                  desc: 'Foundational studies in algorithms, software engineering, and system design.'
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full bg-purple-500 ring-4 dark:ring-black ring-white"></span>
                  <span className="text-xs font-mono text-purple-400 mb-1 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-foreground mb-1">{item.company}</h3>
                  <span className="text-sm text-muted-foreground mb-3 block">{item.role}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </div>
  )
}
