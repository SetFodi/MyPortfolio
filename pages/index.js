'use client'
import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useSpring,
  useInView
} from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiLaravel,
  SiDotnet,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit
} from 'react-icons/si'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const skillData = [
  { name: 'JavaScript', icon: <SiJavascript />, category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend' },
  { name: 'HTML', icon: <SiHtml5 />, category: 'frontend' },
  { name: 'CSS', icon: <SiCss3 />, category: 'frontend' },
  { name: 'React', icon: <SiReact />, category: 'frontend' },
  { name: 'Angular', icon: <SiAngular />, category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'frontend' },
  { name: 'Node.js', icon: <SiNodedotjs />, category: 'backend' },
  { name: 'Python', icon: <SiPython />, category: 'backend' },
  { name: 'PHP', icon: <SiPhp />, category: 'backend' },
  { name: 'Laravel', icon: <SiLaravel />, category: 'backend' },
  { name: 'C#', icon: <SiDotnet />, category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'database' },
  { name: 'MySQL', icon: <SiMysql />, category: 'database' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'database' },
  { name: 'Git', icon: <SiGit />, category: 'tools' }
]

const projects = [
  {
    title: 'Syncrolly',
    description:
      'Real-time data synchronization platform built for seamless integration with existing systems and high-performance data transfer.',
    image: '/images/syncrolly.jpg',
    link: 'https://syncrolly.com',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB']
  },
  {
    title: 'Typingy',
    description:
      'Interactive typing speed test platform featuring customizable tests, real-time analytics, and competitive leaderboards.',
    image: '/images/typingy.jpg',
    link: 'https://typingy.live',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB']
  },
  {
    title: 'DevConnect',
    description:
      'Developer collaboration network designed to connect programmers for pair programming, mentorship, and project collaboration.',
    image: '/images/devconnect.jpg',
    link: 'https://github.com/SetFodi/devconnect',
    technologies: ['React', 'JavaScript', 'MongoDB', 'Tailwind CSS']
  }
]

// Enhanced particles config
const particlesInit = async main => {
  await loadFull(main)
}
const particlesOptions = {
  fpsLimit: 60,
  interactivity: {
    events: { 
      onHover: { 
        enable: true, 
        mode: 'repulse',
        parallax: { enable: true, force: 60, smooth: 10 } 
      },
      onClick: { enable: true, mode: 'push' }
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
      push: { quantity: 4 }
    }
  },
  particles: {
    color: { value: ['#6EE7B7', '#3B82F6', '#E879F9'] },
    links: { 
      enable: true, 
      distance: 150, 
      color: '#aaa', 
      opacity: 0.4,
      width: 1,
      triangles: { enable: true, opacity: 0.05 }
    },
    move: { 
      enable: true, 
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" }
    },
    size: { value: { min: 1, max: 5 } },
    opacity: {
      value: 0.7,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.3 }
    }
  }
}

// Enhanced SVG Wave separator
const Wave = ({ flipY = false, className = "", pathFill = "currentColor" }) => (
  <svg
    className={`${flipY ? 'rotate-180' : ''} w-full h-24 ${className}`}
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,32L40,42.7C80,53,160,75,240,85.3C320,96,400,96,480,85.3C560,75,640,53,720,48C800,43,880,53,960,90.7C1040,128,1120,192,1200,197.3C1280,203,1360,149,1400,122.7L1440,96L1440,0L0,0Z"
      fill={pathFill}
      className="transition-all duration-300"
    />
  </svg>
)

// Floating Animation Component
const FloatingElement = ({ children, delay = 0, duration = 3, yOffset = 15, className = "" }) => (
  <motion.div
    className={className}
    animate={{ 
      y: [0, -yOffset, 0],
      rotate: [0, 1, 0, -1, 0] 
    }}
    transition={{ 
      repeat: Infinity, 
      repeatType: "mirror", 
      duration, 
      delay,
      ease: "easeInOut" 
    }}
  >
    {children}
  </motion.div>
)

// Blob animation clip-paths
const blobVariants = {
  one: "M0.32,0.13 C0.47,0.07 0.66,0.05 0.78,0.17 C0.92,0.29 0.88,0.52 0.75,0.66 C0.64,0.78 0.45,0.83 0.31,0.74 C0.17,0.65 0.05,0.47 0.10,0.31 C0.15,0.16 0.17,0.19 0.32,0.13 Z",
  two: "M0.38,0.08 C0.53,0.02 0.62,0.10 0.72,0.22 C0.84,0.34 0.92,0.45 0.82,0.58 C0.72,0.70 0.50,0.78 0.36,0.69 C0.22,0.60 0.09,0.44 0.16,0.28 C0.21,0.13 0.25,0.13 0.38,0.08 Z",
  three: "M0.34,0.10 C0.49,0.04 0.64,0.08 0.76,0.20 C0.88,0.32 0.90,0.48 0.78,0.62 C0.66,0.76 0.48,0.82 0.32,0.72 C0.16,0.62 0.07,0.45 0.12,0.29 C0.17,0.14 0.19,0.16 0.34,0.10 Z"
}

export default function Home() {
  const { scrollY } = useScroll()
  const yHero = useTransform(scrollY, [0, 500], [0, 50])
  const ySkills = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.9])
  
  // For smoother parallax
  const smoothYHero = useSpring(yHero, { stiffness: 100, damping: 30 })
  const smoothYSkills = useSpring(ySkills, { stiffness: 100, damping: 30 })
  
  // Refs for intersection observers
  const skillsSectionRef = useRef(null)
  const skillsInView = useInView(skillsSectionRef, { once: false, amount: 0.1 })
  
  const projectsSectionRef = useRef(null)
  const projectsInView = useInView(projectsSectionRef, { once: false, amount: 0.1 })
  
  const ctaSectionRef = useRef(null)
  const ctaInView = useInView(ctaSectionRef, { once: false, amount: 0.5 })
  
  // For technology floating bubbles in skills section
  const [activeTech, setActiveTech] = useState(null)
  
  const [text] = useTypewriter({
    words: [
      'Full Stack Developer',
      'React Enthusiast',
      'Next.js Ninja',
      'Node.js Lover'
    ],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500
  })
  
  // Animate blob paths
  const [blobState, setBlobState] = useState("one")
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBlobState(prev => {
        if (prev === "one") return "two"
        if (prev === "two") return "three"
        return "one"
      })
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <title>Luka Partenadze | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Portfolio of Luka Partenadze, a passionate Web Developer."
        />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          @keyframes hue-rotate {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes shimmer {
            0% { background-position: -100% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes grain {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-1%, -1%); }
            30% { transform: translate(1%, -2%); }
            50% { transform: translate(-2%, 2%); }
            70% { transform: translate(3%, 1%); }
            90% { transform: translate(1%, 3%); }
          }
          .animate-hue {
            animation: hue-rotate 20s linear infinite;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse 4s ease-in-out infinite;
          }
          .animate-shimmer {
            background: linear-gradient(
              90deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.2) 50%,
              rgba(255,255,255,0) 100%
            );
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
          }
          .grain::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
            opacity: 0.3;
            animation: grain 8s steps(10) infinite;
            pointer-events: none;
          }
          .mask-blob {
            clip-path: url('#mask-blob');
          }
          .mask-blob-animate {
            transition: clip-path 2s ease-in-out;
          }
          .btn-liquid {
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          .btn-liquid::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transform: translateX(-100%);
            transition: transform 0.3s;
            z-index: -1;
          }
          .btn-liquid:hover::before {
            transform: translateX(100%);
          }
          .glass-effect {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .frosted-glass {
            background: rgba(255, 255, 255, 0.07);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
          .text-shadow {
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
          }
          .glow {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
          }
          .glow-text {
            text-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
          }
          .skill-icon {
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
            transition: all 0.3s ease;
          }
          .skill-icon:hover {
            filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.5));
            transform: translateY(-3px);
          }
          .card-shadow {
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
          }
          .card-shadow:hover {
            box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.2);
          }
          .tech-pill {
            transition: all 0.3s ease;
          }
          .tech-pill:hover {
            transform: translateY(-2px) scale(1.05);
          }
          .hover-lift {
            transition: transform 0.3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-5px);
          }
          .gradient-text {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            background-image: linear-gradient(to right, #3B82F6, #8B5CF6, #EC4899);
          }
          .gradient-border {
            position: relative;
            border: double 1px transparent;
            background-image: linear-gradient(white, white), 
                              linear-gradient(to right, #3B82F6, #8B5CF6);
            background-origin: border-box;
            background-clip: padding-box, border-box;
          }
          .dark .gradient-border {
            background-image: linear-gradient(#1F2937, #1F2937), 
                              linear-gradient(to right, #3B82F6, #8B5CF6);
          }
          .bg-grid {
            background-size: 50px 50px;
            background-image: 
              linear-gradient(to right, rgba(209, 213, 219, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(209, 213, 219, 0.1) 1px, transparent 1px);
          }
          .dark .bg-grid {
            background-image: 
              linear-gradient(to right, rgba(55, 65, 81, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(55, 65, 81, 0.1) 1px, transparent 1px);
          }
        `}</style>
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="mask-blob" clipPathUnits="objectBoundingBox">
              <path
                d={blobVariants[blobState]}
                className="transition-all duration-1000 ease-in-out"
              />
            </clipPath>
            <linearGradient id="skill-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feFlood floodColor="#3B82F6" floodOpacity="0.5" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </Head>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-80">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
          />
        </div>
        
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-50 to-white
                        dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-800
                        dark:text-gray-100 transition-colors flex flex-col
                        relative z-10 overflow-hidden grain">
          <Navbar />

          <motion.section
            style={{ 
              y: smoothYHero,
              opacity,
              scale 
            }}
            className="relative pt-28 pb-36 px-4 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row
                            items-center gap-16 relative z-10">
              <div className="flex-1 text-center md:text-left relative">
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute -bottom-10 right-10 w-60 h-60 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.8, 0.6] 
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                {/* Title badge with improved animation */}
                <motion.span 
                  className="inline-block px-4 py-1.5 text-xs font-medium
                           text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 
                           rounded-full mb-5 shadow-sm relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className="relative z-10">
                    {text}
                    <Cursor cursorStyle="|" />
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-blue-200/50 dark:bg-blue-700/50"
                    animate={{ 
                      x: ["-100%", "100%"],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                </motion.span>
                
                {/* Main title with enhanced animation */}
                <motion.h1 
                  className="text-7xl font-extrabold mb-6 gradient-text animate-hue glow-text relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: 0.2
                  }}
                >
                  <span className="inline-block">Luka</span>{" "}
                  <span className="inline-block">Partenadze</span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 1,
                      ease: "easeInOut"
                    }}
                  />
                </motion.h1>
                
                {/* Description with improved typography */}
                <motion.p 
                  className="text-lg mb-10 max-w-xl leading-relaxed text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: 0.5
                  }}
                >
                  Building intuitive, responsive, and scalable web
                  applications with modern technologies and best practices.
                </motion.p>
                
                {/* CTA buttons with enhanced effects */}
                <motion.div 
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.7
                  }}
                >
                  <motion.a
                    href="/projects"
                    className="btn-liquid inline-block bg-gradient-to-r from-blue-600 to-blue-700
                                text-white px-8 py-3 rounded-lg font-semibold shadow-lg
                                transition-all duration-300 overflow-hidden relative group"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">View Projects</span>
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600"
                      initial={{ x: "100%", opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  
                  <motion.a
                    href="/contact"
                    className="btn-liquid inline-block bg-white dark:bg-gray-800 text-blue-600
                                dark:text-blue-400 border border-blue-600 dark:border-blue-500
                                px-8 py-3 rounded-lg font-semibold transition-all duration-300
                                relative group overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <motion.span 
                      className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20"
                      initial={{ y: "100%", opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.div>
              </div>

              {/* Profile image with enhanced animations and effects */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 relative"
              >
                <FloatingElement delay={0.5} duration={6} yOffset={10}>
                  <div className="relative group">
                    {/* Glow effect */}
                    <motion.div 
                      className="absolute -inset-4 bg-gradient-to-r
                                from-blue-500/40 to-purple-500/40 rounded-full
                                blur-2xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5] 
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    />
                    
                    {/* Inner ring */}
                    <motion.div 
                      className="absolute -inset-2 bg-gradient-to-r from-white/80 to-white/40
                                dark:from-gray-800/80 dark:to-gray-800/40 rounded-full shadow-inner"
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity,
                        ease: "linear" 
                      }}
                    />
                    
                    {/* Image container */}
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80
                                  md:w-96 md:h-96 rounded-full overflow-hidden
                                  shadow-2xl border-4 border-white/80
                                  dark:border-gray-800/80 z-10">
                      <Image
                        src="/images/profile.jpg"
                        alt="Luka Partenadze"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 18rem,
                              (max-width: 1024px) 20rem, 24rem"
                      />
                      
                      {/* Shine effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr
                                  from-white/0 via-white/40 to-white/0"
                        initial={{ opacity: 0, x: -200, y: -200 }}
                        animate={{ 
                          opacity: [0, 0.4, 0],
                          x: [200, -200],
                          y: [200, -200]
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity,
                          repeatDelay: 5
                        }}
                      />
                    </div>
                    
                    {/* Floating tech icons with enhanced animations */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: -20, y: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      transition={{
                        delay: 0.8,
                        duration: 0.7,
                        type: "spring",
                        stiffness: 150
                      }}
                      className="absolute -bottom-8 -left-10 bg-white
                                dark:bg-gray-700 rounded-full p-3 shadow-xl
                                border border-gray-200 dark:border-gray-600
                                mask-blob mask-blob-animate hover:scale-110 transition-transform duration-300"
                    >
                      <SiReact className="text-3xl text-blue-500 animate-spin-slow" style={{ animationDuration: '15s' }} />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: 20, y: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      transition={{
                        delay: 1,
                        duration: 0.7,
                        type: "spring",
                        stiffness: 150
                      }}
                      className="absolute -top-3 -right-8 bg-white
                                dark:bg-gray-700 rounded-full p-3.5 shadow-xl
                                border border-gray-200 dark:border-gray-600
                                mask-blob mask-blob-animate hover:scale-110 transition-transform duration-300"
                    >
                      <SiNextdotjs className="text-3xl text-black dark:text-white" />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      transition={{
                        delay: 1.2,
                        duration: 0.7,
                        type: "spring",
                        stiffness: 150
                      }}
                      className="absolute top-1/2 -right-12 transform
                                -translate-y-1/2 bg-white dark:bg-gray-700
                                rounded-full p-3.5 shadow-xl border
                                border-gray-200 dark:border-gray-600
                                mask-blob mask-blob-animate hover:scale-110 transition-transform duration-300"
                    >
                      <SiNodedotjs className="text-3xl text-green-600" />
                    </motion.div>
                  </div>
                </FloatingElement>
              </motion.div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-400/5 dark:bg-purple-400/5 rounded-full blur-3xl" />
          </motion.section>

          <div className="text-gray-100 dark:text-gray-900 relative">
            <Wave flipY className="z-10" />
          </div>

          <motion.section
            ref={skillsSectionRef}
            style={{ y: smoothYSkills }}
            className="py-24 px-4 bg-gray-100 dark:bg-gray-800/50
                      relative overflow-hidden bg-grid"
            id="skills"
          >
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]">
              <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
                {Array(400)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="border-b border-r border-gray-300
                               dark:border-gray-700"
                    ></div>
                  ))}
              </div>
            </div>
            
            {/* Decorative circles */}
            <motion.div 
              className="absolute top-1/4 left-10 w-[500px] h-[500px] border border-blue-200 dark:border-blue-700/30 rounded-full opacity-30 dark:opacity-10"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-10 w-[300px] h-[300px] border border-purple-200 dark:border-purple-700/30 rounded-full opacity-20 dark:opacity-10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [360, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-16"
              >
                <motion.span 
                  className="inline-block px-4 py-1.5 text-xs font-medium
                           text-blue-700 bg-blue-100 rounded-full
                           mb-5 shadow-sm dark:text-blue-300
                           dark:bg-blue-900/40 relative overflow-hidden"
                  initial={{ scale: 0 }}
                  animate={skillsInView ? { scale: 1 } : {}}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.1
                  }}
                >
                  <span className="relative z-10">Technical Toolkit</span>
                  <motion.span 
                    className="absolute inset-0 bg-blue-200/50 dark:bg-blue-700/50"
                    animate={{ 
                      x: ["-100%", "100%"],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                </motion.span>
                
                <motion.h2 
                  className="text-4xl sm:text-5xl font-bold mb-6
                            gradient-text animate-hue relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.2
                  }}
                >
                  Skills & Expertise
                  <motion.span 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 
                              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: "50%" } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.5,
                      ease: "easeInOut"
                    }}
                  />
                </motion.h2>
                
                <motion.p 
                  className="max-w-2xl mx-auto text-gray-600
                            dark:text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.3
                  }}
                >
                  I leverage a range of modern technologies to build
                  robust, maintainable, and visually appealing applications
                  that scale.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                            gap-8 lg:gap-10 mb-20">
                {['frontend', 'backend', 'database', 'tools'].map(
                  (cat, idx) => {
                    const colors = {
                      frontend: 'blue',
                      backend: 'green',
                      database: 'purple',
                      tools: 'orange'
                    }
                    
                    const icons = {
                      frontend: <SiReact />,
                      backend: <SiNodedotjs />,
                      database: <SiMongodb />,
                      tools: <SiGit />
                    }
                    
                    return (
                      <motion.div
                        key={cat}
                        initial={{ opacity: 0, y: 40 }}
                        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          delay: idx * 0.1,
                          duration: 0.7,
                          ease: "easeOut"
                        }}
                        className={`bg-white/90 dark:bg-gray-800/90
                                  backdrop-blur-md rounded-xl p-8
                                  shadow-xl border border-gray-200/50
                                  dark:border-gray-700/50 hover:border-${colors[cat]}-300
                                  dark:hover:border-${colors[cat]}-600
                                  transition-all duration-300 group card-shadow
                                  hover:translate-y-[-5px]`}
                        onMouseEnter={() => setActiveTech(cat)}
                        onMouseLeave={() => setActiveTech(null)}
                      >
                        <h3
                          className={`text-xl font-semibold mb-6 text-${
                            colors[cat]
                          }-600 dark:text-${colors[cat]}-400 flex items-center group-hover:text-${colors[cat]}-700 dark:group-hover:text-${colors[cat]}-300 transition-colors duration-300`}
                        >
                          <motion.span
                            className={`bg-${colors[cat]}-100 dark:bg-${colors[cat]}-900/40
                                      p-2.5 rounded-lg mr-3 relative overflow-hidden`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <motion.span 
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              initial={{ x: "-100%" }}
                              animate={activeTech === cat ? { x: "100%" } : { x: "-100%" }}
                              transition={{ duration: 1 }}
                            />
                            <span className="relative z-10 text-2xl">
                              {icons[cat]}
                            </span>
                          </motion.span>
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                          {skillData
                            .filter(s => s.category === cat)
                            .map((skill, skillIdx) => (
                              <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                  delay: idx * 0.1 + skillIdx * 0.05 + 0.3,
                                  duration: 0.5
                                }}
                                whileHover={{ scale: 1.05, x: 3 }}
                                className="flex items-center gap-3 p-2
                                          rounded-lg hover:bg-gray-50
                                          dark:hover:bg-gray-800/80
                                          transition-all duration-200 group/skill"
                              >
                                <motion.div 
                                  className={`text-2xl text-${colors[cat]}-500 dark:text-${colors[cat]}-400 skill-icon group-hover/skill:text-${colors[cat]}-600 dark:group-hover/skill:text-${colors[cat]}-300 transition-all duration-300`}
                                  whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                                  transition={{ duration: 0.6 }}
                                >
                                  {skill.icon}
                                </motion.div>
                                <span className="font-medium text-gray-800
                                               dark:text-gray-200 text-sm group-hover/skill:text-gray-900
                                               dark:group-hover/skill:text-white transition-colors duration-200">
                                  {skill.name}
                                </span>
                              </motion.div>
                            ))}
                        </div>
                      </motion.div>
                    )
                  }
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-center mt-12"
              >
                <motion.div 
                  className="py-8 px-8 bg-white/70 dark:bg-gray-800/60
                            backdrop-blur-lg rounded-2xl shadow-xl border
                            border-gray-100 dark:border-gray-700/50
                            max-w-3xl mx-auto transform transition-all duration-300
                            hover:scale-[1.01] hover:shadow-2xl"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-xl" />
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-xl" />
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg
                              italic leading-relaxed relative">
                    <span className="absolute -left-4 -top-4 text-5xl opacity-20 text-blue-500">"</span>
                    I specialize in creating responsive, user-friendly
                    applications with clean code and modern architecture.
                    <span className="absolute -right-4 -bottom-4 text-5xl opacity-20 text-blue-500">"</span>
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          <div className="text-white bg-white dark:bg-gray-900 relative">
            <Wave className="z-10" pathFill="currentColor" />
          </div>

          <motion.section
  ref={projectsSectionRef}
  className="py-24 px-4 bg-white dark:bg-gray-900 relative overflow-hidden"
  id="projects"
>
  {/* Soft, subtle background elements instead of the grid */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Subtle gradient orbs */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-[100px] -translate-y-1/2 translate-x-1/3" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-100/20 dark:bg-purple-900/10 blur-[100px] translate-y-1/3 -translate-x-1/4" />
  </div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section heading content remains the same */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={projectsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-16"
    >
      {/* Badge */}
      <motion.span 
        className="inline-block px-4 py-1.5 text-xs
                  sm:text-sm font-medium text-blue-700
                  bg-blue-100 dark:bg-blue-900/40 rounded-full
                  mb-5 shadow-sm dark:text-blue-300 relative overflow-hidden"
        initial={{ scale: 0 }}
        animate={projectsInView ? { scale: 1 } : {}}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 10,
          delay: 0.1
        }}
      >
        <span className="relative z-10">My Work</span>
        <motion.span 
          className="absolute inset-0 bg-blue-200/50 dark:bg-blue-700/50"
          animate={{ 
            x: ["-100%", "100%"],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      </motion.span>
      
      {/* Title */}
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold mb-6
                  gradient-text animate-hue relative"
        initial={{ opacity: 0, y: 20 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: 0.2
        }}
      >
        Featured Projects
        <motion.span 
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          animate={projectsInView ? { width: "50%" } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            ease: "easeInOut"
          }}
        />
      </motion.h2>
      
      {/* Description */}
      <motion.p 
        className="max-w-2xl mx-auto text-gray-600
                  dark:text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: 0.3
        }}
      >
        Explore a selection of my recent work showcasing my technical
        skills and problem-solving approach.
      </motion.p>
    </motion.div>

    {/* Project cards grid - same as before */}
    <div className="grid gap-12 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: i * 0.15,
            duration: 0.7,
            ease: "easeOut"
          }}
        >
          <Tilt
            glareEnable
            glareColor="#ffffff"
            glarePosition="all"
            glareMaxOpacity={0.1}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            scale={1.02}
            transitionSpeed={1500}
            className="h-full bg-white dark:bg-gray-800
                      rounded-2xl overflow-hidden shadow-lg
                      hover:shadow-2xl border border-gray-100/50
                      dark:border-gray-700/50 hover:border-blue-200
                      dark:hover:border-blue-800/50 transition-all
                      duration-300 ease-in-out group"
          >
            <div className="w-full h-56 relative overflow-hidden
                            border-b border-gray-100/50
                            dark:border-gray-700/50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform
                            duration-1000 ease-in-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t
                              from-black/70 via-black/30 to-transparent
                              opacity-0 group-hover:opacity-100
                              transition-opacity duration-300
                              ease-in-out flex items-end">
                <div className="p-6 w-full">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white font-medium text-sm
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 flex items-center"
                  >
                    View details
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.span>
                </div>
              </div>
              
              {/* Corner ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-purple-600 text-white text-xs px-4 py-1 transform translate-x-[30%] translate-y-[50%] rotate-45 shadow-md">
                Featured
              </div>
            </div>

            <div className="p-8 flex flex-col h-[calc(100%-14rem)]">
              <h3 className="text-xl font-semibold mb-3
                             text-gray-800 dark:text-gray-100
                             group-hover:text-blue-600
                             dark:group-hover:text-blue-400
                             transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400
                            mb-5 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-2.5 py-1 text-[0.7rem] font-medium
                                bg-blue-50 dark:bg-blue-900/30
                                text-blue-700 dark:text-blue-300
                                rounded-full shadow-sm tech-pill"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600
                            dark:text-blue-400 font-medium text-sm
                            hover:text-blue-800 dark:hover:text-blue-300
                            transition-colors duration-200 ease-in-out
                            mt-auto group/link"
                whileHover={{ x: 3 }}
              >
                View Project
                <motion.svg
                  className="ml-1.5 w-4 h-4"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </motion.a>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>

    {/* CTA button remains the same */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={projectsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      className="text-center mt-20"
    >
      <motion.a
        href="/projects"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
        }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center px-8 py-3 text-white
                    bg-gradient-to-r from-blue-600 to-blue-700
                    hover:from-blue-700 hover:to-blue-800
                    dark:from-blue-500 dark:to-blue-600
                    dark:hover:from-blue-600 dark:hover:to-blue-700
                    rounded-lg font-semibold
                    shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                    transition-all duration-300 ease-in-out relative overflow-hidden group"
      >
        <span className="relative z-10">View All Projects</span>
        <motion.span 
          className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.svg
          className="ml-2 w-5 h-5 relative z-10"
          animate={{ x: [0, 5, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            repeatDelay: 3
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </motion.svg>
      </motion.a>
    </motion.div>
  </div>
</motion.section>

          <div className="text-gray-100 dark:text-gray-900 relative">
            <Wave flipY className="z-10" pathFill="currentColor" />
          </div>

          <motion.section 
            ref={ctaSectionRef}
            className="py-24 px-4 bg-gradient-to-r
                        from-blue-600 via-indigo-600 to-purple-700
                        text-white relative overflow-hidden"
          >
            {/* Enhanced background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="bbblurry-filter" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feGaussianBlur stdDeviation="40" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
                    </filter>
                  </defs>
                  <g filter="url(#bbblurry-filter)">
                    <ellipse rx="150" ry="150" cx="202.8840405504326" cy="113.90975132560566" fill="white"></ellipse>
                    <ellipse rx="150" ry="150" cx="597.1159594495674" cy="686.0902486743944" fill="white"></ellipse>
                  </g>
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: Math.random() * 300 + 50,
                      height: Math.random() * 300 + 50,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.1
                    }}
                    animate={{
                      y: [0, Math.random() * -150 - 50],
                      opacity: [0.05, 0]
                    }}
                    transition={{
                      duration: Math.random() * 15 + 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h2 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Let's Build Something Amazing Together
                </motion.h2>
                
                <motion.p 
                  className="text-lg sm:text-xl opacity-90 mb-10
                            max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Looking for a developer who can turn your ideas into
                  reality? I'm currently available for freelance projects and
                  collaborations.
                </motion.p>
                
                <div className="flex flex-wrap justify-center gap-5">
                  <motion.a
                    href="/contact"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="px-8 py-3 bg-white text-blue-700
                              hover:bg-gray-100 rounded-lg font-semibold
                              shadow-xl hover:shadow-2xl transform hover:-translate-y-1
                              transition-all duration-300 ease-in-out relative overflow-hidden"
                  >
                    <span className="relative z-10">Contact Me</span>
                    <motion.span 
                      className="absolute inset-0 bg-gray-200 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  
                  <motion.a
                    href="/about"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" 
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="px-8 py-3 bg-transparent border-2 border-white
                              hover:bg-white/10 rounded-lg font-semibold
                              transform hover:-translate-y-1 transition-all
                              duration-300 ease-in-out relative overflow-hidden"
                  >
                    <span className="relative z-10">Learn More About Me</span>
                    <motion.span 
                      className="absolute inset-0 bg-white/10 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <Footer />
        </div>
      </div>
    </>
  )
}