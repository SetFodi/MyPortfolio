'use client'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar' // Assuming Navbar is in components
import Footer from '../components/Footer' // Assuming Footer is in components
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import {
  CodeBracketIcon,
  LightBulbIcon,
  ServerIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  AcademicCapIcon, // Added for timeline
  SparklesIcon, // Added for timeline
  UserGroupIcon, // Added for timeline
  BriefcaseIcon, // Added for timeline
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
  useFrame((state, delta) => {
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

// --- Enhanced Timeline Item ---
const TimelineItem = ({ year, title, description, icon: Icon, isLeft }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px 0px' }) // Trigger sooner

  return (
    <div ref={ref} className="mb-12 md:mb-16 relative group">
      {/* Central Dot - Enhanced */}
      <div
        className="w-5 h-5 absolute rounded-full bg-gradient-to-br from-purple-500 to-blue-500 z-10 shadow-lg shadow-purple-400/40 dark:shadow-purple-900/60 ring-4 ring-white/50 dark:ring-black/50 transition-transform duration-300 group-hover:scale-110"
        style={{ left: 'calc(50% - 10px)', top: '10px' }}
      />

      <div
        className={`flex items-start ${
          isLeft ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        {/* Spacer */}
        <div className="w-1/2 px-2 md:px-4"></div>

        {/* Content Card */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, x: isLeft ? -60 : 60, scale: 0.9 },
            visible: {
              opacity: 1,
              x: 0,
              scale: 1,
              transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }, // Smoother ease
            },
          }}
          className={`w-1/2 p-5 md:p-6 rounded-xl ${
            isLeft ? 'md:mr-6 text-right' : 'md:ml-6 text-left'
          }
                    bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg
                    shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 dark:border-gray-700
                    hover:border-purple-300 dark:hover:border-purple-600`}
        >
          <div
            className={`flex items-center mb-3 ${
              isLeft ? 'justify-end' : 'justify-start'
            }`}
          >
            {isLeft && (
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 mr-3">
                {year}
              </span>
            )}
            <Icon className="w-6 h-6 text-purple-500" />
            {!isLeft && (
              <span className="text-xs font-bold text-purple-600 dark:text-purple-400 ml-3">
                {year}
              </span>
            )}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

// --- Enhanced Skill Card ---
const SkillCard = ({ icon: Icon, text, color, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-600 dark:text-blue-400',
      border: 'hover:border-blue-400',
      shadow: 'hover:shadow-blue-500/20',
    },
    yellow: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/30',
      text: 'text-yellow-600 dark:text-yellow-400',
      border: 'hover:border-yellow-400',
      shadow: 'hover:shadow-yellow-500/20',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-600 dark:text-green-400',
      border: 'hover:border-green-400',
      shadow: 'hover:shadow-green-500/20',
    },
    indigo: {
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      text: 'text-indigo-600 dark:text-indigo-400',
      border: 'hover:border-indigo-400',
      shadow: 'hover:shadow-indigo-500/20',
    },
    pink: {
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      text: 'text-pink-600 dark:text-pink-400',
      border: 'hover:border-pink-400',
      shadow: 'hover:shadow-pink-500/20',
    },
    red: {
      bg: 'bg-red-100 dark:bg-red-900/30',
      text: 'text-red-600 dark:text-red-400',
      border: 'hover:border-red-400',
      shadow: 'hover:shadow-red-500/20',
    },
  }
  const currentColors = colorClasses[color] || colorClasses.blue // Fallback

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      }}
      className={`group p-5 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-lg hover:shadow-xl ${currentColors.shadow} border border-gray-200 dark:border-gray-700 ${currentColors.border} transition-all duration-300`}
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        glareEnable={true}
        glareMaxOpacity={0.1}
        scale={1.03}
        className="flex items-center space-x-4"
      >
        <div
          className={`p-3 ${currentColors.bg} rounded-lg transition-colors duration-300`}
        >
          <Icon className={`w-8 h-8 ${currentColors.text}`} />
        </div>
        <span className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300">
          {text}
        </span>
      </Tilt>
    </motion.div>
  )
}

// --- Main Component ---
export default function About() {
  const { scrollYProgress } = useScroll()

  // Smoothed scale for background gradient
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]) // Scale faster
  const scale = useSpring(scaleProgress, { stiffness: 150, damping: 40 })

  // Hero parallax effects
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]) // Fade out faster
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -80]) // Move less

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
    // Optional: Add a future/present item
    // { year: "Present", title: "Continuous Learning", description: "Always exploring new technologies and improving skills.", icon: SparklesIcon, isLeft: true },
  ]

  // Skills cards data (Consolidated)
  const skillItems = [
    {
      icon: CodeBracketIcon,
      color: 'blue',
      text: 'JS (ES6+), TypeScript',
    },
    { icon: LightBulbIcon, color: 'yellow', text: 'React, Next.js, Angular' },
    { icon: ServerIcon, color: 'green', text: 'Node.js, Express, APIs' },
    { icon: DocumentTextIcon, color: 'red', text: 'PHP, Laravel, C#' },
    {
      icon: DevicePhoneMobileIcon,
      color: 'pink',
      text: 'Tailwind CSS, Responsive Design',
    },
    { icon: ArrowPathIcon, color: 'indigo', text: 'Git, CI/CD Workflows' },
    // Add database or other key skills if needed
    // { icon: CircleStackIcon, color: 'purple', text: 'SQL & NoSQL Databases' },
  ]

  const headingText = 'About Me'.split('')
  const introText =
    "My name is Luka Partenadze, a passionate Junior Full Stack Developer who loves turning ideas into elegant, scalable web applications. My journey in coding began with curiosity and has grown into a dedication to building digital experiences that are as innovative as they are user-friendly. And by the way, I have the most beautiful girlfriend ever.".split(
      ' '
    )

  return (
    <div className="bg-gray-50 dark:bg-black transition-colors duration-500 overflow-x-hidden">
      <Head>
        <title>About - Luka Partenadze</title>
        <meta
          name="description"
          content="Learn about Luka Partenadze, a passionate Junior Full Stack Developer based in Tbilisi, Georgia."
        />
      </Head>

      <Navbar />

      <main className="pt-16 relative">
        {/* Hero Section */}
        <section className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <motion.div
            style={{ scale }}
            className="absolute inset-0 z-0"
          >
             {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-900/50 dark:via-purple-900/50 dark:to-gray-900 opacity-40 dark:opacity-60" />
            {/* Starfield */}
            <Canvas className="absolute inset-0">
              <StarParticles />
            </Canvas>
          </motion.div>

          {/* Floating 3D Blob */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 opacity-10 dark:opacity-20 z-0 pointer-events-none">
            <Canvas>
              <ambientLight intensity={0.8} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <AnimatedBlob />
            </Canvas>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div style={{ y: yHero, opacity: opacityHero }}>
              {/* Animated Heading */}
              <motion.h1
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-10"
              >
                {headingText.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariant}
                    className={`inline-block ${
                      letter === ' ' ? 'mx-1 md:mx-2' : ''
                    } bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Profile Image with Tilt and Glow */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 0.5,
                }}
                className="inline-block mb-8 md:mb-10 relative"
              >
                <Tilt
                  tiltReverse
                  glareEnable
                  glareMaxOpacity={0.15}
                  glareColor="#ffffff"
                  glarePosition="all"
                  scale={1.05}
                  className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full shadow-2xl group"
                >
                  {/* Subtle background glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" />
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                    <motion.img
                      src="/images/profile.jpg" // Ensure this path is correct
                      alt="Luka Partenadze Profile"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </Tilt>
              </motion.div>

              {/* Animated Intro Text */}
              <motion.p
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }} // Delay after image animates
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                {introText.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariant} // Use letterVariant for words too
                    className={`inline-block mr-1.5 ${
                      word === 'Luka' || word === 'Partenadze'
                        ? 'font-semibold text-purple-600 dark:text-purple-400'
                        : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }} // Delay after text
              >
                <Link href="/contact" passHref legacyBehavior>
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 10px 25px rgba(124, 58, 237, 0.4)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    Let's Connect
                  </motion.a>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 md:w-8 md:h-12 rounded-full border-2 border-gray-500 dark:border-gray-600 flex justify-center items-start p-1 md:p-2"
            >
              <motion.div
                className="w-1 h-2 md:w-1.5 md:h-3 bg-gray-500 dark:bg-gray-600 rounded-full"
                animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }} // Adjusted animation
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

        {/* Journey Timeline Section */}
        <section ref={timelineRef} className="py-24 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(168, 85, 247, 0.5) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          <div className="container mx-auto px-6 max-w-3xl relative z-10">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-16 md:mb-20 text-center"
            >
              My Journey So Far
            </motion.h2>

            {/* Center vertical line - Animated */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
              <div className="sticky top-1/3 h-64"> {/* Adjust stickiness */}
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500 to-blue-500 origin-top"
                    style={{ scaleY: timelineHeight }} // Animate height based on scroll
                  />
                </div>
              </div>
            </div>

            {/* Timeline items */}
            <div className="relative">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  isLeft={item.isLeft}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section - Consolidated & Enhanced */}
        <section className="py-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-16 md:mb-20 text-center"
            >
              Tech Stack & Skills
            </motion.h2>

            {/* Skill Cards Grid */}
            <motion.div
              variants={staggerContainer} // Apply stagger to the grid
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {skillItems.map((item, index) => (
                // Pass index for staggered delay in SkillCard component
                <SkillCard
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  color={item.color}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Animated Aurora Background */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-40 dark:opacity-60">
            <motion.div
              className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-400 rounded-full filter blur-[150px]"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: ['-25%', '0%', '-25%'],
                y: ['-25%', '-10%', '-25%'],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full filter blur-[150px]"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [0, -90, 0],
                x: ['25%', '0%', '25%'],
                y: ['25%', '10%', '25%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 5,
              }}
            />
          </div>

          <div className="container mx-auto px-6 max-w-3xl relative z-10">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-16 text-center"
            >
              My Philosophy
            </motion.h2>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center p-8 md:p-12 rounded-3xl relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              {/* Quote Marks */}
              <span className="absolute top-4 left-6 text-7xl md:text-8xl text-purple-300 dark:text-purple-700 opacity-50 font-serif">
                “
              </span>
              <span className="absolute bottom-4 right-6 text-7xl md:text-8xl text-blue-300 dark:text-blue-700 opacity-50 font-serif">
                ”
              </span>

              <motion.p
                className="text-xl md:text-2xl lg:text-3xl italic text-gray-700 dark:text-gray-300 relative z-10 leading-snug md:leading-normal"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                I believe in continuous learning and creating solutions that not
                only solve problems but also inspire and delight users.
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '40%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 1.2, ease: 'easeOut' }}
                className="h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto my-6 md:my-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-gray-600 dark:text-gray-400 font-medium"
              >
                – Luka Partenadze
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
