'use client'
import { useRef } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import ParticleBackground from '../components/ParticleBackground'
import ScrollAnimations from '../components/ScrollAnimations'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion'
import {
  CodeBracketIcon,
  LightBulbIcon,
  ServerIcon,
  ArrowPathIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei'
import Tilt from 'react-parallax-tilt'

// --- Variants for Animations ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// --- Enhanced Animated Blob ---
const AnimatedBlob = () => {
  const meshRef = useRef()
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Subtle floating motion
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.007
    }
  })

  return (
    <Sphere args={[1, 128, 128]} ref={meshRef}>
      <MeshDistortMaterial
        color="#a78bfa" // Slightly softer purple
        attach="material"
        distort={0.45} // Slightly less distortion
        speed={1.5} // Slightly slower speed
        roughness={0.1}
        metalness={0.1} // Add a subtle metallic sheen
      />
    </Sphere>
  )
}

// --- Enhanced Particles (Using Drei Stars for performance/visuals) ---
const StarParticles = () => {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15
      ref.current.rotation.y -= delta / 20
    }
  })
  return (
    <Stars
      ref={ref}
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  )
}

// --- Main Component ---
export default function About() {
  const { scrollYProgress } = useScroll()

  // Timeline line animation
  const timelineRef = useRef(null)
  const { scrollYProgress: timelineScrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'], // Animate while section is centered
  })
  const timelineHeight = useTransform(timelineScrollYProgress, [0, 1], ['0%', '100%'])

  // Timeline data with icons
  const timelineData = [
    {
      year: '2020',
      title: 'Spark of Curiosity',
      description: 'Dived into the world of HTML, CSS, and JavaScript basics.',
      icon: AcademicCapIcon,
      isLeft: true,
    },
    {
      year: '2021',
      title: 'First Creations',
      description: 'Built initial websites and interactive web applications.',
      icon: LightBulbIcon,
      isLeft: false,
    },
    {
      year: '2022',
      title: 'Full Stack Expansion',
      description: 'Embraced backend technologies and modern frameworks.',
      icon: ServerIcon,
      isLeft: true,
    },
    {
      year: '2024',
      title: 'Professional Growth',
      description: 'Tackling complex projects and refining the craft.',
      icon: BriefcaseIcon,
      isLeft: false,
    },
  ]

  return (
    <ScrollAnimations>
      <div className="bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/20 dark:from-black dark:via-indigo-950/30 dark:to-purple-950/20 transition-colors duration-500 overflow-x-hidden">
        <Head>
          <title>About - Luka Partenadze</title>
          <meta
            name="description"
            content="Learn about Luka Partenadze, a passionate Junior Full Stack Developer based in Tbilisi, Georgia."
          />
        </Head>

        <CustomCursor />
        <ParticleBackground density={25} interactive={true} />
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50 transform origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <Navbar />

      <main className="pt-16 relative">
        {/* Hero Section - Modern Split Design */}
        <section className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden reveal-up">
          {/* Left Side - Image & Visual Elements */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-screen relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900"></div>

            {/* Animated Patterns */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }}
              />
            </div>

            {/* 3D Elements */}
            <div className="absolute inset-0 z-10">
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={0.8} />
                <AnimatedBlob />
                <StarParticles />
              </Canvas>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 z-20 flex items-center justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Animated Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/20"
                  animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Profile Image with Glow */}
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  glareColor="white"
                  glarePosition="all"
                  scale={1.05}
                >
                  <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 animate-pulse" />

                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/90 shadow-2xl z-10">
                      <motion.img
                        src="/images/profile.jpg"
                        alt="Luka Partenadze"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>
                </Tilt>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 min-h-[60vh] md:h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6 md:px-12 lg:px-24">
            <div className="max-w-xl">
              {/* Animated Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                  Junior Full Stack Developer
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
                    Luka Partenadze
                  </span>
                </h1>
              </motion.div>

              {/* Bio Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm a passionate developer focused on creating elegant, user-friendly web applications. With expertise in modern frameworks and a keen eye for design, I transform complex problems into intuitive digital experiences.
                </p>

                {/* Stats/Highlights */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h3 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">3+</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h3 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">10+</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</p>
                  </div>
                </div>

                {/* Tech Stack Preview */}
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js'].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                      +more
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" passHref legacyBehavior>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                    >
                      Contact Me
                    </motion.a>
                  </Link>
                  <Link href="/projects" passHref legacyBehavior>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg shadow-lg border border-indigo-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
                    >
                      View Projects
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center items-start p-2"
            >
              <motion.div
                className="w-1.5 h-3 bg-white/70 rounded-full"
                animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.1,
                }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section - Modern Design */}
        <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Expertise</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
                    My Tech Stack
                  </span>
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  I work with modern technologies to build responsive, scalable, and user-friendly applications.
                </p>
              </motion.div>
            </div>

            {/* Skills Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                  <CodeBracketIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frontend</h3>
                <div className="space-y-3">
                  {['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML/CSS', 'Angular'].map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                  <ServerIcon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Backend</h3>
                <div className="space-y-3">
                  {['Node.js', 'Python', 'PHP', 'Laravel', 'C#', 'RESTful APIs'].map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Others */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                  <ArrowPathIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Database & Deployment</h3>
                <div className="space-y-3">
                  {['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'Vercel', 'Netlify', 'Render'].map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey Timeline Section - Modern Design */}
        <section className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-300 dark:bg-indigo-900 rounded-full filter blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-[100px]"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -45, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Experience</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
                    My Journey
                  </span>
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  From learning the basics to building complex applications, here's how my development path has evolved.
                </p>
              </motion.div>
            </div>

            {/* Modern Timeline */}
            <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-600 to-purple-600"
                  style={{ height: timelineHeight, originY: 0 }}
                />
              </div>

              {/* Timeline Items */}
              <div className="relative">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: item.isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center mb-16 ${item.isLeft ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {/* Content */}
                    <div className={`w-5/12 ${item.isLeft ? 'text-right pr-8' : 'pl-8'}`}>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                        <div className={`flex items-center mb-3 ${item.isLeft ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Empty Space */}
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section - Modern Design */}
        <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden stagger-children">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 opacity-70"></div>
            <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-100 to-transparent dark:from-indigo-900/20 dark:to-transparent opacity-70 rounded-tl-full"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Quote */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                    {/* Quote Mark */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl text-white font-serif">"</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-relaxed">
                      I believe in continuous learning and creating solutions that not only solve problems but also inspire and delight users.
                    </h3>

                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-indigo-200 dark:border-indigo-800">
                        <img
                          src="/images/profile.jpg"
                          alt="Luka Partenadze"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Luka Partenadze</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Philosophy Points */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">My Approach</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
                      Development Philosophy
                    </span>
                  </h3>

                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">User-Centered Design</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Creating intuitive interfaces that prioritize user experience and accessibility.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Optimization</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Building fast, efficient applications that provide a smooth experience on all devices.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Clean, Maintainable Code</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Writing well-structured, documented code that's easy to maintain and scale.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      </div>
    </ScrollAnimations>
  )
}
