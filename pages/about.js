'use client'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion'
import {
  CodeBracketIcon,
  LightBulbIcon,
  ServerIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import Tilt from 'react-parallax-tilt'

// Animated background blob component using Three.js
const AnimatedBlob = () => {
  const meshRef = useRef()
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef}>
      <MeshDistortMaterial 
        color="#8b5cf6" 
        attach="material" 
        distort={0.5} 
        speed={2} 
        roughness={0} 
      />
    </Sphere>
  )
}

// Simplified particle component for the floating dots effect
const Particles = () => {
  const particleCount = 30
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    speed: Math.random() * 0.3 + 0.2
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400 dark:bg-blue-600 opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5 + particle.speed * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.1
          }}
        />
      ))}
    </div>
  )
}

// Timeline item component
const TimelineItem = ({ year, title, description, isLeft }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" })
  
  return (
    <div ref={ref} className="mb-16 relative">
      <div className="w-4 h-4 absolute rounded-full bg-purple-500 z-10 shadow-lg shadow-purple-300 dark:shadow-purple-900"
        style={{ left: "calc(50% - 8px)", top: "6px" }} />
      
      <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="w-1/2" />
        <motion.div 
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`w-1/2 p-6 rounded-xl ${isLeft ? 'text-right mr-8' : 'ml-8'} 
                    bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-900
                    shadow-xl hover:shadow-2xl transition-all border border-purple-100 dark:border-purple-900`}
        >
          <span className="text-sm font-bold text-purple-500 mb-1 block">{year}</span>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </motion.div>
      </div>
    </div>
  )
}

// Skill category component
const SkillCategory = ({ title, skills, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="mb-10"
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: delay + idx * 0.1 }}
            className="flex items-center text-gray-700 dark:text-gray-300"
          >
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

// Main component
export default function About() {
  const { scrollYProgress } = useScroll()
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const scale = useSpring(scaleProgress, { stiffness: 100, damping: 30 })
  
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100])
  
  // Timeline data
  const timelineData = [
    { year: "2020", title: "Discovered Web Development", description: "Started learning basic HTML, CSS, and JavaScript", isLeft: true },
    { year: "2021", title: "First Projects", description: "Built my first websites and interactive applications", isLeft: false },
    { year: "2022", title: "Full Stack Journey", description: "Expanded skills to include backend technologies and frameworks", isLeft: true },
    { year: "2023", title: "Professional Growth", description: "Working on increasingly complex projects and expanding my skill set", isLeft: false },
  ]

  // Skills categories data
  const skillCategories = [
    { 
      title: "Frontend Development", 
      skills: [
        "JavaScript (ES6+) & TypeScript",
        "React.js & Next.js",
        "Modern Frontend Libraries & Frameworks",
        "Responsive Design with Tailwind CSS"
      ],
      delay: 0
    },
    { 
      title: "Backend Development", 
      skills: [
        "Node.js & Express.js",
        "RESTful API Design & Implementation",
        "PHP & Laravel",
        "Database Design & Management"
      ],
      delay: 0.2
    },
    { 
      title: "Tools & Other Skills", 
      skills: [
        "Version Control with Git",
        "Modern Development Workflows",
        "UI/UX Principles",
        "C# Programming"
      ],
      delay: 0.4
    }
  ]

  // Skills cards data (unchanged except removing DevOps)
  const skillItems = [
    { icon: CodeBracketIcon, color: 'blue', text: 'JavaScript (ES6+), TypeScript, Python' },
    { icon: LightBulbIcon, color: 'yellow', text: 'React, Next.js, Angular & Modern Front-end Libraries' },
    { icon: ServerIcon, color: 'green', text: 'Node.js, Express & RESTful API Development' },
    { icon: ArrowPathIcon, color: 'indigo', text: 'Version Control with Git' },
    { icon: DevicePhoneMobileIcon, color: 'pink', text: 'Responsive Design with Tailwind CSS' },
    { icon: DocumentTextIcon, color: 'red', text: 'PHP, Laravel & C#' },
  ]

  return (
    <div className="bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <Head>
        <title>About - Luka Portfolio</title>
        <meta name="description" content="About Luka Partenadze, Junior Full Stack Developer" />
      </Head>

      <Navbar />

      <main className="pt-10 relative">
        {/* Hero Section */}
        <section className="relative min-h-screen py-32 flex items-center overflow-hidden">
          {/* Animated decorative element */}
          <Particles />
          
          {/* Background gradient */}
          <motion.div
            style={{ scale }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-400/20 dark:from-blue-900/30 dark:via-purple-800/30 dark:to-pink-900/30"
          />
          
          {/* Background 3D blob (fixed position, not following) */}
          <div className="hidden lg:block absolute right-10 bottom-10 w-96 h-96 opacity-20 z-0">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={0.5} />
              <AnimatedBlob />
            </Canvas>
          </div>

          {/* Main content */}
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              style={{ 
                y: yHero, 
                opacity: opacityHero
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-10"
              >
                About Me
              </motion.h1>

              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                className="inline-block"
              >
                <Tilt 
                  tiltReverse 
                  glareEnable 
                  glareMaxOpacity={0.2} 
                  glareColor="#ffffff" 
                  glarePosition="all" 
                  scale={1.05}
                >
                  <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-500/50 dark:from-blue-600/50 dark:to-purple-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.img
                      src="/images/profile.jpg"
                      alt="Luka Partenadze Profile"
                      className="w-full h-full object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
                    />
                  </div>
                </Tilt>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                My name is <span className="font-semibold text-purple-600 dark:text-purple-400">Luka Partenadze</span>, a passionate Junior Full Stack Developer who loves turning ideas into elegant, scalable web applications. My journey in coding began with curiosity and has grown into a dedication to building digital experiences that are as innovative as they are user-friendly. and by the way I have the most beautiful girlfriend ever.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(124, 58, 237, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                <Link href="/contact">Let's	Connect</Link>
              </motion.button>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center p-2">
              <motion.div 
                className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.15 }}
              />
            </div>
          </motion.div>
        </section>

        {/* Journey Timeline Section */}
        <section className="py-24 relative">
          <motion.div
            className="absolute top-10 left-0 w-full h-full opacity-5 pointer-events-none"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
          />
          
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-16 text-center"
            >
              My Journey
            </motion.h2>
            
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-40 w-0.5 h-3/4 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2" />
            
            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                isLeft={item.isLeft}
              />
            ))}
          </div>
        </section>

        {/* Skills Section with List Format */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-16 text-center"
            >
              Skills & Technologies
            </motion.h2>
            
            {/* Skills by Category */}
            <div className="mb-20">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {skillCategories.map((category, index) => (
                    <SkillCategory 
                      key={index}
                      title={category.title}
                      skills={category.skills}
                      delay={category.delay}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Skill Cards */}
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">My Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)"
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  viewport={{ once: true }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className={`flex items-center space-x-4`}>
                    <div className={`p-3 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-lg`}>
                      <item.icon className={`w-8 h-8 text-${item.color}-600 dark:text-${item.color}-400`} />
                    </div>
                    <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Decorative elements - simplified and not interactive */}
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-900/20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-500/10 dark:bg-blue-900/20"
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-16 text-center"
            >
              My Philosophy
            </motion.h2>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center p-12 rounded-3xl relative backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800/80 dark:to-gray-900/80 rounded-3xl transform -rotate-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900/80 dark:to-gray-800/80 rounded-3xl transform rotate-1 opacity-70" />
              
              <motion.p
                className="text-2xl md:text-3xl italic text-gray-700 dark:text-gray-300 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <span className="text-6xl text-purple-400 leading-none inline-block mr-2">"</span>
                I believe in continuous learning and creating solutions that not only solve problems but also inspire and delight users.
                <span className="text-6xl text-purple-400 leading-none inline-block ml-2">"</span>
              </motion.p>
              
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1.2 }}
                className="h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto my-6"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-gray-600 dark:text-gray-400 italic"
              >
                – Luka Partenadze
              </motion.p>
            </motion.div>
            
            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 text-center"
            >
            
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
