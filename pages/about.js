import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Magnetic from '../components/Magnetic'
import Logo from '../components/Logo'
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Happy Clients', value: '100%' },
  ]

  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, interactive, and accessible user interfaces with modern frameworks.",
      icon: FaCode,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Engineering",
      description: "Creating robust server-side applications, APIs, and database architectures.",
      icon: FaServer,
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs"]
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database schemas for performance and scalability.",
      icon: FaDatabase,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"]
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and aesthetically pleasing digital experiences.",
      icon: FaTools,
      skills: ["Figma", "Prototyping", "Design Systems", "User Research"]
    }
  ]

  return (
    <div className="bg-transparent text-white min-h-screen selection:bg-purple-500/30 selection:text-white">
      <Head>
        <title>About Me | Luka Partenadze</title>
        <meta name="description" content="Learn more about Luka Partenadze, a Full Stack Developer." />
      </Head>

      <Logo />
      <Navbar />

      <main className="pt-12 pb-32">

        {/* HEADER SECTION */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-purple-400 uppercase tracking-widest text-sm font-medium mb-4 block">Who I Am</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Full Stack <br />
                <span className="text-white/50">Developer.</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
                I'm Luka Partenadze, a passionate developer based in Tbilisi, Georgia.
                I specialize in building robust, scalable, and high-performance web applications.
              </p>

              <div className="flex gap-8 border-t border-white/10 pt-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <span className="block text-3xl font-bold text-white mb-1">{stat.value}</span>
                    <span className="text-sm text-white/40 uppercase tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden bg-white/5"
            >
              <Image
                src="/images/profile.jpg"
                alt="Luka Partenadze"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES / WHAT I DO */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              I combine technical skills with creative problem-solving to deliver comprehensive web solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                  <service.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded bg-white/5 text-white/50 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE / TIMELINE */}
        <section className="px-6 md:px-12 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold">Journey</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          <div className="space-y-12">
            {[
              { year: '2022 - 2023', title: 'Self-Taught Journey', role: 'Student', desc: 'Deep dive into computer science fundamentals, algorithms, and web development basics.' },
              { year: '2023 - 2024', title: 'Personal Projects', role: 'Frontend Focus', desc: 'Developed multiple high-performance web applications to master modern frontend frameworks.' },
              { year: '2024 - 2025', title: 'Freelance Developer', role: 'Full Stack Developer', desc: 'Building custom web solutions for diverse clients using Next.js and modern technologies.' },
              { year: '2025 - Present', title: 'Fostral', role: 'Junior Odoo Developer', desc: 'Developing and customizing Odoo ERP modules, optimizing business workflows, and ensuring seamless system integration for enterprise clients.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 md:gap-12"
              >
                <div className="flex-shrink-0 w-24 md:w-32 pt-1">
                  <span className="text-sm text-purple-400 font-mono">{item.year}</span>
                </div>
                <div className="relative pb-12 border-l border-white/10 pl-8 last:border-l-0 last:pb-0">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-[#0a0a0a]"></div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <span className="text-sm text-white/50 mb-3 block">{item.role}</span>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
